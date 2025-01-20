import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  ILocale,
  IRoleAssociationScopingInstance,
  ITimezone,
} from '@console-core/types';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class UserCreationFormComponent {
  @Input() schema!: FormGroup;
  @Input() options: {
    locales: ILocale[];
    timezones: ITimezone[];
    uniqueRoleAssociationsScopingInstances: IRoleAssociationScopingInstance[];
  } = {
    locales: [],
    timezones: [],
    uniqueRoleAssociationsScopingInstances: [],
  };

  addRoleAssociations() {
    // TODO
  }
}
