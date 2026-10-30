import React, { useState, useMemo } from 'react';
import { Apprentice } from '../types/induction';
import { SenaLogo } from './SenaLogo';

interface InstructorManagementProps {
  apprentices: Apprentice[];
  onUpdateApprentice: (updated: Apprentice) => void;
  onAddApprentice: (newApprentice: Apprentice) => void;
  onSelectApprentice: (apprentice: Apprentice) => void;
  onOpenCertificate: (apprentice: Apprentice) => void;
}

export const InstructorManagement: React.FC<InstructorManagementProps> = ({
  apprentices,
  onUpdateApprentice,
  onAddApprentice,
  onSelectApprentice,
  onOpenCertificate
}) => {
  const [selectedFicha, setSelectedFicha] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals state
  const [editingPlanApprentice, setEditingPlanApprentice] = useState<Apprentice | null>(null);
  const [planNotes, setPlanNotes] = useState<string>('');
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // New apprentice form state
  const [newName, setNewName] = useState('');
  const [newDoc, setNewDoc] = useState('');
  const [newDocType, setNewDocType] = useState<'CC' | 'TI'>('CC');
  const [newEmail, setNewEmail] = useState('');
  const [newFicha, setNewFicha] = useState('2874102');

  const filteredApprentices = useMemo(() => {
    return apprentices.filter((app) => {
      const matchFicha = selectedFicha === 'all' || app.fichaNumber === selectedFicha;
      const matchStatus = selectedStatus === 'all' || app.status === selectedStatus;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        app.name.toLowerCase().includes(q) || 
        app.documentNumber.includes(q) ||
        app.email.toLowerCase().includes(q);
      return matchFicha && matchStatus && matchSearch;
    });
  }, [apprentices, selectedFicha, selectedStatus, searchQuery]);

  // Cohort Stats
  const stats = useMemo(() => {
    const total = apprentices.length;
    const completed = apprentices.filter(a => a.status === 'completed').length;
    const needsImprovement = apprentices.filter(a => a.status === 'needs_improvement').length;
    const inProgress = apprentices.filter(a => a.status === 'in_progress').length;
    const pending = apprentices.filter(a => a.status === 'pending').length;

    const evaluatedApprentices = apprentices.filter(a => a.evaluationScore !== null);
    const avgScore = evaluatedApprentices.length > 0
      ? Math.round(evaluatedApprentices.reduce((sum, a) => sum + (a.evaluationScore || 0), 0) / evaluatedApprentices.length)
      : 0;

    const passRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, needsImprovement, inProgress, pending, avgScore, passRate };
  }, [apprentices]);

  const handleOpenPlanModal = (app: Apprentice) => {
    setEditingPlanApprentice(app);
    setPlanNotes(app.improvementPlanNotes || 'Desarrollar taller de refuerzo sobre el Acuerdo 0009 de 2024 (Reglamento vigente), enfocado en faltas académicas vs disciplinarias y modalidades de etapa productiva.');
  };

  const handleSavePlan = () => {
    if (!editingPlanApprentice) return;
    const updated: Apprentice = {
      ...editingPlanApprentice,
      improvementPlanAssigned: true,
      improvementPlanNotes: planNotes,
      status: 'needs_improvement'
    };
    onUpdateApprentice(updated);
    setEditingPlanApprentice(null);
  };

  const handleCreateApprentice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newDoc) return;

    const program = newFicha === '2874102' 
      ? 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)'
      : 'Tecnólogo en Gestión Administrativa';

    const newApp: Apprentice = {
      id: `app-${Date.now()}`,
      name: newName,
      documentNumber: newDoc,
      documentType: newDocType,
      email: newEmail || `${newName.toLowerCase().replace(/\s+/g, '')}@misena.edu.co`,
      phone: '3000000000',
      fichaNumber: newFicha,
      programName: program,
      regional: 'Regional Distrito Capital',
      centro: 'Centro de Tecnologías de la Información y las Comunicaciones (CTIC)',
      progress: 0,
      status: 'pending',
      completedModules: [],
      evaluationScore: null
    };

    onAddApprentice(newApp);
    setIsAddModalOpen(false);
    setNewName('');
    setNewDoc('');
    setNewEmail('');
  };

  const handleExportCSV = () => {
    const headers = ['Nombre', 'Tipo Doc', 'Documento', 'Ficha', 'Programa', 'Progreso (%)', 'Estado', 'Puntaje', 'Codigo Certificado', 'Plan Mejoramiento'];
    const rows = filteredApprentices.map(a => [
      `"${a.name}"`,
      a.documentType,
      a.documentNumber,
      a.fichaNumber,
      `"${a.programName}"`,
      a.progress,
      a.status,
      a.evaluationScore !== null ? a.evaluationScore : 'Sin evaluar',
      a.certificateCode || 'N/A',
      a.improvementPlanAssigned ? 'Asignado' : 'No requerido'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SENA_Reporte_Induccion_Ficha_${selectedFicha}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header Overview */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs text-[#00324D] font-bold mb-2">
              <SenaLogo className="w-5 h-5 shrink-0" fill="#39a900" />
              <span>Módulo de Gestión</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Coordinación Académica & Instructores de Inducción</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2" style={{ textWrap: 'balance' }}>
              Gestión y Seguimiento de Inducción de Aprendices
            </h1>
            <p className="text-slate-600 text-xs leading-relaxed">
              Monitorea en tiempo real la apropiación de derechos, deberes y valores institucionales. Identifica aprendices que requieren planes pedagógicos de mejoramiento y expide certificaciones oficiales.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 text-xs font-bold text-white bg-[#39A900] hover:bg-emerald-700 rounded-lg shadow-sm transition-colors"
            >
              + Matricular Nuevo Aprendiz
            </button>
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              Exportar Reporte (CSV)
            </button>
          </div>
        </div>

        {/* 4 Key Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Total Aprendices en Ficha
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">{stats.total}</span>
              <span className="text-xs text-slate-500">aprendices</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
              Tasa de Aprobación
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-700 font-mono tabular-nums">{stats.passRate}%</span>
              <span className="text-xs text-emerald-600">{stats.completed} certificados</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Promedio de Evaluación
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#00324D] font-mono tabular-nums">{stats.avgScore}%</span>
              <span className="text-xs text-slate-500">sobre 100%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
            <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block mb-1">
              Planes de Mejoramiento
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-amber-700 font-mono tabular-nums">{stats.needsImprovement}</span>
              <span className="text-xs text-amber-700">en nivelación</span>
            </div>
          </div>
        </div>
      </section>

      {/* Appropriation Diagnostics (Topic Breakdown) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider block mb-1">
            Diagnóstico Pedagógico de Apropiación
          </span>
          <h3 className="text-xl font-bold text-slate-900">
            Nivel de Dominio por Área Temática de la Inducción
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Identifica qué conceptos fueron más asimilados y en cuáles se sugiere realizar un taller presencial de refuerzo en el ambiente.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>Identidad SENA, Símbolos e Historia</span>
              <span className="font-mono font-bold text-emerald-700">96% apropiación alta</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-[#39A900] h-2 rounded-full" style={{ width: '96%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>Derechos del Aprendiz (Capítulo II)</span>
              <span className="font-mono font-bold text-emerald-700">92% apropiación alta</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-[#39A900] h-2 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>Deberes, Carné y Plazos de Inasistencia (3 días)</span>
              <span className="font-mono font-bold text-blue-700">84% apropiación media-alta</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '84%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>Modalidades de Etapa Productiva (Contrato vs Pasantía)</span>
              <span className="font-mono font-bold text-amber-700">74% requiere refuerzo sugerido</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: '74%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>Faltas, Debido Proceso y Comité de Evaluación</span>
              <span className="font-mono font-bold text-rose-700">68% atención prioritaria</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-rose-500 h-2 rounded-full" style={{ width: '68%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Roster & Filter Controls */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Ficha filter */}
            <select
              value={selectedFicha}
              onChange={(e) => setSelectedFicha(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#39A900]"
            >
              <option value="all">Todas las Fichas</option>
              <option value="2874102">Ficha 2874102 (ADSO)</option>
              <option value="2874105">Ficha 2874105 (Gestión Admin)</option>
            </select>

            {/* Status filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#39A900]"
            >
              <option value="all">Todos los Estados</option>
              <option value="completed">Aprobados / Certificados</option>
              <option value="in_progress">En Progreso</option>
              <option value="pending">Sin Iniciar</option>
              <option value="needs_improvement">Requiere Nivelación</option>
            </select>
          </div>

          {/* Search box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre o documento..."
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
            />
          </div>
        </div>

        {/* Apprentices Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-6">Aprendiz</th>
                <th className="py-3.5 px-4">Documento</th>
                <th className="py-3.5 px-4">Ficha</th>
                <th className="py-3.5 px-4">Progreso</th>
                <th className="py-3.5 px-4">Evaluación</th>
                <th className="py-3.5 px-4">Estado</th>
                <th className="py-3.5 px-6 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {filteredApprentices.map((app) => {
                return (
                  <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900">{app.name}</div>
                      <div className="text-[11px] text-slate-400">{app.email}</div>
                    </td>

                    <td className="py-4 px-4 font-mono">
                      {app.documentType} {app.documentNumber}
                    </td>

                    <td className="py-4 px-4">
                      <span className="font-mono font-medium text-slate-800">{app.fichaNumber}</span>
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-[#39A900] h-full"
                            style={{ width: `${app.progress}%` }}
                          />
                        </div>
                        <span className="font-mono text-[11px] tabular-nums font-semibold">{app.progress}%</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-mono font-semibold">
                      {app.evaluationScore !== null ? (
                        <span className={app.evaluationScore >= 80 ? 'text-emerald-700' : 'text-rose-700'}>
                          {app.evaluationScore}%
                        </span>
                      ) : (
                        <span className="text-slate-400 font-sans font-normal italic">Pendiente</span>
                      )}
                    </td>

                    <td className="py-4 px-4">
                      {/* Zero-Pill text metadata display */}
                      {app.status === 'completed' && (
                        <span className="font-semibold text-emerald-800">
                          Aprobado
                        </span>
                      )}
                      {app.status === 'in_progress' && (
                        <span className="font-medium text-blue-800">
                          En Progreso
                        </span>
                      )}
                      {app.status === 'pending' && (
                        <span className="text-slate-500">
                          Sin Iniciar
                        </span>
                      )}
                      {app.status === 'needs_improvement' && (
                        <span className="font-bold text-amber-800">
                          Plan de Mejora
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-6 text-right space-x-2">
                      {app.status === 'completed' && (
                        <button
                          onClick={() => onOpenCertificate(app)}
                          className="px-2.5 py-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200 transition-colors"
                        >
                          Certificado
                        </button>
                      )}

                      <button
                        onClick={() => handleOpenPlanModal(app)}
                        className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 transition-colors"
                      >
                        {app.improvementPlanAssigned ? 'Ver Plan' : 'Asignar Plan'}
                      </button>

                      <button
                        onClick={() => onSelectApprentice(app)}
                        className="px-2.5 py-1 text-[11px] font-semibold text-[#00324D] hover:underline"
                      >
                        Simular Aprendiz
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredApprentices.length === 0 && (
          <div className="text-center py-12 p-6">
            <p className="text-xs font-semibold text-slate-600">No hay aprendices registrados con estos filtros.</p>
          </div>
        )}
      </section>

      {/* Plan de Mejoramiento Modal */}
      {editingPlanApprentice && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Plan de Mejoramiento Pedagógico
                </h3>
                <p className="text-xs text-slate-500">
                  Aprendiz: {editingPlanApprentice.name} (Ficha {editingPlanApprentice.fichaNumber})
                </p>
              </div>
              <button
                onClick={() => setEditingPlanApprentice(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Fundamento Art. 7 y 26 del Reglamento:</span>
                <p className="text-slate-600">
                  El plan de mejoramiento pedagógico es una medida concertada para subsanar debilidades en los resultados de aprendizaje o en la apropiación de la norma antes de cualquier sanción formal.
                </p>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">
                  Acciones Formativas y Compromisos Asignados:
                </label>
                <textarea
                  rows={4}
                  value={planNotes}
                  onChange={(e) => setPlanNotes(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  placeholder="Detalla las actividades de refuerzo, evidencias a entregar y fecha límite..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-400">Plazo de cumplimiento: 5 días hábiles</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingPlanApprentice(null)}
                    className="px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSavePlan}
                    className="px-4 py-1.5 font-bold text-white bg-[#00324D] hover:bg-slate-800 rounded-lg shadow-sm"
                  >
                    Guardar Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Matricular Nuevo Aprendiz Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Matricular Aprendiz a Inducción
                </h3>
                <p className="text-xs text-slate-500">Registro oficial en ficha formativa</p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateApprentice} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Nombre Completo:</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Ej: Andrés Felipe Castro"
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Tipo Doc:</label>
                  <select
                    value={newDocType}
                    onChange={(e) => setNewDocType(e.target.value as 'CC' | 'TI')}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  >
                    <option value="CC">CC</option>
                    <option value="TI">TI</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="font-bold text-slate-800 block mb-1">Número Documento:</label>
                  <input
                    type="text"
                    required
                    value={newDoc}
                    onChange={(e) => setNewDoc(e.target.value)}
                    placeholder="Ej: 1029384756"
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Ficha de Caracterización:</label>
                <select
                  value={newFicha}
                  onChange={(e) => setNewFicha(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                >
                  <option value="2874102">2874102 - Análisis y Desarrollo de Software (ADSO)</option>
                  <option value="2874105">2874105 - Gestión Administrativa</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Correo Institucional / Personal:</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="ejemplo@misena.edu.co"
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white bg-[#39A900] hover:bg-emerald-700 rounded-lg shadow-sm"
                >
                  Registrar Aprendiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
