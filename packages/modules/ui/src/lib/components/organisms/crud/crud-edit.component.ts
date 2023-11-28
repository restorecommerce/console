import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-crud-edit',
  template: `
    <div class="row">
      <div class="flex-12 mb-4">
        <vcl-jss-form
          ngDefaultControl
          #editForm="vclJssForm"
          [schema]="editFormSchema"
          (formAction)="onAction($event)"
          (formSubmit)="onSubmit()"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCrudEditComponent {
  @Input({ required: true })
  editFormSchema!: VCLFormFieldSchemaRoot;

  @Input()
  isRequesting = false;

  @ViewChild('editForm')
  editForm!: JssFormComponent;

  onAction(_: string): void {
    this.editForm.form.resetForm(this.editForm.defaultValue);
  }

  onSubmit(): void {
    console.log('onEditForm', this.editForm.form.value);
  }
}
