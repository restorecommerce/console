import * as i0 from '@angular/core';
import { PipeTransform } from '@angular/core';
import Fuse from 'fuse.js';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthnFacade, RouterFacade } from '@console-core/state';
import * as changeCase from 'change-case';

declare class FuseSearchService<T> {
    private fuseOptions;
    getSearchEngine(items?: T[], options?: {
        shouldSort: boolean;
        threshold: number;
        location: number;
        distance: number;
        maxPatternLength: number;
        minMatchCharLength: number;
        keys: string[];
    }): Fuse<T>;
    getDefaultOptions(): {
        shouldSort: boolean;
        threshold: number;
        location: number;
        distance: number;
        maxPatternLength: number;
        minMatchCharLength: number;
        keys: string[];
    };
    setSearchEngine(items: T[], options?: {
        shouldSort: boolean;
        threshold: number;
        location: number;
        distance: number;
        maxPatternLength: number;
        minMatchCharLength: number;
        keys: string[];
    }): Fuse<T>;
    setSearchKeys(keys: string[]): void;
    setThreshold(value: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FuseSearchService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FuseSearchService<any>>;
}

declare class FuseSearchPipe<T> implements PipeTransform {
    private searchService;
    constructor(searchService: FuseSearchService<T>);
    transform(items: T[], searchTerm: string, keys: string[]): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FuseSearchPipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FuseSearchPipe<any>, "fuseSearch", false>;
}

declare class ModulesSharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ModulesSharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ModulesSharedModule, [typeof FuseSearchPipe], never, [typeof FuseSearchPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ModulesSharedModule>;
}

declare class PrivateGuard {
    private readonly router;
    private readonly authnFacade;
    constructor(router: Router, authnFacade: AuthnFacade);
    canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrivateGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrivateGuard>;
}

declare class PublicGuard {
    private readonly router;
    private readonly authnFacade;
    constructor(router: Router, authnFacade: AuthnFacade);
    canActivate(_: ActivatedRouteSnapshot): Observable<boolean>;
    canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PublicGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PublicGuard>;
}

declare class RedirectActivationGuard implements CanActivate {
    private routerFacade;
    constructor(routerFacade: RouterFacade);
    canActivate(route: ActivatedRouteSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RedirectActivationGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RedirectActivationGuard>;
}

declare class RedirectConfirmEmailGuard implements CanActivate {
    private routerFacade;
    constructor(routerFacade: RouterFacade);
    canActivate(route: ActivatedRouteSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RedirectConfirmEmailGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RedirectConfirmEmailGuard>;
}

declare class RedirectConfirmPasswordGuard implements CanActivate {
    private routerFacade;
    constructor(routerFacade: RouterFacade);
    canActivate(route: ActivatedRouteSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RedirectConfirmPasswordGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RedirectConfirmPasswordGuard>;
}

declare const snakeCase: typeof changeCase.snakeCase;

type DeepClean<T> = T extends null | undefined ? never : T extends (infer U)[] ? DeepClean<U>[] : T extends object ? {
    [K in keyof T as T[K] extends null | undefined ? never : K]?: DeepClean<T[K]>;
} : T;
/**
 * Recursively remove null/undefined, empty arrays, and empty plain objects.
 * Keeps 0, false, and "".
 */
declare function omitNullishAndEmpty<T extends Record<string, unknown>>(obj: T): Partial<DeepClean<T>>;

export { FuseSearchPipe, ModulesSharedModule, PrivateGuard, PublicGuard, RedirectActivationGuard, RedirectConfirmEmailGuard, RedirectConfirmPasswordGuard, omitNullishAndEmpty, snakeCase };
