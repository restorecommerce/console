import { Pipe, PipeTransform } from '@angular/core';

import { IMeta } from '@console-core/types';

@Pipe({
  name: 'appendLastLogin',
})
export class AppendLastLoginPipe implements PipeTransform {
  transform(meta: IMeta, lastAccess: string): IMeta & { lastLogin: string } {
    return {
      ...meta,
      lastLogin: lastAccess,
    };
  }
}
