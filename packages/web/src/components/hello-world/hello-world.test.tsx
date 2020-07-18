import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HelloWorld from '.';

describe('<HelloWorld />', () => {
  const renderComponent = () => render(<HelloWorld />);

  test('Renders content correctly', () => {
    const { queryByText } = renderComponent();
    expect(queryByText('Hello World')).toBeInTheDocument();
  });
});
