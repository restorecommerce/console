import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from '@angular/core';
import { inject, Injectable, InjectionToken, makeEnvironmentProviders, ChangeDetectorRef, Input, ChangeDetectionStrategy, Component, EventEmitter, Output, Pipe, HostBinding, DestroyRef, NgModule, Optional, SkipSelf } from '@angular/core';
import { map, shareReplay, BehaviorSubject, combineLatest, Subject, filter, takeUntil, distinctUntilChanged, take, tap } from 'rxjs';
import * as i2 from '@vcl/ng-vcl';
import { VCLBreakpoints, VCLIconModule, VCLFormControlGroupModule, VCLSelectModule, VCLSelectListModule, VCLButtonModule, VCLPopoverModule, VCLDataListModule, VCLIcogramModule, VCLInputModule, VCLDrawerModule, VCLNavigationModule, VCLPanelModule, VCLCheckboxModule, VCLPasswordInputModule, VCLButtonComponent, NotificationType, VCLNotificationModule, VCLSpinnerModule, IconAliasResolverServiceBase, IconResolverService, MaterialDesignIconResolverService, MaterialDesignVCLIconAliasResolverService, NotifierService, NotifierPosition } from '@vcl/ng-vcl';
import * as i1$2 from '@angular/common';
import { NgClass, CommonModule, AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i1 from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import * as i1$1 from '@angular/forms';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { zxcvbnOptions, zxcvbnAsync } from '@zxcvbn-ts/core';
import * as zxcvbnCommon from '@zxcvbn-ts/language-common';
import * as zxcvbnDe from '@zxcvbn-ts/language-de';
import * as zxcvbnEn from '@zxcvbn-ts/language-en';
import { matcherPwnedFactory } from '@zxcvbn-ts/matcher-pwned';
import { take as take$1, map as map$1 } from 'rxjs/operators';

class LayoutFacade {
    constructor() {
        this.breakpointObserver = inject(BreakpointObserver);
        this.isHandset$ = this.breakpointObserver
            .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
            .pipe(map((state) => state.matches), shareReplay({ bufferSize: 1, refCount: true }));
        this.collapsedSubject = new BehaviorSubject(false);
        this.collapsed$ = this.collapsedSubject.asObservable();
        this.navItemsSubject = new BehaviorSubject([]);
        this.categoriesSubject = new BehaviorSubject([]);
        this.navItems$ = this.navItemsSubject.asObservable();
        this.categories$ = this.categoriesSubject.asObservable();
        this.activeCategorySubject = new BehaviorSubject(this.categoriesSubject.value[0]?.id ?? 'home');
        this.activeCategory$ = this.activeCategorySubject.asObservable();
        this.visibleNavItems$ = combineLatest([
            this.navItems$,
            this.activeCategory$,
            this.categories$,
        ]).pipe(map(([items, activeCategory, categories]) => {
            const defaultCategoryId = categories[0]?.id;
            return items.filter((item) => {
                const id = item.categoryId ?? defaultCategoryId;
                return id === activeCategory;
            });
        }));
    }
    /** Called by the shell once it has the config */
    initConfig(config) {
        const navItems = config.navItems ?? [];
        const categories = config.categories && config.categories.length
            ? config.categories
            : [{ id: 'home', label: 'Home' }];
        this.navItemsSubject.next(navItems);
        this.categoriesSubject.next(categories);
        // reset active category if needed
        const firstId = categories[0]?.id ?? 'home';
        this.activeCategorySubject.next(firstId);
    }
    toggleSidebar() {
        this.collapsedSubject.next(!this.collapsedSubject.value);
    }
    setNavItems(items) {
        this.navItemsSubject.next(items);
    }
    setActiveCategory(id) {
        this.activeCategorySubject.next(id);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LayoutFacade, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LayoutFacade, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LayoutFacade, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

// layout.tokens.ts
const LAYOUT_CONFIG = new InjectionToken('LAYOUT_CONFIG');

function provideLayout(config) {
    return makeEnvironmentProviders([
        { provide: LAYOUT_CONFIG, useValue: config.layout },
    ]);
}

// rc-breadcrumb.component.ts
class RsBreadcrumbComponent {
    constructor() {
        /**
         * Text for the root crumb (defaults to "Home").
         * You can change this from the host app: <rc-breadcrumb rootLabel="Dashboard" />
         */
        this.rootLabel = 'Home';
        /**
         * Router URL for the root crumb.
         * Defaults to '/'.
         */
        this.rootUrl = '/';
        /**
         * Whether to display the root crumb at all.
         */
        this.showRoot = true;
        /**
         * Labels to exclude when the last crumb matches them (e.g. a generic "Home" page).
         * You can override from outside instead of relying on ROUTER constants.
         */
        this.breadcrumbsToExclude = [];
        /**
         * All generated breadcrumbs.
         */
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
        this.cdr = inject(ChangeDetectorRef);
        this.activatedRoute = inject(ActivatedRoute);
        this.router = inject(Router);
    }
    /**
     * Convenience getter: last breadcrumb label or empty.
     */
    get lastLabel() {
        return this.breadcrumbs[this.breadcrumbs.length - 1]?.label ?? '';
    }
    ngAfterViewInit() {
        // Rebuild breadcrumbs on each navigation end
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateBreadcrumbs();
        });
        // initial build (in case we already have an active route)
        this.updateBreadcrumbs();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    // ---- internal helpers ----
    updateBreadcrumbs() {
        const newBreadcrumbs = this.createBreadcrumbs(this.activatedRoute.root).reduce((acc, { label, url }) => {
            if (label !== '' && !acc.some((breadcrumb) => breadcrumb.url === url)) {
                acc.push({ label, url });
            }
            return acc;
        }, []);
        // shallow comparison is enough; array reference change triggers update
        if (this.breadcrumbs !== newBreadcrumbs) {
            this.breadcrumbs = newBreadcrumbs;
            this.cdr.markForCheck();
        }
    }
    createBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            const routeURL = child.snapshot.url
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
            }
            else {
                label = data['breadcrumb'] ?? child.snapshot.title ?? '';
            }
            if (label !== '' &&
                label !== breadcrumbs[breadcrumbs.length - 1]?.label) {
                breadcrumbs.push({ label, url });
            }
            // Continue recursively down the tree
            return this.createBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsBreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsBreadcrumbComponent, isStandalone: true, selector: "rs-breadcrumb", inputs: { rootLabel: "rootLabel", rootUrl: "rootUrl", showRoot: "showRoot", breadcrumbsToExclude: "breadcrumbsToExclude" }, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: VCLIconModule }, { kind: "component", type: i2.VCLIconComponent, selector: "vcl-icon", inputs: ["role", "icon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsBreadcrumbComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], propDecorators: { rootLabel: [{
                type: Input
            }], rootUrl: [{
                type: Input
            }], showRoot: [{
                type: Input
            }], breadcrumbsToExclude: [{
                type: Input
            }] } });

