import Homepage from './app/homepage/homepage';
import NotFound from './components/NotFound';
import ITRaiseIT from './app/donate-page/ITRaiseITApp';
import DonateBYVNPay from './app/donate-page/byVNPay';
import ReturnVNPAY from './app/donate-page/return-vnpay';
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Homepage />,
  },
  {
    path: '/alettertoitengineers',
    exact: true,
    main: () => <ITRaiseIT />,
  },
  {
    path: '/donate-by-vn-pay',
    exact: true,
    main: () => <DonateBYVNPay />,
  },
  {
    path: '/return-from-donate-by-vnpay',
    exact: true,
    main: () => <ReturnVNPAY />,
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
