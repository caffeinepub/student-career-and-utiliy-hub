export interface ContentSection {
  heading: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const atsResumeContent: ContentSection[] = [
  {
    heading: 'What is an ATS-Friendly Resume?',
    content: `An ATS-friendly resume is a resume formatted to be easily read and parsed by Applicant Tracking Systems (ATS). These systems are used by most companies in India and worldwide to filter and rank job applications before they reach human recruiters. An ATS-optimized resume uses simple formatting, clear section headers, and relevant keywords to ensure your application passes through these automated filters.

For Indian students and freshers, creating an ATS-friendly resume is crucial because over 90% of large companies and many startups use ATS software to manage job applications. A beautifully designed resume with complex formatting, tables, or graphics might look impressive to humans but can confuse ATS systems, causing your application to be rejected before anyone sees it.

Our free ATS resume generator helps you create a clean, single-column, plain-text resume that ATS systems can easily parse while still being professional and comprehensive. This increases your chances of getting past the initial screening and landing interviews.`
  },
  {
    heading: 'Why ATS-Friendly Resumes Matter for Indian Students',
    content: `For engineering students and freshers in India, the job market is highly competitive. Companies like TCS, Infosys, Wipro, Accenture, and tech startups receive thousands of applications for each position. To manage this volume, they rely on ATS software to automatically screen resumes based on keywords, qualifications, and formatting.

If your resume isn't ATS-friendly, it might be rejected even if you're a perfect fit for the role. Common mistakes that cause ATS rejection include using tables, text boxes, headers/footers, images, unusual fonts, or complex formatting. Our tool eliminates these issues by generating a simple, text-based resume that focuses on content over design.

Studies show that ATS-friendly resumes have a 60-70% higher chance of reaching human recruiters compared to heavily formatted resumes. For freshers with limited experience, this can make the difference between getting an interview call and being overlooked.`
  },
  {
    heading: 'How to Use the ATS Resume Generator',
    content: `Our step-by-step ATS resume generator makes it easy to create a professional resume optimized for applicant tracking systems. Here's how to use it effectively:

Step 1: Contact Information - Enter your full name, email, phone number, and location. Add your LinkedIn and GitHub profiles if you have them, as these are valuable for tech roles.

Step 2: Professional Summary - Write a brief 2-3 sentence summary highlighting your key strengths, skills, and career goals. Keep it relevant to the jobs you're applying for.

Step 3: Skills - List your technical skills (programming languages, tools, frameworks) and soft skills (teamwork, communication, problem-solving). Use keywords from job descriptions.

Step 4: Experience - Add internships, part-time jobs, or relevant work experience. Use action verbs and quantify achievements where possible (e.g., "Improved website performance by 40%").

Step 5: Education - List your degree, institution, year, and CGPA. Start with your most recent education.

Step 6: Certifications - Add any relevant certifications, online courses, or training programs you've completed.

Step 7: Projects - Showcase your academic or personal projects. Describe what you built, technologies used, and the impact.

Step 8: Keywords & Preview - Add relevant keywords from job descriptions, then preview, copy, or download your ATS-friendly resume as a plain text file.`
  },
  {
    heading: 'ATS Resume Best Practices for Freshers',
    content: `To maximize your chances of passing ATS screening and impressing recruiters, follow these best practices when creating your resume:

Use Standard Section Headers: Stick to common headers like "EXPERIENCE," "EDUCATION," "SKILLS," and "PROJECTS." Avoid creative headers like "My Journey" or "What I've Done."

Include Relevant Keywords: Read job descriptions carefully and include relevant technical skills, tools, and industry terms in your resume. Don't keyword stuff, but naturally incorporate terms that match your experience.

Use Simple Formatting: Avoid tables, columns, text boxes, headers/footers, and graphics. Use a single-column layout with clear section breaks.

Choose Standard Fonts: While our tool generates plain text, if you're formatting elsewhere, use standard fonts like Arial, Calibri, or Times New Roman.

Save in the Right Format: Plain text (.txt) is the most ATS-friendly format. PDF is generally safe for most modern ATS systems, but .txt ensures maximum compatibility.

Quantify Achievements: Use numbers and metrics wherever possible (e.g., "Led team of 5 students," "Improved efficiency by 30%").

Tailor for Each Job: Customize your resume for each application by emphasizing relevant skills and experiences that match the job description.

Proofread Carefully: ATS systems can be confused by typos and inconsistent formatting. Review your resume multiple times before submitting.`
  },
  {
    heading: 'Common ATS Resume Mistakes to Avoid',
    content: `Many Indian students and freshers make these common mistakes that cause their resumes to be rejected by ATS systems:

Using Complex Templates: Fancy resume templates with multiple columns, graphics, or unusual layouts confuse ATS parsers. Stick to simple, single-column formats.

Putting Important Information in Headers/Footers: ATS systems often ignore headers and footers, so never put your contact information or key details there.

Using Tables and Text Boxes: These formatting elements can scramble your content when parsed by ATS software.

Including Images or Graphics: Photos, logos, charts, and graphics cannot be read by ATS and may cause parsing errors.

Using Uncommon Section Headers: Creative headers like "My Superpowers" instead of "SKILLS" can prevent ATS from categorizing your information correctly.

Submitting in the Wrong Format: Some ATS systems struggle with certain file formats. Plain text (.txt) is universally compatible.

Keyword Stuffing: While keywords are important, stuffing your resume with irrelevant keywords or hiding white text can get you flagged or rejected.

Inconsistent Formatting: Use consistent date formats, bullet points, and spacing throughout your resume.

Our ATS resume generator automatically avoids all these mistakes, ensuring your resume is optimized for both ATS systems and human recruiters.`
  },
  {
    heading: 'Frequently Asked Questions',
    content: ''
  }
];

export const atsResumeFAQs: FAQItem[] = [
  {
    question: 'What is an ATS and why do I need an ATS-friendly resume?',
    answer: 'ATS (Applicant Tracking System) is software used by companies to automatically screen and rank job applications. You need an ATS-friendly resume because over 90% of large companies use ATS to filter applications before human recruiters see them. An ATS-optimized resume ensures your application passes through these automated filters.'
  },
  {
    question: 'Can I use this resume for all job applications?',
    answer: 'While this tool creates a solid ATS-friendly foundation, you should customize your resume for each job application. Tailor your skills, experience descriptions, and keywords to match the specific job description. This increases your chances of ranking higher in ATS screening.'
  },
  {
    question: 'Should I use PDF or TXT format for my resume?',
    answer: 'Plain text (.txt) format is the most ATS-friendly and universally compatible. However, most modern ATS systems can also parse PDF files correctly. Our tool generates .txt format to ensure maximum compatibility. You can always convert it to PDF later if needed, but keep the simple formatting.'
  },
  {
    question: 'How do I add keywords to my resume without keyword stuffing?',
    answer: 'Read the job description carefully and identify key technical skills, tools, and qualifications mentioned. Naturally incorporate these keywords into your skills section, experience descriptions, and project details where they genuinely apply to your background. Focus on relevance over quantity.'
  },
  {
    question: 'What if I don\'t have much work experience as a fresher?',
    answer: 'Focus on your academic projects, internships, volunteer work, and relevant coursework. Describe your projects in detail, highlighting the technologies used and problems solved. Include certifications, online courses, and any freelance or personal projects that demonstrate your skills.'
  },
  {
    question: 'How long should my resume be?',
    answer: 'For freshers and students in India, a one-page resume is ideal. If you have significant internship experience or multiple relevant projects, you can extend to two pages, but keep it concise. Focus on quality over quantity and include only relevant information.'
  },
  {
    question: 'Can I include my photo in an ATS-friendly resume?',
    answer: 'No, avoid including photos in ATS-friendly resumes. ATS systems cannot parse images and photos may cause formatting issues. Additionally, many companies prefer resumes without photos to ensure unbiased screening. Focus on your skills and experience instead.'
  },
  {
    question: 'How often should I update my resume?',
    answer: 'Update your resume whenever you complete a new project, earn a certification, finish an internship, or acquire a new skill. For students, updating your resume every semester is a good practice. Always review and tailor your resume before each job application.'
  }
];
