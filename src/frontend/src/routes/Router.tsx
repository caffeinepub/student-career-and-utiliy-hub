import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { useLocation } from '@tanstack/react-router';
import StickyNavbar from '../components/nav/StickyNavbar';
import FooterSection from '../components/sections/FooterSection';
import HeadTags from '../seo/HeadTags';
import { Toaster } from '@/components/ui/sonner';

const HomePage = lazy(() => import('../pages/HomePage'));
const AttendanceCalculatorPage = lazy(() => import('../pages/tools/AttendanceCalculatorPage'));
const AgeCalculatorPage = lazy(() => import('../pages/tools/AgeCalculatorPage'));
const UnitConverterPage = lazy(() => import('../pages/tools/UnitConverterPage'));
const CareerRoadmapGeneratorPage = lazy(() => import('../pages/tools/CareerRoadmapGeneratorPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const AtsResumeGeneratorPage = lazy(() => import('../pages/tools/AtsResumeGeneratorPage'));

function RootLayout() {
  const location = useLocation();
  
  return (
    <>
      <HeadTags pathname={location.pathname} />
      <StickyNavbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Outlet />
      </Suspense>
      <FooterSection />
      <Toaster />
    </>
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

const attendanceCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/attendance-calculator',
  component: AttendanceCalculatorPage,
});

const ageCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/age-calculator',
  component: AgeCalculatorPage,
});

const unitConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/unit-converter',
  component: UnitConverterPage,
});

const careerRoadmapGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/career-roadmap-generator',
  component: CareerRoadmapGeneratorPage,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const atsResumeGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ats-resume-generator',
  component: AtsResumeGeneratorPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  attendanceCalculatorRoute,
  ageCalculatorRoute,
  unitConverterRoute,
  careerRoadmapGeneratorRoute,
  privacyPolicyRoute,
  atsResumeGeneratorRoute,
]);

export const router = createRouter({ routeTree });

export default function Router() {
  return null;
}
