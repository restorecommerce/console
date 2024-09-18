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
import { filter, map, startWith } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { VCLBreakpoints } from '@vcl/ng-vcl';

import { APP, ROUTER } from '@console-core/config';

import { RcDrawerService } from '../../../services';

@Component({
  selector: 'rc-private-template',
  templateUrl: './private-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPrivateTemplateComponent implements OnInit, OnDestroy {
  APP = APP;
  ROUTER = ROUTER;

  currentRoute!: string;
  currentRouteTitle!: string;
  smallDevice!: boolean;
  isResizing = false;

  opened$ = this.drawerService.opened$.pipe(map((opened) => Boolean(opened)));

  menuClosed$ = this.drawerService.opened$.pipe(map((opened) => !opened));

  private resizeTimeout!: number;
  private readonly subscriptions = new SubSink();

  @HostListener('window:resize', ['$event'])
  onResize(_: Event) {
    this.isResizing = true;
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.isResizing = false;
    }, 500) as unknown as number; // Wait for 500ms after the resize event stops firing
  }

  menuTopLinks = [
    ROUTER.pages.main.children.account.link,
    ROUTER.pages.main.children.management.link,
  ];
  menuMainLinks = [
    ROUTER.pages.main.children.orders.link,
    ROUTER.pages.main.children.products.link,
    ROUTER.pages.main.children.invoices.link,
    ROUTER.pages.main.children.fulfillments.link,
  ];

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly drawerService: RcDrawerService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.handleBreakpointObserver();
    this.handleRouterNavigationEndEvents();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSelectItem(): void {
    if (this.drawerService.mode === 'over') {
      this.drawerService.toggle(false);
    }
  }

  navigateTo(route: string): void {
    if (route && !this.isResizing) {
      this.router.navigate([route]);
    }
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

  private handleRouterNavigationEndEvents(): void {
    this.subscriptions.sink = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map((event) => event.urlAfterRedirects),
        startWith(this.router.url), // Emit the current route immediately

        map((url: string) => {
          const routes = [...this.menuTopLinks, ...this.menuMainLinks];
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
