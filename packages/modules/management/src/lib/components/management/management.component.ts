import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'app-module-management-index',
  template: `
    <div>
      <p>Management content</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent implements OnInit {
  private readonly router = inject(Router);

  // Prove that the main router page is useless...
  ngOnInit(): void {
    this.router.navigate(
      ROUTER.pages.main.children.management.children.iam.getLink()
    );
  }
}
