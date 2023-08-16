import { AppUser } from "../user/appUser";

export interface AccessTokenRequest {
  emailOrUserName: string;
  password: string;
}

export interface AccessTokenResponse {
  user: AppUser;
  access_token: string;
  expiration: Date;
}
