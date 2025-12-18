export type RcLayoutCategoryRoute = string;

export type RcLayoutNavCategoryId = 'home' | 'management' | string;

export type RcTranslatable =
  | string
  | { key: string; params?: Record<string, unknown>; fallback?: string };

export interface RcLayoutNavCategory {
  id: RcLayoutNavCategoryId;
  label: RcTranslatable;
  defaultRoute?: RcLayoutCategoryRoute;
}

export interface RcLayoutNavItem {
  id: string;
  label: RcTranslatable;
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

  uiText?: {
    showSidebar?: RcTranslatable;
    hideSidebar?: RcTranslatable;
    selectCategory?: RcTranslatable;
    selectOrganization?: RcTranslatable;
  };

  accountMenu?: {
    profile?: RcTranslatable;
    preferences?: RcTranslatable;
    signOut?: RcTranslatable;
  };
}
