import { Pipe, PipeTransform } from '@angular/core';

import { IMeta } from '@console-core/types';

//  TODO Fix this pipe! -> Unlogged fresh users should indicate that
// they have not logged in.
@Pipe({
  name: 'appendLastLogin',
  standalone: false,
})
export class AppendLastLoginPipe implements PipeTransform {
  transform(meta: IMeta, lastAccess: string): IMeta & { lastLogin: string } {
    return {
      ...meta,
      lastLogin: lastAccess,
    };
  }
}
