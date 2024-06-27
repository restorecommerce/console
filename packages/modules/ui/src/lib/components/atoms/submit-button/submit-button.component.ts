import { Component, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-submit-button',
  template: `
    <div class="row">
      <div class="flex">
        <div class="btn-container align-right">
          <a
            *ngIf="showResetText"
            [routerLink]="ROUTER.pages.main.children.auth.children.signIn.link"
          >
            <button
              vcl-button
              *ngIf="resetForm"
              (click)="onResetForm()"
              [ngClass]="{
                button: true,
                transparent: true,
                btn: isMobile
              }"
              type="button"
            >
              {{ resetText }}
            </button>
          </a>

          <button
            vcl-button
            [ngClass]="{ button: true, btn: isMobile }"
            [class]="buttonClass"
            [ngStyle]="{
              'margin-left': isMobile ? '0' : '14px',
              'margin-top': isMobile ? '10px' : '0',
            }"
            type="submit"
          >
            <ng-content />
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .btn-container {
        @media (max-width: 600px) {
          display: flex;
          flex-direction: column;
          .btn {
            min-width: 100%;
          }
        }
      }
    `,
  ],
})
export class RcSubmitButtonComponent {
  ROUTER = ROUTER;
  @Input() buttonClass = '';
  @Input() resetForm?: FormGroup;
  @Input() showResetText? = true;
  @Input() resetText? = 'Cancel';

  isMobile = window.innerWidth <= 600;

  @HostListener('window:resize', ['$event'])
  onResize(_: Event) {
    this.isMobile = window.innerWidth <= 600;
  }

  onResetForm() {
    if (this.resetForm) {
      this.resetForm.reset();
    }
  }

  navigateToSignIn() {
    this.resetForm?.reset();
  }
}
