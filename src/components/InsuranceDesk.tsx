import React, { useState } from 'react';
import { INSURANCE_TPAS, CLINIC_PHONE, CLINIC_PHONE_DISPLAY, CLINIC_WHATSAPP } from '../data/clinicData';
import { Language } from '../types';

interface InsuranceDeskProps {
  language: Language;
}

export const InsuranceDesk: React.FC<InsuranceDeskProps> = ({ language }) => {
  const [selectedTPA, setSelectedTPA] = useState<string>('Star Health');
  const [policyType, setPolicyType] = useState<string>('Individual / Family Floater');

  const handleInquireTPA = (tpaName: string) => {
    const text = `Hello Dr. Abhijit Eye Clinic, I have an insurance policy with ${encodeURIComponent(tpaName)} and would like to verify cashless coverage for eye surgery.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 bg-slate-100/70 border-y border-slate-200" id="insurance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#006972] uppercase tracking-wider">
            {language === 'hi' ? 'परेशानी-मुक्त प्रक्रिया' : 'Hassle-Free Approvals'}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
            {language === 'hi'
              ? 'कैशलेस मेडिक्लेम एवं बीमा हेल्पडेस्क'
              : 'Cashless Mediclaim & Insurance Desk'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Seamless cashless hospitalization for Cataract and Vitreoretinal surgeries with leading insurance companies and TPAs.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs relative">
            <div className="w-9 h-9 rounded-full bg-[#006972] text-white font-bold text-sm flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="font-display text-base font-bold text-[#00152d] mb-2">
              Bring Health Card & ID
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Present your Mediclaim policy card or corporate e-card along with Aadhaar/PAN at our on-site insurance desk during evaluation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs relative">
            <div className="w-9 h-9 rounded-full bg-[#006972] text-white font-bold text-sm flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="font-display text-base font-bold text-[#00152d] mb-2">
              Instant Pre-Authorization
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our insurance team collates clinical diagnosis reports and coordinates approval paperwork directly with the TPA network.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs relative">
            <div className="w-9 h-9 rounded-full bg-[#006972] text-white font-bold text-sm flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="font-display text-base font-bold text-[#00152d] mb-2">
              Cashless Surgery & Discharge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Undergo your scheduled surgery without worrying about large upfront payments. Return home smoothly the same afternoon.
            </p>
          </div>
        </div>

        {/* TPA Partners Grid & Interactive Quick Checker */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
            Supported Insurers, TPAs & Corporate Panels (Click to verify cashless)
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {INSURANCE_TPAS.map((tpa, idx) => (
              <button
                key={idx}
                onClick={() => handleInquireTPA(tpa.name)}
                className="group p-3 rounded-xl bg-slate-50 hover:bg-[#006972]/10 border border-slate-200 hover:border-[#006972] transition-all cursor-pointer flex flex-col items-center justify-center"
              >
                <span className="font-bold text-[#00152d] text-xs group-hover:text-[#006972] transition-colors">
                  {tpa.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">{tpa.subtitle.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <span>
              Have a government scheme or different corporate policy? Our desk handles all claim files.
            </span>
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="inline-flex items-center gap-1.5 font-bold text-[#006972] hover:underline shrink-0"
            >
              <span className="material-symbols-outlined text-sm">support_agent</span>
              <span>Mediclaim Desk: {CLINIC_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
