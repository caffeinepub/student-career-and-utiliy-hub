import type { ContentSection, FAQItem } from './sgpa';

export const bmiContent: ContentSection[] = [
  {
    heading: 'What is BMI (Body Mass Index)?',
    content: `BMI (Body Mass Index) is a simple calculation using your height and weight to determine if you're in a healthy weight range. Our free BMI calculator provides instant results and health recommendations based on your measurements.

BMI is widely used by healthcare professionals as a screening tool to identify potential weight-related health issues. While it's not a perfect measure (it doesn't account for muscle mass or body composition), it's a useful starting point for assessing overall health.

BMI Categories:
- Underweight: BMI less than 18.5
- Normal weight: BMI 18.5-24.9
- Overweight: BMI 25-29.9
- Obese: BMI 30 or greater

For students, maintaining a healthy BMI is important for overall well-being, energy levels, and academic performance. Regular exercise and balanced nutrition help maintain optimal BMI.`
  },
  {
    heading: 'How to Calculate BMI',
    content: `The BMI formula is simple: BMI = weight (kg) / [height (m)]²

For example, if you weigh 70 kg and your height is 1.75 m:
BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = 22.86

This falls in the "Normal weight" category (18.5-24.9).

Our BMI calculator accepts measurements in both metric (kg, cm) and imperial (lbs, inches) units, automatically converting and calculating your BMI. The tool also provides personalized health recommendations based on your result.

Understanding your BMI helps you:
- Set realistic fitness goals
- Track weight management progress
- Identify potential health risks early
- Make informed decisions about diet and exercise

Remember that BMI is just one indicator of health. Factors like muscle mass, bone density, and overall fitness also matter. Consult healthcare professionals for comprehensive health assessment.`
  },
  {
    heading: 'BMI Limitations and Considerations',
    content: `While BMI is useful, it has limitations you should be aware of:

What BMI Doesn't Account For:
- Muscle mass: Athletes may have high BMI due to muscle, not fat
- Body composition: Doesn't distinguish between fat and lean mass
- Age: BMI ranges don't adjust for age-related changes
- Gender: Men and women have different body compositions
- Ethnicity: Health risks vary across ethnic groups at same BMI

For Students and Young Adults:
- Focus on overall health, not just BMI numbers
- Regular physical activity is more important than perfect BMI
- Balanced diet matters more than restrictive dieting
- Mental health and stress management affect physical health
- Sleep and recovery are crucial for maintaining healthy weight

Better Health Indicators:
- Waist circumference (abdominal fat indicator)
- Body fat percentage
- Fitness level and endurance
- Blood pressure and cholesterol levels
- Overall energy and well-being

Use our health calculator as a starting point, but consider the bigger picture of your health. Combine healthy habits with academic success using our <a href="/attendance-calculator" class="text-primary hover:underline">attendance calculator</a> to balance studies and wellness.`
  },
  {
    heading: 'Frequently Asked Questions',
    content: ''
  }
];

export const bmiFAQs: FAQItem[] = [
  {
    question: 'Is BMI accurate for everyone?',
    answer: 'BMI is a general screening tool but not accurate for everyone. It may overestimate body fat in athletes and underestimate it in older adults. It doesn\'t account for muscle mass, bone density, or body composition. Use it as one indicator among many.'
  },
  {
    question: 'What is a healthy BMI for college students?',
    answer: 'For most adults including college students, a BMI between 18.5 and 24.9 is considered healthy. However, individual health varies. Focus on maintaining a balanced diet, regular exercise, and good sleep rather than obsessing over exact BMI numbers.'
  },
  {
    question: 'How often should I check my BMI?',
    answer: 'Check your BMI every 3-6 months if you\'re actively working on weight management. For general health monitoring, once or twice a year is sufficient. Focus more on how you feel, your energy levels, and overall fitness rather than frequent BMI checks.'
  },
  {
    question: 'Can BMI predict health problems?',
    answer: 'BMI can indicate increased risk for certain health conditions like heart disease, diabetes, and high blood pressure, especially at very high or very low values. However, it\'s not a diagnostic tool. Other factors like family history, lifestyle, and medical tests are also important.'
  }
];
