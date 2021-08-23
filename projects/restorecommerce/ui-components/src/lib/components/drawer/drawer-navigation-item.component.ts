import { Component, Input, HostListener, TemplateRef, ContentChildren,
  QueryList, ViewChild, Inject, Optional, SkipSelf, ChangeDetectionStrategy,
  OnDestroy, AfterViewInit, ViewContainerRef, Injector, ElementRef, HostBinding, Self} from '@angular/core';
import { map } from 'rxjs/operators';
import { DynamicLayerRef, LayerConfig } from '@vcl/ng-vcl';
import { Overlay } from '@angular/cdk/overlay';
import { RcDrawerNavigationComponent } from './drawer-navigation.component';
import { NavigationStateService, NavigationItem } from './drawer-navigation-state.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'rc-drawer-navigation-item',
  templateUrl: 'drawer-navigation-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RcDrawerNavigationItemComponent implements NavigationItem, OnDestroy, AfterViewInit {
  constructor(
    private injector: Injector,
    public elementRef: ElementRef,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    @Inject(RcDrawerNavigationItemComponent)
    @Optional()
    @SkipSelf()
    public parent: RcDrawerNavigationItemComponent,
    @Inject(RcDrawerNavigationComponent)
    @SkipSelf()
    public nc: RcDrawerNavigationComponent,
    private navigationStateService: NavigationStateService
  ) {
   }

  @HostBinding('class.navigation-item')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;

  @Input()
  icon?: string;

  @Input()
  value?: any;

  @Input()
  selected = false;

  hovered$ = this.navigationStateService.state$.pipe(map(state => !!state.hoveredItems.find(item => item === this)));

  hoveredSub = this.hovered$.subscribe((hovered) => {
    if (hovered) {
      this.layer && this.layer.open();
    } else {
      this.layer && this.layer.close();
    }
  });

  @ViewChild(TemplateRef, { static: true })
  nestedNavTemplateRef: TemplateRef<HTMLElement>;

  @ViewChild('sidebar')
  nestedNavElement: ElementRef<HTMLElement>;

  @ContentChildren(RcDrawerNavigationItemComponent)
  itemsQL: QueryList<RcDrawerNavigationItemComponent>;

  private layer: DynamicLayerRef;

  ngAfterViewInit() {
    this.layer = new DynamicLayerRef({
      injector: this.injector,
      config: new LayerConfig({
        hasBackdrop: false,
        closeOnEscape: false,
        positionStrategy: this.overlay.position()
          .flexibleConnectedTo(this.elementRef)
          .withPositions([
            { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: -1 },
            { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom', offsetX: -1 }
          ])
      }),
      templateOrComponent: this.nestedNavTemplateRef,
      viewContainerRef: this.viewContainerRef
    });
  }

  get level(): number {
    if (!this.parent) {
      return 0;
    } else {
      return this.parent.level + 1;
    }
  }

  get hasNestedNavItems() {
    // The component is included in the Querylist. So we need to remove it before checking the length
    return this.itemsQL.filter(i => i !== this).length > 0;
  }

  get nestedNav() {
    return this.hasNestedNavItems && this.nestedNavElement && this.nestedNavElement.nativeElement;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    this.navigationStateService.selectItem(this);
    if (!this.hasNestedNavItems) {
      this.nc.selectItem.emit({ source: this, value: this.value, event });
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    this.navigationStateService.leaveItem(this, event);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseOver(event) {
    this.navigationStateService.enterItem(this, event);
  }

  ngOnDestroy(): void {
    this.hoveredSub.unsubscribe();
  }

  onSidebarMouseLeave(event) {
    this.navigationStateService.leaveNav(this);
  }

  onSidebarMouseEnter(event) {
    this.navigationStateService.enterNav(this);
  }
}
