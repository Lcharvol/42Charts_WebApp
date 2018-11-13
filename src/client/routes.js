import Profil from './pages/Profil';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import ServerDown from './pages/ServerDown';
import Users from './pages/Users';

const routes = [
  {
    path: '/',
    exact: true,
    component: Profil,
    id: 0,
  },
  {
    id: 1,
    path: '/login',
    component: Login,
  },
  {
    id: 3,
    path: '/ranking',
    component: Ranking,
  },
  {
    id: 4,
    path: '/serverdown',
    component: ServerDown,
  },
  {
    id: 5,
    path: '/allusers',
    component: Users,
  },
];

export default routes;
