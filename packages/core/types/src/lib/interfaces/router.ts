import {
  TRouterQueryParams,
  TRouterParams,
  TRouterLink,
} from '../types/router';

export interface IRouterItem {
  path: string;
  link: string;
  title: string;
  getLink: (params?: {
    id?: number | string;
    identifier?: string;
    code?: string;
    slug?: string;
  }) => TRouterLink;
  params?: TRouterParams;
  queryParams?: TRouterQueryParams;
  children?: Record<string, IRouterItem>;
}

export interface IRouterConstant {
  pages: {
    main: {
      path: string;
      link: string;
      getLink: () => TRouterLink;
      children: {
        home: IRouterItem;
        activateAccount: IRouterItem;
        confirmEmailChange: IRouterItem;
        confirmPasswordChange: IRouterItem;
        auth: {
          path: string;
          link: string;
          title: string;
          getLink: () => TRouterLink;
          children: {
            signUp: IRouterItem;
            activation: IRouterItem;
            signIn: IRouterItem;
            signOut: IRouterItem;
            passwordRecovery: IRouterItem;
            confirmPassword: IRouterItem;
          };
        };
        account: {
          path: string;
          link: string;
          title: string;
          getLink: () => TRouterLink;
          children: {
            index: IRouterItem;
            confirmEmail: IRouterItem;
            profile: IRouterItem;
            preferences: IRouterItem;
          };
        };
        layout: IRouterItem;
        overflow: IRouterItem;
        management: {
          path: string;
          link: string;
          title: string;
          getLink: () => TRouterLink;
          children: {
            index: IRouterItem;
            iam: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                iam: IRouterItem;
              };
            };
            addresses: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                addresses: IRouterItem;
              };
            };
            locations: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                locations: IRouterItem;
              };
            };
            countries: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                create: IRouterItem;
                view: IRouterItem;
                edit: IRouterItem;
              };
            };
            contactPoints: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                contactPoints: IRouterItem;
              };
            };
            contracts: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                contracts: IRouterItem;
              };
            };
            commands: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                commands: IRouterItem;
              };
            };
            accessControl: {
              path: string;
              link: string;
              title: string;
              getLink: () => TRouterLink;
              children: {
                index: IRouterItem;
                teams: {
                  path: string;
                  link: string;
                  title: string;
                  getLink: () => TRouterLink;
                  children: {
                    index: IRouterItem;
                    teams: IRouterItem;
                  };
                };
                roles: {
                  path: string;
                  link: string;
                  title: string;
                  getLink: () => TRouterLink;
                  children: {
                    index: IRouterItem;
                    roles: IRouterItem;
                  };
                };
                rules: {
                  path: string;
                  link: string;
                  title: string;
                  getLink: () => TRouterLink;
                  children: {
                    index: IRouterItem;
                    rules: IRouterItem;
                  };
                };
                polices: {
                  path: string;
                  link: string;
                  title: string;
                  getLink: () => TRouterLink;
                  children: {
                    index: IRouterItem;
                    polices: IRouterItem;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}
