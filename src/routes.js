import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import NotFound from './pages/Page404';
import CustomersView from './pages/CustomersView';
import CustomerDetails from './pages/CustomerDetails';
import GroupsView from './pages/GroupsView';
import GroupDetails from './pages/GroupDetails';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/web',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <DashboardApp />
        },
        {
          path: 'students',
          children: [
            { index: true, element: <CustomersView /> },
            { path: ':studentid', element: <CustomerDetails /> }
          ]
        },
        {
          path: 'groups',
          children: [
            { index: true, element: <GroupsView /> },
            { path: ':groupid', element: <GroupDetails /> }
          ]
        },
        { path: 'inventory', element: <Products /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        // { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '/', element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" /> }
  ]);
}
