import React from 'react';
import { Language } from '../types';

interface DoctorBioProps {
  language: Language;
  onConsultClick: () => void;
}

export const DoctorBio: React.FC<DoctorBioProps> = ({ language, onConsultClick }) => {
  return (
    <section className="py-16 bg-slate-100/70 border-t border-slate-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#006972] to-[#0b2a4a] rounded-3xl opacity-20 blur-lg" />
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <div className="h-80 sm:h-96 w-full bg-slate-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANeVgNm9xsvOwDnP5iKFqa9FfXyZYv_DymFH34aDPMm460zluq-84Pcm_wFDqK0F02P0OTsUAd5pU9b9tYCmXl18pUn5O7yTMyUkOdKJQSCrEVsbzCc-L6b_flk-7VbxDMiEQwQ4UCEes17Tyyn82Llhp0103WW1IjDgUMVY4x-sdIKc3XV3o_sPxsjzL5Kwu1P3D1diaujd9CwKbWuAc_gf8ajWemsc1ft_T6nwFzDpEtu6fIwCms"
                    alt="Dr. Abhijit, Chief Eye Surgeon & Vitreoretinal Specialist"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#00152d]/90 via-[#00152d]/40 to-transparent p-5 text-white">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#16A34A] text-white">
                      Available Mon–Sat
                    </span>
                    <h3 className="text-xl font-bold mt-1">Dr. Abhijit</h3>
                    <p className="text-xs text-slate-200">MBBS, MS (Ophthalmology)</p>
                  </div>
                </div>

                <div className="p-5 space-y-3 bg-[#f6fafd]">
                  <div className="flex items-center justify-between text-xs text-slate-600 pb-2 border-b border-slate-200">
                    <span className="font-semibold text-[#00152d]">Council Registration</span>
                    <span className="font-mono text-[#006972] font-semibold">MMC Reg. Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 pb-2 border-b border-slate-200">
                    <span className="font-semibold text-[#00152d]">Specialty Focus</span>
                    <span className="font-medium text-slate-900">Phaco & Vitreoretina</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-[#00152d]">Active Memberships</span>
                    <span className="font-medium text-slate-900">AIOS · BOA · MOS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Philosophy & Qualifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006972]/10 text-[#006972] text-xs font-semibold">
              <span className="material-symbols-outlined text-sm">school</span>
              <span>{language === 'hi' ? 'मुख्य शल्य चिकित्सक योग्यता' : 'Lead Microsurgeon Credentials'}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
              Compassionate Science. <br className="hidden sm:inline" />
              Precision Surgical Outcomes.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Abhijit holds an MBBS followed by a Master of Surgery (MS) in Ophthalmology. With over 14 years of intensive surgical experience in premier Mumbai and Thane hospitals, he established{' '}
              <strong className="text-[#00152d]">Abhijit Eye Clinic</strong> in Mumbra to provide world-standard eye care within the local community.
            </p>

            <blockquote className="p-4 rounded-xl border-l-4 border-[#006972] bg-slate-50 text-slate-800 text-sm italic">
              "Preserving vision is not simply a surgical procedure—it is the restoration of independence, livelihood, and peace of mind for the patient and their whole family."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="material-symbols-outlined text-[#006972] text-2xl mb-1">workspace_premium</span>
                <h4 className="text-sm font-bold text-[#00152d]">Retina Fellowships</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Extensive sub-specialty exposure to medical and surgical vitreoretinal conditions.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="material-symbols-outlined text-[#006972] text-2xl mb-1">groups</span>
                <h4 className="text-sm font-bold text-[#00152d]">Community Vision Camps</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Conducted screening programs across Mumbra, Kausa, and Diva for early diabetic detection.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onConsultClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b2a4a] text-white text-xs sm:text-sm font-semibold hover:bg-[#00152d] transition-all cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-base">calendar_add_on</span>
                <span>Consult Dr. Abhijit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
