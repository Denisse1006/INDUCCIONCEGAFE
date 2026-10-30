import React, { useState } from 'react';
import { PRODUCTIVE_STAGE_MODES } from '../data/inductionData';

interface PathwayWellnessModuleProps {
  onCompleteModule: () => void;
  onNextModule: () => void;
  isCompleted: boolean;
}

export const PathwayWellnessModule: React.FC<PathwayWellnessModuleProps> = ({
  onCompleteModule,
  onNextModule,
  isCompleted
}) => {
  const [selectedModeId, setSelectedModeId] = useState<string>('contrato_aprendizaje');
  const [activeTab, setActiveTab] = useState<'etapas' | 'bienestar' | 'ecosistema'>('etapas');

  const selectedMode = PRODUCTIVE_STAGE_MODES.find(m => m.id === selectedModeId) || PRODUCTIVE_STAGE_MODES[0];

  return (
    <div className="space-y-12 pb-16">
      {/* Module Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-[#39A900] font-semibold mb-2">
            <span>Módulo 03</span>
            <span aria-hidden="true">·</span>
            <span>Ruta Formativa, Etapa Productiva & Bienestar</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3" style={{ textWrap: 'balance' }}>
            Tu Camino hacia la Certificación Laboral
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            La Formación Profesional Integral del SENA combina dos etapas esenciales: la <strong>Etapa Lectiva</strong> (adquisición de saberes técnicos y transversales en aulas y talleres) y la <strong>Etapa Productiva</strong> (aplicación real en el entorno laboral de las empresas).
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-100">
          <button
            onClick={() => setActiveTab('etapas')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'etapas'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Etapa Lectiva vs Productiva
          </button>
          <button
            onClick={() => setActiveTab('bienestar')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'bienestar'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Bienestar al Aprendiz
          </button>
          <button
            onClick={() => setActiveTab('ecosistema')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'ecosistema'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Ecosistema Digital (Zajuna / Sofia)
          </button>
        </div>
      </section>

      {/* TAB 1: ETAPA LECTIVA Y PRODUCTIVA */}
      {activeTab === 'etapas' && (
        <div className="space-y-8">
          {/* Dual Stages Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-mono font-bold text-emerald-700">FASE 1</span>
                  <span>Ambientes SENA</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Etapa Lectiva</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Periodo en el que desarrollas conocimientos científicos, tecnológicos, procedimentales y axiológicos mediante proyectos formativos reales dirigidos por instructores técnicos y transversales.
                </p>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Competencias que fortaleces:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Competencias Específicas del Programa
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Bilingüismo (Inglés técnico)
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Ética y Convivencia
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Seguridad & Salud en el Trabajo (SST)
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Aprobación obligatoria del 100% de los resultados de aprendizaje para avanzar.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-mono font-bold text-[#00324D]">FASE 2</span>
                  <span>Sector Productivo</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Etapa Productiva</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Aplicación, complementación y fortalecimiento de tus habilidades y destrezas en un entorno empresarial o institucional auténtico durante un periodo de 6 meses (según programa).
                </p>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Garantías institucionales:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Instructor de seguimiento asignado
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Afiliación de riesgos (ARL obligatoria)
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Bitácoras de seguimiento quincenales
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      • Calificación Aprobado (A) / Deficiente (D)
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Paso final y requisito indispensable para obtener el Título oficial de Tecnólogo o Técnico.
              </div>
            </div>
          </div>

          {/* Modalidades de Etapa Productiva Explorer */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider block mb-1">
                Opciones Oficiales
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                5 Modalidades para Realizar tu Etapa Productiva
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Selecciona cada modalidad para conocer en detalle sus características, derechos económicos y requisitos reglamentarios.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Selector List */}
              <div className="lg:col-span-5 space-y-2">
                {PRODUCTIVE_STAGE_MODES.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedModeId(mode.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedModeId === mode.id
                        ? 'border-[#39A900] bg-emerald-50/50 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-slate-900">{mode.name}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{mode.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 line-clamp-2">
                      {mode.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Right Mode Detail Box */}
              <div className="lg:col-span-7 p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono uppercase text-[#39A900] font-bold">Detalle de la Alternativa</span>
                  <span>{selectedMode.badge}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{selectedMode.name}</h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-6">
                  {selectedMode.description}
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Requisitos para acceder a esta modalidad:
                  </span>
                  <div className="space-y-2">
                    {selectedMode.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 bg-white rounded border border-slate-200">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                  Nota legal: Toda etapa productiva debe concertarse previamente y contar con el aval escrito de la coordinación académica del Centro de Formación antes de iniciar labores.
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: BIENESTAR AL APRENDIZ */}
      {activeTab === 'bienestar' && (
        <div className="space-y-8">
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider block mb-1">
                  Desarrollo Humano Integral
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Plan Nacional de Bienestar al Aprendiz
                </h2>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  El SENA no solo forma técnicos calificados; forma seres humanos éticos, saludables y líderes transformadores. A través del equipo de Bienestar, tienes acceso gratuito a orientación psicosocial, apoyo a tu salud física y mental, estímulos socioeconómicos y actividades culturales y deportivas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-0.5">Apoyos de Sostenimiento</span>
                    <span className="text-slate-600">Subsidio mensual para aprendices en condiciones socioeconómicas vulnerables (convocatoria periódica).</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-0.5">Fondo FIC (Construcción)</span>
                    <span className="text-slate-600">Apoyo especial para aprendices matriculados en programas afines a la industria de la edificación.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/src/assets/images/sena_apprentices_collaboration_1793115171957.jpg"
                  alt="Aprendices del SENA colaborando en equipo en ambiente de bienestar"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* 6 Pillars of Wellness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-1">Salud Integral y Prevención</div>
                <p className="text-xs text-slate-600">Jornadas de salud visual, vacunación, salud oral y primeros auxilios en sede.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-1">Deporte y Recreación</div>
                <p className="text-xs text-slate-600">Torneos intercentros de microfútbol, voleibol, tenis de mesa y acondicionamiento físico.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-1">Arte y Cultura</div>
                <p className="text-xs text-slate-600">Grupos de danza folclórica, música, teatro y muestras artísticas regionales.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-1">Liderazgo y Habilidades Blandas</div>
                <p className="text-xs text-slate-600">Formación de Voceros de Ficha y Representantes de Centro en toma de decisiones.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-1">Acompañamiento Psicosocial</div>
                <p className="text-xs text-slate-600">Psicólogos y trabajadores sociales para superar crisis emocionales y familiares.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-1">Monitorías Institucionales</div>
                <p className="text-xs text-slate-600">Oportunidad remunerada de apoyar a instructores y ambientes tecnológicos.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 3: ECOSISTEMA DIGITAL SENA */}
      {activeTab === 'ecosistema' && (
        <div className="space-y-6">
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider block mb-1">
                Herramientas Tecnológicas Oficiales
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Plataformas del Aprendiz SENA
              </h2>
              <p className="text-xs text-slate-600">
                Todo aprendiz debe dominar las herramientas digitales oficiales para gestionar su matrícula, consultar juicios evaluativos y entregar evidencias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-bold text-slate-900">SISTEMA ACADÉMICO</span>
                    <span>senasofiaplus.edu.co</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">SENA Sofia Plus</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Es el portal de gestión académica del SENA. En él descargas tus certificados de matrícula, consultas tus juicios evaluativos (Aprobado / No Aprobado) y actualizas tus datos personales de contacto.
                  </p>
                </div>
                <div className="text-xs text-slate-500 pt-3 border-t border-slate-200">
                  Uso: Consultar juicios evaluativos al cierre de cada trimestre formativo.
                </div>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-bold text-slate-900">LMS DE APRENDIZAJE</span>
                    <span>zajuna.sena.edu.co</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Zajuna (Ambiente Virtual)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Es el aula virtual donde accedes al material didáctico, participas en foros temáticos, subes las evidencias de tus proyectos formativos e interactúas con los instructores.
                  </p>
                </div>
                <div className="text-xs text-slate-500 pt-3 border-t border-slate-200">
                  Uso: Entrega oportuna de evidencias de aprendizaje dentro de los plazos establecidos.
                </div>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-bold text-slate-900">INTERMEDIACIÓN LABORAL</span>
                    <span>ape.sena.edu.co</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Agencia Pública de Empleo (APE)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Servicio público y gratuito de intermediación laboral para registrar tu hoja de vida y postularte a ofertas de empleo formales a nivel nacional e internacional.
                  </p>
                </div>
                <div className="text-xs text-slate-500 pt-3 border-t border-slate-200">
                  Uso: Postulación a empleos formales en etapa productiva y como egresado.
                </div>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-bold text-slate-900">CORREO INSTITUCIONAL</span>
                    <span>@misena.edu.co</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Cuenta MiSENA</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Canal formal oficial de comunicación entre el SENA y el aprendiz. Incluye suite ofimática en la nube, almacenamiento ilimitado y licencias de software educativo.
                  </p>
                </div>
                <div className="text-xs text-slate-500 pt-3 border-t border-slate-200">
                  Uso: Notificaciones oficiales de citaciones, comités y convocatorias de apoyo.
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Module Completion Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-emerald-50 border border-emerald-200">
        <div>
          <h3 className="text-base font-bold text-emerald-950">
            {isCompleted ? '✓ Módulo 3 Completado' : '¿Comprendes la Ruta y tus Posibilidades?'}
          </h3>
          <p className="text-xs text-emerald-800 mt-0.5">
            Pon a prueba tu criterio en situaciones reales en el Simulador de Casos.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isCompleted && (
            <button
              onClick={onCompleteModule}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#39A900] hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Completar Módulo 3
            </button>
          )}
          <button
            onClick={onNextModule}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Avanzar al Simulador de Casos →
          </button>
        </div>
      </div>
    </div>
  );
};
