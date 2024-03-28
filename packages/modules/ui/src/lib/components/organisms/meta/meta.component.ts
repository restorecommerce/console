import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IMeta } from '@console-core/types';

@Component({
  selector: 'rc-meta',
  templateUrl: 'meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcMetaComponent {
  @Input()
  id!: string;

  @Input()
  meta!: IMeta | null;

  get formattedMeta(): IMeta {
    return {
      id: this.id,
      created: this.meta?.created || '',
      modified: this.meta?.modified || '',
      createdBy: this.meta?.createdBy || 'N/A',
      modifiedBy: this.meta?.modifiedBy || 'N/A',
    };
  }
}
