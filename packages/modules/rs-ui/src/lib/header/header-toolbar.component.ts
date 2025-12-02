import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  VCLButtonModule,
  VCLDataListModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLInputModule,
  VCLPopoverModule,
  VCLSelectListModule,
} from '@vcl/ng-vcl';

import { RsTranslatePipe } from '../i18n/translate.pipe';

import { RsHeaderOrganization, RsHeaderUser } from './header-toolbar.models';

@Component({
  selector: 'rs-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    VCLButtonModule,
    VCLPopoverModule,
    VCLDataListModule,
    VCLSelectListModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLInputModule,
    RsTranslatePipe,
  ],
})
export class RsHeaderToolbarComponent {
  /** User info for account menu */
  @Input() user: RsHeaderUser | null = null;

  /** All organizations to show in the dropdown */
  @Input() organizations: RsHeaderOrganization[] = [];

  /** Currently selected organization ID */
  @Input() selectedOrganizationId: string | null = null;

  /** Show/hide specific account menu entries */
  @Input() showProfile = true;
  @Input() showPreferences = true;
  @Input() showSignOut = true;

  /** Popover positions (you can override if needed) */
  @Input() rightOrientedPositions: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
  ];

  /** Emitted when an organization is selected */
  @Output() organizationSelected = new EventEmitter<string>();

  /** Emitted when an account action is chosen */
  @Output() accountAction = new EventEmitter<
    'profile' | 'preferences' | 'sign-out'
  >();

  /** Emitted when the search term changes */
  @Output() searchChange = new EventEmitter<string>();

  @HostBinding('class.row')
  hostRowClass = true;

  searchTerm = '';

  get selectedOrganization(): RsHeaderOrganization | undefined {
    return this.organizations.find((o) => o.id === this.selectedOrganizationId);
  }

  get filteredOrganizations(): RsHeaderOrganization[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.organizations;

    return this.organizations.filter((org) => {
      const name = org.name?.toLowerCase() ?? '';
      const desc = org.description?.toLowerCase() ?? '';
      return name.includes(term) || desc.includes(term);
    });
  }

  onSearchChange(term: string): void {
    this.searchChange.emit(term);
  }

  onSelectOrganization(id: string): void {
    this.organizationSelected.emit(id);
  }

  onAccountItemSelected(value: string): void {
    if (
      value === 'profile' ||
      value === 'preferences' ||
      value === 'sign-out'
    ) {
      this.accountAction.emit(value);
    }
  }
}
