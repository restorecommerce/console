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
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { firstValueFrom, isObservable } from 'rxjs';

import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';

import { RcTranslatePipe } from '../../../i18n';
import { ZxcvbnMinScoreError, zxcvbnMinScoreValidator } from '../../validators';


@Component({
  selector: 'rc-password-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    VCLFormControlGroupModule,
    VCLPasswordInputModule,
    VCLInputModule,
    RcTranslatePipe,
    AsyncPipe,
  ],
  templateUrl: './rc-password-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RcPasswordFieldComponent),
      multi: true,
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => RcPasswordFieldComponent),
      multi: true,
    },
  ],
})
export class RcPasswordFieldComponent
  implements ControlValueAccessor, AsyncValidator
{
  @Input() minLength = 12;
  @Input() minScore = 3;
  @Input() label = 'Password';

  value = '';
  disabled = false;

  zxcvbnErr: ZxcvbnMinScoreError | null = null;

  private onChange: (value: string) => void = () => {
    // onchange
  };
  private onTouched: () => void = () => {
    // onTouch
  };

  private asyncValidator = zxcvbnMinScoreValidator(this.minScore);

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

  // ---- AsyncValidator ----

  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const minLengthError =
      control.value?.length < this.minLength ? { minlength: true } : null;

    if (minLengthError) return minLengthError;

    const validatorResult = this.asyncValidator(control);

    const result = isObservable(validatorResult)
      ? await firstValueFrom(validatorResult)
      : await validatorResult;

    this.zxcvbnErr = result?.['zxcvbnMinScore'] ?? null;

    return result;
  }
}
