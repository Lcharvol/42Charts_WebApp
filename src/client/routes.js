import Profil from './pages/Profil';
import Students from './pages/Students';
import Login from './pages/Login';
import ServerDown from './pages/ServerDown';
import User from './pages/User';
import Friends from './pages/Friends';
import Apps from './pages/Apps';
import Projects from './pages/Projects';

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
    exact: true,
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
    exact: true,
    component: ServerDown,
  },
  {
    id: 5,
    path: '/user',
    component: User,
  },
  {
    id: 6,
    path: '/friends',
    exact: true,
    component: Friends,
  },
  {
    id: 7,
    path: '/apps',
    exact: true,
    component: Apps,
  },
  {
    id: 8,
    path: '/projects',
    component: Projects,
  },
];

export default routes;
