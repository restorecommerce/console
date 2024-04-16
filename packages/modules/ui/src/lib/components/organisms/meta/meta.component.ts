import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DATE } from '@console-core/config';
import { IMeta } from '@console-core/types';

@Component({
  selector: 'rc-meta',
  templateUrl: 'meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcMetaComponent {
  @Input({ required: true })
  id: string | null = null;

  @Input({ required: true })
  meta?: IMeta | null = null;

  DATE = DATE;
}
