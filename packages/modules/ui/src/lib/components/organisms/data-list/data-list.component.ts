import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'rc-data-list',
  templateUrl: 'data-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListComponent<T extends { id: string }> {
  @Output() itemSelected = new EventEmitter<string>();

  @HostBinding('class')
  _hostClasses = 'col h-100p';

  // Selected item to be highlighted on the vcl-list...
  //

  @Input() items: T[] = [];
  @Input() itemTemplate!: TemplateRef<{ item: T }>;

  onChange(value: string) {
    this.itemSelected.next(value);
  }
}
