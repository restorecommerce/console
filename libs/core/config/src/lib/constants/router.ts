import { IRouter } from '@console/types';

export const ROUTER: Readonly<IRouter> = {
  pages: {
    // public: {
    //   name: 'PUBLIC_ROUTE',
    //   path: '',
    //   link: '/',
    //   getLink: () => [''],
    //   children: {
    //     home: {
    //       name: 'PUBLIC_HOME_ROUTE',
    //       path: '',
    //       link: '/',
    //       getLink: () => [''],
    //     },
    //   },
    // },
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
          getLink: () => ['layout'],
        },
        overflow: {
          name: 'PRIVATE_OVERFLOW_ROUTE',
          path: 'overflow',
          link: '/overflow',
          getLink: () => ['overflow'],
        },
        drawer: {
          name: 'PRIVATE_DRAWER_ROUTE',
          path: 'drawer-demo',
          link: '/drawer-demo',
          getLink: () => ['drawer-demo'],
          children: {
            addresses: {
              name: 'PRIVATE_DRAWER_ADDRESSES_ROUTE',
              path: 'addresses',
              link: '/drawer-demo/addresses',
              getLink: () => ['drawer-demo', 'addresses'],
            },
            locations: {
              name: 'PRIVATE_DRAWER_LOCATIONS_ROUTE',
              path: 'locations',
              link: '/drawer-demo/locations',
              getLink: () => ['drawer-demo', 'locations'],
              children: {
                location: {
                  name: 'PRIVATE_DRAWER_LOCATION_ROUTE',
                  path: 'locations/:id',
                  link: '/drawer-demo/locations/:id',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['drawer-demo', 'locations', params.id]
                      : ['drawer-demo', 'locations'],
                },
              },
            },
            countries: {
              name: 'PRIVATE_DRAWER_COUNTRIES_ROUTE',
              path: 'countries',
              link: '/drawer-demo/countries',
              getLink: () => ['drawer-demo', 'countries'],
              children: {
                country: {
                  name: 'PRIVATE_DRAWER_COUNTRY_ROUTE',
                  path: 'countries/:id',
                  link: '/drawer-demo/countries/:id',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['drawer-demo', 'countries', params.id]
                      : ['drawer-demo', 'countries'],
                },
              },
            },
            teams: {
              name: 'PRIVATE_DRAWER_TEAMS_ROUTE',
              path: 'teams',
              link: '/drawer-demo/teams',
              getLink: () => ['drawer-demo', 'teams'],
              children: {
                team: {
                  name: 'PRIVATE_DRAWER_TEAM_ROUTE',
                  path: 'teams/:id',
                  link: '/drawer-demo/teams/:id',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['drawer-demo', 'teams', params.id]
                      : ['drawer-demo', 'teams'],
                },
              },
            },
            roles: {
              name: 'PRIVATE_DRAWER_ROLES_ROUTE',
              path: 'roles',
              link: '/drawer-demo/roles',
              getLink: () => ['drawer-demo', 'roles'],
              children: {
                role: {
                  name: 'PRIVATE_DRAWER_ROLE_ROUTE',
                  path: 'roles/:id',
                  link: '/drawer-demo/roles/:id',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['drawer-demo', 'roles', params.id]
                      : ['drawer-demo', 'roles'],
                },
              },
            },
            rules: {
              name: 'PRIVATE_DRAWER_RULES_ROUTE',
              path: 'rules',
              link: '/drawer-demo/rules',
              getLink: () => ['drawer-demo', 'rules'],
              children: {
                rule: {
                  name: 'PRIVATE_DRAWER_RULE_ROUTE',
                  path: 'rules/:id',
                  link: '/drawer-demo/rules/:id',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['drawer-demo', 'rules', params.id]
                      : ['drawer-demo', 'rules'],
                },
              },
            },
            polices: {
              name: 'PRIVATE_DRAWER_POLICIES_ROUTE',
              path: 'policies',
              link: '/drawer-demo/policies',
              getLink: () => ['drawer-demo', 'policies'],
              children: {
                policy: {
                  name: 'PRIVATE_DRAWER_POLICY_ROUTE',
                  path: 'policies/:id',
                  link: '/drawer-demo/policies/:id',
                  getLink: (params?: { id?: string }) =>
                    params?.id
                      ? ['drawer-demo', 'policies', params.id]
                      : ['drawer-demo', 'policies'],
                },
              },
            },
          },
        },
      },
    },
  },
};
