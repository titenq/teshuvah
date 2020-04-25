import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Biblia from './pages/Biblia';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/biblia" component={Biblia} />
      <Route exact path="/login" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
