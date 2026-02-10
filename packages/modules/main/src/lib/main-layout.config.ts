import { RcLayoutConfig } from '@console/rc-ui';

import { APP, ROUTER } from '@console-core/config';

export const MAIN_LAYOUT_CONFIG: RcLayoutConfig = {
  appName: APP.name ?? 'Restore Commerce Console',
  logoUrl: APP.logoUrl,
  logoWidth: 30,

  categories: [
    {
      id: 'home',
      label: 'Home',
      defaultRoute: ROUTER.pages.main.children.orders.link,
    },
    {
      id: 'management',
      label: 'Management',
      defaultRoute: ROUTER.pages.main.children.iam.link,
    },
    // {
    //   id: 'account',
    //   label: 'Account',
    //   defaultRoute: ROUTER.pages.main.children.account.children.profile.link,
    // },
  ],

  navItems: [
    // HOME
    {
      id: 'orders',
      label: 'Orders',
      icon: 'mdi mdi-receipt-outline',
      route: ROUTER.pages.main.children.orders.link,
      categoryId: 'home',
    },
    {
      id: 'invoices',
      label: 'Invoices',
      icon: 'mdi mdi-invoice-outline',
      route: ROUTER.pages.main.children.invoices.link,
      categoryId: 'home',
      // visibility (admin-only) can be handled later via authz in the facade
    },
    {
      id: 'fulfillments',
      label: 'Fulfillments',
      icon: 'mdi mdi-truck-outline',
      route: ROUTER.pages.main.children.fulfillments.link,
      categoryId: 'home',
      // same: admin-only handled outside config
    },

    // MANAGEMENT
    {
      id: 'mgmt.iam',
      label: 'IAM',
      icon: 'mdi mdi-account-multiple-outline',
      route: ROUTER.pages.main.children.iam.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.organizations',
      label: 'Organizations',
      icon: 'mdi mdi-domain',
      route: ROUTER.pages.main.children.management.children.organizations.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.shops',
      label: 'Shops',
      icon: 'mdi mdi-store',
      route: ROUTER.pages.main.children.management.children.shops.link,
      categoryId: 'management',
    },

    // ACCOUNT (used when /account is active; optional category)
    {
      id: 'account.profile',
      label: 'Profile',
      icon: 'mdi mdi-account-cog-outline',
      route: ROUTER.pages.main.children.account.children.profile.link,
      categoryId: 'account',
    },
    {
      id: 'account.preferences',
      label: 'Preferences',
      icon: 'mdi mdi-cog-outline',
      route: ROUTER.pages.main.children.account.children.preferences.link,
      categoryId: 'account',
    },
  ],
};
