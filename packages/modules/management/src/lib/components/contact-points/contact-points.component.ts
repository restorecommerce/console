import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-contact-points',
  template: `
    <div>
      <h2>Contact Points</h2>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPointsComponent {}