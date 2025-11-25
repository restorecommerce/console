export interface LayoutNavItem {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  externalUrl?: string;
  children?: LayoutNavItem[];
  isHidden?: boolean;
  requiredPermission?: string;
}

export interface OrgContextOption {
  id: string;
  name: string;
  logoUrl?: string;
  // anything extra you need for org context
  meta?: Record<string, unknown>;
}

export interface LayoutConfig {
  appName: string;
  logoUrl?: string;
  navItems: LayoutNavItem[];
  basePath?: string;
}
