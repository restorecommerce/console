import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  template: `
    <vcl-form-control-group>
      <vcl-label>Currency</vcl-label>
      <vcl-select>
        <vcl-select-list>
          <vcl-select-list-item value="usd"> USD </vcl-select-list-item>
          <vcl-select-list-item value="eur"> EURO </vcl-select-list-item>
        </vcl-select-list>
      </vcl-select>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Regular Price</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Sale Price</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-checkbox formControlName="terms"> Sale ? </vcl-checkbox>
    </vcl-form-control-group>
  `,
  selector: 'app-module-product-price-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPriceFormComponent {
  @HostBinding('class') className = 'w-100p';
}