class RsCategorySelectComponent {
    constructor() {
        this.label = 'Select category';
        this.categories = [];
        this.value = null;
        this.valueChange = new EventEmitter();
    }
    onChange(id) {
        this.valueChange.emit(id);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCategorySelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsCategorySelectComponent, isStandalone: true, selector: "rs-category-select", inputs: { label: "label", categories: "categories", value: "value" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: `
    <vcl-form-control-group>
      <vcl-label>{{ label }}</vcl-label>

      <vcl-select>
        <vcl-select-list
          [value]="value"
          (valueChange)="onChange($event)"
        >
          @for (cat of categories; track cat.id) {
          <vcl-select-list-item [value]="cat.id">
            {{ cat.label }}
          </vcl-select-list-item>
          }
        </vcl-select-list>
      </vcl-select>
    </vcl-form-control-group>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: VCLFormControlGroupModule }, { kind: "component", type: i2.FormControlGroupComponent, selector: "vcl-form-control-group", inputs: ["errorStateAgent", "hideRequiredIndicator", "spinner"], exportAs: ["vclFormControlGroup"] }, { kind: "directive", type: i2.VCLLabelDirective, selector: "vcl-label, [vclLabel]", inputs: ["label"] }, { kind: "ngmodule", type: VCLSelectModule }, { kind: "component", type: i2.VCLSelectComponent, selector: "vcl-select", inputs: ["tabindex", "width", "height", "maxHeight", "placeholder", "search", "clearable"], outputs: ["afterClose", "searchValue"], exportAs: ["vclSelect"] }, { kind: "directive", type: i2.EmbeddedInputFieldLabelDirective, selector: "vcl-form-control-group", inputs: ["vclEmbeddedInputFieldLabelMode"], exportAs: ["vclEmbeddedInputFieldLabel"] }, { kind: "ngmodule", type: VCLSelectListModule }, { kind: "component", type: i2.VCLSelectListComponent, selector: "vcl-select-list", inputs: ["id", "selectionMode", "value", "disabled", "search", "searchValue"], outputs: ["valueChange"], exportAs: ["vclSelectList"] }, { kind: "component", type: i2.VCLSelectListItemComponent, selector: "vcl-select-list-item", inputs: ["disabled", "value", "searchValue", "label"], exportAs: ["vclSelectListItem"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCategorySelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-category-select',
                    standalone: true,
                    imports: [
                        CommonModule,
                        VCLFormControlGroupModule,
                        VCLSelectModule,
                        VCLSelectListModule,
                    ],
                    template: `
    <vcl-form-control-group>
      <vcl-label>{{ label }}</vcl-label>

      <vcl-select>
        <vcl-select-list
          [value]="value"
          (valueChange)="onChange($event)"
        >
          @for (cat of categories; track cat.id) {
          <vcl-select-list-item [value]="cat.id">
            {{ cat.label }}
          </vcl-select-list-item>
          }
        </vcl-select-list>
      </vcl-select>
    </vcl-form-control-group>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { label: [{
                type: Input
            }], categories: [{
                type: Input
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

const RS_TRANSLATION = new InjectionToken('RS_TRANSLATION');

class RsTranslatePipe {
    constructor() {
        this.i18n = inject(RS_TRANSLATION);
    }
    transform(key, params) {
        if (!key)
            return '';
        return this.i18n.t(key, params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsTranslatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: RsTranslatePipe, isStandalone: true, name: "rsTranslate" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsTranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'rsTranslate',
                    standalone: true,
                    pure: true,
                }]
        }] });

class RsHeaderToolbarComponent {
    constructor() {
        /** User info for account menu */
        this.user = null;
        /** All organizations to show in the dropdown */
        this.organizations = [];
        /** Currently selected organization ID */
        this.selectedOrganizationId = null;
        /** Show/hide specific account menu entries */
        this.showProfile = true;
        this.showPreferences = true;
        this.showSignOut = true;
        /** Popover positions (you can override if needed) */
        this.rightOrientedPositions = [
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
            },
        ];
        /** Emitted when an organization is selected */
        this.organizationSelected = new EventEmitter();
        /** Emitted when an account action is chosen */
        this.accountAction = new EventEmitter();
        /** Emitted when the search term changes */
        this.searchChange = new EventEmitter();
        this.hostRowClass = true;
        this.searchTerm = '';
    }
    get selectedOrganization() {
        return this.organizations.find((o) => o.id === this.selectedOrganizationId);
    }
    get filteredOrganizations() {
        const term = this.searchTerm.trim().toLowerCase();
        if (!term)
            return this.organizations;
        return this.organizations.filter((org) => {
            const name = org.name?.toLowerCase() ?? '';
            const desc = org.description?.toLowerCase() ?? '';
            return name.includes(term) || desc.includes(term);
        });
    }
    onSearchChange(term) {
        this.searchChange.emit(term);
    }
    onSelectOrganization(id) {
        this.organizationSelected.emit(id);
    }
    onAccountItemSelected(value) {
        if (value === 'profile' ||
            value === 'preferences' ||
            value === 'sign-out') {
            this.accountAction.emit(value);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsHeaderToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsHeaderToolbarComponent, isStandalone: true, selector: "rs-header-toolbar", inputs: { user: "user", organizations: "organizations", selectedOrganizationId: "selectedOrganizationId", showProfile: "showProfile", showPreferences: "showPreferences", showSignOut: "showSignOut", rightOrientedPositions: "rightOrientedPositions" }, outputs: { organizationSelected: "organizationSelected", accountAction: "accountAction", searchChange: "searchChange" }, host: { properties: { "class.row": "this.hostRowClass" } }, ngImport: i0, template: "@if (user) {\n<div>\n  <!-- Organization trigger -->\n  <span\n    #popoverOrganizationTarget\n    class=\"inline-block\"\n  >\n    <button\n      vcl-button\n      [selectable]=\"true\"\n      (click)=\"templatePopoverOrganization.toggle()\"\n      class=\"half-transparent\"\n    >\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:home-outline\"\n      ></vcl-icon>\n\n      {{\n        selectedOrganization?.name ||\n          ('rs-ui.header.org.selectPlaceholder' | rsTranslate)\n      }}\n\n      <vcl-icon\n        vclAppend\n        icon=\"mdi:chevron-down\"\n      ></vcl-icon>\n    </button>\n  </span>\n\n  <!-- Account trigger -->\n  <span\n    #popoverAccountTarget\n    class=\"inline-block\"\n  >\n    <button\n      vcl-button\n      [selectable]=\"true\"\n      (click)=\"templatePopoverAccount.toggle()\"\n      class=\"half-transparent account\"\n    >\n      <vcl-icogram>\n        <vcl-icon icon=\"mdi:account-outline\"></vcl-icon>\n        {{ user.fullName }}\n        <vcl-icon icon=\"mdi:chevron-down\"></vcl-icon>\n      </vcl-icogram>\n    </button>\n  </span>\n</div>\n\n<!-- ORG POPOVER -->\n<ng-template\n  vclPopover\n  #templatePopoverOrganization=\"vclPopover\"\n  [target]=\"popoverOrganizationTarget\"\n  class=\"mt-2\"\n  [closeOnOffClick]=\"true\"\n  [positions]=\"rightOrientedPositions\"\n>\n  <div class=\"rc-header-toolbar-org-popover\">\n    <!-- Search -->\n    <vcl-input-field class=\"searchField\">\n      <input\n        vclInput\n        placeholder=\"Search organizations...\"\n        [(ngModel)]=\"searchTerm\"\n      />\n    </vcl-input-field>\n\n    <!-- Organization list -->\n    <vcl-select-list\n      class=\"m-0\"\n      (valueChange)=\"\n        onSelectOrganization($event); templatePopoverOrganization.close()\n      \"\n    >\n      @for (organization of filteredOrganizations; track $index) {\n      <vcl-select-list-item\n        class=\"row center\"\n        [value]=\"organization.id\"\n      >\n        <div class=\"p-2\">{{ organization?.name }}</div>\n      </vcl-select-list-item>\n      }\n    </vcl-select-list>\n  </div>\n</ng-template>\n\n<!-- ACCOUNT POPOVER -->\n<ng-template\n  vclPopover\n  #templatePopoverAccount=\"vclPopover\"\n  [target]=\"popoverAccountTarget\"\n  [closeOnOffClick]=\"true\"\n  [positions]=\"rightOrientedPositions\"\n>\n  <vcl-select-list\n    (valueChange)=\"\n      onAccountItemSelected($event); templatePopoverAccount.close()\n    \"\n  >\n    @if (showProfile) {\n    <vcl-select-list-item value=\"profile\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:account-cog-outline\"\n      ></vcl-icon>\n      {{ 'rs-ui.header.account.profileLabel' | rsTranslate }}\n    </vcl-select-list-item>\n    } @if (showPreferences) {\n    <vcl-select-list-item value=\"preferences\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:cog-outline\"\n      ></vcl-icon>\n      {{ 'rs-ui.header.account.preferencesLabel' | rsTranslate }}\n    </vcl-select-list-item>\n    } @if (showSignOut) {\n    <vcl-select-list-item value=\"sign-out\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:logout\"\n      ></vcl-icon>\n      {{ 'rs-ui.header.account.signOutLabel' | rsTranslate }}\n    </vcl-select-list-item>\n    }\n  </vcl-select-list>\n</ng-template>\n}\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: RouterModule }, { kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: VCLButtonModule }, { kind: "component", type: i2.VCLIconComponent, selector: "vcl-icon", inputs: ["role", "icon"] }, { kind: "component", type: i2.VCLIcogramComponent, selector: "vcl-icogram, [vcl-icogram]" }, { kind: "component", type: i2.VCLButtonComponent, selector: "button[vcl-button], a[vcl-button]", inputs: ["disabled", "square", "selectable", "type", "value", "selected"], outputs: ["selectedChange"], exportAs: ["vclButton"] }, { kind: "ngmodule", type: VCLPopoverModule }, { kind: "directive", type: i2.VCLPopoverDirective, selector: "[vclPopover]", inputs: ["closeOnEscape", "closeOnOffClick", "scrollStrategy", "target", "panelClass", "positions", "visible"], outputs: ["afterClose", "visibleChange"], exportAs: ["vclPopover"] }, { kind: "ngmodule", type: VCLDataListModule }, { kind: "directive", type: i2.VCLPrependDirective, selector: "[vclPrepend]" }, { kind: "directive", type: i2.VCLAppendDirective, selector: "[vclAppend]" }, { kind: "ngmodule", type: VCLSelectListModule }, { kind: "component", type: i2.VCLSelectListComponent, selector: "vcl-select-list", inputs: ["id", "selectionMode", "value", "disabled", "search", "searchValue"], outputs: ["valueChange"], exportAs: ["vclSelectList"] }, { kind: "component", type: i2.VCLSelectListItemComponent, selector: "vcl-select-list-item", inputs: ["disabled", "value", "searchValue", "label"], exportAs: ["vclSelectListItem"] }, { kind: "ngmodule", type: VCLIconModule }, { kind: "ngmodule", type: VCLIcogramModule }, { kind: "ngmodule", type: VCLInputModule }, { kind: "directive", type: i2.InputDirective, selector: "input[vclInput]", inputs: ["id", "disabled", "autoselect"], exportAs: ["vclInput"] }, { kind: "component", type: i2.InputFieldComponent, selector: "vcl-input-field" }, { kind: "pipe", type: RsTranslatePipe, name: "rsTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsHeaderToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-header-toolbar', changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                        FormsModule,
                        RouterModule,
                        CommonModule,
                        VCLButtonModule,
                        VCLPopoverModule,
                        VCLDataListModule,
                        VCLSelectListModule,
                        VCLIconModule,
                        VCLIcogramModule,
                        VCLInputModule,
                        RsTranslatePipe,
                    ], template: "@if (user) {\n<div>\n  <!-- Organization trigger -->\n  <span\n    #popoverOrganizationTarget\n    class=\"inline-block\"\n  >\n    <button\n      vcl-button\n      [selectable]=\"true\"\n      (click)=\"templatePopoverOrganization.toggle()\"\n      class=\"half-transparent\"\n    >\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:home-outline\"\n      ></vcl-icon>\n\n      {{\n        selectedOrganization?.name ||\n          ('rs-ui.header.org.selectPlaceholder' | rsTranslate)\n      }}\n\n      <vcl-icon\n        vclAppend\n        icon=\"mdi:chevron-down\"\n      ></vcl-icon>\n    </button>\n  </span>\n\n  <!-- Account trigger -->\n  <span\n    #popoverAccountTarget\n    class=\"inline-block\"\n  >\n    <button\n      vcl-button\n      [selectable]=\"true\"\n      (click)=\"templatePopoverAccount.toggle()\"\n      class=\"half-transparent account\"\n    >\n      <vcl-icogram>\n        <vcl-icon icon=\"mdi:account-outline\"></vcl-icon>\n        {{ user.fullName }}\n        <vcl-icon icon=\"mdi:chevron-down\"></vcl-icon>\n      </vcl-icogram>\n    </button>\n  </span>\n</div>\n\n<!-- ORG POPOVER -->\n<ng-template\n  vclPopover\n  #templatePopoverOrganization=\"vclPopover\"\n  [target]=\"popoverOrganizationTarget\"\n  class=\"mt-2\"\n  [closeOnOffClick]=\"true\"\n  [positions]=\"rightOrientedPositions\"\n>\n  <div class=\"rc-header-toolbar-org-popover\">\n    <!-- Search -->\n    <vcl-input-field class=\"searchField\">\n      <input\n        vclInput\n        placeholder=\"Search organizations...\"\n        [(ngModel)]=\"searchTerm\"\n      />\n    </vcl-input-field>\n\n    <!-- Organization list -->\n    <vcl-select-list\n      class=\"m-0\"\n      (valueChange)=\"\n        onSelectOrganization($event); templatePopoverOrganization.close()\n      \"\n    >\n      @for (organization of filteredOrganizations; track $index) {\n      <vcl-select-list-item\n        class=\"row center\"\n        [value]=\"organization.id\"\n      >\n        <div class=\"p-2\">{{ organization?.name }}</div>\n      </vcl-select-list-item>\n      }\n    </vcl-select-list>\n  </div>\n</ng-template>\n\n<!-- ACCOUNT POPOVER -->\n<ng-template\n  vclPopover\n  #templatePopoverAccount=\"vclPopover\"\n  [target]=\"popoverAccountTarget\"\n  [closeOnOffClick]=\"true\"\n  [positions]=\"rightOrientedPositions\"\n>\n  <vcl-select-list\n    (valueChange)=\"\n      onAccountItemSelected($event); templatePopoverAccount.close()\n    \"\n  >\n    @if (showProfile) {\n    <vcl-select-list-item value=\"profile\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:account-cog-outline\"\n      ></vcl-icon>\n      {{ 'rs-ui.header.account.profileLabel' | rsTranslate }}\n    </vcl-select-list-item>\n    } @if (showPreferences) {\n    <vcl-select-list-item value=\"preferences\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:cog-outline\"\n      ></vcl-icon>\n      {{ 'rs-ui.header.account.preferencesLabel' | rsTranslate }}\n    </vcl-select-list-item>\n    } @if (showSignOut) {\n    <vcl-select-list-item value=\"sign-out\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:logout\"\n      ></vcl-icon>\n      {{ 'rs-ui.header.account.signOutLabel' | rsTranslate }}\n    </vcl-select-list-item>\n    }\n  </vcl-select-list>\n</ng-template>\n}\n" }]
        }], propDecorators: { user: [{
                type: Input
            }], organizations: [{
                type: Input
            }], selectedOrganizationId: [{
                type: Input
            }], showProfile: [{
                type: Input
            }], showPreferences: [{
                type: Input
            }], showSignOut: [{
                type: Input
            }], rightOrientedPositions: [{
                type: Input
            }], organizationSelected: [{
                type: Output
            }], accountAction: [{
                type: Output
            }], searchChange: [{
                type: Output
            }], hostRowClass: [{
                type: HostBinding,
                args: ['class.row']
            }] } });

// layout-header.tokens.ts
const LAYOUT_USER$ = new InjectionToken('LAYOUT_USER$');
const LAYOUT_ORGS$ = new InjectionToken('LAYOUT_ORGS$');
const LAYOUT_SELECTED_ORG_ID$ = new InjectionToken('LAYOUT_SELECTED_ORG_ID$');
/**
 * Handler for account actions: shell calls this, host decides what to do.
 * (navigate with ROUTER, dispatch logout, etc.)
 */
const LAYOUT_ACCOUNT_ACTION_HANDLER = new InjectionToken('LAYOUT_ACCOUNT_ACTION_HANDLER');
/**
 * Setter for selected org – shell calls this when user picks an org.
 */
const LAYOUT_SET_SELECTED_ORG = new InjectionToken('LAYOUT_SET_SELECTED_ORG');

class RsBannerComponent {
    constructor() {
        this._hostClasses = true;
        this.showName = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsBannerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsBannerComponent, isStandalone: true, selector: "rs-brand", inputs: { brandName: "brandName", showName: "showName", logoUrl: "logoUrl", logoLink: "logoLink" }, host: { properties: { "class.row": "this._hostClasses", "class.center": "this._hostClasses" } }, ngImport: i0, template: `
    @if (logoUrl) {
    <a [routerLink]="logoLink">
      <img
        [alt]="brandName"
        [src]="logoUrl"
        class="responsive-image logo"
        role="presentation"
        width="32"
        height="32"
      />
    </a>
    } @if (showName) {
    <span class="app-name hide-to-sm">
      {{ brandName }}
    </span>
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsBannerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-brand',
                    template: `
    @if (logoUrl) {
    <a [routerLink]="logoLink">
      <img
        [alt]="brandName"
        [src]="logoUrl"
        class="responsive-image logo"
        role="presentation"
        width="32"
        height="32"
      />
    </a>
    } @if (showName) {
    <span class="app-name hide-to-sm">
      {{ brandName }}
    </span>
    }
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [RouterModule],
                }]
        }], propDecorators: { _hostClasses: [{
                type: HostBinding,
                args: ['class.row']
            }, {
                type: HostBinding,
                args: ['class.center']
            }], brandName: [{
                type: Input
            }], showName: [{
                type: Input
            }], logoUrl: [{
                type: Input
            }], logoLink: [{
                type: Input
            }] } });

