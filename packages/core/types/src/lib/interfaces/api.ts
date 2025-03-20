import {
  IoRestorecommerceInvoiceInvoiceResponse,
  IoRestorecommerceStatusStatus,
} from '@console-core/graphql';

export interface IApiConstant {
  readonly endpoints: {
    readonly token: string;
    readonly tokenRevocation: string;
  };
  readonly domains: {
    readonly bucketDomain: string;
  };
}

export interface IStatus
  extends Omit<IoRestorecommerceStatusStatus, 'code' | 'message'> {
  code: number;
  message: string;
}

export interface IResponse<T>
  extends Omit<IoRestorecommerceInvoiceInvoiceResponse, 'payload'> {
  payload: T;
  status?: IStatus;
}
