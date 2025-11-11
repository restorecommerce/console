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
  IAttribute,
} from '@console-core/types';

@Component({
  selector: 'app-module-management-iam-details',
  templateUrl: './iam-details.component.html',
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

  roleMenuItems = [
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete', danger: true },
  ];

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

  onRoleMenu(option: string) {
    console.log('Option:', option);
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
