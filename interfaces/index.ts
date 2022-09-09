export enum UserType {
  normalUser,
  admin,
  superAdmin
}

export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  type: UserType;
};