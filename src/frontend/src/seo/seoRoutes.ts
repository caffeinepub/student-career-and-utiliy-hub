export interface SEORoute {
  path: string;
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const seoRoutes: Record<string, SEORoute> = {
  '/': {
    path: '/',
    title: 'Student Hub - Free Academic Tools & Career Guidance for Indian Students',
    description: 'Free calculators, career roadmaps, and placement tools for Indian engineering students. Calculate SGPA, CGPA, attendance, and plan your career path with AI-powered guidance.',
    keywords: 'student tools, SGPA calculator, CGPA calculator, attendance calculator, career roadmap, Indian students, engineering students, placement preparation',
    canonicalPath: '/'
  },
  '/attendance-calculator': {
    path: '/attendance-calculator',
    title: 'Attendance Calculator - Track Your Class Attendance Percentage',
    description: 'Free attendance calculator to track your class attendance percentage. Find out how many classes you can miss or need to attend to maintain required attendance.',
    keywords: 'attendance calculator, class attendance, attendance percentage, student attendance tracker, 75% attendance',
    canonicalPath: '/attendance-calculator'
  },
  '/age-calculator': {
    path: '/age-calculator',
    title: 'Age Calculator - Calculate Your Exact Age Online',
    description: 'Calculate your exact age in years, months, and days. Free age calculator tool for students to find age for applications, forms, and eligibility checks.',
    keywords: 'age calculator, calculate age, age in years months days, exact age calculator, date of birth calculator',
    canonicalPath: '/age-calculator'
  },
  '/unit-converter': {
    path: '/unit-converter',
    title: 'Unit Converter - Convert Units Online for Students',
    description: 'Free online unit converter for students. Convert length, weight, temperature, and more. Essential tool for engineering and science students.',
    keywords: 'unit converter, measurement converter, length converter, weight converter, engineering unit converter',
    canonicalPath: '/unit-converter'
  },
  '/career-roadmap-generator': {
    path: '/career-roadmap-generator',
    title: 'AI Career Roadmap Generator - Plan Your Career Path',
    description: 'Generate personalized career roadmaps with AI. Explore 200+ career paths for Indian students with step-by-step learning plans, skills, and resources.',
    keywords: 'career roadmap, career planning, AI career guidance, career paths for students, skill development roadmap',
    canonicalPath: '/career-roadmap-generator'
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy - Student Hub',
    description: 'Privacy policy for Student Hub. Learn how we protect your data and what information we collect when you use our free student tools and calculators.',
    keywords: 'privacy policy, data protection, student privacy, terms of service',
    canonicalPath: '/privacy-policy'
  },
  '/ats-resume-generator': {
    path: '/ats-resume-generator',
    title: 'ATS Resume Generator - Create ATS-Friendly Resumes for Free',
    description: 'Free ATS-friendly resume generator for Indian students and freshers. Create professional resumes optimized for applicant tracking systems to pass screening and land interviews.',
    keywords: 'ATS resume generator, ATS-friendly resume, resume builder for freshers, applicant tracking system, resume maker India, student resume builder',
    canonicalPath: '/ats-resume-generator'
  }
};
