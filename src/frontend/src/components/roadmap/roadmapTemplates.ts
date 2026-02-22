import { careerPaths } from './careerPaths';

export interface LearningPhase {
  number: number;
  title: string;
  duration: string;
  topics: string[];
  resources: string[];
}

export interface RoadmapData {
  career: string;
  careerDescription: string;
  level: string;
  averageSalary: string;
  timeline: string;
  category: string;
  year: string;
  skills: string;
  studyHours: number;
  learningPhases: LearningPhase[];
  skillsMastered: string[];
  topCompanies: string[];
  careerOpportunities: string[];
  personalizedTips: {
    studyPlan: string;
    portfolio: string;
    networking: string;
  };
}

interface CareerTemplate {
  description: string;
  level: string;
  learningPhases: Omit<LearningPhase, 'number'>[];
  skillsMastered: string[];
  topCompanies: string[];
  careerOpportunities: string[];
  salaryRange: string;
}

// Specific career templates for high-traffic careers
const specificCareerTemplates: Record<string, CareerTemplate> = {
  'frontend-developer': {
    description: 'Build beautiful, responsive user interfaces for web applications',
    level: 'Beginner to Intermediate',
    learningPhases: [
      {
        title: 'Web Fundamentals',
        duration: '2 months',
        topics: ['HTML5 Semantic Elements', 'CSS3 & Flexbox/Grid', 'JavaScript ES6+', 'Responsive Design', 'Git Basics'],
        resources: ['freeCodeCamp', 'MDN Web Docs', 'JavaScript.info', 'CSS-Tricks']
      },
      {
        title: 'Modern Frontend Framework',
        duration: '3 months',
        topics: ['React.js Fundamentals', 'Component Architecture', 'Hooks & State Management', 'React Router', 'API Integration'],
        resources: ['React.dev Official Docs', 'Scrimba React Course', 'Frontend Masters']
      },
      {
        title: 'Styling & UI Libraries',
        duration: '2 months',
        topics: ['Tailwind CSS', 'CSS-in-JS', 'Component Libraries (shadcn/ui)', 'Animations', 'Accessibility (a11y)'],
        resources: ['Tailwind Docs', 'Radix UI', 'Web.dev Accessibility']
      },
      {
        title: 'Advanced Skills & Portfolio',
        duration: '3 months',
        topics: ['TypeScript', 'Performance Optimization', 'Testing (Jest/Vitest)', 'Build Tools (Vite)', 'Portfolio Projects'],
        resources: ['TypeScript Handbook', 'Web.dev Performance', 'GitHub Pages']
      }
    ],
    skillsMastered: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Git/GitHub'],
    topCompanies: ['Google', 'Microsoft', 'Flipkart', 'Swiggy', 'Zomato', 'PhonePe'],
    careerOpportunities: ['Frontend Developer', 'React Developer', 'UI Developer', 'Web Developer'],
    salaryRange: '₹4-12 LPA'
  },
  'data-analyst': {
    description: 'Transform raw data into actionable business insights',
    level: 'Beginner to Intermediate',
    learningPhases: [
      {
        title: 'Excel & Statistics Basics',
        duration: '2 months',
        topics: ['Advanced Excel (Pivot Tables, VLOOKUP)', 'Descriptive Statistics', 'Data Cleaning', 'Basic Probability'],
        resources: ['Excel Easy', 'Khan Academy Statistics', 'Coursera Excel Courses']
      },
      {
        title: 'SQL & Databases',
        duration: '2 months',
        topics: ['SQL Queries (SELECT, JOIN, GROUP BY)', 'Database Design', 'Data Aggregation', 'Window Functions'],
        resources: ['SQLBolt', 'Mode SQL Tutorial', 'LeetCode SQL Problems']
      },
      {
        title: 'Data Visualization',
        duration: '2 months',
        topics: ['Tableau/Power BI', 'Dashboard Design', 'Chart Selection', 'Storytelling with Data'],
        resources: ['Tableau Public', 'Power BI Docs', 'Storytelling with Data Book']
      },
      {
        title: 'Python for Analysis',
        duration: '4 months',
        topics: ['Python Basics', 'Pandas & NumPy', 'Data Wrangling', 'Matplotlib/Seaborn', 'Business Case Studies'],
        resources: ['Python.org', 'Kaggle Learn', 'DataCamp', 'Real Business Datasets']
      }
    ],
    skillsMastered: ['Excel', 'SQL', 'Python', 'Tableau/Power BI', 'Statistics', 'Data Visualization'],
    topCompanies: ['Flipkart', 'Amazon', 'Swiggy', 'Zomato', 'Paytm', 'HDFC Bank'],
    careerOpportunities: ['Data Analyst', 'Business Analyst', 'Analytics Consultant', 'BI Analyst'],
    salaryRange: '₹4-10 LPA'
  },
  'cybersecurity-analyst': {
    description: 'Protect organizations from cyber threats and security breaches',
    level: 'Intermediate',
    learningPhases: [
      {
        title: 'Networking Fundamentals',
        duration: '2 months',
        topics: ['TCP/IP Protocol Suite', 'OSI Model', 'Network Devices', 'Subnetting', 'Wireshark Basics'],
        resources: ['CompTIA Network+ Study Guide', 'Cisco Networking Basics', 'Professor Messer']
      },
      {
        title: 'Linux & Security Basics',
        duration: '2 months',
        topics: ['Linux Command Line', 'File Permissions', 'Bash Scripting', 'Security Principles', 'Cryptography Basics'],
        resources: ['Linux Journey', 'OverTheWire Bandit', 'Cybrary']
      },
      {
        title: 'Security Tools & Practices',
        duration: '3 months',
        topics: ['Vulnerability Scanning (Nmap, Nessus)', 'OWASP Top 10', 'Web Application Security', 'Firewall Configuration', 'IDS/IPS'],
        resources: ['OWASP.org', 'TryHackMe', 'HackTheBox', 'PentesterLab']
      },
      {
        title: 'Incident Response & Certifications',
        duration: '3 months',
        topics: ['Security Monitoring', 'Log Analysis', 'Incident Response', 'Security Policies', 'CompTIA Security+ Prep'],
        resources: ['SANS Reading Room', 'Security+ Study Guide', 'Blue Team Labs']
      }
    ],
    skillsMastered: ['Networking', 'Linux', 'Security Tools', 'Vulnerability Assessment', 'Incident Response', 'Python Scripting'],
    topCompanies: ['Cisco', 'Palo Alto Networks', 'TCS', 'Infosys', 'Wipro', 'Tech Mahindra'],
    careerOpportunities: ['Security Analyst', 'SOC Analyst', 'Security Engineer', 'Cybersecurity Consultant'],
    salaryRange: '₹5-14 LPA'
  },
  'ui-ux-designer': {
    description: 'Design intuitive and delightful user experiences for digital products',
    level: 'Beginner to Intermediate',
    learningPhases: [
      {
        title: 'Design Fundamentals',
        duration: '2 months',
        topics: ['Design Principles', 'Color Theory', 'Typography', 'Visual Hierarchy', 'Gestalt Principles'],
        resources: ['Refactoring UI', 'Design Course YouTube', 'Canva Design School']
      },
      {
        title: 'UI Design Tools',
        duration: '2 months',
        topics: ['Figma Basics', 'Components & Variants', 'Auto Layout', 'Design Systems', 'Prototyping'],
        resources: ['Figma Learn', 'Figma Community Files', 'DesignCourse']
      },
      {
        title: 'UX Research & Strategy',
        duration: '3 months',
        topics: ['User Research Methods', 'Personas & User Journeys', 'Information Architecture', 'Wireframing', 'Usability Testing'],
        resources: ['Nielsen Norman Group', 'UX Collective', 'Interaction Design Foundation']
      },
      {
        title: 'Portfolio & Specialization',
        duration: '3 months',
        topics: ['Case Study Writing', 'Portfolio Website', 'Mobile App Design', 'Micro-interactions', 'Design Handoff'],
        resources: ['Behance', 'Dribbble', 'Cofolios', 'Awwwards']
      }
    ],
    skillsMastered: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'User Testing'],
    topCompanies: ['Google', 'Microsoft', 'Adobe', 'Flipkart', 'Swiggy', 'Razorpay'],
    careerOpportunities: ['UI/UX Designer', 'Product Designer', 'Visual Designer', 'Interaction Designer'],
    salaryRange: '₹4-12 LPA'
  }
};

