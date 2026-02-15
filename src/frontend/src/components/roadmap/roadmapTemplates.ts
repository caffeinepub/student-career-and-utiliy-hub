import { careerPaths } from './careerPaths';

export interface RoadmapData {
  career: string;
  year: string;
  skills: string;
  studyHours: number;
  requiredSkills: string[];
  toolsToLearn: string[];
  recommendedProjects: string[];
  internshipStrategy: string[];
  monthlyPlan: {
    threeMonth: string[];
    sixMonth: string[];
    twelveMonth: string[];
  };
  salaryRange: string;
}

interface CareerTemplate {
  requiredSkills: string[];
  toolsToLearn: string[];
  recommendedProjects: string[];
  internshipStrategy: string[];
  monthlyPlan: {
    threeMonth: string[];
    sixMonth: string[];
    twelveMonth: string[];
  };
  salaryRange: string;
}

const categoryTemplates: Record<string, CareerTemplate> = {
  'Technology & Software': {
    requiredSkills: ['Programming', 'Data Structures', 'Algorithms', 'Version Control', 'Problem Solving', 'Software Design'],
    toolsToLearn: ['Git/GitHub', 'VS Code', 'Docker', 'CI/CD Tools', 'Testing Frameworks', 'Cloud Platforms'],
    recommendedProjects: [
      'Build a full-featured web application',
      'Contribute to open-source projects',
      'Create a portfolio website',
      'Develop a mobile or desktop application'
    ],
    internshipStrategy: [
      'Build a strong GitHub portfolio with 5+ projects',
      'Contribute to open-source projects',
      'Network with developers on LinkedIn and Twitter',
      'Participate in hackathons and coding competitions'
    ],
    monthlyPlan: {
      threeMonth: ['Master programming fundamentals', 'Learn data structures and algorithms', 'Build 2 projects', 'Start competitive programming'],
      sixMonth: ['Advanced programming concepts', 'System design basics', 'Build 2 more projects', 'Start applying for internships'],
      twelveMonth: ['Specialize in chosen domain', 'Complete portfolio', 'Interview preparation', 'Secure internship/job']
    },
    salaryRange: '₹4-8 LPA (Entry Level) | ₹10-25 LPA (3+ years)'
  },
  'Data Science & AI': {
    requiredSkills: ['Python/R', 'Statistics', 'Machine Learning', 'Data Analysis', 'SQL', 'Mathematics'],
    toolsToLearn: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow/PyTorch', 'Jupyter', 'Tableau/Power BI'],
    recommendedProjects: [
      'Data analysis and visualization project',
      'Machine learning model deployment',
      'Kaggle competition participation',
      'End-to-end ML pipeline project'
    ],
    internshipStrategy: [
      'Build a portfolio with 4-5 data projects',
      'Participate in Kaggle competitions',
      'Publish blog posts or research papers',
      'Network with data professionals on LinkedIn'
    ],
    monthlyPlan: {
      threeMonth: ['Python and SQL mastery', 'Statistics fundamentals', 'Data analysis basics', '1-2 analysis projects'],
      sixMonth: ['Machine learning concepts', 'Advanced analytics', 'Kaggle competitions', 'Build ML projects'],
      twelveMonth: ['Deep learning or specialized domain', 'Complete portfolio', 'Interview prep', 'Apply for roles']
    },
    salaryRange: '₹5-10 LPA (Entry Level) | ₹12-30 LPA (3+ years)'
  },
  'Cybersecurity': {
    requiredSkills: ['Networking', 'Linux', 'Security Fundamentals', 'Ethical Hacking', 'Cryptography', 'Programming'],
    toolsToLearn: ['Kali Linux', 'Wireshark', 'Metasploit', 'Burp Suite', 'Nmap', 'Python'],
    recommendedProjects: [
      'Network security scanner',
      'Vulnerability assessment tool',
      'Security audit documentation',
      'Penetration testing lab setup'
    ],
    internshipStrategy: [
      'Get security certifications (CEH, CompTIA Security+)',
      'Participate in CTF competitions',
      'Join bug bounty programs',
      'Build security tools and document them'
    ],
    monthlyPlan: {
      threeMonth: ['Networking fundamentals', 'Linux basics', 'Security concepts', 'Python for security'],
      sixMonth: ['Ethical hacking techniques', 'Security tools mastery', 'CEH preparation', 'Security projects'],
      twelveMonth: ['Advanced penetration testing', 'Bug bounty hunting', 'Certifications', 'Apply for security roles']
    },
    salaryRange: '₹4-9 LPA (Entry Level) | ₹12-28 LPA (3+ years)'
  },
  'Design & Creative': {
    requiredSkills: ['Design Principles', 'Color Theory', 'Typography', 'User Research', 'Prototyping', 'Visual Communication'],
    toolsToLearn: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping Tools', 'Design Systems', 'Collaboration Tools'],
    recommendedProjects: [
      'Complete UI/UX case study',
      'Redesign popular app or website',
      'Build a design system',
      'Create a portfolio website'
    ],
    internshipStrategy: [
      'Build a strong portfolio with 5-7 projects',
      'Share work on Behance and Dribbble',
      'Network with designers on LinkedIn',
      'Participate in design challenges'
    ],
    monthlyPlan: {
      threeMonth: ['Design fundamentals', 'Tool mastery (Figma/Adobe)', 'UI design basics', '2-3 practice projects'],
      sixMonth: ['UX research methods', 'Advanced design techniques', 'Build case studies', 'Start freelancing'],
      twelveMonth: ['Specialized design skills', 'Complete portfolio', 'Interview preparation', 'Apply for roles']
    },
    salaryRange: '₹3-7 LPA (Entry Level) | ₹8-20 LPA (3+ years)'
  },
  'Product & Management': {
    requiredSkills: ['Product Strategy', 'User Research', 'Data Analysis', 'Communication', 'Leadership', 'Business Acumen'],
    toolsToLearn: ['Analytics Tools', 'Project Management Software', 'Wireframing Tools', 'SQL', 'Excel/Sheets', 'Presentation Tools'],
    recommendedProjects: [
      'Product case study analysis',
      'Market research project',
      'Product roadmap creation',
      'A/B testing analysis'
    ],
    internshipStrategy: [
      'Build product management portfolio',
      'Network with PMs on LinkedIn',
      'Take PM courses and certifications',
      'Gain cross-functional experience'
    ],
    monthlyPlan: {
      threeMonth: ['Product management fundamentals', 'Learn analytics tools', 'Study successful products', 'Case study practice'],
      sixMonth: ['Advanced PM concepts', 'User research methods', 'Data-driven decision making', 'Mock interviews'],
      twelveMonth: ['Specialized PM skills', 'Complete portfolio', 'Interview preparation', 'Apply for PM roles']
    },
    salaryRange: '₹6-12 LPA (Entry Level) | ₹15-35 LPA (3+ years)'
  },
  'Finance & Business': {
    requiredSkills: ['Financial Analysis', 'Accounting', 'Excel', 'Business Strategy', 'Quantitative Skills', 'Communication'],
    toolsToLearn: ['Excel (Advanced)', 'Financial Modeling Tools', 'Bloomberg Terminal', 'PowerPoint', 'SQL', 'Tableau'],
    recommendedProjects: [
      'Financial modeling project',
      'Investment analysis case study',
      'Business valuation project',
      'Market research analysis'
    ],
    internshipStrategy: [
      'Prepare for finance certifications (CFA, FRM)',
      'Build financial modeling skills',
      'Network with finance professionals',
      'Gain internship experience in finance firms'
    ],
    monthlyPlan: {
      threeMonth: ['Financial fundamentals', 'Excel mastery', 'Accounting basics', 'Financial modeling intro'],
      sixMonth: ['Advanced financial analysis', 'Valuation techniques', 'CFA Level 1 prep', 'Case study practice'],
      twelveMonth: ['Specialized finance skills', 'Complete certifications', 'Interview prep', 'Apply for roles']
    },
    salaryRange: '₹5-10 LPA (Entry Level) | ₹12-30 LPA (3+ years)'
  },
  'Government & Civil Services': {
    requiredSkills: ['General Knowledge', 'Current Affairs', 'Reasoning', 'Quantitative Aptitude', 'English', 'Subject Knowledge'],
    toolsToLearn: ['Online Test Platforms', 'Study Apps', 'Mock Test Software', 'Time Management Tools', 'Note-taking Apps'],
    recommendedProjects: [
      'Daily current affairs compilation',
      'Subject-wise question bank',
      'Mock test analysis tracker',
      'Study schedule planner'
    ],
    internshipStrategy: [
      'Choose target exams (UPSC/SSC/Banking/Railway)',
      'Join coaching or online courses',
      'Practice previous year papers daily',
      'Stay updated with exam notifications'
    ],
    monthlyPlan: {
      threeMonth: ['Identify target exams', 'Build study routine', 'Cover basic syllabus', 'Start current affairs'],
      sixMonth: ['Complete syllabus once', 'Solve previous papers', 'Take mock tests weekly', 'Improve weak areas'],
      twelveMonth: ['Intensive revision', 'Daily mock tests', 'Interview preparation', 'Apply for exams']
    },
    salaryRange: '₹3-7 LPA (SSC/Banking) | ₹7-15 LPA (UPSC/IAS)'
  }
};

const defaultTemplate: CareerTemplate = {
  requiredSkills: ['Domain Knowledge', 'Communication', 'Problem Solving', 'Analytical Thinking', 'Teamwork', 'Adaptability'],
  toolsToLearn: ['Industry-standard Tools', 'Productivity Software', 'Collaboration Platforms', 'Domain-specific Tools'],
  recommendedProjects: [
    'Build a portfolio showcasing your skills',
    'Complete relevant certifications',
    'Work on real-world projects',
    'Contribute to community projects'
  ],
  internshipStrategy: [
    'Build a strong portfolio',
    'Network with professionals in the field',
    'Gain relevant certifications',
    'Apply to companies aligned with your goals'
  ],
  monthlyPlan: {
    threeMonth: ['Learn fundamentals', 'Build foundational skills', 'Complete 1-2 projects', 'Start networking'],
    sixMonth: ['Advanced concepts', 'Specialized skills', 'Build more projects', 'Start applying for opportunities'],
    twelveMonth: ['Master your domain', 'Complete portfolio', 'Interview preparation', 'Secure position']
  },
  salaryRange: '₹3-8 LPA (Entry Level) | ₹8-20 LPA (3+ years)'
};

export function getRoadmapTemplate(
  career: string,
  year: string,
  skills: string,
  studyHours: number
): RoadmapData {
  const careerPath = careerPaths.find(p => p.value === career);
  const category = careerPath?.category || 'General';
  
  const template = categoryTemplates[category] || defaultTemplate;

  return {
    career,
    year,
    skills,
    studyHours,
    ...template
  };
}
