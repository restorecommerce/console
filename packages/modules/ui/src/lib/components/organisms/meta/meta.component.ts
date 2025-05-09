import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { DATE } from '@console-core/config';
import { IMeta } from '@console-core/types';

@Component({
  selector: 'rc-meta',
  templateUrl: 'meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcMetaComponent {
  @HostBinding('class') klasses = 'w-100p';

  @Input({ required: true })
  id: string | null = null;

  @Input({ required: true })
  meta?: Partial<IMeta & { lastLogin: string }> | null = null;

  DATE = DATE;
}
