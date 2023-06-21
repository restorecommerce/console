import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'rc-public-template',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPublicTemplateComponent {}
