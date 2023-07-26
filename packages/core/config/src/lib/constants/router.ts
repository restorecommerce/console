import { IRouter } from '@console-core/types';

export const ROUTER: Readonly<IRouter> = {
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
        },
        auth: {
          path: 'auth',
          link: '/auth',
          getLink: () => ['', 'auth'],
          children: {
            signIn: {
              path: 'sign-in',
              link: '/auth/sign-in',
              getLink: () => ['', 'auth', 'sign-in'],
            },
            signUp: {
              path: 'sign-up',
              link: '/auth/sign-up',
              getLink: () => ['', 'auth', 'sign-up'],
            },
            signOut: {
              path: 'sign-out',
              link: '/auth/sign-out',
              getLink: () => ['', 'auth', 'sign-out'],
            },
            passwordRecovery: {
              path: 'password-recovery',
              link: '/auth/password-recovery',
              getLink: () => ['', 'auth', 'password-recovery'],
            },
            activation: {
              path: 'activation',
              link: '/auth/activation',
              getLink: () => ['', 'auth', 'activation'],
            },
            confirmEmail: {
              path: 'confirm-email',
              link: '/auth/confirm-email',
              getLink: () => ['', 'auth', 'confirm-email'],
            },
          },
        },
        layout: {
          path: 'layout',
          link: '/layout',
          getLink: () => ['', 'layout'],
        },
        overflow: {
          path: 'overflow',
          link: '/overflow',
          getLink: () => ['', 'overflow'],
        },
        management: {
          path: 'management',
          link: '/management',
          getLink: () => ['', 'management'],
          children: {
            iam: {
              path: 'iam',
              link: '/management/iam',
              getLink: () => ['', 'management', 'iam'],
              children: {
                index: {
                  path: '',
                  link: '/management/iam',
                  getLink: () => ['', 'management', 'iam'],
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
