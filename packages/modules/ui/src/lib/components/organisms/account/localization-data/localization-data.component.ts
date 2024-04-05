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
  selector: 'rc-account-localization-data',
  templateUrl: './localization-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcLocalizationDataComponent {
  @Input({ required: true })
  user!: IUser | null;

  @Input({ required: true })
  localizationFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('localizationForm')
  localizationForm!: JssFormComponent;

  constructor(private readonly accountFacade: AccountFacade) {}

  onAction(_: string): void {
    this.localizationForm.form.resetForm(this.localizationForm.defaultValue);
  }

  onSubmit(): void {
    if (
      this.localizationForm.form.invalid ||
      this.localizationForm.form.pristine
    ) {
      return;
    }
    this.accountFacade.userMutateRequest({
      items: [
        {
          id: this.user?.id,
          ...this.localizationForm.form.value,
        },
      ],
      mode: ModeType.Update,
    });
  }
}
