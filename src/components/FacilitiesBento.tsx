import React from 'react';
import { Language } from '../types';

interface FacilitiesBentoProps {
  language: Language;
}

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({ language }) => {
  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="facilities">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold text-[#006972] uppercase tracking-wider">
          {language === 'hi' ? 'अस्पताल बुनियादी ढांचा' : 'Hospital Infrastructure'}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
          {language === 'hi'
            ? 'जीवाणु-रहित परिशुद्धता एवं डायग्नोस्टिक मशीनरी'
            : 'Sterile Precision & Diagnostic Machinery'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Adhering to NABH hygiene benchmarks with laminar airflow filtration and non-contact diagnostic scanners.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Facility Card: OT */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
          <div className="h-64 sm:h-72 w-full bg-slate-100 relative overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8_UdvnCfrvuS3-xLBtufAV-SuzhxMzOBjW79xp_BGsL_JFlAV50kdPm289uLp2D8H4SONAMHjby8UXlfs2phMOos-7aET9DTq__1wfjLULhoKEqg0oTBH2RgD03yvSNGbc6w3HYmc0jAKj6vhxfO83LL88AaLyRz3xbnSwY54F07S-abR8qdGZwg75MpIPTjmPyBjMGceVcev65oVeI6HMnKGyiElmPmhzYuIV0uq8q9faO1Fd2Lx"
              alt="Modular Laminar Airflow Operating Theater"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00152d] text-white shadow-xs">
                Modular Laminar Airflow OT
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#00152d] mb-2">
              Zero-Infection Surgical Environment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipped with HEPA filters, positive pressure air currents, and strict chemical sterilization cycles to eliminate endophthalmitis infection risks during phacoemulsification and vitrectomy procedures.
            </p>
          </div>
        </div>

        {/* Tech Card 1: Optical Biometry */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
          <div className="h-48 w-full bg-slate-100 relative overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4rTKAlQZSehmDJ9pChcwt5pRgDWcBeKwZaCmaBH42MYxbK5G3SFKnWkWjfw6G8fgFHQNe3XJeTi0PnpthswNPSZ1vtbL0oQlBl9NiCrvL2x3o8wbgcX4Td5KkQN3JTA7HOxk4cuAYCS8lcl2RFRMOsShwlHQP1b27cvrnOcEij1CnfyiKQ5WlohZvGd0ItwLoryOui9WJZ8LoD_AFpv-iv9RTXQ3r1bAUhGp1Ogh9gF9axzyIIE1"
              alt="Optical Biometry & Macular OCT Diagnostic Suite"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#006972] text-white shadow-xs">
                Diagnostic Suite
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-display text-base font-bold text-[#00152d] mb-2">
              Optical Biometry & Macular OCT
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Micro-millimeter axial length calculations for exact lens refractive prediction and multi-layer retinal cross-sections.
            </p>
          </div>
        </div>

        {/* Tech Card 2: Slit Lamp */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
          <div className="h-48 w-full bg-slate-100 relative overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOzo4fUzgwKhElXYxyrVUOrjq0P76g7UYVgk48bBkX57RXUmJZ7CyurDLeTrAA75fdvOfeZ1X8D0zFUJ2_HBW7e_8aJqb4aAKVqo8F6XjGTSGZm-1W07CS2Xqs1JJI72x1er8sp0lHGxeGppAoWH-cP0ar8A7AvM_s90RlELbeczQ2oGqdrjq7pw3OLcqJMt2K42xor_dApCOvHH-Kvr-31xZ_wIUcPUWGGz--emjk0DnZrfTLPuTE"
              alt="Digital Slit Lamp Imaging"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0b2a4a] text-white shadow-xs">
                Slit Lamp Exam
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-display text-base font-bold text-[#00152d] mb-2">
              Digital Slit Lamp Imaging
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              High-magnification cornea, lens, and anterior chamber illumination with real-time screen visualization for patient explanation.
            </p>
          </div>
        </div>

        {/* Large Facility Card: Day-Care Lounge */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
          <div className="h-48 sm:h-56 w-full bg-slate-100 relative overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm7mJbWZBFkpIExI-eac2Wvl3HPaYWyxkUoXtktiGIsDQk-XsEXCBrNt_NshSKJ1sZlsj7giO87LC4VUJuRi5zKbA9hnpVpQqZEMMqbR7uUk0lFrgQAUyo9vg9vLo_9lpR_fLdkdKJaBLsBSsD5rUGlPnjSoZ4x6drs_5O7ZruYV-435B-v9s87F4v8W3m2CQH2-o9Up0YPSiV_VGI_FEZyYADvn07IJ2tgDasUsRVkh0LyLj1JHYy"
              alt="Peaceful Day Care Recovery Lounge"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#16A34A] text-white shadow-xs">
                Recovery Lounge
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#00152d] mb-2">
              Comfortable Post-Op Recovery Lounge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Quiet, air-conditioned resting area where patients relax with family while pupil dilation normalizes and post-op eye drop counseling is provided by our nursing team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
