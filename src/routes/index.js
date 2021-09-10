import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Details from '../pages/details';
import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
