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
  meta: IMeta | null = null;

  get formattedMeta(): IMeta {
    return {
      id: this.id || 'N/A',
      created: this.meta?.created || 'N/A',
      modified: this.meta?.modified || 'N/A',
      createdBy: this.meta?.createdBy || 'N/A',
      modifiedBy: this.meta?.modifiedBy || 'N/A',
    };
  }
}
