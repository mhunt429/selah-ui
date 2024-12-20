import { AppUser } from "../appUser/appUser";

export interface AccessTokenRequest {
  username: string;
  password: string;
}

export interface TokenData {
  sessionId: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiration: Date;
  refreshTokenExpiration: Date;
}

export interface AccessTokenResponse {
  user: AppUser;
  tokenData: TokenData;
}
