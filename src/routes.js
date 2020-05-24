import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Biblia from './pages/Biblia';
import Parashat from './pages/Parashat';
import Dicionario from './pages/Dicionario';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/biblia" component={Biblia} />
      <Route exact path="/parashat" component={Parashat} />
      <Route exact path="/dicionario" component={Dicionario} />
      <Route exact path="/login" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
