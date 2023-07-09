import { IRouter } from '@console-core/types';

export const ROUTER: Readonly<IRouter> = {
  pages: {
    main: {
      name: 'MAIN_ROUTE',
      path: '',
      link: '/',
      getLink: () => [''],
      children: {
        home: {
          name: 'MAIN_HOME_ROUTE',
          path: '',
          link: '/',
          getLink: () => ['', '/'],
        },
        auth: {
          name: 'MAIN_AUTH_ROUTE',
          path: 'auth',
          link: '/auth',
          getLink: () => ['', 'auth'],
          children: {
            signIn: {
              name: 'MAIN_AUTH_SIGN_IN_ROUTE',
              path: 'sign-in',
              link: '/auth/sign-in',
              getLink: () => ['', 'auth', 'sign-in'],
            },
            signUp: {
              name: 'MAIN_AUTH_SIGN_UP_ROUTE',
              path: 'sign-up',
              link: '/auth/sign-up',
              getLink: () => ['', 'auth', 'sign-up'],
            },
            passwordRecovery: {
              name: 'MAIN_AUTH_PASSWORD_RECOVERY_ROUTE',
              path: 'password-recovery',
              link: '/auth/password-recovery',
              getLink: () => ['', 'auth', 'password-recovery'],
            },
            activation: {
              name: 'MAIN_AUTH_ACTIVATION_ROUTE',
              path: 'activation',
              link: '/auth/activation',
              getLink: () => ['', 'auth', 'activation'],
            },
            confirmEmail: {
              name: 'MAIN_AUTH_CONFIRM_EMAIL_ROUTE',
              path: 'confirm-email',
              link: '/auth/confirm-email',
              getLink: () => ['', 'auth', 'confirm-email'],
            },
          },
        },
        layout: {
          name: 'MAIN_LAYOUT_ROUTE',
          path: 'layout',
          link: '/layout',
          getLink: () => ['', 'layout'],
        },
        overflow: {
          name: 'MAIN_OVERFLOW_ROUTE',
          path: 'overflow',
          link: '/overflow',
          getLink: () => ['', 'overflow'],
        },
        management: {
          name: 'MAIN_MANAGEMENT_ROUTE',
          path: 'management',
          link: '/management',
          getLink: () => ['', 'management'],
          children: {
            addresses: {
              name: 'MAIN_MANAGEMENT_ADDRESSES_ROUTE',
              path: 'addresses',
              link: '/management/addresses',
              getLink: () => ['', 'management', 'addresses'],
              children: {
                index: {
                  name: 'MAIN_MANAGEMENT_ADDRESSES_CHILDREN_INDEX_ROUTE',
                  path: '',
                  link: '/management/addresses',
                  getLink: () => ['', 'management', 'addresses'],
                },
                addresses: {
                  name: 'MAIN_MANAGEMENT_ADDRESSES_CHILDREN_ADDRESSES_ROUTE',
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
              name: 'MAIN_MANAGEMENT_CONTACT_POINTS_ROUTE',
              path: 'contact-points',
              link: '/management/contact-points',
              getLink: () => ['', 'management', 'contact-points'],
              children: {
                index: {
                  name: 'MAIN_MANAGEMENT_CONTACT_POINTS_CHILDREN_INDEX_ROUTE',
                  path: '',
                  link: '/management/contact-points',
                  getLink: () => ['', 'management', 'contact-points'],
                },
                contactPoints: {
                  name: 'MAIN_MANAGEMENT_CONTACT_POINTS_CHILDREN_CONTACT_POINTS_ROUTE',
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
              name: 'MAIN_MANAGEMENT_CONTRACTS_ROUTE',
              path: 'contracts',
              link: '/management/contracts',
              getLink: () => ['', 'management', 'contracts'],
              children: {
                index: {
                  name: 'MAIN_MANAGEMENT_CONTRACTS_CHILDREN_INDEX_ROUTE',
                  path: '',
                  link: '/management/contracts',
                  getLink: () => ['', 'management', 'contracts'],
                },
                contracts: {
                  name: 'MAIN_MANAGEMENT_CONTRACTS_CHILDREN_CONTRACTS_ROUTE',
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
              name: 'MAIN_MANAGEMENT_COMMANDS_ROUTE',
              path: 'commands',
              link: '/management/commands',
              getLink: () => ['', 'management', 'commands'],
              children: {
                index: {
                  name: 'MAIN_MANAGEMENT_COMMANDS_CHILDREN_INDEX_ROUTE',
                  path: '',
                  link: '/management/commands',
                  getLink: () => ['', 'management', 'commands'],
                },
                commands: {
                  name: 'MAIN_MANAGEMENT_COMMANDS_CHILDREN_COMMANDS_ROUTE',
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
              name: 'MAIN_MANAGEMENT_LOCATIONS_ROUTE',
              path: 'locations',
              link: '/management/locations',
              getLink: () => ['', 'management', 'locations'],
              children: {
                index: {
                  name: 'MAIN_MANAGEMENT_LOCATIONS_CHILDREN_INDEX_ROUTE',
                  path: '',
                  link: '/management/locations',
                  getLink: () => ['', 'management', 'locations'],
                },
                locations: {
                  name: 'MAIN_MANAGEMENT_LOCATIONS_CHILDREN_LOCATIONS_ROUTE',
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
              name: 'MAIN_MANAGEMENT_COUNTRIES_ROUTE',
              path: 'countries',
              link: '/management/countries',
              getLink: () => ['', 'management', 'countries'],
              children: {
                index: {
                  name: 'MAIN_MANAGEMENT_COUNTRIES_CHILDREN_INDEX_ROUTE',
                  path: '',
                  link: '/management/countries',
                  getLink: () => ['', 'management', 'countries'],
                },
                countries: {
                  name: 'MAIN_MANAGEMENT_COUNTRIES_CHILDREN_COUNTRIES_ROUTE',
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
              name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_ROUTE',
              path: 'access-control',
              link: '/management/access-control',
              getLink: () => ['', 'management', 'access-control'],
              children: {
                index: {
                  name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_CHILDREN_INDEX_ROUTE',
                  path: '',
                  link: '/management/access-control',
                  getLink: () => ['', 'management', 'access-control'],
                },
                teams: {
                  name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_TEAMS_ROUTE',
                  path: 'access-control/teams',
                  link: '/management/access-control/teams',
                  getLink: () => ['', 'management', 'access-control', 'teams'],
                  children: {
                    index: {
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_TEAMS_CHILDREN_INDEX_ROUTE',
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
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_TEAMS_CHILDREN_TEAMS_ROUTE',
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
                  name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_ROLES_ROUTE',
                  path: 'access-control/roles',
                  link: '/management/access-control/roles',
                  getLink: () => ['', 'management', 'access-control', 'roles'],
                  children: {
                    index: {
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_ROLES_CHILDREN_INDEX_ROUTE',
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
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_ROLES_CHILDREN_ROLES_ROUTE',
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
                  name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_RULES_ROUTE',
                  path: 'access-control/rules',
                  link: '/management/access-control/rules',
                  getLink: () => ['', 'management', 'access-control', 'rules'],
                  children: {
                    index: {
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_RULES_CHILDREN_INDEX_ROUTE',
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
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_RULES_CHILDREN_RULES_ROUTE',
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
                  name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_POLICES_ROUTE',
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
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_POLICES_CHILDREN_INDEX_ROUTE',
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
                      name: 'MAIN_MANAGEMENT_ACCESS_CONTROL_POLICES_CHILDREN_POLICES_ROUTE',
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
