import { ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Action } from '@ngrx/store';
import { map, Observable, OperatorFunction } from 'rxjs';

import * as organizationActions from '../+state/management/organization/organization.actions';
import { OrganizationFacade } from '../+state/management/organization/organization.facade';

export type OrganizationDataTuple = [
  globalOrganizationLeafId: string,
  globalOrganizationId: string
];

export function withLatestOrganizationData<T extends Action>(
  organizationFacade: OrganizationFacade,
  ...additionalActionTypes: string[]
): OperatorFunction<T, [T, string]> {
  return (source$: Observable<T>) =>
    source$.pipe(
      ofType<T>(
        ...additionalActionTypes,
        organizationActions.setSelectedGlobalOrganizationId.type,
        organizationActions.selectedGlobalOrganizationHistory.type,
        organizationActions.setPreviousSelectedGlobalOrganizationHistory.type,
        organizationActions.cancelSelection.type
      ),
      concatLatestFrom(() => [
        organizationFacade.globalOrganizationLeafId$,
        organizationFacade.globalOrganizationId$,
      ]),
      map(([action, organizationLeaf, organization]) => {
        const selectedOrganization = organizationLeaf || organization;
        return [action, selectedOrganization] as [T, string];
      })
    );
}
