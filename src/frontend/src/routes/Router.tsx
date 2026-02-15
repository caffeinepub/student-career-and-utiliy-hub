import { lazy, Suspense } from 'react';
import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet, useLocation } from '@tanstack/react-router';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import { Toaster } from '../components/ui/sonner';
import HeadTags from '../seo/HeadTags';
import HomePage from '../pages/HomePage';
import StickyNavbar from '../components/nav/StickyNavbar';
import FooterSection from '../components/sections/FooterSection';

// Lazy load tool pages for code splitting
const SgpaCalculatorPage = lazy(() => import('../pages/tools/SgpaCalculatorPage'));
const CgpaCalculatorPage = lazy(() => import('../pages/tools/CgpaCalculatorPage'));
const AttendanceCalculatorPage = lazy(() => import('../pages/tools/AttendanceCalculatorPage'));
const CareerRoadmapGeneratorPage = lazy(() => import('../pages/tools/CareerRoadmapGeneratorPage'));
const ResumeBulletGeneratorPage = lazy(() => import('../pages/tools/ResumeBulletGeneratorPage'));
const InternshipEmailTemplatePage = lazy(() => import('../pages/tools/InternshipEmailTemplatePage'));
const InterviewPrepChecklistPage = lazy(() => import('../pages/tools/InterviewPrepChecklistPage'));
const LinkedinProfileChecklistPage = lazy(() => import('../pages/tools/LinkedinProfileChecklistPage'));
const AgeCalculatorPage = lazy(() => import('../pages/tools/AgeCalculatorPage'));
const EmiCalculatorPage = lazy(() => import('../pages/tools/EmiCalculatorPage'));
const BmiCalculatorPage = lazy(() => import('../pages/tools/BmiCalculatorPage'));
const UnitConverterPage = lazy(() => import('../pages/tools/UnitConverterPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));

function RootLayout() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <HeadTags pathname={location.pathname} />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <StickyNavbar />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        }>
          <Outlet />
        </Suspense>
        <FooterSection />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const sgpaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sgpa-calculator',
  component: SgpaCalculatorPage,
});

const cgpaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cgpa-calculator',
  component: CgpaCalculatorPage,
});

const attendanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/attendance-calculator',
  component: AttendanceCalculatorPage,
});

const careerRoadmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/career-roadmap-generator',
  component: CareerRoadmapGeneratorPage,
});

const resumeBulletRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume-bullet-generator',
  component: ResumeBulletGeneratorPage,
});

const internshipEmailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/internship-email-template',
  component: InternshipEmailTemplatePage,
});

const interviewPrepRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/interview-prep-checklist',
  component: InterviewPrepChecklistPage,
});

const linkedinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/linkedin-profile-checklist',
  component: LinkedinProfileChecklistPage,
});

const ageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/age-calculator',
  component: AgeCalculatorPage,
});

const emiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/emi-calculator',
  component: EmiCalculatorPage,
});

const bmiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bmi-calculator',
  component: BmiCalculatorPage,
});

const unitConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/unit-converter',
  component: UnitConverterPage,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  sgpaRoute,
  cgpaRoute,
  attendanceRoute,
  careerRoadmapRoute,
  resumeBulletRoute,
  internshipEmailRoute,
  interviewPrepRoute,
  linkedinRoute,
  ageRoute,
  emiRoute,
  bmiRoute,
  unitConverterRoute,
  privacyPolicyRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function Router() {
  return <RouterProvider router={router} />;
}
