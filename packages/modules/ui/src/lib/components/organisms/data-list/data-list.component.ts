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
  @Input() items: T[] = [];
  @Input() itemTemplate!: TemplateRef<{ item: T }>;
  @Input() selected: string | null | undefined;

  @Output() itemSelected = new EventEmitter<string>();

  @HostBinding('class')
  _hostClasses = 'col h-100p';

  // Selected item to be highlighted on the vcl-list...
  //

  onDataListChange(value: string) {
    console.log('**Something must have emmited here!');
    this.itemSelected.next(value);
  }
}
