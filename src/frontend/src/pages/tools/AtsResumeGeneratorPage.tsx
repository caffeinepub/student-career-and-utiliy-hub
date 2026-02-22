import ToolPageLayout from './ToolPageLayout';
import AtsResumeGenerator from '../../components/tools/resume/AtsResumeGenerator';
import { atsResumeContent, atsResumeFAQs } from '../../seo/content/atsResume';

export default function AtsResumeGeneratorPage() {
  return (
    <ToolPageLayout
      title="ATS-Friendly Resume Generator"
      description="Create a professional, ATS-optimized resume that passes applicant tracking systems and gets you noticed by recruiters."
      toolComponent={<AtsResumeGenerator />}
      content={atsResumeContent}
      faqs={atsResumeFAQs}
      breadcrumbName="ATS Resume Generator"
      canonicalPath="/ats-resume-generator"
    />
  );
}
