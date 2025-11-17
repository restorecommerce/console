import { ConnectedPosition } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SubSink } from 'subsink';

import { AlertService, AlertType, LayerRef, LayerService } from '@vcl/ng-vcl';

import { IamFacade } from '@console-core/state';
import {
  EModeType,
  IAttribute,
  IRoleAssociation,
  IUser,
} from '@console-core/types';

import { IamRoleAssociationModalComponent } from '../role-association-modal.component';
import {
  buildDeleteMessage,
  filterAssociationsOut,
  replaceAtIndex,
} from '../utils';

@Component({
  selector: 'app-user-role-associations-table',
  templateUrl: './role-associations-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  styles: [
    `
      .role-association-row {
        td {
          vertical-align: text-top;
        }
      }
    `,
  ],
})
export class RolesAssociationsTableComponent implements OnInit {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) scope!: string;

  editIndex: number | null = null;
  private readonly subscriptions = new SubSink();

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

  constructor(
    private readonly layerService: LayerService,
    private readonly alertService: AlertService,
    private readonly iamFacade: IamFacade
  ) {}

  ngOnInit(): void {
    this.roleAssociationLayer = this.layerService.create(
      IamRoleAssociationModalComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  onRoleAssociationMenu(option: string, role: IRoleAssociation, idx: number) {
    if (option === 'edit') {
      this.openRoleAssociationComponent(role, idx);
    } else if (option === 'delete') {
      this.onDeleteRoleAssociation(role);
    }
  }

  onAddRoleAssociation() {
    this.roleAssociationLayer
      .open({
        data: {
          title: 'Assign Role',
        },
      })
      .subscribe((result: { value: IRoleAssociation[] }) => {
        if (!result.value) {
          return;
        }

        const updatedAssoc = result.value[0];
        const current = (this.user.roleAssociations ??
          []) as IRoleAssociation[];

        const roleAssociations = [...current, updatedAssoc];

        this.iamFacade.update({
          items: [
            {
              id: this.user.id,
              roleAssociations,
            },
          ],
          scope: this.scope,
          mode: EModeType.Update,
        });
      });
  }

  private openRoleAssociationComponent(role: IRoleAssociation, idx: number) {
    this.editIndex = idx;

    this.roleAssociationLayer
      .open({
        data: {
          title: 'Assign Role',
          role,
        },
      })
      .subscribe((result: { value: IRoleAssociation[] }) => {
        if (!result.value) {
          return;
        }

        const updatedAssoc = result.value[0];
        const current = (this.user.roleAssociations ??
          []) as IRoleAssociation[];

        const roleAssociations = replaceAtIndex(
          current,
          this.editIndex as number,
          updatedAssoc
        );

        this.iamFacade.update({
          items: [
            {
              id: this.user.id,
              roleAssociations,
            },
          ],
          scope: this.scope,
          mode: EModeType.Update,
        });
      });
  }

  private onDeleteRoleAssociation(role: IRoleAssociation) {
    const modifiedRoleAssociations = filterAssociationsOut(
      this.user.roleAssociations,
      role
    );

    const text = buildDeleteMessage(role);

    this.subscriptions.sink = this.alertService
      .open({
        text,
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'Cancel',
        cancelButtonClass: 'transparent',
        confirmButtonLabel: 'Delete role',
        confirmButtonClass: 'button',
      })
      .subscribe((result) => {
        if (!this.user?.id || result.action !== 'confirm') {
          return;
        }

        this.iamFacade.update({
          items: [
            {
              id: this.user.id,
              roleAssociations:
                modifiedRoleAssociations.length > 0
                  ? modifiedRoleAssociations
                  : null, // Backend bug when the array..
            },
          ],
          mode: EModeType.Update,
        });
      });
  }

  attrPairs(
    attrs?: IAttribute[] | null
  ): Array<{ path: string; id: string; value?: string | null }> {
    const out: Array<{ path: string; id: string; value?: string | null }> = [];
    const walk = (arr: IAttribute[] | null | undefined, prefix: string[]) => {
      if (!arr) return;
      for (const a of arr) {
        const path = [...prefix, a.id];
        out.push({ path: path.join(' ▸ '), id: a.id, value: a.value });
        if (a.attributes?.length) walk(a.attributes, path);
      }
    };
    walk(attrs, []);
    return out;
  }
}
