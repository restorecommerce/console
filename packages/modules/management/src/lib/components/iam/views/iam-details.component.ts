import { ConnectedPosition } from '@angular/cdk/overlay';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { DATE } from '@console-core/config';
import { UserService } from '@console-core/state';
import {
  IOrganization,
  IRole,
  IRoleAssociationScopingInstance,
  IUser,
  IAttribute,
} from '@console-core/types';

import { IamRoleAssociationModalComponent } from '../role-association-modal.component';

@Component({
  selector: 'app-module-management-iam-details',
  templateUrl: './iam-details.component.html',
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
export class IamDetailsComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) vm!: {
    id: string;
    user: IUser;
    organizationsHash: Dictionary<IOrganization>;
    rolesHash: Dictionary<IRole>;
    userHash: Dictionary<IUser>;
    scope: string;
  };

  roleScopingInstances: IRoleAssociationScopingInstance[] = [];

  showTokens = false;

  DATE = DATE;

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

  roleAssociaionLayer!: LayerRef;

  constructor(
    private readonly userService: UserService,
    private layerService: LayerService
  ) {}

  ngOnInit(): void {
    this.updateRoleScopingInstances();

    this.roleAssociaionLayer = this.layerService.create(
      IamRoleAssociationModalComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vm']) {
      this.updateRoleScopingInstances();
    }
  }

  ngOnDestroy() {
    this.roleAssociaionLayer?.destroy();
  }

  private updateRoleScopingInstances(): void {
    this.roleScopingInstances =
      this.userService.getRoleAssociationsScopingInstances(
        this.vm.user.roleAssociations,
        this.vm.rolesHash,
        this.vm.organizationsHash,
        this.vm.userHash
      );
  }

  onRoleMenu(option: string) {
    console.log('Option:', option);
  }

  onRoleAssociationMenu(option: string) {
    if (option === 'edit') {
      this.openRoleAssociationComponent();
    } else if (option === 'delete') {
      console.log('***delete', option);
    }
  }

  private openRoleAssociationComponent() {
    this.roleAssociaionLayer
      .open({
        data: {},
      })
      .subscribe((result) => {
        console.log('Bar component result: ' + result?.value);
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
