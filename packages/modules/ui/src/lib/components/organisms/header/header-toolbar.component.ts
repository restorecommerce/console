import { ConnectedPosition } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';

import { ROUTER } from '@console-core/config';
import { AccountFacade, OrganizationFacade } from '@console-core/state';

@Component({
  selector: 'rc-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcHeaderToolbarComponent implements OnInit {
  ROUTER = ROUTER;

  rightOrientedPositions: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
  ];

  @HostBinding('class.row')
  _hostClasses = true;

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
    organizations: this.organizationFacade.parentsAll$,
    globalOrganization: this.organizationFacade.globalOrganization$,
  });

  constructor(
    private readonly router: Router,
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

  onAccountItemSelected(value: string) {
    switch (value) {
      case 'profile':
        this.router.navigate([
          ROUTER.pages.main.children.account.children.profile.link,
        ]);
        break;
      case 'preferences':
        this.router.navigate([
          ROUTER.pages.main.children.account.children.preferences.link,
        ]);
        break;
      case 'sign-out':
        this.router.navigate([
          ROUTER.pages.main.children.auth.children.signOut.link,
        ]);
        break;
    }
  }
}
