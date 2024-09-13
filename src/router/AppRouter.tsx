import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from '@/pages/landingpage/Screen/LandingPage';
import MainLayout from '@/layout/MainLayout';
import Dashboard from '@/pages/dashboard/dashboard/Dashboard';
import About from '@/pages/landingpage/about/About';
import Contact from '@/pages/landingpage/contact/Contact';
import Investment from '@/pages/landingpage/investment/Investment';
import Team from './../pages/landingpage/team/Team';
import Invest from '@/pages/dashboard/invest/Invest';
import Withdraw from '@/pages/dashboard/withdraw/Withdraw';
import Analysis from '@/pages/dashboard/analysis/Analysis';
import Transaction from '@/pages/dashboard/transactions/Transaction';
import Settings from '@/pages/dashboard/settings/Settings';
import SpecialLayout from '@/layout/SpecialLayout';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import TeamSub from '@/pages/landingpage/team/screen/TeamSub';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/investment', element: <Investment /> },
      { path: '/team', element: <Team /> },
      { path: '/teamSub', element: <TeamSub /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/invest', element: <Invest /> },
      { path: '/withdraw', element: <Withdraw /> },
      { path: '/analysis', element: <Analysis /> },
      { path: '/transaction', element: <Transaction /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
  
  {
    path: '/',
    element: <SpecialLayout/>,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/forgot', element: <ForgotPassword /> },
      { path: '/reset', element: <ResetPassword /> },
      
    ],
  },
]);

export function Router() {
  return (<RouterProvider router={router} />);
}
