import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubSink } from 'subsink';

import { AlertService, AlertType } from '@vcl/ng-vcl';

import { EUrlSegment, ICrudFeature } from '@console-core/types';

@Component({
  selector: 'rc-crud-main',
  templateUrl: './crud-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCrudMainComponent implements OnDestroy {
  @Input({ required: true }) feature!: ICrudFeature;
  @Input({ required: true }) id: string | null = null;
  @Input({ required: true }) total = 0;
  @Input({ required: true }) urlSegment!: EUrlSegment;
  @Input({ required: true }) triggerRead!: BehaviorSubject<null>;
  @Input({ required: true }) triggerSelectId!: BehaviorSubject<string | null>;
  @Input({ required: true }) triggerRemove!: BehaviorSubject<string | null>;
  @Input() title = '';
  @Input() isRead = true;
  @Input() isCreate = true;
  @Input() isEdit = true;
  @Input() isDelete = true;

  readonly EUrlSegment = EUrlSegment;

  private readonly subscriptions = new SubSink();

  constructor(private readonly alertService: AlertService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onRead(): void {
    this.triggerRead.next(null);
  }

  onSelectId(id: string | null): void {
    this.triggerSelectId.next(id);
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
