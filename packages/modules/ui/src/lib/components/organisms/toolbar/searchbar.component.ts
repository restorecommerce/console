import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'rc-search-bar',
  templateUrl: 'searchbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcSearchBarComponent {
  @HostBinding('class.rc-searchbar')
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

  clearValue(_: Event) {
    this.value = '';
    this.search.emit(this.value);
  }

  updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.value = target.value;
      this.search.emit(this.value);
    }
  }
}
