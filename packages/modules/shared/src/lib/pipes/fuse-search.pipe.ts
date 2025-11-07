import { Pipe, PipeTransform } from '@angular/core';
import { FuseResult } from 'fuse.js';

import { FuseSearchService } from '../services';

@Pipe({
  name: 'fuseSearch',
  pure: true,
  standalone: false,
})
export class FuseSearchPipe<T> implements PipeTransform {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private searchService: FuseSearchService<T>) {}

  transform(items: T[], searchTerm: string, keys: string[]): T[] {
    if (!items || !searchTerm || !keys.length) {
      return items;
    }

    this.searchService.setSearchKeys(keys);
    const fuse = this.searchService.getSearchEngine(items);
    return fuse.search(searchTerm).map((result: FuseResult<T>) => result.item);
  }
}
