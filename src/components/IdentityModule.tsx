import React, { useState, useEffect } from 'react';
import { INSTITUTIONAL_INFO } from '../data/inductionData';
import { anthemPlayer } from '../utils/senaAnthemAudio';
import { SenaLogo } from './SenaLogo';

interface IdentityModuleProps {
  onCompleteModule: () => void;
  onNextModule: () => void;
  isCompleted: boolean;
}

export const IdentityModule: React.FC<IdentityModuleProps> = ({
  onCompleteModule,
  onNextModule,
  isCompleted
}) => {
  const [isPlayingAnthem, setIsPlayingAnthem] = useState(false);
  const [activeLyricIndex, setActiveLyricIndex] = useState<number | null>(null);
  const [selectedSymbolId, setSelectedSymbolId] = useState<string>('shield');

  useEffect(() => {
    return () => {
      anthemPlayer.stop();
    };
  }, []);

  const handleToggleAnthem = () => {
    if (isPlayingAnthem) {
      anthemPlayer.stop();
      setIsPlayingAnthem(false);
      setActiveLyricIndex(null);
    } else {
      setIsPlayingAnthem(true);
      anthemPlayer.start(
        (noteIndex) => {
          setActiveLyricIndex(noteIndex);
        },
        () => {
          setIsPlayingAnthem(false);
          setActiveLyricIndex(null);
        }
      );
    }
  };

  const selectedSymbol = INSTITUTIONAL_INFO.symbols.find(s => s.id === selectedSymbolId) || INSTITUTIONAL_INFO.symbols[0];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px]">
          {/* Left Text Zone */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs text-[#39A900] font-semibold mb-3">
              <span>Módulo 01</span>
              <span aria-hidden="true">·</span>
              <span>Identidad & Valor Institucional</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4" style={{ textWrap: 'balance' }}>
              Bienvenidos a la Familia SENA: La Casa de los Trabajadores de Colombia
            </h1>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Fundado en 1957 por iniciativa del doctor Rodolfo Martínez Tono, el Servicio Nacional de Aprendizaje es el patrimonio formativo más querido de nuestro país, forjando técnicos, tecnólogos y ciudadanos con altos estándares de calidad y ética profesional.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div>
                <span className="text-slate-400 block">Fundación</span>
                <span className="font-semibold text-slate-800">{INSTITUTIONAL_INFO.foundationDate}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div>
                <span className="text-slate-400 block">Norma Creación</span>
                <span className="font-semibold text-slate-800">{INSTITUTIONAL_INFO.decree}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div>
                <span className="text-slate-400 block">Cobertura</span>
                <span className="font-semibold text-slate-800">33 Regionales · 118+ Centros</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative bg-slate-900 min-h-[260px] lg:min-h-full">
            <img
              src="/src/assets/images/sena_campus_modern_1793115170662.jpg"
              alt="Ambiente de formación tecnológica y aprendices en un centro de formación SENA"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded border border-white/20">
                Centro de Formación Profesional Integral · Colombia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#39A900] flex items-center justify-center p-1.5 mb-4 border border-emerald-100">
              <SenaLogo className="w-7 h-7" fill="#39a900" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Misión Institucional</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {INSTITUTIONAL_INFO.mission}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            Enfoque: Formación Profesional Integral articulada a las demandas de empleo digno.
          </div>
        </div>

        <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#00324D] flex items-center justify-center p-1.5 mb-4 border border-sky-100">
              <SenaLogo className="w-7 h-7" fill="#00324D" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Visión Estratégica 2026</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {INSTITUTIONAL_INFO.vision}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            Ejes: Transición digital, reindustrialización, justicia social y sostenibilidad ambiental.
          </div>
        </div>
      </section>

      {/* Símbolos del SENA (Escudo, Bandera, Logo) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider block mb-1">
              Patrimonio Heráldico
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Símbolos de la Identidad SENA
            </h2>
          </div>

          {/* Interactive Symbol Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
            <button
              onClick={() => setSelectedSymbolId('shield')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedSymbolId === 'shield'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              El Escudo
            </button>
            <button
              onClick={() => setSelectedSymbolId('flag')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedSymbolId === 'flag'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              La Bandera
            </button>
            <button
              onClick={() => setSelectedSymbolId('logo')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedSymbolId === 'logo'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              El Logotipo
            </button>
          </div>
        </div>

        {/* Selected Symbol Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            {selectedSymbolId === 'shield' && (
              <div className="relative p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-inner w-full max-w-sm flex flex-col items-center">
                <img
                  src="https://www.sena.edu.co/assets/escudo-CKAC4aSg.png"
                  alt="Escudo oficial del SENA representando los sectores industrial, comercial y agropecuario"
                  className="w-80 h-80 object-contain rounded-lg shadow-sm"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/src/assets/images/sena_symbols_shield_1793115171227.jpg') {
                      target.src = '/src/assets/images/sena_symbols_shield_1793115171227.jpg';
                    }
                  }}
                />
                <span className="text-xs text-slate-500 mt-3 text-center">
                  Emblema Institucional de los Tres Sectores de la Economía
                </span>
              </div>
            )}

            {selectedSymbolId === 'flag' && (
              <div className="w-full max-w-sm h-64 bg-white border-2 border-slate-300 rounded-xl shadow-inner flex flex-col items-center justify-center relative p-6">
                <div className="w-32 h-32 rounded-full border-4 border-[#39A900] bg-white flex items-center justify-center p-2 shadow-md overflow-hidden">
                  <img
                    src="https://www.sena.edu.co/assets/escudo-CKAC4aSg.png"
                    alt="Escudo oficial del SENA en la bandera"
                    className="w-24 h-24 object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/src/assets/images/sena_symbols_shield_1793115171227.jpg') {
                        target.src = '/src/assets/images/sena_symbols_shield_1793115171227.jpg';
                      }
                    }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-semibold text-slate-800 block">Bandera Oficial del SENA</span>
                  <span className="text-[11px] text-slate-500">Color Blanco Puro con Escudo Oficial · Símbolo de Paz y Fraternidad</span>
                </div>
              </div>
            )}

            {selectedSymbolId === 'logo' && (
              <div className="w-full max-w-sm h-64 bg-slate-900 rounded-xl flex flex-col items-center justify-center p-6 text-white relative shadow-inner">
                {/* Official Vector Logo display */}
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <SenaLogo className="w-28 h-28" fill="#39a900" />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm font-bold text-white block">Logotipo Oficial SENA</span>
                  <span className="text-xs text-slate-400">El caminante hacia el porvenir · Símbolo de formación para el trabajo</span>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedSymbol.name}</h3>
            <p className="text-sm font-medium text-[#39A900] mb-4">{selectedSymbol.subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedSymbol.description}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Significado de sus elementos constitutivos:
              </span>
              <div className="grid grid-cols-1 gap-3">
                {selectedSymbol.elements.map((el, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-slate-800 block mb-0.5">{el.title}</span>
                    <span className="text-xs text-slate-600">{el.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Himno del SENA Interactivo */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
              Himno Institucional
            </span>
            <h2 className="text-2xl font-bold text-white">
              {INSTITUTIONAL_INFO.anthem.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
              <span>Letra: {INSTITUTIONAL_INFO.anthem.lyricsBy}</span>
              <span aria-hidden="true">·</span>
              <span>Música: {INSTITUTIONAL_INFO.anthem.musicBy}</span>
            </div>
          </div>

          {/* Audio Synthesizer Player Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleAnthem}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                isPlayingAnthem
                  ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                  : 'bg-[#39A900] hover:bg-emerald-600 text-white shadow-md'
              }`}
            >
              {isPlayingAnthem ? (
                <>
                  <span className="w-2.5 h-2.5 bg-white rounded-sm animate-pulse" />
                  Pausar Fanfarria del Himno
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Escuchar Marcha Oficial (Melodía Web Audio)
                </>
              )}
            </button>
          </div>
        </div>

        {/* Anthem Chorus and Stanzas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Coro */}
          <div className={`p-6 rounded-xl border transition-all ${
            isPlayingAnthem ? 'bg-slate-800/80 border-emerald-500/50 ring-1 ring-emerald-500/30' : 'bg-slate-800/50 border-slate-700'
          }`}>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-3">
              CORO OFICIAL (Todos los aprendices)
            </span>
            <blockquote className="text-lg font-medium leading-relaxed italic text-white whitespace-pre-line">
              {INSTITUTIONAL_INFO.anthem.chorus}
            </blockquote>
            {isPlayingAnthem && (
              <div className="mt-4 text-xs text-emerald-300 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Reproduciendo acordes marciales del coro...</span>
              </div>
            )}
          </div>

          {/* Estrofas */}
          <div className="space-y-4">
            {INSTITUTIONAL_INFO.anthem.stanzas.map((st) => (
              <div key={st.number} className="p-4 rounded-lg bg-slate-800/30 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 block mb-1">
                  Estrofa {st.number}
                </span>
                <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                  {st.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Éticos del Aprendiz */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="mb-6">
          <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider block mb-1">
            Cultura de Integridad
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Valores Institucionales del Aprendiz SENA
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Principios que orientan el comportamiento, la convivencia y el rigor técnico en los ambientes de formación y en las empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSTITUTIONAL_INFO.coreValues.map((val, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#39A900]/40 transition-all">
              <span className="text-xs font-mono font-semibold text-[#39A900] block mb-1">0{idx + 1}.</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Module Completion Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-emerald-50 border border-emerald-200">
        <div>
          <h3 className="text-base font-bold text-emerald-950">
            {isCompleted ? '✓ Módulo 1 Completado con Éxito' : '¿Comprendiste la Identidad y Valores del SENA?'}
          </h3>
          <p className="text-xs text-emerald-800 mt-0.5">
            El siguiente paso es conocer en profundidad tus Derechos, Deberes y el Reglamento del Aprendiz.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onNextModule}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Avanzar a Capítulos reglamento del aprendiz SENA →
          </button>
        </div>
      </div>
    </div>
  );
};
