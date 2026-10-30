export type ModuleId = 
  | 'identity' 
  | 'rights_duties' 
  | 'pathway_wellness' 
  | 'case_simulator' 
  | 'evaluation' 
  | 'instructor_mgmt'
  | 'landing'
  | 'registration';

export type UserRole = 'apprentice' | 'instructor';

export interface Apprentice {
  id: string;
  name: string;
  documentNumber: string;
  documentType: 'CC' | 'TI' | 'PPT' | 'CE';
  email: string;
  phone: string;
  fichaNumber: string;
  programName: string;
  regional: string;
  centro: string;
  progress: number; // 0 - 100
  status: 'completed' | 'in_progress' | 'pending' | 'needs_improvement';
  completedModules: string[];
  evaluationScore: number | null; // e.g. 85 / 100
  evaluationDate?: string;
  certificateCode?: string;
  improvementPlanAssigned?: boolean;
  improvementPlanNotes?: string;
}

export interface EvaluationQuestion {
  id: string;
  category: 'Identidad Institucional' | 'Derechos del Aprendiz' | 'Deberes del Aprendiz' | 'Faltas y Sanciones' | 'Etapa Productiva' | 'Bienestar al Aprendiz';
  question: string;
  scenario?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  articleReference: string;
  explanation: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  character: string;
  role: string;
  situation: string;
  question: string;
  decisions: {
    id: string;
    action: string;
    isCorrect: boolean;
    consequence: string;
    regulatoryBasis: string;
  }[];
}

export interface InstitutionalSymbol {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  elements: { title: string; meaning: string }[];
}

export interface RegulationItem {
  id: string;
  type: 'principio' | 'derecho' | 'deber' | 'prohibicion' | 'falta';
  chapter: string; // e.g. "Capítulo I", "Capítulo II", "Capítulo III", "Capítulo IV", "Capítulo V"
  orderIndex: number;
  article: string;
  title: string;
  description: string;
  category: 'Principios' | 'Académico' | 'Disciplinario' | 'Convivencia' | 'Representación' | 'Bienestar';
  consequenceOrImportance: string;
}
