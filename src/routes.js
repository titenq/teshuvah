import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Biblia = lazy(() => import('./pages/Biblia'));
const Parashat = lazy(() => import('./pages/Parashat'));
const Dicionario = lazy(() => import('./pages/Dicionario'));
const Login = lazy(() => import('./pages/Login'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const Routes = () => {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/biblia" component={Biblia} />
        <Route exact path="/parashat" component={Parashat} />
        <Route exact path="/dicionario" component={Dicionario} />
        <Route exact path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
