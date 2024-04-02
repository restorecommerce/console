import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';

@Component({
  selector: 'rc-crud-create',
  template: `
    <div class="row">
      <div class="flex-12 mb-4">
        <vcl-jss-form
          autocomplete="off"
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

  @Input({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create!: (data: any) => void;

  @ViewChild('createForm')
  createForm!: JssFormComponent;

  onAction(_: string): void {
    this.createForm.form.resetForm(this.createForm.defaultValue);
  }

  onSubmit(): void {
    if (this.createForm.form.invalid || this.createForm.form.pristine) {
      return;
    }

    this.create({
      items: [this.createForm.form.value],
      mode: ModeType.Create,
    });
  }
}
