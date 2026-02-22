export interface CareerPath {
  value: string;
  label: string;
  category: string;
  description?: string;
  salaryRange?: string;
  keywords?: string[];
}

// Category metadata for filtering
export const careerCategories = [
  'Technology & Software',
  'Data Science & AI',
  'Cybersecurity',
  'Design & Creative',
  'Product & Management',
  'Finance & Business',
  'Government & Civil Services'
];

// Base career paths data
const baseCareerPaths: Omit<CareerPath, 'keywords' | 'description' | 'salaryRange'>[] = [
  // Technology & Software Development (50 paths)
  { value: 'Frontend Developer', label: 'Frontend Developer', category: 'Technology & Software' },
  { value: 'Backend Developer', label: 'Backend Developer', category: 'Technology & Software' },
  { value: 'Full Stack Developer', label: 'Full Stack Developer', category: 'Technology & Software' },
  { value: 'Mobile App Developer', label: 'Mobile App Developer', category: 'Technology & Software' },
  { value: 'iOS Developer', label: 'iOS Developer', category: 'Technology & Software' },
  { value: 'Android Developer', label: 'Android Developer', category: 'Technology & Software' },
  { value: 'React Native Developer', label: 'React Native Developer', category: 'Technology & Software' },
  { value: 'Flutter Developer', label: 'Flutter Developer', category: 'Technology & Software' },
  { value: 'DevOps Engineer', label: 'DevOps Engineer', category: 'Technology & Software' },
  { value: 'Cloud Engineer', label: 'Cloud Engineer', category: 'Technology & Software' },
  { value: 'AWS Solutions Architect', label: 'AWS Solutions Architect', category: 'Technology & Software' },
  { value: 'Azure Cloud Engineer', label: 'Azure Cloud Engineer', category: 'Technology & Software' },
  { value: 'Google Cloud Engineer', label: 'Google Cloud Engineer', category: 'Technology & Software' },
  { value: 'Site Reliability Engineer', label: 'Site Reliability Engineer', category: 'Technology & Software' },
  { value: 'Software Architect', label: 'Software Architect', category: 'Technology & Software' },
  { value: 'Technical Lead', label: 'Technical Lead', category: 'Technology & Software' },
  { value: 'Engineering Manager', label: 'Engineering Manager', category: 'Technology & Software' },
  { value: 'QA Engineer', label: 'QA Engineer', category: 'Technology & Software' },
  { value: 'Test Automation Engineer', label: 'Test Automation Engineer', category: 'Technology & Software' },
  { value: 'Performance Engineer', label: 'Performance Engineer', category: 'Technology & Software' },
  { value: 'Game Developer', label: 'Game Developer', category: 'Technology & Software' },
  { value: 'Unity Developer', label: 'Unity Developer', category: 'Technology & Software' },
  { value: 'Unreal Engine Developer', label: 'Unreal Engine Developer', category: 'Technology & Software' },
  { value: 'Embedded Systems Engineer', label: 'Embedded Systems Engineer', category: 'Technology & Software' },
  { value: 'IoT Developer', label: 'IoT Developer', category: 'Technology & Software' },
  { value: 'Firmware Engineer', label: 'Firmware Engineer', category: 'Technology & Software' },
  { value: 'Systems Engineer', label: 'Systems Engineer', category: 'Technology & Software' },
  { value: 'Database Administrator', label: 'Database Administrator', category: 'Technology & Software' },
  { value: 'Database Developer', label: 'Database Developer', category: 'Technology & Software' },
  { value: 'API Developer', label: 'API Developer', category: 'Technology & Software' },
  { value: 'Microservices Architect', label: 'Microservices Architect', category: 'Technology & Software' },
  { value: 'Blockchain Developer', label: 'Blockchain Developer', category: 'Technology & Software' },
  { value: 'Smart Contract Developer', label: 'Smart Contract Developer', category: 'Technology & Software' },
  { value: 'Web3 Developer', label: 'Web3 Developer', category: 'Technology & Software' },
  { value: 'Solidity Developer', label: 'Solidity Developer', category: 'Technology & Software' },
  { value: 'Rust Developer', label: 'Rust Developer', category: 'Technology & Software' },
  { value: 'Go Developer', label: 'Go Developer', category: 'Technology & Software' },
  { value: 'Python Developer', label: 'Python Developer', category: 'Technology & Software' },
  { value: 'Java Developer', label: 'Java Developer', category: 'Technology & Software' },
  { value: 'C++ Developer', label: 'C++ Developer', category: 'Technology & Software' },
  { value: '.NET Developer', label: '.NET Developer', category: 'Technology & Software' },
  { value: 'PHP Developer', label: 'PHP Developer', category: 'Technology & Software' },
  { value: 'Ruby on Rails Developer', label: 'Ruby on Rails Developer', category: 'Technology & Software' },
  { value: 'Django Developer', label: 'Django Developer', category: 'Technology & Software' },
  { value: 'Node.js Developer', label: 'Node.js Developer', category: 'Technology & Software' },
  { value: 'WordPress Developer', label: 'WordPress Developer', category: 'Technology & Software' },
  { value: 'Shopify Developer', label: 'Shopify Developer', category: 'Technology & Software' },
  { value: 'Salesforce Developer', label: 'Salesforce Developer', category: 'Technology & Software' },
  { value: 'SAP Developer', label: 'SAP Developer', category: 'Technology & Software' },
  { value: 'Oracle Developer', label: 'Oracle Developer', category: 'Technology & Software' },

  // Data Science & AI (40 paths)
  { value: 'Data Scientist', label: 'Data Scientist', category: 'Data Science & AI' },
  { value: 'Data Analyst', label: 'Data Analyst', category: 'Data Science & AI' },
  { value: 'Business Analyst', label: 'Business Analyst', category: 'Data Science & AI' },
  { value: 'Data Engineer', label: 'Data Engineer', category: 'Data Science & AI' },
  { value: 'Machine Learning Engineer', label: 'Machine Learning Engineer', category: 'Data Science & AI' },
  { value: 'AI Engineer', label: 'AI Engineer', category: 'Data Science & AI' },
  { value: 'Deep Learning Engineer', label: 'Deep Learning Engineer', category: 'Data Science & AI' },
  { value: 'NLP Engineer', label: 'NLP Engineer', category: 'Data Science & AI' },
  { value: 'Computer Vision Engineer', label: 'Computer Vision Engineer', category: 'Data Science & AI' },
  { value: 'MLOps Engineer', label: 'MLOps Engineer', category: 'Data Science & AI' },
  { value: 'AI Research Scientist', label: 'AI Research Scientist', category: 'Data Science & AI' },
  { value: 'Research Engineer', label: 'Research Engineer', category: 'Data Science & AI' },
  { value: 'Quantitative Analyst', label: 'Quantitative Analyst', category: 'Data Science & AI' },
  { value: 'Statistical Analyst', label: 'Statistical Analyst', category: 'Data Science & AI' },
  { value: 'Business Intelligence Analyst', label: 'Business Intelligence Analyst', category: 'Data Science & AI' },
  { value: 'Analytics Consultant', label: 'Analytics Consultant', category: 'Data Science & AI' },
  { value: 'Big Data Engineer', label: 'Big Data Engineer', category: 'Data Science & AI' },
  { value: 'Hadoop Developer', label: 'Hadoop Developer', category: 'Data Science & AI' },
  { value: 'Spark Developer', label: 'Spark Developer', category: 'Data Science & AI' },
  { value: 'ETL Developer', label: 'ETL Developer', category: 'Data Science & AI' },
  { value: 'Data Warehouse Engineer', label: 'Data Warehouse Engineer', category: 'Data Science & AI' },
  { value: 'Data Architect', label: 'Data Architect', category: 'Data Science & AI' },
  { value: 'Analytics Engineer', label: 'Analytics Engineer', category: 'Data Science & AI' },
  { value: 'Predictive Modeler', label: 'Predictive Modeler', category: 'Data Science & AI' },
  { value: 'AI Product Manager', label: 'AI Product Manager', category: 'Data Science & AI' },
  { value: 'Data Science Manager', label: 'Data Science Manager', category: 'Data Science & AI' },
  { value: 'Bioinformatics Analyst', label: 'Bioinformatics Analyst', category: 'Data Science & AI' },
  { value: 'Genomics Data Scientist', label: 'Genomics Data Scientist', category: 'Data Science & AI' },
  { value: 'Financial Data Analyst', label: 'Financial Data Analyst', category: 'Data Science & AI' },
  { value: 'Marketing Analytics Specialist', label: 'Marketing Analytics Specialist', category: 'Data Science & AI' },
  { value: 'Customer Analytics Specialist', label: 'Customer Analytics Specialist', category: 'Data Science & AI' },
  { value: 'Operations Analyst', label: 'Operations Analyst', category: 'Data Science & AI' },
  { value: 'Supply Chain Analyst', label: 'Supply Chain Analyst', category: 'Data Science & AI' },
  { value: 'Risk Analyst', label: 'Risk Analyst', category: 'Data Science & AI' },
  { value: 'Fraud Analyst', label: 'Fraud Analyst', category: 'Data Science & AI' },
  { value: 'Credit Risk Analyst', label: 'Credit Risk Analyst', category: 'Data Science & AI' },
  { value: 'Pricing Analyst', label: 'Pricing Analyst', category: 'Data Science & AI' },
  { value: 'Revenue Analyst', label: 'Revenue Analyst', category: 'Data Science & AI' },
  { value: 'Data Visualization Specialist', label: 'Data Visualization Specialist', category: 'Data Science & AI' },
  { value: 'Tableau Developer', label: 'Tableau Developer', category: 'Data Science & AI' },

  // Cybersecurity (25 paths)
  { value: 'Cybersecurity Analyst', label: 'Cybersecurity Analyst', category: 'Cybersecurity' },
  { value: 'Security Engineer', label: 'Security Engineer', category: 'Cybersecurity' },
  { value: 'Penetration Tester', label: 'Penetration Tester', category: 'Cybersecurity' },
  { value: 'Ethical Hacker', label: 'Ethical Hacker', category: 'Cybersecurity' },
  { value: 'Security Architect', label: 'Security Architect', category: 'Cybersecurity' },
  { value: 'Information Security Manager', label: 'Information Security Manager', category: 'Cybersecurity' },
  { value: 'CISO (Chief Information Security Officer)', label: 'CISO (Chief Information Security Officer)', category: 'Cybersecurity' },
  { value: 'Security Consultant', label: 'Security Consultant', category: 'Cybersecurity' },
  { value: 'Incident Response Analyst', label: 'Incident Response Analyst', category: 'Cybersecurity' },
  { value: 'SOC Analyst', label: 'SOC Analyst', category: 'Cybersecurity' },
  { value: 'Threat Intelligence Analyst', label: 'Threat Intelligence Analyst', category: 'Cybersecurity' },
  { value: 'Malware Analyst', label: 'Malware Analyst', category: 'Cybersecurity' },
  { value: 'Forensics Analyst', label: 'Forensics Analyst', category: 'Cybersecurity' },
  { value: 'Network Security Engineer', label: 'Network Security Engineer', category: 'Cybersecurity' },
  { value: 'Application Security Engineer', label: 'Application Security Engineer', category: 'Cybersecurity' },
  { value: 'Cloud Security Engineer', label: 'Cloud Security Engineer', category: 'Cybersecurity' },
  { value: 'Cryptographer', label: 'Cryptographer', category: 'Cybersecurity' },
  { value: 'Security Auditor', label: 'Security Auditor', category: 'Cybersecurity' },
  { value: 'Compliance Analyst', label: 'Compliance Analyst', category: 'Cybersecurity' },
  { value: 'GRC Analyst', label: 'GRC Analyst', category: 'Cybersecurity' },
  { value: 'Vulnerability Analyst', label: 'Vulnerability Analyst', category: 'Cybersecurity' },
  { value: 'Security Operations Manager', label: 'Security Operations Manager', category: 'Cybersecurity' },
  { value: 'Identity and Access Management Specialist', label: 'Identity and Access Management Specialist', category: 'Cybersecurity' },
  { value: 'Security Awareness Trainer', label: 'Security Awareness Trainer', category: 'Cybersecurity' },
  { value: 'Bug Bounty Hunter', label: 'Bug Bounty Hunter', category: 'Cybersecurity' },

  // Design & Creative (30 paths)
  { value: 'UI Designer', label: 'UI Designer', category: 'Design & Creative' },
  { value: 'UX Designer', label: 'UX Designer', category: 'Design & Creative' },
  { value: 'UI/UX Designer', label: 'UI/UX Designer', category: 'Design & Creative' },
  { value: 'Product Designer', label: 'Product Designer', category: 'Design & Creative' },
  { value: 'Graphic Designer', label: 'Graphic Designer', category: 'Design & Creative' },
  { value: 'Visual Designer', label: 'Visual Designer', category: 'Design & Creative' },
  { value: 'Web Designer', label: 'Web Designer', category: 'Design & Creative' },
  { value: 'Motion Graphics Designer', label: 'Motion Graphics Designer', category: 'Design & Creative' },
  { value: 'Animation Designer', label: 'Animation Designer', category: 'Design & Creative' },
  { value: '3D Designer', label: '3D Designer', category: 'Design & Creative' },
  { value: 'Interaction Designer', label: 'Interaction Designer', category: 'Design & Creative' },
  { value: 'UX Researcher', label: 'UX Researcher', category: 'Design & Creative' },
  { value: 'Design System Designer', label: 'Design System Designer', category: 'Design & Creative' },
  { value: 'Brand Designer', label: 'Brand Designer', category: 'Design & Creative' },
  { value: 'Illustrator', label: 'Illustrator', category: 'Design & Creative' },
  { value: 'Creative Director', label: 'Creative Director', category: 'Design & Creative' },
  { value: 'Art Director', label: 'Art Director', category: 'Design & Creative' },
  { value: 'Video Editor', label: 'Video Editor', category: 'Design & Creative' },
  { value: 'Content Creator', label: 'Content Creator', category: 'Design & Creative' },
  { value: 'Social Media Designer', label: 'Social Media Designer', category: 'Design & Creative' },
  { value: 'Print Designer', label: 'Print Designer', category: 'Design & Creative' },
  { value: 'Packaging Designer', label: 'Packaging Designer', category: 'Design & Creative' },
  { value: 'Typography Designer', label: 'Typography Designer', category: 'Design & Creative' },
  { value: 'Game Designer', label: 'Game Designer', category: 'Design & Creative' },
  { value: 'Level Designer', label: 'Level Designer', category: 'Design & Creative' },
  { value: 'Character Designer', label: 'Character Designer', category: 'Design & Creative' },
  { value: 'Environment Artist', label: 'Environment Artist', category: 'Design & Creative' },
  { value: 'Concept Artist', label: 'Concept Artist', category: 'Design & Creative' },
  { value: 'VFX Artist', label: 'VFX Artist', category: 'Design & Creative' },
  { value: 'Sound Designer', label: 'Sound Designer', category: 'Design & Creative' },

  // Product & Management (25 paths)
  { value: 'Product Manager', label: 'Product Manager', category: 'Product & Management' },
  { value: 'Technical Product Manager', label: 'Technical Product Manager', category: 'Product & Management' },
  { value: 'Senior Product Manager', label: 'Senior Product Manager', category: 'Product & Management' },
  { value: 'Product Owner', label: 'Product Owner', category: 'Product & Management' },
  { value: 'Program Manager', label: 'Program Manager', category: 'Product & Management' },
  { value: 'Project Manager', label: 'Project Manager', category: 'Product & Management' },
  { value: 'Scrum Master', label: 'Scrum Master', category: 'Product & Management' },
  { value: 'Agile Coach', label: 'Agile Coach', category: 'Product & Management' },
  { value: 'Delivery Manager', label: 'Delivery Manager', category: 'Product & Management' },
  { value: 'Operations Manager', label: 'Operations Manager', category: 'Product & Management' },
  { value: 'Strategy Consultant', label: 'Strategy Consultant', category: 'Product & Management' },
  { value: 'Management Consultant', label: 'Management Consultant', category: 'Product & Management' },
  { value: 'Business Development Manager', label: 'Business Development Manager', category: 'Product & Management' },
  { value: 'Growth Manager', label: 'Growth Manager', category: 'Product & Management' },
  { value: 'Product Marketing Manager', label: 'Product Marketing Manager', category: 'Product & Management' },
  { value: 'Marketing Manager', label: 'Marketing Manager', category: 'Product & Management' },
  { value: 'Digital Marketing Manager', label: 'Digital Marketing Manager', category: 'Product & Management' },
  { value: 'Content Marketing Manager', label: 'Content Marketing Manager', category: 'Product & Management' },
  { value: 'SEO Specialist', label: 'SEO Specialist', category: 'Product & Management' },
  { value: 'SEM Specialist', label: 'SEM Specialist', category: 'Product & Management' },
  { value: 'Social Media Manager', label: 'Social Media Manager', category: 'Product & Management' },
  { value: 'Community Manager', label: 'Community Manager', category: 'Product & Management' },
  { value: 'Brand Manager', label: 'Brand Manager', category: 'Product & Management' },
  { value: 'Customer Success Manager', label: 'Customer Success Manager', category: 'Product & Management' },
  { value: 'Account Manager', label: 'Account Manager', category: 'Product & Management' },

  // Finance & Business (20 paths)
  { value: 'Financial Analyst', label: 'Financial Analyst', category: 'Finance & Business' },
  { value: 'Investment Banker', label: 'Investment Banker', category: 'Finance & Business' },
  { value: 'Equity Research Analyst', label: 'Equity Research Analyst', category: 'Finance & Business' },
  { value: 'Portfolio Manager', label: 'Portfolio Manager', category: 'Finance & Business' },
  { value: 'Wealth Manager', label: 'Wealth Manager', category: 'Finance & Business' },
  { value: 'Financial Planner', label: 'Financial Planner', category: 'Finance & Business' },
  { value: 'Chartered Accountant', label: 'Chartered Accountant', category: 'Finance & Business' },
  { value: 'CPA (Certified Public Accountant)', label: 'CPA (Certified Public Accountant)', category: 'Finance & Business' },
  { value: 'Tax Consultant', label: 'Tax Consultant', category: 'Finance & Business' },
  { value: 'Auditor', label: 'Auditor', category: 'Finance & Business' },
  { value: 'Corporate Finance Analyst', label: 'Corporate Finance Analyst', category: 'Finance & Business' },
  { value: 'Treasury Analyst', label: 'Treasury Analyst', category: 'Finance & Business' },
  { value: 'Actuary', label: 'Actuary', category: 'Finance & Business' },
  { value: 'Insurance Underwriter', label: 'Insurance Underwriter', category: 'Finance & Business' },
  { value: 'Venture Capitalist', label: 'Venture Capitalist', category: 'Finance & Business' },
  { value: 'Private Equity Analyst', label: 'Private Equity Analyst', category: 'Finance & Business' },
  { value: 'Mergers & Acquisitions Analyst', label: 'Mergers & Acquisitions Analyst', category: 'Finance & Business' },
  { value: 'MBA Graduate', label: 'MBA Graduate', category: 'Finance & Business' },
  { value: 'Entrepreneur', label: 'Entrepreneur', category: 'Finance & Business' },
  { value: 'Startup Founder', label: 'Startup Founder', category: 'Finance & Business' },

  // Government & Civil Services (15 paths)
  { value: 'IAS Officer', label: 'IAS Officer', category: 'Government & Civil Services' },
  { value: 'IPS Officer', label: 'IPS Officer', category: 'Government & Civil Services' },
  { value: 'IFS Officer', label: 'IFS Officer', category: 'Government & Civil Services' },
  { value: 'IRS Officer', label: 'IRS Officer', category: 'Government & Civil Services' },
  { value: 'SSC CGL', label: 'SSC CGL', category: 'Government & Civil Services' },
  { value: 'SSC CHSL', label: 'SSC CHSL', category: 'Government & Civil Services' },
  { value: 'Bank PO', label: 'Bank PO', category: 'Government & Civil Services' },
  { value: 'Bank Clerk', label: 'Bank Clerk', category: 'Government & Civil Services' },
  { value: 'RBI Grade B', label: 'RBI Grade B', category: 'Government & Civil Services' },
  { value: 'NABARD Officer', label: 'NABARD Officer', category: 'Government & Civil Services' },
  { value: 'Railway Jobs', label: 'Railway Jobs', category: 'Government & Civil Services' },
  { value: 'Defence Services', label: 'Defence Services', category: 'Government & Civil Services' },
  { value: 'State PSC', label: 'State PSC', category: 'Government & Civil Services' },
  { value: 'Teaching Jobs', label: 'Teaching Jobs', category: 'Government & Civil Services' },
  { value: 'Police Services', label: 'Police Services', category: 'Government & Civil Services' },
];

