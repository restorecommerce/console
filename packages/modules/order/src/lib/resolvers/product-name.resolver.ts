// product-name.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

import { OrderFacade } from '@console-core/state';

@Injectable({ providedIn: 'root' })
export class ProductNameResolver implements Resolve<string> {
  constructor(private readonly orderFacade: OrderFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const productId = route.paramMap.get('id');
    return this.orderFacade.entities$.pipe(
      map((orderEntities) =>
        orderEntities && productId ? `${orderEntities[productId]?.id}` : ''
      )
    );
  }
}
