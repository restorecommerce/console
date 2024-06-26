import {
  Component,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

import { ROUTER } from '@console-core/config';
import { RouterFacade } from '@console-core/state';
import { IBreadcrumb } from '@console-core/types';

@Component({
  selector: 'rc-page-header',
  template: `
    <ng-container
      *ngIf="
        breadcrumbs.length &&
        !breadcrumbsToExclude.includes(
          breadcrumbs[breadcrumbs.length - 1].label
        )
      "
    >
      <nav class="breadcrumb-nav">
        <div class="row">
          <div class="flex pt-2">
            <ol>
              <li>
                <a
                  [routerLink]="['/']"
                  class="breadcrumb-nav-item-label"
                  >Home</a
                >
                <vcl-icon icon="vcl:arrow-right" />
              </li>
              <ng-container
                *ngFor="let breadcrumb of breadcrumbs; let last = last"
              >
                <li [ngClass]="{ selected: last }">
                  <ng-container *ngIf="!last">
                    <a
                      [routerLink]="breadcrumb.url"
                      class="breadcrumb-nav-item-label"
                      >{{ breadcrumb.label }}</a
                    >
                    <vcl-icon icon="vcl:arrow-right" />
                  </ng-container>
                  <ng-container *ngIf="last">
                    <div class="breadcrumb-nav-item-label">
                      {{ breadcrumb.label }}
                    </div>
                  </ng-container>
                </li>
              </ng-container>
            </ol>
          </div>
        </div>
      </nav>
    </ng-container>
  `,
})
export class RcPageHeaderComponent implements AfterViewInit, OnDestroy {
  title = '';
  breadcrumbs: IBreadcrumb[] = [];
  breadcrumbsToExclude = [ROUTER.pages.main.children.home.title];

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly activatedRoute: ActivatedRoute,
    private readonly routerFacade: RouterFacade
  ) {}

  ngAfterViewInit(): void {
    this.subscriptions.sink = this.routerFacade.eventsNavigationEnd$.subscribe(
      () => {
        this.breadcrumbs = this.createBreadcrumbs(
          this.activatedRoute.root
        ).reduce((acc, { label, url }) => {
          if (
            label !== '' &&
            !acc.some((breadcrumb) => breadcrumb.url === url)
          ) {
            acc.push({ label, url });
          }
          return acc;
        }, [] as IBreadcrumb[]);

        this.title = this.breadcrumbs[this.breadcrumbs.length - 1]?.label ?? '';
        this.changeDetectorRef.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: child.snapshot.title ?? '', url: url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
