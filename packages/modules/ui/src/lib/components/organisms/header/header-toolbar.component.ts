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
import { AccountFacade, OrganizationContextFacade } from '@console-core/state';

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

  searchTerm = '';

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
    organizations: this.organizationContextFacade.all$,
    selectedOrganization: this.organizationContextFacade.selected$,
    // leafOrganization: this.organizationFacade.globalOrganizationLeaf$,
    // selectedParent: this.organizationFacade.globalOrganization$,
  });

  constructor(
    private readonly router: Router,
    private readonly accountFacade: AccountFacade,
    private readonly organizationContextFacade: OrganizationContextFacade
  ) {}

  ngOnInit(): void {
    this.organizationContextFacade.read({});
  }

  resetGlobalSelectOrganization(event: Event) {
    // this.organizationFacade.resetSelectedGlobalOrganization();
    event.stopPropagation();
  }

  lastSelectedGlobalOrganization(event: Event) {
    // this.organizationFacade.lastSelectedGlobalOrganization();
    event.stopPropagation();
  }

  onSelectOrganization(id: string): void {
    this.organizationContextFacade.setSelectedOrganizationId(id);
  }

  cancelSelection(): void {
    // this.organizationFacade.cancelSelection();
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