// Category-based templates
const categoryTemplates: Record<string, CareerTemplate> = {
  'Technology & Software': {
    description: 'Build software solutions and work with cutting-edge technologies',
    level: 'Intermediate',
    learningPhases: [
      {
        title: 'Programming Fundamentals',
        duration: '2 months',
        topics: ['Programming Language Basics', 'Data Structures', 'Algorithms', 'Problem Solving', 'Version Control (Git)'],
        resources: ['freeCodeCamp', 'LeetCode', 'GeeksforGeeks', 'GitHub']
      },
      {
        title: 'Core Technology Skills',
        duration: '3 months',
        topics: ['Framework/Library Learning', 'Database Basics', 'API Development', 'Testing Fundamentals'],
        resources: ['Official Documentation', 'Udemy', 'Coursera', 'YouTube Tutorials']
      },
      {
        title: 'Advanced Concepts',
        duration: '3 months',
        topics: ['System Design Basics', 'Security Best Practices', 'Performance Optimization', 'Code Quality'],
        resources: ['System Design Primer', 'OWASP', 'Web.dev', 'Clean Code Book']
      },
      {
        title: 'Projects & Interview Prep',
        duration: '2 months',
        topics: ['Portfolio Projects', 'Open Source Contributions', 'DSA Practice', 'Mock Interviews'],
        resources: ['GitHub', 'LeetCode', 'InterviewBit', 'Pramp']
      }
    ],
    skillsMastered: ['Programming', 'Problem Solving', 'Frameworks', 'Databases', 'Git', 'Testing'],
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Paytm', 'Swiggy'],
    careerOpportunities: ['Software Developer', 'Backend Developer', 'Full Stack Developer'],
    salaryRange: '₹5-15 LPA'
  },
  'Data Science & AI': {
    description: 'Analyze data and build intelligent systems using machine learning',
    level: 'Advanced',
    learningPhases: [
      {
        title: 'Python & Math Foundations',
        duration: '2 months',
        topics: ['Python Programming', 'Linear Algebra', 'Probability & Statistics', 'NumPy Basics'],
        resources: ['Python.org', 'Khan Academy', '3Blue1Brown', 'StatQuest']
      },
      {
        title: 'Data Analysis & Visualization',
        duration: '2 months',
        topics: ['Pandas for Data Manipulation', 'Exploratory Data Analysis', 'Matplotlib/Seaborn', 'SQL for Data'],
        resources: ['Kaggle Learn', 'DataCamp', 'Mode Analytics']
      },
      {
        title: 'Machine Learning',
        duration: '3 months',
        topics: ['Supervised Learning Algorithms', 'Unsupervised Learning', 'Scikit-learn', 'Model Evaluation & Tuning'],
        resources: ['Coursera ML by Andrew Ng', 'Fast.ai', 'Scikit-learn Docs']
      },
      {
        title: 'Deep Learning & Projects',
        duration: '3 months',
        topics: ['Neural Networks', 'TensorFlow/PyTorch', 'Computer Vision/NLP Basics', 'Kaggle Competitions'],
        resources: ['DeepLearning.AI', 'PyTorch Tutorials', 'Kaggle', 'Papers with Code']
      }
    ],
    skillsMastered: ['Python', 'SQL', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Statistics'],
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Ola', 'Zomato'],
    careerOpportunities: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'AI Engineer'],
    salaryRange: '₹7-18 LPA'
  },
  'Cybersecurity': {
    description: 'Protect systems and networks from cyber threats and attacks',
    level: 'Intermediate',
    learningPhases: [
      {
        title: 'Networking & Linux',
        duration: '2 months',
        topics: ['TCP/IP & Network Protocols', 'Linux Command Line', 'Bash Scripting', 'Network Tools'],
        resources: ['CompTIA Network+', 'Linux Journey', 'OverTheWire']
      },
      {
        title: 'Security Fundamentals',
        duration: '3 months',
        topics: ['Cryptography Basics', 'Security Principles', 'Web Security', 'OWASP Top 10'],
        resources: ['OWASP', 'Cybrary', 'HackTheBox']
      },
      {
        title: 'Ethical Hacking & Tools',
        duration: '3 months',
        topics: ['Penetration Testing', 'Vulnerability Assessment', 'Security Tools (Nmap, Burp Suite)', 'Python for Security'],
        resources: ['TryHackMe', 'PentesterLab', 'Offensive Security']
      },
      {
        title: 'Advanced Security & Certifications',
        duration: '2 months',
        topics: ['Incident Response', 'Security Monitoring', 'Compliance & Policies', 'CompTIA Security+ Prep'],
        resources: ['SANS Reading Room', 'Security+ Study Guide', 'Blue Team Labs']
      }
    ],
    skillsMastered: ['Networking', 'Linux', 'Ethical Hacking', 'Security Tools', 'Incident Response', 'Python'],
    topCompanies: ['Cisco', 'Palo Alto Networks', 'CrowdStrike', 'TCS', 'Infosys', 'Wipro'],
    careerOpportunities: ['Security Analyst', 'Penetration Tester', 'Security Engineer', 'SOC Analyst'],
    salaryRange: '₹5-16 LPA'
  },
  'Design & Creative': {
    description: 'Create beautiful and user-friendly digital experiences',
    level: 'Beginner to Intermediate',
    learningPhases: [
      {
        title: 'Design Fundamentals',
        duration: '2 months',
        topics: ['Design Principles', 'Color Theory', 'Typography', 'Layout & Composition'],
        resources: ['Refactoring UI', 'Design Course', 'Canva Design School']
      },
      {
        title: 'UI Design Tools',
        duration: '3 months',
        topics: ['Figma Mastery', 'Component Design', 'Design Systems', 'Prototyping'],
        resources: ['Figma Learn', 'Figma Community', 'Dribbble']
      },
      {
        title: 'UX Research & Strategy',
        duration: '2 months',
        topics: ['User Research', 'Personas & Journeys', 'Wireframing', 'Usability Testing'],
        resources: ['Nielsen Norman Group', 'UX Collective', 'Interaction Design Foundation']
      },
      {
        title: 'Portfolio & Specialization',
        duration: '3 months',
        topics: ['Case Study Writing', 'Portfolio Projects', 'Mobile/Web Design', 'Design Handoff'],
        resources: ['Behance', 'Cofolios', 'Awwwards']
      }
    ],
    skillsMastered: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Visual Design'],
    topCompanies: ['Google', 'Microsoft', 'Adobe', 'Flipkart', 'Swiggy', 'Zomato'],
    careerOpportunities: ['UI/UX Designer', 'Product Designer', 'Visual Designer', 'Interaction Designer'],
    salaryRange: '₹4-12 LPA'
  },
  'Product & Management': {
    description: 'Lead product strategy and drive business growth',
    level: 'Intermediate to Advanced',
    learningPhases: [
      {
        title: 'Product Fundamentals',
        duration: '2 months',
        topics: ['Product Lifecycle', 'User Stories', 'Roadmapping', 'Agile/Scrum Methodology'],
        resources: ['Product School', 'Pragmatic Institute', 'Mind the Product']
      },
      {
        title: 'Analytics & Research',
        duration: '3 months',
        topics: ['Data Analytics', 'User Research Methods', 'A/B Testing', 'SQL Basics', 'Product Metrics'],
        resources: ['Google Analytics Academy', 'Mixpanel', 'Amplitude']
      },
      {
        title: 'Strategy & Execution',
        duration: '3 months',
        topics: ['Product Strategy', 'Go-to-Market Planning', 'Stakeholder Management', 'Prioritization Frameworks'],
        resources: ['Reforge', 'Product Management Courses', 'Case Studies']
      },
      {
        title: 'Leadership & Growth',
        duration: '2 months',
        topics: ['Growth Strategies', 'Product Marketing', 'Team Leadership', 'Business Strategy'],
        resources: ['Growth Tribe', 'Product Marketing Alliance', 'Harvard Business Review']
      }
    ],
    skillsMastered: ['Product Strategy', 'Analytics', 'User Research', 'Agile', 'SQL', 'Leadership'],
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Swiggy', 'PhonePe'],
    careerOpportunities: ['Product Manager', 'Product Owner', 'Growth Manager', 'Strategy Consultant'],
    salaryRange: '₹8-20 LPA'
  },
  'Finance & Business': {
    description: 'Analyze financial data and drive business decisions',
    level: 'Intermediate',
    learningPhases: [
      {
        title: 'Financial Fundamentals',
        duration: '2 months',
        topics: ['Accounting Basics', 'Financial Statements', 'Excel for Finance', 'Business Mathematics'],
        resources: ['Khan Academy Finance', 'Coursera Finance', 'Excel Easy']
      },
      {
        title: 'Financial Analysis',
        duration: '3 months',
        topics: ['Financial Modeling', 'Valuation Techniques', 'Investment Analysis', 'Advanced Excel'],
        resources: ['Wall Street Prep', 'Corporate Finance Institute', 'Breaking Into Wall Street']
      },
      {
        title: 'Specialized Skills',
        duration: '3 months',
        topics: ['Corporate Finance', 'Portfolio Management', 'Risk Management', 'Financial Markets'],
        resources: ['CFA Institute', 'Investopedia', 'Bloomberg Market Concepts']
      },
      {
        title: 'Certifications & Career Prep',
        duration: '2 months',
        topics: ['CFA Level 1 Preparation', 'Case Studies', 'Interview Preparation', 'Networking'],
        resources: ['CFA Program', 'Vault Finance', 'Wall Street Oasis']
      }
    ],
    skillsMastered: ['Financial Modeling', 'Excel', 'Valuation', 'Accounting', 'Investment Analysis', 'Financial Markets'],
    topCompanies: ['Goldman Sachs', 'Morgan Stanley', 'JP Morgan', 'HDFC Bank', 'ICICI Bank', 'Kotak Mahindra'],
    careerOpportunities: ['Financial Analyst', 'Investment Banker', 'Portfolio Manager', 'Corporate Finance Analyst'],
    salaryRange: '₹6-15 LPA'
  },
  'Government & Civil Services': {
    description: 'Serve the nation through government positions and public service',
    level: 'Beginner to Advanced',
    learningPhases: [
      {
        title: 'Exam Selection & Planning',
        duration: '1 month',
        topics: ['Exam Pattern Understanding', 'Syllabus Analysis', 'Study Plan Creation', 'Resource Selection'],
        resources: ['UPSC Website', 'SSC Website', 'Previous Year Papers']
      },
      {
        title: 'Foundation Building',
        duration: '4 months',
        topics: ['General Knowledge', 'Current Affairs', 'Reasoning Ability', 'Quantitative Aptitude', 'English Language'],
        resources: ['NCERT Books', 'Daily Newspapers', 'Lucent GK', 'RS Aggarwal']
      },
      {
        title: 'Advanced Preparation',
        duration: '4 months',
        topics: ['Subject Specialization', 'Mock Test Practice', 'Time Management', 'Answer Writing Skills'],
        resources: ['Standard Reference Books', 'Test Series', 'Online Coaching Platforms']
      },
      {
        title: 'Final Revision & Interview',
        duration: '3 months',
        topics: ['Intensive Revision', 'Mock Interviews', 'Personality Development', 'Current Affairs Updates'],
        resources: ['Interview Guidance Books', 'Mock Interview Platforms', 'Monthly Magazines']
      }
    ],
    skillsMastered: ['General Knowledge', 'Current Affairs', 'Reasoning', 'Aptitude', 'English', 'Subject Expertise'],
    topCompanies: ['UPSC', 'SSC', 'Banking Sector', 'Railways', 'State PSCs', 'Defence Services'],
    careerOpportunities: ['IAS Officer', 'IPS Officer', 'Bank PO', 'SSC CGL', 'Railway Jobs'],
    salaryRange: '₹4-10 LPA'
  }
};

