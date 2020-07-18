export declare module User {
  export type User = {
    uid: string;
    email: string | null;
    firstName: string;
    lastName: string;
  };

  export type SignUp = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };

  export type Login = {
    email: string;
    password: string;
  };
}
