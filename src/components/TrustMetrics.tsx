import React from 'react';
import { Language } from '../types';

interface TrustMetricsProps {
  language: Language;
}

export const TrustMetrics: React.FC<TrustMetricsProps> = ({ language }) => {
  return (
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#006972]/10 flex items-center justify-center text-[#006972] shrink-0">
              <span className="material-symbols-outlined fill text-2xl">vital_signs</span>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#00152d] tracking-tight">
                15,000+
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {language === 'hi' ? 'सफल माइक्रोसर्जरी' : 'Microsurgeries Done'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#006972]/10 flex items-center justify-center text-[#006972] shrink-0">
              <span className="material-symbols-outlined fill text-2xl">verified</span>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#00152d] tracking-tight">
                14+ Years
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {language === 'hi' ? 'नेत्र शल्य चिकित्सा अनुभव' : 'Ophthalmic Experience'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#006972]/10 flex items-center justify-center text-[#006972] shrink-0">
              <span className="material-symbols-outlined fill text-2xl">sentiment_very_satisfied</span>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#00152d] tracking-tight">
                99.2%
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {language === 'hi' ? 'मरीज संतुष्टि दर' : 'Patient Satisfaction'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <span className="material-symbols-outlined fill text-2xl">star</span>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#00152d] tracking-tight">
                4.9 ★
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {language === 'hi' ? '500+ गूगल समीक्षाएं' : '500+ Google Reviews'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
