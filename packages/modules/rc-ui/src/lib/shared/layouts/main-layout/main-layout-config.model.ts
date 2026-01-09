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

export interface ShellFooterConfig {
  enabled?: boolean;
  text?: string; // e.g. "All rights reserved."
  companyName?: string; // e.g. "Restorecommerce"
  companyUrl?: string; // e.g. "https://restorecommerce.io"
  showYear?: boolean;
  year?: number; // optional override
}

export interface RcLayoutConfig {
  appName: string;
  logoUrl?: string;
  logoWidth?: number;
  navItems: RcLayoutNavItem[];
  basePath?: string;
  categories?: RcLayoutNavCategory[];

  sidebarToggle?: {
    openIcon?: string; // when sidebar is expanded
    closeIcon?: string; // when sidebar is collapsed
    iconClass?: string; // optional CSS classes
  };

  uiText?: {
    showSidebar?: RcTranslatable;
    hideSidebar?: RcTranslatable;
    selectCategory?: RcTranslatable; // Somewhat deprecated. Not in use. Remove in the feature
    selectOrganization?: RcTranslatable;
  };

  accountMenu?: {
    profile?: RcTranslatable;
    preferences?: RcTranslatable;
    signOut?: RcTranslatable;
  };

  footer?: ShellFooterConfig;
}
