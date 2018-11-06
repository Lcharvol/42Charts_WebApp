import Home from './pages/Home';
import Profil from './pages/Profil';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import ServerDown from './pages/ServerDown';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    id: 0,
  },
  {
    id: 1,
    path: '/login',
    component: Login,
  },
  {
    id: 2,
    path: '/profil',
    component: Profil,
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
];

export default routes;
