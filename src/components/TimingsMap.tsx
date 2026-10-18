import React, { useState, useEffect } from 'react';
import { CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from '../data/clinicData';
import { Language } from '../types';

interface TimingsMapProps {
  language: Language;
  onBookTokenClick: () => void;
}

export const TimingsMap: React.FC<TimingsMapProps> = ({ language, onBookTokenClick }) => {
  const [liveInfo, setLiveInfo] = useState({
    isOpen: true,
    badgeText: 'Open Now',
    subText: 'Consultations are active until 8:00 PM today.'
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 3600000 * 5.5);

      const day = ist.getDay();
      const hours = ist.getHours();
      const minutes = ist.getMinutes();
      const totalMins = hours * 60 + minutes;

      const openMins = 12 * 60;
      const closeMins = 20 * 60;

      if (day === 0) {
        setLiveInfo({
          isOpen: false,
          badgeText: 'Closed Today (Sunday)',
          subText: 'Clinic is closed on Sundays for sanitization. Emergency on-call.'
        });
      } else if (totalMins >= openMins && totalMins < closeMins) {
        setLiveInfo({
          isOpen: true,
          badgeText: 'Open Now',
          subText: 'Dr. Abhijit is currently seeing patients until 8:00 PM tonight.'
        });
      } else if (totalMins < openMins) {
        setLiveInfo({
          isOpen: false,
          badgeText: 'Opens at 12:00 PM',
          subText: 'OPD reception begins at 12:00 PM today. Tokens can be booked online.'
        });
      } else {
        setLiveInfo({
          isOpen: false,
          badgeText: 'Closed for the Night',
          subText: 'Consultations resume tomorrow at 12:00 PM. Book tokens online anytime.'
        });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-slate-100/80 border-y border-slate-200" id="timings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Clinic Info & Live Calculation */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#006972] uppercase tracking-wider">
                {language === 'hi' ? 'क्लिनिक का पता एवं समय' : 'Locate The Clinic'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
                {language === 'hi' ? 'अमृत नगर, मुंब्रा में संपर्क करें' : 'Visit Us in Amrut Nagar'}
              </h2>
            </div>

            {/* Live Status Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase text-slate-500">
                  Current Clinic Status (IST)
                </span>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                    liveInfo.isOpen
                      ? 'bg-[#003110] text-[#7ffc97]'
                      : 'bg-red-950/80 text-red-300'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      liveInfo.isOpen ? 'bg-[#7ffc97] animate-pulse' : 'bg-red-400'
                    }`}
                  />
                  <span>{liveInfo.badgeText}</span>
                </span>
              </div>
              <p className="text-xs text-slate-600">{liveInfo.subText}</p>
            </div>

            {/* Address Card */}
            <div className="space-y-4 text-sm text-[#171c1f]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">
                  location_on
                </span>
                <div>
                  <strong className="block text-[#00152d] font-semibold">Address</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Abhijit Eye Clinic, Kausar Mahal, Amrut Nagar,<br />
                    Mumbra, Thane, Maharashtra 400612.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">
                  schedule
                </span>
                <div>
                  <strong className="block text-[#00152d] font-semibold">Consultation Hours</strong>
                  <p className="text-xs text-slate-600">
                    Monday to Saturday: <strong>12:00 PM – 8:00 PM</strong><br />
                    Sunday: <span className="text-red-600 font-medium">Closed (Emergency On-Call)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">
                  call
                </span>
                <div>
                  <strong className="block text-[#00152d] font-semibold">Helpdesk & Booking</strong>
                  <a
                    className="text-xs text-[#006972] font-bold hover:underline"
                    href={`tel:${CLINIC_PHONE}`}
                  >
                    {CLINIC_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b2a4a] text-white text-xs font-semibold hover:bg-[#00152d] transition-all"
                href="https://maps.google.com/?q=Kausar+Mahal+Amrut+Nagar+Mumbra+Thane"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base">directions</span>
                <span>Get Google Map Directions</span>
              </a>
              <button
                onClick={onBookTokenClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#00152d] text-xs font-semibold hover:border-[#006972] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">calendar_today</span>
                <span>Book Token Online</span>
              </button>
            </div>
          </div>

          {/* Embedded Stylized Map Visual */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 relative shadow-xs bg-slate-50 flex flex-col justify-between">
              {/* Visual Map Mockup */}
              <div className="relative w-full h-80 bg-slate-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-85"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJovTbSlx1hvKCvR2l4G6y2tMgTMylrAT4_297F29ta1uCOJOjabD6Gw_gb0Z6s-8ZfqGiQmDKvjsrqRdw7aRJEq7uVMcMNfULfHE0XkebO1pVKrVgeKWYoJBpCN0U1Ly1vFKZxJZIpW3ripFV5x5s0F8-c0QSsF_GtINqpT8b6-65VMt2zk8HZ2O0b_3d4ZvAy8UsWh2_OdE3qjSJg0E5pnnkxaq2Rqa_LSLbcu9Yz3ziJLXsEuRD"
                  alt="Stylized neighborhood map of Amrut Nagar, Kausar Mahal, Mumbra"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#00152d]/10" />

                {/* Animated Clinic Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="px-3 py-1.5 rounded-lg bg-[#0b2a4a] text-white text-xs font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <span className="material-symbols-outlined text-[#8df2ff] text-sm">visibility</span>
                    <span>Abhijit Eye Clinic</span>
                  </div>
                  <div className="w-3 h-3 bg-[#0b2a4a] rotate-45 -mt-1.5" />
                  <div className="w-3 h-3 bg-[#006972] rounded-full animate-ping mt-1" />
                </div>
              </div>

              {/* Landmark Footer Strip */}
              <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#006972] text-sm">train</span>
                  <span>7 mins from Mumbra Railway Station</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#006972] text-sm">local_parking</span>
                  <span>Convenient Auto & 2-Wheeler Parking</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
