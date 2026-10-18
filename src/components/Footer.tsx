import React from 'react';
import { CLINIC_PHONE, CLINIC_PHONE_DISPLAY, CLINIC_WHATSAPP } from '../data/clinicData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onBookClick }) => {
  return (
    <>
      {/* Final Action Banner */}
      <section className="bg-[#00152d] text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#006972] text-white">
              {language === 'hi' ? 'विशेषज्ञ हाथों में आपकी दृष्टि' : 'Your Sight Deserves Specialist Hands'}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              {language === 'hi'
                ? 'स्पष्ट दृष्टि की दिशा में पहला कदम बढ़ाएं'
                : 'Ready to Restore Your Clear Vision?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Book an appointment with Dr. Abhijit at Kausar Mahal, Amrut Nagar. Mon–Sat, 12 PM to 8 PM.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBookClick}
              className="px-7 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              {language === 'hi' ? 'अपॉइंटमेंट अभी बुक करें' : 'Book Appointment Now'}
            </button>
            <a
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all flex items-center gap-2"
              href={`https://wa.me/${CLINIC_WHATSAPP}?text=Hello%20Dr.%20Abhijit%20Eye%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-emerald-400">chat</span>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Clinical Footer */}
      <footer className="bg-[#0b2a4a] text-white w-full pt-16 pb-24 md:pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {/* Top Grid of Footer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8df2ff] text-3xl">visibility</span>
                <span className="font-display text-xl font-bold text-white tracking-tight">
                  Abhijit Eye Clinic
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Leading vitreoretinal and micro-incision cataract surgery center in Mumbra, Thane led by Dr. Abhijit, MS (Ophthalmology).
              </p>
              <div className="flex items-center gap-2 text-xs text-[#8df2ff]">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>NABH Accredited Hygiene Standards</span>
              </div>
            </div>

            {/* Clinical Services Links */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Clinical Services
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#services">Cataract Surgery (Phaco)</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#services">Vitreoretinal Care</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#services">Robotic LASIK</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#services">Glaucoma Clinic</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#services">Diabetic Eye Screening</a></li>
              </ul>
            </div>

            {/* Patient Resources */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Patient Resources
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#insurance">Cashless Mediclaim</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#faqs">Pre-Op Guidelines</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#about">Doctor Credentials</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#symptoms">Emergency Protocol</a></li>
                <li><a className="hover:text-[#8df2ff] transition-colors" href="#timings">Clinic Timings & Map</a></li>
              </ul>
            </div>

            {/* Contact & Location Box */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Visit The Clinic
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kausar Mahal, Amrut Nagar,<br />
                Mumbra, Thane, MH 400612.
              </p>
              <p className="text-xs text-[#8df2ff] font-semibold">
                Mon–Sat: 12:00 PM – 8:00 PM<br />
                <span className="text-slate-400 font-normal">Sunday: Closed</span>
              </p>
              <a
                className="inline-block text-xs font-bold text-[#7ffc97] hover:underline"
                href={`tel:${CLINIC_PHONE}`}
              >
                📞 {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Legal & Medical Disclaimer */}
          <div className="pt-8 border-t border-white/10 text-xs text-slate-400 space-y-3">
            <p className="leading-relaxed text-[11px]">
              <strong>Medical Disclaimer:</strong> Information presented on this website is for educational and appointment coordination purposes only. It does not replace individualized diagnostic assessment by a certified ophthalmologist. In the event of acute eye trauma, rapid darkness, or chemical burns, seek urgent in-person emergency hospital care immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
              <span>
                © 2025 Abhijit Eye Clinic & Vitreoretinal Microsurgery Center. All rights reserved.
              </span>
              <div className="flex items-center gap-4">
                <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                <span>•</span>
                <a className="hover:text-white transition-colors" href="#">Medical Disclaimer</a>
                <span>•</span>
                <a className="hover:text-white transition-colors" href="#">Patient Charter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
