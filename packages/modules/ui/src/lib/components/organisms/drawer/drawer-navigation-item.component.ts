import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  Input,
  HostListener,
  TemplateRef,
  ContentChildren,
  QueryList,
  ViewChild,
  Inject,
  Optional,
  SkipSelf,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewContainerRef,
  ElementRef,
  HostBinding,
  OnInit,
} from '@angular/core';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';

import {
  NavigationStateService,
  NavigationItem,
} from './drawer-navigation-state.service';
import { RcDrawerNavigationComponent } from './drawer-navigation.component';

@Component({
  selector: 'rc-drawer-navigation-item',
  templateUrl: 'drawer-navigation-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDrawerNavigationItemComponent
  implements OnInit, OnDestroy, NavigationItem
{
  @HostBinding('class.navigation-item')
  _hostClasses = true;

  @Input()
  icon?: string;

  @Input()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;

  @Input()
  selected = false;

  @ViewChild(TemplateRef, { static: true })
  nestedNavTemplateRef!: TemplateRef<HTMLElement>;

  @ViewChild('sidebar')
  nestedNavElement!: ElementRef<HTMLElement>;

  @ContentChildren(RcDrawerNavigationItemComponent)
  itemsQL!: QueryList<RcDrawerNavigationItemComponent>;

  overlayRef!: OverlayRef | null;

  hovered$ = this.navigationStateService.state$.pipe(
    map((state) => !!state.hoveredItems.find((item) => item === this))
  );

  private readonly subscriptions = new SubSink();

  constructor(
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
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.hovered$.subscribe((hovered) => {
      hovered ? this.openTemplateOverlay() : this.closeTemplateOverlay();
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  closeTemplateOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  openTemplateOverlay() {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
          offsetX: -1,
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetX: -1,
        },
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: false,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });

    const templatePortal = new TemplatePortal(
      this.nestedNavTemplateRef,
      this.viewContainerRef
    );

    this.overlayRef.attach(templatePortal);

    this.subscriptions.sink = this.overlayRef
      .backdropClick()
      .subscribe(() => this.closeTemplateOverlay());
  }

  get level(): number {
    return !this.parent ? 0 : this.parent.level + 1;
  }

  get hasNestedNavItems() {
    // The component is included in the Querylist. So we need to remove it before checking the length
    return this.itemsQL.filter((i) => i !== this).length > 0;
  }

  get nestedNav(): HTMLElement | undefined {
    if (this.hasNestedNavItems) {
      return this.nestedNavElement.nativeElement;
    }

    return undefined;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.navigationStateService.selectItem(this as NavigationItem);
    if (!this.hasNestedNavItems) {
      this.nc.selectItem.emit({ source: this, value: this.value, event });
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.navigationStateService.leaveItem(this as NavigationItem, event);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseOver(event: MouseEvent) {
    this.navigationStateService.enterItem(this as NavigationItem, event);
  }

  onSidebarMouseLeave() {
    this.navigationStateService.leaveNav(this as NavigationItem);
  }

  onSidebarMouseEnter() {
    this.navigationStateService.enterNav(this as NavigationItem);
  }
}
