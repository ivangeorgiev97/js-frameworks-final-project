import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <MainLayout>
      <Home></Home>
    </MainLayout>
  },
  {
    path: '/about',
    main: () => <MainLayout>
      <About></About>
    </MainLayout>
  }
]

const getRouteElements = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
        <Switch>
          {getRouteElements()}
        </Switch>
    </Router>
  );
}

export default App;
