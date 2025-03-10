import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { combineLatest } from 'rxjs';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';
import { AccountFacade, OrganizationContextFacade } from '@console-core/state';

@Component({
  selector: 'rc-crud-create',
  template: `
    <div class="row">
      <div class="flex-12">
        <vcl-jss-form
          autocomplete="off"
          ngDefaultControl
          #createForm="vclJssForm"
          [schema]="schema"
          (formAction)="onAction($event)"
          (formSubmit)="onSubmit()"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcCrudCreateComponent implements OnInit {
  @Input({ required: true })
  schema!: VCLFormFieldSchemaRoot;

  currentOrganizationId!: string;
  userId!: string;

  @Input({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create!: (data: any) => void;

  @ViewChild('createForm')
  createForm!: JssFormComponent;

  @Output() actionEvent = new EventEmitter<string>();

  constructor(
    private accountFacade: AccountFacade,
    private organizationContextFacade: OrganizationContextFacade
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.organizationContextFacade.globalOrganizationLeafId$,
      this.organizationContextFacade.globalOrganizationId$,
    ]).subscribe(([leafOrganizationId, organizationId]) => {
      this.currentOrganizationId = leafOrganizationId
        ? leafOrganizationId
        : organizationId;
    });

    this.accountFacade.userId$.subscribe((userId) => {
      if (userId) {
        this.userId = userId;
      }
    });
  }

  onAction(action: string): void {
    this.actionEvent.emit(action);
    this.createForm.form.resetForm(this.createForm.defaultValue);
  }

  onSubmit(): void {
    if (this.createForm.form.invalid || this.createForm.form.pristine) {
      return;
    }

    this.create({
      items: [
        {
          ...this.createForm.form.value,
          meta: {
            owners: [
              {
                id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
                value:
                  'urn:restorecommerce:acs:model:organization.Organization',
                attributes: [
                  {
                    id: 'urn:restorecommerce:acs:names:ownerInstance',
                    value: this.currentOrganizationId,
                  },
                ],
              },
              {
                id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
                value: 'urn:restorecommerce:acs:model:user.User',
                attributes: [
                  {
                    id: 'urn:restorecommerce:acs:names:ownerInstance',
                    value: this.userId,
                  },
                ],
              },
            ],
          },
        },
      ],
      mode: ModeType.Create,
    });
  }
}
