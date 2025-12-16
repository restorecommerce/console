import { Data, Params } from '@angular/router';
export interface IRouterState {
    url: string;
    data: Data;
    params: Params;
    queryParams: Params;
}
