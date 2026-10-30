import React, { useState, useMemo } from 'react';
import { REGULATIONS } from '../data/inductionData';
import { RegulationItem } from '../types/induction';

interface RightsDutiesModuleProps {
  onCompleteModule: () => void;
  onNextModule: () => void;
  isCompleted: boolean;
}

export type ChapterId = 'all' | 'Capítulo I' | 'Capítulo II' | 'Capítulo III' | 'Capítulo IV' | 'Capítulo V';

interface ChapterMeta {
  id: 'Capítulo I' | 'Capítulo II' | 'Capítulo III' | 'Capítulo IV' | 'Capítulo V';
  shortTitle: string;
  fullTitle: string;
  articlesRange: string;
  count: number;
  badgeLabel: string;
  summary: string;
  accent: {
    border: string;
    bg: string;
    text: string;
    activeRing: string;
    tagBg: string;
    lightBorder: string;
    dotColor: string;
  };
}

const CHAPTERS: ChapterMeta[] = [
  {
    id: 'Capítulo I',
    shortTitle: 'Definiciones y Principios',
    fullTitle: 'Capítulo I: Definiciones y Principios Generales',
    articlesRange: 'Artículos 2, 4 y 5',
    count: 3,
    badgeLabel: 'Principios Rectores',
    summary: 'Fundamentos axiológicos de la Formación Profesional Integral (FPI): respeto a la dignidad humana, equidad de género, enfoque diferencial, ajustes razonables, autonomía personal y corresponsabilidad formativa.',
    accent: {
      border: 'border-purple-500 dark:border-purple-400',
      bg: 'bg-purple-50/80 dark:bg-purple-950/40',
      text: 'text-purple-700 dark:text-purple-300',
      activeRing: 'ring-2 ring-purple-500/60',
      tagBg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200',
      lightBorder: 'border-purple-200 dark:border-purple-800',
      dotColor: 'bg-purple-500'
    }
  },
  {
    id: 'Capítulo II',
    shortTitle: 'Derechos del Aprendiz',
    fullTitle: 'Capítulo II: Derechos del Aprendiz SENA',
    articlesRange: 'Artículo 7 (Numerales 1 al 12)',
    count: 12,
    badgeLabel: '12 Derechos Garantizados',
    summary: 'Facultades y prerrogativas consagradas para todo aprendiz: inducción integral, formación de calidad, acceso a talleres y TIC, carné vigente, bienestar al aprendiz, representatividad y debido proceso.',
    accent: {
      border: 'border-emerald-500 dark:border-emerald-400',
      bg: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      text: 'text-emerald-700 dark:text-emerald-300',
      activeRing: 'ring-2 ring-emerald-500/60',
      tagBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200',
      lightBorder: 'border-emerald-200 dark:border-emerald-800',
      dotColor: 'bg-emerald-500'
    }
  },
  {
    id: 'Capítulo III',
    shortTitle: 'Deberes del Aprendiz',
    fullTitle: 'Capítulo III: Deberes del Aprendiz SENA',
    articlesRange: 'Artículo 9 (Numerales 1 al 10)',
    count: 10,
    badgeLabel: '10 Deberes Ciudadanos',
    summary: 'Compromisos académicos, axiológicos y de convivencia: acatamiento normativo, suscripción de acta, porte visible del carné, asistencia puntual, justificación de inasistencias en 3 días hábiles, honestidad y SST.',
    accent: {
      border: 'border-blue-500 dark:border-blue-400',
      bg: 'bg-blue-50/80 dark:bg-blue-950/40',
      text: 'text-blue-700 dark:text-blue-300',
      activeRing: 'ring-2 ring-blue-500/60',
      tagBg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200',
      lightBorder: 'border-blue-200 dark:border-blue-800',
      dotColor: 'bg-blue-500'
    }
  },
  {
    id: 'Capítulo IV',
    shortTitle: 'Prohibiciones',
    fullTitle: 'Capítulo IV: Prohibiciones de los Aprendices',
    articlesRange: 'Artículo 10 (Numerales 1 al 9)',
    count: 9,
    badgeLabel: '9 Faltas Prohibidas',
    summary: 'Límites normativos estrictos en entornos presenciales y virtuales: cero tolerancia a drogas, alcohol, armas, falsedad documental, fraude/plagio en evaluaciones, acoso, discriminación y desacato a normas de seguridad.',
    accent: {
      border: 'border-rose-500 dark:border-rose-400',
      bg: 'bg-rose-50/80 dark:bg-rose-950/40',
      text: 'text-rose-700 dark:text-rose-300',
      activeRing: 'ring-2 ring-rose-500/60',
      tagBg: 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200',
      lightBorder: 'border-rose-200 dark:border-rose-800',
      dotColor: 'bg-rose-500'
    }
  },
  {
    id: 'Capítulo V',
    shortTitle: 'Faltas, Medidas y Proceso',
    fullTitle: 'Capítulo V: Régimen de Faltas, Medidas Formativas y Debido Proceso',
    articlesRange: 'Artículos 14 al 48 (Modif. Ac. 002/2026)',
    count: 5,
    badgeLabel: 'Régimen Disciplinario',
    summary: 'Clasificación de faltas (académicas y disciplinarias), graduación de levedad o gravedad, planes de mejoramiento pedagógicos, sanciones del Subdirector y garantías constitucionales del Comité de Evaluación.',
    accent: {
      border: 'border-amber-500 dark:border-amber-400',
      bg: 'bg-amber-50/80 dark:bg-amber-950/40',
      text: 'text-amber-700 dark:text-amber-300',
      activeRing: 'ring-2 ring-amber-500/60',
      tagBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      lightBorder: 'border-amber-200 dark:border-amber-800',
      dotColor: 'bg-amber-500'
    }
  }
];

