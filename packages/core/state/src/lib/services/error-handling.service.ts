import { Injectable } from '@angular/core';

import { TOperationStatus } from '@console-core/types';

import { AuthnFacade } from '../+state';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(private readonly authFacade: AuthnFacade) {}
  public checkStatusAndThrow(status?: TOperationStatus): void {
    const errorMessages: { [key: number]: string } = {
      400: 'bad request',
      401: 'unauthorized',
      403: 'access not allowed',
      404: 'not found',
      408: 'request timeout',
      500: 'internal server error',
    };

    let errorMessage = '';

    if (status?.code) {
      if (status.code === 401) {
        this.authFacade.signOut(false);
      }

      if (status?.code in errorMessages) {
        errorMessage = errorMessages[status?.code];
      } else if (status.code !== 200) {
        errorMessage = status.message || 'unknown error';
      }
    }

    if (errorMessage) {
      throw new Error(errorMessage);
    }
  }
}
