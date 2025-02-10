import { Pipe, PipeTransform } from '@angular/core';

import { IRoleAssociationScopingInstance } from '@console-core/types';

@Pipe({
  name: 'listScopingInstanceNames',
  standalone: false,
  pure: true,
})
export class ListScopingInstanceNamesPipe implements PipeTransform {
  transform(rolesScopingInstances: IRoleAssociationScopingInstance): string {
    return (
      rolesScopingInstances.scopingInstances?.map((inst) => inst.name) || []
    ).join(', ');
  }
}
