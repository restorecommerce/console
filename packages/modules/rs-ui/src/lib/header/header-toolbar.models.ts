export interface RsHeaderUser {
  id: string;
  fullName: string;
  email?: string;
}

export interface RsHeaderOrganization {
  id: string;
  name: string;
  description?: string;
}
