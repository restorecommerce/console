import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { AlertService, AlertType, VCLBreakpoints } from '@vcl/ng-vcl';

import { EUrlSegment, ICrudFeature } from '@console-core/types';

@Component({
  selector: 'rc-crud-main',
  templateUrl: './crud-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() title = '';
  @Input() isMeta = true;
  @Input() isRead = true;
  @Input() isCreate = true;
  @Input() isEdit = true;
  @Input() isDelete = true;

  isTriggerCreateInvoice = false;
  isTriggerCreateFulfillment = false;

  readonly EUrlSegment = EUrlSegment;

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
    isXsOrSm: this.breakpointObserver
      .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
      .pipe(map((state) => state.matches)),
    isMdOrLg: this.breakpointObserver
      .observe([VCLBreakpoints.md, VCLBreakpoints.lg])
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

  onCreateInvoice(id: string | null): void {
    this.triggerCreateInvoice?.next(id);
  }

  onCreateFulfillment(id: string | null): void {
    this.triggerCreateFulfillment?.next(id);
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
}
