export type AccessTokenRequest = {
  email: string;
  password: string;
};

export type TokenData = {
  sessionId: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiration: Date;
  refreshTokenExpiration: Date;
};
