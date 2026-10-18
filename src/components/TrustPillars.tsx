import React from 'react';
import { Language } from '../types';

interface TrustPillarsProps {
  language: Language;
}

export const TrustPillars: React.FC<TrustPillarsProps> = ({ language }) => {
  const pillars = [
    {
      icon: 'person_pin',
      title: 'Dedicated Chief Surgeon',
      desc: 'Every surgery and retina exam is personally diagnosed and conducted by Dr. Abhijit himself—ensuring zero junior handoffs or compromised outcomes.'
    },
    {
      icon: 'biotech',
      title: 'High-Definition Microscopes',
      desc: 'Our clean OT features advanced surgical optics enabling microscopic depth control and razor-sharp posterior capsule preservation.'
    },
    {
      icon: 'receipt_long',
      title: '100% Transparent Billing',
      desc: 'All-inclusive procedure packages covering pre-op testing, surgical disposable packs, lens choices, and post-op follow-ups with zero hidden charges.'
    },
    {
      icon: 'credit_card',
      title: 'Cashless Mediclaim Desk',
      desc: 'On-premise insurance coordination assisting with pre-authorization paperwork for major TPAs and government/corporate health schemes.'
    },
    {
      icon: 'home_health',
      title: 'Day-Care Discharge in 2 Hours',
      desc: 'Stitchless micro-incisions allow elderly patients to comfortably return home the exact same morning without traumatic hospital overnight stays.'
    },
    {
      icon: 'support_agent',
      title: 'Dedicated WhatsApp Support',
      desc: 'Direct round-the-clock post-operative guidance regarding eye drop schedules, hygiene questions, and immediate healing reassurance.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold text-[#006972] uppercase tracking-wider">
          {language === 'hi' ? 'मरीज-केंद्रित उत्कृष्टता' : 'Patient-First Excellence'}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
          {language === 'hi'
            ? 'मुंब्रा के परिवार डॉ. अभिजीत पर भरोसा क्यों करते हैं'
            : 'Why Mumbra Families Rely On Dr. Abhijit'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          We combine empathetic neighborhood hospitality with the rigorous sterile hygiene of tertiary surgical centers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#006972] hover:shadow-xs transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0b2a4a] text-white flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <h3 className="font-display text-base font-bold text-[#00152d] mb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
