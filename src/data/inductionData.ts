import { Apprentice, CaseStudy, EvaluationQuestion, RegulationItem } from '../types/induction';

export const INSTITUTIONAL_INFO = {
  name: 'Servicio Nacional de Aprendizaje - SENA',
  motto: 'Conocimiento y emprendimiento para todos los colombianos',
  founder: 'Rodolfo Martínez Tono',
  foundationDate: '21 de junio de 1957',
  decree: 'Decreto Ley 118 de 1957',
  mission: 'El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.',
  vision: 'Para el 2026, el SENA se consolidará como una entidad referente de formación profesional integral, reconocida nacional e internacionalmente por su pertinencia, calidad, innovación y su contribución decisiva a la justicia social y ambiental, el empleo digno y la productividad de Colombia.',
  coreValues: [
    { title: 'Respeto', desc: 'Reconocer el valor inherente de cada persona y del entorno en los ambientes de formación.' },
    { title: 'Libre Pensamiento', desc: 'Promover el debate constructivo, la creatividad y la diversidad de ideas.' },
    { title: 'Liderazgo Transformador', desc: 'Inspirar a través del ejemplo para generar impacto positivo en el sector productivo.' },
    { title: 'Solidaridad', desc: 'Trabajar de manera colaborativa por el bienestar colectivo y el progreso de las comunidades.' },
    { title: 'Justicia y Equidad', desc: 'Garantizar el acceso inclusivo a oportunidades de formación sin discriminación.' },
    { title: 'Transparencia', desc: 'Actuar con honestidad, integridad y rendición de cuentas en cada proceso formativo.' }
  ],
  symbols: [
    {
      id: 'shield',
      name: 'El Escudo del SENA',
      subtitle: 'Símbolo de los tres sectores productivos',
      description: 'El escudo del SENA representa los tres sectores de la economía nacional que impulsan el desarrollo de Colombia a través de la formación profesional.',
      elements: [
        { title: 'Rueda dentada (Engranaje)', meaning: 'Representa el sector de la industria y la construcción.' },
        { title: 'El Caduceo con alas', meaning: 'Representa el sector de comercio y servicios.' },
        { title: 'El Café / Espiga de trigo', meaning: 'Representa el sector primario y agropecuario.' }
      ]
    },
    {
      id: 'flag',
      name: 'La Bandera del SENA',
      subtitle: 'Pureza, paz y superación',
      description: 'De color blanco puro con el escudo del SENA bordado o impreso en el centro. Simboliza la paz, la tranquilidad, el libre pensamiento y la fraternidad de la comunidad de aprendices colombianos.',
      elements: [
        { title: 'Fondo Blanco', meaning: 'Paz, transparencia, objetividad y unión de todos los colombianos.' },
        { title: 'Escudo Centrado', meaning: 'La formación integral como núcleo dinamizador de la sociedad.' }
      ]
    },
    {
      id: 'logo',
      name: 'El Logotipo Institucional',
      subtitle: 'El caminante hacia el porvenir',
      description: 'Representa de manera gráfica a un aprendiz en movimiento que avanza sobre un sendero hacia sus metas profesionales y personales, construyendo su propio camino.',
      elements: [
        { title: 'La figura humana estilizada', meaning: 'El aprendiz SENA como centro del proceso formativo.' },
        { title: 'El camino ascendente', meaning: 'La trayectoria de aprendizaje continuo y desarrollo profesional.' }
      ]
    }
  ],
  anthem: {
    title: 'Himno del SENA',
    lyricsBy: 'Luis Alfredo Osorio',
    musicBy: 'Daniel Marlez',
    chorus: 'Estudiantes del SENA adelante\npor Colombia luchad con amor\ncon el ánimo noble y radiante\ntransformemos el mundo en mejor.',
    stanzas: [
      {
        number: 1,
        text: 'De la patria el futuro destino,\nen las manos del joven está,\nel trabajo es el seguro camino,\nque la paz y el progreso nos da.'
      },
      {
        number: 2,
        text: 'En la forja del SENA se forman,\nhombres libres que saben triunfar,\ncon la ciencia y la técnica adoran,\na la patria que habrán de exaltar.'
      },
      {
        number: 3,
        text: 'Hoy la patria nos llama a la lid,\ncon esfuerzo, tesón y valor,\ny en las aulas del SENA se forja,\nuna patria más grande y mejor.'
      }
    ]
  }
};

