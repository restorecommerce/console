import { Pipe, PipeTransform } from '@angular/core';

import { API } from '@console-core/config';

@Pipe({
  name: 'appendBucketDomain',
  standalone: false,
})
export class AppendBucketDomainPipe implements PipeTransform {
  transform(value: string): string {
    return `${API.domains.bucketDomain}/storage${value}`;
  }
}
