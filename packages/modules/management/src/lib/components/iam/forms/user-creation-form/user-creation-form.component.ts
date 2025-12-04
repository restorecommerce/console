import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  VCLFormControlGroupModule,
  VCLIconComponent,
  VCLInputModule,
  VCLPasswordInputComponent,
  VCLSelectComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';
import { EUserType, ILocale, ITimezone, IUser } from '@console-core/types';

type ZxcvbnMinScoreError = {
  score: number;
  feedback: { warning?: string; suggestions: string[] };
};

type UserTypeOption = {
  id: EUserType;
  name: string;
  description?: string;
};

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLSelectComponent,
    VCLSelectListItemComponent,
    VCLIconComponent,
    VCLPasswordInputComponent,
  ],
})
export class UserCreationFormComponent {
  @Input() scope!: string;
  @Input() schema!: FormGroup;

  @Input() options: {
    user: IUser | null;
    locales: ILocale[];
    timezones: ITimezone[];
  } = {
    user: null,
    locales: [],
    timezones: [],
  };

  minScore = 3;

  @Input()
  id: string | null | undefined = null;

  @Input({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update!: (data: any) => void;

  @Output() addRole = new EventEmitter<void>();

  @ViewChild('form')
  form!: NgForm;

  userTypeOptions = [
    {
      id: EUserType.OrgUser,
      name: 'Organization User',
      description: 'Member of an organization (default)',
    },
    {
      id: EUserType.IndividualUser,
      name: 'Individual User',
      description: 'Standalone individual account',
    },
    {
      id: EUserType.Guest,
      name: 'Guest',
      description: 'Limited, temporary or trial access',
    },
    {
      id: EUserType.TechnicalUser,
      name: 'Technical User',
      description: 'Service/bot account for integrations',
    },
  ] as const satisfies readonly UserTypeOption[];

  onReset(): void {
    this.form.resetForm(this.schema);
  }

  onSubmit(): void {
    if (this.form.form.invalid) {
      return;
    }

    this.update({
      items: [
        {
          ...(this.id ? { id: this.id } : {}),
          ...this.form.form.value,
        },
      ],
      scope: this.scope,
      mode: this.id ? ModeType.Update : ModeType.Create,
    });
  }

  get passwordCtrl(): AbstractControl {
    return this.schema.controls['password'];
  }

  get zxcvbnErr(): ZxcvbnMinScoreError | null {
    return this.passwordCtrl.getError(
      'zxcvbnMinScore'
    ) as ZxcvbnMinScoreError | null;
  }
}
