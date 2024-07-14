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
  selector: 'rc-crud-edit',
  template: `
    <div class="row">
      <div class="flex-12">
        <vcl-jss-form
          autocomplete="off"
          ngDefaultControl
          #editForm="vclJssForm"
          [schema]="schema"
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
  schema!: VCLFormFieldSchemaRoot;

  @Input({ required: true })
  id!: string;

  @Input({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update!: (data: any) => void;

  @ViewChild('editForm')
  editForm!: JssFormComponent;

  @Output() actionEvent = new EventEmitter<string>();

  onAction(action: string): void {
    this.actionEvent.emit(action);
    this.editForm.form.resetForm(this.editForm.defaultValue);
  }

  onSubmit(): void {
    if (this.editForm.form.invalid || this.editForm.form.pristine) {
      return;
    }

    this.update({
      items: [
        {
          id: this.id,
          ...this.editForm.form.value,
        },
      ],
      mode: ModeType.Update,
    });
  }
}
