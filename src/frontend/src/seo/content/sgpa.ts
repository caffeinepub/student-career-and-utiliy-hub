export interface ContentSection {
  heading: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const sgpaContent: ContentSection[] = [
  {
    heading: 'What is SGPA?',
    content: `SGPA stands for Semester Grade Point Average. It is a grading system used by most Indian universities and colleges to evaluate a student's academic performance in a particular semester. The SGPA calculator helps engineering students quickly compute their semester grades based on the credit-based grading system.

Unlike traditional percentage-based marking, SGPA provides a standardized way to measure academic achievement across different subjects with varying credit hours. Each course is assigned a certain number of credits based on its importance and workload, and your grade in that course is multiplied by these credits to calculate your overall semester performance.

For engineering students in India, maintaining a good SGPA is crucial for placements, higher education opportunities, and scholarship eligibility. Most universities follow a 10-point scale where grades range from O (Outstanding) to F (Fail), with corresponding grade points from 10 to 0.`
  },
  {
    heading: 'SGPA Formula and Calculation Method',
    content: `The SGPA formula is straightforward: SGPA = (Sum of Credit Points) / (Total Credits). Credit points for each subject are calculated by multiplying the grade point obtained by the number of credits for that subject.

Here's the step-by-step calculation process:
1. List all subjects you studied in the semester
2. Note the grade point obtained in each subject (typically on a 10-point scale)
3. Note the credit hours assigned to each subject
4. Multiply grade point by credits for each subject to get credit points
5. Add all credit points together
6. Divide the sum by total credits to get your SGPA

For example, if you scored 9 grade points in a 4-credit subject, your credit points would be 36. Repeat this for all subjects, sum them up, and divide by total credits to get your semester GPA.`
  },
  {
    heading: 'How to Calculate SGPA Step by Step',
    content: `Using our free SGPA calculator for engineering students is simple and saves time. However, understanding the manual calculation helps you verify results and plan your academic strategy.

Step 1: Gather your semester grade sheet with all subject grades and credits
Step 2: Convert letter grades to grade points (O=10, A+=9, A=8, B+=7, B=6, C=5, P=4, F=0)
Step 3: For each subject, multiply grade point by credit hours
Step 4: Sum all the credit points from step 3
Step 5: Sum all the credit hours for the semester
Step 6: Divide total credit points by total credits

Our SGPA calculator automates this entire process. Simply enter your grades and credits, and get instant results. The tool also helps you understand how improving specific subject grades can boost your overall SGPA, making it an essential academic performance tracker for students.`
  },
  {
    heading: 'SGPA to Percentage Conversion',
    content: `Converting SGPA to percentage is important for job applications, competitive exams, and higher education admissions where percentage scores are required. Different universities use different conversion formulas, but the most common method is: Percentage = (SGPA - 0.75) × 10.

Some universities use simpler formulas like Percentage = SGPA × 9.5 or Percentage = SGPA × 10. Always check your university's official conversion formula for accurate results. Our SGPA to percentage converter supports multiple conversion methods to match your institution's requirements.

Understanding this conversion helps you present your academic credentials effectively. For instance, an SGPA of 8.5 typically converts to approximately 77.5% to 85% depending on the formula used. This conversion is particularly useful when applying for internships, as many companies in India still prefer percentage-based eligibility criteria.

You can also use our <a href="/cgpa-calculator" class="text-primary hover:underline">CGPA calculator</a> to track your cumulative performance across all semesters and plan your academic journey effectively.`
  },
  {
    heading: 'Frequently Asked Questions',
    content: ''
  }
];

export const sgpaFAQs: FAQItem[] = [
  {
    question: 'What is a good SGPA for engineering students?',
    answer: 'An SGPA above 8.0 is generally considered good for engineering students in India. For top placements and higher education opportunities, aim for 8.5 or above. However, anything above 7.0 is acceptable for most job opportunities.'
  },
  {
    question: 'How is SGPA different from CGPA?',
    answer: 'SGPA measures your performance in a single semester, while CGPA (Cumulative Grade Point Average) represents your overall performance across all semesters. CGPA is calculated by taking the weighted average of all semester SGPAs.'
  },
  {
    question: 'Can I calculate SGPA for multiple semesters?',
    answer: 'Yes, you can calculate SGPA for each semester separately. To find your overall performance across semesters, you need to calculate CGPA, which considers all semester results together.'
  },
  {
    question: 'What if I have backlogs or failed subjects?',
    answer: 'Failed subjects (grade F with 0 points) are included in SGPA calculation, which will lower your semester average. You will need to clear these backlogs and the improved grade will be considered in subsequent SGPA calculations.'
  },
  {
    question: 'Is SGPA calculation the same across all Indian universities?',
    answer: 'While most Indian universities follow a similar credit-based grading system, the exact grade point scale and conversion formulas may vary. Always refer to your university\'s academic regulations for the specific calculation method.'
  },
  {
    question: 'How can I improve my SGPA in the next semester?',
    answer: 'Focus on high-credit subjects as they have more impact on your SGPA. Maintain consistent study habits, attend classes regularly (use our attendance calculator), seek help when needed, and start exam preparation early. Even small improvements in high-credit subjects can significantly boost your SGPA.'
  }
];
