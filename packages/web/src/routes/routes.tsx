import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/home';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
