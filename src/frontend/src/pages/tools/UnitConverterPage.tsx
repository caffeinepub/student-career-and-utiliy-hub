import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { unitConverterContent, unitConverterFAQs } from '../../seo/content/unitConverter';

const UnitConverter = lazy(() => import('../../components/tools/utilities/UnitConverter'));

export default function UnitConverterPage() {
  return (
    <ToolPageLayout
      title="Unit Converter | Convert Length, Weight, Temperature & More"
      description="Free online unit converter for students. Convert between different units of length, weight, temperature, and more instantly."
      toolComponent={<UnitConverter />}
      content={unitConverterContent}
      faqs={unitConverterFAQs}
      breadcrumbName="Unit Converter"
      canonicalPath="/unit-converter"
    />
  );
}
