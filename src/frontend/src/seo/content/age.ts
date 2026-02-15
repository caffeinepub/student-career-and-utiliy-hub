import type { ContentSection, FAQItem } from './sgpa';

export const ageContent: ContentSection[] = [
  {
    heading: 'What is an Age Calculator?',
    content: `An age calculator is a simple yet useful tool that calculates your exact age in years, months, and days from your date of birth. Our free online age calculator provides instant, accurate results and is perfect for students, professionals, and anyone needing precise age calculations.

Beyond just calculating age, our tool shows:
- Your age in years, months, and days
- Total days you've lived
- Your next birthday countdown
- Age on specific future or past dates

Age calculators are useful for various purposes including filling forms, calculating eligibility for exams or jobs, planning events, or simply satisfying curiosity about your exact age. The tool is especially helpful for students applying to competitive exams or jobs with age restrictions.`
  },
  {
    heading: 'How to Calculate Age Manually',
    content: `While our age calculator does this instantly, understanding the manual calculation helps verify results:

Step 1: Start with the current date
Step 2: Subtract your birth date
Step 3: Calculate years by subtracting birth year from current year
Step 4: Adjust if birthday hasn't occurred this year yet
Step 5: Calculate remaining months and days

For example, if today is February 15, 2026, and you were born on March 20, 2004:
- Years: 2026 - 2004 = 22 years (but birthday hasn't occurred yet, so 21 years)
- Months: 12 - 3 + 2 = 11 months
- Days: Calculate days from March 20 to February 15

Our calculator handles all these complexities including leap years automatically. You can also use our other utility tools like the <a href="/bmi-calculator" class="text-primary hover:underline">BMI calculator</a> and <a href="/emi-calculator" class="text-primary hover:underline">EMI calculator</a> for more everyday calculations.`
  },
  {
    heading: 'Common Uses of Age Calculator',
    content: `Age calculators serve various practical purposes:

For Students:
- Checking eligibility for competitive exams (many have age limits)
- Filling college application forms accurately
- Calculating age for scholarship applications
- Planning career timelines with our <a href="/career-roadmap-generator" class="text-primary hover:underline">career roadmap generator</a>

For Job Applications:
- Verifying age eligibility for government jobs
- Calculating years of experience
- Filling employment forms with exact age
- Planning retirement age calculations

Personal Use:
- Calculating age for legal documents
- Planning milestone birthdays
- Calculating age difference between people
- Determining zodiac signs and birth details

The tool is completely free, requires no registration, and works on all devices. All calculations are performed locally in your browser, ensuring your privacy.`
  },
  {
    heading: 'Frequently Asked Questions',
    content: ''
  }
];

export const ageFAQs: FAQItem[] = [
  {
    question: 'How accurate is the age calculator?',
    answer: 'Our age calculator is 100% accurate as it uses precise date arithmetic accounting for leap years and varying month lengths. The calculation is performed using standard date libraries that handle all edge cases correctly.'
  },
  {
    question: 'Can I calculate age for past or future dates?',
    answer: 'Yes, you can calculate your age on any past or future date. Simply enter your birth date and the target date, and the calculator will show your age on that specific date.'
  },
  {
    question: 'Why is my age in months more than 12?',
    answer: 'The calculator shows your total age in different units. So if you\'re 21 years old, it will also show approximately 252 months (21 × 12) as your total age in months, not just the remaining months in the current year.'
  },
  {
    question: 'Does the calculator account for leap years?',
    answer: 'Yes, our age calculator automatically accounts for leap years when calculating the exact number of days you\'ve lived. This ensures accurate results regardless of when you were born.'
  }
];