class LayoutShellComponent {
    constructor() {
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.facade = inject(LayoutFacade);
        this.config = inject(LAYOUT_CONFIG, { optional: false });
        this.preferenceHandler = inject(LAYOUT_ACCOUNT_ACTION_HANDLER, {
            optional: false,
        });
        this.destroyRef = inject(DestroyRef);
        this.isHandset$ = this.facade.isHandset$;
        this.accountHandler = inject(LAYOUT_ACCOUNT_ACTION_HANDLER, {
            optional: false,
        });
        this.setSelectedOrg = inject(LAYOUT_SET_SELECTED_ORG, {
            optional: false,
        });
        this.selectedOrgId$ = inject(LAYOUT_SELECTED_ORG_ID$, {
            optional: false,
        });
        this.orgs$ = inject(LAYOUT_ORGS$, { optional: false });
        this.user$ = inject(LAYOUT_USER$, { optional: false });
        this.accountAction = new EventEmitter();
        this.collapsed$ = this.facade.collapsed$;
        this.categories$ = this.facade.categories$;
        this.activeCategory$ = this.facade.activeCategory$;
        this.visibleNavItems$ = this.facade.visibleNavItems$;
        this.facade.initConfig(this.config);
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
            .subscribe((e) => {
            this.syncCategoryWithUrl(e.urlAfterRedirects);
        });
    }
    ngOnInit() {
        const orgFromUrl$ = this.route.queryParamMap.pipe(map((params) => params.get('org')), distinctUntilChanged());
        orgFromUrl$
            .pipe(filter((orgId) => !!orgId))
            .subscribe((orgId) => {
            this.setSelectedOrg(orgId);
        });
        combineLatest([orgFromUrl$, this.orgs$])
            .pipe(take(1))
            .subscribe(([orgId, orgs]) => {
            if (!orgId && orgs.length) {
                const defaultId = this.pickDefaultOrgId(orgs);
                this.navigateWithOrg(defaultId);
            }
        });
    }
    navigate(item) {
        if (item.externalUrl) {
            window.open(item.externalUrl, '_blank');
            return;
        }
        if (item.route) {
            this.router.navigate([item.route]);
        }
    }
    onToggleSidebar(isHandset) {
        if (isHandset) {
            this.toggleSidebar();
        }
    }
    toggleSidebar() {
        this.facade.toggleSidebar();
    }
    onOrgSelected(orgId) {
        this.setSelectedOrg(orgId);
    }
    onAccountAction(action) {
        this.accountAction.emit(action);
        this.preferenceHandler(action);
    }
    onSelectCategory(id) {
        this.facade.setActiveCategory(id);
        const category = this.config.categories?.find((c) => c.id === id);
        let target = category?.defaultRoute;
        if (!target) {
            const first = this.getFirstNavItemForCategory(id);
            if (first) {
                target = first.route ?? first.children?.[0]?.route;
            }
        }
        if (!target) {
            return;
        }
        if (Array.isArray(target)) {
            this.router.navigate(target);
        }
        else {
            this.router.navigate([target]);
        }
    }
    getFirstNavItemForCategory(id) {
        const flat = this.flattenNavItems(this.config.navItems);
        const defaultCategoryId = this.config.categories?.[0]?.id;
        return flat.find((item) => {
            const cid = item.categoryId ?? defaultCategoryId;
            return cid === id && (item.route || item.children?.some((c) => c.route));
        });
    }
    flattenNavItems(items) {
        const out = [];
        for (const item of items) {
            out.push(item);
            if (item.children?.length) {
                out.push(...this.flattenNavItems(item.children));
            }
        }
        return out;
    }
    syncCategoryWithUrl(url) {
        const flat = this.flattenNavItems(this.config.navItems);
        const defaultCategoryId = this.config.categories?.[0]?.id;
        const match = flat.find((item) => this.routeMatchesUrl(item.route, url));
        if (!match) {
            return;
        }
        const categoryId = match.categoryId ?? defaultCategoryId;
        if (!categoryId) {
            return;
        }
        this.facade.setActiveCategory(categoryId);
    }
    routeMatchesUrl(route, url) {
        if (!route)
            return false;
        let path;
        if (Array.isArray(route)) {
            path = this.router.createUrlTree(route).toString();
        }
        else {
            path = this.router.createUrlTree([route]).toString();
        }
        return url === path || url.startsWith(path + '/');
    }
    onOrgChanged(orgId) {
        this.navigateWithOrg(orgId);
    }
    navigateWithOrg(orgId) {
        // We ONLY change the URL here.
        // The subscription in ngOnInit will push it into OrgContext.
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { org: orgId },
            queryParamsHandling: 'merge',
        });
    }
    pickDefaultOrgId(orgs) {
        return orgs[0].id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LayoutShellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: LayoutShellComponent, isStandalone: true, selector: "rs-layout-shell", outputs: { accountAction: "accountAction" }, ngImport: i0, template: "<vcl-drawer-container\n  (backdropClick)=\"toggleSidebar()\"\n  class=\"layout-shell-container\"\n>\n  <vcl-drawer\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(collapsed$ | async) === false\"\n  >\n    <vcl-navigation class=\"h-100p layout-shell-navigation\">\n      <div class=\"row justify-content-between py-1 px-2\">\n        <rs-brand\n          [brandName]=\"config.appName\"\n          [logoUrl]=\"config.logoUrl\"\n        />\n        <button\n          vcl-button\n          square\n          class=\"transparent\"\n          [title]=\"(collapsed$ | async) ? 'Hide sidebar' : 'Show sidebar'\"\n          (click)=\"toggleSidebar()\"\n        >\n          <vcl-icon\n            class=\"scale155p\"\n            icon=\"mdi mdi-page-layout-sidebar-left\"\n          />\n        </button>\n      </div>\n\n      @if (isHandset$ | async) { @if (categories$ | async; as categories) {\n      <div class=\"my-2 px-2\">\n        <rs-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n      </div>\n      } } @for (item of (facade.visibleNavItems$ | async); track $index) {\n      <vcl-navigation-item\n        #navItem=\"vclNavigationItem\"\n        [routerLink]=\"item.children?.length ? null : item.route\"\n        [routerLinkActive]=\"item.children?.length ? [] : ['selected']\"\n        (click)=\"\n          !item.children?.length && navigate(item); $event.stopPropagation()\n        \"\n      >\n        <vcl-navigation-label>\n          <vcl-icogram>\n            @if (item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"navItem.opened ? 'vcl:chevron-down' : 'vcl:chevron-right'\"\n            ></vcl-icon>\n            } @if (!item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"item.icon\"\n            ></vcl-icon>\n            }\n\n            {{ item.label }}\n          </vcl-icogram>\n        </vcl-navigation-label>\n\n        @if (item.children?.length) {\n        <vcl-navigation>\n          @for (child of item.children; track $index) {\n          <vcl-navigation-item\n            [routerLink]=\"child.route\"\n            [routerLinkActive]=\"['selected']\"\n            (click)=\"navigate(child); $event.stopPropagation()\"\n          >\n            <vcl-navigation-label>\n              <vcl-icogram>\n                <vcl-icon\n                  vclPrepend\n                  [icon]=\"child.icon\"\n                ></vcl-icon>\n                {{ child.label }}\n              </vcl-icogram>\n            </vcl-navigation-label>\n          </vcl-navigation-item>\n          }\n        </vcl-navigation>\n        }\n      </vcl-navigation-item>\n      }\n\n      <div class=\"py-1 px-2 rs-navigation-item-bottom-container\">\n        @if ((isHandset$ | async) === false) { @if (categories$ | async; as\n        categories) {\n        <rs-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n        } }\n\n        <vcl-navigation-item>\n          <vcl-navigation-label>\n            \u00A92025 <a href=\"#\">Restorecommerce</a>. All rights reserved.\n          </vcl-navigation-label>\n        </vcl-navigation-item>\n      </div>\n    </vcl-navigation>\n  </vcl-drawer>\n\n  <header class=\"row align-items-center px-2\">\n    @if (collapsed$ | async) {\n    <button\n      vcl-button\n      square\n      class=\"transparent\"\n      title=\"Show sidebar\"\n      (click)=\"toggleSidebar()\"\n    >\n      <vcl-icon\n        class=\"scale155p\"\n        icon=\"mdi mdi-page-layout-sidebar-left\"\n      />\n    </button>\n    }\n\n    <rs-breadcrumb\n      [rootLabel]=\"'Home'\"\n      [rootUrl]=\"'/'\"\n      [breadcrumbsToExclude]=\"['Home']\"\n    />\n\n    <div class=\"flex\"></div>\n\n    <rs-header-toolbar\n      [user]=\"user$ | async\"\n      [organizations]=\"(orgs$ | async) || []\"\n      [selectedOrganizationId]=\"selectedOrgId$ | async\"\n      (organizationSelected)=\"onOrgSelected($event)\"\n      (accountAction)=\"onAccountAction($event)\"\n    />\n  </header>\n\n  <main class=\"flex px-2 rs-main\">\n    <router-outlet />\n  </main>\n</vcl-drawer-container>\n", styles: [":host{display:block;height:100vh;width:100vw;overflow:hidden}.layout-shell-container{display:flex;flex-direction:column;height:100%}.layout-shell-container>header{flex:0 0 auto;z-index:1;box-sizing:border-box}.layout-shell-container>main.rs-main{flex:1 1 auto;min-height:0}.rs-navigation-item-bottom-container{position:absolute;bottom:.5em}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "ngmodule", type: VCLDrawerModule }, { kind: "component", type: i2.VCLDrawerComponent, selector: "vcl-drawer", inputs: ["position", "mode", "opened"], outputs: ["openedChange"], exportAs: ["vclDrawer"] }, { kind: "component", type: i2.VCLDrawerContainerComponent, selector: "vcl-drawer-container", outputs: ["backdropClick"], exportAs: ["vclDrawerContainer"] }, { kind: "ngmodule", type: VCLNavigationModule }, { kind: "component", type: i2.VCLNavigationComponent, selector: "vcl-navigation", inputs: ["layout"] }, { kind: "component", type: i2.VCLNavigationItemComponent, selector: "vcl-navigation-item", inputs: ["opened", "closed", "selected"], exportAs: ["vclNavigationItem"] }, { kind: "component", type: i2.VCLNavigationLabelComponent, selector: "vcl-navigation-label", exportAs: ["vclNavigationLabel"] }, { kind: "ngmodule", type: VCLIcogramModule }, { kind: "component", type: i2.VCLIcogramComponent, selector: "vcl-icogram, [vcl-icogram]" }, { kind: "component", type: i2.VCLIconComponent, selector: "vcl-icon", inputs: ["role", "icon"] }, { kind: "component", type: RsCategorySelectComponent, selector: "rs-category-select", inputs: ["label", "categories", "value"], outputs: ["valueChange"] }, { kind: "ngmodule", type: VCLIconModule }, { kind: "ngmodule", type: VCLInputModule }, { kind: "ngmodule", type: VCLButtonModule }, { kind: "component", type: i2.VCLButtonComponent, selector: "button[vcl-button], a[vcl-button]", inputs: ["disabled", "square", "selectable", "type", "value", "selected"], outputs: ["selectedChange"], exportAs: ["vclButton"] }, { kind: "component", type: RsBreadcrumbComponent, selector: "rs-breadcrumb", inputs: ["rootLabel", "rootUrl", "showRoot", "breadcrumbsToExclude"] }, { kind: "component", type: RsHeaderToolbarComponent, selector: "rs-header-toolbar", inputs: ["user", "organizations", "selectedOrganizationId", "showProfile", "showPreferences", "showSignOut", "rightOrientedPositions"], outputs: ["organizationSelected", "accountAction", "searchChange"] }, { kind: "component", type: RsBannerComponent, selector: "rs-brand", inputs: ["brandName", "showName", "logoUrl", "logoLink"] }, { kind: "ngmodule", type: VCLFormControlGroupModule }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LayoutShellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-layout-shell', changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                        AsyncPipe,
                        RouterModule,
                        VCLDrawerModule,
                        VCLNavigationModule,
                        VCLIcogramModule,
                        RsCategorySelectComponent,
                        VCLIconModule,
                        VCLInputModule,
                        VCLButtonModule,
                        RsBreadcrumbComponent,
                        RsHeaderToolbarComponent,
                        RsBannerComponent,
                        VCLFormControlGroupModule,
                    ], template: "<vcl-drawer-container\n  (backdropClick)=\"toggleSidebar()\"\n  class=\"layout-shell-container\"\n>\n  <vcl-drawer\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(collapsed$ | async) === false\"\n  >\n    <vcl-navigation class=\"h-100p layout-shell-navigation\">\n      <div class=\"row justify-content-between py-1 px-2\">\n        <rs-brand\n          [brandName]=\"config.appName\"\n          [logoUrl]=\"config.logoUrl\"\n        />\n        <button\n          vcl-button\n          square\n          class=\"transparent\"\n          [title]=\"(collapsed$ | async) ? 'Hide sidebar' : 'Show sidebar'\"\n          (click)=\"toggleSidebar()\"\n        >\n          <vcl-icon\n            class=\"scale155p\"\n            icon=\"mdi mdi-page-layout-sidebar-left\"\n          />\n        </button>\n      </div>\n\n      @if (isHandset$ | async) { @if (categories$ | async; as categories) {\n      <div class=\"my-2 px-2\">\n        <rs-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n      </div>\n      } } @for (item of (facade.visibleNavItems$ | async); track $index) {\n      <vcl-navigation-item\n        #navItem=\"vclNavigationItem\"\n        [routerLink]=\"item.children?.length ? null : item.route\"\n        [routerLinkActive]=\"item.children?.length ? [] : ['selected']\"\n        (click)=\"\n          !item.children?.length && navigate(item); $event.stopPropagation()\n        \"\n      >\n        <vcl-navigation-label>\n          <vcl-icogram>\n            @if (item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"navItem.opened ? 'vcl:chevron-down' : 'vcl:chevron-right'\"\n            ></vcl-icon>\n            } @if (!item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"item.icon\"\n            ></vcl-icon>\n            }\n\n            {{ item.label }}\n          </vcl-icogram>\n        </vcl-navigation-label>\n\n        @if (item.children?.length) {\n        <vcl-navigation>\n          @for (child of item.children; track $index) {\n          <vcl-navigation-item\n            [routerLink]=\"child.route\"\n            [routerLinkActive]=\"['selected']\"\n            (click)=\"navigate(child); $event.stopPropagation()\"\n          >\n            <vcl-navigation-label>\n              <vcl-icogram>\n                <vcl-icon\n                  vclPrepend\n                  [icon]=\"child.icon\"\n                ></vcl-icon>\n                {{ child.label }}\n              </vcl-icogram>\n            </vcl-navigation-label>\n          </vcl-navigation-item>\n          }\n        </vcl-navigation>\n        }\n      </vcl-navigation-item>\n      }\n\n      <div class=\"py-1 px-2 rs-navigation-item-bottom-container\">\n        @if ((isHandset$ | async) === false) { @if (categories$ | async; as\n        categories) {\n        <rs-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n        } }\n\n        <vcl-navigation-item>\n          <vcl-navigation-label>\n            \u00A92025 <a href=\"#\">Restorecommerce</a>. All rights reserved.\n          </vcl-navigation-label>\n        </vcl-navigation-item>\n      </div>\n    </vcl-navigation>\n  </vcl-drawer>\n\n  <header class=\"row align-items-center px-2\">\n    @if (collapsed$ | async) {\n    <button\n      vcl-button\n      square\n      class=\"transparent\"\n      title=\"Show sidebar\"\n      (click)=\"toggleSidebar()\"\n    >\n      <vcl-icon\n        class=\"scale155p\"\n        icon=\"mdi mdi-page-layout-sidebar-left\"\n      />\n    </button>\n    }\n\n    <rs-breadcrumb\n      [rootLabel]=\"'Home'\"\n      [rootUrl]=\"'/'\"\n      [breadcrumbsToExclude]=\"['Home']\"\n    />\n\n    <div class=\"flex\"></div>\n\n    <rs-header-toolbar\n      [user]=\"user$ | async\"\n      [organizations]=\"(orgs$ | async) || []\"\n      [selectedOrganizationId]=\"selectedOrgId$ | async\"\n      (organizationSelected)=\"onOrgSelected($event)\"\n      (accountAction)=\"onAccountAction($event)\"\n    />\n  </header>\n\n  <main class=\"flex px-2 rs-main\">\n    <router-outlet />\n  </main>\n</vcl-drawer-container>\n", styles: [":host{display:block;height:100vh;width:100vw;overflow:hidden}.layout-shell-container{display:flex;flex-direction:column;height:100%}.layout-shell-container>header{flex:0 0 auto;z-index:1;box-sizing:border-box}.layout-shell-container>main.rs-main{flex:1 1 auto;min-height:0}.rs-navigation-item-bottom-container{position:absolute;bottom:.5em}\n"] }]
        }], ctorParameters: () => [], propDecorators: { accountAction: [{
                type: Output
            }] } });

