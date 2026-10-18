import React, { useState } from 'react';
import { SYMPTOMS_DATA, CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from '../data/clinicData';
import { Language } from '../types';

interface SymptomCheckerProps {
  language: Language;
  onSelectSymptom: (symptomTitle: string) => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({ language, onSelectSymptom }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cataract' | 'retina' | 'pain'>('all');

  const filteredSymptoms = SYMPTOMS_DATA.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-16 bg-slate-100/60 border-y border-slate-200" id="symptoms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#006972] tracking-wider uppercase">
              {language === 'hi' ? 'इंटरैक्टिव क्लिनिकल गाइड' : 'Interactive Clinical Guide'}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
              {language === 'hi'
                ? 'आप किस प्रकार के नेत्र लक्षण महसूस कर रहे हैं?'
                : 'What Eye Symptoms Are You Experiencing?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Click a condition category to view clinical indications and next steps.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Symptoms' },
              { id: 'cataract', label: 'Cataract / Blurry' },
              { id: 'retina', label: 'Floaters / Diabetes' },
              { id: 'pain', label: 'Pain & Dry Eyes' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#0b2a4a] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#006972]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSymptoms.map(symptom => (
            <div
              key={symptom.id}
              onClick={() => onSelectSymptom(symptom.title)}
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#006972] hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#006972] text-3xl group-hover:scale-110 transition-transform">
                  {symptom.icon}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#00152d] mb-1">
                    {symptom.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {symptom.description}
                  </p>
                  <span className="text-xs font-semibold text-[#006972] block">
                    {symptom.actionText}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Click to book evaluation</span>
                <span className="material-symbols-outlined text-sm text-[#006972]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* Red Eye Clinical Emergency Protocol Notice */}
        <div className="mt-10 p-6 rounded-2xl bg-red-50 border border-red-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">crisis_alert</span>
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-red-950">
                Red Eye & Sudden Blindness Emergency Notice
              </h4>
              <p className="text-xs text-red-800/90 mt-0.5 max-w-2xl leading-relaxed">
                Sudden painless loss of vision, a dark curtain descending across the visual field, or penetrating eye trauma requires emergency clinical intervention within hours to protect irreversible sight loss.
              </p>
            </div>
          </div>
          <a
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-all shadow-xs"
            href={`tel:${CLINIC_PHONE}`}
          >
            <span className="material-symbols-outlined">call</span>
            <span>Emergency: {CLINIC_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
