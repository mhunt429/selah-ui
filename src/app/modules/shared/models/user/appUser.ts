export interface AppUser {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  dateCreated: Date;
}

export interface AppUserCreate {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
