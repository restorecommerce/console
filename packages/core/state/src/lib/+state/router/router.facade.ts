import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, startWith } from 'rxjs/operators';

import * as routerSelectors from './router.selectors';

@Injectable()
export class RouterFacade {
  // Selectors
  data$ = this.store.select(routerSelectors.selectData);
  params$ = this.store.select(routerSelectors.selectParams);
  queryParams$ = this.store.select(routerSelectors.selectQueryParams);
  url$ = this.store.select(routerSelectors.selectUrl);
  eventsNavigationEnd$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event): event is NavigationEnd => event instanceof NavigationEnd),
    startWith(this.router.url) // Emit the current route immediately
  );

  // Actions
  navigate = (url: (string | number)[]) => this.router.navigate(url);
  navigateByUrl = (url: string) => this.router.navigateByUrl(url);

  constructor(private readonly router: Router, private readonly store: Store) {}
}
