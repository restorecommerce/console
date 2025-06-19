import { IRouterConstant } from '@console-core/types';

export const ROUTER: Readonly<IRouterConstant> = {
  pages: {
    main: {
      path: '',
      link: '/',
      getLink: () => [''],
      children: {
        home: {
          path: '',
          link: '/',
          title: 'Home',
          getLink: () => ['', '/'],
        },
        activateAccount: {
          path: 'activate-account',
          link: '/activate-account',
          title: 'Activate Account',
          getLink: () => ['', 'activate-account'],
        },
        confirmEmailChange: {
          path: 'confirm-email-change',
          link: '/confirm-email-change',
          title: 'Confirm Email Change',
          getLink: () => ['', 'confirm-email-change'],
        },
        confirmPasswordChange: {
          path: 'confirm-password-change',
          link: '/confirm-password-change',
          title: 'Confirm Password Change',
          getLink: () => ['', 'confirm-password-change'],
        },
        auth: {
          path: 'auth',
          link: '/auth',
          title: 'Auth',
          getLink: () => ['', 'auth'],
          children: {
            signUp: {
              path: 'sign-up',
              link: '/auth/sign-up',
              title: 'Sign Up',
              getLink: () => ['', 'auth', 'sign-up'],
            },
            activation: {
              path: 'activation/:identifier/:code',
              link: '/auth/activation/:identifier/:code',
              title: 'Activation',
              getLink: (params?: { identifier?: string; code?: string }) =>
                params?.identifier && params?.code
                  ? ['', 'auth', 'activation', params.identifier, params.code]
                  : ['', 'auth', 'activation'],
            },
            signIn: {
              path: 'sign-in',
              link: '/auth/sign-in',
              title: 'Sign In',
              getLink: () => ['', 'auth', 'sign-in'],
            },
            signOut: {
              path: 'sign-out',
              link: '/auth/sign-out',
              title: 'Sign Out',
              getLink: () => ['', 'auth', 'sign-out'],
            },
            passwordRecovery: {
              path: 'password-recovery',
              link: '/auth/password-recovery',
              title: 'Password Recovery',
              getLink: () => ['', 'auth', 'password-recovery'],
            },
            confirmPassword: {
              path: 'confirm-password/:identifier/:code',
              link: '/auth/confirm-password/:identifier/:code',
              title: 'Confirm Password',
              getLink: (params?: { identifier?: string; code?: string }) =>
                params?.identifier && params?.code
                  ? [
                      '',
                      'auth',
                      'confirm-password',
                      params.identifier,
                      params.code,
                    ]
                  : ['', 'auth', 'confirm-password'],
            },
          },
        },
        account: {
          path: 'account',
          link: '/account',
          title: 'Account',
          getLink: () => ['', 'account'],
          children: {
            index: {
              path: '',
              link: '/account',
              getLink: () => ['', 'account'],
              title: 'Account',
            },
            confirmEmail: {
              path: 'confirm-email/:identifier/:code',
              link: '/account/confirm-email/:identifier/:code',
              title: 'Confirm Email',
              getLink: (params?: { identifier?: string; code?: string }) =>
                params?.identifier && params?.code
                  ? [
                      '',
                      'account',
                      'confirm-email',
                      params.identifier,
                      params.code,
                    ]
                  : ['', 'account', 'confirm-email'],
            },
            profile: {
              path: 'profile',
              link: '/account/profile',
              title: 'Profile',
              getLink: () => ['', 'account', 'profile'],
            },
            preferences: {
              path: 'preferences',
              link: '/account/preferences',
              title: 'Preferences',
              getLink: () => ['', 'account', 'preferences'],
            },
          },
        },
        orders: {
          path: 'orders',
          link: '/orders',
          title: 'Orders',
          getLink: () => ['', 'orders'],
          children: {
            index: {
              path: 'index',
              link: '/orders/index',
              getLink: () => ['', 'orders', 'index'],
              title: 'Orders',
            },
            create: {
              path: 'create',
              link: '/orders/create',
              title: 'Create',
              getLink: () => ['', 'orders', 'create'],
            },
            view: {
              path: ':id/view',
              link: '/orders/:id/view',
              title: 'Order',
              getLink: (params?: { id?: string }) =>
                params?.id ? ['', 'orders', params.id, 'view'] : ['', 'orders'],
            },
            edit: {
              path: ':id/edit',
              link: '/orders/:id/edit',
              title: 'Edit',
              getLink: (params?: { id?: string }) =>
                params?.id ? ['', 'orders', params.id, 'edit'] : ['', 'orders'],
            },
          },
        },
        products: {
          path: 'products',
          link: '/products',
          title: 'Products',
          getLink: () => ['', 'products'],
          children: {
            index: {
              path: 'index',
              link: '/products/index',
              getLink: () => ['', 'products', 'index'],
              title: 'Products',
            },

            catalogs: {
              path: 'catalogs',
              link: '/products/catalogs',
              title: 'Catalogs',
              getLink: () => ['', 'products', 'catalog'],
              children: {
                index: {
                  path: 'index',
                  link: '/products/catalogs/index',
                  getLink: () => ['', 'products', 'catalogs', 'index'],
                  title: 'Catalogs',
                },
                create: {
                  path: 'create',
                  link: '/products/catalogs/create',
                  title: 'Create',
                  getLink: () => ['', 'products', 'catalogs', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/products/catalogs/:id/view',
                  title: 'Catalog',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'products', 'catalogs', params.id, 'view']
                      : ['', 'products', 'catalogs'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/products/catalogs/:id/edit',
                  title: 'Edit',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'products', 'catalogs', params.id, 'edit']
                      : ['', 'products', 'catalogs'],
                },
              },
            },

            // TODO Remove
            create: {
              path: 'create',
              link: '/products/create',
              title: 'Create',
              getLink: () => ['', 'products', 'create'],
            },
            view: {
              path: ':id/view',
              link: '/products/:id/view',
              title: 'Product',
              getLink: (params?: { id?: string }) =>
                params?.id
                  ? ['', 'products', params.id, 'view']
                  : ['', 'products'],
            },
            edit: {
              path: ':id/edit',
              link: '/products/:id/edit',
              title: 'Edit',
              getLink: (params?: { id?: string }) =>
                params?.id
                  ? ['', 'products', params.id, 'edit']
                  : ['', 'products'],
            },
          },
        },
        invoices: {
          path: 'invoices',
          link: '/invoices',
          title: 'Invoices',
          getLink: () => ['', 'invoices'],
          children: {
            index: {
              path: 'index',
              link: '/invoices/index',
              getLink: () => ['', 'invoices', 'index'],
              title: 'Invoices',
            },
            create: {
              path: 'create',
              link: '/invoices/create',
              title: 'Create',
              getLink: () => ['', 'invoices', 'create'],
            },
            view: {
              path: ':id/view',
              link: '/invoices/:id/view',
              title: 'Invoice',
              getLink: (params?: { id?: string }) =>
                params?.id
                  ? ['', 'invoices', params.id, 'view']
                  : ['', 'invoices'],
            },
            edit: {
              path: ':id/edit',
              link: '/invoices/:id/edit',
              title: 'Edit',
              getLink: (params?: { id?: string }) =>
                params?.id
                  ? ['', 'invoices', params.id, 'edit']
                  : ['', 'invoices'],
            },
          },
        },
        fulfillments: {
          path: 'fulfillments',
          link: '/fulfillments',
          title: 'Fulfillments',
          getLink: () => ['', 'fulfillments'],
          children: {
            index: {
              path: 'index',
              link: '/fulfillments/index',
              getLink: () => ['', 'fulfillments', 'index'],
              title: 'Fulfillments',
            },
            create: {
              path: 'create',
              link: '/fulfillments/create',
              title: 'Create',
              getLink: () => ['', 'fulfillments', 'create'],
            },
            view: {
              path: ':id/view',
              link: '/fulfillments/:id/view',
              title: 'Fulfillments',
              getLink: (params?: { id?: string }) =>
                params?.id
                  ? ['', 'fulfillments', params.id, 'view']
                  : ['', 'fulfillments'],
            },
            edit: {
              path: ':id/edit',
              link: '/fulfillments/:id/edit',
              title: 'Edit',
              getLink: (params?: { id?: string }) =>
                params?.id
                  ? ['', 'fulfillments', params.id, 'edit']
                  : ['', 'fulfillments'],
            },
          },
        },
        layout: {
          path: 'layout',
          link: '/layout',
          title: 'Layout',
          getLink: () => ['', 'layout'],
        },
        overflow: {
          path: 'overflow',
          link: '/overflow',
          title: 'Overflow',
          getLink: () => ['', 'overflow'],
        },
        management: {
          path: 'management',
          link: '/management',
          title: 'Management',
          getLink: () => ['', 'management'],
          children: {
            index: {
              path: '',
              link: '/management',
              getLink: () => ['', 'management'],
              title: 'Management',
            },
            iam: {
              path: 'iam',
              link: '/management/iam',
              title: 'IAM',
              getLink: () => ['', 'management', 'iam'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/iam/index',
                  getLink: () => ['', 'management', 'iam', 'index'],
                  title: 'IAM',
                },
                create: {
                  path: 'create',
                  link: '/management/iam/create',
                  title: 'Create',
                  getLink: () => ['', 'management', 'iam', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/management/iam/:id/view',
                  title: 'User',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'iam', params.id, 'view']
                      : ['', 'management', 'iam'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/management/iam/:id/edit',
                  title: 'Edit',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'iam', params.id, 'edit']
                      : ['', 'management', 'iam'],
                },
                'change-password': {
                  path: ':id/change-password',
                  link: '/management/iam/:id/change-password',
                  title: 'Change Password',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'iam', params.id, 'change-password']
                      : ['', 'management', 'iam'],
                },
              },
            },
            shops: {
              path: 'shops',
              link: '/management/shops',
              title: 'Shops',
              getLink: () => ['', 'management', 'shops'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/shops/index',
                  getLink: () => ['', 'management', 'shops', 'index'],
                  title: 'Shops',
                },
                create: {
                  path: 'create',
                  link: '/management/shops/create',
                  title: 'Create',
                  getLink: () => ['', 'management', 'shops', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/management/shops/:id/view',
                  title: 'Shop',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'shops', params.id, 'view']
                      : ['', 'management', 'shops'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/management/shops/:id/edit',
                  title: 'Edit',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'shops', params.id, 'edit']
                      : ['', 'management', 'shops'],
                },
              },
            },
            organizations: {
              path: 'organizations',
              link: '/management/organizations',
              title: 'Organizations',
              getLink: () => ['', 'management', 'organizations'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/organizations/index',
                  getLink: () => ['', 'management', 'organizations', 'index'],
                  title: 'Organizations',
                },
                create: {
                  path: 'create',
                  link: '/management/organizations/create',
                  title: 'Create',
                  getLink: () => ['', 'management', 'organizations', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/management/organizations/:id/view',
                  title: 'Organization',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'organizations', params.id, 'view']
                      : ['', 'management', 'organizations'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/management/organizations/:id/edit',
                  title: 'Edit',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'organizations', params.id, 'edit']
                      : ['', 'management', 'organizations'],
                },
              },
            },
            addresses: {
              path: 'addresses',
              link: '/management/addresses',
              title: 'Addresses',
              getLink: () => ['', 'management', 'addresses'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/addresses/index',
                  getLink: () => ['', 'management', 'addresses', 'index'],
                  title: 'Addresses',
                },
                addresses: {
                  path: ':id',
                  link: '/management/addresses/:id',
                  title: 'Address',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'addresses', params.id]
                      : ['', 'management', 'addresses'],
                },
              },
            },
            contactPoints: {
              path: 'contact-points',
              link: '/management/contact-points',
              title: 'Contact Points',
              getLink: () => ['', 'management', 'contact-points'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/contact-points/index',
                  getLink: () => ['', 'management', 'contact-points', 'index'],
                  title: 'Contact Points',
                },
                contactPoints: {
                  path: ':id',
                  link: '/management/contact-points/:id',
                  title: 'Contact Point',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'contact-points', params.id]
                      : ['', 'management', 'contact-points'],
                },
              },
            },
            contracts: {
              path: 'contracts',
              link: '/management/contracts',
              title: 'Contracts',
              getLink: () => ['', 'management', 'contracts'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/contracts/index',
                  getLink: () => ['', 'management', 'contracts', 'index'],
                  title: 'Contracts',
                },
                contracts: {
                  path: ':id',
                  link: '/management/contracts/:id',
                  title: 'Contract',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'contracts', params.id]
                      : ['', 'management', 'contracts'],
                },
              },
            },
            commands: {
              path: 'commands',
              link: '/management/commands',
              title: 'Commands',
              getLink: () => ['', 'management', 'commands'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/commands/index',
                  getLink: () => ['', 'management', 'commands', 'index'],
                  title: 'Commands',
                },
                commands: {
                  path: ':id',
                  link: '/management/commands/:id',
                  title: 'Command',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'commands', params.id]
                      : ['', 'management', 'commands'],
                },
              },
            },
            locations: {
              path: 'locations',
              link: '/management/locations',
              title: 'Locations',
              getLink: () => ['', 'management', 'locations'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/locations/index',
                  getLink: () => ['', 'management', 'locations', 'index'],
                  title: 'Locations',
                },
                locations: {
                  path: ':id',
                  link: '/management/locations/:id',
                  title: 'Location',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'locations', params.id]
                      : ['', 'management', 'locations'],
                },
              },
            },
            countries: {
              path: 'countries',
              link: '/management/countries',
              title: 'Countries',
              getLink: () => ['', 'management', 'countries'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/countries/index',
                  getLink: () => ['', 'management', 'countries', 'index'],
                  title: 'Countries',
                },
                create: {
                  path: 'create',
                  link: '/management/countries/create',
                  title: 'Create',
                  getLink: () => ['', 'management', 'countries', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/management/countries/:id/view',
                  title: 'Country',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'countries', params.id, 'view']
                      : ['', 'management', 'countries'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/management/countries/:id/edit',
                  title: 'Edit',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'countries', params.id, 'edit']
                      : ['', 'management', 'countries'],
                },
              },
            },
            accessControl: {
              path: 'access-control',
              link: '/management/access-control',
              title: 'Access Control',
              getLink: () => ['', 'management', 'access-control'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/access-control/index',
                  getLink: () => ['', 'management', 'access-control', 'index'],
                  title: 'Access Control',
                },
                teams: {
                  path: 'access-control/teams',
                  link: '/management/access-control/teams',
                  title: 'Teams',
                  getLink: () => ['', 'management', 'access-control', 'teams'],
                  children: {
                    index: {
                      path: 'index',
                      link: '/management/access-control/teams/index',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'teams',
                        'index',
                      ],
                      title: 'Teams',
                    },
                    teams: {
                      path: ':id',
                      link: '/management/access-control/teams/:id',
                      title: 'Team',
                      getLink: (params?: { id?: string }) =>
                        params?.id
                          ? [
                              '',
                              'management',
                              'access-control',
                              'teams',
                              params.id,
                            ]
                          : ['', 'management', 'access-control', 'teams'],
                    },
                  },
                },
                roles: {
                  path: 'access-control/roles',
                  link: '/management/access-control/roles',
                  title: 'Roles',
                  getLink: () => ['', 'management', 'access-control', 'roles'],
                  children: {
                    index: {
                      path: 'index',
                      link: '/management/access-control/roles/index',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'roles',
                        'index',
                      ],
                      title: 'Roles',
                    },
                    create: {
                      path: 'create',
                      link: '/management/access-control/roles/create',
                      title: 'Create',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'roles',
                        'create',
                      ],
                    },
                    view: {
                      path: ':id/view',
                      link: '/management/access-control/roles/:id/view',
                      title: 'Role',
                      getLink: (params?: { id?: string }) =>
                        params?.id
                          ? [
                              '',
                              'management',
                              'access-control',
                              'roles',
                              params.id,
                              'view',
                            ]
                          : ['', 'management', 'access-control', 'roles'],
                    },
                    edit: {
                      path: ':id/edit',
                      link: '/management/access-control/roles/:id/edit',
                      title: 'Edit',
                      getLink: (params?: { id?: string }) =>
                        params?.id
                          ? [
                              '',
                              'management',
                              'access-control',
                              'roles',
                              params.id,
                              'edit',
                            ]
                          : ['', 'management', 'access-control', 'roles'],
                    },
                  },
                },
                rules: {
                  path: 'access-control/rules',
                  link: '/management/access-control/rules',
                  title: 'Rules',
                  getLink: () => ['', 'management', 'access-control', 'rules'],
                  children: {
                    index: {
                      path: 'index',
                      link: '/management/access-control/rules/index',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'rules',
                        'index',
                      ],
                      title: 'Rules',
                    },
                    rules: {
                      path: ':id',
                      link: '/management/access-control/rules/:id',
                      title: 'Rule',
                      getLink: (params?: { id?: string }) =>
                        params?.id
                          ? [
                              '',
                              'management',
                              'access-control',
                              'rules',
                              params.id,
                            ]
                          : ['', 'management', 'access-control', 'rules'],
                    },
                  },
                },
                polices: {
                  path: 'access-control/polices',
                  link: '/management/access-control/polices',
                  title: 'Polices',
                  getLink: () => [
                    '',
                    'management',
                    'access-control',
                    'polices',
                  ],
                  children: {
                    index: {
                      path: 'index',
                      link: '/management/access-control/polices/index',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'polices',
                        'index',
                      ],
                      title: 'Polices',
                    },
                    polices: {
                      path: ':id',
                      link: '/management/access-control/polices/:id',
                      title: 'Policy',
                      getLink: (params?: { id?: string }) =>
                        params?.id
                          ? [
                              '',
                              'management',
                              'access-control',
                              'polices',
                              params.id,
                            ]
                          : ['', 'management', 'access-control', 'polices'],
                    },
                  },
                },
              },
            },
            taxes: {
              path: 'taxes',
              link: '/management/taxes',
              title: 'Taxes',
              getLink: () => ['', 'management', 'taxes'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/taxes/index',
                  getLink: () => ['', 'management', 'taxes', 'index'],
                  title: 'Access Control',
                },
                create: {
                  path: 'create',
                  link: '/management/taxes/create',
                  title: 'Create',
                  getLink: () => ['', 'management', 'taxes', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/management/countries/:id/view',
                  title: 'Tax',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'taxes', params.id, 'view']
                      : ['', 'management', 'taxes'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/management/taxes/:id/edit',
                  title: 'Edit',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'taxes', params.id, 'edit']
                      : ['', 'management', 'taxes'],
                },
              },
            },
            currencies: {
              path: 'currencies',
              link: '/management/currencies',
              title: 'Currencies',
              getLink: () => ['', 'management', 'currencies'],
              children: {
                index: {
                  path: 'index',
                  link: '/management/currencies/index',
                  getLink: () => ['', 'management', 'currencies', 'index'],
                  title: 'Currencies',
                },
                create: {
                  path: 'create',
                  link: '/management/currencies/create',
                  title: 'Create',
                  getLink: () => ['', 'management', 'currencies', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/management/currencies/:id/view',
                  title: 'Currency',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'currencies', params.id, 'view']
                      : ['', 'management', 'currencies'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/management/currencies/:id/edit',
                  title: 'Edit',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['', 'management', 'currencies', params.id, 'edit']
                      : ['', 'management', 'currencies'],
                },
              },
            },
          },
        },
      },
    },
  },
};
