/**
 * Eureka Academy — single source of truth for all site copy.
 *
 * EVERYTHING a non-developer might want to change lives here: business
 * details, tutor bios, subjects, prices and reviews. Edit this file, redeploy,
 * done. Values marked PLACEHOLDER must be replaced with real information
 * before launch.
 */

export const site = {
  name: 'Eureka Academy',
  tagline: 'Personal tutoring, not generic tutoring.',
  /** PLACEHOLDER — the town/area you target. Used in page titles for local SEO. */
  location: 'London',
  /** PLACEHOLDER */
  phone: '+44 7000 000000',
  /** PLACEHOLDER — displayed form of the number above. */
  phoneDisplay: '07000 000 000',
  /** PLACEHOLDER */
  email: 'hello@eurekaacademy.co.uk',
  url: 'https://eureka-academy.pages.dev',
  seoTitle:
    'Eureka Academy | Private Tutoring in London — 11+, KS2, KS3, GCSE & A Level',
  seoDescription:
    'Personalised private tutoring in maths, English and science. 11+, KS2, KS3, GCSE and A Level tuition built around each student, online or in person.',
} as const;

export const levels = ['11+', 'KS2', 'KS3', 'GCSE', 'A Level'] as const;

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Tutoring', href: '#tutoring' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Prices', href: '#prices' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const;

export const hero = {
  heading: ['Personalised tutoring.', 'Real progress.', 'Greater confidence.'],
  body: 'We build every session around the student in front of us — their current level, the things they find hard, and what they are working towards. No generic worksheets, no one-size-fits-all lesson plans.',
  primaryCta: { label: 'Book a Session', href: '#contact' },
  secondaryCta: { label: 'Explore Our Tutoring', href: '#tutoring' },
  /** PLACEHOLDER — swap for a real photo of the tutors in /public/. */
  image: {
    src: '/images/tutoring.svg',
    alt: 'Two Eureka Academy tutors working through a maths problem with a student',
  },
};

export const about = {
  heading: 'Meet Your Tutors',
  /** PLACEHOLDER — replace with a real photo of the two of you. */
  image: {
    src: '/images/tutors.svg',
    alt: 'The two tutors behind Eureka Academy',
  },
  /** PLACEHOLDER — replace every paragraph below with your real story. */
  paragraphs: [
    {
      heading: 'Why did we start tutoring?',
      body: 'We both spent years being the person friends and family came to when a topic refused to click. Watching someone go from "I will never get this" to explaining it back to you is genuinely the best part of the job — so we decided to do it properly.',
    },
    {
      heading: 'Our approach',
      body: 'We do not believe every student should be taught the same way. Some need to see it drawn out, some need to talk it through, some just need someone patient enough to go back three steps and rebuild the foundation. We work out which, then teach accordingly.',
    },
  ],
  /** PLACEHOLDER — only publish numbers you can actually stand behind. */
  stats: [
    { value: '50+', label: 'Students supported' },
    { value: '6+', label: 'Years of tutoring experience' },
    { value: '6', label: 'Subjects covered' },
    { value: '5', label: 'Levels, from 11+ to A Level' },
  ],
};

export const tutoring = {
  heading: 'Tutoring Designed Around You',
  intro:
    'Every student arrives with a different starting point and a different goal. These four things shape every session we teach.',
  cards: [
    {
      icon: 'personalised',
      eyebrow: 'Personalised',
      heading: 'Tutoring built around the individual',
      body: 'We start by understanding where the student currently is, what they find difficult and what they want to achieve. Sessions are then tailored accordingly.',
    },
    {
      icon: 'understanding',
      eyebrow: 'Understanding',
      heading: 'Learn it. Understand it. Apply it.',
      body: 'Rather than teaching students to memorise answers, we focus on developing genuine understanding — so an unfamiliar exam question is not a brick wall.',
    },
    {
      icon: 'confidence',
      eyebrow: 'Confidence',
      heading: 'A space where students can ask questions',
      body: 'Students should feel comfortable saying "I do not understand." Our sessions are supportive and encouraging, never intimidating.',
    },
    {
      icon: 'progress',
      eyebrow: 'Progress',
      heading: 'Work towards clear goals',
      body: 'Sessions have a purpose. We identify weaknesses, work on them systematically and review progress so you can see what has changed.',
    },
  ],
};

