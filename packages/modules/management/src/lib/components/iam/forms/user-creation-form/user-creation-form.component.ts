import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import { ModeType } from '@console-core/graphql';
import { ILocale, ITimezone, IUser } from '@console-core/types';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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

  @Input()
  id: string | null | undefined = null;

  @Input({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update!: (data: any) => void;

  @Output() addRole = new EventEmitter<void>();

  @ViewChild('form')
  form!: NgForm;

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
}
