import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { VCLBreakpoints } from '@vcl/ng-vcl';

import { APP, ROUTER } from '@console-core/config';
import { AccountFacade } from '@console-core/state';

import { DrawerService } from '../../../services';

@Component({
  selector: 'rc-private-template',
  templateUrl: './private-template.component.html',
  styleUrls: ['./private-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPrivateTemplateComponent implements OnInit, OnDestroy {
  readonly vm$ = combineLatest({
    profile: this.accountFacade.profile$,
  });
  currentRoute!: string;
  smallDevice!: boolean;
  APP = APP;
  ROUTER = ROUTER;

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly drawerService: DrawerService,
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
    if (route) {
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
          if (url.startsWith(ROUTER.pages.main.children.management.link)) {
            return ROUTER.pages.main.children.management.link;
          }
          if (url.startsWith(ROUTER.pages.main.children.account.link)) {
            return ROUTER.pages.main.children.account.link;
          }

          return ROUTER.pages.main.children.home.link;
        })
      )
      .subscribe((currentRoute: string) => {
        this.currentRoute = currentRoute;
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      });
  }
}
