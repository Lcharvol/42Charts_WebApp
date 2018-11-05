import Home from './pages/Home';
import Profil from './pages/Profil';
import Ranking from './pages/Ranking';
import Login from './pages/Login';

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
];

export default routes;
