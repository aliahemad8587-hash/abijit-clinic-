import { SymptomItem, LensComparison, ReviewItem, FAQItem, BlogPost } from '../types';

export const CLINIC_PHONE = '+918928030437';
export const CLINIC_PHONE_DISPLAY = '+91 89280 30437';
export const CLINIC_WHATSAPP = '918928030437';
export const CLINIC_ADDRESS = 'Kausar Mahal, Amrut Nagar, Mumbra, Thane, Maharashtra 400612';

export const SYMPTOMS_DATA: SymptomItem[] = [
  {
    id: 'sym-1',
    title: 'Blurry / Foggy Vision',
    description: 'Feels like looking through a frosted window; intense headlight glare when driving at night.',
    actionText: 'Possible: Senile or Traumatic Cataract',
    category: 'cataract',
    icon: 'cloudy',
    urgency: 'routine'
  },
  {
    id: 'sym-2',
    title: 'Floaters & Lightning Flashes',
    description: 'Cobweb-like spots or sudden spark flashes in your peripheral field.',
    actionText: 'Urgent: Retinal Tear or Vitreous Detachment',
    category: 'retina',
    icon: 'scatter_plot',
    urgency: 'urgent'
  },
  {
    id: 'sym-3',
    title: 'Diabetic Eye Fluctuations',
    description: 'Distorted central vision, dark floating patches, and washed-out colors.',
    actionText: 'Action: Diabetic Retinopathy OCT Fundus check',
    category: 'retina',
    icon: 'bloodtype',
    urgency: 'urgent'
  },
  {
    id: 'sym-4',
    title: 'Redness & Deep Aching',
    description: 'Severe brow ache accompanied by rainbow halos and elevated eyeball tenderness.',
    actionText: 'Attention: Acute Angle Closure Glaucoma',
    category: 'pain',
    icon: 'warning',
    urgency: 'urgent'
  },
  {
    id: 'sym-5',
    title: 'Burning Gritty Sensation',
    description: 'Heavy stinging, sand-like grit, and fatigue after smartphone or laptop screen work.',
    actionText: 'Management: Computer Vision Syndrome / Tear Film Osmolarity',
    category: 'pain',
    icon: 'water_drop',
    urgency: 'routine'
  },
  {
    id: 'sym-6',
    title: 'Rapid Glass Number Changes',
    description: 'Frequent prescription power shifts every 4–6 months with poor reading sharpness.',
    actionText: 'Check: Lens Nucleus Sclerosis & Cataract Progression',
    category: 'cataract',
    icon: 'pin',
    urgency: 'routine'
  }
];

