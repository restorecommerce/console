import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  template: `
    <vcl-form-control-group>
      <vcl-label>Width</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Length</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Height</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Weight (kg)</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-checkbox>Rotatable</vcl-checkbox>
    </vcl-form-control-group>
  `,
  selector: 'app-module-product-package-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductPackageFormComponent {
  @HostBinding('class') className = 'w-100p';
}
