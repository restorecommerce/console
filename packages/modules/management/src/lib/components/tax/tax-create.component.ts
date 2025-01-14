import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { combineLatest } from 'rxjs';

import { CountryFacade } from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-country-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="vm.schema"
          [create]="create"
        />
      </div>
    </ng-container>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class TaxCreateComponent implements OnDestroy {
  create = this.countryFacade.create;

  readonly vm$ = combineLatest({
    country: this.countryFacade.selected$,
    schema: this.jssFormService.countrySchema$,
  });

  constructor(
    private readonly countryFacade: CountryFacade,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
