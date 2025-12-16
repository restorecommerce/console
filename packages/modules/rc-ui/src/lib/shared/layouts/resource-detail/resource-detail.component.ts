import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

import { VCLIconModule } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-resource-detail',
  standalone: true,
  imports: [CommonModule, VCLIconModule],
  template: `
    <section class="col h-100p ">
      <!-- Toolbar -->
      <div
        class="toolbar secondary row center justify-between"
        role="toolbar"
        [attr.aria-label]="toolbarAriaLabel"
      >
        <!-- Left -->
        <div class="row center gap-05">
          @if (showBack) {
          <button
            type="button"
            class="button transparent square"
            [attr.aria-label]="backLabel"
            (click)="back.emit()"
          >
            <div class="icogram">
              <div
                class="icon"
                [ngClass]="backIcon"
                aria-hidden="true"
              ></div>
            </div>
          </button>
          }

          <!-- Title -->
          <div class="toolbar-title overflow-ellipsis">
            {{ title }}
          </div>

          @if (subtitleTpl) {
          <ng-container [ngTemplateOutlet]="subtitleTpl" />
          }
        </div>

        <!-- Right -->
        <div class="row center gap-05">
          <!-- Custom actions slot -->
          @if (actionsTpl) {
          <ng-container [ngTemplateOutlet]="actionsTpl" />
          } @if (showEdit) {
          <button
            type="button"
            class="button transparent square"
            aria-label="Edit"
            (click)="edit.emit()"
          >
            <div class="icogram">
              <div
                class="icon mdi mdi-pencil"
                aria-hidden="true"
              ></div>
            </div>
          </button>
          } @if (showDelete) {
          <button
            type="button"
            class="button transparent square"
            aria-label="Delete"
            (click)="delete.emit()"
          >
            <div class="icogram">
              <div
                class="icon mdi mdi-delete-outline"
                aria-hidden="true"
              ></div>
            </div>
          </button>
          }
        </div>
      </div>

      <!-- Body -->
      <div class="rc-resource-detail-body scrollable flex p-2 ">
        <ng-content />
      </div>
    </section>
  `,
  styles: [
    `
      .toolbar-title {
        max-width: 40rem;
      }

      .rc-resource-detail-body {
        min-height: 0;
      }

      .gap-05 {
        gap: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcResourceDetailComponent {
  @Input() title = 'Detail';
  @Input() toolbarAriaLabel = 'Resource detail actions';

  // Left/back
  @Input() showBack = true;
  @Input() backIcon = 'mdi mdi-arrow-left';
  @Input() backLabel = 'Back';

  // Right/actions
  @Input() showEdit = true;
  @Input() showDelete = true;

  @Output() back = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  // Slots
  @ContentChild('actionsTemplate', { read: TemplateRef })
  actionsTpl?: TemplateRef<any>;

  @ContentChild('subtitleTemplate', { read: TemplateRef })
  subtitleTpl?: TemplateRef<any>;
}
