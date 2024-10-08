import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { CountryFacade } from '@console-core/state';
import { ICountry } from '@console-core/types';

interface ISchemaOptions {
  country: ICountry | null;
}

@Injectable({
  providedIn: 'root',
})
export class JssFormService {
  country: ICountry | null = null;

  countrySchema$ = new BehaviorSubject<VCLFormFieldSchemaRoot>(
    this.buildCountrySchema({ country: null })
  );

  private destroy$ = new Subject<void>();

  constructor(private readonly countryFacade: CountryFacade) {
    this.init();
  }

  init() {
    combineLatest({
      country: this.countryFacade.selected$,
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ country }) => {
        this.countrySchema$.next(this.buildCountrySchema({ country }));
      });
  }

  destroy() {
    this.countrySchema$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private buildCountrySchema({
    country,
  }: ISchemaOptions): VCLFormFieldSchemaRoot {
    return {
      type: 'form',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'input',
          ...(country ? { defaultValue: country.name } : {}),
          validators: [Validators.required],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          name: 'geographicalName',
          label: 'Geographical name',
          type: 'input',
          ...(country ? { defaultValue: country.geographicalName } : {}),
          validators: [Validators.required],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          name: 'countryCode',
          label: 'Country code',
          type: 'input',
          ...(country ? { defaultValue: country.countryCode } : {}),
          validators: [Validators.required, Validators.pattern('^[A-Z]{2}$')],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
            {
              type: 'error',
              error: 'pattern',
              message: 'This field must be 2 uppercase letters.',
            },
          ],
        },
        {
          name: 'economicAreas',
          label: 'Economic areas',
          type: 'select',
          ...(country ? { defaultValue: country.economicAreas || [] } : {}),
          validators: [Validators.required],
          params: {
            placeholder: 'Select economic areas',
            selectionMode: 'multiple',
            clearable: true,
            search: false,
            options: [
              {
                label: 'EU',
                value: 'EU',
                sublabel: 'European Union',
              },
              {
                label: 'EEA',
                value: 'EEA',
                sublabel: 'European Economic Area',
              },
              {
                label: 'EFTA',
                value: 'EFTA',
                sublabel: 'European Free Trade Association',
              },
              {
                label: 'CEFTA',
                value: 'CEFTA',
                sublabel: 'Central European Free Trade Agreement',
              },
              {
                label: 'CARICOM',
                value: 'CARICOM',
                sublabel: 'Caribbean Community',
              },
              {
                label: 'PA',
                value: 'PA',
                sublabel: 'Pacific Alliance',
              },
              {
                label: 'AU',
                value: 'AU',
                sublabel: 'African Union',
              },
              {
                label: 'USAN',
                value: 'USAN',
                sublabel: 'Union of South American Nations',
              },
              {
                label: 'EEU',
                value: 'EEU',
                sublabel: 'Eurasian Economic Union',
              },
              {
                label: 'AL',
                value: 'AL',
                sublabel: 'Arab League',
              },
              {
                label: 'ASEAN',
                value: 'ASEAN',
                sublabel: 'Association of Southeast Asian Nations',
              },
              {
                label: 'CAIS',
                value: 'CAIS',
                sublabel: 'Central American Integration System',
              },
              {
                label: 'CEMAC',
                value: 'CEMAC',
                sublabel: 'Central African Economic and Monetary Community',
              },
              {
                label: 'ECOWAS',
                value: 'ECOWAS',
                sublabel: 'Economic Community of West African States',
              },
              {
                label: 'SAARC',
                value: 'SAARC',
                sublabel: 'South Asian Association for Regional Cooperation',
              },
            ].sort((a, b) => a.label.localeCompare(b.label)),
          },
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          type: 'buttons',
          buttons: [
            {
              type: 'button',
              label: 'Cancel',
              action: 'reset',
              class: 'transparent',
            },
            {
              type: 'submit',
              label: 'Save',
            },
          ],
        },
      ],
    };
  }
}
