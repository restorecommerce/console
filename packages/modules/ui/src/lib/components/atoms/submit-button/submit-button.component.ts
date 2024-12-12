import { Component, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-submit-button',
  template: `
    <div class="row">
      <div class="flex">
        <div class="btn-container align-right">
          <button
            vcl-button
            *ngIf="resetForm && showResetText"
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
  standalone: false,
})
export class RcSubmitButtonComponent {
  ROUTER = ROUTER;
  @Input() buttonClass = '';
  @Input() resetForm?: FormGroup;
  @Input() showResetText? = true;
  @Input() isNavigateToSignIn? = false;
  @Input() resetText? = 'Cancel';

  isMobile = window.innerWidth <= 600;

  @HostListener('window:resize', ['$event'])
  onResize(_: Event) {
    this.isMobile = window.innerWidth <= 600;
  }

  constructor(private readonly router: Router) {}

  onResetForm() {
    if (this.isNavigateToSignIn) {
      this.navigateToSignIn();
    } else if (this.resetForm) {
      this.resetForm.reset();
    }
  }

  navigateToSignIn() {
    this.router.navigate([
      ROUTER.pages.main.children.auth.children.signIn.link,
    ]);
  }
}
