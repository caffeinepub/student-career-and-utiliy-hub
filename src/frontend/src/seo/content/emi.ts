import type { ContentSection, FAQItem } from './sgpa';

export const emiContent: ContentSection[] = [
  {
    heading: 'What is EMI and How Does It Work?',
    content: `EMI stands for Equated Monthly Installment. It's the fixed amount you pay every month to repay a loan. Our free EMI calculator helps students and professionals calculate monthly loan payments for education loans, personal loans, home loans, and more.

Understanding EMI is crucial for financial planning, especially for engineering students considering education loans or planning future expenses. An EMI consists of two components:
- Principal amount: The actual loan amount you borrowed
- Interest amount: The cost of borrowing money

In the initial months, a larger portion of your EMI goes toward interest, while in later months, more goes toward principal repayment. Our EMI calculator shows you the complete breakdown including total interest payable and payment schedule.`
  },
  {
    heading: 'EMI Calculation Formula',
    content: `The EMI formula is: EMI = [P × R × (1+R)^N] / [(1+R)^N-1]

Where:
- P = Principal loan amount
- R = Monthly interest rate (Annual rate / 12 / 100)
- N = Loan tenure in months

For example, for a ₹5,00,000 education loan at 10% annual interest for 5 years:
- P = 5,00,000
- R = 10/12/100 = 0.00833
- N = 5 × 12 = 60 months
- EMI ≈ ₹10,624

Our loan EMI calculator automates this complex calculation and shows you the total interest and payment schedule. This helps you plan your finances better and choose loan terms that fit your budget.`
  },
  {
    heading: 'EMI Calculator for Education Loans',
    content: `Education loans are common among engineering students. Here's what you need to know:

Typical Education Loan Terms:
- Loan amount: ₹2-20 lakhs for Indian universities, higher for abroad
- Interest rate: 8-12% per annum
- Tenure: 5-15 years
- Moratorium period: Course duration + 6 months (no EMI during this time)

Using our education loan calculator:
1. Enter the loan amount you need
2. Input the interest rate offered by your bank
3. Choose the repayment tenure
4. See your monthly EMI and total interest

Planning tip: Use our <a href="/career-roadmap-generator" class="text-primary hover:underline">career roadmap generator</a> to estimate your future salary and ensure your EMI will be affordable after graduation. Generally, your EMI shouldn't exceed 40-50% of your monthly income.`
  },
  {
    heading: 'Tips to Reduce EMI Burden',
    content: `Here are strategies to manage and reduce your EMI payments:

Before Taking the Loan:
- Compare interest rates from multiple banks
- Negotiate for lower rates based on your academic record
- Consider co-applicant options (parents) for better rates
- Choose appropriate tenure - longer tenure means lower EMI but higher total interest

During Repayment:
- Make prepayments when possible to reduce principal
- Pay more than the minimum EMI if you can afford it
- Consider balance transfer to banks offering lower rates
- Maintain good credit score for future refinancing options

For Students:
- Start with part-time work or internships to build savings
- Use our <a href="/sgpa-calculator" class="text-primary hover:underline">SGPA calculator</a> to maintain good grades for scholarship opportunities
- Plan your career to ensure sufficient income for EMI payments
- Consider loan moratorium period wisely

Our monthly payment calculator helps you experiment with different loan amounts and tenures to find the most comfortable EMI for your situation.`
  },
  {
    heading: 'Frequently Asked Questions',
    content: ''
  }
];

export const emiFAQs: FAQItem[] = [
  {
    question: 'What is a good EMI to income ratio?',
    answer: 'Financial experts recommend keeping your total EMI payments (all loans combined) below 40-50% of your monthly income. This ensures you have enough for other expenses and savings. For fresh graduates, start with lower EMIs until your income stabilizes.'
  },
  {
    question: 'Can I prepay my education loan?',
    answer: 'Yes, most banks allow prepayment of education loans without penalties. Prepaying reduces your principal amount, which in turn reduces the total interest you pay. Even small prepayments can significantly reduce your loan burden over time.'
  },
  {
    question: 'What happens if I miss an EMI payment?',
    answer: 'Missing EMI payments can result in late payment charges, increased interest, and negative impact on your credit score. If you\'re facing financial difficulty, contact your bank immediately to discuss restructuring options or temporary relief.'
  },
  {
    question: 'Should I choose a longer or shorter loan tenure?',
    answer: 'Shorter tenure means higher EMI but lower total interest paid. Longer tenure means lower EMI but higher total interest. Choose based on your income stability and financial goals. For education loans, consider your expected salary after graduation.'
  }
];
