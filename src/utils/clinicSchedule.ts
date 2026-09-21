import { useState, useEffect } from 'react';

export interface DaySchedule {
  dayName: string;
  shortName: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  openTime: string; // '08:00'
  closeTime: string; // '18:00'
  isOpen: boolean;
  formattedHours: string;
}

export interface ClinicStatus {
  isOpen: boolean;
  statusTitle: string; // "Abierto ahora" | "Cerrado ahora"
  statusSubtext: string; // "Atendiendo consultas hasta las 6:00 PM" | "Abre mañana a las 8:00 AM"
  badgeColor: 'emerald' | 'amber';
  currentTimeString: string; // "2:15 PM"
  currentDayName: string; // "Domingo"
  timeZoneLabel: string; // "Hora Rep. Dominicana (GMT-4)"
  scheduleList: DaySchedule[];
  nextOpeningMessage: string;
  reassuranceNotice: string;
}

export const CLINIC_SCHEDULE_CONFIG: DaySchedule[] = [
  {
    dayName: 'Lunes',
    shortName: 'Lun',
    dayIndex: 1,
    openTime: '08:00',
    closeTime: '18:00',
    isOpen: true,
    formattedHours: '8:00 AM - 6:00 PM',
  },
  {
    dayName: 'Martes',
    shortName: 'Mar',
    dayIndex: 2,
    openTime: '08:00',
    closeTime: '18:00',
    isOpen: true,
    formattedHours: '8:00 AM - 6:00 PM',
  },
  {
    dayName: 'Miércoles',
    shortName: 'Mié',
    dayIndex: 3,
    openTime: '08:00',
    closeTime: '18:00',
    isOpen: true,
    formattedHours: '8:00 AM - 6:00 PM',
  },
  {
    dayName: 'Jueves',
    shortName: 'Jue',
    dayIndex: 4,
    openTime: '08:00',
    closeTime: '18:00',
    isOpen: true,
    formattedHours: '8:00 AM - 6:00 PM',
  },
  {
    dayName: 'Viernes',
    shortName: 'Vie',
    dayIndex: 5,
    openTime: '08:00',
    closeTime: '18:00',
    isOpen: true,
    formattedHours: '8:00 AM - 6:00 PM',
  },
  {
    dayName: 'Sábado',
    shortName: 'Sáb',
    dayIndex: 6,
    openTime: '08:30',
    closeTime: '13:00',
    isOpen: true,
    formattedHours: '8:30 AM - 1:00 PM',
  },
  {
    dayName: 'Domingo',
    shortName: 'Dom',
    dayIndex: 0,
    openTime: '',
    closeTime: '',
    isOpen: false,
    formattedHours: 'Cerrado (Recepción vía WhatsApp)',
  },
];

/**
 * Returns current date and time components in Dominican Republic time (America/Santo_Domingo, AST UTC-4)
 */
function getClinicZonedDate(date: Date = new Date()) {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Santo_Domingo',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(date);
    const getPart = (type: string) => {
      const part = parts.find((p) => p.type === type);
      return part ? parseInt(part.value, 10) : 0;
    };

    const year = getPart('year');
    const month = getPart('month') - 1;
    const day = getPart('day');
    let hour = getPart('hour');
    // hour 24 check
    if (hour === 24) hour = 0;
    const minute = getPart('minute');
    const second = getPart('second');

    // Create a local representation reflecting DR time
    const drDate = new Date(year, month, day, hour, minute, second);
    return {
      dayOfWeek: drDate.getDay(), // 0 = Sunday, 1 = Monday, ...
      hour,
      minute,
      totalMinutes: hour * 60 + minute,
      drDate,
    };
  } catch {
    // Fallback to client's local time if timezone format fails
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return {
      dayOfWeek,
      hour,
      minute,
      totalMinutes: hour * 60 + minute,
      drDate: date,
    };
  }
}

/**
 * Converts 'HH:MM' string to total minutes since midnight
 */
function timeToMinutes(timeStr: string): number {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map((v) => parseInt(v, 10));
  return h * 60 + (m || 0);
}

/**
 * Formats a 24h 'HH:MM' string into a patient-friendly 12h representation (e.g. '8:00 AM' or '6:00 PM')
 */
