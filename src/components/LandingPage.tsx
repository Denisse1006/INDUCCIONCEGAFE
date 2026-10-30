import React, { useState } from 'react';
import { UserRole } from '../types/induction';
import { SenaLogo } from './SenaLogo';
import { GoogleSignInButton } from './GoogleSignInButton';
import { googleSignIn } from '../utils/auth';

interface LandingPageProps {
  onSelectRole: (role: UserRole) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onSelectRole }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      await googleSignIn();
    } catch (err) {
      console.error('Sign in failed:', err);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="w-20 h-20 mb-8 bg-emerald-50 rounded-2xl flex items-center justify-center p-2 border border-emerald-100">
        <SenaLogo className="w-14 h-14" fill="#39a900" />
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Bienvenido al Portal de Inducción SENA</h1>
      <p className="text-slate-600 mb-6 max-w-md">Selecciona tu rol para acceder a la plataforma y continuar con tu proceso de formación.</p>
      
      <button 
        onClick={() => setIsVideoOpen(true)}
        className="mb-10 text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
        Ver video tutorial
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-8">
        <button 
          onClick={() => onSelectRole('apprentice')}
          className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all text-left group"
        >
          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-[#39A900] group-hover:bg-[#39A900] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Soy Aprendiz</h2>
          <p className="text-slate-600 text-sm">Accede a tus módulos de inducción, reglamento, bienestar y simulador de casos.</p>
        </button>
        
        <button 
          onClick={async () => { await handleSignIn(); onSelectRole('instructor'); }}
          className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all text-left group"
        >
          <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-[#00324D] group-hover:bg-[#00324D] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Soy Instructor</h2>
          <p className="text-slate-600 text-sm">Gestiona la información de los aprendices, revisa progresos y certificaciones.</p>
        </button>
      </div>

      {isSigningIn && <p className="text-sm text-slate-500">Iniciando sesión...</p>}

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-4 w-full max-w-3xl relative">
            <button onClick={() => setIsVideoOpen(false)} className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-slate-900 shadow-lg">✕</button>
            <video controls className="w-full rounded-lg">
              <source src="/public/assets/aistudio/2026__11_58_a.m._1617ce9c.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};
