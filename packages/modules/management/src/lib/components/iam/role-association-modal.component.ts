import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import {
  ComponentLayerRef,
  JssFormComponent,
  VCLFormFieldSchemaRoot,
} from '@vcl/ng-vcl';

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
      <div class="row">
        <div class="flex-12">
          <vcl-jss-form
            autocomplete="off"
            ngDefaultControl
            #roleAssociationsForm="vclJssForm"
            [schema]="layer.data.roleAssociationsSchema"
            (formAction)="onAction($event)"
            (formSubmit)="onSubmit()"
          />
          <app-role-association-form />
        </div>
      </div>
    </vcl-panel-dialog>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamRoleAssociationModalComponent {
  @ViewChild('roleAssociationsForm')
  roleAssociationsForm!: JssFormComponent;

  constructor(
    public layer: ComponentLayerRef<{
      title: string;
      roleAssociationsSchema: VCLFormFieldSchemaRoot;
    }>
  ) {}

  onAction(action: string): void {
    if ('close' === action) {
      this.layer.close();
    }
  }

  onSubmit(): void {
    if (
      this.roleAssociationsForm.form?.invalid ||
      this.roleAssociationsForm.form?.pristine
    ) {
      return;
    }

    const roleAssociations: { role: string; organization: string }[] =
      this.roleAssociationsForm.form?.value.roleAssociationsArray;

    this.close(roleAssociations);
  }

  close(value?: { role: string; organization: string }[]) {
    this.layer.close({
      value,
    });
  }
}
