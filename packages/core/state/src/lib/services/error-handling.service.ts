import { Injectable } from '@angular/core';

import { TOperationStatus } from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  public checkStatusAndThrow(status?: TOperationStatus): void {
    if (status?.code === 403) {
      throw new Error('access denied');
    } else if (status?.code !== 200) {
      throw new Error(status?.message || 'unknown error');
    }
  }
}
