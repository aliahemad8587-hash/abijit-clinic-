/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroBooking } from './components/HeroBooking';
import { TrustMetrics } from './components/TrustMetrics';
import { ServicesSection } from './components/ServicesSection';
import { SymptomChecker } from './components/SymptomChecker';
import { TrustPillars } from './components/TrustPillars';
import { DoctorBio } from './components/DoctorBio';
import { FacilitiesBento } from './components/FacilitiesBento';
import { InsuranceDesk } from './components/InsuranceDesk';
import { ReviewsSection } from './components/ReviewsSection';
import { TimingsMap } from './components/TimingsMap';
import { FAQSection } from './components/FAQSection';
import { BlogNotes } from './components/BlogNotes';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentPassModal } from './components/AppointmentPassModal';
import { LensComparisonModal } from './components/LensComparisonModal';
import { AppointmentData, Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedService, setSelectedService] = useState<string>(
    'Advanced Cataract Surgery (Phaco / MICS)'
  );
  const [activeAppointment, setActiveAppointment] = useState<AppointmentData | null>(null);
  const [isLensGuideOpen, setIsLensGuideOpen] = useState<boolean>(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('bookingCard');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const nameInput = document.getElementById('heroPatientName');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 500);
      }
    }
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToBooking();
  };

  const handleSelectSymptom = (symptomTitle: string) => {
    // Map symptom to matching specialty
    if (symptomTitle.includes('Floaters') || symptomTitle.includes('Diabetic')) {
      setSelectedService('Retina & Diabetic Eye Screening');
    } else if (symptomTitle.includes('Blurry') || symptomTitle.includes('Glass Number')) {
      setSelectedService('Advanced Cataract Surgery (Phaco / MICS)');
    } else if (symptomTitle.includes('Redness') || symptomTitle.includes('Burning')) {
      setSelectedService('Comprehensive General Eye Check-up');
    }
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#f6fafd] text-[#171c1f] flex flex-col font-sans selection:bg-[#006972] selection:text-white">
      {/* 1. Top Bar */}
      <TopBar language={language} onLanguageChange={setLanguage} />

      {/* 2. Sticky Navigation Header */}
      <Navbar
        language={language}
        onBookClick={scrollToBooking}
        onOpenLensGuide={() => setIsLensGuideOpen(true)}
      />

      {/* 3. Main Body */}
      <main className="flex-1">
        {/* Hero Section & Priority Booking */}
        <HeroBooking
          language={language}
          selectedService={selectedService}
          onServiceChange={setSelectedService}
          onAppointmentCreated={appt => setActiveAppointment(appt)}
        />

        {/* Trust Metrics Strip */}
        <TrustMetrics language={language} />

        {/* Specialized Care & Microsurgery */}
        <ServicesSection
          language={language}
          onSelectService={handleSelectServiceFromCard}
          onOpenLensGuide={() => setIsLensGuideOpen(true)}
        />

        {/* Symptoms & Conditions Interactive Checker */}
        <SymptomChecker
          language={language}
          onSelectSymptom={handleSelectSymptom}
        />

        {/* 6 Patient-Centric Trust Pillars */}
        <TrustPillars language={language} />

        {/* Lead Microsurgeon Profile: Dr. Abhijit */}
        <DoctorBio
          language={language}
          onConsultClick={scrollToBooking}
        />

        {/* Surgical Facilities & Technology Bento Gallery */}
        <FacilitiesBento language={language} />

        {/* Cashless Mediclaim & Insurance Desk */}
        <InsuranceDesk language={language} />

        {/* Patient Reviews & Verified Testimonials */}
        <ReviewsSection language={language} />

        {/* Real-time IST Timings & Neighborhood Map */}
        <TimingsMap
          language={language}
          onBookTokenClick={scrollToBooking}
        />

        {/* Comprehensive Patient FAQ Accordion */}
        <FAQSection language={language} />

        {/* Doctor's Clinical Notes & Prevention Guides */}
        <BlogNotes
          language={language}
          onConsultClick={scrollToBooking}
        />
      </main>

      {/* Footer */}
      <Footer language={language} onBookClick={scrollToBooking} />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar language={language} onBookClick={scrollToBooking} />

      {/* Floating Desktop WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Digital Appointment Pass Modal */}
      <AppointmentPassModal
        appointment={activeAppointment}
        onClose={() => setActiveAppointment(null)}
      />

      {/* Intraocular Lens Comparison Modal */}
      <LensComparisonModal
        isOpen={isLensGuideOpen}
        onClose={() => setIsLensGuideOpen(false)}
        onSelectLensForBooking={handleSelectServiceFromCard}
      />
    </div>
  );
}
