import React from 'react';
import { Language } from '../types';

interface ServicesSectionProps {
  language: Language;
  onSelectService: (serviceName: string) => void;
  onOpenLensGuide: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onSelectService,
  onOpenLensGuide
}) => {
  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006972]/10 text-[#006972] text-xs font-semibold">
          <span className="material-symbols-outlined text-sm">lens</span>
          <span>{language === 'hi' ? 'विशेष नेत्र चिकित्सा' : 'Specialized Clinical Focus'}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
          {language === 'hi'
            ? 'सटीक नेत्र देखभाल एवं माइक्रोसर्जरी'
            : 'Precision Eye Care & Microsurgery'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Equipped with world-class microsurgical equipment and diagnostic biometry to restore sight with safety and precision in Mumbra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1: Cataract & Lens Replacement */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div className="h-1.5 bg-[#006972] w-full" />
          <div className="p-6 sm:p-8 flex-1">
            <div className="w-12 h-12 rounded-xl bg-[#006972]/10 flex items-center justify-center text-[#006972] mb-5">
              <span className="material-symbols-outlined text-2xl">visibility</span>
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-[#006972] mb-2">
              Micro-Incision Phaco
            </div>
            <h3 className="font-display text-xl font-bold text-[#00152d] mb-3">
              Cataract & Lens Replacement
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Stitchless, injectionless, and bloodless sutureless cataract surgery (MICS). We utilize premium Foldable, Toric for astigmatism, and Trifocal IOLs for glasses-free vision.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6 border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Day-care discharge in under 2 hours</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Optical biometry for exact power calculation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Full Cashless Mediclaim facility available</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-2">
            <button
              onClick={() => onSelectService('Advanced Cataract Surgery (Phaco / MICS)')}
              className="w-full py-2.5 px-4 rounded-lg bg-[#0b2a4a] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#00152d] transition-colors cursor-pointer"
            >
              <span>Book Cataract Evaluation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={onOpenLensGuide}
              className="w-full py-2 px-3 rounded-lg border border-[#006972]/30 text-[#006972] hover:bg-[#006972]/5 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">tune</span>
              <span>Compare Lens Types (IOLs)</span>
            </button>
          </div>
        </div>

        {/* Service 2: Vitreoretinal Care */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div className="h-1.5 bg-[#006972] w-full" />
          <div className="p-6 sm:p-8 flex-1">
            <div className="w-12 h-12 rounded-xl bg-[#006972]/10 flex items-center justify-center text-[#006972] mb-5">
              <span className="material-symbols-outlined text-2xl">blur_circular</span>
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-[#006972] mb-2">
              Retina Specialty
            </div>
            <h3 className="font-display text-xl font-bold text-[#00152d] mb-3">
              Advanced Vitreoretinal Care
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Specialized management of Diabetic Retinopathy, macular edema, retinal detachment, floaters, and vascular occlusions under Dr. Abhijit’s vitreoretinal expertise.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6 border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Anti-VEGF intravitreal micro-injections</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Green 532nm Retinal Laser photocoagulation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>High-resolution Macular OCT scanning</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <button
              onClick={() => onSelectService('Retina & Diabetic Eye Screening')}
              className="w-full py-2.5 px-4 rounded-lg bg-[#0b2a4a] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#00152d] transition-colors cursor-pointer"
            >
              <span>Book Retina Screening</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Service 3: LASIK & Refractive */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div className="h-1.5 bg-[#006972] w-full" />
          <div className="p-6 sm:p-8 flex-1">
            <div className="w-12 h-12 rounded-xl bg-[#006972]/10 flex items-center justify-center text-[#006972] mb-5">
              <span className="material-symbols-outlined text-2xl">filter_vintage</span>
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-[#006972] mb-2">
              Spectacle Removal
            </div>
            <h3 className="font-display text-xl font-bold text-[#00152d] mb-3">
              Robotic LASIK & Refractive Suite
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Complete pre-refractive evaluation for customized Blade-free Femto-LASIK, Contoura Vision, and ICL (Implantable Collamer Lens) for thin corneas.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6 border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Corneal topography & pachymetry screening</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Painless, 10-minute outpatient procedure</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006972] text-sm">done</span>
                <span>Quick next-day return to normal screens</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <button
              onClick={() => onSelectService('LASIK & Refractive Suitability')}
              className="w-full py-2.5 px-4 rounded-lg bg-[#0b2a4a] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#00152d] transition-colors cursor-pointer"
            >
              <span>Check LASIK Eligibility</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
