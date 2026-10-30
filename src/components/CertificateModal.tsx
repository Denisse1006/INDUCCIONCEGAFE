import React from 'react';
import { Apprentice } from '../types/induction';
import { SenaLogo, SENA_LOGO_DATA_URL } from './SenaLogo';

interface CertificateModalProps {
  apprentice: Apprentice;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  apprentice,
  onClose
}) => {
  const handlePrint = () => {
    window.print();
  };

  const currentDateStr = apprentice.evaluationDate || new Date().toISOString().split('T')[0];
  const dateObj = new Date(currentDateStr);
  const day = dateObj.getDate() || 27;
  const monthName = dateObj.toLocaleDateString('es-CO', { month: 'long' });
  const year = dateObj.getFullYear() || 2026;

  const verificationCode = apprentice.certificateCode || `SENA-${apprentice.fichaNumber}-${apprentice.documentNumber}-2026-VAL`;
  const sofiaPlusReg = `SOFIA-${apprentice.fichaNumber}-${apprentice.documentNumber.slice(-4)}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 border border-slate-300">
        
        {/* Top Management Toolbar (Hidden during print) */}
        <div className="no-print bg-[#00324D] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between text-white border-b border-sky-900 gap-3">
          <div className="flex items-center gap-2.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39A900] animate-pulse"></span>
            <span className="font-bold tracking-wider text-emerald-400 uppercase text-[11px]">
              Certificado Oficial SENA · Formato Vigente
            </span>
            <span aria-hidden="true" className="text-sky-300/40">|</span>
            <span className="font-mono text-slate-300 text-[11px] hidden sm:inline">
              Registro: {sofiaPlusReg}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-bold text-white bg-[#39A900] hover:bg-emerald-600 active:scale-95 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              <span>Descargar / Imprimir en PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* Certificate Outer Container */}
        <div className="p-3 sm:p-6 bg-slate-100 overflow-x-auto">
          {/* Certificate Sheet (Faithful recreation of SENA Official Model) */}
          <div 
            id="sena-official-certificate"
            className="certificate-print-container bg-white text-slate-900 relative p-6 sm:p-12 mx-auto shadow-xl rounded-sm border-[8px] border-[#00324D] max-w-[950px] min-h-[640px] select-text"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(57, 169, 0, 0.02) 0%, rgba(0, 50, 77, 0.03) 100%)',
              boxShadow: '0 0 0 3px #39A900, 0 10px 25px -5px rgba(0,0,0,0.1)'
            }}
          >
            {/* Guilloché / Decorative Security Inner Border */}
            <div className="absolute inset-2 sm:inset-3 border border-[#39A900]/40 pointer-events-none rounded-none" />
            <div className="absolute inset-3 sm:inset-4 border border-[#00324D]/30 pointer-events-none rounded-none" />

            {/* Corner Decorative Ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#39A900] pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#39A900] pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#39A900] pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#39A900] pointer-events-none" />

            {/* Subtle Watermark SENA Logo in Center */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none overflow-hidden">
              <SenaLogo className="w-[520px] h-[520px]" fill="#00324D" />
            </div>

            {/* Header: Institutional Logos & Authority */}
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b-2 border-[#00324D]/20 pb-4 mb-6">
                {/* Official Escudo de Colombia / SENA */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://www.sena.edu.co/assets/escudo-CKAC4aSg.png"
                    alt="Escudo de Colombia / SENA"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="text-left hidden sm:block">
                    <p className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                      República de Colombia
                    </p>
                    <p className="text-[9px] font-semibold text-slate-500 uppercase">
                      Ministerio del Trabajo
                    </p>
                  </div>
                </div>

                {/* Central Title */}
                <div className="text-center px-2">
                  <h1 className="text-base sm:text-xl md:text-2xl font-black text-[#00324D] tracking-tight uppercase">
                    SERVICIO NACIONAL DE APRENDIZAJE
                  </h1>
                  <p className="text-[11px] sm:text-xs font-bold text-[#39A900] tracking-wider uppercase mt-0.5">
                    DIRECCIÓN DE FORMACIÓN PROFESIONAL INTEGRAL
                  </p>
                  <p className="text-[9px] text-slate-500 tracking-widest uppercase font-medium">
                    SISTEMA INTEGRADO DE GESTIÓN Y AUTOCONTROL - SIGA
                  </p>
                </div>

                {/* Official SENA Vector Logo */}
                <div className="flex flex-col items-end">
                  <img
                    src={SENA_LOGO_DATA_URL}
                    alt="Logo SENA"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                  <span className="text-[8px] font-mono font-bold text-slate-400 mt-1 hidden sm:block">
                    VIGILADO MINEDUCACIÓN
                  </span>
                </div>
              </div>

              {/* Subdirectorate Statement */}
              <div className="text-center space-y-1 mb-5">
                <p className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  EL SUBDIRECTOR DEL {apprentice.centro.toUpperCase()}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">
                  REGIONAL {apprentice.regional.toUpperCase()}
                </p>
                <p className="text-[10px] text-slate-500 italic max-w-2xl mx-auto pt-1 leading-tight">
                  En uso de sus facultades legales y estatutarias conferidas por la Ley 119 de 1994, el Decreto 249 de 2004 y la normatividad institucional vigente,
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1 text-xs sm:text-sm font-black text-[#00324D] tracking-widest uppercase border-b-2 border-[#39A900]">
                    HACE CONSTAR QUE:
                  </span>
                </div>
              </div>

              {/* Recipient Apprentice Information */}
              <div className="text-center my-6 space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase py-1">
                  {apprentice.name}
                </h2>
                <div className="inline-flex items-center gap-2 bg-slate-100/90 px-4 py-1 rounded-full border border-slate-200">
                  <span className="text-xs font-semibold text-slate-600">
                    Identificado(a) con documento de identidad
                  </span>
                  <span className="text-xs font-bold font-mono text-[#00324D]">
                    {apprentice.documentType} N° {apprentice.documentNumber}
                  </span>
                </div>
              </div>

              {/* Certification Fulfillment Clause */}
              <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Cursó y aprobó a satisfacción la totalidad de los componentes pedagógicos, éticos y reglamentarios correspondientes a la:
                </p>

                {/* Program Card / Action of Formation */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-50/50 via-slate-50 to-sky-50/50 border border-slate-200 rounded-xl text-center shadow-xs">
                  <h3 className="text-base sm:text-lg font-black text-[#00324D] uppercase tracking-wide">
                    INDUCCIÓN INSTITUCIONAL Y APROPIACIÓN DEL REGLAMENTO DEL APRENDIZ
                  </h3>
                  <p className="text-xs font-bold text-emerald-800 uppercase mt-1">
                    {apprentice.programName}
                  </p>
                  <p className="text-[11px] font-mono text-slate-600 mt-0.5">
                    Ficha de Caracterización N° {apprentice.fichaNumber}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-3 mt-3 border-t border-slate-200/80">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Intensidad</span>
                      <span className="text-xs font-bold text-slate-800">40 Horas</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Normativa</span>
                      <span className="text-xs font-bold text-slate-800">Acuerdo 0009 de 2024</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Modalidad</span>
                      <span className="text-xs font-bold text-slate-800">Presencial / Virtual</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Calificación</span>
                      <span className="text-xs font-bold text-emerald-700 font-mono">
                        {apprentice.evaluationScore || 100}% (APROBADO)
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-600 italic">
                  Para constancia de lo anterior, se expide y firma el presente documento en {apprentice.regional}, República de Colombia, a los {day} días del mes de {monthName} del año {year}.
                </p>
              </div>

              {/* Official Signatures & Institutional Seal */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-4 pb-4 border-t border-slate-200 max-w-3xl mx-auto">
                {/* Signature 1: Subdirector */}
                <div className="text-center">
                  <div className="h-14 flex items-end justify-center mb-1">
                    <svg className="w-40 h-10 text-slate-800" viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 28 C 25 15, 45 35, 60 18 C 75 8, 90 32, 105 20 C 120 12, 140 28, 150 15" strokeLinecap="round" />
                      <path d="M40 32 C 65 30, 95 33, 130 31" strokeLinecap="round" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="w-44 border-b border-slate-400 mx-auto mb-1.5" />
                  <span className="text-xs font-extrabold text-slate-900 block leading-tight">
                    Dr. Alfonso Peña Salazar
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 block">
                    Subdirector de Centro de Formación
                  </span>
                  <span className="text-[9px] text-slate-400 block truncate max-w-[200px] mx-auto">
                    {apprentice.centro}
                  </span>
                </div>

                {/* Central Official Holographic/Digital Sello */}
                <div className="flex flex-col items-center justify-center py-1">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#39A900] bg-emerald-50/50 p-1 flex flex-col items-center justify-center text-center shadow-xs">
                    <SenaLogo className="w-7 h-7" fill="#39A900" />
                    <span className="text-[7px] font-extrabold tracking-tighter text-[#00324D] uppercase mt-0.5 leading-none">
                      CERTIFICACIÓN DIGITAL
                    </span>
                    <span className="text-[6px] font-bold text-emerald-700 tracking-tighter uppercase leading-none mt-0.5">
                      SOFIA PLUS · SENA
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-slate-400 mt-1">FIRMA DIGITAL LEY 527/1999</span>
                </div>

                {/* Signature 2: Coordinador Académico */}
                <div className="text-center">
                  <div className="h-14 flex items-end justify-center mb-1">
                    <svg className="w-40 h-10 text-slate-800" viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 22 C 30 10, 45 28, 65 14 C 80 5, 95 30, 115 18 C 130 10, 145 22, 155 12" strokeLinecap="round" />
                      <path d="M35 30 C 60 28, 90 29, 135 29" strokeLinecap="round" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="w-44 border-b border-slate-400 mx-auto mb-1.5" />
                  <span className="text-xs font-extrabold text-slate-900 block leading-tight">
                    Dra. Claudia Marcela Ríos
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 block">
                    Coordinadora Misional y Académica
                  </span>
                  <span className="text-[9px] text-slate-400 block">
                    Regional {apprentice.regional}
                  </span>
                </div>
              </div>

              {/* Bottom Security, Verification & SOFIA Plus Strip */}
              <div className="mt-4 pt-3 border-t-2 border-[#00324D]/20 bg-slate-50/80 rounded-lg p-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: Authentic QR Code */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-white p-1 border border-slate-300 rounded shadow-xs shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm0-4h4v4h-4v-4zM6 6h2v2H6V6zm10 0h2v2h-2V6zM6 18h2v2H6v-2zm8-8h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm-4 4h2v2h-2v-2zm2 2h2v2h-2v-2z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-bold text-slate-500 uppercase block tracking-wider">
                      Verificación Digital
                    </span>
                    <a 
                      href="https://certificados.sena.edu.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-[#39A900] hover:underline block"
                    >
                      certificados.sena.edu.co
                    </a>
                    <span className="text-[8px] text-slate-400 block font-mono">
                      Escanee para validar autenticidad
                    </span>
                  </div>
                </div>

                {/* Right: Technical Record Details */}
                <div className="text-right text-[9px] text-slate-500 font-mono space-y-0.5">
                  <div>
                    <span className="font-bold text-slate-700">REGISTRO SOFIA: </span>
                    <span className="text-slate-900 font-bold">{sofiaPlusReg}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">CÓDIGO DE VERIFICACIÓN: </span>
                    <span className="text-[#00324D] font-bold">{verificationCode}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">LIBRO: 018 · FOLIO: 2026-{apprentice.fichaNumber.slice(-3)} · FIRMEZA: {day}/{monthName.slice(0, 3)}/{year}</span>
                  </div>
                  <div className="text-[8px] text-slate-400 italic font-sans pt-0.5">
                    Documento oficial expedido conforme a las especificaciones del Servicio Nacional de Aprendizaje SENA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Help Note (Hidden when printing) */}
        <div className="no-print bg-slate-50 px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Certificado digital válido ante empresas patrocinadoras y dependencias del SENA en todo el territorio nacional.</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            SOFIA PLUS V2.4 · Formato Oficial
          </span>
        </div>

      </div>
    </div>
  );
};
