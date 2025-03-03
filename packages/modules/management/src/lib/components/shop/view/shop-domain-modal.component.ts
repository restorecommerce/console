import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ComponentLayerRef } from '@vcl/ng-vcl';

@Component({
  selector: 'app-module-management-shop-domain-modal',
  template: `
    <vcl-panel-dialog
      [showCloseButton]="true"
      (close)="close()"
      class="panel-dialog"
    >
      <vcl-panel-title>{{ layer.data.title }}</vcl-panel-title>
      <div>
        <form
          novalidate
          vclForm
          (submit)="onSubmit()"
          [formGroup]="form"
        >
          <vcl-form-control-group>
            <vcl-label>Domain</vcl-label>
            <vcl-input-field>
              <input
                vclInput
                formControlName="domain"
              />
            </vcl-input-field>
          </vcl-form-control-group>

          <div class="loose-button-group row justify-end mt-4">
            <button
              vcl-button
              type="button"
              class="transparent"
            >
              Cancel
            </button>

            <button
              vcl-button
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </vcl-panel-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopDomainModalComponent {
  form = new FormGroup({
    domain: new FormControl(this.layer.data.value, Validators.required),
  });

  constructor(public layer: ComponentLayerRef) {}

  onSubmit() {
    if (this.form.valid) {
      this.close(this.form.value.domain);
    }
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
