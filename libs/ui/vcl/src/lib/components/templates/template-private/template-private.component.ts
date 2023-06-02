// import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { VCLBreakpoints } from '@vcl/ng-vcl';

import { APP, ROUTER } from '@console/core/config';

import { DrawerService } from '../../../services/drawer.service';
@Component({
  selector: 'rc-template-private',
  templateUrl: './template-private.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcTemplatePrivateComponent implements OnInit, OnDestroy {
  APP = APP;
  ROUTER = ROUTER;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private drawerService: DrawerService,
    private cdRef: ChangeDetectorRef
  ) {}

  private readonly subscriptions = new SubSink();

  currentRoute!: string;
  smallDevice!: boolean;

  ngOnInit(): void {
    this.handleBreakpointObserver();
    this.handleRouterNavigationEndEvents();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSelectItem() {
    if (this.drawerService.mode === 'over') {
      this.drawerService.toggle(false);
    }
  }

  navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  private handleBreakpointObserver(): void {
    this.breakpointObserver
      .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
      .pipe(map((state) => state.matches))
      .subscribe((matches) => {
        this.smallDevice = matches;
        this.drawerService.toggle(!this.smallDevice);
        this.drawerService.setMode(this.smallDevice ? 'over' : 'side');
      });
  }

  private handleRouterNavigationEndEvents() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map((event) => event.urlAfterRedirects),

        map((url: string) => {
          if (url.startsWith(ROUTER.pages.private.children.drawer.link)) {
            return ROUTER.pages.private.children.drawer.link;
          }

          return ROUTER.pages.private.children.home.link;
        })
      )
      .subscribe((currentRoute: string) => {
        this.currentRoute = currentRoute;
        this.cdRef.markForCheck();
        this.cdRef.detectChanges();
      });
  }
}