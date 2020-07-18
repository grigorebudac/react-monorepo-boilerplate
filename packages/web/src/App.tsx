import React from 'react';

import { ApplicationContainer } from 'containers';
import { Navigation } from 'navigation';

const App = () => {
  return (
    <React.StrictMode>
      <ApplicationContainer>
        <Navigation />
      </ApplicationContainer>
    </React.StrictMode>
  );
};

export { App };
