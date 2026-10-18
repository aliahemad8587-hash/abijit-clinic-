export type Language = 'en' | 'hi';

export interface AppointmentData {
  patientName: string;
  patientMobile: string;
  service: string;
  date: string;
  timeSlot: string;
  note: string;
  tokenNumber?: string;
  createdAt?: string;
}

export interface SymptomItem {
  id: string;
  title: string;
  description: string;
  actionText: string;
  category: 'cataract' | 'retina' | 'pain';
  icon: string;
  urgency?: 'urgent' | 'routine' | 'emergency';
}

export interface LensComparison {
  id: string;
  name: string;
  category: string;
  bestFor: string;
  distanceVision: number; // 1-5
  intermediateVision: number; // 1-5 (computer)
  nearVision: number; // 1-5 (reading)
  nightGlare: string; // Minimal, Low, Moderate
  spectacleDependence: string;
  insuranceCashless: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  procedure: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  imageUrl: string;
}
