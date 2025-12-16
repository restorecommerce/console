import * as i0 from '@angular/core';
import { Injectable, Pipe, NgModule } from '@angular/core';
import Fuse from 'fuse.js';
import * as i1 from '@angular/router';
import { tap } from 'rxjs/operators';
import { ROUTER } from '@console-core/config';
import * as i1$1 from '@console-core/state';
import * as changeCase from 'change-case';

class FuseSearchService {
    constructor() {
        this.fuseOptions = {
            shouldSort: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ['name'],
        };
    }
    getSearchEngine(items = [], options = this.fuseOptions) {
        return new Fuse(items, options);
    }
    getDefaultOptions() {
        return this.fuseOptions;
    }
    setSearchEngine(items, options = this.fuseOptions) {
        return this.getSearchEngine(items, options);
    }
    setSearchKeys(keys) {
        this.fuseOptions.keys = keys;
    }
    setThreshold(value) {
        this.fuseOptions.threshold = value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FuseSearchService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FuseSearchService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FuseSearchService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class FuseSearchPipe {
    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(searchService) {
        this.searchService = searchService;
    }
    transform(items, searchTerm, keys) {
        if (!items || !searchTerm || !keys.length) {
            return items;
        }
        this.searchService.setSearchKeys(keys);
        const fuse = this.searchService.getSearchEngine(items);
        return fuse.search(searchTerm).map((result) => result.item);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FuseSearchPipe, deps: [{ token: FuseSearchService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: FuseSearchPipe, isStandalone: false, name: "fuseSearch" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FuseSearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'fuseSearch',
                    pure: true,
                    standalone: false,
                }]
        }], ctorParameters: () => [{ type: FuseSearchService }] });

class ModulesSharedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesSharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: ModulesSharedModule, declarations: [FuseSearchPipe], exports: [FuseSearchPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesSharedModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesSharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FuseSearchPipe],
                    exports: [FuseSearchPipe],
                }]
        }] });

class PrivateGuard {
    constructor(router, authnFacade) {
        this.router = router;
        this.authnFacade = authnFacade;
    }
    canActivate(_, state) {
        return this.authnFacade.isAuthenticated$.pipe(tap((isAuthenticated) => {
            if (!isAuthenticated) {
                this.router.navigate(ROUTER.pages.main.children.auth.getLink(), {
                    replaceUrl: true,
                    queryParams: {
                        url: state.url !==
                            ROUTER.pages.main.children.auth.children.signOut.link
                            ? state.url
                            : ROUTER.pages.main.children.home.link,
                    },
                });
            }
        }));
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PrivateGuard, deps: [{ token: i1.Router }, { token: i1$1.AuthnFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PrivateGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PrivateGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }, { type: i1$1.AuthnFacade }] });

class PublicGuard {
    constructor(router, authnFacade) {
        this.router = router;
        this.authnFacade = authnFacade;
    }
    canActivate(_) {
        return this.authnFacade.isNotAuthenticated$.pipe(tap((isNotAuthenticated) => {
            if (!isNotAuthenticated) {
                this.router.navigate(ROUTER.pages.main.children.home.getLink(), {
                    replaceUrl: true,
                });
            }
        }));
    }
    canActivateChild(route) {
        return this.canActivate(route);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PublicGuard, deps: [{ token: i1.Router }, { token: i1$1.AuthnFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PublicGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PublicGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }, { type: i1$1.AuthnFacade }] });

class RedirectActivationGuard {
    constructor(routerFacade) {
        this.routerFacade = routerFacade;
    }
    canActivate(route) {
        const identifier = route.queryParams['identifier'];
        const code = route.queryParams['activation_code'];
        const redirectUrl = identifier && code
            ? ROUTER.pages.main.children.auth.children.activation.getLink({
                identifier,
                code,
            })
            : ROUTER.pages.main.children.auth.children.signIn.getLink();
        this.routerFacade.navigate(redirectUrl);
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectActivationGuard, deps: [{ token: i1$1.RouterFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectActivationGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectActivationGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$1.RouterFacade }] });

class RedirectConfirmEmailGuard {
    constructor(routerFacade) {
        this.routerFacade = routerFacade;
    }
    canActivate(route) {
        const identifier = route.queryParams['identifier'];
        const code = route.queryParams['activation_code'];
        const redirectUrl = identifier && code
            ? ROUTER.pages.main.children.account.children.confirmEmail.getLink({
                identifier,
                code,
            })
            : ROUTER.pages.main.children.auth.children.signIn.getLink();
        this.routerFacade.navigate(redirectUrl);
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectConfirmEmailGuard, deps: [{ token: i1$1.RouterFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectConfirmEmailGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectConfirmEmailGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$1.RouterFacade }] });

class RedirectConfirmPasswordGuard {
    constructor(routerFacade) {
        this.routerFacade = routerFacade;
    }
    canActivate(route) {
        const identifier = route.queryParams['identifier'];
        const code = route.queryParams['activation_code'];
        const redirectUrl = identifier && code
            ? ROUTER.pages.main.children.auth.children.confirmPassword.getLink({
                identifier,
                code,
            })
            : ROUTER.pages.main.children.auth.children.signIn.getLink();
        this.routerFacade.navigate(redirectUrl);
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectConfirmPasswordGuard, deps: [{ token: i1$1.RouterFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectConfirmPasswordGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RedirectConfirmPasswordGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$1.RouterFacade }] });

const snakeCase = changeCase.snakeCase;

const isPlainObject = (v) => typeof v === 'object' && v !== null && v.constructor === Object;
function _cleanDeep(value) {
    // Remove null/undefined
    if (value == null)
        return undefined;
    // Arrays: clean each item, drop undefineds, drop if empty
    if (Array.isArray(value)) {
        const cleaned = value
            .map((x) => _cleanDeep(x))
            .filter((x) => x !== undefined);
        return cleaned.length ? cleaned : undefined;
    }
    // Plain objects: clean each prop, drop if no keys remain
    if (isPlainObject(value)) {
        const out = {};
        for (const [k, v] of Object.entries(value)) {
            const cleaned = _cleanDeep(v);
            if (cleaned !== undefined)
                out[k] = cleaned;
        }
        return Object.keys(out).length ? out : undefined;
    }
    // Non-plain objects (Date, Map, Set, class instances, etc.): keep as-is
    return value;
}
/**
 * Recursively remove null/undefined, empty arrays, and empty plain objects.
 * Keeps 0, false, and "".
 */
function omitNullishAndEmpty(obj) {
    const cleaned = _cleanDeep(obj);
    // If the entire object became empty, return {} (typed) instead of undefined
    return cleaned && typeof cleaned === 'object'
        ? cleaned
        : {};
}

/**
 * Generated bundle index. Do not edit.
 */

export { FuseSearchPipe, ModulesSharedModule, PrivateGuard, PublicGuard, RedirectActivationGuard, RedirectConfirmEmailGuard, RedirectConfirmPasswordGuard, omitNullishAndEmpty, snakeCase };
//# sourceMappingURL=console-modules-shared.mjs.map