export const REGULATIONS: RegulationItem[] = [
  // ==========================================
  // CAPÍTULO I: PRINCIPIOS Y DEFINICIONES
  // ==========================================
  {
    id: 'prin-1',
    type: 'principio',
    chapter: 'Capítulo I',
    orderIndex: 1,
    article: 'Art. 2',
    title: 'Dignidad Humana e Inclusión',
    description: 'La formación profesional integral se fundamenta en el respeto irrestricto a la dignidad humana, la equidad de género, la interculturalidad y la inclusión efectiva de toda la población colombiana.',
    category: 'Principios',
    consequenceOrImportance: 'Pilar filosófico rector: toda acción formativa debe salvaguardar la dignidad y los derechos humanos.'
  },
  {
    id: 'prin-2',
    type: 'principio',
    chapter: 'Capítulo I',
    orderIndex: 2,
    article: 'Art. 4',
    title: 'Enfoque Diferencial y Ajustes Razonables',
    description: 'Reconocimiento y atención específica a poblaciones en situación de vulnerabilidad o discapacidad, garantizando adaptaciones curriculares, tecnológicas y pedagógicas pertinentes.',
    category: 'Principios',
    consequenceOrImportance: 'Asegura igualdad de oportunidades reales y acceso equitativo al conocimiento.'
  },
  {
    id: 'prin-3',
    type: 'principio',
    chapter: 'Capítulo I',
    orderIndex: 3,
    article: 'Art. 5',
    title: 'Autonomía y Corresponsabilidad Educativa',
    description: 'El aprendiz es el gestor principal de su propio aprendizaje, actuando con autodisciplina, pensamiento crítico y compromiso solidario con sus compañeros e instructores.',
    category: 'Principios',
    consequenceOrImportance: 'Promueve la madurez profesional y el aprendizaje autónomo a lo largo de la vida.'
  },

  // ==========================================
  // CAPÍTULO II: DERECHOS DEL APRENDIZ SENA
  // ==========================================
  {
    id: 'der-1',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 4,
    article: 'Art. 7, Numeral 1',
    title: 'Inducción Integral y Oportuna',
    description: 'Recibir al iniciar el programa formativo una inducción institucional contextualizada que garantice la apropiación del reglamento, la ruta de aprendizaje y los servicios de bienestar.',
    category: 'Académico',
    consequenceOrImportance: 'Base indispensable para iniciar con éxito el proceso de formación técnica o tecnológica.'
  },
  {
    id: 'der-2',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 5,
    article: 'Art. 7, Numeral 2',
    title: 'Formación Profesional Integral de Calidad',
    description: 'Recibir formación profesional pertinente, actualizada y de alta calidad conforme al diseño curricular del programa matriculado y con instructores idóneos.',
    category: 'Académico',
    consequenceOrImportance: 'Garantía del Estado para adquirir competencias laborales competitivas en el sector productivo.'
  },
  {
    id: 'der-3',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 6,
    article: 'Art. 7, Numeral 3',
    title: 'Uso de Ambientes, Maquinaria, Herramientas y TIC',
    description: 'Acceder y hacer uso adecuado de los talleres, laboratorios, bibliotecas físicas y digitales, software especializado y plataformas tecnológicas provistas por la entidad.',
    category: 'Académico',
    consequenceOrImportance: 'Facilita la práctica técnica real y el dominio de tecnologías de punta en cada especialidad.'
  },
  {
    id: 'der-4',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 7,
    article: 'Art. 7, Numeral 4',
    title: 'Acreditación con Carné Institucional Vigente',
    description: 'Recibir oportunamente el documento de identificación que lo acredita como aprendiz formal del SENA, necesario para ingreso y acceso a servicios interinstitucionales.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Identidad y seguridad comunitaria en todas las sedes del país.'
  },
  {
    id: 'der-5',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 8,
    article: 'Art. 7, Numeral 5',
    title: 'Acceso al Plan Integral de Bienestar al Aprendiz',
    description: 'Disfrutar de programas de salud, orientación psicosocial, fomento cultural, recreación, deporte y participar en convocatorias de apoyos socioeconómicos y de sostenimiento.',
    category: 'Bienestar',
    consequenceOrImportance: 'Cuidado multidimensional de la persona para prevenir la deserción y fortalecer el proyecto de vida.'
  },
  {
    id: 'der-6',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 9,
    article: 'Art. 7, Numeral 6',
    title: 'Trato Digno, Equitativo y Libre de Discriminación',
    description: 'Ser tratado con respeto irrestricto, consideración y equidad por parte de toda la comunidad educativa, sin distinciones de género, etnia, credo, orientación o ideología.',
    category: 'Convivencia',
    consequenceOrImportance: 'Protección constitucional de un ambiente de aprendizaje seguro, armónico e incluyente.'
  },
  {
    id: 'der-7',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 10,
    article: 'Art. 7, Numeral 7',
    title: 'Libre Expresión y Comunicación Asertiva',
    description: 'Expresar libremente ideas, propuestas e inquietudes académicas de manera respetuosa a través de los conductos regulares y canales de comunicación oficiales.',
    category: 'Convivencia',
    consequenceOrImportance: 'Fomenta el pensamiento crítico y la deliberación democrática responsable.'
  },
  {
    id: 'der-8',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 11,
    article: 'Art. 7, Numeral 8',
    title: 'Representación Democrática y Vocería',
    description: 'Postularse, elegir y ser elegido de forma democrática como Vocero de la Ficha o Representante de los Aprendices del Centro de Formación.',
    category: 'Representación',
    consequenceOrImportance: 'Promueve el liderazgo cívico, la mediación dialógica y la participación estudiantil.'
  },
  {
    id: 'der-9',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 12,
    article: 'Art. 7, Numeral 9',
    title: 'Evaluación Objetiva, Retroalimentación y Revisión',
    description: 'Conocer oportunamente los criterios, resultados y juicios de evaluación de evidencias, con derecho a recibir retroalimentación formativa y solicitar revisión motivada.',
    category: 'Académico',
    consequenceOrImportance: 'Transparencia pedagógica: permite al aprendiz saber con precisión qué domina y qué debe superar.'
  },
  {
    id: 'der-10',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 13,
    article: 'Art. 7, Numeral 10',
    title: 'Reconocimientos, Estímulos e Incentivos al Desempeño',
    description: 'Ser postulado o recibir distinciones honoríficas, becas, monitorías remuneradas o pasantías de innovación por excelencia académica, técnica, investigativa o de liderazgo.',
    category: 'Académico',
    consequenceOrImportance: 'Premia la perseverancia, el talento y la dedicación sobresaliente del aprendiz.'
  },
  {
    id: 'der-11',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 14,
    article: 'Art. 7, Numeral 11',
    title: 'Plan de Mejoramiento Pedagógico y Debido Proceso',
    description: 'Acceder a una ruta pedagógica de mejoramiento concertada para subsanar deficiencias en competencias y ser escuchado en descargos antes de cualquier medida sancionatoria.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Garantía sustancial de defensa y oportunidad real de superación académica antes de sancionar.'
  },
  {
    id: 'der-12',
    type: 'derecho',
    chapter: 'Capítulo II',
    orderIndex: 15,
    article: 'Art. 7, Numeral 12',
    title: 'Certificación Oportuna al Culminar la Formación',
    description: 'Obtener el título o certificación laboral del SENA una vez aprobados el 100% de los resultados de aprendizaje y la etapa productiva según la ley.',
    category: 'Académico',
    consequenceOrImportance: 'Culminación exitosa que abre las puertas a la empleabilidad formal y al desarrollo productivo.'
  },

  // ==========================================
  // CAPÍTULO III: DEBERES DEL APRENDIZ SENA
  // ==========================================
  {
    id: 'deb-1',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 16,
    article: 'Art. 9, Numeral 1',
    title: 'Cumplimiento del Reglamento y Normativa Institucional',
    description: 'Conocer, acatar y cumplir el Reglamento del Aprendiz SENA (Acuerdo 0009 de 2024), las normas de convivencia, bioseguridad y directrices del Centro de Formación.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Compromiso legal ineludible asumido voluntariamente desde la matrícula.'
  },
  {
    id: 'deb-2',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 17,
    article: 'Art. 9, Numeral 2',
    title: 'Suscripción y Cumplimiento del Acta de Compromiso',
    description: 'Firmar el acta de matrícula y cumplir cabalmente con las responsabilidades formativas, axiológicas y procedimentales pactadas.',
    category: 'Académico',
    consequenceOrImportance: 'Formaliza el vínculo formativo entre el estudiante, su familia y el Estado colombiano.'
  },
  {
    id: 'deb-3',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 18,
    article: 'Art. 9, Numeral 3',
    title: 'Porte Permanente y Visible del Carné Institucional',
    description: 'Portar el carné en lugar visible durante toda la permanencia en las sedes del SENA y presentarlo obligatoriamente para ingresar o hacer uso de servicios.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Medida vital de seguridad, control de acceso e identidad de la comunidad.'
  },
  {
    id: 'deb-4',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 19,
    article: 'Art. 9, Numeral 4',
    title: 'Asistencia, Puntualidad y Participación en la Ruta',
    description: 'Asistir con puntualidad y participar activamente en todas las sesiones presenciales o virtuales programadas en el horario asignado.',
    category: 'Académico',
    consequenceOrImportance: 'La inasistencia injustificada reiterada deteriora el aprendizaje y acarrea cancelación por deserción.'
  },
  {
    id: 'deb-5',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 20,
    article: 'Art. 9, Numeral 5',
    title: 'Justificación de Inasistencias en 3 Días Hábiles',
    description: 'Presentar soporte médico formal o prueba idónea de fuerza mayor ante el equipo de instructores en un plazo perentorio de máximo tres (3) días hábiles siguientes al hecho.',
    category: 'Académico',
    consequenceOrImportance: 'Evita llamados de atención escritos y reportes por presunta deserción académica.'
  },
  {
    id: 'deb-6',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 21,
    article: 'Art. 9, Numeral 6',
    title: 'Cuidado, Uso Racional y Conservación de Bienes',
    description: 'Cuidar, mantener limpios y responder por las herramientas, materiales, maquinaria, equipos de cómputo y ambientes de aprendizaje asignados.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Custodia responsable de los recursos públicos dispuestos para la formación de todos.'
  },
  {
    id: 'deb-7',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 22,
    article: 'Art. 9, Numeral 7',
    title: 'Integridad Académica y Prevención del Plagio',
    description: 'Elaborar evidencias y evaluaciones con autoría propia y rigor ético, citando debidamente fuentes bibliográficas y evitando el fraude o la copia.',
    category: 'Académico',
    consequenceOrImportance: 'Fomenta el pensamiento auténtico y el ejercicio profesional honesto.'
  },
  {
    id: 'deb-8',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 23,
    article: 'Art. 9, Numeral 8',
    title: 'Uso de EPP y Cumplimiento de Normas de SST',
    description: 'Portar de manera obligatoria los Elementos de Protección Personal (EPP), overol o uniforme reglamentario según los estándares de Seguridad y Salud en el Trabajo.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Protege la vida, salud e integridad física en ambientes industriales y de laboratorio.'
  },
  {
    id: 'deb-9',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 24,
    article: 'Art. 9, Numeral 9',
    title: 'Respeto y Convivencia Armónica Comunitaria',
    description: 'Tratar con empatía, cortesía y respeto a compañeros, instructores, directivos, personal administrativo y de servicios de la institución.',
    category: 'Convivencia',
    consequenceOrImportance: 'Garantiza la paz, la cohesión social y el ambiente propicio para el aprendizaje.'
  },
  {
    id: 'deb-10',
    type: 'deber',
    chapter: 'Capítulo III',
    orderIndex: 25,
    article: 'Art. 9, Numeral 10',
    title: 'Corresponsabilidad y Enfoque Diferencial / Discapacidad',
    description: 'Informar oportunamente al Centro de Formación si requiere ajustes razonables y participar activamente junto a su red de apoyo en las mesas de seguimiento concertadas.',
    category: 'Bienestar',
    consequenceOrImportance: 'Permite al SENA disponer oportunamente de herramientas y metodologías adaptadas.'
  },

  // ==========================================
  // CAPÍTULO IV: PROHIBICIONES
  // ==========================================
  {
    id: 'pro-1',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 26,
    article: 'Art. 10, Numeral 1',
    title: 'Falsedad o Adulteración de Documentos e Identidad',
    description: 'Falsificar, alterar o presentar documentos apócrifos en los trámites de ingreso, matrícula, evaluación, incapacidades o certificación del SENA.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Falta gravísima con reporte penal a autoridades y expulsión inmediata.'
  },
  {
    id: 'pro-2',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 27,
    article: 'Art. 10, Numeral 2',
    title: 'Ingreso, Consumo o Tráfico de Sustancias Psicoactivas o Alcohol',
    description: 'Ingresar o permanecer en el Centro bajo el efecto de bebidas alcohólicas o sustancias psicoactivas, o consumirlas, portarlas o distribuirlas en las instalaciones.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Falta gravísima causal de cancelación de matrícula e inhabilidad formativa.'
  },
  {
    id: 'pro-3',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 28,
    article: 'Art. 10, Numeral 3',
    title: 'Porte de Armas, Municiones o Elementos Peligrosos',
    description: 'Ingresar o portar armas de fuego, armas blancas, cortopunzantes, explosivos o cualquier artefacto que atente contra la seguridad de la comunidad.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Falta gravísima con intervención de la fuerza pública y cancelación de matrícula.'
  },
  {
    id: 'pro-4',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 29,
    article: 'Art. 10, Numeral 4',
    title: 'Plagio, Fraude y Copia en Evidencias o Evaluaciones',
    description: 'Presentar como propio trabajo ajeno, comprar evidencias, utilizar medios no autorizados en pruebas o facilitar la copia a terceros.',
    category: 'Académico',
    consequenceOrImportance: 'Falta académica grave. Anulación de la evidencia y apertura de proceso en Comité.'
  },
  {
    id: 'pro-5',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 30,
    article: 'Art. 10, Numeral 5',
    title: 'Suplantación de Identidad en Plataformas Institucionales',
    description: 'Prestar credenciales personales o suplantar a otro aprendiz en aulas virtuales (Zajuna), listas de asistencia o trámites de Sofia Plus.',
    category: 'Académico',
    consequenceOrImportance: 'Falta disciplinaria grave con bloqueo de cuentas e investigación formal.'
  },
  {
    id: 'pro-6',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 31,
    article: 'Art. 10, Numeral 6',
    title: 'Actos de Discriminación, Acoso, Intimidación o Violencia',
    description: 'Cometer cualquier manifestación de agresión verbal, física o psicológica, matoneo (bullying), acoso sexual o violencia de género en entornos físicos o digitales.',
    category: 'Convivencia',
    consequenceOrImportance: 'Cero tolerancia institucional: falta gravísima con activación de rutas de protección.'
  },
  {
    id: 'pro-7',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 32,
    article: 'Art. 10, Numeral 7',
    title: 'Uso Indebido de Redes Sociales para Afectar la Honra',
    description: 'Publicar injurias, calumnias, contenido lesivo o información confidencial que vulnere la dignidad de miembros de la comunidad o el prestigio del SENA.',
    category: 'Convivencia',
    consequenceOrImportance: 'Falta grave con implicaciones éticas y posibles acciones legales ordinarias.'
  },
  {
    id: 'pro-8',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 33,
    article: 'Art. 10, Numeral 8',
    title: 'Comercialización No Autorizada y Juegos de Azar',
    description: 'Realizar ventas informales, rifas o juegos de azar con apuestas de dinero dentro de los ambientes de formación y sedes sin autorización institucional.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Falta leve o grave que perturba el orden formativo del Centro.'
  },
  {
    id: 'pro-9',
    type: 'prohibicion',
    chapter: 'Capítulo IV',
    orderIndex: 34,
    article: 'Art. 10, Numeral 9',
    title: 'Desacato a Normas de Seguridad Industrial y SST',
    description: 'Operar maquinaria sin autorización del instructor, retirar guardas protectoras o negarse a usar los elementos de protección personal reglamentarios.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Falta grave por poner en riesgo inminente la vida y la integridad física propia y ajena.'
  },

  // ==========================================
  // CAPÍTULO V: FALTAS, MEDIDAS Y DEBIDO PROCESO
  // ==========================================
  {
    id: 'fal-1',
    type: 'falta',
    chapter: 'Capítulo V',
    orderIndex: 35,
    article: 'Art. 14 al 16',
    title: 'Clasificación de las Faltas (Académicas y Disciplinarias)',
    description: 'Las faltas académicas se derivan del incumplimiento en resultados de aprendizaje; las disciplinarias atentan contra los deberes, la convivencia y las prohibiciones institucionales.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Permite tipificar con exactitud la conducta y determinar la ruta de acompañamiento.'
  },
  {
    id: 'fal-2',
    type: 'falta',
    chapter: 'Capítulo V',
    orderIndex: 36,
    article: 'Art. 17 al 19',
    title: 'Criterios de Calificación: Leves, Graves y Gravísimas',
    description: 'La gravedad de la falta se evalúa según el grado de intencionalidad, reiteración, daño causado a bienes o personas y los antecedentes formativos del aprendiz.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Garantiza la proporcionalidad y justicia en la aplicación de las medidas formativas.'
  },
  {
    id: 'fal-3',
    type: 'falta',
    chapter: 'Capítulo V',
    orderIndex: 37,
    article: 'Art. 22 al 26',
    title: 'Medidas Formativas Pedagógicas',
    description: 'Comprenden el llamado de atención verbal pedagógico, el llamado de atención escrito y la concertación de un Plan de Mejoramiento Académico o Disciplinario.',
    category: 'Académico',
    consequenceOrImportance: 'Acciones de carácter educativo y reflexivo previas a cualquier sanción formal.'
  },
  {
    id: 'fal-4',
    type: 'falta',
    chapter: 'Capítulo V',
    orderIndex: 38,
    article: 'Art. 28 al 32',
    title: 'Sanciones Disciplinarias Formales',
    description: 'Aplicadas exclusivamente mediante acto administrativo motivado del Subdirector de Centro: Condicionamiento de matrícula y Cancelación definitiva de matrícula con inhabilidad.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Medidas extremas reservadas para faltas reiteradas o conductas gravísimas.'
  },
  {
    id: 'fal-5',
    type: 'falta',
    chapter: 'Capítulo V',
    orderIndex: 39,
    article: 'Art. 48 (Modif. Ac. 002/2026)',
    title: 'Debido Proceso y Comité de Evaluación y Seguimiento',
    description: 'Instancia colegiada que investiga los casos, garantizando el derecho a la defensa, notificación formal, audiencia de descargos, aporte de pruebas y recurso de reposición.',
    category: 'Disciplinario',
    consequenceOrImportance: 'Blindaje constitucional: ningún aprendiz puede ser sancionado sin audiencia y defensa.'
  }
];