function format12h(timeStr: string): string {
  if (!timeStr) return '';
  const [hStr, mStr] = timeStr.split(':');
  let h = parseInt(hStr, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${mStr} ${ampm}`;
}

/**
 * Computes the real-time clinic status based on the current time and day
 */
export function calculateClinicStatus(currentDate: Date = new Date()): ClinicStatus {
  const { dayOfWeek, hour, minute, totalMinutes } = getClinicZonedDate(currentDate);

  // Find today's schedule config
  const todayConfig = CLINIC_SCHEDULE_CONFIG.find((c) => c.dayIndex === dayOfWeek) || CLINIC_SCHEDULE_CONFIG[6];
  
  let isOpen = false;
  let statusTitle = 'Cerrado ahora';
  let statusSubtext = '';
  let nextOpeningMessage = '';

  const openMinutes = todayConfig.isOpen ? timeToMinutes(todayConfig.openTime) : 0;
  const closeMinutes = todayConfig.isOpen ? timeToMinutes(todayConfig.closeTime) : 0;

  if (todayConfig.isOpen && totalMinutes >= openMinutes && totalMinutes < closeMinutes) {
    // Currently Open
    isOpen = true;
    statusTitle = 'Abierto ahora';
    const closeTime12h = format12h(todayConfig.closeTime);
    statusSubtext = `Atendiendo consultas hasta las ${closeTime12h}`;
    nextOpeningMessage = `Cierre programado a las ${closeTime12h}`;
  } else if (todayConfig.isOpen && totalMinutes < openMinutes) {
    // Today will open later
    isOpen = false;
    statusTitle = 'Cerrado ahora';
    const openTime12h = format12h(todayConfig.openTime);
    statusSubtext = `Abre hoy a las ${openTime12h}`;
    nextOpeningMessage = `Abre hoy a las ${openTime12h}`;
  } else {
    // Today is closed or already passed closing hours. Find next open day:
    isOpen = false;
    statusTitle = 'Cerrado ahora';
    
    // Look ahead up to 7 days
    let daysAhead = 1;
    let nextOpenDay: DaySchedule | null = null;
    while (daysAhead <= 7) {
      const checkDayIndex = (dayOfWeek + daysAhead) % 7;
      const config = CLINIC_SCHEDULE_CONFIG.find((c) => c.dayIndex === checkDayIndex);
      if (config && config.isOpen) {
        nextOpenDay = config;
        break;
      }
      daysAhead++;
    }

    if (nextOpenDay) {
      const openTime12h = format12h(nextOpenDay.openTime);
      if (daysAhead === 1) {
        statusSubtext = `Abre mañana a las ${openTime12h}`;
        nextOpeningMessage = `Próxima apertura: Mañana (${nextOpenDay.dayName}) a las ${openTime12h}`;
      } else {
        statusSubtext = `Abre el ${nextOpenDay.dayName.toLowerCase()} a las ${openTime12h}`;
        nextOpeningMessage = `Próxima apertura: ${nextOpenDay.dayName} a las ${openTime12h}`;
      }
    } else {
      statusSubtext = 'Consultas previa cita por WhatsApp';
      nextOpeningMessage = 'Atención programada previa cita';
    }
  }

  // Format current 12h time string
  let h12 = hour % 12;
  if (h12 === 0) h12 = 12;
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const minuteFormatted = minute < 10 ? `0${minute}` : `${minute}`;
  const currentTimeString = `${h12}:${minuteFormatted} ${ampm}`;

  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const currentDayName = dayNames[dayOfWeek];

  return {
    isOpen,
    statusTitle,
    statusSubtext,
    badgeColor: isOpen ? 'emerald' : 'amber',
    currentTimeString,
    currentDayName,
    timeZoneLabel: 'Hora local en República Dominicana',
    scheduleList: CLINIC_SCHEDULE_CONFIG,
    nextOpeningMessage,
    reassuranceNotice: 'Puedes enviar tu solicitud de cita o consulta en cualquier momento por WhatsApp y te responderemos en el próximo horario hábil.',
  };
}

/**
 * Custom React hook that evaluates clinic status every 30 seconds
 */
export function useClinicStatus(): ClinicStatus {
  const [status, setStatus] = useState<ClinicStatus>(() => calculateClinicStatus());

  useEffect(() => {
    // Initial evaluation
    setStatus(calculateClinicStatus());

    // Update every 30 seconds so real-time open/close transitions occur seamlessly
    const interval = setInterval(() => {
      setStatus(calculateClinicStatus());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return status;
}
