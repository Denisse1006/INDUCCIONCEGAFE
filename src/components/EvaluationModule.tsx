import React, { useState } from 'react';
import { EVALUATION_QUESTIONS } from '../data/inductionData';
import { Apprentice } from '../types/induction';
import { SenaLogo } from './SenaLogo';

interface EvaluationModuleProps {
  apprentice: Apprentice;
  onUpdateApprenticeScore: (score: number, certificateCode: string) => void;
  onOpenCertificate: () => void;
  onViewRegulations: () => void;
}

export const EvaluationModule: React.FC<EvaluationModuleProps> = ({
  apprentice,
  onUpdateApprenticeScore,
  onOpenCertificate,
  onViewRegulations
}) => {
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(apprentice.evaluationScore !== null);
  const [showExplanations, setShowExplanations] = useState<boolean>(apprentice.evaluationScore !== null);

  const totalQuestions = EVALUATION_QUESTIONS.length;
  const currentQ = EVALUATION_QUESTIONS[currentQuestionIdx];

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const answeredCount = Object.keys(userAnswers).length;
  const isAllAnswered = answeredCount === totalQuestions;

  const handleSubmitEvaluation = () => {
    // Calculate score
    let correctCount = 0;
    EVALUATION_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correctOptionId) {
        correctCount += 1;
      }
    });

    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    const certCode = scorePercentage >= 80 ? `SENA-IND-${apprentice.fichaNumber}-${Math.floor(10000 + Math.random() * 90000)}` : '';

    onUpdateApprenticeScore(scorePercentage, certCode);
    setIsSubmitted(true);
    setShowExplanations(true);
  };

  const handleRetakeEvaluation = () => {
    setUserAnswers({});
    setCurrentQuestionIdx(0);
    setIsSubmitted(false);
    setShowExplanations(false);
  };

  const currentScore = apprentice.evaluationScore;
  const isPassed = currentScore !== null && currentScore >= 80;

  return (
    <div className="space-y-10 pb-16">
      {/* Header Overview */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-[#39A900] font-semibold mb-2">
            <span>Módulo 05</span>
            <span aria-hidden="true">·</span>
            <span>Evaluación Interactiva de Apropiación del Proceso</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3" style={{ textWrap: 'balance' }}>
            Evaluación Integral de Inducción SENA
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Esta prueba interactiva valida la apropiación de los valores institucionales, el Reglamento del Aprendiz vigente (Acuerdo 0009 de 2024), la ruta formativa y las alternativas de etapa productiva.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-6 pt-6 border-t border-slate-100">
            <span>Criterio de aprobación: <strong className="text-slate-800">80% o superior (mínimo 8/10)</strong></span>
            <span aria-hidden="true">·</span>
            <span>Intentos: <strong className="text-slate-800">Ilimitados con retroalimentación</strong></span>
            <span aria-hidden="true">·</span>
            <span>Beneficio: <strong className="text-emerald-700">Certificado Oficial de Aprobación</strong></span>
          </div>
        </div>
      </section>

      {/* Results Screen if already evaluated */}
      {isSubmitted && currentScore !== null && (
        <section className={`p-8 rounded-2xl border shadow-sm ${
          isPassed ? 'bg-emerald-50/70 border-emerald-300' : 'bg-amber-50/70 border-amber-300'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl p-2 shrink-0 flex items-center justify-center ${
                isPassed ? 'bg-white border border-emerald-200' : 'bg-white border border-amber-200'
              }`}>
                <SenaLogo className="w-8 h-8" fill={isPassed ? '#39a900' : '#d97706'} />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className={isPassed ? 'text-emerald-800' : 'text-amber-800'}>
                    {isPassed ? '✓ Resultado: Aprobado' : '⚠ Resultado: Requiere Nivelación'}
                  </span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-slate-600 font-mono">Puntaje Obtenido: {currentScore}%</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {isPassed
                    ? `¡Felicitaciones, ${apprentice.name}! Has apropiado con éxito la Inducción SENA.`
                    : `Has obtenido ${currentScore}%. Necesitas un mínimo de 80% para certificar tu inducción.`}
                </h2>
                <p className="text-xs text-slate-700 max-w-2xl leading-relaxed">
                  {isPassed
                    ? 'Cumples a cabalidad con el conocimiento de tus derechos, deberes, etapas formativas y valores institucionales. Ya puedes descargar y visualizar tu certificado con código único de verificación.'
                    : 'Revisa las justificaciones y los artículos del reglamento a continuación. Puedes consultar nuevamente los módulos y presentar la evaluación tantas veces como sea necesario.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {isPassed ? (
                <button
                  onClick={onOpenCertificate}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#39A900] hover:bg-emerald-700 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                >
                  Ver Certificado Oficial →
                </button>
              ) : (
                <button
                  onClick={onViewRegulations}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
                >
                  Repasar Reglamento
                </button>
              )}
              <button
                onClick={handleRetakeEvaluation}
                className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
              >
                Presentar de Nuevo
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Interactive Question Card */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        {/* Progress & Category Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
              Pregunta {currentQuestionIdx + 1} de {totalQuestions}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-slate-600">
              {currentQ.category}
            </span>
          </div>

          {/* Quick jump question dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {EVALUATION_QUESTIONS.map((q, idx) => {
              const isCurrent = idx === currentQuestionIdx;
              const hasAnswer = !!userAnswers[q.id];
              const isCorrect = isSubmitted && userAnswers[q.id] === q.correctOptionId;
              const isWrong = isSubmitted && hasAnswer && !isCorrect;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIdx(idx)}
                  className={`w-7 h-7 rounded text-xs font-bold transition-all flex items-center justify-center ${
                    isCurrent
                      ? 'ring-2 ring-[#39A900] bg-slate-900 text-white'
                      : isWrong
                      ? 'bg-rose-100 text-rose-800'
                      : isCorrect
                      ? 'bg-emerald-100 text-emerald-800'
                      : hasAnswer
                      ? 'bg-slate-200 text-slate-800'
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  }`}
                  title={`Pregunta ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scenario and Question Prompt */}
        <div className="mb-6">
          {currentQ.scenario && (
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 italic mb-4">
              <span className="font-semibold text-slate-800 not-italic block mb-0.5">Contexto:</span>
              {currentQ.scenario}
            </div>
          )}
          <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </h3>
        </div>

        {/* Options List */}
        <div className="space-y-3 mb-8">
          {currentQ.options.map((opt) => {
            const isSelected = userAnswers[currentQ.id] === opt.id;
            const isCorrect = opt.id === currentQ.correctOptionId;
            const showCorrectStyle = isSubmitted && isCorrect;
            const showWrongStyle = isSubmitted && isSelected && !isCorrect;

            return (
              <button
                key={opt.id}
                disabled={isSubmitted}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  showCorrectStyle
                    ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500'
                    : showWrongStyle
                    ? 'border-rose-500 bg-rose-50 ring-1 ring-rose-500'
                    : isSelected
                    ? 'border-[#39A900] bg-emerald-50/40 ring-1 ring-[#39A900]'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                    showCorrectStyle
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : showWrongStyle
                      ? 'border-rose-600 bg-rose-600 text-white'
                      : isSelected
                      ? 'border-[#39A900] bg-[#39A900] text-white'
                      : 'border-slate-300 text-slate-500 bg-slate-50'
                  }`}>
                    {opt.id.toUpperCase()}
                  </div>
                  <span className={`text-xs leading-relaxed font-medium ${
                    showCorrectStyle ? 'text-emerald-950 font-bold' : showWrongStyle ? 'text-rose-950 font-bold' : 'text-slate-800'
                  }`}>
                    {opt.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation if submitted */}
        {showExplanations && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">Fundamento y Justificación Pedagógica:</span>
              <span className="font-mono text-emerald-700 font-semibold">{currentQ.articleReference}</span>
            </div>
            <p className="leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Navigation / Submission Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <button
            onClick={() => setCurrentQuestionIdx(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIdx === 0}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-lg transition-colors"
          >
            ← Pregunta Anterior
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {currentQuestionIdx < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentQuestionIdx(prev => Math.min(totalQuestions - 1, prev + 1))}
                className="w-full sm:w-auto px-5 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
              >
                Siguiente Pregunta →
              </button>
            ) : !isSubmitted ? (
              <button
                onClick={handleSubmitEvaluation}
                disabled={!isAllAnswered}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#39A900] hover:bg-emerald-700 disabled:opacity-50 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                {isAllAnswered ? 'Enviar y Calificar Evaluación' : `Completa todas (${answeredCount}/${totalQuestions})`}
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};
