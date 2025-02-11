import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-role-association-form',
  templateUrl: './role-association-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RoleAssociationFormComponent {}
