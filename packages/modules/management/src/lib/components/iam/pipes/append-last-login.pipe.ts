import { Pipe, PipeTransform } from '@angular/core';

import { IoRestorecommerceAuthTokens } from '@console-core/graphql';
import { IMeta } from '@console-core/types';

//  TODO Fix this pipe! -> Unlogged fresh users should indicate that
// they have not logged in.
@Pipe({
  name: 'appendLastLogin',
  standalone: false,
})
export class AppendLastLoginPipe implements PipeTransform {
  transform(
    meta: IMeta,
    tokens: IoRestorecommerceAuthTokens[]
  ): IMeta & { lastLogin: string } {
    const currentLastLogin = tokens
      .map((entry) => entry.lastLogin as string)
      .filter(Boolean)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .shift() as string;

    return {
      ...meta,
      lastLogin: currentLastLogin,
    };
  }
}
