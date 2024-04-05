import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IMeta } from '@console-core/types';

@Component({
  selector: 'rc-meta',
  templateUrl: 'meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcMetaComponent {
  @Input()
  id: string | null = null;

  @Input()
  meta?: IMeta | null = null;
}
