import { ConnectedPosition } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { LayerRef } from '@vcl/ng-vcl';

import { DATE } from '@console-core/config';
import { IUser } from '@console-core/types';

@Component({
  selector: 'app-user-tokens-table',
  templateUrl: './tokens-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class TokensTableComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) scope!: string;

  DATE = DATE;

  roleAssociationLayer!: LayerRef;

  roleMenuItems = [
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete', danger: true },
  ];

  positions: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
  ];
}
