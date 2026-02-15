import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { bmiContent, bmiFAQs } from '../../seo/content/bmi';

const BmiCalculator = lazy(() => import('../../components/tools/utilities/BmiCalculator'));

export default function BmiCalculatorPage() {
  return (
    <ToolPageLayout
      title="BMI Calculator | Calculate Your Body Mass Index"
      description="Free BMI calculator to check your body mass index. Get instant results and health recommendations based on your height and weight."
      toolComponent={<BmiCalculator />}
      content={bmiContent}
      faqs={bmiFAQs}
      breadcrumbName="BMI Calculator"
      canonicalPath="/bmi-calculator"
    />
  );
}
