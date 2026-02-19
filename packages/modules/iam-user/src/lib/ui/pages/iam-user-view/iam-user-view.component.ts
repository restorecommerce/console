import { DatePipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RcResourceDetailComponent } from '@console/rc-ui';
import { distinctUntilChanged, filter, map } from 'rxjs';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
} from '@vcl/ng-vcl';

import { IamUserViewFacade } from '../../../store';
import { IAMUserOverviewTabComponent } from '../../components/iam-user-overview-tab/iam-user-overview-tab.component';
import { IAMUserRolesTabComponent } from '../../components/iam-user-roles-tab/iam-user-roles-tab.component';
import { IAMUserSessionsTabComponent } from '../../components/iam-user-sessions-tab/iam-user-sessions-tab.component';
import { IAMUserStatusBadgeComponent } from '../../components/iam-user-status-badge/iam-user-status-badge.component';

@Component({
  selector: 'app-module-iam-user-view',
  templateUrl: './iam-user-view.component.html',
  imports: [
    JsonPipe,
    DatePipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    IAMUserOverviewTabComponent,
    RcResourceDetailComponent,
    IAMUserStatusBadgeComponent,
    IAMUserRolesTabComponent,
    IAMUserSessionsTabComponent,
  ],
  styleUrl: './iam-user-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IamUserViewFacade],
})
export class IAMUserViewComponent implements OnInit {
  private readonly iamUserFacade = inject(IamUserViewFacade);
  private readonly route = inject(ActivatedRoute);

  readonly user = this.iamUserFacade.user;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((p) => p.get('id')),
        filter((id): id is string => !!id),
        distinctUntilChanged()
      )
      .subscribe((userId) => {
        this.iamUserFacade.enterPage(userId);
      });
  }

  goBack() {
    // TODO
  }

  editUser() {
    // TODO
  }

  deleteUser() {
    // TODO
  }
}
