import { Component, Input } from '@angular/core';
import { Dictionary } from '@ngrx/entity';

import { IOrganization, IRole, IUser } from '@console-core/types';

@Component({
  selector: 'app-module-management-iam-details',
  templateUrl: './iam-details.component.html',
  standalone: false,
})
export class IamDetailsComponent {
  @Input({ required: true }) vm!: {
    id: string;
    user: IUser;
    organizationsHash: Dictionary<IOrganization>;
    rolesHash: Dictionary<IRole>;
    userHash: Dictionary<IUser>;
    scope: string;
  };
}
