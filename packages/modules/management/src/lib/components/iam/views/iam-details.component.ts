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

import { UserService } from '@console-core/state';
import {
  IOrganization,
  IRole,
  IRoleAssociationScopingInstance,
  IUser,
} from '@console-core/types';

import { IamRoleAssociationModalComponent } from '../role-association-modal.component';

@Component({
  selector: 'app-module-management-iam-details',
  templateUrl: './iam-details.component.html',
  standalone: false,
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
}
