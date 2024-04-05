import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rc-no-records',
  template: `
    <div class="row justify-center">
      <p>{{ message }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcNoRecordsComponent {
  @Input() message = 'No records found!';
}
