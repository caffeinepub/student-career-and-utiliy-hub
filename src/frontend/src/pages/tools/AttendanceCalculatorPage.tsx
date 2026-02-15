import { lazy } from 'react';
import ToolPageLayout from './ToolPageLayout';
import { attendanceContent, attendanceFAQs } from '../../seo/content/attendance';

const AttendanceCalculator = lazy(() => import('../../components/tools/academic/AttendanceCalculator'));

export default function AttendanceCalculatorPage() {
  return (
    <ToolPageLayout
      title="Attendance Calculator | Track College Attendance Percentage"
      description="Calculate your attendance percentage and find out how many classes you can miss. Free attendance tracker for college and engineering students."
      toolComponent={<AttendanceCalculator />}
      content={attendanceContent}
      faqs={attendanceFAQs}
      breadcrumbName="Attendance Calculator"
      canonicalPath="/attendance-calculator"
    />
  );
}
