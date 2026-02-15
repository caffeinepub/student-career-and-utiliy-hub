import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { emiContent, emiFAQs } from '../../seo/content/emi';

const EmiCalculator = lazy(() => import('../../components/tools/utilities/EmiCalculator'));

export default function EmiCalculatorPage() {
  return (
    <ToolPageLayout
      title="EMI Calculator | Calculate Monthly Loan Payments"
      description="Free EMI calculator for students and professionals. Calculate monthly loan payments for education loans, personal loans, and more."
      toolComponent={<EmiCalculator />}
      content={emiContent}
      faqs={emiFAQs}
      breadcrumbName="EMI Calculator"
      canonicalPath="/emi-calculator"
    />
  );
}
