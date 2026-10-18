import React, { useState } from 'react';
import { CLINIC_WHATSAPP } from '../data/clinicData';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onBookClick: () => void;
  onOpenLensGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onBookClick, onOpenLensGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileNav = () => setMobileMenuOpen(prev => !prev);
  const closeMobileNav = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 w-full shadow-xs border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-11 h-11 rounded-xl bg-[#0b2a4a] flex items-center justify-center text-white shadow-xs group-hover:bg-[#006972] transition-colors">
            <span className="material-symbols-outlined fill text-2xl text-[#8df2ff]">visibility</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-[#00152d] tracking-tight">
              Abhijit Eye Clinic
            </span>
            <span className="text-[11px] text-[#006972] font-semibold uppercase tracking-wider">
              {language === 'hi' ? 'विट्रियोरेटिनल एवं मोतियाबिंद केंद्र' : 'Vitreoretinal & Cataract Microsurgery'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm">
          <a
            href="#services"
            className="text-[#006972] font-semibold border-b-2 border-[#006972] pb-1 hover:text-[#00152d] transition-colors"
          >
            {language === 'hi' ? 'विशेषताएं' : 'Specialties'}
          </a>
          <button
            onClick={onOpenLensGuide}
            className="text-slate-600 font-medium hover:text-[#006972] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>{language === 'hi' ? 'लेंस तुलना' : 'Lens Comparison'}</span>
            <span className="material-symbols-outlined text-sm text-[#006972]">tune</span>
          </button>
          <a
            href="#symptoms"
            className="text-slate-600 font-medium hover:text-[#00152d] transition-colors"
          >
            {language === 'hi' ? 'लक्षण जांच' : 'Symptom Checker'}
          </a>
          <a
            href="#about"
            className="text-slate-600 font-medium hover:text-[#00152d] transition-colors"
          >
            {language === 'hi' ? 'डॉ. अभिजीत' : 'Doctor Bio'}
          </a>
          <a
            href="#facilities"
            className="text-slate-600 font-medium hover:text-[#00152d] transition-colors"
          >
            {language === 'hi' ? 'सुविधाएं एवं ओटी' : 'Facilities'}
          </a>
          <a
            href="#insurance"
            className="text-slate-600 font-medium hover:text-[#00152d] transition-colors"
          >
            {language === 'hi' ? 'कैशलेस मेडिक्लेम' : 'Insurance'}
          </a>
          <a
            href="#reviews"
            className="text-slate-600 font-medium hover:text-[#00152d] transition-colors"
          >
            {language === 'hi' ? 'रिव्यूज' : 'Reviews'}
          </a>
          <a
            href="#timings"
            className="text-slate-600 font-medium hover:text-[#00152d] transition-colors"
          >
            {language === 'hi' ? 'स्थान व समय' : 'Contact'}
          </a>
        </nav>

        {/* Trailing Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[#0b2a4a] bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium"
            href={`https://wa.me/${CLINIC_WHATSAPP}?text=Hello%20Dr.%20Abhijit%20Eye%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-base text-[#006972]">chat</span>
            <span className="hidden md:inline">WhatsApp</span>
          </a>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold shadow-xs hover:shadow transition-all duration-150 active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={onBookClick}
            className="sm:hidden px-3 py-1.5 rounded-lg bg-[#16A34A] text-white text-xs font-semibold cursor-pointer"
          >
            {language === 'hi' ? 'बुक करें' : 'Book'}
          </button>
          <button
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={toggleMobileNav}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a
              className="p-2 rounded hover:bg-slate-50 text-[#00152d] font-medium"
              href="#services"
              onClick={closeMobileNav}
            >
              Care Specialties
            </a>
            <button
              className="p-2 rounded hover:bg-slate-50 text-[#006972] font-semibold text-left"
              onClick={() => {
                closeMobileNav();
                onOpenLensGuide();
              }}
            >
              Lens Comparison
            </button>
            <a
              className="p-2 rounded hover:bg-slate-50 text-[#00152d] font-medium"
              href="#symptoms"
              onClick={closeMobileNav}
            >
              Symptom Checker
            </a>
            <a
              className="p-2 rounded hover:bg-slate-50 text-[#00152d] font-medium"
              href="#about"
              onClick={closeMobileNav}
            >
              About Dr. Abhijit
            </a>
            <a
              className="p-2 rounded hover:bg-slate-50 text-[#00152d] font-medium"
              href="#facilities"
              onClick={closeMobileNav}
            >
              Facilities & OT
            </a>
            <a
              className="p-2 rounded hover:bg-slate-50 text-[#00152d] font-medium"
              href="#insurance"
              onClick={closeMobileNav}
            >
              Cashless Mediclaim
            </a>
            <a
              className="p-2 rounded hover:bg-slate-50 text-[#00152d] font-medium"
              href="#timings"
              onClick={closeMobileNav}
            >
              Live Timings & Map
            </a>
            <a
              className="p-2 rounded hover:bg-slate-50 text-[#00152d] font-medium"
              href="#faqs"
              onClick={closeMobileNav}
            >
              Patient FAQs
            </a>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              className="w-full text-center py-2.5 rounded-lg bg-slate-100 text-[#00152d] font-semibold flex items-center justify-center gap-2"
              href={`https://wa.me/${CLINIC_WHATSAPP}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[#006972]">chat</span>
              WhatsApp Chat
            </a>
            <button
              onClick={() => {
                closeMobileNav();
                onBookClick();
              }}
              className="w-full text-center py-2.5 rounded-lg bg-[#16A34A] text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Book Consultation Token
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
