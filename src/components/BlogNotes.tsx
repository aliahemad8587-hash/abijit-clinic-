import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/clinicData';
import { BlogPost, Language } from '../types';

interface BlogNotesProps {
  language: Language;
  onConsultClick: () => void;
}

export const BlogNotes: React.FC<BlogNotesProps> = ({ language, onConsultClick }) => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section className="py-16 bg-slate-100/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#006972] uppercase tracking-wider">
            {language === 'hi' ? 'डॉक्टर के क्लिनिकल नोट्स' : "Doctor's Clinical Notes"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00152d] font-bold tracking-tight">
            {language === 'hi'
              ? 'नेत्र स्वास्थ्य एवं बचाव संबंधी मार्गदर्शन'
              : 'Eye Health & Prevention Guides'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Practical advice from Dr. Abhijit to protect your vision at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS_DATA.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-44 w-full bg-slate-100 overflow-hidden group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="font-semibold text-[#006972]">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#00152d] mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="text-xs font-bold text-[#006972] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Doctor's Advice</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <div className="relative h-48 sm:h-56 w-full bg-slate-900 shrink-0">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover opacity-75"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close"
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/80 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#006972] font-semibold">
                  {activeArticle.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold mt-1.5 leading-snug">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
              {activeArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs mt-4">
                <strong className="text-[#00152d] block mb-1">Clinical Takeaway from Dr. Abhijit:</strong>
                <p className="text-slate-600">
                  Early diagnosis prevents irreversible retinal and lens complications. If you or an elderly family member notice vision fluctuations, schedule a comprehensive slit-lamp evaluation at our Amrut Nagar center.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onConsultClick();
                }}
                className="px-5 py-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold transition-all cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
