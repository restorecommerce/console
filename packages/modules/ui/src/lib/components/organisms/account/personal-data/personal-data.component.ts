import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-account-personal-data',
  templateUrl: './personal-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPersonalDataComponent {
  @Input({ required: true })
  personalFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('personalForm')
  personalForm!: JssFormComponent;

  onSavePersonalForm() {
    console.log(this.personalForm.form.value);
  }
}
