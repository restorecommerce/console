import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <div class="row">
      <div class="flex-12">
        <!-- <vcl-jss-form
          autocomplete="off"
          ngDefaultControl
          #createForm="vclJssForm"
          [schema]="schema"
          (formAction)="onAction($event)"
          (formSubmit)="onSubmit()"
        /> -->
      </div>
    </div>
  `,
  selector: 'app-module-product-creation-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreationFormComponent {}
