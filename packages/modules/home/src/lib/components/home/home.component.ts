import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'app-module-home-index',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.navigate([ROUTER.pages.main.children.orders.link]);
  }
}
