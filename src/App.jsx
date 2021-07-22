// Dev dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';

const App = () => {
  const showContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  return (
    <Router>
      <div>
        <Switch>{showContent(routes)}</Switch>
      </div>
    </Router>
  );
};

export default App;
