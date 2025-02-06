import { ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Action } from '@ngrx/store';
import { Observable, OperatorFunction } from 'rxjs';

import * as organizationActions from '../+state/management/organization/organization.actions';
import { OrganizationFacade } from '../+state/management/organization/organization.facade';

// Import your organization actions
export type OrganizationDataTuple = [
  globalOrganizationLeafId: string,
  globalOrganizationId: string
];

export function withLatestOrganizationData<T extends Action>(
  organizationFacade: OrganizationFacade,
  ...additionalActionTypes: string[]
): OperatorFunction<T, [T, ...OrganizationDataTuple]> {
  return (source$: Observable<T>) =>
    source$.pipe(
      ofType<T>(
        ...additionalActionTypes, // Primary effect-specific actions
        organizationActions.setSelectedGlobalOrganizationId.type,
        organizationActions.selectedGlobalOrganizationHistory.type,
        organizationActions.setPreviousSelectedGlobalOrganizationHistory.type,
        organizationActions.cancelSelection.type
      ),
      concatLatestFrom(() => [
        organizationFacade.globalOrganizationLeafId$,
        organizationFacade.globalOrganizationId$,
      ])
    ) as Observable<[T, ...OrganizationDataTuple]>;
}
