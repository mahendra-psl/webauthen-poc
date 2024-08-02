export interface RegisteredUser {
  challengePlaintext: string;
  createdAt: number;
  email: string;
  id: any;
  name: string;
  user_id?: any;
}

export type AuthorizedUser = Pick<RegisteredUser, "id"> & {
  isAuthorized: boolean;
};
