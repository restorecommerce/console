import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

import {
  VCLFormControlGroupModule,
  VCLSelectModule,
  VCLSelectListModule,
} from '@vcl/ng-vcl';
import { RcLayoutNavCategory, RcTranslatable } from '../layouts';
import { RS_TRANSLATE } from '../../i18n/i18n.tokens';

@Component({
  selector: 'rc-category-select',
  standalone: true,
  imports: [
    CommonModule,
    VCLFormControlGroupModule,
    VCLSelectModule,
    VCLSelectListModule,
  ],
  template: `
    <vcl-form-control-group>
      <vcl-label>{{ label }}</vcl-label>

      <vcl-select>
        <vcl-select-list
          [value]="value"
          (valueChange)="onChange($event)"
        >
          @for (cat of categories; track cat.id) {
          <vcl-select-list-item [value]="cat.id">
            {{ label$(cat.label) | async }}
          </vcl-select-list-item>
          }
        </vcl-select-list>
      </vcl-select>
    </vcl-form-control-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCategorySelectComponent {
  @Input() label = 'Select category';
  @Input() categories: RcLayoutNavCategory[] = [];
  @Input() value: string | null = null;

  private readonly t = inject(RS_TRANSLATE, { optional: false });

  @Output() valueChange = new EventEmitter<string>();

  onChange(id: string) {
    this.valueChange.emit(id);
  }

  label$(v: RcTranslatable) {
    return this.t(v);
  }
}
