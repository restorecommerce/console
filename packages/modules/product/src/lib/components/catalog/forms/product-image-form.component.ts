import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  template: `
    <vcl-form-control-group>
      <vcl-label>Filename</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Caption</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>URL</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Content type</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

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
      <vcl-label>Image index</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>
  `,
  selector: 'app-module-product-image-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductImageFormComponent {
  @HostBinding('class') className = 'w-100p';
}
