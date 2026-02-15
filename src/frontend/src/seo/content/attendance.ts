import type { ContentSection, FAQItem } from './sgpa';

export const attendanceContent: ContentSection[] = [
  {
    heading: 'What is Attendance Percentage and Why It Matters',
    content: `Attendance percentage is the ratio of classes attended to total classes conducted, expressed as a percentage. For college and engineering students in India, maintaining minimum attendance is mandatory for exam eligibility and degree completion.

Most Indian universities require 75% minimum attendance to appear for semester exams. Falling below this threshold can result in detention, loss of internal marks, or even being barred from exams. Our attendance calculator helps you track your attendance percentage in real-time and plan accordingly.

Beyond just meeting requirements, good attendance correlates with better academic performance. Regular class attendance helps you understand concepts better, stay updated with coursework, and build rapport with professors. It also demonstrates discipline and commitment, qualities valued by recruiters during placements.

Use our free attendance tracker to monitor your attendance across multiple subjects, calculate how many classes you can afford to miss, and determine how many classes you need to attend to reach your target percentage.`
  },
  {
    heading: 'How to Calculate Attendance Percentage',
    content: `Calculating attendance percentage is simple: Attendance % = (Classes Attended / Total Classes) × 100. However, tracking this across multiple subjects and calculating future scenarios can be complex, which is where our college attendance tracker becomes invaluable.

Step-by-step calculation:
1. Count the total number of classes conducted for a subject
2. Count how many classes you attended
3. Divide attended classes by total classes
4. Multiply by 100 to get percentage

For example, if 40 classes were conducted and you attended 32, your attendance is (32/40) × 100 = 80%. Our attendance percentage calculator automates this and also shows you:
- How many more classes you can miss while staying above 75%
- How many classes you need to attend to reach 75% if you're below
- Subject-wise and overall attendance tracking

This tool is essential for students who want to maintain the minimum required attendance while managing their time effectively. You can also use our <a href="/sgpa-calculator" class="text-primary hover:underline">SGPA calculator</a> to track your academic performance alongside attendance.`
  },
  {
    heading: 'Attendance Rules in Indian Universities',
    content: `Most Indian universities and engineering colleges follow strict attendance policies. The standard minimum requirement is 75% attendance, though some institutions may require 80% or allow relaxation to 70% under special circumstances.

Key attendance rules to know:
- 75% minimum attendance is mandatory for exam eligibility in most universities
- Medical leave may be considered for attendance calculation with proper documentation
- Some universities offer attendance condonation for valid reasons
- Shortage of attendance can lead to detention or loss of internal marks
- Attendance is often calculated subject-wise, not overall

Understanding these rules helps you plan your semester better. Our class attendance tool helps you stay on top of these requirements by providing real-time tracking and alerts when you're approaching the minimum threshold.

For students involved in extracurricular activities, internships, or facing health issues, knowing exactly how many classes you can miss without consequences is crucial. The attendance calculator gives you this clarity and helps you make informed decisions about class attendance.`
  },
  {
    heading: 'Tips to Maintain Good Attendance',
    content: `Maintaining good attendance requires planning and discipline. Here are practical tips for engineering students:

1. Set a personal target above the minimum (aim for 80-85% instead of just 75%)
2. Use our attendance calculator regularly to track your progress
3. Plan leaves strategically - avoid missing classes before or after holidays
4. Attend classes even when you're not fully prepared - presence matters
5. Build good relationships with classmates for notes when you must miss class
6. Prioritize attendance in subjects with strict professors or high credit hours
7. Keep buffer attendance for emergencies and unexpected situations

Remember that attendance is not just about meeting requirements - it's about maximizing your learning opportunities. Regular attendance helps you stay engaged with coursework, understand concepts better, and perform well in exams.

If you're struggling with attendance, identify the reasons and address them. Whether it's time management, health issues, or lack of interest, finding solutions early prevents bigger problems later. Combine good attendance with effective study habits and use our <a href="/cgpa-calculator" class="text-primary hover:underline">CGPA calculator</a> to track your overall academic progress.`
  },
  {
    heading: 'Frequently Asked Questions',
    content: ''
  }
];

export const attendanceFAQs: FAQItem[] = [
  {
    question: 'What happens if my attendance falls below 75%?',
    answer: 'If your attendance falls below 75%, you may face detention (not allowed to appear for exams), loss of internal marks, or need to apply for attendance condonation. Some universities may allow you to appear for exams with a fine or under special circumstances with proper documentation.'
  },
  {
    question: 'How many classes can I miss with 75% attendance requirement?',
    answer: 'With a 75% requirement, you can miss 25% of total classes. For example, if 100 classes are conducted, you can miss 25 classes. Use our attendance calculator to get exact numbers based on your current attendance and total classes.'
  },
  {
    question: 'Does medical leave count towards attendance?',
    answer: 'Medical leave policies vary by university. Most institutions consider medical leave with proper documentation (medical certificate) as attended classes or exclude those days from total class count. Check your university\'s specific policy on medical leave and attendance.'
  },
  {
    question: 'Is attendance calculated subject-wise or overall?',
    answer: 'Most universities calculate attendance subject-wise, meaning you need to maintain 75% in each subject individually, not just overall. Some subjects may have different requirements, especially practical/lab courses which often require higher attendance.'
  },
  {
    question: 'Can I get attendance condonation?',
    answer: 'Many universities offer attendance condonation for valid reasons like medical emergencies, family issues, or participation in university-approved events. You typically need to apply with supporting documents. The condonation process and criteria vary by institution.'
  },
  {
    question: 'How does attendance affect placements?',
    answer: 'While attendance itself may not directly affect placements, it reflects discipline and commitment. Some companies check attendance records during recruitment. More importantly, poor attendance often correlates with lower grades, which does impact placement eligibility.'
  }
];