class RsCardComponent {
    constructor() {
        this.title = '';
        this.forceFooter = false;
    }
    get showFooter() {
        return this.forceFooter || true; // change later if you add detection
    }
    get hasHeaderContent() {
        return !!this.title;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsCardComponent, isStandalone: true, selector: "rs-card", inputs: { title: "title", subtitle: "subtitle", icon: "icon", variant: "variant", forceFooter: "forceFooter" }, ngImport: i0, template: `
    <vcl-panel
      class="rs-card"
      [ngClass]="variant"
    >
      @if (title || hasHeaderContent) {
      <vcl-panel-header>
        <div class="row align-items-center justify-content-between">
          <div class="row align-items-center gap-1">
            @if (icon) {
            <vcl-icon
              [icon]="icon"
              class="mr-1"
            ></vcl-icon>
            }

            <div class="column">
              <div class="rs-card__title">{{ title }}</div>
              @if (subtitle) {
              <div class="rs-card__subtitle">
                {{ subtitle }}
              </div>
              }
            </div>
          </div>

          <div class="row rs-card__header-actions">
            <ng-content select="[rsCardHeaderActions]"></ng-content>
          </div>
        </div>

        <!-- If caller wants to completely override header, use this slot -->
        <ng-content select="[rsCardHeader]"></ng-content>
      </vcl-panel-header>
      }

      <div class="rs-card__content">
        <ng-content></ng-content>
      </div>

      @if(showFooter) {
      <vcl-panel-footer>
        <div class="row align-items-center py-1 rs-card__footer">
          <ng-content select="[rsCardFooter]"></ng-content>
        </div>
      </vcl-panel-footer>
      }
    </vcl-panel>
  `, isInline: true, styles: [".rs-card{display:block}.rs-card__title{font-weight:600;font-size:.95rem}.rs-card__subtitle{font-size:.8rem;opacity:.7}.rs-card__footer{padding-left:1rem;padding-right:1rem}.rs-card__header-actions :where(button,a){margin-left:.25rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: VCLPanelModule }, { kind: "component", type: i2.VCLIconComponent, selector: "vcl-icon", inputs: ["role", "icon"] }, { kind: "component", type: i2.VCLPanelComponent, selector: "vcl-panel, vcl-panel-dialog", inputs: ["type", "showCloseButton"], outputs: ["close"] }, { kind: "directive", type: i2.VCLPanelFooterDirective, selector: "vcl-panel-footer" }, { kind: "directive", type: i2.VCLPanelHeaderDirective, selector: "vcl-panel-header" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-card', standalone: true, imports: [CommonModule, VCLPanelModule], template: `
    <vcl-panel
      class="rs-card"
      [ngClass]="variant"
    >
      @if (title || hasHeaderContent) {
      <vcl-panel-header>
        <div class="row align-items-center justify-content-between">
          <div class="row align-items-center gap-1">
            @if (icon) {
            <vcl-icon
              [icon]="icon"
              class="mr-1"
            ></vcl-icon>
            }

            <div class="column">
              <div class="rs-card__title">{{ title }}</div>
              @if (subtitle) {
              <div class="rs-card__subtitle">
                {{ subtitle }}
              </div>
              }
            </div>
          </div>

          <div class="row rs-card__header-actions">
            <ng-content select="[rsCardHeaderActions]"></ng-content>
          </div>
        </div>

        <!-- If caller wants to completely override header, use this slot -->
        <ng-content select="[rsCardHeader]"></ng-content>
      </vcl-panel-header>
      }

      <div class="rs-card__content">
        <ng-content></ng-content>
      </div>

      @if(showFooter) {
      <vcl-panel-footer>
        <div class="row align-items-center py-1 rs-card__footer">
          <ng-content select="[rsCardFooter]"></ng-content>
        </div>
      </vcl-panel-footer>
      }
    </vcl-panel>
  `, styles: [".rs-card{display:block}.rs-card__title{font-weight:600;font-size:.95rem}.rs-card__subtitle{font-size:.8rem;opacity:.7}.rs-card__footer{padding-left:1rem;padding-right:1rem}.rs-card__header-actions :where(button,a){margin-left:.25rem}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], icon: [{
                type: Input
            }], variant: [{
                type: Input
            }], forceFooter: [{
                type: Input
            }] } });

// rs-centered-page.component.ts
class RsCenteredPageComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCenteredPageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsCenteredPageComponent, isStandalone: true, selector: "rs-centered-page", ngImport: i0, template: `
    <div
      class="rs-centered-page row justify-center align-items-center p-5 w-100p"
    >
      <div class="rs-centered-page__content w-100p">
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, styles: [":host{display:block;width:100%;min-height:100vh}.rs-centered-page{min-height:100vh}.rs-centered-page__content{max-width:480px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCenteredPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-centered-page', standalone: true, imports: [CommonModule], template: `
    <div
      class="rs-centered-page row justify-center align-items-center p-5 w-100p"
    >
      <div class="rs-centered-page__content w-100p">
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: [":host{display:block;width:100%;min-height:100vh}.rs-centered-page{min-height:100vh}.rs-centered-page__content{max-width:480px}\n"] }]
        }] });

