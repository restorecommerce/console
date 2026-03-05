import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  OrganizationListReadGQL,
  IoRestorecommerceOrganizationOrganization,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class OrganizationRepository {
  private readonly organizationListReadGQL = inject(OrganizationListReadGQL);

  list(): Observable<IoRestorecommerceOrganizationOrganization[]> {
    return this.organizationListReadGQL
      .fetch({
        input: {},
      })
      .pipe(
        map((result) => {
          const items =
            result.data?.master_data?.organization?.Read?.details?.items;

          if (!items) {
            throw new Error('Organization list response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('Organization list item payload is missing');
            }

            return item.payload as IoRestorecommerceOrganizationOrganization;
          });
        })
      );
  }
}
