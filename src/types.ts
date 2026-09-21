export interface TreatmentItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  iconName: string;
  keyAspects: string[];
}

export interface LifeStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  recommendedAge: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  disclaimer: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LocationInfo {
  name: string;
  note: string;
  available: boolean;
}

export interface AgendaFormData {
  fullName: string;
  phone: string;
  city: string;
  patientStage: string;
  treatmentInterest: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}
