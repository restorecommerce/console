import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  VCLFormControlGroupModule,
  VCLSelectModule,
  VCLSelectListModule,
} from '@vcl/ng-vcl';

export interface LayoutNavCategory {
  id: string;
  label: string;
}

@Component({
  selector: 'rs-category-select',
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
            {{ cat.label }}
          </vcl-select-list-item>
          }
        </vcl-select-list>
      </vcl-select>
    </vcl-form-control-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsCategorySelectComponent {
  @Input() label = 'Select category';
  @Input() categories: LayoutNavCategory[] = [];
  @Input() value: string | null = null;

  @Output() valueChange = new EventEmitter<string>();

  onChange(id: string) {
    this.valueChange.emit(id);
  }
}
