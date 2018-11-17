import Profil from './pages/Profil';
import Students from './pages/Students';
import Login from './pages/Login';
import ServerDown from './pages/ServerDown';
import User from './pages/User';

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
    path: '/students',
    component: Students,
  },
  {
    id: 4,
    path: '/serverdown',
    component: ServerDown,
  },
  {
    id: 5,
    path: '/user',
    component: User,
  },
];

export default routes;