export const PRODUCTIVE_STAGE_MODES = [
  {
    id: 'contrato_aprendizaje',
    name: 'Contrato de Aprendizaje',
    badge: 'Modalidad Principal',
    description: 'Vínculo formativo con una empresa patrocinadora que proporciona apoyo de sostenimiento (mínimo 75% o 100% de SMLV según desempleo) y afiliación completa a EPS y ARL.',
    requirements: ['Estar en fase final de etapa lectiva', 'Registro en el SGVA (Sistema de Gestión Virtual de Aprendices)', 'No tener sanciones activas']
  },
  {
    id: 'pasantia',
    name: 'Pasantía / Práctica Formativa',
    badge: 'Concertada',
    description: 'Acuerdo institucional entre el Centro de Formación SENA y una empresa u organización para aplicar conocimientos técnicos. Requiere afiliación obligatoria a ARL.',
    requirements: ['Convenio firmado de pasantía', 'Plan de trabajo avalado por instructor técnico', 'Reportes periódicos']
  },
  {
    id: 'vinculo_laboral',
    name: 'Vínculo Laboral o Contractual',
    badge: 'Homologación',
    description: 'Para aprendices que ya laboran en una empresa formal y cuyas funciones cotidianas coinciden directamente con las competencias del programa de formación.',
    requirements: ['Certificación laboral con funciones detalladas', 'Aval del coordinador académico', 'Seguimiento por instructor']
  },
  {
    id: 'proyecto_productivo',
    name: 'Proyecto Productivo (Fondo Emprender)',
    badge: 'Emprendimiento',
    description: 'Desarrollo de un modelo de negocio innovador o empresa propia con asesoría de la Unidad de Emprendimiento SENA o acceso a capital semilla.',
    requirements: ['Plan de negocio estructurado', 'Acompañamiento del Gestor de Emprendimiento', 'Cumplimiento de hitos productivos']
  },
  {
    id: 'monitoria',
    name: 'Monitoría Institucional',
    badge: 'Interno SENA',
    description: 'Desempeño como monitor técnico o de apoyo pedagógico en laboratorios, talleres o dependencias del SENA, recibiendo estímulo económico institucional.',
    requirements: ['Excelente rendimiento académico', 'Convocatoria interna del Centro', 'Actitud de liderazgo']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'caso-1',
    title: 'La Justificación de Inasistencia por Salud',
    tag: 'Falta Académica / Procedimiento',
    character: 'Valentina Ospina',
    role: 'Aprendiz Tecnólogo en ADSO',
    situation: 'Valentina tuvo una gastroenteritis aguda el lunes y martes, por lo que no pudo asistir a las sesiones presenciales de desarrollo de bases de datos. El médico de su EPS le dio 48 horas de incapacidad formal. Es jueves en la mañana y aún no ha enviado el documento.',
    question: '¿Cuál es el procedimiento legal y oportuno que Valentina debe seguir según el Reglamento del Aprendiz?',
    decisions: [
      {
        id: 'd1',
        action: 'Esperar al próximo lunes para entregar la copia física al instructor en persona en el ambiente.',
        isCorrect: false,
        consequence: 'Habrán pasado más de 3 días hábiles. El instructor registrará la inasistencia como injustificada y podría iniciar reporte por presunta deserción.',
        regulatoryBasis: 'Art. 9 Num. 4: El plazo perentorio es de máximo tres (3) días hábiles siguientes al hecho.'
      },
      {
        id: 'd2',
        action: 'Radicar la incapacidad médica digital hoy mismo ante el instructor y la coordinación académica antes del tercer día hábil.',
        isCorrect: true,
        consequence: 'Procedimiento correcto. La inasistencia queda debidamente justificada y tiene derecho a concertar la entrega de las evidencias atrasadas sin penalización.',
        regulatoryBasis: 'Art. 9 y Art. 22: El aprendiz tiene hasta tres (3) días hábiles para justificar su inasistencia ante el equipo de instructores.'
      },
      {
        id: 'd3',
        action: 'Pedirle a un compañero que firme por ella en la lista de asistencia del martes.',
        isCorrect: false,
        consequence: 'Comete una falta disciplinaria gravísima de suplantación y falsedad en documento público, arriesgando cancelación de matrícula para ambos aprendices.',
        regulatoryBasis: 'Art. 10 Num. 6: Suplantación o falsificación de firmas es causal de sanción gravísima.'
      }
    ]
  },
  {
    id: 'caso-2',
    title: 'Dilema de Evidencias y Trabajo en Equipo',
    tag: 'Integridad y Plagio',
    character: 'Mateo Gómez',
    role: 'Aprendiz Técnico en Mantenimiento',
    situation: 'El equipo de Mateo debe entregar un informe técnico y planos de un circuito electromecánico antes de medianoche. Un compañero del grupo descargó un proyecto idéntico de internet y sugiere entregarlo cambiando solo los nombres en la portada para evitar reprobar.',
    question: '¿Qué debe hacer Mateo frente a esta propuesta para proteger su proceso y ética formativa?',
    decisions: [
      {
        id: 'd1',
        action: 'Aceptar porque el plazo ya vence y lo importante es no quedarse sin calificación en la plataforma.',
        isCorrect: false,
        consequence: 'El software de detección de plagio o el instructor detectarán la copia. Todo el equipo enfrentará proceso en Comité de Evaluación por fraude académico.',
        regulatoryBasis: 'Art. 10 Num. 5: El plagio total o parcial constituye falta grave contra la ética y el rigor académico.'
      },
      {
        id: 'd2',
        action: 'Rechazar el plagio, entregar la parte que alcanzaron a desarrollar con honestidad y solicitar concertar un plan de mejoramiento con el instructor.',
        isCorrect: true,
        consequence: 'Actúa con transparencia y honestidad. El instructor valorará la integridad y podrá conceder una ruta de mejoramiento pedagógico para alcanzar la competencia.',
        regulatoryBasis: 'Valores SENA (Honestidad y Transparencia) y Art. 7 Num. 10: Derecho a plan de mejoramiento pedagógico.'
      },
      {
        id: 'd3',
        action: 'Publicar el incidente en redes sociales quejándose de que los instructores dejan mucho trabajo.',
        isCorrect: false,
        consequence: 'Afecta la imagen institucional sin utilizar los conductos regulares (Instructor -> Vocero -> Coordinador -> Subdirector).',
        regulatoryBasis: 'Art. 9: Respeto al debido proceso y uso de los canales institucionales formales.'
      }
    ]
  },
  {
    id: 'caso-3',
    title: 'Porte de Carné y Elementos de Seguridad en Taller',
    tag: 'Seguridad y Convivencia',
    character: 'David Restrepo',
    role: 'Aprendiz en Soldadura y Metalmecánica',
    situation: 'David olvidó sus gafas de seguridad (EPP) y su carné en la casa. Al llegar a la puerta del Centro de Formación, el guarda le advierte y su instructor le indica que no puede ingresar al taller de máquinas sin la protección visual obligatoria.',
    question: '¿Cómo debe actuar David ante las instrucciones de seguridad del personal del Centro?',
    decisions: [
      {
        id: 'd1',
        action: 'Discutir con el guarda argumentando que él tiene derecho a la educación y que nadie le puede impedir la entrada.',
        isCorrect: false,
        consequence: 'Incurre en falta disciplinaria por irrespeto al personal de apoyo e incumplimiento de normas de bioseguridad del Centro.',
        regulatoryBasis: 'Art. 9 Num. 1 y 15: Deber de portar carné y tratar con debido respeto a la comunidad institucional.'
      },
      {
        id: 'd2',
        action: 'Acoger respetuosamente la norma de SST, tramitar su pase de visitante temporal en portería y solicitar EPP prestados en el pañol de herramientas.',
        isCorrect: true,
        consequence: 'Protege su integridad física, respeta los protocolos de seguridad industrial y continúa su sesión formativa sin incidentes.',
        regulatoryBasis: 'Art. 9 Num. 11: Cumplimiento riguroso de normas de Seguridad y Salud en el Trabajo (SST).'
      },
      {
        id: 'd3',
        action: 'Entrar a escondidas al taller por una puerta trasera cuando el instructor se descuide.',
        isCorrect: false,
        consequence: 'Pone en riesgo grave su visión ante chispas de soldadura y comete desacato directo a instrucciones pedagógicas.',
        regulatoryBasis: 'Art. 10: Prohibición expresa de desacatar normas de seguridad física en ambientes de aprendizaje.'
      }
    ]
  }
];

