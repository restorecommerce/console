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
          getLink: () => ['', '/'],
          title: 'Home',
        },
        activateUser: {
          path: 'activate_user',
          link: '/activate_user',
          getLink: () => ['', 'activate_user'],
        },
        confirmPasswordChange: {
          path: 'confirm_password_change',
          link: '/confirm_password_change',
          getLink: () => ['', 'confirm_password_change'],
        },
        auth: {
          path: 'auth',
          link: '/auth',
          getLink: () => ['', 'auth'],
          children: {
            signUp: {
              path: 'sign-up',
              link: '/auth/sign-up',
              getLink: () => ['', 'auth', 'sign-up'],
              title: 'Sign Up',
            },
            activation: {
              path: 'activation/:identifier/:code',
              link: '/auth/activation/:identifier/:code',
              getLink: (params?: { identifier?: string; code?: string }) =>
                params?.identifier && params?.code
                  ? ['', 'auth', 'activation', params.identifier, params.code]
                  : ['', 'auth', 'activation'],
              title: 'Activation',
            },
            signIn: {
              path: 'sign-in',
              link: '/auth/sign-in',
              getLink: () => ['', 'auth', 'sign-in'],
              title: 'Sign In',
            },
            signOut: {
              path: 'sign-out',
              link: '/auth/sign-out',
              getLink: () => ['', 'auth', 'sign-out'],
              title: 'Sign Out',
            },
            emailRecovery: {
              path: 'email-recovery',
              link: '/auth/email-recovery',
              getLink: () => ['', 'auth', 'email-recovery'],
              title: 'Email Recovery',
            },
            confirmEmail: {
              path: 'confirm-email/:identifier/:code',
              link: '/auth/confirm-email/:identifier/:code',
              getLink: (params?: { identifier?: string; code?: string }) =>
                params?.identifier && params?.code
                  ? [
                      '',
                      'auth',
                      'confirm-email',
                      params.identifier,
                      params.code,
                    ]
                  : ['', 'auth', 'confirm-email'],
              title: 'Confirm Email',
            },
            passwordRecovery: {
              path: 'password-recovery',
              link: '/auth/password-recovery',
              getLink: () => ['', 'auth', 'password-recovery'],
              title: 'Password Recovery',
            },
            confirmPassword: {
              path: 'confirm-password/:identifier/:code',
              link: '/auth/confirm-password/:identifier/:code',
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
              title: 'Confirm Password',
            },
          },
        },
        account: {
          path: 'account',
          link: '/account',
          getLink: () => ['', 'account'],
          children: {
            index: {
              path: '',
              link: '/account',
              getLink: () => ['', 'account'],
              title: 'Account',
            },
            profile: {
              path: 'profile',
              link: '/account/profile',
              getLink: () => ['', 'account', 'profile'],
              title: 'Profile',
            },
            preferences: {
              path: 'preferences',
              link: '/account/preferences',
              getLink: () => ['', 'account', 'preferences'],
              title: 'Preferences',
            },
          },
        },
        layout: {
          path: 'layout',
          link: '/layout',
          getLink: () => ['', 'layout'],
          title: 'Layout',
        },
        overflow: {
          path: 'overflow',
          link: '/overflow',
          getLink: () => ['', 'overflow'],
          title: 'Overflow',
        },
        management: {
          path: 'management',
          link: '/management',
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
              getLink: () => ['', 'management', 'countries'],
              children: {
                index: {
                  path: '',
                  link: '/management/countries',
                  getLink: () => ['', 'management', 'countries'],
                  title: 'Countries',
                },
                countries: {
                  path: ':id',
                  link: '/management/countries/:id',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'countries', params.id]
                      : ['', 'management', 'countries'],
                },
              },
            },
            accessControl: {
              path: 'access-control',
              link: '/management/access-control',
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
