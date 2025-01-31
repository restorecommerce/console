import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

export interface FuseOptionsType {
  shouldSort: boolean;
  threshold: number;
  location: number;
  distance: number;
  maxPatternLength: number;
  minMatchCharLength: number;
  keys: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService<T> {
  private fuseOptions = {
    shouldSort: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name'],
  };

  getSearchEngine(items: T[] = [], options = this.fuseOptions) {
    return new Fuse(items, options as Fuse.IFuseOptions<T>);
  }

  getDefaultOptions() {
    return this.fuseOptions;
  }

  setSearchEngine(items: T[], options = this.fuseOptions) {
    return this.getSearchEngine(items, options);
  }

  setSearchKeys(keys: string[]) {
    this.fuseOptions.keys = keys;
  }

  setThreshold(value: number) {
    this.fuseOptions.threshold = value;
  }
}
