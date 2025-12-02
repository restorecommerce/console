// popover-action.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  inject,
} from '@angular/core';
import { SubSink } from 'subsink';

import { AlertService, AlertType, VCLPopoverDirective } from '@vcl/ng-vcl';

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

  private readonly alertService = inject(AlertService);

  @Input({ required: true }) key!: keyof T;
  @Input() noEdit = false;
  @Input({ required: true }) item!: T;
  @Input({ required: true }) target!: HTMLDivElement;
  @Input({ required: true }) itemLabel!: string;
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<string>();

  @ViewChild(VCLPopoverDirective, { static: true })
  popover!: VCLPopoverDirective;

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
        confirmButtonLabel: 'Delete',
        confirmButtonClass: 'button',
      })
      .subscribe((result) => {
        if (result.action === 'confirm') {
          const dispatchItemKey = this.item[this.key] as string;
          this.delete.emit(dispatchItemKey);
        }
      });
  }
}
