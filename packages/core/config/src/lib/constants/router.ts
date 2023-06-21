import { IRouter } from '@console-core/types';

export const ROUTER: Readonly<IRouter> = {
  pages: {
    public: {
      name: 'PUBLIC_ROUTE',
      path: '',
      link: '/',
      getLink: () => [''],
      children: {
        auth: {
          name: 'PUBLIC_AUTH_ROUTE',
          path: 'auth',
          link: '/auth',
          getLink: () => ['', 'auth'],
          children: {
            signIn: {
              name: 'PUBLIC_AUTH_SIGN_IN_ROUTE',
              path: 'sign-in',
              link: '/auth/sign-in',
              getLink: () => ['', 'auth', 'sign-in'],
            },
            signUp: {
              name: 'PUBLIC_AUTH_SIGN_UP_ROUTE',
              path: 'sign-up',
              link: '/auth/sign-up',
              getLink: () => ['', 'auth', 'sign-up'],
            },
            passwordRecovery: {
              name: 'PUBLIC_AUTH_PASSWORD_RECOVERY_ROUTE',
              path: 'password-recovery',
              link: '/auth/password-recovery',
              getLink: () => ['', 'auth', 'password-recovery'],
            },
            activation: {
              name: 'PUBLIC_AUTH_ACTIVATION_ROUTE',
              path: 'activation',
              link: '/auth/activation',
              getLink: () => ['', 'auth', 'activation'],
            },
            confirmEmail: {
              name: 'PUBLIC_AUTH_CONFIRM_EMAIL_ROUTE',
              path: 'confirm-email',
              link: '/auth/confirm-email',
              getLink: () => ['', 'auth', 'confirm-email'],
            },
          },
        },
      },
    },
    private: {
      name: 'PRIVATE_ROUTE',
      path: '',
      link: '/',
      getLink: () => [''],
      children: {
        home: {
          name: 'PRIVATE_HOME_ROUTE',
          path: '',
          link: '/',
          getLink: () => [''],
        },
        layout: {
          name: 'PRIVATE_LAYOUT_ROUTE',
          path: 'layout',
          link: '/layout',
          getLink: () => ['', 'layout'],
        },
        overflow: {
          name: 'PRIVATE_OVERFLOW_ROUTE',
          path: 'overflow',
          link: '/overflow',
          getLink: () => ['', 'overflow'],
        },
        management: {
          name: 'PRIVATE_MANAGEMENT_ROUTE',
          path: 'management',
          link: '/management',
          getLink: () => ['', 'management'],
          children: {
            addresses: {
              name: 'PRIVATE_MANAGEMENT_ADDRESSES_ROUTE',
              path: 'addresses',
              link: '/management/addresses',
              getLink: () => ['', 'management', 'addresses'],
              children: {
                address: {
                  name: 'PRIVATE_MANAGEMENT_ADDRESS_ROUTE',
                  path: 'addresses/:id',
                  link: '/management/addresses/:id',
                  getLink: (params?: { id?: number | string }) =>
                    params?.id
                      ? ['', 'management', 'addresses', params.id]
                      : ['', 'management', 'addresses'],
                },
              },
            },
            locations: {
              name: 'PRIVATE_MANAGEMENT_LOCATIONS_ROUTE',
              path: 'locations',
              link: '/management/locations',
              getLink: () => ['', 'management', 'locations'],
              children: {
                location: {
                  name: 'PRIVATE_MANAGEMENT_LOCATION_ROUTE',
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
              name: 'PRIVATE_MANAGEMENT_COUNTRIES_ROUTE',
              path: 'countries',
              link: '/management/countries',
              getLink: () => ['', 'management', 'countries'],
              children: {
                country: {
                  name: 'PRIVATE_MANAGEMENT_COUNTRY_ROUTE',
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
              name: 'PRIVATE_MANAGEMENT_TEAMS_ROUTE',
              path: 'teams',
              link: '/management/teams',
              getLink: () => ['', 'management', 'teams'],
              children: {
                team: {
                  name: 'PRIVATE_MANAGEMENT_TEAM_ROUTE',
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
              name: 'PRIVATE_MANAGEMENT_ROLES_ROUTE',
              path: 'roles',
              link: '/management/roles',
              getLink: () => ['', 'management', 'roles'],
              children: {
                role: {
                  name: 'PRIVATE_MANAGEMENT_ROLE_ROUTE',
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
              name: 'PRIVATE_MANAGEMENT_RULES_ROUTE',
              path: 'rules',
              link: '/management/rules',
              getLink: () => ['', 'management', 'rules'],
              children: {
                rule: {
                  name: 'PRIVATE_MANAGEMENT_RULE_ROUTE',
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
              name: 'PRIVATE_MANAGEMENT_POLICIES_ROUTE',
              path: 'policies',
              link: '/management/policies',
              getLink: () => ['', 'management', 'policies'],
              children: {
                policy: {
                  name: 'PRIVATE_MANAGEMENT_POLICY_ROUTE',
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
        user: {
          name: 'PRIVATE_USER_ROUTE',
          path: 'user',
          link: '/user',
          getLink: () => ['', 'user'],
          children: {
            profile: {
              name: 'PRIVATE_USER_PROFILE_ROUTE',
              path: 'profile',
              link: '/user/profile',
              getLink: () => ['', 'user', 'profile'],
            },
            settings: {
              name: 'PRIVATE_USER_SETTINGS_ROUTE',
              path: 'settings',
              link: '/user/settings',
              getLink: () => ['', 'user', 'settings'],
            },
          },
        },
      },
    },
  },
};
