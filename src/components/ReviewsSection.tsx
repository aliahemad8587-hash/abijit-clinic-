import React from 'react';
import { REVIEWS_DATA } from '../data/clinicData';
import { Language } from '../types';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="reviews">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-semibold mb-2">
            <span className="material-symbols-outlined text-sm text-amber-500 fill">star</span>
            <span>{language === 'hi' ? '4.9 रेटिंग - गूगल पर सत्यापित' : '4.9 Rating Verified on Google'}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
            {language === 'hi'
              ? 'मुंब्रा और ठाणे के परिवारों के वास्तविक अनुभव'
              : 'Real Stories From Mumbra Neighbors'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Hear from patients across Mumbra, Kausa, Thane, and Kalwa who restored their vision.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#006972] hover:underline"
          href="https://maps.google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Read All 500+ Google Reviews</span>
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS_DATA.map(review => (
          <div
            key={review.id}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-base fill">
                    star
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                "{review.comment}"
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#00152d]">{review.author}</h4>
                <span className="text-[11px] text-slate-500">{review.location}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-[#006972]/10 text-[#006972] font-semibold">
                {review.procedure}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
