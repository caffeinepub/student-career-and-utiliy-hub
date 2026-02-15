import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { ageContent, ageFAQs } from '../../seo/content/age';

const AgeCalculator = lazy(() => import('../../components/tools/utilities/AgeCalculator'));

export default function AgeCalculatorPage() {
  return (
    <ToolPageLayout
      title="Age Calculator | Calculate Your Exact Age in Years, Months, Days"
      description="Free online age calculator. Calculate your exact age in years, months, and days. Perfect for students and professionals."
      toolComponent={<AgeCalculator />}
      content={ageContent}
      faqs={ageFAQs}
      breadcrumbName="Age Calculator"
      canonicalPath="/age-calculator"
    />
  );
}
