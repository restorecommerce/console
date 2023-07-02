import {
  TRouterQueryParams,
  TRouterParams,
  TRouterLink,
} from '../types/router';

export interface IRouterItem {
  name: string;
  path: string;
  link: string;
  getLink: (params?: { id?: number | string; slug?: string }) => TRouterLink;
  params?: TRouterParams;
  queryParams?: TRouterQueryParams;
  children?: Record<string, IRouterItem>;
}

export interface IRouter {
  pages: {
    main: {
      name: string;
      path: string;
      link: string;
      getLink: () => TRouterLink;
      children: {
        home: IRouterItem;
        auth: {
          name: string;
          path: string;
          link: string;
          getLink: () => TRouterLink;
          children: {
            signIn: IRouterItem;
            signUp: IRouterItem;
            passwordRecovery: IRouterItem;
            activation: IRouterItem;
            confirmEmail: IRouterItem;
          };
        };
        layout: IRouterItem;
        overflow: IRouterItem;
        management: {
          name: string;
          path: string;
          link: string;
          getLink: () => TRouterLink;
          children: {
            addresses: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                address: IRouterItem;
              };
            };
            locations: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                location: IRouterItem;
              };
            };
            countries: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                country: IRouterItem;
              };
            };
            contactPoints: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                contactPoint: IRouterItem;
              };
            };
            contracts: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                contract: IRouterItem;
              };
            };
            commands: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                command: IRouterItem;
              };
            };
            teams: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                team: IRouterItem;
              };
            };
            roles: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                role: IRouterItem;
              };
            };
            rules: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                rule: IRouterItem;
              };
            };
            polices: {
              name: string;
              path: string;
              link: string;
              getLink: () => TRouterLink;
              children: {
                policy: IRouterItem;
              };
            };
          };
        };
      };
    };
  };
}
