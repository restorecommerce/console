import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  template: `
    <vcl-form-control-group>
      <vcl-label>id</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>value</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Unit code</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>
  `,
  selector: 'app-module-product-props-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductPropertyFormComponent {
  @HostBinding('class') className = 'w-100p';
}
