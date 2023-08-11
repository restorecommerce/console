import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as dayjs from 'dayjs';

import { APP, ROUTER } from '@console-core/config';
@Component({
  selector: 'rc-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCopyrightComponent {
  year = dayjs().year();
  APP = APP;
  ROUTER = ROUTER;
}
