import Homepage from './app/homepage';
import NotFound from './components/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Homepage />,
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
