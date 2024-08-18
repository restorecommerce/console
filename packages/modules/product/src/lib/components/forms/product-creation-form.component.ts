import { ChangeDetectionStrategy, Component } from '@angular/core';

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

        <vcl-form-control-group>
          <vcl-label>Manufacturer</vcl-label>
          <vcl-select>
            <vcl-select-list>
              <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
              <vcl-select-list-item value="manu-a">
                Manufacturer A
              </vcl-select-list-item>
              <vcl-select-list-item value="manu-b">
                Manufacturer B
              </vcl-select-list-item>
              <vcl-select-list-item value="manu-c">
                Manufacturer C
              </vcl-select-list-item>
            </vcl-select-list>
          </vcl-select>
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Origin country</vcl-label>
          <vcl-select>
            <vcl-select-list>
              <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
              <vcl-select-list-item value="de"> German </vcl-select-list-item>
              <vcl-select-list-item value="fr"> France </vcl-select-list-item>
              <vcl-select-list-item value="uk">
                The United Kingdom of Great Britain and Northern Ireland
              </vcl-select-list-item>
            </vcl-select-list>
          </vcl-select>
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Taric code</vcl-label>
          <vcl-input-field>
            <input vclInput />
          </vcl-input-field>
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Prototype</vcl-label>
          <vcl-select>
            <vcl-select-list>
              <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
              <vcl-select-list-item value="proto-a">
                Prototype A
              </vcl-select-list-item>
              <vcl-select-list-item value="proto-b">
                Prototype B
              </vcl-select-list-item>
            </vcl-select-list>
          </vcl-select>
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Category</vcl-label>
          <vcl-select>
            <vcl-select-list>
              <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
              <vcl-select-list-item value="cat-a">
                Category A
              </vcl-select-list-item>
              <vcl-select-list-item value="cat-b">
                Category B
              </vcl-select-list-item>
            </vcl-select-list>
          </vcl-select>
        </vcl-form-control-group>

        <!--  TODO Should be dynamic to accomodate additional taxes -->
        <vcl-form-control-group>
          <vcl-label>Tax Id</vcl-label>
          <vcl-input-field>
            <input vclInput />
          </vcl-input-field>
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Global trade item number</vcl-label>
          <vcl-input-field>
            <input vclInput />
          </vcl-input-field>
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Offerings</vcl-label>
          <vcl-select>
            <vcl-select-list>
              <vcl-select-list-item value="physical">
                Physical
              </vcl-select-list-item>
              <vcl-select-list-item value="virtual">
                Virtual
              </vcl-select-list-item>
              <vcl-select-list-item value="service">
                Service
              </vcl-select-list-item>
            </vcl-select-list>
          </vcl-select>
        </vcl-form-control-group>
      </div>

      <!-- <div class="row justify-content-end w-100p mt-2">
        <div class="loose-button-group">
          <button vcl-button>Add variant</button>
        </div>
      </div> -->
      <div class="divider divider-horizontal row justify-center">
        <div class="divider-rule"></div>
        <div class="icogram divider-element">
          <div class="text">Product variant</div>
        </div>
      </div>

      <app-module-product-variant-form />

      <div class="row justify-content-end w-100p mt-2">
        <div class="loose-button-group">
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
      </div>
    </div>
  `,
  selector: 'app-module-product-creation-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreationFormComponent {}
