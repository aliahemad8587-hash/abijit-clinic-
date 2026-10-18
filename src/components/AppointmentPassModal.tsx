import React from 'react';
import { AppointmentData } from '../types';
import { CLINIC_PHONE_DISPLAY, CLINIC_WHATSAPP } from '../data/clinicData';

interface AppointmentPassModalProps {
  appointment: AppointmentData | null;
  onClose: () => void;
}

export const AppointmentPassModal: React.FC<AppointmentPassModalProps> = ({ appointment, onClose }) => {
  if (!appointment) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleSendWhatsApp = () => {
    const message = `*Appointment Request - Abhijit Eye Clinic*%0A%0A` +
      `🎫 *Token No:* ${encodeURIComponent(appointment.tokenNumber || 'AEC-TOKEN')}%0A` +
      `👤 *Patient Name:* ${encodeURIComponent(appointment.patientName)}%0A` +
      `📱 *Contact Mobile:* +91 ${encodeURIComponent(appointment.patientMobile)}%0A` +
      `🩺 *Specialty / Service:* ${encodeURIComponent(appointment.service)}%0A` +
      `📅 *Requested Date:* ${encodeURIComponent(appointment.date)}%0A` +
      `⏰ *Preferred Time Slot:* ${encodeURIComponent(appointment.timeSlot)}%0A` +
      `📝 *Notes:* ${encodeURIComponent(appointment.note || 'None provided')}%0A%0A` +
      `_Generated via abhijiteyeclinic.com portal._`;

    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-[#0b2a4a] text-white p-5 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006972] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">confirmation_number</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#8df2ff] uppercase tracking-wider">
                Official Priority OPD Token
              </span>
              <h3 className="text-lg font-bold">Abhijit Eye Clinic</h3>
            </div>
          </div>
        </div>

        {/* Token Body / Pass */}
        <div className="p-6 space-y-4">
          {/* Token Number Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
            <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Appointment Token</div>
            <div className="font-mono text-3xl font-extrabold text-[#006972] tracking-wider my-1">
              {appointment.tokenNumber || 'AEC-2025-084'}
            </div>
            <div className="text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Reserved for Dr. Abhijit Consultation</span>
            </div>
          </div>

          {/* Patient Details */}
          <div className="grid grid-cols-2 gap-3 text-xs border-y border-slate-100 py-3">
            <div>
              <span className="text-slate-500 block">Patient Name</span>
              <strong className="text-slate-900 text-sm font-semibold">{appointment.patientName}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Mobile Contact</span>
              <strong className="text-slate-900 text-sm font-semibold">+91 {appointment.patientMobile}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Scheduled Date</span>
              <strong className="text-[#006972] text-sm font-semibold">{appointment.date}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Assigned Slot</span>
              <strong className="text-[#006972] text-sm font-semibold">{appointment.timeSlot}</strong>
            </div>
            <div className="col-span-2">
              <span className="text-slate-500 block">Consultation Specialty</span>
              <span className="text-slate-900 font-medium">{appointment.service}</span>
            </div>
            {appointment.note && (
              <div className="col-span-2">
                <span className="text-slate-500 block">Patient Notes / Symptoms</span>
                <span className="text-slate-700 italic">{appointment.note}</span>
              </div>
            )}
          </div>

          {/* Clinical Instructions Checklist */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 space-y-1">
            <strong className="font-semibold block flex items-center gap-1.5 text-amber-950">
              <span className="material-symbols-outlined text-base text-amber-700">info</span>
              Pre-Consultation Checklist:
            </strong>
            <ul className="list-disc pl-5 space-y-0.5 text-amber-800">
              <li>Please bring prior prescription glasses and eye drop containers.</li>
              <li>Diabetic patients: carry recent HbA1c or fasting sugar report.</li>
              <li>Pupil dilation may take 30–45 mins; avoid driving self after retina check.</li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-1">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Open in WhatsApp to Confirm Slot</span>
            </button>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">print</span>
                <span>Print / Save Pass</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>

          <p className="text-[11px] text-center text-slate-500">
            Clinic Helpdesk: <strong className="text-slate-700">{CLINIC_PHONE_DISPLAY}</strong> · Kausar Mahal, Amrut Nagar
          </p>
        </div>
      </div>
    </div>
  );
};