const defaultTemplate: CareerTemplate = {
  description: 'Build expertise in your chosen field',
  level: 'Intermediate',
  learningPhases: [
    {
      title: 'Foundation Building',
      duration: '2 months',
      topics: ['Core Concepts', 'Industry Fundamentals', 'Basic Tools & Techniques', 'Domain Overview'],
      resources: ['Online Courses', 'Official Documentation', 'YouTube Tutorials', 'Industry Blogs']
    },
    {
      title: 'Skill Development',
      duration: '3 months',
      topics: ['Advanced Concepts', 'Practical Skills', 'Industry-Standard Tools', 'Best Practices'],
      resources: ['Udemy', 'Coursera', 'LinkedIn Learning', 'Industry Publications']
    },
    {
      title: 'Specialization & Practice',
      duration: '3 months',
      topics: ['Domain Expertise', 'Advanced Techniques', 'Real-World Projects', 'Professional Certifications'],
      resources: ['Specialized Courses', 'Professional Communities', 'Mentorship Programs']
    },
    {
      title: 'Career Preparation',
      duration: '2 months',
      topics: ['Portfolio Development', 'Interview Preparation', 'Professional Networking', 'Job Applications'],
      resources: ['LinkedIn', 'Naukri/Indeed', 'Career Counseling', 'Mock Interviews']
    }
  ],
  skillsMastered: ['Core Skills', 'Technical Tools', 'Problem Solving', 'Communication', 'Teamwork', 'Domain Knowledge'],
  topCompanies: ['Leading Tech Companies', 'Top Startups', 'MNCs', 'Indian Corporates'],
  careerOpportunities: ['Entry Level Positions', 'Specialist Roles', 'Consultant Positions'],
  salaryRange: '₹4-12 LPA'
};

