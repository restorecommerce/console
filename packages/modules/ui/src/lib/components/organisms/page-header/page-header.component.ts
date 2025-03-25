import {
  Component,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

import { ROUTER } from '@console-core/config';
import { RouterFacade } from '@console-core/state';
import { IBreadcrumb } from '@console-core/types';

@Component({
  selector: 'rc-page-header',
  template: `
    @if( breadcrumbs.length && !breadcrumbsToExclude.includes(
    breadcrumbs[breadcrumbs.length - 1].label )) {
    <nav class="breadcrumb-nav">
      <ol>
        <li>
          <a
            [routerLink]="['/']"
            class="breadcrumb-nav-item-label"
            >Home</a
          >
          <vcl-icon
            class="breadcrumb-nav-divider"
            icon="vcl:arrow-right"
          />
        </li>

        @for (breadcrumb of breadcrumbs; track breadcrumb.url; let last = $last
        ) {
        <li [ngClass]="{ selected: last }">
          @if(!last) {
          <a
            [routerLink]="breadcrumb.url"
            class="breadcrumb-nav-item-label"
            >{{ breadcrumb.label }}</a
          >
          <vcl-icon
            class="breadcrumb-nav-divider"
            icon="vcl:arrow-right"
          />
          } @else {
          <span class="breadcrumb-nav-item-label">
            {{ breadcrumb.label }}
          </span>
          }
        </li>
        }
      </ol>
    </nav>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
        this.updateBreadcrumbs();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private updateBreadcrumbs(): void {
    const newBreadcrumbs = this.createBreadcrumbs(
      this.activatedRoute.root
    ).reduce((acc, { label, url }) => {
      console.log('label, url ', label, url);
      if (label !== '' && !acc.some((breadcrumb) => breadcrumb.url === url)) {
        acc.push({ label, url });
      }
      return acc;
    }, [] as IBreadcrumb[]);

    if (this.breadcrumbs !== newBreadcrumbs) {
      this.breadcrumbs = newBreadcrumbs;
      this.title = this.breadcrumbs[this.breadcrumbs.length - 1]?.label ?? '';
      this.changeDetectorRef.markForCheck();
    }
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

      const data = child.snapshot.data;
      let label = '';

      if (typeof data['breadcrumb'] === 'function') {
        label = data['breadcrumb'](data); // Pass data to the breadcrumb factory
      } else {
        label = data['breadcrumb'] ?? child.snapshot.title ?? '';
      }

      if (
        label !== '' &&
        label !== breadcrumbs[breadcrumbs.length - 1]?.label
      ) {
        breadcrumbs.push({ label, url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  trackByFn(index: number, item: IBreadcrumb): string {
    return item.url;
  }
}
