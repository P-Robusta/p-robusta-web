import Homepage from './app/homepage/homepage';
import NotFound from './components/NotFound';
import ITRaiseIT from './app/IT-Raise-IT/ITRaiseITApp';
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Homepage />,
  },
  {
    path: '/donate/alettertoitengineers',
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
