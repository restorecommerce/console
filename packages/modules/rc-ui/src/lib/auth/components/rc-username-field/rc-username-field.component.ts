import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ControlValueAccessor,
  NG_ASYNC_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { firstValueFrom, isObservable, Observable } from 'rxjs';

import { VCLFormControlGroupModule, VCLInputModule } from '@vcl/ng-vcl';

import { RcTranslatePipe } from '../../../i18n';

@Component({
  selector: 'rc-username-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    VCLFormControlGroupModule,
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
export class RcUsernameFieldComponent
  implements ControlValueAccessor, AsyncValidator
{
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;

  @Input() asyncValidator?: (
    control: AbstractControl
  ) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;

  @Input() label = 'Username';
  @Input() minLength = 8;
  @Input() maxLength = 40;
  @Input() required = true;

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
    // completely bypasses directive interference.
    if (this.input) {
      this.input.nativeElement.value = value ?? '';
    }
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
  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const value: string = control.value ?? '';

    if (this.required && !value) {
      return { required: true };
    }

    if (value && value.length < this.minLength) {
      return {
        minlength: {
          requiredLength: this.minLength,
          actualLength: value.length,
        },
      };
    }

    if (value && value.length > this.maxLength) {
      return {
        maxlength: {
          requiredLength: this.maxLength,
          actualLength: value.length,
        },
      };
    }

    if (!this.asyncValidator) {
      return null;
    }

    const validatorResult = this.asyncValidator(control);

    const result = isObservable(validatorResult)
      ? await firstValueFrom(validatorResult)
      : await validatorResult;

    return result;
  }
}
