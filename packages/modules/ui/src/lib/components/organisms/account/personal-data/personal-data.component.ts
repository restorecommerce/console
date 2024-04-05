import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';
import { AccountFacade } from '@console-core/state';
import { IUser } from '@console-core/types';

@Component({
  selector: 'rc-account-personal-data',
  templateUrl: './personal-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPersonalDataComponent {
  @Input({ required: true })
  user!: IUser | null;

  @Input({ required: true })
  personalFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('personalForm')
  personalForm!: JssFormComponent;

  constructor(private readonly accountFacade: AccountFacade) {}

  onAction(_: string): void {
    this.personalForm.form.resetForm(this.personalForm.defaultValue);
  }

  onSubmit(): void {
    if (this.personalForm.form.invalid || this.personalForm.form.pristine) {
      return;
    }

    this.accountFacade.userMutateRequest({
      items: [
        {
          id: this.user?.id,
          ...this.personalForm.form.value,
        },
      ],
      mode: ModeType.Update,
    });
  }
}
