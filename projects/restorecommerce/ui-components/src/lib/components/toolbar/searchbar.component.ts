import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-search-bar',
  templateUrl: 'searchbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RcSearchBarComponent {
  @HostBinding('class.rc-searchbar')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;

  @Output()
  search = new EventEmitter<string>();

  @Input()
  value = '';

  @Input()
  placeholder?: string;

  reset() {
    this.value = '';
  }
}
