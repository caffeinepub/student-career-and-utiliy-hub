import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { resumeBulletsContent, resumeBulletsFAQs } from '../../seo/content/resumeBullets';

const ResumeBulletGenerator = lazy(() => import('../../components/tools/resume/ResumeBulletGenerator'));

export default function ResumeBulletGeneratorPage() {
  return (
    <ToolPageLayout
      title="Resume Bullet Generator for Freshers | Free Resume Writing Tool"
      description="Create impactful resume bullet points for your internship and job applications. Free resume bullet generator designed for engineering students and freshers."
      toolComponent={<ResumeBulletGenerator />}
      content={resumeBulletsContent}
      faqs={resumeBulletsFAQs}
      breadcrumbName="Resume Bullet Generator"
      canonicalPath="/resume-bullet-generator"
    />
  );
}
