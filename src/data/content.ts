import { TreatmentItem, LifeStage, ClinicalCase, FAQItem, LocationInfo } from '../types';

export const CLINIC_DATA = {
  doctorName: 'Dra. Ruth Esther Navarro',
  specialty: 'Ortodoncia y Ortopedia Maxilofacial',
  teachingRole: 'Docente en la Universidad Central del Este (UCE)',
  whatsappNumber: '+1 (829) 765-9989',
  whatsappRaw: '18297659989',
  whatsappUrl: 'https://wa.me/18297659989',
  email: 'ruthenavarro@hotmail.com',
  instagramHandle: '@draruthenavarro',
  instagramUrl: 'https://www.instagram.com/draruthenavarro/',
  citiesList: ['San Pedro de Macorís', 'Higüey', 'La Romana'],
  primaryTagline: 'Tu sonrisa merece un plan personalizado.',
  subTagline: 'Diagnóstico riguroso y biomecánica avanzada para armonía funcional y estética.',
  positioningQuote: 'Cada sonrisa evoluciona de manera particular; nuestro deber clínico es guiarla con ciencia, honestidad y respeto biológico.',
};

export const LOCATIONS: LocationInfo[] = [
  {
    name: 'San Pedro de Macorís',
    note: 'Consultas programadas previa cita',
    available: true,
  },
  {
    name: 'Higüey',
    note: 'Atención especializada coordinada por WhatsApp',
    available: true,
  },
  {
    name: 'La Romana',
    note: 'Evaluaciones y seguimiento periódico',
    available: true,
  },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    shortDescription: 'Alineación y corrección de la posición dental para armonizar la mordida y la sonrisa en adolescentes y adultos.',
    fullDescription: 'Tratamiento enfocado en devolver la correcta relación entre los dientes superiores e inferiores, mejorando tanto la funcionalidad masticatoria como la estética facial. Cada plan se diseña tras un estudio individualizado de la anatomía de cada paciente.',
    targetAudience: 'Adolescentes y Adultos',
    iconName: 'Sparkles',
    keyAspects: [
      'Estudio anatómico y fotográfico previo',
      'Corrección de apiñamiento o espaciamientos',
      'Mejora funcional de la oclusión',
      'Planificación según los objetivos del paciente'
    ]
  },
  {
    id: 'ortodoncia-interceptiva',
    title: 'Ortodoncia Interceptiva',
    shortDescription: 'Detección y orientación temprana de anomalías en el recambio dental antes de que se consoliden.',
    fullDescription: 'Intervención oportuna durante la infancia para guiar la erupción de las piezas definitivas, corregir hábitos y prevenir discrepancias mayores que requerirían tratamientos más complejos en la adolescencia.',
    targetAudience: 'Niños en etapa de crecimiento',
    iconName: 'ShieldCheck',
    keyAspects: [
      'Monitoreo del recambio de dientes de leche',
      'Orientación adecuada del espacio dental',
      'Intercepción de hábitos perjudiciales',
      'Tratamiento oportuno y conservador'
    ]
  },
  {
    id: 'ortopedia-maxilofacial',
    title: 'Ortopedia Maxilofacial',
    shortDescription: 'Estímulo o redirección del crecimiento armónico de los maxilares durante la fase activa de desarrollo óseo.',
    fullDescription: 'Especialidad orientada a equilibrar las proporciones de los huesos maxilares y la mandíbula en pacientes en crecimiento. Permite armonizar el perfil facial y asegurar una base ósea saludable para la mordida.',
    targetAudience: 'Niños y preadolescentes en crecimiento activo',
    iconName: 'Activity',
    keyAspects: [
      'Aprovechamiento de los picos de crecimiento',
      'Equilibrio óseo entre maxilar y mandíbula',
      'Optimización de la función respiratoria y masticatoria',
      'Enfoque preventivo y estructurado'
    ]
  },
  {
    id: 'ortodoncia-quirurgica',
    title: 'Ortodoncia Quirúrgica',
    shortDescription: 'Planificación ortodóncica coordinada para pacientes adultos con discrepancias esqueléticas severas.',
    fullDescription: 'Abordaje integral en pacientes cuyo crecimiento ha finalizado y presentan diferencias significativas entre los maxilares. La ortodoncia alinea las piezas dentales en preparación para la corrección esquelética correspondiente.',
    targetAudience: 'Adultos con discrepancias esqueléticas',
    iconName: 'Layers',
    keyAspects: [
      'Coordinación multidisciplinaria cuidadosa',
      'Fase previa de alineación y descompensación',
      'Estricto seguimiento post-operatorio',
      'Estabilidad funcional a largo plazo'
    ]
  },
  {
    id: 'evaluacion-inicial',
    title: 'Evaluación Inicial y Diagnóstico',
    shortDescription: 'Examen clínico integral para conocer el estado de tu sonrisa y trazar el camino más conveniente.',
    fullDescription: 'El primer paso esencial. Durante esta consulta, la Dra. Ruth realiza una valoración visual, analiza antecedentes, escucha tus inquietudes y explica de forma clara y honesta las alternativas disponibles.',
    targetAudience: 'Todas las edades',
    iconName: 'CheckCircle2',
    keyAspects: [
      'Conversación cercana y sin prisas',
      'Valoración clínica de la mordida y perfil',
      'Explicación transparente de opciones',
      'Respuesta a todas las dudas de la familia'
    ]
  },
  {
    id: 'seguimiento-retencion',
    title: 'Seguimiento y Retención',
    shortDescription: 'Cuidados y monitoreo continuo para mantener los resultados logrados tras el retiro de la ortodoncia.',
    fullDescription: 'Los dientes tienen memoria biológica. La fase de retención y las revisiones periódicas aseguran que la alineación y la mordida conseguidas se mantengan estables y saludables con el paso del tiempo.',
    targetAudience: 'Pacientes que concluyeron tratamiento activo',
    iconName: 'HeartHandshake',
    keyAspects: [
      'Planificación de la retención personalizada',
      'Monitoreo periódico de estabilidad',
      'Cuidado y adaptación de retenedores',
      'Acompañamiento a largo plazo'
    ]
  }
];

