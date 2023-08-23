import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';
import { buildLocalizationDataSchema } from '../../jss-forms';

@Component({
  selector: 'app-account-preferences',
  template: `
    <rc-page-preferences>
      <rc-account-localization-data
        [localizationFormSchema]="localizationFormSchema"
      />
    </rc-page-preferences>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent {
  localizationFormSchema: VCLFormFieldSchemaRoot = buildLocalizationDataSchema({
    timezones: [],
    locales: [],
  });

  // readonly vm$ = combineLatest({
  // TODO: add timezones and locales
  // });
}
