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
        order: {
          path: 'orders',
          link: '/orders',
          title: 'Orders',
          getLink: () => ['', 'orders'],
        },
        product: {
          path: 'products',
          link: '/products',
          title: 'Products',
          getLink: () => ['', 'products'],
        },
        invoice: {
          path: 'invoices',
          link: '/invoices',
          title: 'Invoices',
          getLink: () => ['', 'invoices'],
        },
        fulfillment: {
          path: 'fulfillments',
          link: '/fulfillments',
          title: 'Fulfillments',
          getLink: () => ['', 'fulfillments'],
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
                  path: '',
                  link: '/management/iam',
                  getLink: () => ['', 'management', 'iam'],
                  title: 'IAM',
                },
                iam: {
                  path: ':id',
                  link: '/management/iam/:id',
                  title: 'IAM',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'iam', params.id]
                      : ['', 'management', 'iam'],
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
                  path: '',
                  link: '/management/addresses',
                  getLink: () => ['', 'management', 'addresses'],
                  title: 'Addresses',
                },
                addresses: {
                  path: ':id',
                  link: '/management/addresses/:id',
                  title: 'Address',
                  getLink: (params?: { id?: number | string }) =>
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
                  path: '',
                  link: '/management/contact-points',
                  getLink: () => ['', 'management', 'contact-points'],
                  title: 'Contact Points',
                },
                contactPoints: {
                  path: ':id',
                  link: '/management/contact-points/:id',
                  title: 'Contact Point',
                  getLink: (params?: { id?: number | string }) =>
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
                  path: '',
                  link: '/management/contracts',
                  getLink: () => ['', 'management', 'contracts'],
                  title: 'Contracts',
                },
                contracts: {
                  path: ':id',
                  link: '/management/contracts/:id',
                  title: 'Contract',
                  getLink: (params?: { id?: number | string }) =>
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
                  path: '',
                  link: '/management/commands',
                  getLink: () => ['', 'management', 'commands'],
                  title: 'Commands',
                },
                commands: {
                  path: ':id',
                  link: '/management/commands/:id',
                  title: 'Command',
                  getLink: (params?: { id?: number | string }) =>
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
                  path: '',
                  link: '/management/locations',
                  getLink: () => ['', 'management', 'locations'],
                  title: 'Locations',
                },
                locations: {
                  path: ':id',
                  link: '/management/locations/:id',
                  title: 'Location',
                  getLink: (params?: { id?: number | string }) =>
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
                  title: 'Create Country',
                  getLink: () => ['', 'management', 'countries', 'create'],
                },
                view: {
                  path: ':id/view',
                  link: '/management/countries/:id/view',
                  title: 'Country',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'countries', params.id, 'view']
                      : ['', 'management', 'countries'],
                },
                edit: {
                  path: ':id/edit',
                  link: '/management/countries/:id/edit',
                  title: 'Edit Country',
                  getLink: (params?: { id?: number | string }) =>
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
                  path: '',
                  link: '/management/access-control',
                  getLink: () => ['', 'management', 'access-control'],
                  title: 'Access Control',
                },
                teams: {
                  path: 'access-control/teams',
                  link: '/management/access-control/teams',
                  title: 'Teams',
                  getLink: () => ['', 'management', 'access-control', 'teams'],
                  children: {
                    index: {
                      path: '',
                      link: '/management/access-control/teams',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'teams',
                      ],
                      title: 'Teams',
                    },
                    teams: {
                      path: ':id',
                      link: '/management/access-control/teams/:id',
                      title: 'Team',
                      getLink: (params?: { id?: number | string }) =>
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
                      path: '',
                      link: '/management/access-control/roles',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'roles',
                      ],
                      title: 'Roles',
                    },
                    roles: {
                      path: ':id',
                      link: '/management/access-control/roles/:id',
                      title: 'Role',
                      getLink: (params?: { id?: number | string }) =>
                        params?.id
                          ? [
                              '',
                              'management',
                              'access-control',
                              'roles',
                              params.id,
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
                      path: '',
                      link: '/management/access-control/rules',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'rules',
                      ],
                      title: 'Rules',
                    },
                    rules: {
                      path: ':id',
                      link: '/management/access-control/rules/:id',
                      title: 'Rule',
                      getLink: (params?: { id?: number | string }) =>
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
                      path: '',
                      link: '/management/access-control/polices',
                      getLink: () => [
                        '',
                        'management',
                        'access-control',
                        'polices',
                      ],
                      title: 'Polices',
                    },
                    polices: {
                      path: ':id',
                      link: '/management/access-control/polices/:id',
                      title: 'Policy',
                      getLink: (params?: { id?: number | string }) =>
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
          },
        },
      },
    },
  },
};
