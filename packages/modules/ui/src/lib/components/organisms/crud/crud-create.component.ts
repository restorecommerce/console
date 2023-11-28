import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-crud-create',
  template: `
    <div class="row">
      <div class="flex-12 mb-4">
        <vcl-jss-form
          ngDefaultControl
          #createForm="vclJssForm"
          [schema]="createFormSchema"
          (formAction)="onAction($event)"
          (formSubmit)="onSubmit()"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCrudCreateComponent {
  @Input({ required: true })
  createFormSchema!: VCLFormFieldSchemaRoot;

  @Input()
  isRequesting = false;

  @ViewChild('createForm')
  createForm!: JssFormComponent;

  onAction(_: string): void {
    this.createForm.form.resetForm(this.createForm.defaultValue);
  }

  onSubmit(): void {
    console.log('onCreateForm', this.createForm.form.value);
  }
}
