import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { interviewPrepContent, interviewPrepFAQs } from '../../seo/content/interviewPrep';

const InterviewPrepChecklist = lazy(() => import('../../components/tools/resume/InterviewPrepChecklist'));

export default function InterviewPrepChecklistPage() {
  return (
    <ToolPageLayout
      title="Interview Preparation Checklist | Complete Guide for Students"
      description="Comprehensive interview preparation checklist for engineering students. Cover technical, behavioral, and HR rounds with confidence."
      toolComponent={<InterviewPrepChecklist />}
      content={interviewPrepContent}
      faqs={interviewPrepFAQs}
      breadcrumbName="Interview Prep Checklist"
      canonicalPath="/interview-prep-checklist"
    />
  );
}