export const LIFE_STAGES: LifeStage[] = [
  {
    id: 'ninos',
    title: 'Niños',
    subtitle: 'Crecimiento y desarrollo guiado',
    description: 'La infancia es el momento idóneo para supervisar el desarrollo de los maxilares y la erupción de los dientes permanentes. Detectar una alteración a tiempo permite tratamientos más simples y efectivos.',
    focus: [
      'Evaluación del crecimiento óseo y facial',
      'Supervisión del recambio dental',
      'Detección temprana de mordidas cruzadas o abiertas',
      'Atención cálida, respetuosa y sin miedo para los pequeños'
    ],
    recommendedAge: 'A partir de los 6 a 7 años'
  },
  {
    id: 'adolescentes',
    title: 'Adolescentes',
    subtitle: 'Corrección, alineación y seguridad',
    description: 'Durante la adolescencia se consolida la dentición definitiva. Es la etapa ideal para corregir la alineación dental y armonizar la sonrisa, favoreciendo su autoestima y salud bucal para el futuro.',
    focus: [
      'Corrección de apiñamiento y mordidas complejas',
      'Planes estructurados y adaptados a su ritmo de vida',
      'Acompañamiento motivacional y refuerzo de higiene',
      'Resultados funcionales y estéticos duraderos'
    ],
    recommendedAge: 'Entre los 11 y 17 años'
  },
  {
    id: 'adultos',
    title: 'Adultos',
    subtitle: 'Alternativas adaptadas a tus objetivos',
    description: 'Nunca es tarde para sonreír con tranquilidad y comodidad. En la edad adulta, la ortodoncia soluciona desgastes funcionales, apiñamientos progresivos o prepara la boca para rehabilitaciones.',
    focus: [
      'Tratamientos planificados según tus compromisos laborales',
      'Mejora de la función masticatoria y salud periodontal',
      'Soluciones para apiñamientos desarrollados con los años',
      'Atención discreta, profesional y respetuosa'
    ],
    recommendedAge: 'Cualquier edad adulta'
  }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'caso-1',
    title: 'Alineación y corrección de arco dental (Antes y Después)',
    category: 'Ortodoncia fija',
    imageSrc: '/images/case-1.png',
    description: 'Comparativa clínica de evolución con corrección de apiñamiento anterior y alineación armónica de la oclusión.',
    disclaimer: 'Caso clínico publicado con la debida autorización. Créditos: @draruthenavarro.'
  },
  {
    id: 'caso-2',
    title: 'Cierre de diastema anterosuperior y nivelación',
    category: 'Ortodoncia correctiva',
    imageSrc: '/images/case-2.png',
    description: 'Seguimiento de cierre de espacios interdentales mediante aparatología fija y ligaduras elastoméricas.',
    disclaimer: 'Caso clínico publicado con la debida autorización. Créditos: @draruthenavarro.'
  },
  {
    id: 'caso-3',
    title: 'Resolución de apiñamiento severo y armonización de sonrisa',
    category: 'Ortodoncia funcional y estética',
    imageSrc: '/images/case-3.png',
    description: 'Tratamiento de corrección de apiñamiento bidental logrando un arco nivelado y una sonrisa estética y funcional.',
    disclaimer: 'Caso clínico publicado con la debida autorización. Créditos: @draruthenavarro.'
  }
];

