import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'rc-searchbar',
  templateUrl: 'searchbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcSearchbarComponent {
  @HostBinding('class.rc-searchbar')
  _hostClasses = true;

  @Input()
  value = '';

  @Input()
  placeholder = 'Search';

  @Output()
  search = new EventEmitter<string>();

  updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.value = target.value;
      this.search.emit(this.value);
    }
  }

  clearValue() {
    this.value = '';
    this.search.emit(this.value);
  }
}
