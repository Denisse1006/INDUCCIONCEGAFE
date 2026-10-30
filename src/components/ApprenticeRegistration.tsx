import React, { useState } from 'react';
import { Apprentice } from '../types/induction';

interface ApprenticeRegistrationProps {
  onRegister: (data: Partial<Apprentice>) => void;
}

export const ApprenticeRegistration: React.FC<ApprenticeRegistrationProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState<Partial<Apprentice>>({
    name: '',
    documentType: 'CC',
    documentNumber: '',
    email: '',
    phone: '',
    fichaNumber: '',
    programName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Registro de Aprendiz</h2>
      
      <div>
        <label className="block text-sm font-medium text-slate-700">Nombre completo</label>
        <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Tipo de documento</label>
          <select value={formData.documentType} onChange={e => setFormData({...formData, documentType: e.target.value as any})} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
            <option value="CC">CC</option>
            <option value="TI">TI</option>
            <option value="PPT">PPT</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Número de documento</label>
          <input required type="text" value={formData.documentNumber} onChange={e => setFormData({...formData, documentNumber: e.target.value})} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Correo electrónico</label>
          <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Celular</label>
          <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Número de ficha</label>
          <input required type="text" value={formData.fichaNumber} onChange={e => setFormData({...formData, fichaNumber: e.target.value})} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Programa</label>
          <input required type="text" value={formData.programName} onChange={e => setFormData({...formData, programName: e.target.value})} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
        </div>
      </div>

      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
        Registrar
      </button>
    </form>
  );
};
