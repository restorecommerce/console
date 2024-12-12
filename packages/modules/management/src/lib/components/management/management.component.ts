import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  standalone: false,
})
export class ManagementComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.navigate(
      ROUTER.pages.main.children.management.children.iam.getLink()
    );
  }
}
