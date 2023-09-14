import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-submit-button',
  template: `
    <button
      vcl-button
      [class]="buttonClass + ' button'"
      [disabled]="isDisabled || !!isBusy"
      type="submit"
    >
      <vcl-icon
        *ngIf="isBusy"
        vclPrepend
        icon="vcl:busy"
      />
      <ng-content />
    </button>
  `,
})
export class RcSubmitButtonComponent {
  @Input({ required: true }) isDisabled!: boolean;
  @Input({ required: true }) isBusy!: boolean | null;
  @Input() buttonClass = '';
}
