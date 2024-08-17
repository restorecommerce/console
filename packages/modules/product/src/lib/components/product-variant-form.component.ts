import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  template: `
    <div class="row">
      <div class="flex-12">
        <vcl-form-control-group>
          <vcl-label>Name</vcl-label>
          <vcl-input-field>
            <input vclInput />
          </vcl-input-field>
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Description</vcl-label>
          <vcl-input-field class="auto-height">
            <textarea
              vclInput
              [autogrow]="true"
              [minRows]="5"
              [maxRows]="10"
            ></textarea>
          </vcl-input-field>
        </vcl-form-control-group>
      </div>
    </div>
  `,
  selector: 'app-module-product-variant-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductVariantFormComponent {
  @HostBinding('class') className = 'w-100p';
}
