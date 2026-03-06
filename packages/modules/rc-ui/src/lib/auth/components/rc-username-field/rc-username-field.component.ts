import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import { VCLFormControlGroupModule, VCLInputModule } from '@vcl/ng-vcl';

import { RcTranslatePipe } from '../../../i18n';

@Component({
  selector: 'rc-username-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLInputModule,
    RcTranslatePipe,
    AsyncPipe,
  ],
  templateUrl: './rc-username-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RcUsernameFieldComponent),
      multi: true,
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => RcUsernameFieldComponent),
      multi: true,
    },
  ],
})
export class RcUsernameFieldComponent implements ControlValueAccessor {
  @Input() label = 'Username';

  value = '';
  disabled = false;

  private onChange: (value: string) => void = () => {
    // onchange
  };
  private onTouched: () => void = () => {
    // onTouch
  };

  // One possible validator would be to check if the username already exists.
  // Assuming the username-field is used in a registration mode...
  // Hence we could just pass additional validation..

  // private asyncValidator = zxcvbnMinScoreValidator(this.minScore);

  // ---- ControlValueAccessor ----

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  onInput(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
