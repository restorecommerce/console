import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rc-no-records',
  template: ` <p>{{ message }}</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcNoRecordsComponent {
  @Input() message = 'No records found!';
}
