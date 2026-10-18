import React from 'react';
import { CLINIC_WHATSAPP } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40">
      <a
        className="group flex items-center gap-2.5 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-subtle-pulse"
        href={`https://wa.me/${CLINIC_WHATSAPP}?text=Hello%20Dr.%20Abhijit%20Eye%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Chat on WhatsApp with Dr. Abhijit Eye Clinic"
      >
        <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1 1.024z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.636 0-3.167-.47-4.469-1.283l-.32-.201-2.964.778.791-2.89-.208-.331A8.136 8.136 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.502 0 8.167 3.664 8.167 8.167 0 4.504-3.665 8.167-8.167 8.167z" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
          Quick Consult on WhatsApp
        </span>
      </a>
    </div>
  );
};