export const subjects = {
  heading: 'Subjects We Offer',
  intro:
    'From building strong foundations to preparing for important exams, our tutoring is tailored to the subject and level of each student.',
  items: [
    {
      icon: 'maths',
      name: 'Mathematics',
      levels: ['11+', 'KS2', 'KS3', 'GCSE', 'A Level'],
      body: 'Number, algebra, geometry and statistics — plus the exam technique to turn understanding into marks.',
    },
    {
      icon: 'english',
      name: 'English',
      levels: ['11+', 'KS2', 'KS3', 'GCSE'],
      body: 'Comprehension, creative and analytical writing, and structured approaches to literature essays.',
    },
    {
      icon: 'biology',
      name: 'Biology',
      levels: ['KS3', 'GCSE', 'A Level'],
      body: 'From cells to ecosystems, with a focus on the long-answer questions that decide grades.',
    },
    {
      icon: 'chemistry',
      name: 'Chemistry',
      levels: ['KS3', 'GCSE', 'A Level'],
      body: 'Bonding, equations, organic mechanisms and the calculation questions students most often lose marks on.',
    },
    {
      icon: 'physics',
      name: 'Physics',
      levels: ['KS3', 'GCSE', 'A Level'],
      body: 'Building real intuition for the concepts, then the maths and problem-solving to back it up.',
    },
    {
      icon: 'eleven-plus',
      name: '11+ Preparation',
      levels: ['11+'],
      body: 'Verbal and non-verbal reasoning, maths and English, timed practice and calm exam technique.',
    },
  ],
};

export const pricing = {
  heading: 'Simple, Transparent Pricing',
  intro: 'Choose the level of support that best suits your student.',
  /** PLACEHOLDER — set your real rates here. */
  tiers: [
    {
      name: '11+ / KS2',
      price: '£30',
      unit: 'per session',
      note: '60-minute sessions',
      features: [
        'Personalised tutoring',
        'Individual lesson planning',
        'Progress feedback after each session',
        'Online or in person',
      ],
      featured: false,
    },
    {
      name: 'KS3 / GCSE',
      price: '£35',
      unit: 'per session',
      note: '60-minute sessions',
      features: [
        'Personalised tutoring',
        'Individual lesson planning',
        'Exam-board specific practice',
        'Progress feedback after each session',
        'Online or in person',
      ],
      featured: true,
    },
    {
      name: 'A Level',
      price: '£40',
      unit: 'per session',
      note: '60-minute sessions',
      features: [
        'Personalised tutoring',
        'Individual lesson planning',
        'Past-paper and exam technique work',
        'Progress feedback after each session',
        'Online or in person',
      ],
      featured: false,
    },
  ],
  /** PLACEHOLDER — confirm the maths before publishing. */
  package: {
    heading: 'Save when you book multiple sessions',
    body: 'Book a block of 10 sessions up front and get 10% off. Sessions are used at your own pace and can be spread across subjects.',
    single: { label: 'Single session', value: '£35' },
    bundle: { label: '10-session package', value: '£315' },
    saving: 'Save £35',
  },
};

export const reviews = {
  heading: 'What Our Students Say',
  intro: 'A few words from the families we work with.',
  /** PLACEHOLDER — every review below is sample copy. Replace with real,
   *  permission-given quotes before launch. */
  items: [
    {
      rating: 5,
      quote:
        'My daughter went from dreading maths homework to actually explaining it to me over dinner. The change in her confidence has been the biggest thing.',
      author: 'Parent of Year 10 student',
      detail: 'GCSE Mathematics',
    },
    {
      rating: 5,
      quote:
        'Sessions were never generic. Every week we picked up exactly where I was struggling rather than working through a textbook in order.',
      author: 'Year 13 student',
      detail: 'A Level Chemistry',
    },
    {
      rating: 5,
      quote:
        'Patient, organised and genuinely lovely with our son. He passed his 11+ and, more importantly, he was not stressed about it.',
      author: 'Parent of Year 6 student',
      detail: '11+ Preparation',
    },
  ],
};

export const finalCta = {
  heading: 'Ready to get started?',
  body: 'Whether you are looking for exam preparation, extra support or simply want to build confidence, we are here to help.',
  primaryCta: { label: 'Book a Session', href: '#contact' },
  secondaryCta: { label: 'Contact Us', href: '#contact' },
};

export const contact = {
  heading: "Let's Talk About Your Tutoring Needs",
  intro:
    "Tell us a little about what you're looking for and we'll get back to you, usually within 24 hours.",
  yearGroups: [
    'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9',
    'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Other',
  ],
  subjectOptions: [
    'Mathematics', 'English', 'Biology', 'Chemistry', 'Physics',
    '11+ Preparation', 'Other',
  ],
  sessionTypes: ['Online', 'In person', 'Either'],
};

export const footer = {
  /** PLACEHOLDER — remove any you do not have. */
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#contact' },
    { label: 'Terms & Conditions', href: '#contact' },
  ],
  year: 2026,
};
