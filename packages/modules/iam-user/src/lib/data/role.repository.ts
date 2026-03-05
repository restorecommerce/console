import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  RoleListReadGQL,
  IoRestorecommerceRoleRole,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class RoleRepository {
  private readonly roleListReadGQL = inject(RoleListReadGQL);

  list(): Observable<IoRestorecommerceRoleRole[]> {
    return this.roleListReadGQL
      .fetch({
        input: {},
      })
      .pipe(
        map((result) => {
          const items = result.data?.identity?.role?.Read?.details?.items;

          if (!items) {
            throw new Error('Role list response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('Role list item payload is missing');
            }

            return item.payload as IoRestorecommerceRoleRole;
          });
        })
      );
  }
}
