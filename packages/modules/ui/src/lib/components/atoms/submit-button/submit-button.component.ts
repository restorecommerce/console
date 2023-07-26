import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-submit-button',
  template: `
    <button
      vcl-button
      type="submit"
      class="button"
      [disabled]="isInvalid || isLoading"
    >
      <span>
        <vcl-icon
          *ngIf="isLoading"
          vclPrepend
          icon="vcl:busy"
        />
        <ng-content />
      </span>
    </button>
  `,
})
export class RcSubmitButtonComponent {
  @Input({ required: true }) isInvalid!: boolean;
  @Input({ required: true }) isLoading!: boolean;
}
