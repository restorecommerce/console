import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMeta } from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class ObjectUploadService {
  constructor(private http: HttpClient) {}

  uploadFile(
    file: File,
    endpoint: string,
    bucketName: string,
    keyName: string,
    meta: Partial<IMeta>,
    token: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<any> {
    const contentType = file.type || 'application/octet-stream';

    const operations = {
      query: `mutation Ostorage($input: IIoRestorecommerceOstorageObject!) {
        ostorage {
          object {
            Put(input: $input) {
              details {
                response {
                  payload { url, bucket }
                  status { code, message }
                }
                operationStatus { code, message }
              }
            }
          }
        }
      }`,
      variables: {
        input: {
          bucket: bucketName,
          key: keyName,
          options: {
            contentType: contentType,
          },
          meta: meta,
        },
      },
    };

    const formData = new FormData();
    formData.append('operations', JSON.stringify(operations));
    formData.append(
      'map',
      JSON.stringify({ fileVar: ['variables.input.object'] })
    );
    formData.append('fileVar', file);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Apollo-Require-Preflight': 'true',
    });

    return this.http.post(endpoint, formData, { headers });
  }
}
