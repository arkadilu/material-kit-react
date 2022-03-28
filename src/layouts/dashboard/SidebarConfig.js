// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/web',
  //   icon: getIcon('eva:pie-chart-2-fill')
  // },
  {
    title: 'students',
    path: '/web/students',
    icon: getIcon('mdi:karate')
  },
  {
    title: 'groups',
    path: '/web/groups',
    icon: getIcon('mdi:account-group')
  },
  {
    title: 'inventory',
    path: '/web/inventory',
    icon: getIcon('mdi:hanger')
  }
];

export default sidebarConfig;
