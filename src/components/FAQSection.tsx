import React, { useState } from 'react';
import { FAQS_DATA } from '../data/clinicData';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="faqs">
      <div className="text-center mb-12 space-y-3">
        <span className="text-xs font-bold text-[#006972] uppercase tracking-wider">
          {language === 'hi' ? 'मरीज मार्गदर्शन' : 'Patient Guidance'}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
          {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Clear answers regarding surgery, safety, costs, and mediclaim procedures.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS_DATA.map(faq => {
          const isOpen = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
                className="w-full p-4 sm:p-5 text-left font-display text-sm sm:text-base font-semibold text-[#00152d] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`material-symbols-outlined text-[#006972] text-xl transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