export const LENS_COMPARISON_DATA: LensComparison[] = [
  {
    id: 'monofocal',
    name: 'Standard Monofocal IOL',
    category: 'Basic Optical Restoration',
    bestFor: 'Distance clarity (driving, watching TV); reading glasses needed for near tasks.',
    distanceVision: 5,
    intermediateVision: 2,
    nearVision: 1,
    nightGlare: 'Minimal',
    spectacleDependence: 'Glasses needed for reading, phone, and laptop',
    insuranceCashless: '100% Covered by all Mediclaim & TPAs',
    features: [
      'Gold standard UV-blocking hydrophobic acrylic',
      'Ultra-sharp distance clarity with zero halos',
      'Requires +2.00 to +2.50D glasses for books/mobiles',
      'Lowest surgical package cost'
    ]
  },
  {
    id: 'toric',
    name: 'Toric Astigmatism IOL',
    category: 'Cylindrical Correction',
    bestFor: 'Patients with corneal cylindrical power (>0.75D astigmatism) seeking crisp distance sight.',
    distanceVision: 5,
    intermediateVision: 3,
    nearVision: 2,
    nightGlare: 'Minimal',
    spectacleDependence: 'Simple low-power reading glasses only',
    insuranceCashless: 'Covered (Subject to base TPA package cap)',
    features: [
      'Corrects corneal distortion and astigmatism precisely',
      'Digital axis alignment during phacoemulsification',
      'Eliminates ghosting and double edges',
      'Enhances contrast sensitivity in low light'
    ]
  },
  {
    id: 'edof',
    name: 'EDOF (Extended Depth of Focus)',
    category: 'Modern Intermediate Priority',
    bestFor: 'Active lifestyles, laptop/computer workers, drivers, cooking, supermarket shopping.',
    distanceVision: 5,
    intermediateVision: 5,
    nearVision: 3,
    nightGlare: 'Very Low',
    spectacleDependence: 'Spectacle-free for 85% of daily tasks (minor glasses for tiny print)',
    insuranceCashless: 'Covered with premium lens co-pay options',
    features: [
      'Continuous seamless focus from distance to dashboard/screens',
      'Significantly lower night halo risk compared to older trifocals',
      'Ideal for professionals who use multiple monitors',
      'Smooth optical transition with excellent contrast'
    ]
  },
  {
    id: 'trifocal',
    name: 'Premium Trifocal / Multifocal IOL',
    category: 'Complete Spectacle Independence',
    bestFor: 'Patients desiring total freedom from glasses for reading holy books, mobile, PC, and driving.',
    distanceVision: 5,
    intermediateVision: 4,
    nearVision: 5,
    nightGlare: 'Moderate (Adaptation ~2-4 weeks)',
    spectacleDependence: 'Complete 95%+ glasses-free independence',
    insuranceCashless: 'Partially covered with patient copay for premium optics',
    features: [
      'Simultaneous near, intermediate, and far focal planes',
      'Read holy scriptures, mobile screens, and car dashboard comfortably',
      'Pupil-independent diffractive optical design',
      'Requires normal retina and healthy macula'
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Farhan K.',
    location: 'Amrut Nagar, Mumbra',
    procedure: 'Cataract Phacoemulsification',
    rating: 5,
    comment: 'My 68-year-old mother was very frightened of cataract surgery. Dr. Abhijit explained the stitchless technique so gently. The procedure was completed in 15 minutes without any pain, and she can now read the Quran without thick glasses!',
    date: '3 weeks ago'
  },
  {
    id: 'rev-2',
    author: 'Rameshwar Patil',
    location: 'Kalwa West, Thane',
    procedure: 'Retina Laser & Anti-VEGF',
    rating: 5,
    comment: 'Being diabetic for 18 years, I had sudden bleeding and floaters. We used to travel all the way to South Mumbai for retina shots. Having a specialist like Dr. Abhijit in Mumbra with laser facilities saved our time, money, and eyesight.',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    author: 'Shabana Shaikh',
    location: 'Kausa, Mumbra',
    procedure: 'Cashless Mediclaim Cataract',
    rating: 5,
    comment: 'Cleanliness in the clinic is exceptional. Staff handled our Star Health cashless paperwork with zero hassle. We didn\'t have to pay anything out of pocket. Best eye doctor in Thane district.',
    date: '2 months ago'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is cataract surgery painful or done under injections?',
    answer: 'No. At Abhijit Eye Clinic, cataract surgery is performed using topical anesthesia (numbing eye drops). No painful needles or eye patches are typically required. The procedure lasts 12 to 18 minutes, and patients return home the same day without bandage discomfort.'
  },
  {
    id: 'faq-2',
    question: 'How soon can I resume daily activities after cataract surgery?',
    answer: 'Most patients resume watching TV and light walking within 24–48 hours. Cooking over high gas flames, heavy weight lifting, and water directly entering the operated eye should be avoided for 7 to 10 days as per Dr. Abhijit’s healing guidelines.'
  },
  {
    id: 'faq-3',
    question: 'Is cataract and retina surgery covered under Mediclaim?',
    answer: 'Yes! Both Cataract Day-care and Vitreoretinal surgeries are recognized procedures under almost all individual, group, and family floater health insurance policies with full cashless assistance available at our on-site clinic desk.'
  },
  {
    id: 'faq-4',
    question: 'What lens (IOL) is best: Monofocal, Toric, or Multifocal?',
    answer: 'The ideal lens depends on your lifestyle and corneal measurements. Monofocal provides sharp distance vision (reading glasses needed). Toric corrects cylindrical astigmatism. Trifocal/Multifocal provides glass-free vision for both near reading and distant driving. Dr. Abhijit conducts optical biometry to advise the best match.'
  },
  {
    id: 'faq-5',
    question: 'Why is retina screening necessary for diabetic patients every year?',
    answer: 'Diabetic retinopathy causes silent leakage and micro-bleeding inside the retina without initial vision blur. By the time noticeable darkness occurs, permanent damage may have begun. Annual dilated fundus exams detect issues early when laser or injections are most effective.'
  },
  {
    id: 'faq-6',
    question: 'What are the age limits and requirements for LASIK surgery?',
    answer: 'Candidates must be at least 18 years old with stable spectacle prescription for at least one year. Corneal thickness is checked using computerized tomography. If corneas are thin, ICL (Phakic IOL) is often the safer recommended alternative.'
  },
  {
    id: 'faq-7',
    question: 'Can I drive back myself immediately after the eye check-up?',
    answer: 'If a dilated retina examination or pupil widening is performed, vision will remain slightly blurry and sensitive to sunlight for 2 to 3 hours. We recommend bringing an accompanying friend or using public transport/auto-rickshaws.'
  },
  {
    id: 'faq-8',
    question: 'What should I do if sudden floaters or black curtains appear?',
    answer: 'Sudden flashes and showers of floaters are symptoms of a potential retinal tear or retinal detachment. Call our clinic emergency hotline immediately (+91 89280 30437) or visit the clinic right away for immediate fundus evaluation.'
  },
  {
    id: 'faq-9',
    question: 'Are Sunday consultations available at the clinic?',
    answer: 'No, our regular outpatient clinic is open Monday through Saturday from 12:00 PM to 8:00 PM. Sundays are reserved for surgical sanitization, equipment calibration, and emergency post-op triage.'
  },
  {
    id: 'faq-10',
    question: 'How can I book an appointment without waiting long at the clinic?',
    answer: 'Use the WhatsApp Booking tool on this website. It generates a pre-allocated priority token slot, minimizing reception wait times upon arrival.'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'When Is The Right Time For Cataract Surgery?',
    category: 'Cataract Guide',
    readTime: '4 min read',
    summary: 'Debunking the outdated myth of "waiting for the cataract to fully mature." Why modern ultrasound phaco is safest when performed early.',
    content: [
      'Decades ago, older surgical techniques required cataracts to harden before extraction. Today, Micro-Incision Phacoemulsification (MICS) uses gentle ultrasound soundwaves to dissolve the cloudy lens through a 2.2mm micro-port.',
      'Waiting until a cataract is hyper-mature actually increases surgical hardness, ultrasonic energy required, and recovery duration.',
      'If blurry vision or night glare is interfering with reading, evening driving, or recognizing faces, it is the clinically ideal time to consult Dr. Abhijit.'
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjXFrECvIU6cjmMGTsuS6PwBfkOH8-xpWsKINJ7jqYCJRSIeQLv_oCAbRAAadyj2FyxewjR9iORdxNXSHMZmHJw2hfHcO6WOTU5O3bEdDMj1rjpiRCblMGW8ITemZN7EkAz5jIrHkGjXNQHXUWXLTiDE_ZA0aB1bd7NyRc6xh5onKLE3OrXkf2o0NE6wFuFNFVzlrBywQLrqqcLwX74G7hZbrQY6eAb1inSF1orLZmGrmrggl6g9t2'
  },
  {
    id: 'blog-2',
    title: 'How High Blood Sugar Silently Damages The Retina',
    category: 'Diabetic Care',
    readTime: '5 min read',
    summary: 'Understanding microaneurysms, maculopathy, and how timely green laser treatments protect vision for patients with Type-2 diabetes.',
    content: [
      'Elevated blood sugar weakens the delicate micro-capillaries supplying blood to the retina. Over time, fluid and lipids leak into the macula, causing swelling (macular edema).',
      'The insidious aspect of diabetic eye disease is that advanced damage can develop before visual symptoms appear.',
      'Dr. Abhijit utilizes high-resolution optical coherence tomography (OCT) and green 532nm retinal laser therapy to seal leaking vessels and protect sharp reading sight.'
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9HiGi_5rG7A1i9ZYbg6ybTuEpKhoZbTjV1zWx1lNitwuiSHd7JuHBEXJjcozpPiIZWKIPKzJCCm_dbuCIEgQHt4XIiLTeN1i4T-B3NXawdCc8yIULSuAfnihQvWWZIl-XELp1BupTioVX8hv6VIgRkGbWFrQr6fzb4gqdmhjFqyafTT_oxdpAYbuZOb_t3-Fcsl29cJJkLi4I5nMoBpj3xfwxBlIjfDe0cBXUsHS0uImQQUzjGVPf'
  },
  {
    id: 'blog-3',
    title: 'The 20-20-20 Rule for Remote Workers & Students',
    category: 'Lifestyle & Ergonomics',
    readTime: '3 min read',
    summary: 'Simple eye exercises and tear film stabilization techniques to eliminate digital eye strain, dryness, and late afternoon headaches.',
    content: [
      'When staring at digital screens, our natural blink rate drops by over 60%, resulting in tear film evaporation and dry ocular surface sensations.',
      'Adopt the 20-20-20 Rule: Every 20 minutes, look at an object at least 20 feet away for 20 continuous seconds to relax the ciliary focusing muscles.',
      'Pair this with preservative-free lubricating drops and optimal screen distance (arm’s length below eye level) for comfortable workdays.'
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs38X9HCEyRcIa3EprKhiscHA_JRF5TL8hyxvS-69d5ZNZHToyRnIHp0urXucFc4YiG8zExJ5NQvqc38W0TFfFQa8L842z-7NLGTwzF_5EjHI6EkVv_kYynQU9p20wnGpPNEbmom8XDGzaEmPvxknd3t5bd5Kyx6uv4B5t9FOxn-6cpiJTKYhHr7FhuTpyeo5icMnATflSNpd7jirwazz3MM0Zlb4Vo0o3EVQe8Y7xugtD2poxsw3Q'
  }
];

export const INSURANCE_TPAS = [
  { name: 'Star Health', subtitle: 'All Individual & Family Policies', color: '#006972' },
  { name: 'HDFC ERGO', subtitle: 'Optima Restore & Corporate', color: '#00152d' },
  { name: 'ICICI Lombard', subtitle: 'Health Shield & Complete Care', color: '#006972' },
  { name: 'Medi Assist', subtitle: 'Authorized TPA Partner', color: '#00152d' },
  { name: 'Paramount TPA', subtitle: 'Third Party Health Network', color: '#006972' },
  { name: 'Vidal Health', subtitle: 'Fast Cashless Approvals', color: '#00152d' },
  { name: 'Care Health', subtitle: 'Religare Health Insurance', color: '#006972' },
  { name: 'Niva Bupa', subtitle: 'Heartbeat & ReAssure Panels', color: '#00152d' }
];
