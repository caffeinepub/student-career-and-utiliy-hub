import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { linkedinChecklistContent, linkedinChecklistFAQs } from '../../seo/content/linkedinChecklist';

const LinkedInProfileChecklist = lazy(() => import('../../components/tools/resume/LinkedInProfileChecklist'));

export default function LinkedinProfileChecklistPage() {
  return (
    <ToolPageLayout
      title="LinkedIn Profile Checklist | Optimize Your Profile for Recruiters"
      description="Complete checklist to optimize your LinkedIn profile. Stand out to recruiters and increase your chances of landing internships and jobs."
      toolComponent={<LinkedInProfileChecklist />}
      content={linkedinChecklistContent}
      faqs={linkedinChecklistFAQs}
      breadcrumbName="LinkedIn Profile Checklist"
      canonicalPath="/linkedin-profile-checklist"
    />
  );
}
