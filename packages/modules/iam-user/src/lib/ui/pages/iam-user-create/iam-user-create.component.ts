import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RcResourceDetailComponent } from '@console/rc-ui';

import {
  VCLButtonComponent,
  VCLFormControlGroupModule,
  VCLIconComponent,
  VCLInputModule,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

@Component({
  selector: 'app-module-iam-user-create',
  templateUrl: './iam-user-create.component.html',
  imports: [
    VCLInputModule,
    VCLSelectComponent,
    VCLIconComponent,
    VCLButtonComponent,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    RcResourceDetailComponent,
  ],
})
export class IAMUserCreateComponent implements OnInit {
  form!: FormGroup;

  private fb = inject(FormBuilder);
  // private facade = inject(IamUsersFacade);
  private router = inject(Router);

  roles = [
    {
      id: 'nextcloud-access-r-id',
      name: 'Nextcloud Access',
      description: 'Can access the nextcloud instance',
    },
    {
      id: 'grafana-access-r-id',
      name: 'Grafana Access',
      description: 'Can access the grafana instance',
    },
    {
      id: 'gitlab-access-r-id',
      name: 'GitLab Access',
      description: 'Can access the gitlab instance',
    },
    {
      id: 'administrator-r-id',
      name: 'Administrator',
      description: 'can read and write within organization scope',
    },
    {
      id: 'unauthenticated-r-id',
      name: 'unauthenticated',
      description: 'actions for unauthenticated users',
    },
    {
      id: 'sales-r-id',
      name: 'Sales',
      description: 'can read and write within shop organization scope',
    },
    {
      id: 'customer-r-id',
      name: 'customer',
      description:
        'can read shops, products and place orders within organization scope',
    },
    {
      id: 'moderator-r-id',
      name: 'Moderator',
      description: 'can create and delete users within organization scope',
    },
    {
      id: 'user-r-id',
      name: 'user',
      description: 'grands actions on owned resources',
    },
    {
      id: 'member-r-id',
      name: 'member',
      description: 'can read within organization scope',
    },
    {
      id: 'scoped-r-id',
      name: 'scoped',
      description: 'grands read on scoped resources',
    },
    {
      id: 'superadministrator-r-id',
      name: 'Super Administrator',
      description: 'Has read and write access across all orgnizational scopes',
    },
  ];

  users = [
    {
      id: 'nfuse-shop-000-admin-000',
      name: 'Shop000 Admin000',
      email: 'nfuse-shop000.admin000@restorecommerce.io',
    },
    {
      id: 'nfuse-shop-000-sales-000',
      name: 'Shop000 Sales000',
      email: 'nfuse-shop000.sales000@restorecommerce.io',
    },
    {
      id: 'nfuse-unauthenticated-user',
      name: 'Unauthenticated User',
      email: 'nfuse-unauthenticated.user@restorecommerce.io',
    },
    {
      id: 'root-tech-user',
      name: 'Root Tech User',
      email: 'root-tech-user@restorecommerce.io',
    },
    {
      id: 'nfuse-root-admin-000',
      name: 'Root Admin',
      email: 'nfuse-root.admin@restorecommerce.io',
    },
  ];

  organizations = [
    {
      id: 'system',
      name: 'SYSTEM',
    },
    {
      id: 'nfuse-root-organization',
      name: 'Restorecommerce Demo Root',
    },
    {
      id: 'nfuse-shops-organization',
      name: 'Restorecommerce Demo Shops',
    },
    {
      id: 'nfuse-customers-organization',
      name: 'Restorecommerce Demo Customers',
    },
    {
      id: 'nfuse-shop-000-organization',
      name: 'Restorecommerce Demo Shop 000 Organization',
    },
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: [''],
      // defaultScope: ['', Validators.required],
      roleAssignments: this.fb.array([]),
      // roles: [[], Validators.required],
    });

    // this.autoGenerateUsername();
  }

  addRoleAssignment(): void {
    this.roleAssignments.push(
      this.fb.group({
        roleId: ['', Validators.required],
        scopeEntity: ['', Validators.required],
        scopeInstance: ['', Validators.required],
      })
    );
  }

  removeRoleAssignment(index: number): void {
    this.roleAssignments.removeAt(index);
  }

  get roleAssignments(): FormArray {
    return this.form.get('roleAssignments') as FormArray;
  }
}
