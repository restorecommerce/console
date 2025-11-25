// rc-breadcrumb.component.ts
import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

import { VCLIconModule } from '@vcl/ng-vcl';

export interface IBreadcrumb {
  label: string;
  url: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'rs-breadcrumb',
  standalone: true,
  imports: [NgClass, RouterModule, VCLIconModule],
  template: `
    @if (breadcrumbs.length && !breadcrumbsToExclude.includes(lastLabel)) {
    <nav class="breadcrumb-nav">
      <ol>
        @if (showRoot) {
        <li>
          <a
            [routerLink]="[rootUrl]"
            class="breadcrumb-nav-item-label"
            >{{ rootLabel }}</a
          >
          <vcl-icon
            class="breadcrumb-nav-divider"
            icon="vcl:arrow-right"
          />
        </li>
        }

        <!-- Dynamic crumbs -->
        @for (breadcrumb of breadcrumbs; track breadcrumb.url; let last = $last)
        {
        <li [ngClass]="{ selected: last }">
          @if (!last) {
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
})
export class RsBreadcrumbComponent implements AfterViewInit, OnDestroy {
  /**
   * Text for the root crumb (defaults to "Home").
   * You can change this from the host app: <rc-breadcrumb rootLabel="Dashboard" />
   */
  @Input() rootLabel = 'Home';

  /**
   * Router URL for the root crumb.
   * Defaults to '/'.
   */
  @Input() rootUrl = '/';

  /**
   * Whether to display the root crumb at all.
   */
  @Input() showRoot = true;

  /**
   * Labels to exclude when the last crumb matches them (e.g. a generic "Home" page).
   * You can override from outside instead of relying on ROUTER constants.
   */
  @Input() breadcrumbsToExclude: string[] = [];

  /**
   * All generated breadcrumbs.
   */
  breadcrumbs: IBreadcrumb[] = [];

  /**
   * Convenience getter: last breadcrumb label or empty.
   */
  get lastLabel(): string {
    return this.breadcrumbs[this.breadcrumbs.length - 1]?.label ?? '';
  }

  private readonly destroy$ = new Subject<void>();

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  ngAfterViewInit(): void {
    // Rebuild breadcrumbs on each navigation end
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateBreadcrumbs();
      });

    // initial build (in case we already have an active route)
    this.updateBreadcrumbs();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ---- internal helpers ----

  private updateBreadcrumbs(): void {
    const newBreadcrumbs = this.createBreadcrumbs(
      this.activatedRoute.root
    ).reduce((acc, { label, url }) => {
      if (label !== '' && !acc.some((breadcrumb) => breadcrumb.url === url)) {
        acc.push({ label, url });
      }
      return acc;
    }, [] as IBreadcrumb[]);

    // shallow comparison is enough; array reference change triggers update
    if (this.breadcrumbs !== newBreadcrumbs) {
      this.breadcrumbs = newBreadcrumbs;
      this.cdr.markForCheck();
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

      // Support both: data.breadcrumb: string | (data) => string
      if (typeof data['breadcrumb'] === 'function') {
        label = data['breadcrumb'](data);
      } else {
        label = data['breadcrumb'] ?? child.snapshot.title ?? '';
      }

      if (
        label !== '' &&
        label !== breadcrumbs[breadcrumbs.length - 1]?.label
      ) {
        breadcrumbs.push({ label, url });
      }

      // Continue recursively down the tree
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
