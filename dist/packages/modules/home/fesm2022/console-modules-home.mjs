import * as i0 from '@angular/core';
import { inject, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { ROUTER } from '@console-core/config';

class HomeComponent {
    constructor() {
        this.router = inject(Router);
    }
    ngOnInit() {
        this.router.navigate([ROUTER.pages.main.children.orders.link]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: HomeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: HomeComponent, isStandalone: false, selector: "app-module-home-index", ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: HomeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-module-home-index',
                    template: ``,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: false,
                }]
        }] });

const modulesHomeRoutes = [
    {
        path: '',
        title: ROUTER.pages.main.children.home.title,
        children: [
            {
                path: ROUTER.pages.main.children.home.path,
                pathMatch: 'full',
                component: HomeComponent,
            },
        ],
    },
];

class ModulesHomeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesHomeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: ModulesHomeModule, imports: [i1.RouterModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesHomeModule, imports: [RouterModule.forChild(modulesHomeRoutes)] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ModulesHomeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(modulesHomeRoutes)],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ModulesHomeModule, modulesHomeRoutes };
//# sourceMappingURL=console-modules-home.mjs.map
