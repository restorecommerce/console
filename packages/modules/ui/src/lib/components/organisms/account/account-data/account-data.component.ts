import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-account-account-data',
  templateUrl: './account-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcAccountDataComponent {
  @Input({ required: true })
  emailFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('emailForm')
  emailForm!: JssFormComponent;

  @Input({ required: true })
  passwordFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('passwordForm')
  passwordForm!: JssFormComponent;

  onChangeEmailForm() {
    console.log(this.emailForm.form.value);
  }

  onChangePasswordForm() {
    console.log(this.passwordForm.form.value);
  }
}
