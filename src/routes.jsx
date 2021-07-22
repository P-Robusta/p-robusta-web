import Homepage from './app/homepage';
import NotFound from './components/NotFound';
import ITRaiseIT from './components/News/Posts/ITraiseIT/it_raise_it';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Homepage />,
  },
  {
    path: '/it-raise-it',
    exact: true,
    main: () => <ITRaiseIT />,
  },

  // {
  //   path: '/posts/:post',
  //   exact: false,
  //   main: ({ match }) => <Posts match={match} />,
  // },
  {
    path: '*',
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
