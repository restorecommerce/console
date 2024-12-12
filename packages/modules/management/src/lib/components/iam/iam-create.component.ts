import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { combineLatest } from 'rxjs';

import { JssFormComponent, LayerRef, LayerService } from '@vcl/ng-vcl';

import { IamFacade, UserService } from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="vm.userSchema"
          [create]="create"
          (actionEvent)="handleActionEvent($event)"
        />
      </div>

      <ng-template
        #tplLayerRef
        let-title="title"
      >
        <vcl-panel-dialog
          [showCloseButton]="true"
          (close)="tplLayer.close()"
          class="panel-dialog"
        >
          <vcl-panel-title>{{ title }}</vcl-panel-title>
          <div class="row">
            <div class="flex-12">
              <vcl-jss-form
                autocomplete="off"
                ngDefaultControl
                #roleAssociationsForm="vclJssForm"
                [schema]="vm.roleAssociationsSchema"
                (formAction)="onAction($event)"
                (formSubmit)="onSubmit()"
              />
            </div>
          </div>
        </vcl-panel-dialog>
      </ng-template>
    </ng-container>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamCreateComponent implements AfterViewInit, OnDestroy {
  @ViewChild('roleAssociationsForm')
  roleAssociationsForm!: JssFormComponent;

  @ViewChild('tplLayerRef')
  tplLayerRef!: TemplateRef<HTMLElement>;

  tplLayer!: LayerRef;

  create = this.iamFacade.create;

  readonly vm$ = combineLatest({
    userSchema: this.jssFormService.userSchema$,
    roleAssociationsSchema: this.jssFormService.roleAssociationsSchema$,
  });

  constructor(
    private readonly layerService: LayerService,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly iamFacade: IamFacade,
    private readonly userService: UserService,
    private readonly jssFormService: JssFormService
  ) {}

  ngAfterViewInit(): void {
    this.tplLayer = this.layerService.createTemplateLayer(
      this.tplLayerRef,
      this.viewContainerRef
    );
  }

  ngOnDestroy(): void {
    this.jssFormService.destroy();
    this.iamFacade.setTempRoleAssociations([]);
  }

  handleActionEvent(action: string): void {
    if (action === 'addRoleAssociations') {
      this.tplLayer.open({ data: { title: 'Assign Roles' } });
    }
  }

  onAction(action: string): void {
    if ('close' === action) {
      this.tplLayer.close();
    }
  }

  onSubmit(): void {
    if (
      this.roleAssociationsForm.form?.invalid ||
      this.roleAssociationsForm.form?.pristine
    ) {
      return;
    }

    this.tplLayer.close();

    const roleAssociations =
      this.roleAssociationsForm.form?.value.roleAssociationsArray.map(
        (ra: { role: string; organization: string }) => ({
          ...this.userService.createRoleAssociation(ra.role, ra.organization),
        })
      );

    this.iamFacade.setTempRoleAssociations(roleAssociations);
  }
}
