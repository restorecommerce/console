export interface IAuthnConstant {
  headers: {
    Accept: string;
    'Content-type': string;
    Authorization: string;
  };
}

export interface IAuthnTokenSignInPayload {
  identifier?: string;
  password?: string;
}

export interface IAuthnTokenSignInResponse {
  access_token?: string;
  id_token?: string;
  expires_in?: string;
  last_login?: string;
  token_type?: string;
  scope?: string;
  token_name?: string;
  error?: string;
  error_description?: string;
}
