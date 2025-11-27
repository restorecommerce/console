export type LayoutNavCategoryId = 'home' | 'management' | string;

export interface LayoutNavCategory {
  id: LayoutNavCategoryId;
  label: string;
}

export interface LayoutNavItem {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  externalUrl?: string;
  children?: LayoutNavItem[];
  isHidden?: boolean;
  requiredPermission?: string;
  categoryId?: LayoutNavCategoryId; // e.g. 'home' | 'management'
}

export interface LayoutConfig {
  appName: string;
  logoUrl?: string;
  navItems: LayoutNavItem[];
  basePath?: string;
  categories?: LayoutNavCategory[];
}
