// popover-action.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { SubSink } from 'subsink';

import { AlertService, AlertType, PopoverDirective } from '@vcl/ng-vcl';

import { InputMaybe } from '@console-core/graphql';

@Component({
  selector: 'rc-popover-action',
  templateUrl: './popover-action.component.html',
  standalone: false,
})
export class RcPopoverActionComponent<
  T extends { id?: string | InputMaybe<string> }
> {
  private readonly subscriptions = new SubSink();

  @Input() key!: any;
  @Input() noEdit = false;
  @Input() item!: any;
  @Input() target!: HTMLDivElement;
  @Input() itemLabel!: string;
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<string>();

  @ViewChild(PopoverDirective, { static: true }) popover!: PopoverDirective;

  constructor(private readonly alertService: AlertService) {}

  closePopover(): void {
    this.popover?.close();
  }

  openPopover(): void {
    this.popover?.open();
  }

  onDeleteClicked(): void {
    this.subscriptions.sink = this.alertService
      .open({
        text: `Are you sure you want to delete "${this.itemLabel}"?`,
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'Cancel',
        cancelButtonClass: 'transparent',
        confirmButtonLabel: 'Yes, Delete',
        confirmButtonClass: 'button',
      })
      .subscribe((result) => {
        if (result.action === 'confirm') {
          const dispatchItemKey = (this.item as any)[this.key] as string;
          console.log("this.item")
          this.delete.emit(dispatchItemKey);
        }
      });
  }
}
