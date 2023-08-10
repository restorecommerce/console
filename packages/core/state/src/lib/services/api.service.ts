import { Inject, Injectable } from '@angular/core';

import { API } from '@console-core/config';
import { IApiConstant } from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(@Inject('apiUrl') private apiUrl: string) {}

  getEndpoint(endpointKey: keyof IApiConstant['endpoints']): string {
    const endpoint = API.endpoints[endpointKey];
    return `${this.apiUrl}${endpoint}`;
  }
}
