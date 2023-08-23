import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-account-localization-data',
  templateUrl: './localization-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcLocalizationDataComponent {
  @Input({ required: true })
  localizationFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('localizationForm')
  localizationForm!: JssFormComponent;

  onSaveLocalizationForm() {
    // TODO: implement
    console.log(this.localizationForm.form.value);
  }
}
