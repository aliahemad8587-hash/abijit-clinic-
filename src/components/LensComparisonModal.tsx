import React, { useState } from 'react';
import { LENS_COMPARISON_DATA } from '../data/clinicData';
import { LensComparison } from '../types';

interface LensComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLensForBooking: (lensName: string) => void;
}

export const LensComparisonModal: React.FC<LensComparisonModalProps> = ({
  isOpen,
  onClose,
  onSelectLensForBooking
}) => {
  const [selectedLensId, setSelectedLensId] = useState<string>('trifocal');
  const [lifestyleFilter, setLifestyleFilter] = useState<'all' | 'driving' | 'screens' | 'reading'>('all');

  if (!isOpen) return null;

  const currentLens: LensComparison =
    LENS_COMPARISON_DATA.find(l => l.id === selectedLensId) || LENS_COMPARISON_DATA[0];

  const renderRatingBars = (val: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={`w-4 h-2 rounded-xs ${
              star <= val ? 'bg-[#006972]' : 'bg-slate-200'
            }`}
          />
        ))}
        <span className="text-xs font-mono ml-1.5 font-bold text-slate-700">{val}/5</span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0b2a4a] text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#8df2ff] uppercase tracking-wider">
              Clinical Decision Guide
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              Intraocular Lens (IOL) Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select and compare lens technologies tailored for your daily visual demands, reading habits, and Mediclaim coverage.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Lens Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {LENS_COMPARISON_DATA.map(lens => {
              const isActive = lens.id === selectedLensId;
              return (
                <button
                  key={lens.id}
                  onClick={() => setSelectedLensId(lens.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#006972] bg-[#006972]/10 ring-2 ring-[#006972]'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-[#00152d] leading-snug">{lens.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 truncate">{lens.category}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Lens Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-[#006972] uppercase tracking-wider">
                  {currentLens.category}
                </span>
                <h3 className="text-xl font-bold text-[#00152d] mt-0.5">{currentLens.name}</h3>
                <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
                  {currentLens.bestFor}
                </p>
              </div>
              <div className="shrink-0 p-3 rounded-xl bg-white border border-slate-200 text-xs">
                <span className="text-slate-500 block text-[11px]">Mediclaim Cashless Status</span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  {currentLens.insuranceCashless}
                </span>
              </div>
            </div>

            {/* Visual Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-5 py-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                <div className="text-xs font-medium text-slate-500 mb-1 flex items-center justify-between">
                  <span>Distance Vision (Driving, TV)</span>
                  <span className="material-symbols-outlined text-sm text-[#006972]">directions_car</span>
                </div>
                {renderRatingBars(currentLens.distanceVision)}
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                <div className="text-xs font-medium text-slate-500 mb-1 flex items-center justify-between">
                  <span>Intermediate (Laptop, Dashboard)</span>
                  <span className="material-symbols-outlined text-sm text-[#006972]">computer</span>
                </div>
                {renderRatingBars(currentLens.intermediateVision)}
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                <div className="text-xs font-medium text-slate-500 mb-1 flex items-center justify-between">
                  <span>Near Vision (Quran, Mobile)</span>
                  <span className="material-symbols-outlined text-sm text-[#006972]">menu_book</span>
                </div>
                {renderRatingBars(currentLens.nearVision)}
              </div>
            </div>

            {/* Spectacle Freedom & Halos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 block">Spectacle Independence</span>
                <strong className="text-slate-900 block mt-0.5">{currentLens.spectacleDependence}</strong>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 block">Night Halos / Glare Risk</span>
                <strong className="text-slate-900 block mt-0.5">{currentLens.nightGlare}</strong>
              </div>
            </div>

            {/* Key Clinical Features */}
            <div>
              <h4 className="text-xs font-bold text-[#00152d] uppercase tracking-wider mb-2">
                Clinical Features & Doctor's Guidance
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {currentLens.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              * Exact lens power is calculated via Optical Biometry in our Mumbra clinic suite.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onSelectLensForBooking(`Cataract Surgery - ${currentLens.name}`);
                  onClose();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <span>Book Evaluation for {currentLens.name.split(' ')[0]}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
