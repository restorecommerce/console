// product-name.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

import { ProductFacade } from '@console-core/state';

@Injectable({ providedIn: 'root' })
export class ProductNameResolver implements Resolve<string> {
  constructor(private readonly productFacade: ProductFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const productId = route.paramMap.get('id');
    return this.productFacade.entities$.pipe(
      map((productEntities) =>
        productEntities && productId
          ? `${productEntities[productId]?.product.name}`
          : ''
      )
    );
  }
}
