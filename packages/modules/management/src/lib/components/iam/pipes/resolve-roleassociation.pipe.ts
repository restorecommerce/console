import { Pipe, PipeTransform } from '@angular/core';

import { TScopingInstance } from '@console-core/types';

@Pipe({
  name: 'resolveRoleAssociationKey',
  standalone: false,
  pure: true,
})
export class ResolveRoleAssociationKeyPipe implements PipeTransform {
  transform(roleId: string, rolesScopingInstance: TScopingInstance): string {
    return `${roleId}|${rolesScopingInstance.instanceType}|${rolesScopingInstance.instance.id}`;
  }
}
