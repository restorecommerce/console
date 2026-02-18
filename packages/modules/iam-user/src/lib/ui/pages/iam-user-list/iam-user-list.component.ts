import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

import { IamUserListFacade } from '../../../store';
import { IAMUserListItemComponent } from '../../components/iam-user-list-item/iam-user-list-item.component';

@Component({
  selector: 'app-module-iam-user-list',
  templateUrl: './iam-user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IamUserListFacade],
  imports: [RcResourceListComponent, IAMUserListItemComponent],
})
export class IamUserListComponent implements OnInit {
  private readonly iamUserFacade = inject(IamUserListFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  items = this.iamUserFacade.users;

  ngOnInit(): void {
    this.iamUserFacade.loadList();
  }

  onSelect(iamUser: { id: string }): void {
    this.router.navigate([iamUser.id, 'view'], {
      relativeTo: this.route,
    });
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