// Category-based keyword defaults
const categoryKeywords: Record<string, string[]> = {
  'Technology & Software': ['programming', 'coding', 'software', 'development', 'web', 'app', 'javascript', 'python', 'java', 'react', 'node', 'database', 'api', 'cloud', 'devops', 'git'],
  'Data Science & AI': ['data', 'analytics', 'machine learning', 'ai', 'python', 'sql', 'statistics', 'ml', 'deep learning', 'nlp', 'tensorflow', 'pandas', 'numpy', 'visualization', 'tableau'],
  'Cybersecurity': ['security', 'hacking', 'ethical hacking', 'penetration testing', 'network', 'linux', 'cryptography', 'firewall', 'vulnerability', 'malware', 'forensics'],
  'Design & Creative': ['design', 'ui', 'ux', 'figma', 'adobe', 'photoshop', 'illustrator', 'creative', 'graphics', 'visual', 'branding', 'typography', 'animation'],
  'Product & Management': ['product', 'management', 'strategy', 'agile', 'scrum', 'marketing', 'business', 'analytics', 'growth', 'pm', 'consulting'],
  'Finance & Business': ['finance', 'accounting', 'investment', 'banking', 'excel', 'financial analysis', 'cfa', 'mba', 'business', 'economics', 'trading'],
  'Government & Civil Services': ['upsc', 'ssc', 'banking', 'railway', 'government', 'civil services', 'ias', 'ips', 'exam', 'aptitude', 'gk', 'current affairs']
};

// Salary ranges by category
const categorySalaryRanges: Record<string, string> = {
  'Technology & Software': '₹6-15 LPA',
  'Data Science & AI': '₹7-18 LPA',
  'Cybersecurity': '₹6-16 LPA',
  'Design & Creative': '₹4-12 LPA',
  'Product & Management': '₹8-20 LPA',
  'Finance & Business': '₹6-15 LPA',
  'Government & Civil Services': '₹4-10 LPA'
};

// Enrich career paths with keywords, descriptions, and salary ranges
export const careerPaths: CareerPath[] = baseCareerPaths.map(path => {
  const categoryKeys = categoryKeywords[path.category] || [];
  const labelWords = path.label.toLowerCase().split(/[\s/]+/);
  
  // Combine category keywords with label-specific keywords
  const keywords = [...new Set([...categoryKeys, ...labelWords])];
  
  return {
    ...path,
    keywords,
    salaryRange: categorySalaryRanges[path.category] || '₹5-12 LPA',
    description: `Build complete ${path.label.toLowerCase()} skills`
  };
});

// Get category counts
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  careerPaths.forEach(path => {
    counts[path.category] = (counts[path.category] || 0) + 1;
  });
  return counts;
}
