import { Home } from './home';

import { Module } from 'types';

export default {
  name: 'Home',
  routeProps: {
    path: '/',
    exact: true,
    component: Home,
    private: false
  }
} as Module.Module;