export const CARE_PROCESS = [
  {
    step: '01',
    title: 'Solicita tu cita',
    description: 'Escríbenos por WhatsApp con tu nombre y ciudad de preferencia. Coordinamos contigo el espacio ideal sin complicaciones.'
  },
  {
    step: '02',
    title: 'Evaluación inicial',
    description: 'La Dra. Ruth realiza una revisión clínica detallada de tu mordida, perfil y anatomía bucal en un ambiente cómodo.'
  },
  {
    step: '03',
    title: 'Explicamos alternativas',
    description: 'Conversamos con total claridad sobre lo observado, resolviendo tus inquietudes con honestidad y respaldo profesional.'
  },
  {
    step: '04',
    title: 'Plan personalizado',
    description: 'Diseñamos la estrategia adecuada para tu etapa de vida o la de tu hijo, con objetivos definidos y realistas.'
  },
  {
    step: '05',
    title: 'Seguimiento continuo',
    description: 'Acompañamos cada fase del tratamiento y la posterior etapa de retención para asegurar una sonrisa sana y estable.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'edad-evaluacion',
    question: '¿A qué edad se recomienda llevar a un niño a su primera evaluación de ortodoncia?',
    answer: 'La Asociación y los consensos internacionales recomiendan una primera revisión de ortodoncia y ortopedia maxilofacial alrededor de los 6 a 7 años. En esta etapa se puede evaluar la dirección de crecimiento de los maxilares y la erupción de los primeros molares permanentes, permitiendo interceptar a tiempo anomalías óseas o de espacio.'
  },
  {
    id: 'ciudades-atencion',
    question: '¿En cuáles ciudades atiende la Dra. Ruth Esther Navarro?',
    answer: 'La Dra. Ruth atiende pacientes previa cita en tres localidades de República Dominicana: San Pedro de Macorís, Higüey y La Romana. Los días y consultorios específicos se coordinan directamente a través de WhatsApp según la localidad solicitada.'
  },
  {
    id: 'como-agendar',
    question: '¿Cómo puedo agendar una evaluación inicial?',
    answer: 'El canal principal y más directo es WhatsApp (+1 829-765-9989). Puedes enviar un mensaje indicando tu nombre, la ciudad donde deseas la cita y la persona que consultará. Te responderemos para acordar el día y los detalles de tu consulta.'
  },
  {
    id: 'que-esperar-primera-cita',
    question: '¿Qué se realiza durante la primera consulta de evaluación?',
    answer: 'Es una consulta dedicada al diagnóstico y al diálogo. La doctora examina la mordida, la alineación dental, las proporciones faciales y escucha tus motivos de consulta. Si son necesarios estudios radiográficos complementarios, se indicarán con claridad antes de iniciar cualquier tratamiento.'
  },
  {
    id: 'edad-adulta',
    question: '¿Puedo realizarme ortodoncia si ya soy adulto?',
    answer: '¡Por supuesto! La biología ósea permite mover los dientes en cualquier etapa de la vida siempre que las encías y el hueso de soporte estén saludables. Hoy en día, una gran proporción de los pacientes de ortodoncia son adultos que buscan mejorar tanto su salud masticatoria como la estética de su sonrisa.'
  },
  {
    id: 'docencia-uce',
    question: '¿Qué representa la labor docente de la doctora en la UCE?',
    answer: 'Su actividad docente en la Universidad Central del Este (UCE) refleja un compromiso constante con la actualización científica, la formación ética de nuevos profesionales y el rigor metodológico en cada diagnóstico clínico.'
  }
];

export const CORE_VALUES = [
  {
    title: 'Evaluación personalizada',
    description: 'No existen dos sonrisas idénticas. Cada plan se traza minuciosamente sobre la anatomía, objetivos y salud individual de cada paciente.'
  },
  {
    title: 'Acompañamiento por etapa de vida',
    description: 'Atención adaptada con empatía: lenguaje amigable para los más pequeños, comprensión para los adolescentes y rigor práctico para adultos.'
  },
  {
    title: 'Comunicación clara y transparente',
    description: 'Explicaciones directas, honestas y comprensibles sobre cada paso del tratamiento, sin falsas expectativas ni tecnicismos innecesarios.'
  }
];
