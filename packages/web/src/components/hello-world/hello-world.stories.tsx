import React from 'react';
import { storiesOf } from '@storybook/react';

import HelloWorld from './hello-world';

storiesOf('Components | Hello World', module).add('Default', () => <HelloWorld />);
