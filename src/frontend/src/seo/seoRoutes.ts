export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const seoRoutes: Record<string, SEOMetadata> = {
  '/': {
    title: 'SGPA Calculator, Career Roadmap Generator & Resume Tools for Engineering Students',
    description: 'Free SGPA & CGPA calculator, AI career roadmap generator, resume bullet creator, attendance tracker and student utility tools. Designed for engineering students in India.',
    keywords: 'SGPA calculator, CGPA calculator, career roadmap generator, resume bullet generator, attendance calculator, engineering students India, student tools',
    canonicalPath: '/',
  },
  '/sgpa-calculator': {
    title: 'SGPA Calculator for Engineering Students | Free Semester GPA Tool',
    description: 'Calculate your SGPA (Semester Grade Point Average) instantly with our free online calculator. Designed for engineering students in India with credit-based grading system.',
    keywords: 'SGPA calculator, semester GPA calculator, engineering SGPA tool, SGPA to percentage converter, credit based grading',
    canonicalPath: '/sgpa-calculator',
  },
  '/cgpa-calculator': {
    title: 'CGPA Calculator | Calculate Cumulative GPA for Engineering Students',
    description: 'Free CGPA calculator for engineering students. Calculate cumulative grade point average, convert CGPA to percentage, and track your academic performance.',
    keywords: 'CGPA calculator, cumulative GPA calculator, CGPA to percentage India, engineering CGPA tool, academic performance tracker',
    canonicalPath: '/cgpa-calculator',
  },
  '/attendance-calculator': {
    title: 'Attendance Calculator | Track College Attendance Percentage',
    description: 'Calculate your attendance percentage and find out how many classes you can miss. Free attendance tracker for college and engineering students.',
    keywords: 'attendance calculator, college attendance tracker, attendance percentage calculator, class attendance tool, student attendance',
    canonicalPath: '/attendance-calculator',
  },
  '/career-roadmap-generator': {
    title: 'AI Career Roadmap Generator for BTech Students | Free Career Planning Tool',
    description: 'Generate personalized career roadmaps with AI. Get step-by-step guidance for 200+ career paths including software engineering, data science, and more.',
    keywords: 'AI career roadmap for BTech students, career planning tool, engineering career path, software engineer roadmap, data science career guide',
    canonicalPath: '/career-roadmap-generator',
  },
  '/resume-bullet-generator': {
    title: 'Resume Bullet Generator for Freshers | Free Resume Writing Tool',
    description: 'Create impactful resume bullet points for your internship and job applications. Free resume bullet generator designed for engineering students and freshers.',
    keywords: 'free resume bullet generator for freshers, resume writing tool, internship resume tips, engineering student resume, job application help',
    canonicalPath: '/resume-bullet-generator',
  },
  '/internship-email-template': {
    title: 'Internship Email Template for Students | Professional Email Generator',
    description: 'Get professional email templates for internship applications. Free tool to help students write effective cold emails to companies.',
    keywords: 'internship email template for students, cold email for internship, professional email generator, job application email, student email templates',
    canonicalPath: '/internship-email-template',
  },
  '/interview-prep-checklist': {
    title: 'Interview Preparation Checklist | Complete Guide for Students',
    description: 'Comprehensive interview preparation checklist for engineering students. Cover technical, behavioral, and HR rounds with confidence.',
    keywords: 'interview preparation checklist, technical interview guide, behavioral interview tips, engineering interview prep, student interview help',
    canonicalPath: '/interview-prep-checklist',
  },
  '/linkedin-profile-checklist': {
    title: 'LinkedIn Profile Checklist | Optimize Your Profile for Recruiters',
    description: 'Complete checklist to optimize your LinkedIn profile. Stand out to recruiters and increase your chances of landing internships and jobs.',
    keywords: 'LinkedIn profile checklist, optimize LinkedIn for recruiters, student LinkedIn tips, professional profile guide, LinkedIn optimization',
    canonicalPath: '/linkedin-profile-checklist',
  },
  '/age-calculator': {
    title: 'Age Calculator | Calculate Your Exact Age in Years, Months, Days',
    description: 'Free online age calculator. Calculate your exact age in years, months, and days. Perfect for students and professionals.',
    keywords: 'age calculator, calculate age, age in years months days, date of birth calculator, exact age tool',
    canonicalPath: '/age-calculator',
  },
  '/emi-calculator': {
    title: 'EMI Calculator | Calculate Monthly Loan Payments',
    description: 'Free EMI calculator for students and professionals. Calculate monthly loan payments for education loans, personal loans, and more.',
    keywords: 'EMI calculator, loan EMI calculator, education loan calculator, monthly payment calculator, loan calculator India',
    canonicalPath: '/emi-calculator',
  },
  '/bmi-calculator': {
    title: 'BMI Calculator | Calculate Your Body Mass Index',
    description: 'Free BMI calculator to check your body mass index. Get instant results and health recommendations based on your height and weight.',
    keywords: 'BMI calculator, body mass index calculator, health calculator, weight calculator, fitness tool',
    canonicalPath: '/bmi-calculator',
  },
  '/unit-converter': {
    title: 'Unit Converter | Convert Length, Weight, Temperature & More',
    description: 'Free online unit converter for students. Convert between different units of length, weight, temperature, and more instantly.',
    keywords: 'unit converter, length converter, weight converter, temperature converter, measurement converter tool',
    canonicalPath: '/unit-converter',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Student Hub',
    description: 'Learn how Student Hub protects your privacy. We don\'t require login, don\'t collect personal data, and perform all calculations locally in your browser.',
    keywords: 'privacy policy, data protection, student privacy, no login required, local calculations, browser privacy',
    canonicalPath: '/privacy-policy',
  },
};
