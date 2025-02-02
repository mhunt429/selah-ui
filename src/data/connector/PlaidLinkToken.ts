export type PlaidTokenHttpRequest = {
  publicToken: string;
  userId: string;
  institutionName: string;
  institutionId: string;
};

export type LinkTokenResponse = {
  link_token: string;
};
