import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'app-module-home-index',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.router.navigate([ROUTER.pages.main.children.orders.link]);
  }
}
