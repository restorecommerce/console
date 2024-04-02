import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { AlertService, AlertType } from '@vcl/ng-vcl';

import {
  ICrudActionStreams,
  IDataListItem,
  IMeta,
  EUrlSegment,
  ICrudFeature,
} from '@console-core/types';

@Component({
  selector: 'rc-crud-main',
  templateUrl: './crud-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCrudMainComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) feature!: ICrudFeature;
  @Input({ required: true }) actionStreams!: ICrudActionStreams;
  @Input({ required: true }) segment!: EUrlSegment;
  @Input({ required: true }) data: IDataListItem[] = [];
  @Input({ required: true }) id: string | null = null;
  @Input({ required: true }) meta: IMeta | null = null;
  @Input() title = '';
  @Input() isBack = false;
  @Input() isSort = false;
  @Input() isRefetch = true;
  @Input() isCreate = true;
  @Input() isEdit = true;
  @Input() isDelete = true;

  readonly urlSegment = EUrlSegment;

  private searchValueBehaviorSubject = new BehaviorSubject<string>('');
  private dataListBehaviorSubject = new BehaviorSubject<IDataListItem[]>([]);
  private readonly subscriptions = new SubSink();

  readonly vm$ = combineLatest({
    searchValue: this.searchValueBehaviorSubject.asObservable(),
    filteredData: this.dataListBehaviorSubject.asObservable(),
  }).pipe(
    map(({ searchValue, filteredData }) => ({
      searchValue,
      filteredData: searchValue
        ? filteredData.filter(
            ({ label, subLabel = '' }) =>
              label.toLowerCase().includes(searchValue.toLowerCase()) ||
              subLabel?.toLowerCase().includes(searchValue.toLowerCase())
          )
        : filteredData,
    }))
  );

  constructor(private readonly alertService: AlertService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']?.currentValue) {
      this.dataListBehaviorSubject.next(
        changes['data'].currentValue.sort(
          (a: IDataListItem, b: IDataListItem) => a.label.localeCompare(b.label)
        )
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSearch(value: string): void {
    this.searchValueBehaviorSubject.next(value);
  }

  onSetSelectedId(id: string | null): void {
    this.actionStreams.setSelectedId.next(id);
  }

  onRead(): void {
    this.actionStreams.read.next(null);
  }

  onDelete(id: string | null): void {
    this.subscriptions.sink = this.alertService
      .open({
        text: `Do you really want to delete ${this.title}?`,
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'Cancel',
        cancelButtonClass: 'transparent',
        confirmButtonLabel: `Delete ${this.feature.name.singular}`,
        confirmButtonClass: 'button',
      })
      .subscribe((result) => {
        if (!id || result.action !== 'confirm') {
          return;
        }
        this.actionStreams.delete.next(id);
      });
  }

  trackByFn(_: number, item: IDataListItem) {
    return item.id;
  }
}
