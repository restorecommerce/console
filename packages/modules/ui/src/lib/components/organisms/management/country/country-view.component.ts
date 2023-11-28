import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ICountry } from '@console-core/types';

@Component({
  selector: 'rc-management-country-view',
  template: `
    <div class="data-list mb-0 p-0 ng-star-inserted">
      <div class="my-2 rc-lv-l-heading">Data</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">Name:</div>
          <div class="flex text align-right rc-lv-label">
            {{ country.name }}
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Country Code:</div>
          <div class="flex text align-right rc-lv-label">
            {{ country.countryCode }}
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Geographical Name:</div>
          <div class="flex text align-right rc-lv-label">
            {{ country.geographicalName }}
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Economic Areas:</div>
          <div class="flex text align-right rc-lv-label">
            {{ (country.economicAreas || []).join(', ') }}
          </div>
        </li>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCountryViewComponent {
  @Input({ required: true })
  country!: ICountry;
}
