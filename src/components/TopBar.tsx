import React, { useState, useEffect } from 'react';
import { CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from '../data/clinicData';
import { Language } from '../types';

interface TopBarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ language, onLanguageChange }) => {
  const [clinicStatus, setClinicStatus] = useState<{
    status: 'open' | 'closed' | 'opening-soon';
    label: string;
    subtext: string;
  }>({
    status: 'open',
    label: 'Open Today (12–8 PM)',
    subtext: 'Consultations active until 8:00 PM'
  });

  useEffect(() => {
    const calculateStatus = () => {
      // Calculate IST time (UTC + 5.5 hours)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 3600000 * 5.5);

      const day = ist.getDay(); // 0 is Sunday
      const hours = ist.getHours();
      const minutes = ist.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const openMinutes = 12 * 60; // 12:00 PM
      const closeMinutes = 20 * 60; // 8:00 PM

      if (day === 0) {
        setClinicStatus({
          status: 'closed',
          label: language === 'hi' ? 'आज बंद है (रविवार)' : 'Closed Today (Sunday)',
          subtext: language === 'hi' ? 'ओपीडी सोमवार को दोपहर 12 बजे खुलेगी' : 'OPD opens Monday at 12:00 PM'
        });
      } else if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        setClinicStatus({
          status: 'open',
          label: language === 'hi' ? 'अभी खुला है (12–8 PM)' : 'Open Now (12–8 PM)',
          subtext: language === 'hi' ? 'डॉ. अभिजीत मरीजों की जांच कर रहे हैं' : 'Dr. Abhijit is seeing patients'
        });
      } else if (currentMinutes < openMinutes) {
        setClinicStatus({
          status: 'opening-soon',
          label: language === 'hi' ? 'आज दोपहर 12 बजे खुलेगा' : 'Opens at 12:00 PM Today',
          subtext: language === 'hi' ? 'ऑनलाइन टोकन अभी बुक करें' : 'Online booking open now'
        });
      } else {
        setClinicStatus({
          status: 'closed',
          label: language === 'hi' ? 'रात के लिए बंद (कल 12 PM)' : 'Closed for Night (Tomorrow 12 PM)',
          subtext: language === 'hi' ? 'परामर्श कल दोपहर 12 बजे शुरू होगा' : 'Resumes tomorrow at 12:00 PM'
        });
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <aside className="bg-[#0b2a4a] text-white py-2 px-4 sm:px-6 text-xs border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-center md:text-left font-medium text-slate-200">
          <span className="inline-flex items-center gap-1.5 text-[#8df2ff]">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>{language === 'hi' ? 'कौसर महल, अमृत नगर, मुंब्रा' : 'Kausar Mahal, Amrut Nagar, Mumbra'}</span>
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="inline-flex items-center gap-1.5 text-slate-300">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>{language === 'hi' ? 'दोपहर 12 - रात 8 बजे, सोम-शनि (रवि बंद)' : '12 PM – 8 PM, Mon–Sat (Sun Closed)'}</span>
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            className="inline-flex items-center gap-1 text-[#7ffc97] hover:text-white font-semibold transition-colors"
            href={`tel:${CLINIC_PHONE}`}
          >
            <span className="material-symbols-outlined text-sm">call</span>
            <span>{CLINIC_PHONE_DISPLAY}</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Live IST Status Badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              clinicStatus.status === 'open'
                ? 'bg-[#003110] text-[#7ffc97]'
                : clinicStatus.status === 'opening-soon'
                ? 'bg-amber-950/80 text-amber-300'
                : 'bg-red-950/80 text-red-300'
            }`}
          >
            {clinicStatus.status === 'open' && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#7ffc97] animate-ping" />
            )}
            <span>{clinicStatus.label}</span>
          </div>

          {/* Language Switcher */}
          <div className="inline-flex rounded-lg bg-black/30 p-0.5 border border-white/20 text-xs">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded transition-all font-semibold ${
                language === 'en'
                  ? 'bg-white text-[#00152d]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2 py-0.5 rounded transition-all font-semibold ${
                language === 'hi'
                  ? 'bg-white text-[#00152d]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
