import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { VCLBreakpoints } from '@vcl/ng-vcl';

import { APP, ROUTER } from '@console-core/config';
import { AccountFacade } from '@console-core/state';

import { RcDrawerService } from '../../../services';

@Component({
  selector: 'rc-private-template',
  templateUrl: './private-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPrivateTemplateComponent implements OnInit, OnDestroy {
  APP = APP;
  ROUTER = ROUTER;
  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
  });
  currentRoute!: string;
  currentRouteTitle!: string;
  smallDevice!: boolean;
  isResizing = false;

  private resizeTimeout!: number;
  private readonly subscriptions = new SubSink();

  @HostListener('window:resize', ['$event'])
  onResize(_: Event) {
    this.isResizing = true;
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.isResizing = false;
    }, 500); // Wait for 500ms after the resize event stops firing
  }

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly drawerService: RcDrawerService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly accountFacade: AccountFacade
  ) {}

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
    if (route && !this.isResizing) {
      this.router.navigate([route]);
    }
  }

  collapseDrawer() {
    this.drawerService.toggle();
  }

  private handleBreakpointObserver(): void {
    this.subscriptions.sink = this.breakpointObserver
      .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
      .pipe(map((state) => state.matches))
      .subscribe((matches) => {
        this.smallDevice = matches;
        this.drawerService.toggle(!this.smallDevice);
        this.drawerService.setMode(this.smallDevice ? 'over' : 'side');
      });
  }

  private handleRouterNavigationEndEvents() {
    this.subscriptions.sink = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map((event) => event.urlAfterRedirects),
        startWith(this.router.url), // Emit the current route immediately

        map((url: string) => {
          const routes = [
            ROUTER.pages.main.children.account.link,
            ROUTER.pages.main.children.management.link,
            ROUTER.pages.main.children.orders.link,
          ];
          const foundRoute = routes.find((route) => url.startsWith(route));
          return foundRoute || ROUTER.pages.main.children.home.link;
        })
      )
      .subscribe((currentRoute: string) => {
        this.currentRoute = currentRoute;
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      });
  }
}
