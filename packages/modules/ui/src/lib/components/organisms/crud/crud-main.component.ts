import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import {
  IDataListItem,
  IMeta,
  TRouterCrudSegment,
  TRouterLink,
} from '@console-core/types';

@Component({
  selector: 'rc-crud-main',
  templateUrl: './crud-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCrudMainComponent implements OnChanges {
  @Input({ required: true }) feature!: string;
  @Input({ required: true }) segment!: TRouterCrudSegment;
  @Input({ required: true }) actions!: {
    read: () => void;
    setSelectedId: (id: string | null) => void;
    delete: (id: string) => void;
  };
  // @Input({ required: true }) data!: {
  //   meta: IMeta | null;
  //   list: IDataListItem[];
  // };
  @Input({ required: true }) dataList: IDataListItem[] = [];
  @Input({ required: true }) meta: IMeta | null = null;
  @Input({ required: true }) links!: {
    index: () => TRouterLink;
    create: () => TRouterLink;
    view: (id: string) => TRouterLink;
    edit: (id: string) => TRouterLink;
  };
  @Input() id: string | null = null;
  @Input() isBack = false;
  @Input() title = 'Content';
  @Input() isRequesting = true;
  @Input() isIndex = false;
  @Input() isCreate = false;
  @Input() isEdit = false;
  @Input() isDelete = false;
  @Input() isRead = false;
  @Input() isFilter = false;
  @Input() isSort = false;
  @Input() isMeta = false;

  // Streams
  @Input({ required: true }) actionStreams!: {
    read: BehaviorSubject<void | null>;
    setSelectedId: BehaviorSubject<string | null>;
    delete: BehaviorSubject<string | null>;
  };

  private searchValueBehaviorSubject = new BehaviorSubject<string>('');
  private dataListBehaviorSubject = new BehaviorSubject<IDataListItem[]>([]);

  readonly vm$ = combineLatest({
    searchValue: this.searchValueBehaviorSubject.asObservable(),
    filteredDataList: this.dataListBehaviorSubject.asObservable(),
  }).pipe(
    map(({ searchValue, filteredDataList }) => ({
      searchValue,
      filteredDataList: searchValue
        ? filteredDataList.filter(
            ({ label, subLabel = '' }) =>
              label.toLowerCase().includes(searchValue.toLowerCase()) ||
              subLabel?.toLowerCase().includes(searchValue.toLowerCase())
          )
        : filteredDataList,
    }))
  );

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataList']?.currentValue) {
      this.dataListBehaviorSubject.next(
        changes['dataList'].currentValue.sort(
          (a: IDataListItem, b: IDataListItem) => a.label.localeCompare(b.label)
        )
      );
    }
  }

  onSearch(value: string): void {
    this.searchValueBehaviorSubject.next(value);
  }

  trackByFn(_: number, item: IDataListItem) {
    return item.id;
  }
}
