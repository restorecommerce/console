import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as routerSelectors from './router.selectors';

@Injectable()
export class RouterFacade {
  data$ = this.store.select(routerSelectors.selectData);
  params$ = this.store.select(routerSelectors.selectParams);
  queryParams$ = this.store.select(routerSelectors.selectQueryParams);
  url$ = this.store.select(routerSelectors.selectUrl);

  constructor(private readonly store: Store, private readonly router: Router) {}

  navigate(link: string | string[]): void {
    this.router.navigate(typeof link === 'string' ? [link] : link);
  }
}
