import ReactGA from 'react-ga';

export const initializeGa = () => {
  ReactGA.initialize('UA-46037096-3');
};

export const visitePageGa = pageName => {
  ReactGA.pageview(`/${pageName}`);
};
