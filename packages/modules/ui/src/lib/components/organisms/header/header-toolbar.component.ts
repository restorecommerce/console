import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { combineLatest } from 'rxjs';

import { ROUTER } from '@console-core/config';
import { AccountFacade, OrganizationFacade } from '@console-core/state';

@Component({
  selector: 'rc-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcHeaderToolbarComponent implements OnInit {
  ROUTER = ROUTER;

  @HostBinding('class.row')
  _hostClasses = true;

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
    organizations: this.organizationFacade.parentsAll$,
    globalOrganization: this.organizationFacade.globalOrganization$,
  });

  constructor(
    private readonly accountFacade: AccountFacade,
    private readonly organizationFacade: OrganizationFacade
  ) {}

  ngOnInit(): void {
    this.organizationFacade.readParents({});
  }

  onClickGlobalOrganizationSelector(): void {
    this.organizationFacade.readParents({});
  }

  onSelectGlobalOrganization(id: string, currentId: string): void {
    if (id === currentId) {
      return;
    }
    this.organizationFacade.setSelectedGlobalOrganizationId(id);
  }

  onSearchOrganizations(str: string): void {
    // TODO: Implement search
    console.log('Search', str);
  }
}
