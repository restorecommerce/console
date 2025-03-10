import { ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Action } from '@ngrx/store';
import { map, Observable, OperatorFunction } from 'rxjs';

import { OrganizationContextFacade } from '../+state';
import * as organizationContextActions from '../+state/organization-context/organization-context.actions';

export type OrganizationDataTuple = [
  globalOrganizationLeafId: string,
  globalOrganizationId: string
];

export function withLatestOrganizationData<T extends Action>(
  organizationContextFacade: OrganizationContextFacade,
  ...additionalActionTypes: string[]
): OperatorFunction<T, [T, string]> {
  return (source$: Observable<T>) =>
    source$.pipe(
      ofType<T>(
        ...additionalActionTypes,
        organizationContextActions.setSelectedOrganizationId.type,
        organizationContextActions.selectedGlobalOrganizationHistory.type,
        organizationContextActions.setPreviousSelectedGlobalOrganizationHistory
          .type,
        organizationContextActions.cancelOrganizationContextSelection.type
      ),
      concatLatestFrom(() => [organizationContextFacade.selectedId$]),
      map(([action, organization]) => {
        return [action, organization] as [T, string];
      })
    );
}
