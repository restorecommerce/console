import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentLayerRef, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IRoleAssociation } from '@console-core/types';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-role-association',
  template: `
    <vcl-panel-dialog
      [showCloseButton]="true"
      (close)="close()"
      class="panel-dialog"
    >
      <vcl-panel-title>{{ layer.data.title }}</vcl-panel-title>
      <div>
        <app-role-association-form
          [role]="layer.data.role"
          (roleAssociationSubmit)="onSubmit($event)"
        />
      </div>
    </vcl-panel-dialog>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamRoleAssociationModalComponent {
  constructor(
    public layer: ComponentLayerRef<{
      title: string;
      role: IRoleAssociation;
      roleAssociationsSchema: VCLFormFieldSchemaRoot;
    }>
  ) {}

  onAction(action: string): void {
    if ('close' === action) {
      this.layer.close();
    }
  }

  onSubmit(roleAssociations: IRoleAssociation[]): void {
    this.close(roleAssociations);
  }

  close(value?: IRoleAssociation[]) {
    this.layer.close({
      value,
    });
  }
}
