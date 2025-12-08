import * as rxjs from 'rxjs';
import { Observable } from 'rxjs';
import * as i0 from '@angular/core';
import { EnvironmentProviders, InjectionToken, EventEmitter, OnInit, AfterViewInit, OnDestroy, ModuleWithProviders } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import * as _angular_forms from '@angular/forms';
import { FormBuilder, FormControl, ValidatorFn, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import * as i1 from '@angular/router';
import { Route } from '@angular/router';
import * as i1$2 from '@vcl/ng-vcl';
import { NotificationType, IconAliasResolverServiceBase, IconResolverService, MaterialDesignIconResolverService, NotifierPosition, NotifierOptions } from '@vcl/ng-vcl';
import { ZxcvbnResult } from '@zxcvbn-ts/core';
import * as zxcvbnEn from '@zxcvbn-ts/language-en';
import * as i1$1 from '@angular/common';

type LayoutCategoryRoute = string;
type LayoutNavCategoryId = 'home' | 'management' | string;
interface LayoutNavCategory {
    id: LayoutNavCategoryId;
    label: string;
    defaultRoute?: LayoutCategoryRoute;
}
interface LayoutNavItem {
    id: string;
    label: string;
    icon?: string;
    route?: string;
    externalUrl?: string;
    children?: LayoutNavItem[];
    isHidden?: boolean;
    requiredPermission?: string;
    categoryId?: LayoutNavCategoryId;
}
interface LayoutConfig {
    appName: string;
    logoUrl?: string;
    navItems: LayoutNavItem[];
    basePath?: string;
    categories?: LayoutNavCategory[];
}

declare class LayoutFacade {
    private breakpointObserver;
    isHandset$: rxjs.Observable<boolean>;
    private collapsedSubject;
    collapsed$: rxjs.Observable<boolean>;
    private navItemsSubject;
    private categoriesSubject;
    private navItems$;
    categories$: rxjs.Observable<LayoutNavCategory[]>;
    private activeCategorySubject;
    activeCategory$: rxjs.Observable<string>;
    visibleNavItems$: rxjs.Observable<LayoutNavItem[]>;
    /** Called by the shell once it has the config */
    initConfig(config: LayoutConfig): void;
    toggleSidebar(): void;
    setNavItems(items: LayoutNavItem[]): void;
    setActiveCategory(id: LayoutNavCategoryId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutFacade>;
}

declare function provideLayout(config: {
    layout: LayoutConfig;
}): EnvironmentProviders;

declare const LAYOUT_CONFIG: InjectionToken<LayoutConfig>;

interface RsHeaderUser {
    id: string;
    fullName: string;
    email?: string;
}
interface RsHeaderOrganization {
    id: string;
    name: string;
    description?: string;
}

declare class RsHeaderToolbarComponent {
    /** User info for account menu */
    user: RsHeaderUser | null;
    /** All organizations to show in the dropdown */
    organizations: RsHeaderOrganization[];
    /** Currently selected organization ID */
    selectedOrganizationId: string | null;
    /** Show/hide specific account menu entries */
    showProfile: boolean;
    showPreferences: boolean;
    showSignOut: boolean;
    /** Popover positions (you can override if needed) */
    rightOrientedPositions: ConnectedPosition[];
    /** Emitted when an organization is selected */
    organizationSelected: EventEmitter<string>;
    /** Emitted when an account action is chosen */
    accountAction: EventEmitter<"profile" | "preferences" | "sign-out">;
    /** Emitted when the search term changes */
    searchChange: EventEmitter<string>;
    hostRowClass: boolean;
    searchTerm: string;
    get selectedOrganization(): RsHeaderOrganization | undefined;
    get filteredOrganizations(): RsHeaderOrganization[];
    onSearchChange(term: string): void;
    onSelectOrganization(id: string): void;
    onAccountItemSelected(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsHeaderToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsHeaderToolbarComponent, "rs-header-toolbar", never, { "user": { "alias": "user"; "required": false; }; "organizations": { "alias": "organizations"; "required": false; }; "selectedOrganizationId": { "alias": "selectedOrganizationId"; "required": false; }; "showProfile": { "alias": "showProfile"; "required": false; }; "showPreferences": { "alias": "showPreferences"; "required": false; }; "showSignOut": { "alias": "showSignOut"; "required": false; }; "rightOrientedPositions": { "alias": "rightOrientedPositions"; "required": false; }; }, { "organizationSelected": "organizationSelected"; "accountAction": "accountAction"; "searchChange": "searchChange"; }, never, never, true, never>;
}

type AccountAction = 'profile' | 'preferences' | 'sign-out';
declare const LAYOUT_USER$: InjectionToken<Observable<RsHeaderUser | null>>;
declare const LAYOUT_ORGS$: InjectionToken<Observable<RsHeaderOrganization[]>>;
declare const LAYOUT_SELECTED_ORG_ID$: InjectionToken<Observable<string | null>>;
/**
 * Handler for account actions: shell calls this, host decides what to do.
 * (navigate with ROUTER, dispatch logout, etc.)
 */
declare const LAYOUT_ACCOUNT_ACTION_HANDLER: InjectionToken<(action: AccountAction) => void>;
/**
 * Setter for selected org – shell calls this when user picks an org.
 */
declare const LAYOUT_SET_SELECTED_ORG: InjectionToken<(orgId: string) => void>;

declare class LayoutShellComponent implements OnInit {
    private router;
    private route;
    facade: LayoutFacade;
    readonly config: LayoutConfig;
    private readonly preferenceHandler;
    private readonly destroyRef;
    constructor();
    ngOnInit(): void;
    isHandset$: rxjs.Observable<boolean>;
    readonly accountHandler: (action: AccountAction) => void;
    readonly setSelectedOrg: (orgId: string) => void;
    readonly selectedOrgId$: rxjs.Observable<string | null>;
    readonly orgs$: rxjs.Observable<RsHeaderOrganization[]>;
    readonly user$: rxjs.Observable<RsHeaderUser | null>;
    accountAction: EventEmitter<"profile" | "preferences" | "sign-out">;
    collapsed$: rxjs.Observable<boolean>;
    categories$: rxjs.Observable<LayoutNavCategory[]>;
    activeCategory$: rxjs.Observable<string>;
    visibleNavItems$: rxjs.Observable<LayoutNavItem[]>;
    navigate(item: LayoutNavItem): void;
    onToggleSidebar(isHandset: boolean | null): void;
    toggleSidebar(): void;
    onOrgSelected(orgId: string): void;
    onAccountAction(action: 'profile' | 'preferences' | 'sign-out'): void;
    onSelectCategory(id: LayoutNavCategoryId): void;
    private getFirstNavItemForCategory;
    private flattenNavItems;
    private syncCategoryWithUrl;
    private routeMatchesUrl;
    onOrgChanged(orgId: string): void;
    private navigateWithOrg;
    private pickDefaultOrgId;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutShellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutShellComponent, "rs-layout-shell", never, {}, { "accountAction": "accountAction"; }, never, never, true, never>;
}

interface IBreadcrumb {
    label: string;
    url: string;
}
declare class RsBreadcrumbComponent implements AfterViewInit, OnDestroy {
    /**
     * Text for the root crumb (defaults to "Home").
     * You can change this from the host app: <rc-breadcrumb rootLabel="Dashboard" />
     */
    rootLabel: string;
    /**
     * Router URL for the root crumb.
     * Defaults to '/'.
     */
    rootUrl: string;
    /**
     * Whether to display the root crumb at all.
     */
    showRoot: boolean;
    /**
     * Labels to exclude when the last crumb matches them (e.g. a generic "Home" page).
     * You can override from outside instead of relying on ROUTER constants.
     */
    breadcrumbsToExclude: string[];
    /**
     * All generated breadcrumbs.
     */
    breadcrumbs: IBreadcrumb[];
    /**
     * Convenience getter: last breadcrumb label or empty.
     */
    get lastLabel(): string;
    private readonly destroy$;
    private readonly cdr;
    private readonly activatedRoute;
    private readonly router;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private updateBreadcrumbs;
    private createBreadcrumbs;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsBreadcrumbComponent, "rs-breadcrumb", never, { "rootLabel": { "alias": "rootLabel"; "required": false; }; "rootUrl": { "alias": "rootUrl"; "required": false; }; "showRoot": { "alias": "showRoot"; "required": false; }; "breadcrumbsToExclude": { "alias": "breadcrumbsToExclude"; "required": false; }; }, {}, never, never, true, never>;
}

declare class RsCardComponent {
    title: string;
    subtitle?: string;
    icon?: string;
    /** Variant class, e.g. 'rs-card--danger', 'rs-card--success' etc. */
    variant?: string;
    forceFooter: boolean;
    get showFooter(): true;
    get hasHeaderContent(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsCardComponent, "rs-card", never, { "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "forceFooter": { "alias": "forceFooter"; "required": false; }; }, {}, never, ["[rsCardHeaderActions]", "[rsCardHeader]", "*", "[rsCardFooter]"], true, never>;
}

declare class RsCenteredPageComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<RsCenteredPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsCenteredPageComponent, "rs-centered-page", never, {}, {}, never, ["*"], true, never>;
}

declare class RsBannerComponent {
    _hostClasses: boolean;
    brandName: string;
    showName: boolean;
    logoUrl?: string;
    logoLink?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsBannerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsBannerComponent, "rs-brand", never, { "brandName": { "alias": "brandName"; "required": false; }; "showName": { "alias": "showName"; "required": false; }; "logoUrl": { "alias": "logoUrl"; "required": false; }; "logoLink": { "alias": "logoLink"; "required": false; }; }, {}, never, never, true, never>;
}

interface SignInBrandingConfig {
    appName: string;
    logoUrl: string;
    logoAlt?: string;
    tagline?: string;
}
declare const SIGN_IN_BRANDING_CONFIG: InjectionToken<SignInBrandingConfig>;
/**
 * Host apps use this in their providers:
 *
 *   provideSignInBranding({
 *     appName: 'Console',
 *     logoUrl: '/assets/logo.svg',
 *   })
 */
declare function provideSignInBranding(config: SignInBrandingConfig): EnvironmentProviders;

interface SignInCredentials {
    identifier: string;
    password: string;
    remember: boolean;
}
declare class RsSignInComponent {
    appName?: string;
    logoUrl?: string;
    logoAlt?: string;
    tagline?: string;
    signIn: EventEmitter<SignInCredentials>;
    fb: FormBuilder;
    readonly defaultConfig: SignInBrandingConfig | null;
    private readonly config;
    form: _angular_forms.FormGroup<{
        identifier: FormControl<string | null>;
        password: FormControl<string | null>;
        remember: FormControl<boolean | null>;
    }>;
    get formFields(): {
        identifier: FormControl;
        password: FormControl;
        remember: FormControl;
    };
    get branding(): SignInBrandingConfig;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsSignInComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsSignInComponent, "rs-sign-in", never, { "appName": { "alias": "appName"; "required": false; }; "logoUrl": { "alias": "logoUrl"; "required": false; }; "logoAlt": { "alias": "logoAlt"; "required": false; }; "tagline": { "alias": "tagline"; "required": false; }; }, { "signIn": "signIn"; }, never, never, true, never>;
}

interface PasswordRecoveryPayload {
    identifier: string;
}
declare class RsPasswordRecoveryComponent {
    passwordRecovery: EventEmitter<PasswordRecoveryPayload>;
    private config;
    fb: FormBuilder;
    form: _angular_forms.FormGroup<{
        identifier: FormControl<string | null>;
    }>;
    get formFields(): {
        identifier: FormControl;
    };
    onClickPasswordRecovery(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsPasswordRecoveryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsPasswordRecoveryComponent, "rs-auth-password-recovery", never, {}, { "passwordRecovery": "passwordRecovery"; }, never, never, true, never>;
}

declare class RsAuthPageComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<RsAuthPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsAuthPageComponent, "rs-auth-page", never, {}, {}, never, ["*"], true, never>;
}

interface SignUpPayload {
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    password: string;
}
declare class RsSignUpComponent {
    signUp: EventEmitter<SignUpPayload>;
    fb: FormBuilder;
    form: _angular_forms.FormGroup<{
        firstName: _angular_forms.FormControl<string | null>;
        lastName: _angular_forms.FormControl<string | null>;
        name: _angular_forms.FormControl<string | null>;
        email: _angular_forms.FormControl<string | null>;
        password: _angular_forms.FormControl<string | null>;
        passwordConfirmation: _angular_forms.FormControl<string | null>;
    }>;
    get formFields(): {
        firstName: _angular_forms.FormControl<string | null>;
        lastName: _angular_forms.FormControl<string | null>;
        name: _angular_forms.FormControl<string | null>;
        email: _angular_forms.FormControl<string | null>;
        password: _angular_forms.FormControl<string | null>;
        passwordConfirmation: _angular_forms.FormControl<string | null>;
    };
    onClickSignUp(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsSignUpComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsSignUpComponent, "rs-sign-up", never, {}, { "signUp": "signUp"; }, never, never, true, never>;
}

interface ConfirmPasswordPayload {
    identifier: string;
    password: string;
    activationCode: string;
}
declare class RsConfirmPasswordComponent {
    fb: FormBuilder;
    private route;
    activationCode: string;
    confirmPassword: EventEmitter<ConfirmPasswordPayload>;
    form: _angular_forms.FormGroup<{
        identifier: _angular_forms.FormControl<string>;
        password: _angular_forms.FormControl<string>;
        passwordConfirmation: _angular_forms.FormControl<string>;
    }>;
    routerParams$: rxjs.Observable<i1.Params>;
    get formFields(): {
        identifier: _angular_forms.FormControl<string>;
        password: _angular_forms.FormControl<string>;
        passwordConfirmation: _angular_forms.FormControl<string>;
    };
    onReset(): void;
    onClickConfirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsConfirmPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsConfirmPasswordComponent, "rs-confirm-password", never, {}, { "confirmPassword": "confirmPassword"; }, never, never, true, never>;
}

declare class RsAuthResultPageComponent {
    isRequesting: boolean | null;
    error: unknown;
    signInLink: string | null;
    title: string;
    description: string;
    secondaryDescription: string;
    errorMessage: string;
    successMessage: string;
    notificationType: typeof NotificationType;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsAuthResultPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsAuthResultPageComponent, "rs-auth-result-page", never, { "isRequesting": { "alias": "isRequesting"; "required": false; }; "error": { "alias": "error"; "required": false; }; "signInLink": { "alias": "signInLink"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "secondaryDescription": { "alias": "secondaryDescription"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "successMessage": { "alias": "successMessage"; "required": false; }; }, {}, never, never, true, never>;
}

declare class RsAuthProgressPageComponent {
    title: string;
    message: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsAuthProgressPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsAuthProgressPageComponent, "rs-auth-progress-page", never, { "title": { "alias": "title"; "required": false; }; "message": { "alias": "message"; "required": false; }; }, {}, never, never, true, never>;
}

declare const AUTH_ROUTES: Route[];

interface ModulesAuthnConfig {
    signInHandler: (payload: SignInCredentials) => void;
    passwordRecoveryHandler?: (payload: PasswordRecoveryPayload) => void;
    logoUrl?: string;
    redirectAfterLoginUrl?: string;
    isAuthenticated$: Observable<boolean>;
    redirectAuthenticatedTo?: string;
}
declare const MODULES_AUTHN_CONFIG: InjectionToken<ModulesAuthnConfig>;

declare class AuthRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AuthRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AuthRoutingModule>;
}

declare class RsAuthModule {
    static forRoot(config: ModulesAuthnConfig): ModuleWithProviders<RsAuthModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsAuthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RsAuthModule, never, [typeof RsSignInComponent, typeof RsSignUpComponent, typeof RsPasswordRecoveryComponent, typeof AuthRoutingModule, typeof RsConfirmPasswordComponent, typeof RsAuthPageComponent, typeof RsAuthResultPageComponent], [typeof RsSignInComponent, typeof RsSignUpComponent, typeof RsPasswordRecoveryComponent, typeof AuthRoutingModule, typeof RsAuthPageComponent, typeof RsAuthResultPageComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RsAuthModule>;
}

interface RsPasswordStrengthInitOptions {
    minLength: number;
    userInputs?: string[];
    translations?: typeof zxcvbnEn.translations;
}
/**
 * Initialize zxcvbn matchers & dictionaries for the browser.
 * Safe to call multiple times; it is idempotent.
 */
declare function initRsUiPasswordMatcher(opts: RsPasswordStrengthInitOptions): void;
/**
 * Opinionated default init for rs-ui.
 * Call in shell app (e.g. via APP_INITIALIZER) if you don’t customize anything.
 */
declare function initRsUiPasswordDefaults(): void;
/**
 * Convenience checker for rs-ui.
 * Safe to use anywhere in UI (validator, strength meter, etc.).
 */
declare function rsCheckPasswordStrength(password: string): Promise<ZxcvbnResult>;

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
declare function rsPasswordConfirmationValidator(passwordControlName?: string, confirmationControlName?: string): ValidatorFn;

declare function rsZxcvbnMinScoreValidator(minScore: number): AsyncValidatorFn;

declare class RsCopyrightComponent {
    year: number;
    company: string;
    text: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsCopyrightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsCopyrightComponent, "rs-copyright", never, { "year": { "alias": "year"; "required": false; }; "company": { "alias": "company"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, never, true, never>;
}

declare class RsResourcePageLayoutComponent {
    classes: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsResourcePageLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RsResourcePageLayoutComponent, "rs-resource-page-layout", never, {}, {}, never, ["[rsResourceSidebar]", "[rsResourceContent]"], true, never>;
}

declare class RSUiModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RSUiModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RSUiModule, never, [typeof i1$1.CommonModule, typeof i1.RouterModule, typeof RsSignInComponent, typeof RsPasswordRecoveryComponent, typeof RsBannerComponent, typeof LayoutShellComponent, typeof RsBreadcrumbComponent, typeof RsHeaderToolbarComponent, typeof RsCardComponent, typeof RsCenteredPageComponent, typeof RsCopyrightComponent, typeof RsAuthPageComponent, typeof RsResourcePageLayoutComponent], [typeof i1$1.CommonModule, typeof i1.RouterModule, typeof RsSignInComponent, typeof RsPasswordRecoveryComponent, typeof RsBannerComponent, typeof LayoutShellComponent, typeof RsBreadcrumbComponent, typeof RsHeaderToolbarComponent, typeof RsCardComponent, typeof RsCenteredPageComponent, typeof RsCopyrightComponent, typeof RsAuthPageComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RSUiModule>;
}

declare class ModulesRsUiBaseModule {
    constructor(parentModule: ModulesRsUiBaseModule);
    static ɵfac: i0.ɵɵFactoryDeclaration<ModulesRsUiBaseModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ModulesRsUiBaseModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ModulesRsUiBaseModule>;
}

declare class RsDrawerService implements OnDestroy {
    private openedEmitter;
    private modeEmitter;
    opened$: rxjs.Observable<boolean | undefined>;
    mode$: rxjs.Observable<string>;
    get mode(): string;
    get opened(): boolean | undefined;
    set opened(opened: boolean | undefined);
    toggle(opened?: boolean): void;
    setMode(mode: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsDrawerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RsDrawerService>;
}

declare class RsMdiIconResolverService extends IconAliasResolverServiceBase {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<RsMdiIconResolverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RsMdiIconResolverService>;
}

declare class RsValidationService {
    validatePasswordMatch(control: AbstractControl): Record<string, boolean> | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsValidationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RsValidationService>;
}

declare const MODULES_RS_UI_BASE_PROVIDERS: (typeof RsDrawerService | typeof RsValidationService | {
    provide: typeof IconResolverService;
    useClass: typeof RsMdiIconResolverService;
    multi: boolean;
} | {
    provide: typeof IconResolverService;
    useClass: typeof MaterialDesignIconResolverService;
    multi: boolean;
})[];
declare function provideModulesUiBase(): EnvironmentProviders;

interface RsTranslationService {
    t(key: string, params?: Record<string, any>): string;
}
declare const RS_TRANSLATION: InjectionToken<RsTranslationService>;

interface RsNotificationDefaults {
    timeout?: number | false;
    position?: NotifierPosition;
    showCloseButton?: boolean;
    icon?: string;
}
interface RsNotifierOptions extends NotifierOptions {
    /**
     * Interpolation params for the message key.
     * Example: { resource: 'Product' }
     */
    params?: Record<string, unknown>;
    /**
     * Optional i18n key for the title.
     * If provided, we translate it the same way as the content.
     */
    titleKey?: string;
    /**
     * If true, do NOT translate `text` – treat it as plain text.
     */
    raw?: boolean;
}
/**
 * Abstract translation function (host wires Transloco / ngx-translate / etc.).
 */
type RsNotificationTranslateFn = (key: string, params?: Record<string, unknown>) => string;
declare const RS_NOTIFICATION_DEFAULTS: InjectionToken<RsNotificationDefaults>;
declare const RS_NOTIFICATION_TRANSLATE: InjectionToken<RsNotificationTranslateFn>;

declare class RsNotificationService {
    private readonly vclNotification;
    private readonly defaults;
    private readonly translateFn;
    private translate;
    private mergeOptions;
    private notify;
    info(text: string, opts?: RsNotifierOptions): void;
    success(text: string, opts?: RsNotifierOptions): void;
    warning(text: string, opts?: RsNotifierOptions): void;
    error(text: string, opts?: RsNotifierOptions): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RsNotificationService>;
}

declare class RsNotificationModule {
    static forRoot(defaults?: RsNotificationDefaults): ModuleWithProviders<RsNotificationModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsNotificationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RsNotificationModule, never, [typeof i1$2.VCLNotificationModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RsNotificationModule>;
}

export { AUTH_ROUTES, AuthRoutingModule, LAYOUT_ACCOUNT_ACTION_HANDLER, LAYOUT_CONFIG, LAYOUT_ORGS$, LAYOUT_SELECTED_ORG_ID$, LAYOUT_SET_SELECTED_ORG, LAYOUT_USER$, LayoutFacade, LayoutShellComponent, MODULES_AUTHN_CONFIG, MODULES_RS_UI_BASE_PROVIDERS, ModulesRsUiBaseModule, RSUiModule, RS_NOTIFICATION_DEFAULTS, RS_NOTIFICATION_TRANSLATE, RS_TRANSLATION, RsAuthModule, RsAuthPageComponent, RsAuthProgressPageComponent, RsAuthResultPageComponent, RsBannerComponent, RsBreadcrumbComponent, RsCardComponent, RsCenteredPageComponent, RsConfirmPasswordComponent, RsCopyrightComponent, RsHeaderToolbarComponent, RsNotificationModule, RsNotificationService, RsPasswordRecoveryComponent, RsResourcePageLayoutComponent, RsSignInComponent, RsSignUpComponent, SIGN_IN_BRANDING_CONFIG, initRsUiPasswordDefaults, initRsUiPasswordMatcher, provideLayout, provideModulesUiBase, provideSignInBranding, rsCheckPasswordStrength, rsPasswordConfirmationValidator, rsZxcvbnMinScoreValidator };
export type { AccountAction, ConfirmPasswordPayload, IBreadcrumb, LayoutCategoryRoute, LayoutConfig, LayoutNavCategory, LayoutNavCategoryId, LayoutNavItem, ModulesAuthnConfig, PasswordRecoveryPayload, RsHeaderOrganization, RsHeaderUser, RsNotificationDefaults, RsNotificationTranslateFn, RsNotifierOptions, RsPasswordStrengthInitOptions, RsTranslationService, SignInBrandingConfig, SignInCredentials, SignUpPayload };
