import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import App from './App.tsx';
import LandingPage from './pages/landingPage/index.tsx';
import Hero from './pages/landingPage/heroPage/hero.tsx';
import About from './pages/landingPage/about/about.tsx';
import Pricing from './pages/landingPage/pricing/pricing.tsx';
import OnboardingPage from './pages/onboarding/onboardingPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      // { index: true, element: <LandingPage /> }, 
      // { path: 'about', element: <AboutPage /> },
      {
        path: '/about',
        element: <About />,
      },
      {
        index: true,
        element: <Hero/>,
      },
      {
        path: '/pricing',
        element: <Pricing/>,
      },
    ],
  },
  {
    path:'/onboarding',
    element:<OnboardingPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
