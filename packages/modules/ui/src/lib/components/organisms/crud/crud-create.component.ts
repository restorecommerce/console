import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';

@Component({
  selector: 'rc-crud-create',
  template: `
    <div class="row">
      <div class="flex-12">
        <vcl-jss-form
          autocomplete="off"
          ngDefaultControl
          #createForm="vclJssForm"
          [schema]="schema"
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
  schema!: VCLFormFieldSchemaRoot;

  @Input({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create!: (data: any) => void;

  @ViewChild('createForm')
  createForm!: JssFormComponent;

  @Output() actionEvent = new EventEmitter<string>();

  onAction(action: string): void {
    this.actionEvent.emit(action);
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
