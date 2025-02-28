import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-module-management-shop-create',
  template: `
    <h3>Create a shop!</h3>
    <!-- <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="vm.schema"
          [create]="create"
        />
      </div>
    </ng-container> -->
  `,
  // providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopCreateComponent {}
