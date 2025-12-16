import { RcLayoutConfig } from '@console/rc-ui';

import { APP, ROUTER } from '@console-core/config';

export const MAIN_LAYOUT_CONFIG: RcLayoutConfig = {
  appName: APP.name ?? 'Restore Commerce Console',
  logoUrl: APP.logoUrl,

  categories: [
    {
      id: 'home',
      label: 'Home',
      defaultRoute: ROUTER.pages.main.children.orders.link,
    },
    {
      id: 'management',
      label: 'Management',
      defaultRoute: ROUTER.pages.main.children.management.children.iam.link,
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
      id: 'products',
      label: 'Products',
      icon: 'mdi mdi-tag-outline',
      route: ROUTER.pages.main.children.products.link,
      categoryId: 'home',
      children: [
        {
          id: 'products.catalogs',
          label: 'Catalog',
          icon: 'mdi mdi-book-open-variant',
          route:
            ROUTER.pages.main.children.products.children.catalogs.children.index
              .link,
        },
        {
          id: 'products.categories',
          label: 'Categories',
          icon: 'mdi mdi-shape-outline',
          route:
            ROUTER.pages.main.children.products.children.categories.children
              .index.link,
        },
        {
          id: 'products.manufacturers',
          label: 'Manufacturers',
          icon: 'mdi mdi-factory',
          route:
            ROUTER.pages.main.children.products.children.manufacturers.children
              .index.link,
        },
        {
          id: 'products.prototypes',
          label: 'Prototypes',
          icon: 'mdi mdi-cube-outline',
          route:
            ROUTER.pages.main.children.products.children.prototypes.children
              .index.link,
        },
        {
          id: 'products.priceGroups',
          label: 'Price groups',
          icon: 'mdi mdi-tag-multiple',
          route:
            ROUTER.pages.main.children.products.children.priceGroups.children
              .index.link,
        },
      ],
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
      route: ROUTER.pages.main.children.management.children.iam.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.accessControl',
      label: 'Access Control',
      icon: 'mdi mdi-lock-outline',
      route: ROUTER.pages.main.children.management.children.accessControl.link,
      categoryId: 'management',
      children: [
        {
          id: 'mgmt.accessControl.teams',
          label: 'Teams',
          icon: 'mdi mdi-account-multiple-outline',
          route:
            ROUTER.pages.main.children.management.children.accessControl
              .children.teams.link,
        },
        {
          id: 'mgmt.accessControl.roles',
          label: 'Roles',
          icon: 'mdi mdi-account-key-outline',
          route:
            ROUTER.pages.main.children.management.children.accessControl
              .children.roles.link,
        },
        {
          id: 'mgmt.accessControl.rules',
          label: 'Rules',
          icon: 'mdi mdi-account-convert-outline',
          route:
            ROUTER.pages.main.children.management.children.accessControl
              .children.rules.link,
        },
        {
          id: 'mgmt.accessControl.policies',
          label: 'Policies',
          icon: 'mdi mdi-folder-account-outline',
          route:
            ROUTER.pages.main.children.management.children.accessControl
              .children.polices.link,
        },
      ],
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
    {
      id: 'mgmt.addresses',
      label: 'Addresses',
      icon: 'mdi mdi-home-map-marker',
      route: ROUTER.pages.main.children.management.children.addresses.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.locations',
      label: 'Locations',
      icon: 'mdi mdi-map-marker-outline',
      route: ROUTER.pages.main.children.management.children.locations.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.countries',
      label: 'Countries',
      icon: 'mdi mdi-flag-outline',
      route: ROUTER.pages.main.children.management.children.countries.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.contactPoints',
      label: 'Contact Points',
      icon: 'mdi mdi-card-account-mail-outline',
      route: ROUTER.pages.main.children.management.children.contactPoints.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.contracts',
      label: 'Contracts',
      icon: 'mdi mdi-certificate-outline',
      route: ROUTER.pages.main.children.management.children.contracts.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.currencies',
      label: 'Currencies',
      icon: 'mdi mdi-cash-multiple',
      route: ROUTER.pages.main.children.management.children.currencies.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.taxes',
      label: 'Taxes',
      icon: 'mdi mdi-cash-minus',
      route: ROUTER.pages.main.children.management.children.taxes.link,
      categoryId: 'management',
    },
    {
      id: 'mgmt.commands',
      label: 'Commands',
      icon: 'mdi mdi-pound',
      route: ROUTER.pages.main.children.management.children.commands.link,
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
