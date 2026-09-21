import React, { useState } from 'react';
import {
  MessageCircle,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Send
} from 'lucide-react';
import { CLINIC_DATA, LOCATIONS, TREATMENTS } from '../data/content';
import { AgendaFormData } from '../types';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { ClinicStatusCard } from '../components/ClinicStatusCard';

export const AgendaPage: React.FC = () => {
  const [formData, setFormData] = useState<AgendaFormData>({
    fullName: '',
    phone: '',
    city: 'San Pedro de Macorís',
    patientStage: 'Adulto',
    treatmentInterest: 'Evaluación Inicial',
    preferredDate: '',
    preferredTimeSlot: 'Mañana',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build polite, structured WhatsApp message
    const message = `Hola Dra. Ruth Esther Navarro, deseo solicitar una cita de evaluación:
• Nombre: ${formData.fullName}
• Teléfono: ${formData.phone}
• Ciudad de preferencia: ${formData.city}
• Etapa del paciente: ${formData.patientStage}
• Tratamiento de interés: ${formData.treatmentInterest}
${formData.preferredDate ? `• Fecha aproximada deseada: ${formData.preferredDate}` : ''}
• Horario sugerido: ${formData.preferredTimeSlot}
${formData.notes ? `• Comentarios: ${formData.notes}` : ''}

Quedo atento/a para coordinar los detalles. ¡Muchas gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${CLINIC_DATA.whatsappRaw}?text=${encodedMessage}`;

    // Mark as submitted to show feedback
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4] text-xs font-semibold text-[#7654B3] mb-4 uppercase">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Coordinación de Citas</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#292735] tracking-tight">
            Agendar Evaluación de Sonrisa
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#62657D] leading-relaxed">
            Completa los datos esenciales a continuación. Al presionar el botón se abrirá WhatsApp con el mensaje estructurado listo para enviar a la doctora.
          </p>
        </div>
      </RevealOnScroll>

      {/* Mandatory Privacy/Clinical Notice */}
      <RevealOnScroll direction="up" delay={80}>
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#F6F2FD] border border-[#D9C9F4] flex items-start gap-3 text-xs sm:text-sm text-[#4C2E78]">
          <AlertCircle className="w-5 h-5 text-[#7654B3] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Aviso importante:</strong> Este formulario se utiliza únicamente para coordinar tu cita a través de WhatsApp; no envíes información clínica sensible ni antecedentes médicos por este medio.
          </p>
        </div>
      </RevealOnScroll>

      {/* Real-time Clinic Status & Schedule */}
      <RevealOnScroll direction="up" delay={100}>
        <div className="mb-10">
          <ClinicStatusCard />
        </div>
      </RevealOnScroll>

      {/* Main Form Card */}
      <RevealOnScroll direction="up" delay={120}>
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D9C9F4]/70 shadow-[0_10px_35px_rgba(76,46,120,0.06)] relative overflow-hidden">
          
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292735]">
                  ¡Mensaje preparado con éxito!
                </h2>
                <p className="text-sm text-[#62657D] max-w-md mx-auto mt-2">
                  Se ha abierto la conversación de WhatsApp con tu solicitud prellenada. Si tu navegador bloqueó la ventana emergente, haz clic en el botón de abajo:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Continuar a WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full text-xs font-semibold text-[#4C2E78] bg-[#F6F2FD] hover:bg-[#D9C9F4]/40 transition-colors"
                >
                  Modificar datos
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nombre completo */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#292735] mb-2">
                    Nombre completo <span className="text-[#7654B3]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="Ej. María Pérez"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFBFE] border border-[#D9C9F4] focus:border-[#7654B3] focus:ring-2 focus:ring-[#7654B3]/20 text-sm text-[#292735] transition-colors outline-none"
                  />
                </div>

                {/* Teléfono / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#292735] mb-2">
                    Teléfono / WhatsApp <span className="text-[#7654B3]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Ej. 809-555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFBFE] border border-[#D9C9F4] focus:border-[#7654B3] focus:ring-2 focus:ring-[#7654B3]/20 text-sm text-[#292735] transition-colors outline-none"
                  />
                </div>

                {/* Ciudad de consulta */}
                <div>
                  <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-[#292735] mb-2">
                    Ciudad de preferencia <span className="text-[#7654B3]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFBFE] border border-[#D9C9F4] focus:border-[#7654B3] focus:ring-2 focus:ring-[#7654B3]/20 text-sm text-[#292735] transition-colors outline-none appearance-none"
                    >
                      {LOCATIONS.map((loc) => (
                        <option key={loc.name} value={loc.name}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                    <MapPin className="w-4 h-4 text-[#7654B3] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Etapa del paciente */}
                <div>
                  <label htmlFor="patientStage" className="block text-xs font-bold uppercase tracking-wider text-[#292735] mb-2">
                    Etapa del paciente <span className="text-[#7654B3]">*</span>
                  </label>
                  <select
                    id="patientStage"
                    value={formData.patientStage}
                    onChange={(e) => setFormData({ ...formData, patientStage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFBFE] border border-[#D9C9F4] focus:border-[#7654B3] focus:ring-2 focus:ring-[#7654B3]/20 text-sm text-[#292735] transition-colors outline-none"
                  >
                    <option value="Infantil / Niños (6-11 años)">Infantil / Niños (6-11 años)</option>
                    <option value="Adolescente (12-18 años)">Adolescente (12-18 años)</option>
                    <option value="Adulto (18+ años)">Adulto (18+ años)</option>
                  </select>
                </div>

                {/* Tratamiento o motivo */}
                <div>
                  <label htmlFor="treatmentInterest" className="block text-xs font-bold uppercase tracking-wider text-[#292735] mb-2">
                    Motivo de consulta
                  </label>
                  <div className="relative">
                    <select
                      id="treatmentInterest"
                      value={formData.treatmentInterest}
                      onChange={(e) => setFormData({ ...formData, treatmentInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFBFE] border border-[#D9C9F4] focus:border-[#7654B3] focus:ring-2 focus:ring-[#7654B3]/20 text-sm text-[#292735] transition-colors outline-none appearance-none"
                    >
                      <option value="Evaluación general de ortodoncia">Evaluación general de ortodoncia</option>
                      {TREATMENTS.map((tr) => (
                        <option key={tr.id} value={tr.title}>
                          {tr.title}
                        </option>
                      ))}
                      <option value="Segunda opinión clínica">Segunda opinión clínica</option>
                      <option value="Retenedores o control">Retenedores o control</option>
                    </select>
                    <Sparkles className="w-4 h-4 text-[#7654B3] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Horario sugerido */}
                <div>
                  <label htmlFor="preferredTimeSlot" className="block text-xs font-bold uppercase tracking-wider text-[#292735] mb-2">
                    Preferencia de horario
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTimeSlot"
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFBFE] border border-[#D9C9F4] focus:border-[#7654B3] focus:ring-2 focus:ring-[#7654B3]/20 text-sm text-[#292735] transition-colors outline-none appearance-none"
                    >
                      <option value="Mañana (8:00 AM - 12:00 PM)">Mañana (8:00 AM - 12:00 PM)</option>
                      <option value="Tarde (2:00 PM - 6:00 PM)">Tarde (2:00 PM - 6:00 PM)</option>
                      <option value="Flexible según disponibilidad">Flexible según disponibilidad</option>
                    </select>
                    <Clock className="w-4 h-4 text-[#7654B3] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Comentarios o notas */}
              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-[#292735] mb-2">
                  Notas breves o consulta adicional (opcional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Indica si es para ti o tu hijo/a, o si tienes alguna preferencia particular."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FCFBFE] border border-[#D9C9F4] focus:border-[#7654B3] focus:ring-2 focus:ring-[#7654B3]/20 text-sm text-[#292735] transition-colors outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="btn-enviar-agenda"
                  className="w-full py-4 px-8 rounded-full text-base font-bold text-white bg-[#7654B3] hover:bg-[#4C2E78] active:scale-[0.99] transition-all shadow-lg shadow-[#7654B3]/25 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#CDAEF5]" />
                  <span>Enviar y Coordinar por WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-[#62657D] mt-3">
                  Sin intermediarios ni registros innecesarios. Conversación directa con el equipo de la Dra. Ruth Navarro.
                </p>
              </div>

            </form>
          )}

        </div>
      </RevealOnScroll>

    </div>
  );
};
