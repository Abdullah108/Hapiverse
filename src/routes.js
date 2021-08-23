import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import RegisterLayout from 'src/components/RegisterLayout/RegisterLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Dashboard from 'src/pages/Dashboard';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import RegisterStep1 from 'src/pages/Register/RegisterStep1';
import RegisterStep2 from 'src/pages/Register/RegisterStep2';
import Settings from 'src/pages/Settings';
import RegisterStep3 from './pages/Register/RegisterStep3';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/register',
    element: <RegisterLayout />,
    children: [
      { path: 'step1', element: <RegisterStep1 /> },
      { path: 'step2', element: <RegisterStep2 /> },
      { path: 'step2', element: <RegisterStep3 /> },
      { path: '404', element: <NotFound /> }
    ]
  }
];

export default routes;
