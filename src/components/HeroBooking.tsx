import React, { useState, useEffect } from 'react';
import { CLINIC_WHATSAPP } from '../data/clinicData';
import { AppointmentData, Language } from '../types';

interface HeroBookingProps {
  language: Language;
  selectedService: string;
  onServiceChange: (service: string) => void;
  onAppointmentCreated: (appointment: AppointmentData) => void;
}

export const HeroBooking: React.FC<HeroBookingProps> = ({
  language,
  selectedService,
  onServiceChange,
  onAppointmentCreated
}) => {
  const [patientName, setPatientName] = useState('');
  const [patientMobile, setPatientMobile] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('12 PM – 2 PM');
  const [patientNote, setPatientNote] = useState('');
  const [sundayWarning, setSundayWarning] = useState(false);
  const [mobileError, setMobileError] = useState('');

  // Default to today or tomorrow
  useEffect(() => {
    const today = new Date();
    // If today is Sunday (day 0), advance to Monday
    if (today.getDay() === 0) {
      today.setDate(today.getDate() + 1);
    }
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setBookingDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const dateObj = new Date(val);
    if (dateObj.getUTCDay() === 0) {
      setSundayWarning(true);
      setBookingDate('');
    } else {
      setSundayWarning(false);
      setBookingDate(val);
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPatientMobile(val);
    if (val.length > 0 && val.length < 10) {
      setMobileError('Please enter a valid 10-digit mobile number');
    } else {
      setMobileError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName.trim()) {
      alert('Please enter patient full name');
      return;
    }

    if (patientMobile.length !== 10) {
      setMobileError('Valid 10-digit Indian phone number required');
      return;
    }

    if (!bookingDate) {
      alert('Please select a valid consultation date (Mon–Sat)');
      return;
    }

    const tokenNumber = `AEC-${Math.floor(1000 + Math.random() * 9000)}`;

    const appt: AppointmentData = {
      patientName: patientName.trim(),
      patientMobile: patientMobile.trim(),
      service: selectedService,
      date: bookingDate,
      timeSlot: selectedSlot,
      note: patientNote.trim(),
      tokenNumber,
      createdAt: new Date().toISOString()
    };

    onAppointmentCreated(appt);

    // Open WhatsApp URL directly
    const message = `*Appointment Request - Abhijit Eye Clinic*%0A%0A` +
      `🎫 *Token:* ${encodeURIComponent(tokenNumber)}%0A` +
      `👤 *Patient Name:* ${encodeURIComponent(patientName.trim())}%0A` +
      `📱 *Mobile:* +91 ${encodeURIComponent(patientMobile.trim())}%0A` +
      `🩺 *Specialty / Service:* ${encodeURIComponent(selectedService)}%0A` +
      `📅 *Date:* ${encodeURIComponent(bookingDate)}%0A` +
      `⏰ *Time Slot:* ${encodeURIComponent(selectedSlot)}%0A` +
      `📝 *Notes:* ${encodeURIComponent(patientNote.trim() || 'None provided')}%0A%0A` +
      `_Generated via abhijiteyeclinic.com portal._`;

    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${message}`, '_blank');
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('bookingCard');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = document.getElementById('heroPatientName');
      if (input) setTimeout(() => input.focus(), 500);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f6fafd] to-[#f0f4f7] pt-8 pb-16 lg:py-20 border-b border-slate-200/80 overflow-hidden">
      {/* Ambient Optical Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8df2ff]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#d3e4ff]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Left: Text & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            {/* Specialty Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006972]/10 border border-[#006972]/20">
              <span className="material-symbols-outlined text-[#006972] text-sm fill">verified</span>
              <span className="text-xs text-[#006972] font-semibold">
                {language === 'hi'
                  ? 'मुंब्रा का विश्वसनीय रेटिना एवं मोतियाबिंद माइक्रोसर्जरी केंद्र'
                  : "Mumbra's Trusted Vitreoretinal & Microsurgical Center"}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00152d] tracking-tight leading-tight">
              Clear Vision Starts With{' '}
              <span className="text-[#006972] underline decoration-[#82f0fe] decoration-4 underline-offset-4">
                Expert Care
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Advanced cataract phacoemulsification and specialized retina surgery performed by{' '}
              <strong className="text-[#00152d] font-semibold">Dr. Abhijit</strong>, MBBS, MS
              (Ophthalmology) — right here in Amrut Nagar, Mumbra. Personalized compassionate attention
              with hospital-grade precision.
            </p>

            {/* Dual Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined">event_available</span>
                <span>{language === 'hi' ? 'अपॉइंटमेंट टोकन बुक करें' : 'Book Appointment'}</span>
              </button>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-[#006972] text-[#00152d] text-sm font-semibold shadow-xs hover:shadow transition-all"
                href={`https://wa.me/${CLINIC_WHATSAPP}?text=Hello%20Dr.%20Abhijit%20Eye%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[#16A34A] fill">chat</span>
                <span>{language === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}</span>
              </a>
            </div>

            {/* Trust Chips Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="material-symbols-outlined text-[#006972] text-lg">medical_services</span>
                <span className="text-xs font-semibold text-[#00152d]">MS Ophthalmology</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="material-symbols-outlined text-[#006972] text-lg">health_and_safety</span>
                <span className="text-xs font-semibold text-[#00152d]">Cashless Insurance</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="material-symbols-outlined text-[#006972] text-lg">meeting_room</span>
                <span className="text-xs font-semibold text-[#00152d]">Modern Day-Care OT</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="material-symbols-outlined text-[#006972] text-lg">history_toggle_off</span>
                <span className="text-xs font-semibold text-[#00152d]">Mon–Sat: 12–8 PM</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Card (Direct WhatsApp + Token Generator) */}
          <div className="lg:col-span-5" id="bookingCard">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#006972] to-[#16A34A]" />

              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display text-xl font-bold text-[#00152d]">
                    Schedule Consultation
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Instant priority OPD token & WhatsApp booking
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#006972]/10 flex items-center justify-center text-[#006972]">
                  <span className="material-symbols-outlined">edit_calendar</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Patient Name */}
                <div>
                  <label htmlFor="heroPatientName" className="block text-xs font-semibold text-[#00152d] mb-1">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">
                      person
                    </span>
                    <input
                      id="heroPatientName"
                      type="text"
                      required
                      value={patientName}
                      onChange={e => setPatientName(e.target.value)}
                      placeholder="e.g. Mohammad Ansari / Priya Sharma"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:border-[#006972] focus:ring-1 focus:ring-[#006972] text-xs sm:text-sm text-slate-900 bg-slate-50/50 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="heroPatientMobile" className="block text-xs font-semibold text-[#00152d] mb-1">
                    10-Digit Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-xs font-semibold text-slate-600">
                      +91
                    </span>
                    <input
                      id="heroPatientMobile"
                      type="tel"
                      required
                      value={patientMobile}
                      onChange={handleMobileChange}
                      placeholder="9876543210"
                      pattern="[0-9]{10}"
                      className="w-full px-3 py-2 rounded-r-lg border border-slate-300 focus:border-[#006972] focus:ring-1 focus:ring-[#006972] text-xs sm:text-sm text-slate-900 bg-slate-50/50 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  {mobileError && (
                    <p className="text-[11px] text-red-600 mt-0.5">{mobileError}</p>
                  )}
                </div>

                {/* Specialty Selection */}
                <div>
                  <label htmlFor="heroServiceSelect" className="block text-xs font-semibold text-[#00152d] mb-1">
                    Required Consultation / Specialty <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">
                      medical_information
                    </span>
                    <select
                      id="heroServiceSelect"
                      value={selectedService}
                      onChange={e => onServiceChange(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 rounded-lg border border-slate-300 focus:border-[#006972] focus:ring-1 focus:ring-[#006972] text-xs sm:text-sm text-slate-900 bg-slate-50/50 outline-none appearance-none"
                    >
                      <option value="Advanced Cataract Surgery (Phaco / MICS)">
                        Advanced Cataract Surgery (Phaco / MICS)
                      </option>
                      <option value="Retina & Diabetic Eye Screening">
                        Retina & Diabetic Eye Screening
                      </option>
                      <option value="Comprehensive General Eye Check-up">
                        Comprehensive General Eye Check-up
                      </option>
                      <option value="LASIK & Refractive Suitability">
                        LASIK & Refractive Suitability
                      </option>
                      <option value="Glaucoma Pressure Workup">
                        Glaucoma Pressure Workup
                      </option>
                      <option value="Pediatric Eye / Squint Consultation">
                        Pediatric Eye / Squint Consultation
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 pointer-events-none text-base">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="heroBookingDate" className="block text-xs font-semibold text-[#00152d] mb-1">
                      Preferred Date (Mon–Sat) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="heroBookingDate"
                      type="date"
                      required
                      value={bookingDate}
                      onChange={handleDateChange}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#006972] focus:ring-1 focus:ring-[#006972] text-xs text-slate-900 bg-slate-50/50 outline-none"
                    />
                    {sundayWarning && (
                      <p className="text-[11px] text-red-600 mt-1">
                        Sundays are closed. Please choose Mon–Sat.
                      </p>
                    )}
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-[#00152d] mb-1">
                      Time Slot <span className="text-red-500">*</span>
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['12 PM – 2 PM', '2 PM – 4 PM', '4 PM – 6 PM', '6 PM – 8 PM'].map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-1 px-1.5 rounded text-[11px] font-medium border transition-all cursor-pointer ${
                            selectedSlot === slot
                              ? 'border-[#006972] bg-[#006972]/10 text-[#006972] font-semibold'
                              : 'border-slate-200 text-slate-600 hover:border-slate-400 bg-white'
                          }`}
                        >
                          {slot.replace(' PM', '').replace(' – ', '–')} PM
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Short Notes */}
                <div>
                  <label htmlFor="heroPatientNote" className="block text-xs font-semibold text-[#00152d] mb-1">
                    Symptoms or Brief Note (Optional)
                  </label>
                  <input
                    id="heroPatientNote"
                    type="text"
                    value={patientNote}
                    onChange={e => setPatientNote(e.target.value)}
                    placeholder="e.g., cloudy vision in left eye, high sugar history"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#006972] focus:ring-1 focus:ring-[#006972] text-xs text-slate-900 bg-slate-50/50 outline-none placeholder:text-slate-400"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all active:scale-98 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  <span>Confirm on WhatsApp & Generate Token</span>
                </button>
              </form>

              {/* Footnote Guarantees */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1 text-[#16A34A] font-medium">
                  <span className="material-symbols-outlined text-sm">check_circle</span> No advance fee
                </span>
                <span className="inline-flex items-center gap-1 text-[#006972] font-medium">
                  <span className="material-symbols-outlined text-sm">shield</span> 100% Private
                </span>
                <span className="inline-flex items-center gap-1 text-[#00152d] font-medium">
                  <span className="material-symbols-outlined text-sm">verified_user</span> Direct Clinic Token
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
