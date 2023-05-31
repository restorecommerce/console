import {
  TRouterQueryParams,
  TRouterParams,
  TRouterLink,
} from '../types/router';

export interface IRouterItem {
  name: string;
  path: string;
  link: string;
  getLink: (params?: { id?: string; slug?: string }) => TRouterLink;
  params?: TRouterParams;
  queryParams?: TRouterQueryParams;
  children?: Record<string, IRouterItem>;
}

export interface IRouter {
  pages: {
    // public: {
    //   name: string;
    //   path: string;
    //   link: string;
    //   getLink: () => TRouterLink;
    //   children: {
    //     home: IRouterItem;
    //   };
    // };
    private: {
      name: string;
      path: string;
      link: string;
      getLink: () => TRouterLink;
      children: {
        home: IRouterItem;
        layout: IRouterItem;
        overflow: IRouterItem;
        drawer: {
          name: string;
          path: string;
          link: string;
          getLink: () => TRouterLink;
          children: {
            addresses: IRouterItem;
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