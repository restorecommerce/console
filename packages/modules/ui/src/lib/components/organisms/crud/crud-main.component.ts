import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { SubSink } from 'subsink';

import { AlertService, AlertType } from '@vcl/ng-vcl';

import {
  ICrudActionStreams,
  EUrlSegment,
  ICrudFeature,
} from '@console-core/types';

@Component({
  selector: 'rc-crud-main',
  templateUrl: './crud-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCrudMainComponent implements OnDestroy {
  @Input({ required: true }) feature!: ICrudFeature;
  @Input({ required: true }) actionStreams!: ICrudActionStreams;
  @Input({ required: true }) urlSegment!: EUrlSegment;
  @Input({ required: true }) id: string | null = null;
  @Input({ required: true }) total = 0;
  @Input() title = '';
  @Input() isRefetch = true;
  @Input() isCreate = true;
  @Input() isEdit = true;
  @Input() isDelete = true;

  readonly EUrlSegment = EUrlSegment;

  private readonly subscriptions = new SubSink();

  constructor(private readonly alertService: AlertService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
}
