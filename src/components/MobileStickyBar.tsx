import React from 'react';
import { CLINIC_PHONE, CLINIC_WHATSAPP } from '../data/clinicData';
import { Language } from '../types';

interface MobileStickyBarProps {
  language: Language;
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ language, onBookClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-xl">
      <a
        className="flex-1 py-2.5 rounded-lg bg-slate-100 text-[#00152d] font-bold text-xs flex items-center justify-center gap-1.5 active:bg-slate-200 transition-colors"
        href={`tel:${CLINIC_PHONE}`}
      >
        <span className="material-symbols-outlined text-base text-[#006972]">call</span>
        <span>Call</span>
      </a>

      <a
        className="flex-1 py-2.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 active:bg-emerald-100 transition-colors"
        href={`https://wa.me/${CLINIC_WHATSAPP}?text=Hello%20Dr.%20Abhijit%20Eye%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-base text-[#16A34A] fill">chat</span>
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onBookClick}
        className="flex-[1.4] py-2.5 rounded-lg bg-[#16A34A] text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs cursor-pointer"
      >
        <span className="material-symbols-outlined text-base">calendar_month</span>
        <span>{language === 'hi' ? 'बुक करें' : 'Book Visit'}</span>
      </button>
    </div>
  );
};
