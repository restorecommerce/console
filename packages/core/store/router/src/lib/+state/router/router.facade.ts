import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as routerSelectors from './router.selectors';

@Injectable()
export class RouterFacade {
  // Selectors
  data$ = this.store.select(routerSelectors.selectData);
  params$ = this.store.select(routerSelectors.selectParams);
  queryParams$ = this.store.select(routerSelectors.selectQueryParams);
  url$ = this.store.select(routerSelectors.selectUrl);

  // Actions
  navigate = (url: (string | number)[]) => this.router.navigate(url);
  navigateByUrl = (url: string) => this.router.navigateByUrl(url);

  constructor(private readonly store: Store, private readonly router: Router) {}
}
