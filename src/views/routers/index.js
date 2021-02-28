import React  from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import NotFound from '../containers/not-found';
import Home from '../containers/home';
import Category from '../containers/category';
import Articles from '../containers/articles';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/articles" component={Articles} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
};

const RoutesHistory = withRouter(Routes);

const routing = function createRouting() {
  return (
    <Router>
      <RoutesHistory />
    </Router>
  );
};

export default routing;