class RsCopyrightComponent {
    constructor() {
        this.year = new Date().getFullYear();
        this.company = 'RestoreCommerce';
        this.text = 'All rights reserved.';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCopyrightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsCopyrightComponent, isStandalone: true, selector: "rs-copyright", inputs: { year: "year", company: "company", text: "text" }, ngImport: i0, template: `
    <div class="align-centered mt-5 rs-copyright">
      &copy; {{ year }} <a [routerLink]="['/']">{{ company }}</a> . {{ text }}
    </div>
  `, isInline: true, styles: [".rs-copyright{font-size:.8rem;opacity:.75}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsCopyrightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-copyright', standalone: true, imports: [RouterModule], template: `
    <div class="align-centered mt-5 rs-copyright">
      &copy; {{ year }} <a [routerLink]="['/']">{{ company }}</a> . {{ text }}
    </div>
  `, styles: [".rs-copyright{font-size:.8rem;opacity:.75}\n"] }]
        }], propDecorators: { year: [{
                type: Input
            }], company: [{
                type: Input
            }], text: [{
                type: Input
            }] } });

class RsAuthPageComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthPageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsAuthPageComponent, isStandalone: true, selector: "rs-auth-page", ngImport: i0, template: `
    <rs-centered-page>
      <div class="col">
        <rs-card class="mb-5">
          <ng-content></ng-content>
        </rs-card>

        <rs-copyright />
      </div>
    </rs-centered-page>
  `, isInline: true, dependencies: [{ kind: "component", type: RsCenteredPageComponent, selector: "rs-centered-page" }, { kind: "component", type: RsCardComponent, selector: "rs-card", inputs: ["title", "subtitle", "icon", "variant", "forceFooter"] }, { kind: "component", type: RsCopyrightComponent, selector: "rs-copyright", inputs: ["year", "company", "text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthPageComponent, decorators: [{
            type: Component,
            args: [{
                    template: `
    <rs-centered-page>
      <div class="col">
        <rs-card class="mb-5">
          <ng-content></ng-content>
        </rs-card>

        <rs-copyright />
      </div>
    </rs-centered-page>
  `,
                    selector: 'rs-auth-page',
                    imports: [RsCenteredPageComponent, RsCardComponent, RsCopyrightComponent],
                }]
        }] });

const MODULES_AUTHN_CONFIG = new InjectionToken('MODULES_AUTHN_CONFIG');

const SIGN_IN_BRANDING_CONFIG = new InjectionToken('SIGN_IN_BRANDING_CONFIG');
/**
 * Host apps use this in their providers:
 *
 *   provideSignInBranding({
 *     appName: 'Console',
 *     logoUrl: '/assets/logo.svg',
 *   })
 */
function provideSignInBranding(config) {
    return makeEnvironmentProviders([
        {
            provide: SIGN_IN_BRANDING_CONFIG,
            useValue: config,
        },
    ]);
}

class RsSignInComponent {
    constructor() {
        this.signIn = new EventEmitter();
        this.fb = inject(FormBuilder);
        this.defaultConfig = inject(SIGN_IN_BRANDING_CONFIG, { optional: true });
        this.config = inject(MODULES_AUTHN_CONFIG, { optional: true });
        this.form = this.fb.group({
            identifier: ['', []],
            password: ['', []],
            remember: [false, []],
        });
    }
    get formFields() {
        return {
            identifier: this.form.get('identifier'),
            password: this.form.get('password'),
            remember: this.form.get('remember'),
        };
    }
    get branding() {
        const fallback = {
            appName: 'My App',
            logoUrl: '',
            logoAlt: 'App logo',
            tagline: '',
        };
        const base = this.defaultConfig ?? fallback;
        return {
            appName: this.appName ?? base.appName,
            logoUrl: this.logoUrl ?? base.logoUrl,
            logoAlt: this.logoAlt ?? base.logoAlt ?? base.appName,
            tagline: this.tagline ?? base.tagline,
        };
    }
    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = {
            identifier: this.form.value.identifier?.trim() ?? '',
            password: this.form.value.password ?? '',
            remember: this.form.value.remember || false,
        };
        this.signIn.emit(payload);
        if (this.config?.signInHandler) {
            this.config.signInHandler(payload);
        }
        else {
            console.warn('[Authn] signInHandler not configured');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsSignInComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsSignInComponent, isStandalone: true, selector: "rs-sign-in", inputs: { appName: "appName", logoUrl: "logoUrl", logoAlt: "logoAlt", tagline: "tagline" }, outputs: { signIn: "signIn" }, ngImport: i0, template: "<rs-auth-page>\n  <div class=\"w-100p col justify-center align-items-center mt-3 mb-2\">\n    @if (branding.logoUrl) {\n    <span>\n      <img\n        width=\"100\"\n        [src]=\"branding.logoUrl\"\n        [alt]=\"branding.logoAlt\"\n      />\n    </span>\n    }\n    <h3 class=\"p-2\">{{ branding.appName }}</h3>\n  </div>\n  <div class=\"mt-1 row justify-center align-item-center\">\n    <span>Sign in</span>\n  </div>\n  <hr />\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>Email or Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-checkbox formControlName=\"remember\"\n        >Stay signed in for 7 days</vcl-checkbox\n      >\n    </vcl-form-control-group>\n\n    <div class=\"row\">\n      <button\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p\"\n      >\n        Sign in\n      </button>\n    </div>\n\n    <p class=\"mt-3\">\n      <a routerLink=\"password-recovery\">Forgot Password?</a>\n    </p>\n  </form>\n</rs-auth-page>\n", dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: VCLCheckboxModule }, { kind: "component", type: i2.VCLCheckboxComponent, selector: "vcl-checkbox", inputs: ["id", "tabindex", "disabled", "checked"], outputs: ["checkedChange"], exportAs: ["vclCheckbox"] }, { kind: "ngmodule", type: VCLButtonModule }, { kind: "component", type: i2.VCLButtonComponent, selector: "button[vcl-button], a[vcl-button]", inputs: ["disabled", "square", "selectable", "type", "value", "selected"], outputs: ["selectedChange"], exportAs: ["vclButton"] }, { kind: "ngmodule", type: VCLInputModule }, { kind: "directive", type: i2.InputDirective, selector: "input[vclInput]", inputs: ["id", "disabled", "autoselect"], exportAs: ["vclInput"] }, { kind: "component", type: i2.InputFieldComponent, selector: "vcl-input-field" }, { kind: "component", type: i2.FormControlGroupComponent, selector: "vcl-form-control-group", inputs: ["errorStateAgent", "hideRequiredIndicator", "spinner"], exportAs: ["vclFormControlGroup"] }, { kind: "directive", type: i2.VCLLabelDirective, selector: "vcl-label, [vclLabel]", inputs: ["label"] }, { kind: "directive", type: i2.FormDirective, selector: "[vclForm]", exportAs: ["vclForm"] }, { kind: "directive", type: i2.EmbeddedInputFieldLabelDirective, selector: "vcl-form-control-group", inputs: ["vclEmbeddedInputFieldLabelMode"], exportAs: ["vclEmbeddedInputFieldLabel"] }, { kind: "ngmodule", type: VCLFormControlGroupModule }, { kind: "ngmodule", type: VCLPasswordInputModule }, { kind: "component", type: i2.VCLPasswordInputComponent, selector: "vcl-password-input", inputs: ["visible"], exportAs: ["vclPasswordInput"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: RsAuthPageComponent, selector: "rs-auth-page" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsSignInComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                        ReactiveFormsModule,
                        VCLCheckboxModule,
                        VCLButtonModule,
                        VCLInputModule,
                        VCLFormControlGroupModule,
                        VCLPasswordInputModule,
                        RouterModule,
                        RsAuthPageComponent,
                    ], template: "<rs-auth-page>\n  <div class=\"w-100p col justify-center align-items-center mt-3 mb-2\">\n    @if (branding.logoUrl) {\n    <span>\n      <img\n        width=\"100\"\n        [src]=\"branding.logoUrl\"\n        [alt]=\"branding.logoAlt\"\n      />\n    </span>\n    }\n    <h3 class=\"p-2\">{{ branding.appName }}</h3>\n  </div>\n  <div class=\"mt-1 row justify-center align-item-center\">\n    <span>Sign in</span>\n  </div>\n  <hr />\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>Email or Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-checkbox formControlName=\"remember\"\n        >Stay signed in for 7 days</vcl-checkbox\n      >\n    </vcl-form-control-group>\n\n    <div class=\"row\">\n      <button\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p\"\n      >\n        Sign in\n      </button>\n    </div>\n\n    <p class=\"mt-3\">\n      <a routerLink=\"password-recovery\">Forgot Password?</a>\n    </p>\n  </form>\n</rs-auth-page>\n" }]
        }], propDecorators: { appName: [{
                type: Input
            }], logoUrl: [{
                type: Input
            }], logoAlt: [{
                type: Input
            }], tagline: [{
                type: Input
            }], signIn: [{
                type: Output
            }] } });

class RsPasswordRecoveryComponent {
    constructor() {
        this.passwordRecovery = new EventEmitter();
        this.config = inject(MODULES_AUTHN_CONFIG, { optional: true });
        this.fb = inject(FormBuilder);
        this.form = this.fb.group({
            identifier: this.fb.control('', {
                nonNullable: false,
                validators: [Validators.required],
            }),
        });
    }
    get formFields() {
        return {
            identifier: this.form.get('identifier'),
        };
    }
    onClickPasswordRecovery() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const identifier = this.form.value.identifier?.trim() ?? '';
        if (!identifier) {
            this.formFields.identifier.setErrors({ required: true });
            this.formFields.identifier.markAsTouched();
            return;
        }
        const payload = {
            identifier,
        };
        this.passwordRecovery.emit(payload);
        if (this.config?.passwordRecoveryHandler) {
            this.config.passwordRecoveryHandler(payload);
        }
        else {
            console.warn('[Authn] passwordRecoveryHandler not configured');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsPasswordRecoveryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsPasswordRecoveryComponent, isStandalone: true, selector: "rs-auth-password-recovery", outputs: { passwordRecovery: "passwordRecovery" }, ngImport: i0, template: "<rs-auth-page>\n  <h2>Password Recovery</h2>\n  <p>Please enter the the email or username associated with your account.</p>\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onClickPasswordRecovery()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>Email or Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n    </vcl-form-control-group>\n    <div class=\"align-right mt-3\">\n      <button\n        vcl-button\n        type=\"submit\"\n      >\n        Reset Password\n      </button>\n    </div>\n  </form>\n</rs-auth-page>\n", styles: [":host{display:block}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: VCLButtonModule }, { kind: "component", type: i2.VCLButtonComponent, selector: "button[vcl-button], a[vcl-button]", inputs: ["disabled", "square", "selectable", "type", "value", "selected"], outputs: ["selectedChange"], exportAs: ["vclButton"] }, { kind: "ngmodule", type: VCLInputModule }, { kind: "directive", type: i2.InputDirective, selector: "input[vclInput]", inputs: ["id", "disabled", "autoselect"], exportAs: ["vclInput"] }, { kind: "component", type: i2.InputFieldComponent, selector: "vcl-input-field" }, { kind: "component", type: i2.FormControlGroupComponent, selector: "vcl-form-control-group", inputs: ["errorStateAgent", "hideRequiredIndicator", "spinner"], exportAs: ["vclFormControlGroup"] }, { kind: "component", type: i2.FormControlHintErrorComponent, selector: "vcl-hint-error", inputs: ["error"] }, { kind: "directive", type: i2.VCLLabelDirective, selector: "vcl-label, [vclLabel]", inputs: ["label"] }, { kind: "directive", type: i2.FormDirective, selector: "[vclForm]", exportAs: ["vclForm"] }, { kind: "directive", type: i2.EmbeddedInputFieldLabelDirective, selector: "vcl-form-control-group", inputs: ["vclEmbeddedInputFieldLabelMode"], exportAs: ["vclEmbeddedInputFieldLabel"] }, { kind: "ngmodule", type: VCLFormControlGroupModule }, { kind: "component", type: RsAuthPageComponent, selector: "rs-auth-page" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsPasswordRecoveryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-auth-password-recovery', imports: [
                        ReactiveFormsModule,
                        VCLButtonModule,
                        VCLInputModule,
                        VCLFormControlGroupModule,
                        RsAuthPageComponent,
                    ], template: "<rs-auth-page>\n  <h2>Password Recovery</h2>\n  <p>Please enter the the email or username associated with your account.</p>\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onClickPasswordRecovery()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>Email or Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n    </vcl-form-control-group>\n    <div class=\"align-right mt-3\">\n      <button\n        vcl-button\n        type=\"submit\"\n      >\n        Reset Password\n      </button>\n    </div>\n  </form>\n</rs-auth-page>\n", styles: [":host{display:block}\n"] }]
        }], propDecorators: { passwordRecovery: [{
                type: Output
            }] } });

class RsFieldPolicyHintsComponent {
    constructor() {
        this.requiredMessage = 'This field is required.';
        this.patternErrorKey = 'pattern';
        this.patternTitle = 'This field must:';
        this.patternBullets = [];
        this.extraErrors = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsFieldPolicyHintsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsFieldPolicyHintsComponent, isStandalone: true, selector: "rs-field-policy-hints", inputs: { control: "control", requiredMessage: "requiredMessage", patternErrorKey: "patternErrorKey", patternTitle: "patternTitle", patternBullets: "patternBullets", extraErrors: "extraErrors" }, ngImport: i0, template: `
    <vcl-hint-error error="required">
      {{ requiredMessage }}
    </vcl-hint-error>

    @if (patternTitle) {
    <vcl-hint-error [error]="patternErrorKey">
      {{ patternTitle }}
    </vcl-hint-error>
    } @for (bullet of patternBullets; track $index) {
    <vcl-hint-warning> - {{ bullet }} </vcl-hint-warning>
    } @for (extra of extraErrors; track extra.key) {
    <vcl-hint-error [error]="extra.key">
      {{ extra.message }}
    </vcl-hint-error>
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: VCLFormControlGroupModule }, { kind: "component", type: i2.FormControlHintComponent, selector: "vcl-hint, vcl-hint-warning, vcl-hint-success" }, { kind: "component", type: i2.FormControlHintErrorComponent, selector: "vcl-hint-error", inputs: ["error"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsFieldPolicyHintsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-field-policy-hints',
                    template: `
    <vcl-hint-error error="required">
      {{ requiredMessage }}
    </vcl-hint-error>

    @if (patternTitle) {
    <vcl-hint-error [error]="patternErrorKey">
      {{ patternTitle }}
    </vcl-hint-error>
    } @for (bullet of patternBullets; track $index) {
    <vcl-hint-warning> - {{ bullet }} </vcl-hint-warning>
    } @for (extra of extraErrors; track extra.key) {
    <vcl-hint-error [error]="extra.key">
      {{ extra.message }}
    </vcl-hint-error>
    }
  `,
                    imports: [VCLFormControlGroupModule],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { control: [{
                type: Input,
                args: [{ required: true }]
            }], requiredMessage: [{
                type: Input
            }], patternErrorKey: [{
                type: Input
            }], patternTitle: [{
                type: Input
            }], patternBullets: [{
                type: Input
            }], extraErrors: [{
                type: Input
            }] } });

class RsEmailPolicyHintsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsEmailPolicyHintsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsEmailPolicyHintsComponent, isStandalone: true, selector: "rs-email-policy-hints", inputs: { control: "control" }, ngImport: i0, template: `
    <rs-field-policy-hints
      [control]="control"
      header="Your email must:"
      requiredMessage="Email is required."
      patternErrorKey="email"
      patternTitle="Please enter a valid email address."
      [patternBullets]="['be in the format name@example.com']"
    />
  `, isInline: true, dependencies: [{ kind: "component", type: RsFieldPolicyHintsComponent, selector: "rs-field-policy-hints", inputs: ["control", "requiredMessage", "patternErrorKey", "patternTitle", "patternBullets", "extraErrors"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsEmailPolicyHintsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-email-policy-hints',
                    template: `
    <rs-field-policy-hints
      [control]="control"
      header="Your email must:"
      requiredMessage="Email is required."
      patternErrorKey="email"
      patternTitle="Please enter a valid email address."
      [patternBullets]="['be in the format name@example.com']"
    />
  `,
                    imports: [RsFieldPolicyHintsComponent],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { control: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class RsPasswordPolicyHintsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsPasswordPolicyHintsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsPasswordPolicyHintsComponent, isStandalone: true, selector: "rs-password-policy-hints", inputs: { control: "control" }, ngImport: i0, template: `
    <rs-field-policy-hints
      [control]="control"
      requiredMessage="Password is required."
      patternErrorKey="rsZxcvbnMinScore"
      patternTitle="Your password does not meet the policy."
      [patternBullets]="[
        'have at least 10 characters in length',
        'contain a lowercase letter',
        'contain an uppercase letter',
        'contain a number',
        'contain a special character'
      ]"
    />
  `, isInline: true, dependencies: [{ kind: "component", type: RsFieldPolicyHintsComponent, selector: "rs-field-policy-hints", inputs: ["control", "requiredMessage", "patternErrorKey", "patternTitle", "patternBullets", "extraErrors"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsPasswordPolicyHintsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-password-policy-hints',
                    template: `
    <rs-field-policy-hints
      [control]="control"
      requiredMessage="Password is required."
      patternErrorKey="rsZxcvbnMinScore"
      patternTitle="Your password does not meet the policy."
      [patternBullets]="[
        'have at least 10 characters in length',
        'contain a lowercase letter',
        'contain an uppercase letter',
        'contain a number',
        'contain a special character'
      ]"
    />
  `,
                    imports: [RsFieldPolicyHintsComponent],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { control: [{
                type: Input,
                args: [{ required: true }]
            }] } });

// rs-username-policy-hints.component.ts
class RsUsernamePolicyHintsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsUsernamePolicyHintsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsUsernamePolicyHintsComponent, isStandalone: true, selector: "rs-username-policy-hints", inputs: { control: "control" }, ngImport: i0, template: `
    <rs-field-policy-hints
      [control]="control"
      requiredMessage="This field is required."
      patternErrorKey="pattern"
      patternTitle="This field must:"
      [patternBullets]="[
        'have at least 8 characters in length',
        'start with a letter (lowercase or uppercase)',
        'contain only letters (lowercase or uppercase), numbers, and the characters . - _ @',
        'not have any consecutive characters repeated'
      ]"
      [extraErrors]="[
        { key: 'minlength', message: 'Must be at least 8 characters long.' }
      ]"
    />
  `, isInline: true, dependencies: [{ kind: "component", type: RsFieldPolicyHintsComponent, selector: "rs-field-policy-hints", inputs: ["control", "requiredMessage", "patternErrorKey", "patternTitle", "patternBullets", "extraErrors"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsUsernamePolicyHintsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-username-policy-hints',
                    template: `
    <rs-field-policy-hints
      [control]="control"
      requiredMessage="This field is required."
      patternErrorKey="pattern"
      patternTitle="This field must:"
      [patternBullets]="[
        'have at least 8 characters in length',
        'start with a letter (lowercase or uppercase)',
        'contain only letters (lowercase or uppercase), numbers, and the characters . - _ @',
        'not have any consecutive characters repeated'
      ]"
      [extraErrors]="[
        { key: 'minlength', message: 'Must be at least 8 characters long.' }
      ]"
    />
  `,
                    imports: [RsFieldPolicyHintsComponent],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { control: [{
                type: Input,
                args: [{ required: true }]
            }] } });

/**
 * Group-level validator that checks if two controls have the same value.
 *
 * Defaults:
 *  - passwordControlName: 'password'
 *  - confirmationControlName: 'passwordConfirmation'
 *
 * Usage:
 *  formBuilder.group(
 *    {
 *      password: [''],
 *      passwordConfirmation: [''],
 *    },
 *    { validators: rsPasswordConfirmationValidator() }
 *  );
 */
function rsPasswordConfirmationValidator(passwordControlName = 'password', confirmationControlName = 'passwordConfirmation') {
    return (group) => {
        const password = group.get(passwordControlName);
        const confirmation = group.get(confirmationControlName);
        if (!password || !confirmation) {
            return null;
        }
        const pwValue = password.value;
        const confValue = confirmation.value;
        if (!pwValue || !confValue) {
            return null;
        }
        return pwValue === confValue
            ? null
            : { passwordConfirmationMismatch: true };
    };
}

// password-strength.util.ts
let initialized = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let currentOptions;
/**
 * Initialize zxcvbn matchers & dictionaries for the browser.
 * Safe to call multiple times; it is idempotent.
 */
function initRsUiPasswordMatcher(opts) {
    if (initialized)
        return;
    const { minLength, userInputs = [], translations = zxcvbnEn.translations, } = opts;
    currentOptions = { minLength, userInputs, translations };
    // --- Custom matchers (parity with backend) ---
    const minLengthMatcher = {
        Matching: class MatchMinLength {
            match({ password }) {
                const matches = [];
                if (password.length < minLength) {
                    matches.push({
                        pattern: 'minLength',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback(_match) {
            return {
                warning: 'Your password is not long enough',
                suggestions: [],
            };
        },
        scoring(match) {
            // mirrors backend: length * 10 (bigger => considered stronger)
            return match.token.length * 10;
        },
    };
    const numberMatcher = {
        Matching: class MatchNumber {
            match({ password }) {
                const matches = [];
                if (!/[0-9]/.test(password)) {
                    matches.push({
                        pattern: 'number',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one number',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    const uppercaseMatcher = {
        Matching: class MatchUppercase {
            match({ password }) {
                const matches = [];
                if (!/[A-Z]/.test(password)) {
                    matches.push({
                        pattern: 'uppercase',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one uppercase letter',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    const lowercaseMatcher = {
        Matching: class MatchLowercase {
            match({ password }) {
                const matches = [];
                if (!/[a-z]/.test(password)) {
                    matches.push({
                        pattern: 'lowercase',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one lowercase letter',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    const specialCharMatcher = {
        Matching: class MatchSpecialChar {
            match({ password }) {
                const matches = [];
                if (!/[!@#$%^&*]/.test(password)) {
                    matches.push({
                        pattern: 'specialChar',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one special character (!@#$%^&*)',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    // --- Register matchers (including pwned) ---
    // pwned uses window.fetch in browsers; cast for TS
    zxcvbnOptions.addMatcher('pwned', 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    matcherPwnedFactory(fetch, zxcvbnOptions));
    zxcvbnOptions.addMatcher('minLength', minLengthMatcher);
    zxcvbnOptions.addMatcher('number', numberMatcher);
    zxcvbnOptions.addMatcher('uppercase', uppercaseMatcher);
    zxcvbnOptions.addMatcher('lowercase', lowercaseMatcher);
    zxcvbnOptions.addMatcher('specialChar', specialCharMatcher);
    // --- Core options (dicts/graphs) ---
    zxcvbnOptions.setOptions({
        dictionary: {
            ...zxcvbnCommon.dictionary,
            ...zxcvbnEn.dictionary,
            ...zxcvbnDe.dictionary,
            userInputs,
        },
        graphs: zxcvbnCommon.adjacencyGraphs,
        useLevenshteinDistance: true,
        translations,
    });
    initialized = true;
}
/**
 * Opinionated default init for rs-ui.
 * Call in shell app (e.g. via APP_INITIALIZER) if you don’t customize anything.
 */
function initRsUiPasswordDefaults() {
    if (initialized)
        return;
    initRsUiPasswordMatcher({
        minLength: 10,
        userInputs: [],
        translations: zxcvbnEn.translations,
    });
}
/**
 * Convenience checker for rs-ui.
 * Safe to use anywhere in UI (validator, strength meter, etc.).
 */
async function rsCheckPasswordStrength(password) {
    if (!initialized) {
        initRsUiPasswordDefaults();
    }
    return zxcvbnAsync(password);
}

function rsZxcvbnMinScoreValidator(minScore) {
    return async (control) => {
        const pw = control.value ?? '';
        if (!pw) {
            return null;
        }
        const result = await rsCheckPasswordStrength(pw);
        return result.score < minScore
            ? {
                rsZxcvbnMinScore: {
                    score: result.score,
                    feedback: result.feedback, // warning/suggestions usable in UI
                },
            }
            : null;
    };
}

const RS_USERNAME_PATTERN = /^(?!.*(.)\1)[A-Za-z][A-Za-z0-9._\-@]{7,}$/;
function rsUsernamePatternValidator() {
    return (control) => {
        const value = control.value ?? '';
        if (!value) {
            return null;
        }
        return RS_USERNAME_PATTERN.test(value) ? null : { pattern: true };
    };
}

const MIN_SCORE$1 = 3;
class RsSignUpComponent {
    constructor() {
        this.signUp = new EventEmitter();
        this.fb = inject(FormBuilder);
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            name: ['', [Validators.required, rsUsernamePatternValidator()]],
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                {
                    validators: [Validators.required],
                    asyncValidators: [rsZxcvbnMinScoreValidator(MIN_SCORE$1)],
                    updateOn: 'blur',
                },
            ],
            passwordConfirmation: ['', Validators.required],
        }, {
            validators: rsPasswordConfirmationValidator(),
        });
    }
    get formFields() {
        return this.form.controls;
    }
    onClickSignUp() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = this.form.value;
        // TODO: plug into your sign-up API / facade
        console.log('Sign-up payload', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsSignUpComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsSignUpComponent, isStandalone: true, selector: "rs-sign-up", outputs: { signUp: "signUp" }, ngImport: i0, template: "<rs-auth-page>\n  <h2>Sign Up</h2>\n  <p>\n    Please provide the necessary information to complete your registration and\n    create your account.\n  </p>\n\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onClickSignUp()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>First name</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"firstName\"\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Last name</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"lastName\"\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"name\"\n        />\n      </vcl-input-field>\n\n      <rs-username-policy-hints [control]=\"formFields.name\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Email</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"email\"\n        />\n      </vcl-input-field>\n\n      <rs-email-policy-hints [control]=\"formFields.email\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n      <rs-password-policy-hints [control]=\"formFields.password\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Confirm password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"passwordConfirmation\"\n        />\n      </vcl-password-input>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n\n      @if ( !formFields.password.hasError('required') &&\n      form.hasError('passwordConfirmationMismatch')) {\n      <vcl-hint-error\n        >Fields Password and Confirm password must match.</vcl-hint-error\n      >\n      }\n    </vcl-form-control-group>\n\n    <div class=\"align-right mt-3\">\n      <button\n        vcl-button\n        type=\"submit\"\n      >\n        Sign Up\n      </button>\n    </div>\n  </form>\n</rs-auth-page>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: RsAuthPageComponent, selector: "rs-auth-page" }, { kind: "ngmodule", type: VCLInputModule }, { kind: "directive", type: i2.InputDirective, selector: "input[vclInput]", inputs: ["id", "disabled", "autoselect"], exportAs: ["vclInput"] }, { kind: "component", type: i2.InputFieldComponent, selector: "vcl-input-field" }, { kind: "component", type: i2.FormControlGroupComponent, selector: "vcl-form-control-group", inputs: ["errorStateAgent", "hideRequiredIndicator", "spinner"], exportAs: ["vclFormControlGroup"] }, { kind: "component", type: i2.FormControlHintErrorComponent, selector: "vcl-hint-error", inputs: ["error"] }, { kind: "directive", type: i2.VCLLabelDirective, selector: "vcl-label, [vclLabel]", inputs: ["label"] }, { kind: "directive", type: i2.FormDirective, selector: "[vclForm]", exportAs: ["vclForm"] }, { kind: "directive", type: i2.EmbeddedInputFieldLabelDirective, selector: "vcl-form-control-group", inputs: ["vclEmbeddedInputFieldLabelMode"], exportAs: ["vclEmbeddedInputFieldLabel"] }, { kind: "ngmodule", type: VCLPasswordInputModule }, { kind: "component", type: i2.VCLPasswordInputComponent, selector: "vcl-password-input", inputs: ["visible"], exportAs: ["vclPasswordInput"] }, { kind: "ngmodule", type: VCLButtonModule }, { kind: "component", type: i2.VCLButtonComponent, selector: "button[vcl-button], a[vcl-button]", inputs: ["disabled", "square", "selectable", "type", "value", "selected"], outputs: ["selectedChange"], exportAs: ["vclButton"] }, { kind: "component", type: RsPasswordPolicyHintsComponent, selector: "rs-password-policy-hints", inputs: ["control"] }, { kind: "component", type: RsUsernamePolicyHintsComponent, selector: "rs-username-policy-hints", inputs: ["control"] }, { kind: "component", type: RsEmailPolicyHintsComponent, selector: "rs-email-policy-hints", inputs: ["control"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsSignUpComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-sign-up', standalone: true, imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        RsAuthPageComponent,
                        VCLInputModule,
                        VCLPasswordInputModule,
                        VCLButtonModule,
                        RsPasswordPolicyHintsComponent,
                        RsUsernamePolicyHintsComponent,
                        RsEmailPolicyHintsComponent,
                    ], template: "<rs-auth-page>\n  <h2>Sign Up</h2>\n  <p>\n    Please provide the necessary information to complete your registration and\n    create your account.\n  </p>\n\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onClickSignUp()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>First name</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"firstName\"\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Last name</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"lastName\"\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"name\"\n        />\n      </vcl-input-field>\n\n      <rs-username-policy-hints [control]=\"formFields.name\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Email</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"email\"\n        />\n      </vcl-input-field>\n\n      <rs-email-policy-hints [control]=\"formFields.email\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n      <rs-password-policy-hints [control]=\"formFields.password\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Confirm password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"passwordConfirmation\"\n        />\n      </vcl-password-input>\n      <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n\n      @if ( !formFields.password.hasError('required') &&\n      form.hasError('passwordConfirmationMismatch')) {\n      <vcl-hint-error\n        >Fields Password and Confirm password must match.</vcl-hint-error\n      >\n      }\n    </vcl-form-control-group>\n\n    <div class=\"align-right mt-3\">\n      <button\n        vcl-button\n        type=\"submit\"\n      >\n        Sign Up\n      </button>\n    </div>\n  </form>\n</rs-auth-page>\n" }]
        }], propDecorators: { signUp: [{
                type: Output
            }] } });

const MIN_SCORE = 3;
class RsConfirmPasswordComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.route = inject(ActivatedRoute);
        this.activationCode = '';
        this.confirmPassword = new EventEmitter();
        this.form = this.fb.nonNullable.group({
            identifier: ['', Validators.required],
            password: [
                '',
                {
                    validators: [Validators.required],
                    asyncValidators: [rsZxcvbnMinScoreValidator(MIN_SCORE)],
                    updateOn: 'blur',
                },
            ],
            passwordConfirmation: ['', Validators.required],
        }, { validators: rsPasswordConfirmationValidator() });
        this.routerParams$ = this.route.queryParams.pipe(tap((params) => {
            const { code: activationCode, identifier } = params ?? {};
            console.log('params', params);
            this.activationCode = activationCode;
            this.formFields.identifier.setValue(identifier);
        }));
    }
    get formFields() {
        return this.form.controls;
    }
    onReset() {
        this.form.reset();
    }
    onClickConfirm() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const { identifier, password } = this.form.getRawValue();
        this.confirmPassword.emit({
            identifier,
            password,
            activationCode: this.activationCode,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsConfirmPasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsConfirmPasswordComponent, isStandalone: true, selector: "rs-confirm-password", outputs: { confirmPassword: "confirmPassword" }, ngImport: i0, template: "<rs-auth-page>\n  <h2>Confirm Password</h2>\n  <p>\n    Please provide the necessary information to complete your password\n    confirmation.\n  </p>\n\n  @if(routerParams$ | async) {\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onClickConfirm()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>Email or Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          class=\"input\"\n          [class.error]=\"\n            formFields.identifier.hasError('required') &&\n            formFields.identifier.touched\n          \"\n          formControlName=\"identifier\"\n          type=\"text\"\n          name=\"identifier\"\n          readonly\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">\n        This field is required.\n      </vcl-hint-error>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n      <rs-password-policy-hints [control]=\"formFields.password\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Confirm password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"passwordConfirmation\"\n        />\n      </vcl-password-input>\n      <vcl-hint-error error=\"required\">\n        This field is required.\n      </vcl-hint-error>\n\n      @if ( !formFields.password.hasError('required') &&\n      form.hasError('passwordConfirmationMismatch')) {\n      <vcl-hint-error>\n        Fields Password and Confirm password must match.\n      </vcl-hint-error>\n      }\n    </vcl-form-control-group>\n\n    <div class=\"align-right\">\n      <button\n        vcl-button\n        type=\"submit\"\n      >\n        Confirm password\n      </button>\n    </div>\n  </form>\n  }\n</rs-auth-page>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: RsAuthPageComponent, selector: "rs-auth-page" }, { kind: "ngmodule", type: VCLInputModule }, { kind: "directive", type: i2.InputDirective, selector: "input[vclInput]", inputs: ["id", "disabled", "autoselect"], exportAs: ["vclInput"] }, { kind: "component", type: i2.InputFieldComponent, selector: "vcl-input-field" }, { kind: "component", type: i2.FormControlGroupComponent, selector: "vcl-form-control-group", inputs: ["errorStateAgent", "hideRequiredIndicator", "spinner"], exportAs: ["vclFormControlGroup"] }, { kind: "component", type: i2.FormControlHintErrorComponent, selector: "vcl-hint-error", inputs: ["error"] }, { kind: "directive", type: i2.VCLLabelDirective, selector: "vcl-label, [vclLabel]", inputs: ["label"] }, { kind: "directive", type: i2.FormDirective, selector: "[vclForm]", exportAs: ["vclForm"] }, { kind: "directive", type: i2.EmbeddedInputFieldLabelDirective, selector: "vcl-form-control-group", inputs: ["vclEmbeddedInputFieldLabelMode"], exportAs: ["vclEmbeddedInputFieldLabel"] }, { kind: "ngmodule", type: VCLPasswordInputModule }, { kind: "component", type: i2.VCLPasswordInputComponent, selector: "vcl-password-input", inputs: ["visible"], exportAs: ["vclPasswordInput"] }, { kind: "component", type: VCLButtonComponent, selector: "button[vcl-button], a[vcl-button]", inputs: ["disabled", "square", "selectable", "type", "value", "selected"], outputs: ["selectedChange"], exportAs: ["vclButton"] }, { kind: "component", type: RsPasswordPolicyHintsComponent, selector: "rs-password-policy-hints", inputs: ["control"] }, { kind: "pipe", type: i1$2.AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsConfirmPasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-confirm-password', standalone: true, imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        RsAuthPageComponent,
                        VCLInputModule,
                        VCLPasswordInputModule,
                        VCLInputModule,
                        VCLButtonComponent,
                        RsPasswordPolicyHintsComponent,
                    ], template: "<rs-auth-page>\n  <h2>Confirm Password</h2>\n  <p>\n    Please provide the necessary information to complete your password\n    confirmation.\n  </p>\n\n  @if(routerParams$ | async) {\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onClickConfirm()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>Email or Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          class=\"input\"\n          [class.error]=\"\n            formFields.identifier.hasError('required') &&\n            formFields.identifier.touched\n          \"\n          formControlName=\"identifier\"\n          type=\"text\"\n          name=\"identifier\"\n          readonly\n        />\n      </vcl-input-field>\n      <vcl-hint-error error=\"required\">\n        This field is required.\n      </vcl-hint-error>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n      <rs-password-policy-hints [control]=\"formFields.password\" />\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Confirm password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"passwordConfirmation\"\n        />\n      </vcl-password-input>\n      <vcl-hint-error error=\"required\">\n        This field is required.\n      </vcl-hint-error>\n\n      @if ( !formFields.password.hasError('required') &&\n      form.hasError('passwordConfirmationMismatch')) {\n      <vcl-hint-error>\n        Fields Password and Confirm password must match.\n      </vcl-hint-error>\n      }\n    </vcl-form-control-group>\n\n    <div class=\"align-right\">\n      <button\n        vcl-button\n        type=\"submit\"\n      >\n        Confirm password\n      </button>\n    </div>\n  </form>\n  }\n</rs-auth-page>\n" }]
        }], propDecorators: { confirmPassword: [{
                type: Output
            }] } });

class RsAuthResultPageComponent {
    constructor() {
        this.isRequesting = false;
        this.error = null;
        this.signInLink = null;
        this.title = 'Account Activation';
        this.description = `Thank you for activating your account! We're processing your request ` +
            `now and will have your account ready for use as soon as possible.`;
        this.secondaryDescription = 'Please be patient while we complete the activation process.';
        this.errorMessage = 'There was an error activating your account. Please try again later.';
        this.successMessage = 'Your account has been activated.';
        this.notificationType = NotificationType;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthResultPageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.12", type: RsAuthResultPageComponent, isStandalone: true, selector: "rs-auth-result-page", inputs: { isRequesting: "isRequesting", error: "error", signInLink: "signInLink", title: "title", description: "description", secondaryDescription: "secondaryDescription", errorMessage: "errorMessage", successMessage: "successMessage" }, ngImport: i0, template: `
    <rs-auth-page>
      <h2>{{ title }}</h2>

      <p>{{ description }}</p>

      @if (secondaryDescription) {
      <p>
        {{ secondaryDescription }}
      </p>
      } @if (!isRequesting) { @if (error) {
      <vcl-notification [type]="notificationType.Error">
        {{ errorMessage }}
      </vcl-notification>
      } @else {
      <vcl-notification [type]="notificationType.Success">
        {{ successMessage }}
        @if (signInLink) { You may now
        <a [routerLink]="signInLink">sign in</a>. }
      </vcl-notification>
      } }
    </rs-auth-page>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: VCLNotificationModule }, { kind: "component", type: i2.VCLNotificationComponent, selector: "vcl-notification", inputs: ["type", "icon", "showCloseButton"], outputs: ["close"] }, { kind: "component", type: RsAuthPageComponent, selector: "rs-auth-page" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthResultPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-auth-result-page',
                    standalone: true,
                    imports: [RouterModule, VCLNotificationModule, RsAuthPageComponent],
                    template: `
    <rs-auth-page>
      <h2>{{ title }}</h2>

      <p>{{ description }}</p>

      @if (secondaryDescription) {
      <p>
        {{ secondaryDescription }}
      </p>
      } @if (!isRequesting) { @if (error) {
      <vcl-notification [type]="notificationType.Error">
        {{ errorMessage }}
      </vcl-notification>
      } @else {
      <vcl-notification [type]="notificationType.Success">
        {{ successMessage }}
        @if (signInLink) { You may now
        <a [routerLink]="signInLink">sign in</a>. }
      </vcl-notification>
      } }
    </rs-auth-page>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { isRequesting: [{
                type: Input
            }], error: [{
                type: Input
            }], signInLink: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], secondaryDescription: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], successMessage: [{
                type: Input
            }] } });

class RsAuthProgressPageComponent {
    constructor() {
        this.title = 'Signing out';
        this.message = 'Please wait...';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthProgressPageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsAuthProgressPageComponent, isStandalone: true, selector: "rs-auth-progress-page", inputs: { title: "title", message: "message" }, ngImport: i0, template: ` <rs-centered-page>
    <div class="align-centered">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <vcl-spinner></vcl-spinner>
    </div>
  </rs-centered-page>`, isInline: true, dependencies: [{ kind: "component", type: RsCenteredPageComponent, selector: "rs-centered-page" }, { kind: "ngmodule", type: VCLSpinnerModule }, { kind: "component", type: i2.VCLSpinnerComponent, selector: "vcl-spinner", inputs: ["orientation"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthProgressPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-auth-progress-page',
                    template: ` <rs-centered-page>
    <div class="align-centered">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <vcl-spinner></vcl-spinner>
    </div>
  </rs-centered-page>`,
                    imports: [RsCenteredPageComponent, VCLSpinnerModule],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { title: [{
                type: Input
            }], message: [{
                type: Input
            }] } });

const publicGuard = () => {
    const config = inject(MODULES_AUTHN_CONFIG);
    const router = inject(Router);
    return config.isAuthenticated$.pipe(take$1(1), map$1((isAuthenticated) => {
        if (!isAuthenticated) {
            // user is NOT logged in → allow /auth
            return true;
        }
        // user is logged in → redirect away from /auth
        const target = config.redirectAuthenticatedTo ?? '/';
        return Array.isArray(target)
            ? router.createUrlTree(target)
            : router.parseUrl(target);
    }));
};

const AUTH_ROUTES = [
    {
        path: '',
        canMatch: [publicGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: RsSignInComponent,
            },
            {
                path: 'sign-up',
                component: RsSignUpComponent,
            },
            {
                path: 'password-recovery',
                component: RsPasswordRecoveryComponent,
            },
            {
                path: 'confirm-password',
                component: RsConfirmPasswordComponent,
            },
        ],
    },
];

class AuthRoutingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: AuthRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthRoutingModule, imports: [RouterModule.forChild(AUTH_ROUTES), RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(AUTH_ROUTES)],
                    exports: [RouterModule],
                }]
        }] });

class RsAuthModule {
    static forRoot(config) {
        return {
            ngModule: RsAuthModule,
            providers: [
                {
                    provide: MODULES_AUTHN_CONFIG,
                    useValue: config,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: RsAuthModule, imports: [RsSignInComponent,
            RsSignUpComponent,
            RsPasswordRecoveryComponent,
            AuthRoutingModule,
            RsConfirmPasswordComponent,
            RsAuthPageComponent,
            RsAuthResultPageComponent], exports: [RsSignInComponent,
            RsSignUpComponent,
            RsPasswordRecoveryComponent,
            AuthRoutingModule,
            RsAuthPageComponent,
            RsAuthResultPageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthModule, imports: [RsSignInComponent,
            RsSignUpComponent,
            RsPasswordRecoveryComponent,
            AuthRoutingModule,
            RsConfirmPasswordComponent,
            RsAuthPageComponent,
            RsAuthResultPageComponent, AuthRoutingModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        RsSignInComponent,
                        RsSignUpComponent,
                        RsPasswordRecoveryComponent,
                        AuthRoutingModule,
                        RsConfirmPasswordComponent,
                        RsAuthPageComponent,
                        RsAuthResultPageComponent,
                    ],
                    exports: [
                        RsSignInComponent,
                        RsSignUpComponent,
                        RsPasswordRecoveryComponent,
                        AuthRoutingModule,
                        RsAuthPageComponent,
                        RsAuthResultPageComponent,
                    ],
                }]
        }] });

class RsResourcePageLayoutComponent {
    constructor() {
        this.classes = 'row h-100p';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsResourcePageLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: RsResourcePageLayoutComponent, isStandalone: true, selector: "rs-resource-page-layout", host: { properties: { "class": "this.classes" } }, ngImport: i0, template: `
    <div class="flex-4-md flex-12">
      <ng-content select="[rsResourceSidebar]"></ng-content>
    </div>
    <div class="flex-8-md flex-12">
      <ng-content select="[rsResourceContent]"></ng-content>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsResourcePageLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rs-resource-page-layout',
                    template: `
    <div class="flex-4-md flex-12">
      <ng-content select="[rsResourceSidebar]"></ng-content>
    </div>
    <div class="flex-8-md flex-12">
      <ng-content select="[rsResourceContent]"></ng-content>
    </div>
  `,
                }]
        }], propDecorators: { classes: [{
                type: HostBinding,
                args: ['class']
            }] } });

class RSUiModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RSUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: RSUiModule, imports: [CommonModule,
            RouterModule,
            RsSignInComponent,
            RsPasswordRecoveryComponent,
            RsBannerComponent,
            LayoutShellComponent,
            RsBreadcrumbComponent,
            RsHeaderToolbarComponent,
            RsCardComponent,
            RsCenteredPageComponent,
            RsCopyrightComponent,
            RsAuthPageComponent,
            RsResourcePageLayoutComponent], exports: [CommonModule,
            RouterModule,
            RsSignInComponent,
            RsPasswordRecoveryComponent,
            RsBannerComponent,
            LayoutShellComponent,
            RsBreadcrumbComponent,
            RsHeaderToolbarComponent,
            RsCardComponent,
            RsCenteredPageComponent,
            RsCopyrightComponent,
            RsAuthPageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RSUiModule, imports: [CommonModule,
            RouterModule,
            RsSignInComponent,
            RsPasswordRecoveryComponent,
            RsBannerComponent,
            LayoutShellComponent,
            RsBreadcrumbComponent,
            RsHeaderToolbarComponent,
            RsCardComponent,
            RsCenteredPageComponent,
            RsCopyrightComponent,
            RsAuthPageComponent, CommonModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RSUiModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        RsSignInComponent,
                        RsPasswordRecoveryComponent,
                        RsBannerComponent,
                        LayoutShellComponent,
                        RsBreadcrumbComponent,
                        RsHeaderToolbarComponent,
                        RsCardComponent,
                        RsCenteredPageComponent,
                        RsCopyrightComponent,
                        RsAuthPageComponent,
                        RsResourcePageLayoutComponent,
                    ],
                    exports: [
                        CommonModule,
                        RouterModule,
                        RsSignInComponent,
                        RsPasswordRecoveryComponent,
                        RsBannerComponent,
                        LayoutShellComponent,
                        RsBreadcrumbComponent,
                        RsHeaderToolbarComponent,
                        RsCardComponent,
                        RsCenteredPageComponent,
                        RsCopyrightComponent,
                        RsAuthPageComponent,
                    ],
                }]
        }] });

class RsDrawerService {
    constructor() {
        this.openedEmitter = new BehaviorSubject(undefined);
        this.modeEmitter = new BehaviorSubject('side');
        this.opened$ = this.openedEmitter.asObservable();
        this.mode$ = this.modeEmitter.asObservable();
    }
    get mode() {
        return this.modeEmitter.value;
    }
    get opened() {
        return this.openedEmitter.value;
    }
    set opened(opened) {
        this.openedEmitter.next(opened);
    }
    toggle(opened) {
        this.openedEmitter.next(typeof opened === 'boolean' ? opened : !this.openedEmitter.value);
    }
    setMode(mode) {
        this.modeEmitter.next(mode);
    }
    ngOnDestroy() {
        this.openedEmitter.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsDrawerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsDrawerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsDrawerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

const MDI_ALIAS_MAP = {
    search: 'mdi mdi-magnify',
    menu: 'mdi mdi-menu mdi-36px',
};
const FA_ALIAS_MAP = {
    search: 'fa fa-search',
    menu: 'fa fa-menu fa-36px',
};
class RsMdiIconResolverService extends IconAliasResolverServiceBase {
    constructor() {
        super('rc', MDI_ALIAS_MAP);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsMdiIconResolverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsMdiIconResolverService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsMdiIconResolverService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });
class RsFaIconResolverService extends IconAliasResolverServiceBase {
    constructor() {
        super('rc', FA_ALIAS_MAP);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsFaIconResolverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsFaIconResolverService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsFaIconResolverService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

class RsValidationService {
    validatePasswordMatch(control) {
        const password = control.get('password');
        const passwordConfirmation = control.get('passwordConfirmation');
        if (password?.value !== passwordConfirmation?.value) {
            return { passwordConfirmationMismatch: true };
        }
        return null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsValidationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsValidationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsValidationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

const MODULES_RS_UI_BASE_PROVIDERS = [
    {
        provide: IconResolverService,
        useClass: RsMdiIconResolverService,
        multi: true,
    },
    {
        provide: IconResolverService,
        useClass: MaterialDesignIconResolverService,
        multi: true,
    },
    {
        provide: IconResolverService,
        useClass: MaterialDesignVCLIconAliasResolverService,
        multi: true,
    },
    RsDrawerService,
    RsValidationService,
];
// ✅ Standalone-friendly provider function
function provideModulesUiBase() {
    return makeEnvironmentProviders(MODULES_RS_UI_BASE_PROVIDERS);
}

class ModulesRsUiBaseModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ModulesRsUiBaseModule is already loaded. Import it in the AppModule only.');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesRsUiBaseModule, deps: [{ token: ModulesRsUiBaseModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: ModulesRsUiBaseModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesRsUiBaseModule, providers: MODULES_RS_UI_BASE_PROVIDERS }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesRsUiBaseModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: MODULES_RS_UI_BASE_PROVIDERS,
                }]
        }], ctorParameters: () => [{ type: ModulesRsUiBaseModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }] });

const RS_NOTIFICATION_DEFAULTS = new InjectionToken('RS_NOTIFICATION_DEFAULTS');
const RS_NOTIFICATION_TRANSLATE = new InjectionToken('RS_NOTIFICATION_TRANSLATE');

class RsNotificationService {
    constructor() {
        this.vclNotification = inject(NotifierService);
        this.defaults = inject(RS_NOTIFICATION_DEFAULTS, {
            optional: true,
        });
        this.translateFn = inject(RS_NOTIFICATION_TRANSLATE, {
            optional: true,
        });
    }
    // ---------- helpers ----------
    translate(key, params, raw) {
        if (raw || !this.translateFn) {
            // no translation wired or explicit raw -> treat as plain text
            return key;
        }
        return this.translateFn(key, params);
    }
    mergeOptions(opts) {
        const base = {
            position: this.defaults?.position ?? NotifierPosition.TopRight,
            timeout: typeof this.defaults?.timeout === 'undefined'
                ? 5000
                : this.defaults.timeout,
            showCloseButton: this.defaults?.showCloseButton ?? true,
            ...(opts ?? {}),
        };
        return base;
    }
    notify(method, text, opts) {
        const { params, titleKey, raw, title, ...restOptions } = opts ?? {};
        const content = this.translate(text, params, raw);
        const resolvedTitle = titleKey != null ? this.translate(titleKey, params, raw) : title;
        const merged = this.mergeOptions({
            title: resolvedTitle,
            ...restOptions,
        });
        this.vclNotification[method]({ ...merged, content });
    }
    // ---------- public API (ONE interface for all) ----------
    info(text, opts) {
        this.notify('info', text, opts);
    }
    success(text, opts) {
        this.notify('success', text, opts);
    }
    warning(text, opts) {
        this.notify('warning', text, opts);
    }
    error(text, opts) {
        this.notify('error', text, opts);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsNotificationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsNotificationService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class RsNotificationModule {
    static forRoot(defaults = {}) {
        return {
            ngModule: RsNotificationModule,
            providers: [
                {
                    provide: RS_NOTIFICATION_DEFAULTS,
                    useValue: defaults,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: RsNotificationModule, imports: [VCLNotificationModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsNotificationModule, imports: [VCLNotificationModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RsNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [VCLNotificationModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AUTH_ROUTES, AuthRoutingModule, LAYOUT_ACCOUNT_ACTION_HANDLER, LAYOUT_CONFIG, LAYOUT_ORGS$, LAYOUT_SELECTED_ORG_ID$, LAYOUT_SET_SELECTED_ORG, LAYOUT_USER$, LayoutFacade, LayoutShellComponent, MODULES_AUTHN_CONFIG, MODULES_RS_UI_BASE_PROVIDERS, ModulesRsUiBaseModule, RSUiModule, RS_NOTIFICATION_DEFAULTS, RS_NOTIFICATION_TRANSLATE, RS_TRANSLATION, RsAuthModule, RsAuthPageComponent, RsAuthProgressPageComponent, RsAuthResultPageComponent, RsBannerComponent, RsBreadcrumbComponent, RsCardComponent, RsCenteredPageComponent, RsConfirmPasswordComponent, RsCopyrightComponent, RsHeaderToolbarComponent, RsNotificationModule, RsNotificationService, RsPasswordRecoveryComponent, RsResourcePageLayoutComponent, RsSignInComponent, RsSignUpComponent, SIGN_IN_BRANDING_CONFIG, initRsUiPasswordDefaults, initRsUiPasswordMatcher, provideLayout, provideModulesUiBase, provideSignInBranding, rsCheckPasswordStrength, rsPasswordConfirmationValidator, rsZxcvbnMinScoreValidator };
//# sourceMappingURL=console-modules-rs-ui.mjs.map
