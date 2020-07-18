import React from 'react';

import { ApplicationContainer } from 'containers';
import Routes from 'routes';

const App = () => {
  return (
    <React.StrictMode>
      <ApplicationContainer>
        <Routes />
      </ApplicationContainer>
    </React.StrictMode>
  );
};

export { App };
