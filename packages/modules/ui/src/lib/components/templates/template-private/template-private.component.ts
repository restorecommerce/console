import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-ui-template-private',
  templateUrl: './template-private.component.html',
  styles: [
    `
      .app-name {
        color: black;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePrivateComponent {
  @Input() name = '';
}
