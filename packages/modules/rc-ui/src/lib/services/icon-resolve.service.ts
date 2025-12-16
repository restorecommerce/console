import { Injectable } from '@angular/core';

import { IconAliasResolverServiceBase } from '@vcl/ng-vcl';

export const MDI_ALIAS_MAP = {
  search: 'mdi mdi-magnify',
  menu: 'mdi mdi-menu mdi-36px',
};

export const FA_ALIAS_MAP = {
  search: 'fa fa-search',
  menu: 'fa fa-menu fa-36px',
};

@Injectable()
export class RcMdiIconResolverService extends IconAliasResolverServiceBase {
  constructor() {
    super('rc', MDI_ALIAS_MAP);
  }
}

@Injectable()
export class RcFaIconResolverService extends IconAliasResolverServiceBase {
  constructor() {
    super('rc', FA_ALIAS_MAP);
  }
}