export const EVALUATION_QUESTIONS: EvaluationQuestion[] = [
  {
    id: 'q1',
    category: 'Identidad Institucional',
    question: '¿Qué representan los tres elementos icónicos del Escudo oficial del SENA?',
    scenario: 'Durante el recorrido por el Centro de Formación se observa el escudo en el aula múltiple.',
    options: [
      { id: 'a', text: 'Los tres colores de la bandera nacional (amarillo, azul y rojo).' },
      { id: 'b', text: 'Los tres sectores económicos: Rueda dentada (Industria), Caduceo (Comercio y Servicios) y Café/Espiga (Agropecuario).' },
      { id: 'c', text: 'Las tres sedes principales: Bogotá, Medellín y Cali.' },
      { id: 'd', text: 'Las tres etapas del aprendizaje: Inducción, Práctica y Graduación.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Identidad Corporativa y Símbolos SENA',
    explanation: 'El escudo del SENA condensa los tres grandes sectores de la economía nacional sobre los cuales la institución imparte formación profesional integral.'
  },
  {
    id: 'q2',
    category: 'Derechos del Aprendiz',
    question: '¿Cuál de los siguientes enunciados constituye un DERECHO fundamental del aprendiz según el Reglamento?',
    scenario: 'Un aprendiz requiere apoyo académico para superar una competencia técnica.',
    options: [
      { id: 'a', text: 'Aprobar las competencias automáticamente sin presentar evidencias si tiene buena conducta.' },
      { id: 'b', text: 'Recibir formación profesional integral de calidad y acceder a un Plan de Mejoramiento pedagógico antes de una sanción.' },
      { id: 'c', text: 'Modificar los horarios de clase del instructor de acuerdo a su conveniencia personal.' },
      { id: 'd', text: 'Ingresar a las instalaciones del SENA en cualquier momento sin portar el carné institucional.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Reglamento del Aprendiz, Art. 7',
    explanation: 'El artículo 7 establece el derecho a recibir formación integral de calidad y a concertar planes de mejoramiento pedagógicos para superar dificultades en el aprendizaje.'
  },
  {
    id: 'q3',
    category: 'Deberes del Aprendiz',
    question: 'Si un aprendiz presenta una calamidad doméstica o incapacidad médica certificada, ¿cuántos días hábiles tiene para justificar su inasistencia ante el instructor?',
    scenario: 'Camilo no pudo asistir a clase el martes debido a una urgencia odontológica con constancia médica.',
    options: [
      { id: 'a', text: 'Hasta 15 días calendario posteriores al evento.' },
      { id: 'b', text: 'El mismo día antes de que finalice la jornada, o pierde el cupo sin excepciones.' },
      { id: 'c', text: 'Máximo tres (3) días hábiles siguientes a la ocurrencia del hecho.' },
      { id: 'd', text: 'No es necesario justificar si el porcentaje de inasistencias es menor al 30%.' }
    ],
    correctOptionId: 'c',
    articleReference: 'Reglamento del Aprendiz, Art. 9, Numeral 4',
    explanation: 'El aprendiz debe presentar la justificación debidamente soportada dentro de los tres (3) días hábiles siguientes al hecho causante de la inasistencia.'
  },
  {
    id: 'q4',
    category: 'Deberes del Aprendiz',
    question: 'Respecto al carné institucional del SENA, ¿cuál es la obligación reglamentaria del aprendiz?',
    scenario: 'En la portería de acceso al Centro de Formación se verifica el protocolo de ingreso.',
    options: [
      { id: 'a', text: 'Guardarlo en la billetera y mostrarlo únicamente cuando se retire del centro.' },
      { id: 'b', text: 'Portarlo visiblemente durante toda la permanencia en el centro de formación y presentarlo cada vez que sea requerido.' },
      { id: 'c', text: 'Prestarlo a compañeros o familiares para que puedan acceder a la biblioteca o cafetería.' },
      { id: 'd', text: 'El carné solo es de uso optativo durante eventos deportivos o salidas pedagógicas.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Reglamento del Aprendiz, Art. 9, Numeral 1',
    explanation: 'El porte permanente y visible del carné es un deber obligatorio por razones de seguridad, identificación institucional y control en ambientes de aprendizaje.'
  },
  {
    id: 'q5',
    category: 'Faltas y Sanciones',
    question: '¿Cuál es la diferencia sustancial entre una Falta Académica y una Falta Disciplinaria?',
    scenario: 'El Comité de Evaluación analiza los casos reportados en el último comité de ficha.',
    options: [
      { id: 'a', text: 'La falta académica la cometen los instructores y la disciplinaria los aprendices.' },
      { id: 'b', text: 'La falta académica está ligada al no cumplimiento de competencias y evidencias; la disciplinaria atenta contra la convivencia, normas, bienes y personas.' },
      { id: 'c', text: 'No existe diferencia; en el SENA todas las faltas reciben la misma sanción económica.' },
      { id: 'd', text: 'La falta académica cancela la matrícula de inmediato y la disciplinaria solo genera un llamado verbal.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Reglamento del Aprendiz, Capítulos IV y V',
    explanation: 'Las faltas académicas se derivan del incumplimiento en el proceso de aprendizaje y entrega de evidencias; las disciplinarias quebrantan la convivencia, el orden y las prohibiciones institucionales.'
  },
  {
    id: 'q6',
    category: 'Faltas y Sanciones',
    question: '¿Qué es el Comité de Evaluación y Seguimiento en el SENA?',
    scenario: 'Un aprendiz es citado a audiencia de descargos tras un reporte por presunto plagio reiterado.',
    options: [
      { id: 'a', text: 'Un tribunal de policía encargado de imponer multas económicas a los estudiantes.' },
      { id: 'b', text: 'Una instancia colegiada que analiza los casos de aprendices con dificultades, garantizando el debido proceso y recomendando medidas formativas o sanciones.' },
      { id: 'c', text: 'Una reunión exclusiva entre aprendices para calificar a los instructores del trimestre.' },
      { id: 'd', text: 'Una junta que decide las empresas donde cada estudiante debe trabajar obligatoriamente.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Reglamento del Aprendiz, Capítulo VII',
    explanation: 'El Comité de Evaluación y Seguimiento asesora al Subdirector de Centro en la toma de decisiones, investiga los casos respetando el derecho a la defensa y formula recomendaciones formativas.'
  },
  {
    id: 'q7',
    category: 'Etapa Productiva',
    question: '¿Cuál de las siguientes NO corresponde a una modalidad autorizada para realizar la Etapa Productiva en el SENA?',
    scenario: 'Un aprendiz está planeando cómo culminará su formación profesional integral.',
    options: [
      { id: 'a', text: 'Contrato de Aprendizaje con patrocinio empresarial.' },
      { id: 'b', text: 'Proyecto Productivo validado por la Unidad de Emprendimiento o Fondo Emprender.' },
      { id: 'c', text: 'Trabajo informal sin afiliación a ARL ni seguimiento pedagógico de un instructor.' },
      { id: 'd', text: 'Pasantía en una entidad pública, ONG o empresa del sector productivo.' }
    ],
    correctOptionId: 'c',
    articleReference: 'Acuerdo 0009 de 2024 (Vigente), Etapa Productiva',
    explanation: 'Toda modalidad de etapa productiva requiere formalidad legal, concertación de un plan de trabajo, afiliación a riesgos laborales (ARL) y acompañamiento de un instructor de seguimiento.'
  },
  {
    id: 'q8',
    category: 'Bienestar al Aprendiz',
    question: '¿Cuál es el objetivo principal del programa de Bienestar al Aprendiz en el SENA?',
    scenario: 'Se abre la convocatoria para grupos de danza, torneos deportivos y apoyos de sostenimiento.',
    options: [
      { id: 'a', text: 'Ofrecer únicamente descuentos en cafeterías privadas de la ciudad.' },
      { id: 'b', text: 'Promover el desarrollo integral del aprendiz mediante salud, deporte, arte, cultura, liderazgo y apoyos socioeconómicos.' },
      { id: 'c', text: 'Sustituir las horas técnicas de formación en el taller de maquinaria.' },
      { id: 'd', text: 'Realizar cobranzas de matrículas a los estudiantes de estratos altos.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Plan Nacional de Bienestar al Aprendiz SENA',
    explanation: 'Bienestar al Aprendiz fortalece las dimensiones humanas, afectivas, físicas y psicosociales para prevenir la deserción y formar ciudadanos íntegros.'
  },
  {
    id: 'q9',
    category: 'Identidad Institucional',
    question: '¿Quién fue el insigne fundador del SENA en 1957 y cuál fue su visión inicial?',
    scenario: 'Durante el conversatorio de historia institucional en la semana de inducción.',
    options: [
      { id: 'a', text: 'Gabriel García Márquez, enfocado exclusivamente en literatura y periodismo.' },
      { id: 'b', text: 'Rodolfo Martínez Tono, quien soñó una entidad pública tripartita (Gobierno, Empleadores y Trabajadores) para capacitar la fuerza laboral de Colombia.' },
      { id: 'c', text: 'Simón Bolívar, durante la gesta independentista de 1819.' },
      { id: 'd', text: 'Un consorcio de universidades privadas internacionales.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Historia Institucional SENA (Decreto Ley 118 de 1957)',
    explanation: 'El economista cartagenero Rodolfo Martínez Tono concibió y lideró la creación del SENA en 1957 con apoyo del Estado, sindicatos y empresarios.'
  },
  {
    id: 'q10',
    category: 'Faltas y Sanciones',
    question: 'Si un aprendiz comete fraude comprobado en una evaluación o evidencia, ¿cuál es la consecuencia directa?',
    scenario: 'Se evidencia copia textual de código o textos de un proyecto anterior sin autorización.',
    options: [
      { id: 'a', text: 'Se le suma un 20% al puntaje final por habilidad investigativa.' },
      { id: 'b', text: 'Se considera falta académica grave, se anula la evidencia y se remite el caso al Comité de Evaluación para proceso disciplinario.' },
      { id: 'c', text: 'No tiene consecuencias si pide disculpas verbales en el pasillo.' },
      { id: 'd', text: 'El instructor le califica como Aprobado si el aprendiz promete no volver a hacerlo.' }
    ],
    correctOptionId: 'b',
    articleReference: 'Reglamento del Aprendiz, Art. 10 y Art. 28',
    explanation: 'El fraude y el plagio vulneran la ética formativa. Conllevan calificación de no aprobado (D), inicio de debido proceso disciplinario y posibles sanciones.'
  }
];

export const INITIAL_APPRENTICES: Apprentice[] = [
  {
    id: 'app-1',
    name: 'Carlos Andrés Mendoza Silva',
    documentNumber: '1023849501',
    documentType: 'CC',
    email: 'cmendoza501@misena.edu.co',
    phone: '3158941203',
    fichaNumber: '2874102',
    programName: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    regional: 'Regional Distrito Capital',
    centro: 'Centro de Tecnologías de la Información y las Comunicaciones (CTIC)',
    progress: 100,
    status: 'completed',
    completedModules: ['identity', 'rights_duties', 'pathway_wellness', 'case_simulator', 'evaluation'],
    evaluationScore: 90,
    evaluationDate: '2026-10-25 14:32',
    certificateCode: 'SENA-IND-2874102-00194'
  },
  {
    id: 'app-2',
    name: 'Valentina Sofía Ospina Cruz',
    documentNumber: '1098453210',
    documentType: 'TI',
    email: 'vospina210@misena.edu.co',
    phone: '3204918234',
    fichaNumber: '2874102',
    programName: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    regional: 'Regional Distrito Capital',
    centro: 'Centro de Tecnologías de la Información y las Comunicaciones (CTIC)',
    progress: 80,
    status: 'in_progress',
    completedModules: ['identity', 'rights_duties', 'pathway_wellness', 'case_simulator'],
    evaluationScore: null
  },
  {
    id: 'app-3',
    name: 'Mateo Alejandro Gómez Morales',
    documentNumber: '1014892304',
    documentType: 'CC',
    email: 'mgomez304@misena.edu.co',
    phone: '3128904512',
    fichaNumber: '2874102',
    programName: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    regional: 'Regional Distrito Capital',
    centro: 'Centro de Tecnologías de la Información y las Comunicaciones (CTIC)',
    progress: 100,
    status: 'completed',
    completedModules: ['identity', 'rights_duties', 'pathway_wellness', 'case_simulator', 'evaluation'],
    evaluationScore: 100,
    evaluationDate: '2026-10-26 10:15',
    certificateCode: 'SENA-IND-2874102-00215'
  },
  {
    id: 'app-4',
    name: 'Diana Marcela Quevedo Peña',
    documentNumber: '1032904812',
    documentType: 'CC',
    email: 'dquevedo812@misena.edu.co',
    phone: '3187239014',
    fichaNumber: '2874102',
    programName: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    regional: 'Regional Distrito Capital',
    centro: 'Centro de Tecnologías de la Información y las Comunicaciones (CTIC)',
    progress: 40,
    status: 'in_progress',
    completedModules: ['identity', 'rights_duties'],
    evaluationScore: null
  },
  {
    id: 'app-5',
    name: 'Esteban Darío Rincón Quintero',
    documentNumber: '1017482931',
    documentType: 'CC',
    email: 'erincon931@misena.edu.co',
    phone: '3109384721',
    fichaNumber: '2874102',
    programName: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    regional: 'Regional Distrito Capital',
    centro: 'Centro de Tecnologías de la Información y las Comunicaciones (CTIC)',
    progress: 100,
    status: 'needs_improvement',
    completedModules: ['identity', 'rights_duties', 'pathway_wellness', 'case_simulator', 'evaluation'],
    evaluationScore: 60,
    evaluationDate: '2026-10-26 16:45',
    improvementPlanAssigned: true,
    improvementPlanNotes: 'Apropiación deficiente en plazos de inasistencias y modalidades de etapa productiva. Desarrollar taller de refuerzo en el reglamento (Art. 9 y 12).'
  },
  {
    id: 'app-6',
    name: 'Laura Camila Beltrán Rojas',
    documentNumber: '1028374619',
    documentType: 'TI',
    email: 'lbeltran619@misena.edu.co',
    phone: '3146729018',
    fichaNumber: '2874105',
    programName: 'Tecnólogo en Gestión Administrativa',
    regional: 'Regional Distrito Capital',
    centro: 'Centro de Gestión de Mercados, Logística y TIC',
    progress: 100,
    status: 'completed',
    completedModules: ['identity', 'rights_duties', 'pathway_wellness', 'case_simulator', 'evaluation'],
    evaluationScore: 90,
    evaluationDate: '2026-10-26 11:20',
    certificateCode: 'SENA-IND-2874105-00108'
  },
  {
    id: 'app-7',
    name: 'Julián David Caicedo Torres',
    documentNumber: '1019283746',
    documentType: 'CC',
    email: 'jcaicedo746@misena.edu.co',
    phone: '3138920194',
    fichaNumber: '2874105',
    programName: 'Tecnólogo en Gestión Administrativa',
    regional: 'Regional Distrito Capital',
    centro: 'Centro de Gestión de Mercados, Logística y TIC',
    progress: 0,
    status: 'pending',
    completedModules: [],
    evaluationScore: null
  }
];
