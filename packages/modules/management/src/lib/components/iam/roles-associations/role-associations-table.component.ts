import { ConnectedPosition } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { IamFacade, UserService } from '@console-core/state';
import { IAttribute, IUser } from '@console-core/types';

import { IamRoleAssociationModalComponent } from '../role-association-modal.component';

@Component({
  selector: 'app-user-role-associations-table',
  templateUrl: './role-associations-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  styles: [
    `
      .role-association-row {
        td {
          vertical-align: text-top;
        }
      }
    `,
  ],
})
export class RolesAssociationsTableComponent implements OnInit {
  @Input({ required: true }) user!: IUser;

  roleAssociationLayer!: LayerRef;

  roleMenuItems = [
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete', danger: true },
  ];

  positions: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
  ];

  constructor(
    private readonly layerService: LayerService,
    private readonly userService: UserService,
    private readonly iamFacade: IamFacade
  ) {}

  // Discourage the use of IamRoleAssociationModalComponent from external deps.
  ngOnInit(): void {
    this.roleAssociationLayer = this.layerService.create(
      IamRoleAssociationModalComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  onRoleAssociationMenu(option: string) {
    if (option === 'edit') {
      this.openRoleAssociationComponent();
    } else if (option === 'delete') {
      console.log('***delete', option);
    }
  }

  private openRoleAssociationComponent() {
    this.roleAssociationLayer
      .open({
        data: {},
      })
      .subscribe((result) => {
        console.log('Bar component result: ' + result?.value);
      });
  }

  attrPairs(
    attrs?: IAttribute[] | null
  ): Array<{ path: string; id: string; value?: string | null }> {
    const out: Array<{ path: string; id: string; value?: string | null }> = [];
    const walk = (arr: IAttribute[] | null | undefined, prefix: string[]) => {
      if (!arr) return;
      for (const a of arr) {
        const path = [...prefix, a.id];
        out.push({ path: path.join(' ▸ '), id: a.id, value: a.value });
        if (a.attributes?.length) walk(a.attributes, path);
      }
    };
    walk(attrs, []);
    return out;
  }
}
