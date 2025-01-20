import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { JssFormComponent, LayerRef, LayerService } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  IamFacade,
  RouterFacade,
  UserService,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <app-user-creation-form
          [schema]="vm.schema"
          [options]="vm.options"
          [update]="update"
          [id]="vm.id"
          (addRole)="handleActionEvent()"
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
export class IamEditComponent implements OnDestroy, AfterViewInit {
  @ViewChild('roleAssociationsForm')
  roleAssociationsForm!: JssFormComponent;

  @ViewChild('tplLayerRef')
  tplLayerRef!: TemplateRef<HTMLElement>;

  tplLayer!: LayerRef;

  update = this.iamFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.iamFacade.setSelectedId(id);
      })
    ),
    user: this.iamFacade.selected$.pipe(
      tap((user) => {
        if (!user) {
          this.iamFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.iam.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
    schema: this.jssFormService.userForm$,
    options: this.jssFormService.formOptions$.pipe(
      map((options) => {
        return {
          user: options.user,
          locales: options.locales,
          timezones: options.timezones,
          uniqueRoleAssociationsScopingInstances: [],
        };
      })
    ),
    roleAssociationsSchema: this.jssFormService.roleAssociationsSchema$,
  });

  constructor(
    private readonly router: Router,
    private readonly layerService: LayerService,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly routerFacade: RouterFacade,
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

  handleActionEvent(): void {
    this.tplLayer.open({ data: { title: 'Assign Roles' } });
  }

  onAction(action: string): void {
    if ('close' === action) {
      this.tplLayer.close();
    }
  }

  onSubmit(): void {
    if (
      this.roleAssociationsForm?.form.invalid ||
      this.roleAssociationsForm?.form.pristine
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
