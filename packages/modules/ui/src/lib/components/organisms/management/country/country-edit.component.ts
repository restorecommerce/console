import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';
import { CountryFacade } from '@console-core/state';
import { ICountry } from '@console-core/types';

@Component({
  selector: 'rc-management-country-edit',
  template: `
    <div class="row">
      <div class="flex-12 mb-4">
        <vcl-jss-form
          ngDefaultControl
          #countryForm="vclJssForm"
          [schema]="countryFormSchema"
          (formAction)="onAction($event)"
          (formSubmit)="onSubmit()"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCountryEditComponent {
  @Input({ required: true })
  id!: string;

  @Input({ required: true })
  countryFormSchema!: VCLFormFieldSchemaRoot;

  @Input()
  isRequesting = false;

  @ViewChild('countryForm')
  countryForm!: JssFormComponent;

  constructor(private readonly countryFacade: CountryFacade) {}

  onAction(_: string): void {
    this.countryForm.form.resetForm(this.countryForm.defaultValue);
  }

  onSubmit(): void {
    if (this.countryForm.form.invalid || this.countryForm.form.pristine) {
      return;
    }

    this.countryFacade.update({
      items: [
        {
          id: this.id,
          ...this.countryForm.form.value,
        } as ICountry,
      ],
      mode: ModeType.Update,
    });
  }
}
