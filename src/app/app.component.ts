import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, filter, takeUntil, retry } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { VCLBreakpoints } from '@vcl/ng-vcl';
import { DrawerService } from '@restorecommerce/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private drawerService: DrawerService,
    private cdRef: ChangeDetectorRef
  ) { }

  private readonly onDestroy = new Subject<void>();

  currentRoute: string;
  smallDevice: boolean;

  ngOnInit(): void {
    this.breakpointObserver.observe([VCLBreakpoints.xs, VCLBreakpoints.sm]).pipe(
      map(state => state.matches),
      takeUntil(this.onDestroy)
    ).subscribe(matches => {
      this.smallDevice = matches;
      this.drawerService.toggle(!this.smallDevice);
      this.drawerService.setMode(this.smallDevice ? 'over' : 'side');
    });

    this.router.events.pipe(
      filter<NavigationEnd>(event => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects),
      map(url => {
        if (url.startsWith('/drawer-demo')) {
          return 'drawer-demo';
        } else {
          return 'default';
        }
      }),
      takeUntil(this.onDestroy),
    ).subscribe(currentRoute => {
      this.currentRoute = currentRoute;
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    });
  }

  onSelectItem() {
    if (this.drawerService.mode === 'over') {
      this.drawerService.toggle(false);
    }
  }

  navigateTo(route) {
    this.router.navigate(['/' + route]);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }
}
