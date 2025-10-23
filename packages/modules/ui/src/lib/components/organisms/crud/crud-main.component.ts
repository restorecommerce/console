import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';

import {
  AlertService,
  AlertType,
  JssFormComponent,
  VCLBreakpoints,
} from '@vcl/ng-vcl';

import {
  EUrlSegment,
  FilterSortState,
  ICrudFeature,
  ResourceSchema,
} from '@console-core/types';
import { snakeCase } from '@console-modules/shared';

@Component({
  selector: 'rc-crud-main',
  templateUrl: './crud-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  standalone: false,
})
export class RcCrudMainComponent implements OnInit, OnDestroy {
  @Input({ required: true }) feature!: ICrudFeature;
  @Input({ required: true }) id: string | null = null;
  @Input({ required: true }) total = 0;
  @Input({ required: true }) urlSegment!: EUrlSegment;
  @Input({ required: true }) triggerRead!: BehaviorSubject<null>;
  @Input({ required: true }) triggerSelectId!: BehaviorSubject<string | null>;
  @Input({ required: true }) triggerRemove!: BehaviorSubject<string | null>;
  @Input() triggerCreateInvoice?: BehaviorSubject<string | null>;
  @Input() triggerCreateFulfillment?: BehaviorSubject<string | null>;
  @Input() triggerSubmitFulfillment?: BehaviorSubject<string | null>;
  @Input() title = '';
  @Input() isRead = true;
  @Input() isCreate = true;
  @Input() isEdit = true;
  @Input() isDelete = true;
  @Input() hasMeta = true;
  @Input() isNested = false;
  @Input() hasFilter = true;
  @Input() schema: ResourceSchema | null = null;

  @Output() filter = new EventEmitter<{ [key: string]: string }>();

  isTriggerCreateInvoice = false;
  isTriggerCreateFulfillment = false;
  isTriggerSubmitFulfillment = false;

  showMeta = false;
  isFilterOpen = false;

  currentQueryState: Partial<FilterSortState> = {};

  readonly EUrlSegment = EUrlSegment;

  @ViewChild('filterForm')
  filterForm!: JssFormComponent;

  readonly vm$ = combineLatest({
    isXs: this.breakpointObserver
      .observe(VCLBreakpoints.xs)
      .pipe(map((state) => state.matches)),
    isSm: this.breakpointObserver
      .observe(VCLBreakpoints.sm)
      .pipe(map((state) => state.matches)),
    isMd: this.breakpointObserver
      .observe(VCLBreakpoints.md)
      .pipe(map((state) => state.matches)),
    isLg: this.breakpointObserver
      .observe(VCLBreakpoints.lg)
      .pipe(map((state) => state.matches)),
    isXl: this.breakpointObserver
      .observe(VCLBreakpoints.xl)
      .pipe(map((state) => state.matches)),
    isLgOrXl: this.breakpointObserver
      .observe([VCLBreakpoints.lg, VCLBreakpoints.xl])
      .pipe(map((state) => state.matches)),
    isXsOrSm: this.breakpointObserver
      .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
      .pipe(map((state) => state.matches)),
    isMdOrLgOrXl: this.breakpointObserver
      .observe([VCLBreakpoints.md, VCLBreakpoints.lg, VCLBreakpoints.xl])
      .pipe(map((state) => state.matches)),
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly alertService: AlertService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.isTriggerCreateInvoice = !!this.triggerCreateInvoice;
    this.isTriggerCreateFulfillment = !!this.triggerCreateFulfillment;
    this.isTriggerSubmitFulfillment = !!this.triggerSubmitFulfillment;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onRead(): void {
    this.triggerRead.next(null);
  }

  onSelectId(id: string | null): void {
    this.triggerSelectId.next(id);
  }

  onFilterSubmit(): void {
    const formValue = this.filterForm.form.value;

    const snakeCased = Object.keys(formValue).reduce((acc, key) => {
      acc[snakeCase(key)] = formValue[key];
      return acc;
    }, {} as Record<string, string>);

    this.filter.emit(snakeCased);
  }

  onRemove(id: string | null): void {
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
        this.triggerRemove.next(id);
      });
  }

  onFilterAction(_event: Event) {
    // TODO Open the filter and sort modal
  }
}
