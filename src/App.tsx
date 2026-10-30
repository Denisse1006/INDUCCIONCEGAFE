/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ModuleId, UserRole, Apprentice } from './types/induction';
import { INITIAL_APPRENTICES } from './data/inductionData';
import { Navbar } from './components/Navbar';
import { IdentityModule } from './components/IdentityModule';
import { RightsDutiesModule } from './components/RightsDutiesModule';
import { PathwayWellnessModule } from './components/PathwayWellnessModule';
import { CaseSimulatorModule } from './components/CaseSimulatorModule';
import { EvaluationModule } from './components/EvaluationModule';
import { CertificateModal } from './components/CertificateModal';
import { InstructorManagement } from './components/InstructorManagement';
import { SenaLogo } from './components/SenaLogo';
import { ApprenticeRegistration } from './components/ApprenticeRegistration';
import { LandingPage } from './components/LandingPage';
import { useGoogleSheets } from './utils/useGoogleSheets';

export default function App() {
  const [currentModule, setCurrentModule] = useState<ModuleId>('landing');
  const [userRole, setUserRole] = useState<UserRole>('apprentice');
  const [apprentices, setApprentices] = useState<Apprentice[]>(INITIAL_APPRENTICES);
  const [activeApprenticeId, setActiveApprenticeId] = useState<string | null>(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [certificateApprentice, setCertificateApprentice] = useState<Apprentice | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isBlurring, setIsBlurring] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handleToggleDarkMode = () => {
    setIsBlurring(true);
    // Change page tonal palette in the middle of blur transition
    window.setTimeout(() => {
      setIsDarkMode((prev) => {
        const next = !prev;
        if (next) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return next;
      });
    }, 220);

    window.setTimeout(() => {
      setIsBlurring(false);
    }, 500);
  };

  const activeApprentice = activeApprenticeId ? apprentices.find(a => a.id === activeApprenticeId) || apprentices[0] : apprentices[0];

  const { appendApprenticeData } = useGoogleSheets();

  const handleCompleteModule = (moduleId: ModuleId) => {
    if (activeApprentice.completedModules.includes(moduleId)) return;

    const newCompleted = [...activeApprentice.completedModules, moduleId];
    // 5 modules total: each is 20%
    const newProgress = Math.min(100, newCompleted.length * 20);

    const updated: Apprentice = {
      ...activeApprentice,
      completedModules: newCompleted,
      progress: newProgress,
      status: newProgress === 100 && activeApprentice.evaluationScore !== null ? 'completed' : 'in_progress'
    };

    setApprentices(prev => prev.map(a => a.id === updated.id ? updated : a));
    
    // Explicit user confirmation before mutating data
    if (confirm('¿Deseas sincronizar el progreso de este aprendiz en Google Sheets?')) {
        appendApprenticeData({ name: updated.name, progress: updated.progress, moduleId });
    }
  };

  const handleUpdateApprenticeScore = (score: number, certificateCode: string) => {
    const isPass = score >= 80;
    const completedList = Array.from(new Set([...activeApprentice.completedModules, 'evaluation']));
    const updated: Apprentice = {
      ...activeApprentice,
      completedModules: completedList,
      progress: 100,
      evaluationScore: score,
      evaluationDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      certificateCode: isPass ? certificateCode : undefined,
      status: isPass ? 'completed' : 'needs_improvement',
      improvementPlanAssigned: !isPass,
      improvementPlanNotes: !isPass 
        ? 'Reforzar conceptos del Acuerdo 0009 de 2024 (Reglamento vigente) y modalidades de etapa productiva antes del nuevo intento.'
        : undefined
    };

    setApprentices(prev => prev.map(a => a.id === updated.id ? updated : a));
  };

  const handleUpdateApprentice = (updated: Apprentice) => {
    setApprentices(prev => prev.map(a => a.id === updated.id ? updated : a));
  };

  const handleAddApprentice = (newApp: Apprentice) => {
    setApprentices(prev => [newApp, ...prev]);
  };

  const handleRegisterApprentice = (data: Partial<Apprentice>) => {
    const newApp: Apprentice = {
      ...data,
      id: `app-${Date.now()}`,
      progress: 0,
      status: 'in_progress',
      completedModules: [],
      evaluationScore: null,
      regional: 'Nacional', // Added to satisfy interface
      centro: 'Centro de Formación' // Added to satisfy interface
    } as Apprentice;
    handleAddApprentice(newApp);
    setActiveApprenticeId(newApp.id);
    setIsRegistered(true);
    setCurrentModule('identity');
    // Also sync to sheets
    appendApprenticeData({
      documentType: newApp.documentType,
      name: newApp.name,
      phone: newApp.phone,
      email: newApp.email,
      fichaNumber: newApp.fichaNumber,
      programName: newApp.programName
    });
  };

  const handleSelectApprenticeFromManagement = (app: Apprentice) => {
    setActiveApprenticeId(app.id);
    setUserRole('apprentice');
    setCurrentModule('evaluation');
  };

  const handleOpenCertificate = (app?: Apprentice) => {
    setCertificateApprentice(app || activeApprentice);
    setIsCertificateOpen(true);
  };

  const handleToggleRole = () => {
    if (userRole === 'apprentice') {
      setUserRole('instructor');
      setCurrentModule('instructor_mgmt');
    } else {
      setUserRole('apprentice');
      setCurrentModule('identity');
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 transition-colors duration-300 ${
      isDarkMode ? 'dark' : ''
    } ${isBlurring ? 'theme-blur-transition' : ''}`}>
      {/* 3-Zone Navigation Header */}
      <Navbar
        currentModule={currentModule}
        onSelectModule={setCurrentModule}
        userRole={userRole}
        onToggleRole={handleToggleRole}
        activeApprentice={activeApprentice}
        onOpenCertificate={() => handleOpenCertificate()}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentModule === 'landing' && (
          <LandingPage
            onSelectRole={(role) => {
              setUserRole(role);
              if (role === 'apprentice') {
                 // Don't go straight to identity, go to registration if not registered
                 setCurrentModule('registration');
              } else {
                 setCurrentModule('instructor_mgmt');
              }
            }}
          />
        )}
        
        {currentModule === 'registration' && (
          <ApprenticeRegistration onRegister={handleRegisterApprentice} />
        )}

        {currentModule === 'identity' && (
          <IdentityModule
            onCompleteModule={() => handleCompleteModule('identity')}
            onNextModule={() => {
              handleCompleteModule('identity');
              setCurrentModule('rights_duties');
            }}
            isCompleted={activeApprentice.completedModules.includes('identity')}
          />
        )}

        {currentModule === 'rights_duties' && (
          <RightsDutiesModule
            onCompleteModule={() => handleCompleteModule('rights_duties')}
            onNextModule={() => {
              handleCompleteModule('rights_duties');
              setCurrentModule('pathway_wellness');
            }}
            isCompleted={activeApprentice.completedModules.includes('rights_duties')}
          />
        )}

        {currentModule === 'pathway_wellness' && (
          <PathwayWellnessModule
            onCompleteModule={() => handleCompleteModule('pathway_wellness')}
            onNextModule={() => {
              handleCompleteModule('pathway_wellness');
              setCurrentModule('case_simulator');
            }}
            isCompleted={activeApprentice.completedModules.includes('pathway_wellness')}
          />
        )}

        {currentModule === 'case_simulator' && (
          <CaseSimulatorModule
            onCompleteModule={() => handleCompleteModule('case_simulator')}
            onNextModule={() => {
              handleCompleteModule('case_simulator');
              setCurrentModule('evaluation');
            }}
            isCompleted={activeApprentice.completedModules.includes('case_simulator')}
          />
        )}

        {currentModule === 'evaluation' && (
          <EvaluationModule
            apprentice={activeApprentice}
            onUpdateApprenticeScore={handleUpdateApprenticeScore}
            onOpenCertificate={() => handleOpenCertificate()}
            onViewRegulations={() => setCurrentModule('rights_duties')}
          />
        )}

        {currentModule === 'instructor_mgmt' && (
          <InstructorManagement
            apprentices={apprentices}
            onUpdateApprentice={handleUpdateApprentice}
            onAddApprentice={handleAddApprentice}
            onSelectApprentice={handleSelectApprenticeFromManagement}
            onOpenCertificate={(app) => handleOpenCertificate(app)}
          />
        )}
      </main>

      {/* Official Certificate Modal */}
      {isCertificateOpen && certificateApprentice && (
        <CertificateModal
          apprentice={certificateApprentice}
          onClose={() => setIsCertificateOpen(false)}
        />
      )}

      {/* Institutional Quiet Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <SenaLogo className="w-5 h-5 shrink-0" fill="#39a900" />
            <span className="font-bold text-slate-800">Servicio Nacional de Aprendizaje - SENA</span>
            <span aria-hidden="true">·</span>
            <span>Ministerio del Trabajo de Colombia</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <span className="hover:text-slate-900 cursor-pointer">Reglamento del Aprendiz (Acuerdo 0009 de 2024)</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-900 cursor-pointer">SENA Sofia Plus</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-900 cursor-pointer">Zajuna LMS</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-900 cursor-pointer">Bienestar al Aprendiz</span>
          </div>

          <div className="text-slate-400">
            Prototipo de Gestión & Apropiación Pedagógica
          </div>
        </div>
      </footer>
    </div>
  );
}
