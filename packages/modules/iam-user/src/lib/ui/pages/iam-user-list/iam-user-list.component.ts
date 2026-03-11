import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

import { ROUTER } from '@console-core/config';

import { IamUserListFacade } from '../../../store';
import { IAMUserListItemComponent } from '../../components/iam-user-list-item/iam-user-list-item.component';

@Component({
  selector: 'app-module-iam-user-list',
  templateUrl: './iam-user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IamUserListFacade],
  styleUrl: './iam-user-list.component.scss',
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
    this.router.navigate(
      ROUTER.pages.main.children.iam.children.view.getLink({
        id: iamUser.id,
      })
    );
  }

  onCreate(): void {
    this.router.navigate([ROUTER.pages.main.children.iam.children.create.link]);
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
