import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'rc-data-list',
  templateUrl: 'data-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcDataListComponent<T extends { id: string }> {
  @Input() items: T[] = [];
  @Input() itemTemplate!: TemplateRef<{ item: T }>;
  @Input() selected: string | null | undefined;

  @Output() itemSelected = new EventEmitter<string>();

  onDataListChange(value: string) {
    this.itemSelected.next(value);
  }
}
