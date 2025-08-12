import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import LandingPage from './pages/landingPage/index.tsx';
import Hero from './pages/landingPage/heroPage/hero.tsx';
import About from './pages/landingPage/about/about.tsx';
import Pricing from './pages/landingPage/pricing/pricing.tsx';
import OnboardingPage from './pages/onboarding/onboardingPage.tsx';
import SignIn from './pages/onboarding/signInPage/LoginPage.tsx';
import ForgotPassword from './pages/forgotPassword/forgotPassword.tsx';
import SignUp from './pages/signUp/signUp.tsx';
import AuthPage from './auth/auth.tsx';
import { clientRoutes } from './routes/clientRoutes.tsx';
import { enterpriseRoutes } from './routes/enterpriseRoutes.tsx';
import { tradieRoutes } from './routes/tradieRoutes.tsx';
import NotFoundPage from './generalComponents/404page.tsx';



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
        element: <Hero />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
    ],
  },
  {
    path: '/onboarding',
    element: <OnboardingPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/auth',
    element: <AuthPage />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
    ]
  },
  {
    path: "/app",
    element: <App />,
    children: [
      ...clientRoutes,
      ...enterpriseRoutes,
      ...tradieRoutes,
    ]
  },
  {
    path:'/*',
    element:<NotFoundPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