function calculateTimeline(studyHours: number): string {
  if (studyHours >= 20) return '6-8 months';
  if (studyHours >= 15) return '8-10 months';
  if (studyHours >= 10) return '8-12 months';
  return '12-18 months';
}

export function getRoadmapTemplate(
  career: string,
  year: string,
  skills: string,
  studyHours: number
): RoadmapData {
  const careerPath = careerPaths.find(p => p.value === career);
  const category = careerPath?.category || 'General';
  
  // Check for specific career template first
  let template = specificCareerTemplates[career];
  
  // Fall back to category template
  if (!template) {
    template = categoryTemplates[category] || defaultTemplate;
  }
  
  const timeline = calculateTimeline(studyHours);

  // Add phase numbers
  const learningPhases: LearningPhase[] = template.learningPhases.map((phase, index) => ({
    number: index + 1,
    ...phase
  }));

  // Generate personalized tips
  const personalizedTips = {
    studyPlan: `With ${studyHours} hours/week, you can complete this roadmap in approximately ${timeline}. Focus on building projects alongside learning theory to reinforce concepts and create a strong portfolio.`,
    portfolio: `Start working on projects from Phase 1. Share your progress on LinkedIn and GitHub. Recruiters love to see practical work! Build at least 3-5 substantial projects that demonstrate your skills.`,
    networking: `Join relevant communities on Discord, Reddit, and LinkedIn. Attend meetups and webinars. Connect with professionals in the ${category} field. Networking can open doors to mentorship and job opportunities.`
  };

  return {
    career,
    careerDescription: template.description,
    level: template.level,
    averageSalary: template.salaryRange,
    timeline,
    category,
    year,
    skills,
    studyHours,
    learningPhases,
    skillsMastered: template.skillsMastered,
    topCompanies: template.topCompanies,
    careerOpportunities: template.careerOpportunities,
    personalizedTips
  };
}
