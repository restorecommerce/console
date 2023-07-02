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
                address: {
                  name: 'MAIN_MANAGEMENT_ADDRESS_ROUTE',
                  path: 'addresses/:id',
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
                contactPoint: {
                  name: 'MAIN_MANAGEMENT_CONTACT_POINT_ROUTE',
                  path: 'contact-points/:id',
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
                contract: {
                  name: 'MAIN_MANAGEMENT_CONTRACT_ROUTE',
                  path: 'contracts/:id',
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
                command: {
                  name: 'MAIN_MANAGEMENT_COMMAND_ROUTE',
                  path: 'commands/:id',
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
                location: {
                  name: 'MAIN_MANAGEMENT_LOCATION_ROUTE',
                  path: 'locations/:id',
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
                country: {
                  name: 'MAIN_MANAGEMENT_COUNTRY_ROUTE',
                  path: 'countries/:id',
                  link: '/management/countries/:id',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'countries', params.id]
                      : ['', 'management', 'countries'],
                },
              },
            },
            teams: {
              name: 'MAIN_MANAGEMENT_TEAMS_ROUTE',
              path: 'teams',
              link: '/management/teams',
              getLink: () => ['', 'management', 'teams'],
              children: {
                team: {
                  name: 'MAIN_MANAGEMENT_TEAM_ROUTE',
                  path: 'teams/:id',
                  link: '/management/teams/:id',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'teams', params.id]
                      : ['', 'management', 'teams'],
                },
              },
            },
            roles: {
              name: 'MAIN_MANAGEMENT_ROLES_ROUTE',
              path: 'roles',
              link: '/management/roles',
              getLink: () => ['', 'management', 'roles'],
              children: {
                role: {
                  name: 'MAIN_MANAGEMENT_ROLE_ROUTE',
                  path: 'roles/:id',
                  link: '/management/roles/:id',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'roles', params.id]
                      : ['', 'management', 'roles'],
                },
              },
            },
            rules: {
              name: 'MAIN_MANAGEMENT_RULES_ROUTE',
              path: 'rules',
              link: '/management/rules',
              getLink: () => ['', 'management', 'rules'],
              children: {
                rule: {
                  name: 'MAIN_MANAGEMENT_RULE_ROUTE',
                  path: 'rules/:id',
                  link: '/management/rules/:id',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'rules', params.id]
                      : ['', 'management', 'rules'],
                },
              },
            },
            polices: {
              name: 'MAIN_MANAGEMENT_POLICIES_ROUTE',
              path: 'policies',
              link: '/management/policies',
              getLink: () => ['', 'management', 'policies'],
              children: {
                policy: {
                  name: 'MAIN_MANAGEMENT_POLICY_ROUTE',
                  path: 'policies/:id',
                  link: '/management/policies/:id',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'policies', params.id]
                      : ['', 'management', 'policies'],
                },
              },
            },
          },
        },
      },
    },
  },
};
