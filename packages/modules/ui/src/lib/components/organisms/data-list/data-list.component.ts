import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'rc-data-list',
  templateUrl: 'data-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListComponent<T extends { id: string }> {
  @HostBinding('class')
  _hostClasses = 'col h-100p';

  @Input() items: T[] = [];
}
