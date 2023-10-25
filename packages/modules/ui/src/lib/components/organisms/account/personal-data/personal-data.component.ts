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

import { RcActiveFormService } from '../../../../services';

@Component({
  selector: 'rc-account-personal-data',
  templateUrl: './personal-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPersonalDataComponent {
  @Input({ required: true })
  user!: IUser | null;

  @Input({ required: true })
  isRequesting!: boolean;

  @Input({ required: true })
  personalFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('personalForm')
  personalForm!: JssFormComponent;

  activeFrom$ = this.activeFormService.active$;

  constructor(
    private readonly activeFormService: RcActiveFormService,
    private readonly accountFacade: AccountFacade
  ) {}

  onSavePersonalForm() {
    this.activeFormService.setActive('profilePersonalData');
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
