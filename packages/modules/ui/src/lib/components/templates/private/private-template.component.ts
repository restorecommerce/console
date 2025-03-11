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
import { AccountFacade, OrganizationContextFacade } from '@console-core/state';
import { IOrganization } from '@console-core/types';

import { RcDrawerService } from '../../../services';

const isHierarchical = (
  root: string,
  decendant: string | undefined | null,
  organizations: IOrganization[]
): boolean => {
  if (!root || !decendant) return false;

  const parentMap = new Map<string, string | null>(
    organizations.map((org) => [org.id, String(org.parentId)])
  );

  while (decendant && parentMap.has(decendant)) {
    if (decendant === root) return true;
    decendant = parentMap.get(decendant) ?? null;
    if (decendant === null) break;
  }

  return false;
};

@Component({
  selector: 'rc-private-template',
  templateUrl: './private-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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

  isSuperAdmin$ = this.accountFacade.user$.pipe(
    map((user) => {
      return user?.roleAssociations.some(
        (ra) => ra.role === 'superadministrator-r-id'
      );
    })
  );

  isAdmin$ = combineLatest([
    this.accountFacade.user$,
    this.organizationContextFacade.selectedId$,
    this.organizationContextFacade.all$,
  ]).pipe(
    map(([user, organizationId, organizations]) => {
      return user?.roleAssociations.some(
        (ra) =>
          ra.role === 'administrator-r-id' &&
          ra.attributes?.some((attr) =>
            attr.attributes?.some(
              (inst) =>
                inst.value === organizationId ||
                isHierarchical(
                  String(inst.value),
                  String(organizationId),
                  organizations
                )
            )
          )
      );
    })
  );

  isSale$ = combineLatest([
    this.accountFacade.user$,
    this.organizationContextFacade.selectedId$,
    this.organizationContextFacade.all$,
  ]).pipe(
    map(([user, organizationId, organizations]) => {
      return user?.roleAssociations.some(
        (ra) =>
          ra.role === 'sales-r-id' &&
          ra.attributes?.some((attr) =>
            attr.attributes?.some(
              (inst) =>
                inst.value === organizationId ||
                isHierarchical(
                  String(inst.value),
                  String(organizationId),
                  organizations
                )
            )
          )
      );
    })
  );

  constructor(
    private readonly accountFacade: AccountFacade,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly drawerService: RcDrawerService,
    private readonly organizationContextFacade: OrganizationContextFacade,
    private readonly router: Router
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
