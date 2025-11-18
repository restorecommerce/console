import { Component, Input } from '@angular/core';

import { IMeta } from '@console-core/types';

@Component({
  selector: 'rc-tab-meta',
  template: `
    <vcl-data-list
      mode="none"
      [noBorder]="true"
    >
      <vcl-data-list-item>
        <div class="row justify-between align-items">
          <dt>ID</dt>
          <dd>{{ data.id }}</dd>
        </div>
      </vcl-data-list-item>

      <vcl-data-list-item>
        <div class="row justify-between align-items">
          <dt>Created</dt>
          <dd>{{ data.created | date : 'medium' }}</dd>
        </div>
      </vcl-data-list-item>

      <vcl-data-list-item>
        <div class="row justify-between align-items">
          <dt>Modified</dt>
          <dd>{{ data.modified | date : 'medium' }}</dd>
        </div>
      </vcl-data-list-item>

      <vcl-data-list-item>
        <div class="row justify-between align-items">
          <dt>Created By</dt>
          <dd>{{ data.createdBy || '—' }}</dd>
        </div>
      </vcl-data-list-item>

      <vcl-data-list-item>
        <div class="row justify-between align-items">
          <dt>Modified By</dt>
          <dd>{{ data.modifiedBy || '—' }}</dd>
        </div>
      </vcl-data-list-item>
    </vcl-data-list>
  `,
  standalone: false,
})
export class RcMetaTabComponent {
  @Input({ required: true }) data!: IMeta;
}
