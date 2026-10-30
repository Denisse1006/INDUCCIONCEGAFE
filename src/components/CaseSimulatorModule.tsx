import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/inductionData';
import { CaseStudy } from '../types/induction';

interface CaseSimulatorModuleProps {
  onCompleteModule: () => void;
  onNextModule: () => void;
  isCompleted: boolean;
}

export const CaseSimulatorModule: React.FC<CaseSimulatorModuleProps> = ({
  onCompleteModule,
  onNextModule,
  isCompleted
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [selectedDecisions, setSelectedDecisions] = useState<{ [caseId: string]: string }>({});

  const currentCase = CASE_STUDIES[activeCaseIndex];
  const selectedDecisionId = selectedDecisions[currentCase.id];
  const chosenDecision = currentCase.decisions.find(d => d.id === selectedDecisionId);

  const handleSelectDecision = (decisionId: string) => {
    setSelectedDecisions(prev => ({
      ...prev,
      [currentCase.id]: decisionId
    }));
  };

  const answeredCount = Object.keys(selectedDecisions).length;
  const isAllCasesResolved = answeredCount === CASE_STUDIES.length;

  return (
    <div className="space-y-12 pb-16">
      {/* Module Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-[#39A900] font-semibold mb-2">
            <span>Módulo 04</span>
            <span aria-hidden="true">·</span>
            <span>Simulador Interactivo de Casos & Dilemas</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3" style={{ textWrap: 'balance' }}>
            Toma de Decisiones y Situaciones Reales del Aprendiz
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            En el SENA te enfrentarás a situaciones cotidianas donde deberás aplicar el Reglamento y los valores institucionales. Analiza cada caso, toma una postura y observa las consecuencias formativas y legales de tu decisión.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-100">
          {CASE_STUDIES.map((c, idx) => {
            const isResolved = !!selectedDecisions[c.id];
            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                  activeCaseIndex === idx
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Caso 0{idx + 1}: {c.character}</span>
                {isResolved && <span className="text-emerald-400 font-bold">✓</span>}
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Case Simulation Stage */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        {/* Case Narrative Box */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-mono text-emerald-700 font-bold uppercase">{currentCase.tag}</span>
            <span>Protagonista: {currentCase.character} ({currentCase.role})</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{currentCase.title}</h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm leading-relaxed mb-6">
            <p className="font-medium mb-2 text-slate-900">Situación planteada:</p>
            {currentCase.situation}
          </div>

          <h3 className="text-base font-bold text-slate-900 mb-4">
            {currentCase.question}
          </h3>

          {/* Decision Choices */}
          <div className="space-y-3">
            {currentCase.decisions.map((decision) => {
              const isSelected = selectedDecisionId === decision.id;
              return (
                <button
                  key={decision.id}
                  onClick={() => handleSelectDecision(decision.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-[#39A900] bg-emerald-50/40 ring-1 ring-[#39A900]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                      isSelected
                        ? 'border-[#39A900] bg-[#39A900] text-white'
                        : 'border-slate-300 text-slate-400'
                    }`}>
                      {decision.id.toUpperCase()}
                    </div>
                    <span className="text-xs text-slate-800 font-medium leading-relaxed">
                      {decision.action}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback & Consequence Analysis Panel */}
        {chosenDecision && (
          <div className={`p-6 rounded-xl border mt-6 transition-all ${
            chosenDecision.isCorrect
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-amber-50 border-amber-300 text-amber-950'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                chosenDecision.isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-900'
              }`}>
                {chosenDecision.isCorrect ? 'Decisión Acorde al Reglamento' : 'Decisión con Riesgo Disciplinario'}
              </span>
              <span className="text-xs text-slate-600 font-medium">Análisis de la consecuencia:</span>
            </div>

            <p className="text-xs leading-relaxed font-medium mb-3">
              {chosenDecision.consequence}
            </p>

            <div className="p-3 bg-white/70 rounded-lg border border-black/5 text-[11px]">
              <span className="font-bold block mb-0.5">Fundamento Reglamentario:</span>
              <span className="font-mono text-slate-700">{chosenDecision.regulatoryBasis}</span>
            </div>

            <div className="mt-4 flex justify-end">
              {activeCaseIndex < CASE_STUDIES.length - 1 ? (
                <button
                  onClick={() => setActiveCaseIndex(prev => prev + 1)}
                  className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Siguiente Caso →
                </button>
              ) : (
                <span className="text-xs font-semibold text-emerald-800">
                  ✓ Has explorado los 3 casos prácticos
                </span>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Completion Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-emerald-50 border border-emerald-200">
        <div>
          <h3 className="text-base font-bold text-emerald-950">
            {isAllCasesResolved ? '✓ Casos Analizados Exitosamente' : `Progreso de Simulación: ${answeredCount}/3 Casos`}
          </h3>
          <p className="text-xs text-emerald-800 mt-0.5">
            ¡Estás listo para presentar la Evaluación Interactiva de Apropiación y Certificarte!
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isCompleted && (
            <button
              onClick={onCompleteModule}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#39A900] hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Completar Módulo 4
            </button>
          )}
          <button
            onClick={onNextModule}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Ir a la Evaluación Final →
          </button>
        </div>
      </div>
    </div>
  );
};
