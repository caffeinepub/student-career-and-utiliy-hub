import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { sgpaContent, sgpaFAQs } from '../../seo/content/sgpa';

const CgpaSgpaCalculator = lazy(() => import('../../components/tools/academic/CgpaSgpaCalculator'));

export default function SgpaCalculatorPage() {
  return (
    <ToolPageLayout
      title="SGPA Calculator for Engineering Students"
      description="Calculate your SGPA (Semester Grade Point Average) instantly with our free online calculator. Designed for engineering students in India with credit-based grading system."
      toolComponent={<CgpaSgpaCalculator />}
      content={sgpaContent}
      faqs={sgpaFAQs}
      breadcrumbName="SGPA Calculator"
      canonicalPath="/sgpa-calculator"
    />
  );
}
