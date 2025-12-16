export type RcLayoutCategoryRoute = string;

export type RcLayoutNavCategoryId = 'home' | 'management' | string;

export interface RcLayoutNavCategory {
  id: RcLayoutNavCategoryId;
  label: string;
  defaultRoute?: RcLayoutCategoryRoute;
}

export interface RcLayoutNavItem {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  externalUrl?: string;
  children?: RcLayoutNavItem[];
  isHidden?: boolean;
  requiredPermission?: string;
  categoryId?: RcLayoutNavCategoryId; // e.g. 'home' | 'management'
}

export interface RcLayoutConfig {
  appName: string;
  logoUrl?: string;
  navItems: RcLayoutNavItem[];
  basePath?: string;
  categories?: RcLayoutNavCategory[];
}
