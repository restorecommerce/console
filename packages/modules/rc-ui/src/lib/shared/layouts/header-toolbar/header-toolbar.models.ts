export interface RcHeaderUser {
  id: string;
  fullName: string;
  email?: string;
}

export interface RcHeaderOrganization {
  id: string;
  name: string;
  description?: string;
}