export const RightsDutiesModule: React.FC<RightsDutiesModuleProps> = ({
  onCompleteModule,
  onNextModule,
  isCompleted
}) => {
  const [selectedChapter, setSelectedChapter] = useState<ChapterId>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  // Derive unique categories from items
  const availableCategories = useMemo(() => {
    const cats = Array.from(new Set(REGULATIONS.map(r => r.category)));
    return cats.sort();
  }, []);

  // Filter and strictly sort by orderIndex
  const filteredRegulations = useMemo(() => {
    return REGULATIONS.filter((item) => {
      const matchesChapter = selectedChapter === 'all' || item.chapter === selectedChapter;
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) || 
        item.article.toLowerCase().includes(q) ||
        item.consequenceOrImportance.toLowerCase().includes(q) ||
        item.chapter.toLowerCase().includes(q);
      return matchesChapter && matchesCat && matchesSearch;
    }).sort((a, b) => a.orderIndex - b.orderIndex);
  }, [selectedChapter, selectedCategory, searchQuery]);

  // Active chapter metadata (if a specific chapter is selected)
  const activeChapterMeta = useMemo(() => {
    if (selectedChapter === 'all') return null;
    return CHAPTERS.find(c => c.id === selectedChapter) || null;
  }, [selectedChapter]);

  // Navigation helpers between chapters
  const handleNavigateChapter = (direction: 'prev' | 'next') => {
    const order: ChapterId[] = ['all', 'Capítulo I', 'Capítulo II', 'Capítulo III', 'Capítulo IV', 'Capítulo V'];
    const currentIndex = order.indexOf(selectedChapter);
    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + order.length) % order.length;
      setSelectedChapter(order[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % order.length;
      setSelectedChapter(order[nextIndex]);
    }
  };

  const getTypeStyle = (type: RegulationItem['type']) => {
    switch (type) {
      case 'principio':
        return {
          tagText: 'text-purple-700 dark:text-purple-400',
          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
          borderActive: 'border-purple-400 dark:border-purple-600 ring-1 ring-purple-300 dark:ring-purple-800'
        };
      case 'derecho':
        return {
          tagText: 'text-emerald-700 dark:text-emerald-400',
          badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
          borderActive: 'border-emerald-400 dark:border-emerald-600 ring-1 ring-emerald-300 dark:ring-emerald-800'
        };
      case 'deber':
        return {
          tagText: 'text-blue-700 dark:text-blue-400',
          badgeBg: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
          borderActive: 'border-blue-400 dark:border-blue-600 ring-1 ring-blue-300 dark:ring-blue-800'
        };
      case 'prohibicion':
        return {
          tagText: 'text-rose-700 dark:text-rose-400',
          badgeBg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
          borderActive: 'border-rose-400 dark:border-rose-600 ring-1 ring-rose-300 dark:ring-rose-800'
        };
      case 'falta':
        return {
          tagText: 'text-amber-700 dark:text-amber-400',
          badgeBg: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
          borderActive: 'border-amber-400 dark:border-amber-600 ring-1 ring-amber-300 dark:ring-amber-800'
        };
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header Overview */}
      <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm transition-colors">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-[#39A900] dark:text-[#52c41a] font-semibold mb-2">
            <span>Módulo 02</span>
            <span aria-hidden="true">·</span>
            <span>Reglamento del Aprendiz SENA (Acuerdo 0009 de 2024 / Ac. 002 de 2026)</span>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Estructura normativa oficial y articulado completo del nuevo <strong>Acuerdo 0009 de 2024</strong> (con actualización procedimental del debido proceso Acuerdo 002 del 10 de marzo de 2026). Explora los 39 preceptos organizados por capítulos independientes mediante sus botones dedicados.
          </p>
        </div>

        {/* Quick summary stats strip - Interactive buttons for each chapter */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <button
            type="button"
            onClick={() => setSelectedChapter('all')}
            className={`p-3 rounded-xl text-left transition-all border ${
              selectedChapter === 'all'
                ? 'bg-slate-900 text-white border-slate-900 dark:bg-slate-700 dark:border-slate-600 shadow-sm ring-2 ring-slate-400/40'
                : 'bg-slate-50 dark:bg-slate-700/40 border-slate-200/70 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
            }`}
          >
            <span className={`block mb-1 text-[11px] font-medium ${selectedChapter === 'all' ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
              Norma General
            </span>
            <span className="font-bold text-xs block">39 Disposiciones</span>
          </button>

          {CHAPTERS.map((ch) => {
            const isSelected = selectedChapter === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setSelectedChapter(ch.id)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isSelected
                    ? `${ch.accent.border} ${ch.accent.bg} ${ch.accent.activeRing} shadow-sm`
                    : 'bg-slate-50 dark:bg-slate-700/40 border-slate-200/70 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <span className={`block mb-1 text-[11px] font-semibold ${isSelected ? ch.accent.text : 'text-slate-600 dark:text-slate-400'}`}>
                  {ch.id}
                </span>
                <span className={`font-bold text-xs block ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                  {ch.count} {ch.count === 1 ? 'Artículo' : 'Artículos'}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* DEDICATED CHAPTER BUTTONS NAVIGATION (Cada capítulo en su propio botón) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#39A900]"></span>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Capítulos del Acuerdo 0009 de 2024
              </h2>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Haz clic en cada botón para abrir y explorar individualmente el articulado oficial de ese capítulo.
            </p>
          </div>

          {/* Reset / All Chapters Button */}
          <button
            type="button"
            onClick={() => setSelectedChapter('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all flex items-center gap-2 self-start sm:self-auto shrink-0 ${
              selectedChapter === 'all'
                ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-sm ring-2 ring-slate-400/30'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span>Ver Todos los Capítulos</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
              selectedChapter === 'all' ? 'bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }`}>
              39
            </span>
          </button>
        </div>

        {/* 5 Distinct Separated Chapter Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {CHAPTERS.map((ch, idx) => {
            const isSelected = selectedChapter === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setSelectedChapter(ch.id)}
                className={`group relative p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? `${ch.accent.border} ${ch.accent.bg} ${ch.accent.activeRing} shadow-md`
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm'
                }`}
              >
                {/* Chapter badge & count tag */}
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider ${
                      isSelected ? ch.accent.text : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
                    }`}>
                      {ch.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ch.accent.tagBg}`}>
                      {ch.count} {ch.count === 1 ? 'art.' : 'arts.'}
                    </span>
                  </div>

                  {/* Chapter Short Title */}
                  <h3 className={`text-sm font-bold leading-snug mb-1 transition-colors ${
                    isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200 group-hover:text-[#39A900] dark:group-hover:text-[#52c41a]'
                  }`}>
                    {ch.shortTitle}
                  </h3>

                  {/* Range preview */}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {ch.articlesRange}
                  </p>
                </div>

                {/* Footer status of the button */}
                <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 dark:text-slate-500 font-medium">
                    Capítulo #{idx + 1}
                  </span>
                  {isSelected ? (
                    <span className={`font-bold flex items-center gap-1 ${ch.accent.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${ch.accent.dotColor}`}></span>
                      Activo
                    </span>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 font-medium">
                      Abrir →
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ACTIVE CHAPTER BANNER (when a specific chapter is chosen) */}
      {activeChapterMeta && (
        <section className={`p-6 rounded-2xl border ${activeChapterMeta.accent.border} ${activeChapterMeta.accent.bg} shadow-sm transition-all`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${activeChapterMeta.accent.tagBg}`}>
                  {activeChapterMeta.id} · Acuerdo 0009 de 2024
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold font-mono">
                  {activeChapterMeta.articlesRange}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  ({activeChapterMeta.count} artículos en este capítulo)
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {activeChapterMeta.fullTitle}
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
                {activeChapterMeta.summary}
              </p>
            </div>

            {/* Quick Next/Prev Navigation Buttons */}
            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 pt-2 md:pt-0">
              <button
                type="button"
                onClick={() => handleNavigateChapter('prev')}
                className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={() => handleNavigateChapter('next')}
                className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
              >
                Siguiente →
              </button>
              <button
                type="button"
                onClick={() => setSelectedChapter('all')}
                className="px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white underline ml-1"
              >
                Ver todos
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Search & Category Filter Toolbar */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
            Mostrando <strong>{filteredRegulations.length}</strong> {filteredRegulations.length === 1 ? 'disposición' : 'disposiciones'}{' '}
            {selectedChapter === 'all' ? 'de los 5 Capítulos' : `del ${selectedChapter}`}
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por artículo, término..."
              className="px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39A900] w-full sm:w-60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
            >
              <option value="all">Todas las Categorías</option>
              {availableCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-2.5 py-1.5 text-xs text-rose-600 dark:text-rose-400 hover:underline font-semibold"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Results List - Strict Sequential Order within Chapter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRegulations.map((item) => {
            const isExpanded = expandedItemId === item.id;
            const style = getTypeStyle(item.type);

            return (
              <div
                key={item.id}
                className={`p-6 rounded-xl border transition-all bg-white dark:bg-slate-800 ${
                  isExpanded 
                    ? style.borderActive + ' shadow-md' 
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm'
                }`}
              >
                {/* Header with sequence number and Chapter */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900 dark:text-white px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-[11px]">
                      #{item.orderIndex < 10 ? `0${item.orderIndex}` : item.orderIndex}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedChapter(item.chapter as ChapterId)}
                      className="font-semibold text-slate-600 dark:text-slate-300 hover:underline hover:text-[#39A900] dark:hover:text-[#52c41a]"
                      title={`Filtrar por ${item.chapter}`}
                    >
                      {item.chapter}
                    </button>
                    <span aria-hidden="true">·</span>
                    <span className={`font-bold uppercase tracking-wider text-[11px] ${style.tagText}`}>
                      {item.type}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-700 dark:text-slate-300">{item.article}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Practical Rationale / Legal Consequence */}
                <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg border border-slate-100 dark:border-slate-600/60 text-xs text-slate-700 dark:text-slate-200 mb-4">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                    {item.type === 'prohibicion' || item.type === 'falta' ? 'Consecuencia reglamentaria:' : 'Impacto en la formación:'}
                  </span>
                  <span>{item.consequenceOrImportance}</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-slate-400 dark:text-slate-500 text-[11px]">Acuerdo 0009 de 2024 · SENA</span>
                  <button
                    type="button"
                    onClick={() => setExpandedItemId(isExpanded ? null : item.id)}
                    className="text-[#39A900] dark:text-[#52c41a] font-semibold hover:underline"
                  >
                    {isExpanded ? 'Contraer detalle' : 'Ver alcance reglamentario'}
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-2 bg-slate-50 dark:bg-slate-700/50 p-3.5 rounded-lg">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Disposición reglamentaria contextual:
                    </p>
                    <p className="leading-relaxed">
                      Este precepto del <strong>{item.chapter}</strong> es exigible de forma obligatoria durante la Etapa Lectiva y la Etapa Productiva. En caso de transgresión o incumplimiento, se activa el conducto regular formativo y, de ameritarlo, la remisión formal al Comité de Evaluación y Seguimiento según el Art. 48 actualizado con el Acuerdo 002 de 2026.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredRegulations.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No se encontraron artículos con esos términos en el {selectedChapter === 'all' ? 'reglamento' : selectedChapter}.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Intenta con palabras como "carné", "asistencia", "plagio", "bienestar" o "recurso".</p>
            <button
              type="button"
              onClick={() => { setSelectedChapter('all'); setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-700 rounded-lg hover:bg-slate-800"
            >
              Restablecer Filtros y Ver Todo
            </button>
          </div>
        )}

        {/* Bottom Chapter Switcher Bar */}
        {selectedChapter !== 'all' && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              Navegar a otros capítulos del Acuerdo 0009 de 2024:
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleNavigateChapter('prev')}
                className="px-3 py-1.5 font-bold rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={() => setSelectedChapter('all')}
                className="px-3 py-1.5 font-bold rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600"
              >
                Ver los 5 Capítulos
              </button>
              <button
                type="button"
                onClick={() => handleNavigateChapter('next')}
                className="px-3 py-1.5 font-bold rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600"
              >
                Siguiente →
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Debido Proceso y Conducto Regular Flow (Acuerdo 0009 de 2024 y Acuerdo 002 de 2026) */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-md">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
            Garantías Constitucionales · Art. 48 (Acuerdo 002 de 2026)
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">
            El Debido Proceso y el Conducto Regular en el SENA
          </h2>
          <p className="text-slate-300 text-xs leading-relaxed">
            Ningún aprendiz puede ser sancionado sin antes ser escuchado. Se garantiza plenamente el derecho de contradicción, presunción de inocencia, formulación de descargos, aporte de testimonios o evidencias y presentación de recursos de ley.
          </p>
        </div>

        {/* 4-Step Process Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">01. Paso Uno</div>
            <h4 className="text-sm font-bold text-white mb-1">Diálogo Pedagógico</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              El instructor identifica la dificultad o falta leve. Realiza llamado de atención verbal formativo y concertación reflexiva en el ambiente de aprendizaje.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">02. Paso Dos</div>
            <h4 className="text-sm font-bold text-white mb-1">Plan de Mejoramiento</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Formulación formal de plan de mejoramiento académico o disciplinario, con compromisos verificables, cronograma y entrega de evidencias puntuales.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">03. Paso Tres</div>
            <h4 className="text-sm font-bold text-white mb-1">Comité de Evaluación</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Citación formal por Secretaría con traslado de pliego de cargos. El aprendiz rinde descargos, aporta pruebas y cuenta con acompañamiento de su vocero.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">04. Paso Cuatro</div>
            <h4 className="text-sm font-bold text-white mb-1">Acto y Recurso</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subdirector expide resolución motivada. El aprendiz cuenta con derecho formal al recurso de reposición conforme a la ley y la normativa vigente.
            </p>
          </div>
        </div>
      </section>

      {/* Module Completion Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <div>
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-100">
            {isCompleted ? '✓ Módulo 2 Completado' : '¿Apropiaste tus Derechos, Deberes y Prohibiciones?'}
          </h3>
          <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">
            Continúa hacia la Ruta de Formación, Etapa Productiva y los servicios integrales de Bienestar al Aprendiz.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isCompleted && (
            <button
              type="button"
              onClick={onCompleteModule}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#39A900] hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Completar Módulo 2
            </button>
          )}
          <button
            type="button"
            onClick={onNextModule}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Avanzar a Ruta y Bienestar →
          </button>
        </div>
      </div>
    </div>
  );
};
