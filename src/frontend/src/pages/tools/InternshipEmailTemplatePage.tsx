import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { internshipEmailContent, internshipEmailFAQs } from '../../seo/content/internshipEmail';

const InternshipEmailTemplateGenerator = lazy(() => import('../../components/tools/resume/InternshipEmailTemplateGenerator'));

export default function InternshipEmailTemplatePage() {
  return (
    <ToolPageLayout
      title="Internship Email Template for Students | Professional Email Generator"
      description="Get professional email templates for internship applications. Free tool to help students write effective cold emails to companies."
      toolComponent={<InternshipEmailTemplateGenerator />}
      content={internshipEmailContent}
      faqs={internshipEmailFAQs}
      breadcrumbName="Internship Email Template"
      canonicalPath="/internship-email-template"
    />
  );
}
