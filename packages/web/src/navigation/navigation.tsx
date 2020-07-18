import React from 'react';
import { Switch, Route } from 'react-router-dom';

import modules from 'modules';

const Navigation = () => {
  return (
    <div>
      <Switch>
        {Object.values(modules).map(module => {
          return <Route key={module.name} {...module.routeProps} />;
        })}
      </Switch>
    </div>
  );
};

export { Navigation };
