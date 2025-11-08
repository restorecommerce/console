import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';

import { DATE } from '@console-core/config';
import { UserService } from '@console-core/state';
import {
  IOrganization,
  IRole,
  IRoleAssociationScopingInstance,
  IUser,
} from '@console-core/types';

@Component({
  selector: 'app-module-management-iam-details',
  templateUrl: './iam-details.component.html',
  styles: [
    `
      .token-template {
        border: 1px solid #e8e8e8;
      }

      .token-toggler {
        cursor: pointer;
      }
    `,
  ],
  standalone: false,
})
export class IamDetailsComponent implements OnInit, OnChanges {
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

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.updateRoleScopingInstances();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vm']) {
      this.updateRoleScopingInstances();
    }
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
