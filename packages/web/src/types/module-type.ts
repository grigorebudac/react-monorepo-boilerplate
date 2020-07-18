import { RouteProps } from 'react-router-dom';

export declare module Module {
  export type Module = {
    name: string;
    routeProps: RouteProps & { private?: boolean };
  };
}
