import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { cgpaContent, cgpaFAQs } from '../../seo/content/cgpa';

const CgpaSgpaCalculator = lazy(() => import('../../components/tools/academic/CgpaSgpaCalculator'));

export default function CgpaCalculatorPage() {
  return (
    <ToolPageLayout
      title="CGPA Calculator | Calculate Cumulative GPA for Engineering Students"
      description="Free CGPA calculator for engineering students. Calculate cumulative grade point average, convert CGPA to percentage, and track your academic performance."
      toolComponent={<CgpaSgpaCalculator />}
      content={cgpaContent}
      faqs={cgpaFAQs}
      breadcrumbName="CGPA Calculator"
      canonicalPath="/cgpa-calculator"
    />
  );
}
