import React, { useState } from 'react';
import { ModuleId, UserRole, Apprentice } from '../types/induction';
import { SenaLogo } from './SenaLogo';

interface NavbarProps {
  currentModule: ModuleId;
  onSelectModule: (module: ModuleId) => void;
  userRole: UserRole;
  onToggleRole: () => void;
  activeApprentice: Apprentice;
  onOpenCertificate: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentModule,
  onSelectModule,
  userRole,
  onToggleRole,
  activeApprentice,
  onOpenCertificate,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (moduleId: ModuleId) => {
    onSelectModule(moduleId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 no-print w-full transition-colors duration-300">
      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 h-16">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('identity')}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
              title="Inicio - Inducción SENA"
            >
              <SenaLogo className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" fill="#39a900" />
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-[#39A900] transition-colors">
                Inducción SENA
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation links for Desktop (Visible on lg and xl screens) */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('identity')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                currentModule === 'identity'
                  ? 'text-[#39A900] font-semibold border-b-2 border-[#39A900]'
                  : 'hover:text-slate-900'
              }`}
            >
              Identidad SENA
            </button>
            <button
              onClick={() => handleNavClick('rights_duties')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                currentModule === 'rights_duties'
                  ? 'text-[#39A900] font-semibold border-b-2 border-[#39A900]'
                  : 'hover:text-slate-900'
              }`}
            >
              Capitulos reglamento del aprendiz SENA
            </button>
            <button
              onClick={() => handleNavClick('pathway_wellness')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                currentModule === 'pathway_wellness'
                  ? 'text-[#39A900] font-semibold border-b-2 border-[#39A900]'
                  : 'hover:text-slate-900'
              }`}
            >
              Ruta y Bienestar
            </button>
            <button
              onClick={() => handleNavClick('case_simulator')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                currentModule === 'case_simulator'
                  ? 'text-[#39A900] font-semibold border-b-2 border-[#39A900]'
                  : 'hover:text-slate-900'
              }`}
            >
              Simulador de Casos
            </button>
            <button
              onClick={() => handleNavClick('evaluation')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                currentModule === 'evaluation'
                  ? 'text-[#39A900] font-semibold border-b-2 border-[#39A900]'
                  : 'hover:text-slate-900'
              }`}
            >
              Evaluación Final
            </button>
            {userRole === 'instructor' && (
              <button
                onClick={() => handleNavClick('instructor_mgmt')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                  currentModule === 'instructor_mgmt'
                    ? 'text-[#00324D] font-bold border-b-2 border-[#00324D]'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Panel Coordinación
              </button>
            )}
          </nav>

          {/* Zone 3: Actions & Theme Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer shrink-0"
              title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDarkMode ? (
                <>
                  <svg className="w-4 h-4 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" fill="#fbbf24" stroke="none" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="#fbbf24" />
                  </svg>
                  <span className="hidden xl:inline">Modo Claro</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-slate-700 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span className="hidden xl:inline">Modo Oscuro</span>
                </>
              )}
            </button>



            {/* Role Switcher */}
            <button
              onClick={onToggleRole}
              className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                userRole === 'instructor'
                  ? 'bg-[#00324D] text-white hover:bg-slate-800 shadow-sm'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
              }`}
              title={userRole === 'instructor' ? 'Cambiar a Vista Aprendiz' : 'Cambiar a Panel Instructor'}
            >
              {userRole === 'instructor' ? (
                <span>
                  <span className="hidden sm:inline">Vista </span>Aprendiz
                </span>
              ) : (
                <span>
                  <span className="hidden sm:inline">Acceso </span>Instructor
                </span>
              )}
            </button>

            {/* Mobile / Tablet Menu Button (Visible on screens below lg) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
              title="Menú de Navegación"
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg px-4 py-3 space-y-1 transition-all">
          <button
            onClick={() => handleNavClick('identity')}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
              currentModule === 'identity'
                ? 'bg-emerald-50 text-[#39A900]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            01. Identidad SENA
          </button>
          <button
            onClick={() => handleNavClick('rights_duties')}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
              currentModule === 'rights_duties'
                ? 'bg-emerald-50 text-[#39A900]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            02. Capitulos reglamento del aprendiz SENA
          </button>
          <button
            onClick={() => handleNavClick('pathway_wellness')}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
              currentModule === 'pathway_wellness'
                ? 'bg-emerald-50 text-[#39A900]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            03. Ruta y Bienestar al Aprendiz
          </button>
          <button
            onClick={() => handleNavClick('case_simulator')}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
              currentModule === 'case_simulator'
                ? 'bg-emerald-50 text-[#39A900]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            04. Simulador de Casos y Dilemas
          </button>
          <button
            onClick={() => handleNavClick('evaluation')}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
              currentModule === 'evaluation'
                ? 'bg-emerald-50 text-[#39A900]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            05. Evaluación Final de Inducción
          </button>
          {userRole === 'instructor' && (
            <button
              onClick={() => handleNavClick('instructor_mgmt')}
              className={`w-full text-left px-3 py-2 text-xs font-bold rounded-md transition-colors ${
                currentModule === 'instructor_mgmt'
                  ? 'bg-sky-50 text-[#00324D]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Panel de Coordinación Académica
            </button>
          )}
        </div>
      )}

      {/* Subheader strip for session context and progress (Zero Overflow Guaranteed) */}
      <div className="bg-slate-50 border-t border-slate-200/80 px-3 sm:px-6 lg:px-8 py-2 w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 overflow-hidden">
            <span className="font-semibold text-slate-900 truncate shrink-0 max-w-[160px] sm:max-w-xs">
              {userRole === 'instructor' ? 'Perfil: Coordinación / Instructor SENA' : activeApprentice.name}
            </span>
            <span aria-hidden="true" className="text-slate-400 shrink-0">·</span>
            <span className="shrink-0 font-mono">Ficha {activeApprentice.fichaNumber}</span>
            <span aria-hidden="true" className="text-slate-400 shrink-0 hidden md:inline">·</span>
            <span className="hidden md:inline truncate text-slate-500">
              {activeApprentice.programName}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            {userRole === 'apprentice' && (
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-slate-500 text-[11px] sm:text-xs">Progreso:</span>
                <div className="w-20 sm:w-24 bg-slate-200 rounded-full h-2 overflow-hidden shrink-0">
                  <div 
                    className="bg-[#39A900] h-full transition-all duration-300"
                    style={{ width: `${activeApprentice.progress}%` }}
                  />
                </div>
                <span className="font-mono font-semibold tabular-nums text-slate-800 text-[11px] sm:text-xs">
                  {activeApprentice.progress}%
                </span>
              </div>
            )}
            {userRole === 'instructor' && (
              <span className="text-slate-700 font-medium text-[11px] sm:text-xs shrink-0">
                Sede CTIC · Regional D.C.
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
