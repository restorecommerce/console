import * as i0 from '@angular/core';
import { Injectable, Inject, inject, NgModule } from '@angular/core';
import * as i2 from '@ngrx/effects';
import { createEffect, ofType, EffectsModule } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
import { routerNavigationAction } from '@ngrx/router-store';
import * as i1$1 from '@ngrx/store';
import { createAction, props, createFeatureSelector, createSelector, createReducer, on, Store, StoreModule } from '@ngrx/store';
import { STORE, API, AUTH, ROUTER, APP, PAGINATION } from '@console-core/config';
import { of, pipe, map, combineLatest, throwError } from 'rxjs';
import { delay, switchMap, filter, exhaustMap, tap, map as map$1, catchError, take, mergeMap, startWith } from 'rxjs/operators';
import { EActionStatus, ENotificationTypes } from '@console-core/types';
import * as i1 from '@console-core/graphql';
import { IoRestorecommerceResourcebaseFilterOperation, IoRestorecommerceResourcebaseFilterValueType, ModeType, IoRestorecommerceResourcebaseSortSortOrder } from '@console-core/graphql';
import * as i1$2 from '@angular/router';
import { NavigationEnd } from '@angular/router';
import dayjs from 'dayjs';
import { concatLatestFrom } from '@ngrx/operators';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeLogger } from 'ngrx-store-logger';
import { createEntityAdapter } from '@ngrx/entity';
import * as i1$3 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { mapInvoiceReadResponseToInvoice } from '@console-core/mappers';

class PolicyService {
    constructor(policyReadGQL) {
        this.policyReadGQL = policyReadGQL;
    }
    read(payload) {
        return this.policyReadGQL.fetch({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyService, deps: [{ token: i1.PolicyReadGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.PolicyReadGQL }] });

const addNotification = createAction('[APP] Add notification', props());
const showNotification = createAction('[APP] Show notification', props());
const clearNotifications = createAction('[APP] Clear notifications');

class AppEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.addNotification$ = createEffect(() => {
            return this.actions$.pipe(ofType(addNotification), delay(200), switchMap(({ payload }) => of(showNotification({ payload }))));
        });
        this.clearNotifications$ = createEffect(() => {
            return this.actions$.pipe(ofType(showNotification), delay(STORE.config.app.notifications.delay), switchMap(() => of(clearNotifications())));
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AppEffects, deps: [{ token: i2.Actions }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AppEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AppEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.Actions }] });

const selectApp = createFeatureSelector(STORE.states.appState);
const selectNotifications = createSelector(selectApp, (state) => state.notifications);
const selectError$n = createSelector(selectApp, (state) => state.error);
const selectActionStatus$n = createSelector(selectApp, (state) => state.actionStatus);

class AppFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.notifications$ = this.store.select(selectNotifications);
        this.actionStatus$ = this.store.select(selectActionStatus$n);
        this.error$ = this.store.select(selectError$n);
        // Actions
        this.addNotification = (payload) => {
            this.store.dispatch(addNotification({ payload }));
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AppFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AppFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AppFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const filterEmpty = () => pipe(filter((value) => value !== ''));
const filterNullish = () => pipe(filter((value) => value !== null));
const filterUndefined = () => pipe(filter((value) => value !== undefined));
const filterNullishAndUndefined = () => pipe(filter((value) => value !== null && value !== undefined));
const filterEmptyAndNullishAndUndefined = () => pipe(filter((value) => value !== null && value !== undefined && value !== ''));

const organizationContextReadRequest = createAction('[ORGANIZATION CONTEXT] Read request', props());
const organizationContextReadRequestSuccess = createAction('[ORGANIZATION CONTEXT] Read success', props());
const organizationContextReadRequestFail = createAction('[ORGANIZATION CONTEXT] Read fail', props());
const setSelectedOrganizationId = createAction('[ORGANIZATION CONTEXT] Set selected organization id', props());
const selectedGlobalOrganizationHistory = createAction('[ORGANIZATION CONTEXT] Set selected global organization to default');
const setPreviousSelectedGlobalOrganizationHistory = createAction('[ORGANIZATION CONTEXT] Set previously selected global organization');
const cancelOrganizationContextSelection = createAction('[ORGANIZATION CONTEXT] Set the global selected leaf to null');

function withLatestOrganizationData(organizationContextFacade, ...additionalActionTypes) {
    return (source$) => source$.pipe(ofType(...additionalActionTypes, setSelectedOrganizationId.type, selectedGlobalOrganizationHistory.type, setPreviousSelectedGlobalOrganizationHistory
        .type, cancelOrganizationContextSelection.type), concatLatestFrom(() => [organizationContextFacade.selectedId$]), map(([action, organization]) => {
        return [action, organization];
    }));
}

const handleLocalStorageSync = (store, prefix = '') => localStorageSync({
    keys: Object.values(store.states),
    storageKeySerializer: (key) => `${prefix}${key}`,
    rehydrate: true,
});
const handleStoreLogger = (reducer) => storeLogger({ collapsed: true })(reducer);

const initialState$n = {
    notifications: [],
    actionStatus: EActionStatus.INIT,
    error: null,
};
const reducer$n = createReducer(initialState$n, on(addNotification, (state) => {
    return {
        ...state,
        notifications: [],
        actionStatus: EActionStatus.Showing,
    };
}), on(showNotification, (state, { payload }) => {
    const notification = {
        ...payload,
        title: capitalizeFirstLetter(payload.type),
        content: capitalizeFirstLetter(payload.content),
        date: dayjs().toDate(),
    };
    return {
        ...state,
        notifications: [notification],
        actionStatus: EActionStatus.Succeeded,
    };
}), on(clearNotifications, (state) => ({
    ...state,
    notifications: state.notifications.filter(({ date }) => STORE.config.app.notifications.delay >= dayjs().diff(dayjs(date))),
    actionStatus: EActionStatus.Cleared,
})));
const appReducer = (state, action) => reducer$n(state, action);

const adapter$j = createEntityAdapter();
const initialState$m = adapter$j.getInitialState({
    selectedId: null,
    selectedGlobalOrganizationId: null,
    selectedGlobalOrganizationHistory: ['system'],
    selectedParentId: null,
    parentIds: [],
    parentEntities: {},
    selectedChildId: null,
    childIds: [],
    childEntities: {},
    setSelectedGlobalLeaf: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$m = createReducer(initialState$m, on(organizationContextReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(organizationContextReadRequestSuccess, (state, { payload }) => adapter$j.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(organizationContextReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedOrganizationId, (state, { payload }) => {
    return {
        ...state,
        selectedId: payload,
    };
}), on(selectedGlobalOrganizationHistory, (state) => ({
    ...state,
    selectedGlobalOrganizationHistory: initialState$m.selectedGlobalOrganizationHistory,
})), on(setPreviousSelectedGlobalOrganizationHistory, (state) => ({
    ...state,
    setSelectedGlobalLeaf: null,
    selectedGlobalOrganizationHistory: state.selectedGlobalOrganizationHistory.slice(0, -1),
})), on(cancelOrganizationContextSelection, (state) => ({
    ...state,
    setSelectedGlobalLeaf: null,
    selectedGlobalOrganizationHistory: state.selectedGlobalOrganizationHistory.slice(),
})));
const organizationContextReducer = (state, action) => reducer$m(state, action);

const selectOrganizationContext = createFeatureSelector(STORE.states.organizationContextState);
const { selectIds: selectIds$j, selectEntities: selectEntities$j, selectAll: selectAll$j, selectTotal: selectTotal$j } = adapter$j.getSelectors();
const selectOrganizationIds$1 = createSelector(selectOrganizationContext, selectIds$j);
const selectOrganizationEntities$1 = createSelector(selectOrganizationContext, selectEntities$j);
const selectOrganizationAll$1 = createSelector(selectOrganizationContext, selectAll$j);
const selectOrganizationTotal$1 = createSelector(selectOrganizationContext, selectTotal$j);
const selectOrganizationSelectedId$1 = createSelector(selectOrganizationContext, (state) => state.selectedId);
const selectOrganizationSelected$1 = createSelector(selectOrganizationEntities$1, selectOrganizationSelectedId$1, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectOrganizationParentIds$1 = createSelector(selectOrganizationContext, (state) => state.parentIds);
const selectOrganizationParentEntities$1 = createSelector(selectOrganizationContext, (state) => state.parentEntities);
const selectOrganizationChildIds$1 = createSelector(selectOrganizationContext, (state) => state.childIds);
const selectOrganizationChildEntities$1 = createSelector(selectOrganizationContext, (state) => state.childEntities);
const selectOrganizationChildsAll$1 = createSelector(selectOrganizationChildEntities$1, (entities) => Object.values(entities));
const selectOrganizationSelectedChildId$1 = createSelector(selectOrganizationContext, (state) => state.selectedChildId);
const selectOrganizationSelectedChild$1 = createSelector(selectOrganizationChildEntities$1, selectOrganizationSelectedChildId$1, (entities, selectedChildId) => {
    return (selectedChildId && selectedChildId in entities
        ? entities[selectedChildId]
        : null);
});
const selectOrganizationSelectedGlobalOrganizationId = createSelector(selectOrganizationContext, (state) => {
    return state.selectedGlobalOrganizationHistory[state.selectedGlobalOrganizationHistory.length - 1];
});
const selectActionStatus$m = createSelector(selectOrganizationContext, (state) => state.actionStatus);
const selectError$m = createSelector(selectOrganizationContext, (state) => state.error);
const selectGlobalOrganizationHistory = createSelector(selectOrganizationContext, (state) => state.selectedGlobalOrganizationHistory);
const selectGlobalChildrenOrganizationsHelperSelector = createSelector({
    organizations: selectOrganizationAll$1,
    currentParentId: selectOrganizationSelectedGlobalOrganizationId,
    globalOrganizationHistory: selectGlobalOrganizationHistory,
});
const selectGlobalChildrenOrganizations = createSelector(selectGlobalChildrenOrganizationsHelperSelector, (data) => {
    const filteredOrganization = data.organizations.filter((org) => org.parentId === data.currentParentId);
    return filteredOrganization;
});
const selectGlobalOrganizationLeafId = createSelector(selectOrganizationContext, (state) => state.setSelectedGlobalLeaf);
const selectGlobalOrganizationLeaf = createSelector(selectOrganizationEntities$1, selectGlobalOrganizationLeafId, (entities, selectGlobalOrganizationLeafId) => {
    return (selectGlobalOrganizationLeafId &&
        selectGlobalOrganizationLeafId in entities
        ? entities[selectGlobalOrganizationLeafId]
        : null);
});

class OrganizationContextFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectOrganizationIds$1);
        this.entities$ = this.store.select(selectOrganizationEntities$1);
        this.all$ = this.store.select(selectOrganizationAll$1);
        this.total$ = this.store.select(selectOrganizationTotal$1);
        this.selectedId$ = this.store.select(selectOrganizationSelectedId$1);
        this.selected$ = this.store.select(selectOrganizationSelected$1);
        this.actionStatus$ = this.store.select(selectActionStatus$m);
        this.error$ = this.store.select(selectError$m);
        // Actions
        this.read = (payload) => this.store.dispatch(organizationContextReadRequest({ payload }));
        this.setSelectedOrganizationId = (payload) => this.store.dispatch(setSelectedOrganizationId({ payload }));
        this.resetSelectedGlobalOrganization = () => this.store.dispatch(selectedGlobalOrganizationHistory());
        this.lastSelectedGlobalOrganization = () => this.store.dispatch(setPreviousSelectedGlobalOrganizationHistory());
        this.cancelSelection = () => this.store.dispatch(cancelOrganizationContextSelection());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationContextFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationContextFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationContextFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class OrganizationContextEffects {
    constructor(router, actions$, appFacade, organizationService, organizationFacade, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.organizationService = organizationService;
        this.organizationFacade = organizationFacade;
        this.errorHandlingService = errorHandlingService;
        this.organizationReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationContextReadRequest), exhaustMap(({ payload }) => this.organizationService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.organization?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const responseData = result?.data?.master_data?.organization?.Read?.details?.items ||
                    [];
                const payload = responseData.map((item) => ({
                    ...item?.payload,
                    isLeaf: !responseData.some((child) => child.payload?.parentId === item.payload?.id),
                }));
                return organizationContextReadRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(organizationContextReadRequestFail({
                error: error.message,
            }))))));
        });
        this.handleOrganizationChangedNotification$ = createEffect(() => {
            return this.actions$.pipe(ofType(setSelectedOrganizationId, selectedGlobalOrganizationHistory, setPreviousSelectedGlobalOrganizationHistory, cancelOrganizationContextSelection), tap(() => {
                this.appFacade.addNotification({
                    content: `Organization changed`,
                    type: ENotificationTypes.Info,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationContextEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: OrganizationService }, { token: OrganizationContextFacade }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationContextEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationContextEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: OrganizationService }, { type: OrganizationContextFacade }, { type: ErrorHandlingService }] });

const isHierarchical = (root, decendant, organizations) => {
    if (!root || !decendant)
        return false;
    const parentMap = new Map(organizations.map((org) => [org.id, String(org.parentId)]));
    while (decendant && parentMap.has(decendant)) {
        if (decendant === root)
            return true;
        decendant = parentMap.get(decendant) ?? null;
        if (decendant === null)
            break;
    }
    return false;
};
class AuthzService {
    hasRole(user, roleId) {
        return user?.roleAssociations.some((ra) => ra.role === roleId);
    }
    hasRoleInOrg(user, roleId, organizationId, organizations) {
        return user?.roleAssociations.some((ra) => ra.role === roleId &&
            ra.attributes?.some((attr) => attr.attributes?.some((inst) => inst.value === organizationId ||
                isHierarchical(String(inst.value), String(organizationId), organizations))));
    }
    createRoleObservable(roleId) {
        return combineLatest([
            this.accountFacade.user$,
            this.organizationContextFacade.selectedId$,
            this.organizationContextFacade.all$,
        ]).pipe(map(([user, organizationId, organizations]) => this.hasRoleInOrg(user, roleId, organizationId, organizations)));
    }
    constructor(accountFacade, organizationContextFacade) {
        this.accountFacade = accountFacade;
        this.organizationContextFacade = organizationContextFacade;
        this.isSuperAdmin$ = this.accountFacade.user$.pipe(map((user) => user ? this.hasRole(user, 'superadministrator-r-id') : false));
        this.isAdmin$ = this.createRoleObservable('administrator-r-id');
        this.isSale$ = this.createRoleObservable('sales-r-id');
        this.isModerator$ = this.createRoleObservable('moderator-r-id');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthzService, deps: [{ token: AccountFacade }, { token: OrganizationContextFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthzService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthzService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: AccountFacade }, { type: OrganizationContextFacade }] });

class ProductService {
    constructor(catalogProductReadGQL, catalogProductMutateGQL, catalogProductDeleteMutateGQL) {
        this.catalogProductReadGQL = catalogProductReadGQL;
        this.catalogProductMutateGQL = catalogProductMutateGQL;
        this.catalogProductDeleteMutateGQL = catalogProductDeleteMutateGQL;
    }
    read(payload) {
        return this.catalogProductReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.catalogProductMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.catalogProductDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductService, deps: [{ token: i1.CatalogProductReadGQL }, { token: i1.CatalogProductMutateGQL }, { token: i1.CatalogProductDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.CatalogProductReadGQL }, { type: i1.CatalogProductMutateGQL }, { type: i1.CatalogProductDeleteMutateGQL }] });

class FulfillmentService {
    constructor(invoicingFulfillmentReadGQL, invoicingFulfillmentMutateGQL, fulfillmentSubmitGQL, invoicingFulfillmentDeleteMutateGQL) {
        this.invoicingFulfillmentReadGQL = invoicingFulfillmentReadGQL;
        this.invoicingFulfillmentMutateGQL = invoicingFulfillmentMutateGQL;
        this.fulfillmentSubmitGQL = fulfillmentSubmitGQL;
        this.invoicingFulfillmentDeleteMutateGQL = invoicingFulfillmentDeleteMutateGQL;
    }
    read(payload) {
        return this.invoicingFulfillmentReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.invoicingFulfillmentMutateGQL.mutate({
            input: payload,
        });
    }
    submit(payload) {
        return this.fulfillmentSubmitGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.invoicingFulfillmentDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentService, deps: [{ token: i1.FulfillmentFulfillmentReadGQL }, { token: i1.FulfillmentFulfillmentMutateGQL }, { token: i1.FulfillmentFulfillmentSubmitGQL }, { token: i1.FulfillmentFulfillmentDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.FulfillmentFulfillmentReadGQL }, { type: i1.FulfillmentFulfillmentMutateGQL }, { type: i1.FulfillmentFulfillmentSubmitGQL }, { type: i1.FulfillmentFulfillmentDeleteMutateGQL }] });

class UserService {
    constructor(identityUserActivateMutateGQL, identityUserFindGQL, identityUserFindByTokenGQL, identityUserRequestEmailChangeMutateGQL, identityUserConfirmEmailChangeMutateGQL, identityUserRequestPasswordChangeMutateGQL, identityUserConfirmPasswordChangeMutateGQL, identityUserChangePasswordMutateGQL, identityUserReadGQL, identityUserMutateGQL, identityUserDeleteMutateGQL) {
        this.identityUserActivateMutateGQL = identityUserActivateMutateGQL;
        this.identityUserFindGQL = identityUserFindGQL;
        this.identityUserFindByTokenGQL = identityUserFindByTokenGQL;
        this.identityUserRequestEmailChangeMutateGQL = identityUserRequestEmailChangeMutateGQL;
        this.identityUserConfirmEmailChangeMutateGQL = identityUserConfirmEmailChangeMutateGQL;
        this.identityUserRequestPasswordChangeMutateGQL = identityUserRequestPasswordChangeMutateGQL;
        this.identityUserConfirmPasswordChangeMutateGQL = identityUserConfirmPasswordChangeMutateGQL;
        this.identityUserChangePasswordMutateGQL = identityUserChangePasswordMutateGQL;
        this.identityUserReadGQL = identityUserReadGQL;
        this.identityUserMutateGQL = identityUserMutateGQL;
        this.identityUserDeleteMutateGQL = identityUserDeleteMutateGQL;
    }
    activate(payload) {
        return this.identityUserActivateMutateGQL.mutate({
            input: payload,
        });
    }
    find(payload) {
        return this.identityUserFindGQL.fetch({
            input: payload,
        });
    }
    findByToken(payload) {
        return this.identityUserFindByTokenGQL.fetch({
            input: payload,
        });
    }
    requestEmailChange(payload) {
        return this.identityUserRequestEmailChangeMutateGQL.mutate({
            input: payload,
        });
    }
    confirmEmailChange(payload) {
        return this.identityUserConfirmEmailChangeMutateGQL.mutate({
            input: payload,
        });
    }
    requestPasswordChange(payload) {
        return this.identityUserRequestPasswordChangeMutateGQL.mutate({
            input: payload,
        });
    }
    confirmPasswordChange(payload) {
        return this.identityUserConfirmPasswordChangeMutateGQL.mutate({
            input: payload,
        });
    }
    passwordChange(payload) {
        return this.identityUserChangePasswordMutateGQL.mutate({ input: payload });
    }
    read(payload) {
        return this.identityUserReadGQL.fetch({ input: payload });
    }
    mutate(payload) {
        return this.identityUserMutateGQL.mutate({ input: payload });
    }
    remove(payload) {
        return this.identityUserDeleteMutateGQL.mutate({ input: payload });
    }
    getUserFormatted(user) {
        return {
            ...user,
            email: user?.email ?? 'N/A',
            firstName: user?.firstName ?? 'N/A',
            lastName: user?.lastName ?? 'N/A',
            fullName: user?.firstName && user?.lastName
                ? `${user.firstName} ${user.lastName}`
                : 'N/A',
            locale: {
                ...user?.locale,
                name: user?.locale?.name ?? user?.locale?.id ?? null,
            },
            timezone: {
                ...user?.timezone,
                name: user?.timezone?.name ?? user?.locale?.id ?? null,
            },
            roles: user?.roles ?? [],
            tokens: user.tokens ?? [],
            roleAssociations: user?.roleAssociations ?? [],
        };
    }
    getRoleAssociationsRoles(user, rolesHash) {
        const roles = [];
        user.roleAssociations?.forEach((roleAssociation) => {
            if (!roleAssociation.role) {
                return;
            }
            const role = rolesHash[roleAssociation.role ?? ''];
            if (role) {
                roles.push(role);
            }
            else {
                console.warn(`Role with ID "${roleAssociation.role}" not found for user "${user.id}"`);
                roles.push({
                    id: roleAssociation.role ?? 'N/A',
                    name: 'N/A',
                    description: 'N/A',
                    assignableByRoles: [],
                    meta: {
                        id: roleAssociation.role ?? 'N/A',
                        created: 'N/A',
                        createdBy: 'N/A',
                        modified: 'N/A',
                        modifiedBy: 'N/A',
                    },
                });
            }
        });
        const uniqueRoles = [...new Set(roles)];
        uniqueRoles.sort((a, b) => a.name.localeCompare(b.name));
        return uniqueRoles;
    }
    createRoleAssociation(role, instanceType, instanceId) {
        return {
            role: role,
            attributes: [
                {
                    id: 'urn:restorecommerce:acs:names:roleScopingEntity',
                    value: instanceType,
                    attributes: [
                        {
                            id: 'urn:restorecommerce:acs:names:roleScopingInstance',
                            value: instanceId,
                        },
                    ],
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: UserService, deps: [{ token: i1.IdentityUserActivateMutateGQL }, { token: i1.IdentityUserFindGQL }, { token: i1.IdentityUserFindByTokenGQL }, { token: i1.IdentityUserRequestEmailChangeMutateGQL }, { token: i1.IdentityUserConfirmEmailChangeMutateGQL }, { token: i1.IdentityUserRequestPasswordChangeMutateGQL }, { token: i1.IdentityUserConfirmPasswordChangeMutateGQL }, { token: i1.IdentityUserChangePasswordMutateGQL }, { token: i1.IdentityUserReadGQL }, { token: i1.IdentityUserMutateGQL }, { token: i1.IdentityUserDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: UserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: UserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.IdentityUserActivateMutateGQL }, { type: i1.IdentityUserFindGQL }, { type: i1.IdentityUserFindByTokenGQL }, { type: i1.IdentityUserRequestEmailChangeMutateGQL }, { type: i1.IdentityUserConfirmEmailChangeMutateGQL }, { type: i1.IdentityUserRequestPasswordChangeMutateGQL }, { type: i1.IdentityUserConfirmPasswordChangeMutateGQL }, { type: i1.IdentityUserChangePasswordMutateGQL }, { type: i1.IdentityUserReadGQL }, { type: i1.IdentityUserMutateGQL }, { type: i1.IdentityUserDeleteMutateGQL }] });

class RoleService {
    constructor(identityRoleReadGQL, identityRoleMutateGQL, identityRoleDeleteMutateGQL) {
        this.identityRoleReadGQL = identityRoleReadGQL;
        this.identityRoleMutateGQL = identityRoleMutateGQL;
        this.identityRoleDeleteMutateGQL = identityRoleDeleteMutateGQL;
        this.assignableByRolesFormattedCache = {};
    }
    read(payload) {
        return this.identityRoleReadGQL.fetch({ input: payload });
    }
    mutate(payload) {
        return this.identityRoleMutateGQL.mutate({ input: payload });
    }
    remove(payload) {
        return this.identityRoleDeleteMutateGQL.mutate({ input: payload });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleService, deps: [{ token: i1.IdentityRoleReadGQL }, { token: i1.IdentityRoleMutateGQL }, { token: i1.IdentityRoleDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.IdentityRoleReadGQL }, { type: i1.IdentityRoleMutateGQL }, { type: i1.IdentityRoleDeleteMutateGQL }] });

class ApiService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    getEndpoint(endpointKey) {
        const endpoint = API.endpoints[endpointKey];
        return `${this.apiUrl}${endpoint}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ApiService, deps: [{ token: 'apiUrl' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ApiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['apiUrl']
                }] }] });

class AuthnService {
    constructor(oidcKey, httpClient, apiService, identityUserRegisterGQL) {
        this.oidcKey = oidcKey;
        this.httpClient = httpClient;
        this.apiService = apiService;
        this.identityUserRegisterGQL = identityUserRegisterGQL;
        this.headers = new HttpHeaders(AUTH(this.oidcKey));
    }
    signUp(payload) {
        return this.identityUserRegisterGQL.mutate({
            input: payload,
        });
    }
    signIn(payload) {
        const body = new URLSearchParams();
        body.set('identifier', payload?.identifier || '');
        body.set('password', payload?.password || '');
        body.set('grant_type', 'password');
        body.set('scope', 'openid');
        return this.httpClient.post(this.apiService.getEndpoint('token'), body.toString(), {
            headers: this.headers,
        });
    }
    signOut(payload) {
        const body = new URLSearchParams();
        body.set('token', payload.token);
        return this.httpClient.post(this.apiService.getEndpoint('tokenRevocation'), body.toString(), {
            headers: this.headers,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnService, deps: [{ token: 'oidcKey' }, { token: i1$3.HttpClient }, { token: ApiService }, { token: i1.IdentityUserRegisterMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['oidcKey']
                }] }, { type: i1$3.HttpClient }, { type: ApiService }, { type: i1.IdentityUserRegisterMutateGQL }] });

class InvoiceService {
    constructor(invoicingInvoiceReadGQL, invoicingInvoiceMutateGQL, invoicingInvoiceDeleteMutateGQL) {
        this.invoicingInvoiceReadGQL = invoicingInvoiceReadGQL;
        this.invoicingInvoiceMutateGQL = invoicingInvoiceMutateGQL;
        this.invoicingInvoiceDeleteMutateGQL = invoicingInvoiceDeleteMutateGQL;
    }
    read(payload) {
        return this.invoicingInvoiceReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.invoicingInvoiceMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.invoicingInvoiceDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceService, deps: [{ token: i1.InvoicingInvoiceReadGQL }, { token: i1.InvoicingInvoiceMutateGQL }, { token: i1.InvoicingInvoiceDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.InvoicingInvoiceReadGQL }, { type: i1.InvoicingInvoiceMutateGQL }, { type: i1.InvoicingInvoiceDeleteMutateGQL }] });

class ManufacturerService {
    constructor(manufacturerReadGQL, manufacturerMutationGQL, manufacturerDeleteGQL) {
        this.manufacturerReadGQL = manufacturerReadGQL;
        this.manufacturerMutationGQL = manufacturerMutationGQL;
        this.manufacturerDeleteGQL = manufacturerDeleteGQL;
    }
    read(payload) {
        return this.manufacturerReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.manufacturerMutationGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.manufacturerDeleteGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerService, deps: [{ token: i1.ManufucturerReadGQL }, { token: i1.ManufucturerMutateGQL }, { token: i1.ManufucturerDeleteGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.ManufucturerReadGQL }, { type: i1.ManufucturerMutateGQL }, { type: i1.ManufucturerDeleteGQL }] });

class CountryService {
    constructor(masterDataCountryReadGQL, masterDataCountryMutateGQL, masterDataCountryDeleteMutateGQL) {
        this.masterDataCountryReadGQL = masterDataCountryReadGQL;
        this.masterDataCountryMutateGQL = masterDataCountryMutateGQL;
        this.masterDataCountryDeleteMutateGQL = masterDataCountryDeleteMutateGQL;
    }
    read(payload) {
        return this.masterDataCountryReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.masterDataCountryMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.masterDataCountryDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryService, deps: [{ token: i1.MasterDataCountryReadGQL }, { token: i1.MasterDataCountryMutateGQL }, { token: i1.MasterDataCountryDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataCountryReadGQL }, { type: i1.MasterDataCountryMutateGQL }, { type: i1.MasterDataCountryDeleteMutateGQL }] });

class CurrencyService {
    constructor(masterDataCurrencyReadGQL, masterDataCurrencyMutateGQL, masterDataCurrencyDeleteMutateGQL) {
        this.masterDataCurrencyReadGQL = masterDataCurrencyReadGQL;
        this.masterDataCurrencyMutateGQL = masterDataCurrencyMutateGQL;
        this.masterDataCurrencyDeleteMutateGQL = masterDataCurrencyDeleteMutateGQL;
    }
    read(payload) {
        return this.masterDataCurrencyReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.masterDataCurrencyMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.masterDataCurrencyDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyService, deps: [{ token: i1.MasterDataCurrencyReadGQL }, { token: i1.MasterDataCurrencyMutateGQL }, { token: i1.MasterDataCurrencyDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataCurrencyReadGQL }, { type: i1.MasterDataCurrencyMutateGQL }, { type: i1.MasterDataCurrencyDeleteMutateGQL }] });

class CustomerService {
    constructor(masterDataCustomerReadGQL, masterDataCustomerMutateGQL, masterDataCustomerDeleteMutateGQL) {
        this.masterDataCustomerReadGQL = masterDataCustomerReadGQL;
        this.masterDataCustomerMutateGQL = masterDataCustomerMutateGQL;
        this.masterDataCustomerDeleteMutateGQL = masterDataCustomerDeleteMutateGQL;
    }
    read(payload) {
        return this.masterDataCustomerReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.masterDataCustomerMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.masterDataCustomerDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerService, deps: [{ token: i1.MasterDataCustomerReadGQL }, { token: i1.MasterDataCustomerMutateGQL }, { token: i1.MasterDataCustomerDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataCustomerReadGQL }, { type: i1.MasterDataCustomerMutateGQL }, { type: i1.MasterDataCustomerDeleteMutateGQL }] });

class LocaleService {
    constructor(masterDataLocaleReadGQL) {
        this.masterDataLocaleReadGQL = masterDataLocaleReadGQL;
    }
    read(payload) {
        return this.masterDataLocaleReadGQL.fetch({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleService, deps: [{ token: i1.MasterDataLocaleReadGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataLocaleReadGQL }] });

class OrganizationService {
    constructor(masterDataOrganizationReadGQL, masterDataOrganizationMutateGQL, masterDataOrganizationDeleteMutateGQL) {
        this.masterDataOrganizationReadGQL = masterDataOrganizationReadGQL;
        this.masterDataOrganizationMutateGQL = masterDataOrganizationMutateGQL;
        this.masterDataOrganizationDeleteMutateGQL = masterDataOrganizationDeleteMutateGQL;
    }
    read(payload) {
        return this.masterDataOrganizationReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.masterDataOrganizationMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.masterDataOrganizationDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationService, deps: [{ token: i1.MasterDataOrganizationReadGQL }, { token: i1.MasterDataOrganizationMutateGQL }, { token: i1.MasterDataOrganizationDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataOrganizationReadGQL }, { type: i1.MasterDataOrganizationMutateGQL }, { type: i1.MasterDataOrganizationDeleteMutateGQL }] });

class TaxService {
    constructor(masterDataTaxReadGQL, masterDataTaxMutateGQL, masterDataTaxDeleteMutateGQL) {
        this.masterDataTaxReadGQL = masterDataTaxReadGQL;
        this.masterDataTaxMutateGQL = masterDataTaxMutateGQL;
        this.masterDataTaxDeleteMutateGQL = masterDataTaxDeleteMutateGQL;
    }
    read(payload) {
        return this.masterDataTaxReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.masterDataTaxMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.masterDataTaxDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxService, deps: [{ token: i1.MasterDataTaxReadGQL }, { token: i1.MasterDataTaxMutateGQL }, { token: i1.MasterDataTaxDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataTaxReadGQL }, { type: i1.MasterDataTaxMutateGQL }, { type: i1.MasterDataTaxDeleteMutateGQL }] });

class TimezoneService {
    constructor(masterDataTimezoneReadGQL) {
        this.masterDataTimezoneReadGQL = masterDataTimezoneReadGQL;
    }
    read(payload) {
        return this.masterDataTimezoneReadGQL.fetch({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneService, deps: [{ token: i1.MasterDataTimezoneReadGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataTimezoneReadGQL }] });

class ShopService {
    constructor(masterDataShopReadGQL, masterDataShopMutateGQL, masterDataShopDeleteMutateGQL) {
        this.masterDataShopReadGQL = masterDataShopReadGQL;
        this.masterDataShopMutateGQL = masterDataShopMutateGQL;
        this.masterDataShopDeleteMutateGQL = masterDataShopDeleteMutateGQL;
    }
    read(payload) {
        return this.masterDataShopReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.masterDataShopMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.masterDataShopDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopService, deps: [{ token: i1.MasterDataShopReadGQL }, { token: i1.MasterDataShopMutateGQL }, { token: i1.MasterDataShopDeleteMutateGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.MasterDataShopReadGQL }, { type: i1.MasterDataShopMutateGQL }, { type: i1.MasterDataShopDeleteMutateGQL }] });

class OrderService {
    constructor(orderingOrderReadGQL, orderingOrderMutateGQL, orderingOrderDeleteMutateGQL, orderingInvoiceCreateGQL, orderingFulfilmentGQL) {
        this.orderingOrderReadGQL = orderingOrderReadGQL;
        this.orderingOrderMutateGQL = orderingOrderMutateGQL;
        this.orderingOrderDeleteMutateGQL = orderingOrderDeleteMutateGQL;
        this.orderingInvoiceCreateGQL = orderingInvoiceCreateGQL;
        this.orderingFulfilmentGQL = orderingFulfilmentGQL;
    }
    read(payload) {
        return this.orderingOrderReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.orderingOrderMutateGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.orderingOrderDeleteMutateGQL.mutate({
            input: payload,
        });
    }
    createOrderInvoice(payload) {
        const orderInvoiceInput = {};
        orderInvoiceInput.items = [
            {
                sections: [
                    {
                        orderId: payload,
                        selectedItems: [],
                    },
                ],
            },
        ];
        return this.orderingInvoiceCreateGQL.mutate({
            input: orderInvoiceInput,
        });
    }
    createFulfilment(payload) {
        return this.orderingFulfilmentGQL.mutate({
            input: {
                items: [
                    {
                        orderId: payload.id,
                        // selectedItems: [],
                        senderAddress: {
                            address: {
                                buildingNumber: payload.senderAddress.address?.buildingNumber,
                                street: payload.senderAddress.address?.buildingNumber,
                                locality: payload.senderAddress.address?.locality,
                                region: payload.senderAddress.address?.region,
                                postcode: payload.senderAddress.address?.postcode,
                                countryId: payload.senderAddress.address?.countryId,
                            },
                        },
                    },
                ],
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderService, deps: [{ token: i1.OrderingOrderReadGQL }, { token: i1.OrderingOrderMutateGQL }, { token: i1.OrderingOrderDeleteMutateGQL }, { token: i1.OrderingInvoiceCreateGQL }, { token: i1.CreateOrderFulfillmentGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.OrderingOrderReadGQL }, { type: i1.OrderingOrderMutateGQL }, { type: i1.OrderingOrderDeleteMutateGQL }, { type: i1.OrderingInvoiceCreateGQL }, { type: i1.CreateOrderFulfillmentGQL }] });

class PriceGroupService {
    constructor(priceGroupReadGQL, priceGroupMutationGQL, priceGroupDeleteGQL) {
        this.priceGroupReadGQL = priceGroupReadGQL;
        this.priceGroupMutationGQL = priceGroupMutationGQL;
        this.priceGroupDeleteGQL = priceGroupDeleteGQL;
    }
    read(payload) {
        return this.priceGroupReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.priceGroupMutationGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.priceGroupDeleteGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupService, deps: [{ token: i1.PriceGroupReadGQL }, { token: i1.PriceGroupMutateGQL }, { token: i1.PriceGroupDeleteGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.PriceGroupReadGQL }, { type: i1.PriceGroupMutateGQL }, { type: i1.PriceGroupDeleteGQL }] });

class ProductCategoryService {
    constructor(productCategoryReadGQL, productCategoryMutationGQL, productCategoryDeleteGQL) {
        this.productCategoryReadGQL = productCategoryReadGQL;
        this.productCategoryMutationGQL = productCategoryMutationGQL;
        this.productCategoryDeleteGQL = productCategoryDeleteGQL;
    }
    read(payload) {
        return this.productCategoryReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.productCategoryMutationGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.productCategoryDeleteGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryService, deps: [{ token: i1.ProductCategoryReadGQL }, { token: i1.ProductCategoryMutateGQL }, { token: i1.ProductCategoryDeleteGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.ProductCategoryReadGQL }, { type: i1.ProductCategoryMutateGQL }, { type: i1.ProductCategoryDeleteGQL }] });

class ProductPrototypeService {
    constructor(productPrototypeReadGQL, productPrototypeMutationGQL, productPrototypeDeleteGQL) {
        this.productPrototypeReadGQL = productPrototypeReadGQL;
        this.productPrototypeMutationGQL = productPrototypeMutationGQL;
        this.productPrototypeDeleteGQL = productPrototypeDeleteGQL;
    }
    read(payload) {
        return this.productPrototypeReadGQL.fetch({
            input: payload,
        });
    }
    mutate(payload) {
        return this.productPrototypeMutationGQL.mutate({
            input: payload,
        });
    }
    remove(payload) {
        return this.productPrototypeDeleteGQL.mutate({
            input: payload,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeService, deps: [{ token: i1.ProductPrototypeReadGQL }, { token: i1.ProductPrototypeMutateGQL }, { token: i1.ProductPrototypeDeleteGQL }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.ProductPrototypeReadGQL }, { type: i1.ProductPrototypeMutateGQL }, { type: i1.ProductPrototypeDeleteGQL }] });

class ErrorHandlingService {
    constructor(authFacade) {
        this.authFacade = authFacade;
    }
    checkStatusAndThrow(status) {
        const errorMessages = {
            400: 'bad request',
            401: 'unauthorized',
            403: 'access not allowed',
            404: 'not found',
            408: 'request timeout',
            500: 'internal server error',
        };
        let errorMessage = '';
        if (status?.code) {
            if (status.code === 401) {
                this.authFacade.signOut(false);
            }
            if (status?.code in errorMessages) {
                errorMessage = errorMessages[status?.code];
            }
            else if (status.code !== 200) {
                errorMessage = status.message || 'unknown error';
            }
        }
        if (errorMessage) {
            throw new Error(errorMessage);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ErrorHandlingService, deps: [{ token: AuthnFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ErrorHandlingService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ErrorHandlingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: AuthnFacade }] });

class ObjectUploadService {
    constructor(http) {
        this.http = http;
    }
    uploadFile(file, endpoint, bucketName, keyName, meta, token
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        const contentType = file.type || 'application/octet-stream';
        const operations = {
            query: `mutation Ostorage($input: IIoRestorecommerceOstorageObject!) {
        ostorage {
          object {
            Put(input: $input) {
              details {
                response {
                  payload { url, bucket }
                  status { code, message }
                }
                operationStatus { code, message }
              }
            }
          }
        }
      }`,
            variables: {
                input: {
                    bucket: bucketName,
                    key: keyName,
                    options: {
                        contentType: contentType,
                    },
                    meta: meta,
                },
            },
        };
        const formData = new FormData();
        formData.append('operations', JSON.stringify(operations));
        formData.append('map', JSON.stringify({ fileVar: ['variables.input.object'] }));
        formData.append('fileVar', file);
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Apollo-Require-Preflight': 'true',
        });
        return this.http.post(endpoint, formData, { headers });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadService, deps: [{ token: i1$3.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$3.HttpClient }] });

const signUpRequest = createAction('[AUTHN] Sign up request', props());
const signUpSuccess = createAction('[AUTHN] Sign up success');
const signUpFail = createAction('[AUTHN] Sign up fail', props());
const activateRequest = createAction('[AUTHN] Activate request', props());
const activateSuccess = createAction('[AUTHN] Activate success');
const activateFail = createAction('[AUTHN] Activate fail', props());
const signInRequest = createAction('[AUTHN] Sign in request', props());
const signInSuccess = createAction('[AUTHN] Sign in success', props());
const signInFail = createAction('[AUTHN] Sign in fail', props());
const passwordRecoveryRequest = createAction('[AUTHN] Password recovery request', props());
const passwordRecoverySuccess = createAction('[AUTHN] Password recovery success');
const passwordRecoveryFail = createAction('[AUTHN] Password recovery fail', props());
const confirmPasswordRequest = createAction('[AUTHN] Confirm password change request', props());
const confirmPasswordSuccess = createAction('[AUTHN] Confirm password change success');
const confirmPasswordFail = createAction('[AUTHN] Confirm password change fail', props());
const signOutRequest = createAction('[AUTHN] Sign out request', props());
const signOutSuccess = createAction('[AUTHN] Sign out success', props());
const signOutFail = createAction('[AUTHN] Sign out fail', props());
const resetAuthnState = createAction('[AUTHN] Reset authn state');

const selectAuthn = createFeatureSelector(STORE.states.authnState);
const selectIsAuthenticated = createSelector(selectAuthn, (state) => state.isAuthenticated);
const selectIsNotAuthenticated = createSelector(selectIsAuthenticated, (isAuthenticated) => !isAuthenticated);
const selectExpiresIn = createSelector(selectAuthn, (state) => state.expiresIn);
const selectToken = createSelector(selectAuthn, (state) => state.token);
const selectIsRequesting = createSelector(selectAuthn, (state) => state.actionStatus === EActionStatus.Requesting);
const selectActionStatus$l = createSelector(selectAuthn, (state) => state.actionStatus);
const selectError$l = createSelector(selectAuthn, (state) => state.error);

class AuthnFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
        this.isNotAuthenticated$ = this.store.select(selectIsNotAuthenticated);
        this.expiresIn$ = this.store.select(selectExpiresIn);
        this.token$ = this.store.select(selectToken);
        this.isRequesting$ = this.store.select(selectIsRequesting);
        this.actionStatus$ = this.store.select(selectActionStatus$l);
        this.error$ = this.store.select(selectError$l);
        // Actions
        this.signUp = (payload) => this.store.dispatch(signUpRequest({ payload }));
        this.activate = (payload) => this.store.dispatch(activateRequest({ payload }));
        this.signIn = (payload) => this.store.dispatch(signInRequest({ payload }));
        this.signOut = (showNotification = true) => this.store.dispatch(signOutRequest({
            payload: { showNotification },
        }));
        this.passwordRecovery = (payload) => this.store.dispatch(passwordRecoveryRequest({ payload }));
        this.confirmPassword = (payload) => this.store.dispatch(confirmPasswordRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class AuthnEffects {
    constructor(router, activatedRoute, actions$, authnService, userService, appFacade, authnFacade, accountFacade) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.actions$ = actions$;
        this.authnService = authnService;
        this.userService = userService;
        this.appFacade = appFacade;
        this.authnFacade = authnFacade;
        this.accountFacade = accountFacade;
        this.signUpRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(signUpRequest), switchMap(({ payload }) => this.authnService.signUp(payload).pipe(map$1(({ data }) => {
                const { code, message } = data?.identity?.user.Register?.details?.status || {};
                if (code !== 200) {
                    return signUpFail({
                        error: message ?? 'sign up failed',
                    });
                }
                return signUpSuccess();
            }), catchError((error) => of(signUpFail({ error: error.message }))))));
        });
        this.signUpSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(signUpSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'account has been created',
                    type: ENotificationTypes.Success,
                });
            }), tap(() => {
                this.appFacade.addNotification({
                    content: 'an account activation email has been sent',
                    type: ENotificationTypes.Info,
                });
            }), tap(() => {
                this.router.navigate([
                    ROUTER.pages.main.children.auth.children.signIn.link,
                ]);
            }));
        }, { dispatch: false });
        this.activateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(activateRequest), switchMap(({ payload }) => this.userService.activate(payload).pipe(map$1(({ data }) => {
                const { code, message } = data?.identity?.user?.Activate?.details?.operationStatus || {};
                if (code !== 200) {
                    return activateFail({
                        error: message ?? 'activation failed',
                    });
                }
                return activateSuccess();
            }), catchError((error) => of(activateFail({ error: error.message }))))));
        });
        this.activateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(activateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'account has been activated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.signInRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(signInRequest), switchMap(({ payload }) => {
                return this.authnService.signIn(payload).pipe(map$1(({ access_token: token = null, expires_in: expiresIn = null, last_login: lastLogin = null, }) => {
                    if (!token) {
                        throw new Error('401');
                    }
                    return signInSuccess({
                        payload: { token, expiresIn, lastLogin },
                    });
                }), catchError((error) => {
                    return of(signInFail({
                        error: error.message.includes('401')
                            ? 'sign in failed'
                            : 'unknown error',
                    }));
                }));
            }));
        });
        this.signInSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(signInSuccess), tap(({ payload: { token } }) => {
                this.accountFacade.userFindByTokenRequest({ token });
            }), switchMap(() => this.activatedRoute.queryParams.pipe(take(1))), map$1((params) => params['url'] || ROUTER.pages.main.children.home.link), tap((url) => {
                this.router.navigate([url]);
            }));
        }, { dispatch: false });
        this.passwordRecoveryRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(passwordRecoveryRequest), switchMap(({ payload }) => this.userService.requestPasswordChange(payload).pipe(map$1(({ data }) => {
                const { code, message } = data?.identity?.user?.RequestPasswordChange?.details
                    ?.operationStatus || {};
                if (code !== 200) {
                    return passwordRecoveryFail({
                        error: message ?? 'password recovery failed',
                    });
                }
                return passwordRecoverySuccess();
            }), catchError((error) => of(passwordRecoveryFail({ error: error.message }))))));
        });
        this.passwordRecoverySuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(passwordRecoverySuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'a password recovery email has been sent',
                    type: ENotificationTypes.Success,
                });
            }), tap(() => {
                this.router.navigate([
                    ROUTER.pages.main.children.auth.children.signIn.link,
                ]);
            }));
        }, { dispatch: false });
        this.confirmPasswordRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(confirmPasswordRequest), switchMap(({ payload }) => this.userService.confirmPasswordChange(payload).pipe(map$1(({ data }) => {
                const { code, message } = data?.identity?.user?.ConfirmPasswordChange?.details
                    ?.operationStatus || {};
                if (code !== 200) {
                    return confirmPasswordFail({
                        error: message ?? 'password recovery failed',
                    });
                }
                return confirmPasswordSuccess();
            }), catchError((error) => of(confirmPasswordFail({
                error: error.message,
            }))))));
        });
        this.confirmPasswordSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(confirmPasswordSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'password has been changed',
                    type: ENotificationTypes.Success,
                });
            }), tap(() => {
                this.router.navigate([
                    ROUTER.pages.main.children.auth.children.signIn.link,
                ]);
            }));
        }, { dispatch: false });
        this.signOutRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(signOutRequest), concatLatestFrom(() => this.authnFacade.token$), switchMap(([{ payload }, token]) => {
                if (!token) {
                    return of(signOutFail({
                        error: 'your token is invalid',
                        showNotification: payload.showNotification,
                    }));
                }
                return this.authnService.signOut({ token }).pipe(map$1(() => signOutSuccess({ payload })), catchError((error) => of(signOutFail({
                    error: error.message,
                    showNotification: payload.showNotification,
                }))));
            }));
        });
        this.signOut = createEffect(() => {
            return this.actions$.pipe(ofType(signOutSuccess, signOutFail), tap((action) => {
                if ('payload' in action && action.payload.showNotification) {
                    this.appFacade.addNotification({
                        content: 'signed out',
                        type: ENotificationTypes.Success,
                    });
                }
            }), tap(() => {
                this.router.navigate([ROUTER.pages.main.children.auth.children.signIn.link], {
                    replaceUrl: true,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(signUpFail, activateFail, signInFail, passwordRecoveryFail, confirmPasswordFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
        this.resetAuthnState$ = createEffect(() => {
            return this.actions$.pipe(ofType(signOutSuccess, signOutFail), map$1(() => resetAuthnState()));
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnEffects, deps: [{ token: i1$2.Router }, { token: i1$2.ActivatedRoute }, { token: i2.Actions }, { token: AuthnService }, { token: UserService }, { token: AppFacade }, { token: AuthnFacade }, { token: AccountFacade }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AuthnEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i1$2.ActivatedRoute }, { type: i2.Actions }, { type: AuthnService }, { type: UserService }, { type: AppFacade }, { type: AuthnFacade }, { type: AccountFacade }] });

const initialState$l = {
    isAuthenticated: false,
    token: null,
    expiresIn: null,
    lastLogin: null,
    actionStatus: EActionStatus.INIT,
    error: null,
};
const reducer$l = createReducer(initialState$l, on(signUpRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
    error: null,
})), on(signUpSuccess, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(signUpFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(activateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
    error: null,
})), on(activateSuccess, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(activateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(signInRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
    error: null,
})), on(signInSuccess, (state, { payload }) => ({
    ...state,
    ...payload,
    isAuthenticated: true,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(signInFail, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    actionStatus: EActionStatus.Failed,
    error,
})), on(passwordRecoveryRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
    error: null,
})), on(passwordRecoverySuccess, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(passwordRecoveryFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(confirmPasswordRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
    error: null,
})), on(confirmPasswordSuccess, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(confirmPasswordFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(signOutRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(signOutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    actionStatus: EActionStatus.Succeeded,
})), on(signOutFail, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    actionStatus: EActionStatus.Failed,
    error,
})), on(resetAuthnState, (_) => ({
    ...initialState$l,
})));
const authnReducer = (state, action) => reducer$l(state, action);

const userFindRequest = createAction('[ACCOUNT] User find request', props());
const userFindSuccess = createAction('[ACCOUNT] User find success', props());
const userFindFail = createAction('[ACCOUNT] User find fail', props());
const userFindByTokenRequest = createAction('[ACCOUNT] Find user by token request', props());
const userFindByTokenSuccess = createAction('[ACCOUNT] Find user by token success', props());
const userFindByTokenFail = createAction('[ACCOUNT] Find user by token fail', props());
const userMutateRequest = createAction('[ACCOUNT] User mutate request', props());
const userMutateSuccess = createAction('[ACCOUNT] User mutate success', props());
const userMutateFail = createAction('[ACCOUNT] User mutate fail', props());
const userChangeEmailRequest = createAction('[ACCOUNT] User change email request', props());
const userChangeEmailSuccess = createAction('[ACCOUNT] User change email success');
const userChangeEmailFail = createAction('[ACCOUNT] User change email fail', props());
const userConfirmEmailChangeRequest = createAction('[ACCOUNT] User confirm email change request', props());
const userConfirmEmailChangeSuccess = createAction('[ACCOUNT] User confirm email change success');
const userConfirmEmailChangeFail = createAction('[ACCOUNT] User confirm email change fail', props());
const userChangePasswordRequest$1 = createAction('[ACCOUNT] User change password request', props());
const userChangePasswordSuccess$1 = createAction('[ACCOUNT] User change password success');
const userChangePasswordFail$1 = createAction('[ACCOUNT] User change password fail', props());
const userRemoveRequest$1 = createAction('[ACCOUNT] User remove request', props());
const userRemoveSuccess$1 = createAction('[ACCOUNT] User remove success');
const userRemoveFail$1 = createAction('[ACCOUNT] User remove fail', props());
const resetAccountState = createAction('[ACCOUNT] Reset account state');

class AccountEffects {
    constructor(actions$, appFacade, authnFacade, userService, errorHandlingService) {
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.authnFacade = authnFacade;
        this.userService = userService;
        this.errorHandlingService = errorHandlingService;
        this.userFindRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userFindRequest), exhaustMap(({ payload }) => this.userService.find(payload).pipe(map$1((result) => {
                const identity = result?.data?.identity;
                const operationStatus = identity?.user?.Find?.details?.operationStatus;
                const payload = identity?.user?.Find?.details?.items?.pop()
                    ?.payload;
                this.errorHandlingService.checkStatusAndThrow(operationStatus);
                return payload;
            }), map$1((payload) => {
                return userFindSuccess({
                    payload: this.userService.getUserFormatted(payload),
                });
            }), catchError((error) => of(userFindFail({ error: error.message }))))));
        });
        this.userFindByTokenRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userFindByTokenRequest), switchMap(({ payload }) => this.userService.findByToken(payload).pipe(tap((result) => {
                const identity = result?.data?.identity;
                const status = identity?.user?.FindByToken?.details?.status;
                const data = identity?.user?.FindByToken?.details?.payload;
                if (status?.code !== 200 || !data?.id) {
                    return [
                        this.authnFacade.signOut(false),
                        this.appFacade.addNotification({
                            content: 'token expired',
                            type: ENotificationTypes.Error,
                        }),
                    ];
                }
                return result;
            }), map$1((result) => {
                const payload = result?.data?.identity?.user?.FindByToken?.details
                    ?.payload;
                return userFindByTokenSuccess({
                    payload: this.userService.getUserFormatted(payload),
                });
            }), catchError((error) => of(userFindByTokenFail({ error: error.message }))))));
        });
        this.userMutateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userMutateRequest), switchMap(({ payload }) => this.userService.mutate(payload).pipe(map$1((result) => {
                const identity = result?.data?.identity;
                const operationStatus = identity?.user?.Mutate?.details?.operationStatus;
                const payload = identity?.user?.Mutate?.details?.items?.pop()
                    ?.payload;
                this.errorHandlingService.checkStatusAndThrow(operationStatus);
                return payload;
            }), map$1((payload) => {
                return userMutateSuccess({
                    payload: this.userService.getUserFormatted(payload),
                });
            }), catchError((error) => of(userMutateFail({ error: error.message }))))));
        });
        this.userMutateRequestSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userMutateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'account updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.userChangeEmailRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userChangeEmailRequest), switchMap(({ payload }) => this.userService.requestEmailChange(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.RequestEmailChange?.details
                    ?.operationStatus);
            }), map$1(() => {
                return userChangeEmailSuccess();
            }), catchError((error) => of(userChangeEmailFail({ error: error.message }))))));
        });
        this.userChangeEmailSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userChangeEmailSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'email change has been requested',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.userConfirmEmailChangeRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userConfirmEmailChangeRequest), switchMap(({ payload }) => this.userService.confirmEmailChange(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.ConfirmEmailChange?.details
                    ?.operationStatus);
            }), map$1(() => {
                return userConfirmEmailChangeSuccess();
            }), catchError((error) => of(userConfirmEmailChangeFail({
                error: error.message,
            }))))));
        });
        this.userConfirmEmailChangeSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userConfirmEmailChangeSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'email has been changed',
                    type: ENotificationTypes.Success,
                });
            }), tap(() => {
                this.authnFacade.signOut();
            }));
        }, { dispatch: false });
        this.userChangePasswordRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userChangePasswordRequest$1), switchMap(({ payload }) => this.userService.passwordChange(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.ChangePassword?.details
                    ?.operationStatus);
            }), map$1(() => {
                return userChangePasswordSuccess$1();
            }), catchError((error) => of(userChangePasswordFail$1({ error: error.message }))))));
        });
        this.userChangePasswordSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userChangePasswordSuccess$1), tap(() => {
                this.appFacade.addNotification({
                    content: 'password has been changed',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.userRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userRemoveRequest$1), switchMap(({ payload }) => this.userService.remove(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Delete?.details
                    ?.operationStatus);
            }), map$1(() => {
                return userRemoveSuccess$1();
            }), catchError((error) => of(userRemoveFail$1({ error: error.message }))))));
        });
        this.userRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userRemoveSuccess$1), tap(() => {
                this.appFacade.addNotification({
                    content: 'account deleted',
                    type: ENotificationTypes.Success,
                });
            }), tap(() => {
                this.authnFacade.signOut(false);
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(userFindFail, userFindByTokenFail, userMutateFail, userChangeEmailFail, userConfirmEmailChangeFail, userChangePasswordFail$1, userRemoveFail$1), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
        this.resetAccountState$ = createEffect(() => {
            return this.actions$.pipe(ofType(signOutSuccess, signOutFail), map$1(() => resetAccountState()));
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AccountEffects, deps: [{ token: i2.Actions }, { token: AppFacade }, { token: AuthnFacade }, { token: UserService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AccountEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AccountEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.Actions }, { type: AppFacade }, { type: AuthnFacade }, { type: UserService }, { type: ErrorHandlingService }] });

const selectAccount = createFeatureSelector(STORE.states.accountState);
const selectUser$1 = createSelector(selectAccount, (state) => state.user);
const selectUserId = createSelector(selectUser$1, (user) => user?.id);
const selectActionStatus$k = createSelector(selectAccount, (state) => state.actionStatus);
const selectError$k = createSelector(selectAccount, (state) => state.error);

class AccountFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.user$ = this.store.select(selectUser$1);
        this.userId$ = this.store.select(selectUserId);
        this.actionStatus$ = this.store.select(selectActionStatus$k);
        this.error$ = this.store.select(selectError$k);
        // Actions
        this.userFindRequest = (payload) => this.store.dispatch(userFindRequest({ payload }));
        this.userFindByTokenRequest = (payload) => this.store.dispatch(userFindByTokenRequest({ payload }));
        this.userMutateRequest = (payload) => this.store.dispatch(userMutateRequest({ payload }));
        this.userChangeEmailRequest = (payload) => this.store.dispatch(userChangeEmailRequest({ payload }));
        this.userConfirmEmailChangeRequest = (payload) => this.store.dispatch(userConfirmEmailChangeRequest({ payload }));
        this.userChangePasswordRequest = (payload) => this.store.dispatch(userChangePasswordRequest$1({ payload }));
        this.userRemoveRequest = (payload) => this.store.dispatch(userRemoveRequest$1({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AccountFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AccountFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: AccountFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const initialState$k = {
    user: null,
    actionStatus: EActionStatus.INIT,
    error: null,
};
const reducer$k = createReducer(initialState$k, on(userFindRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
    error: null,
})), on(userFindSuccess, (state, { payload }) => ({
    ...state,
    user: payload,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(userFindFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userFindByTokenRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
    error: null,
})), on(userFindByTokenSuccess, (state, { payload }) => ({
    ...state,
    user: payload,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(userFindByTokenFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userMutateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
    error: null,
})), on(userMutateSuccess, (state, { payload }) => ({
    ...state,
    user: payload,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(userMutateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userChangeEmailRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
    error: null,
})), on(userChangeEmailSuccess, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(userChangeEmailFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userConfirmEmailChangeRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
    error: null,
})), on(userConfirmEmailChangeSuccess, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(userConfirmEmailChangeFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userChangePasswordRequest$1, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
    error: null,
})), on(userChangePasswordSuccess$1, (state) => ({
    ...state,
    actionStatus: EActionStatus.Updated,
    error: null,
})), on(userChangePasswordFail$1, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userRemoveRequest$1, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
    error: null,
})), on(userRemoveSuccess$1, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
    error: null,
})), on(userRemoveFail$1, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(resetAccountState, () => ({
    ...initialState$k,
})));
const accountReducer = (state, action) => reducer$k(state, action);

const fulfillmentReadRequest = createAction('[FULFILLMENT] Read request', props());
const fulfillmentReadRequestSuccess = createAction('[FULFILLMENT] Read success', props());
const fulfillmentReadRequestFail = createAction('[FULFILLMENT] Read fail', props());
const fulfillmentReadOneByIdRequest = createAction('[FULFILLMENT] Read one by id request', props());
const fulfillmentReadOneByIdRequestSuccess = createAction('[FULFILLMENT] Read one by id success', props());
const fulfillmentReadOneByIdRequestFail = createAction('[FULFILLMENT] Read one by id fail', props());
const setSelectedId$f = createAction('[FULFILLMENT] Set selected id', props());
const fulfillmentCreateRequest = createAction('[FULFILLMENT] Fulfillment create request', props());
const fulfillmentCreateSuccess = createAction('[FULFILLMENT] Fulfillment create success', props());
const fulfillmentCreateFail = createAction('[FULFILLMENT] Fulfillment create fail', props());
const fulfillmentSubmitRequest = createAction('[FULFILLMENT] Submit request', props());
const fulfillmentSubmitSuccess = createAction('[FULFILLMENT] Fulfillment Submit success', props());
const fulfillmentSubmitFail = createAction('[FULFILLMENT] Fulfillment Submit fail', props());
const fulfillmentUpdateRequest = createAction('[FULFILLMENT] Fulfillment update request', props());
const fulfillmentUpdateSuccess = createAction('[FULFILLMENT] Fulfillment update success', props());
const fulfillmentUpdateFail = createAction('[FULFILLMENT] Fulfillment update fail', props());
const fulfillmentRemoveRequest = createAction('[FULFILLMENT] Fulfillment remove request', props());
const fulfillmentRemoveSuccess = createAction('[FULFILLMENT] Fulfillment remove success', props());
const fulfillmentRemoveFail = createAction('[FULFILLMENT] Fulfillment remove fail', props());

class FulfillmentEffects {
    constructor(router, actions$, appFacade, fulfillmentService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.fulfillmentService = fulfillmentService;
        this.errorHandlingService = errorHandlingService;
        this.fulfillmentReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentReadRequest), switchMap(({ payload }) => this.fulfillmentService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.fulfillment?.fulfillment?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.fulfillment?.fulfillment?.Read?.details?.items || [])?.map((item) => item?.payload);
                return fulfillmentReadRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(fulfillmentReadRequestFail({
                error: error.message,
            }))))));
        });
        this.orderReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentReadOneByIdRequest), exhaustMap(({ payload }) => this.fulfillmentService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.fulfillment?.fulfillment?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.fulfillment?.fulfillment?.Read?.details?.items ||
                    [])?.map((item) => item?.payload);
                return fulfillmentReadOneByIdRequestSuccess({
                    payload: payload.pop(),
                });
            }), catchError((error) => of(fulfillmentReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.fulfillmentCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentCreateRequest), switchMap(({ payload }) => this.fulfillmentService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.fulfillment?.fulfillment?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.fulfillment?.fulfillment?.Mutate?.details?.items?.pop()
                    ?.payload;
                return fulfillmentCreateSuccess({ payload });
            }), catchError((error) => of(fulfillmentCreateFail({ error: error.message }))))));
        });
        this.fulfillmentCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'fulfillment created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.fulfillments.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.fulfillmentUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentUpdateRequest), switchMap(({ payload }) => this.fulfillmentService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.fulfillment?.fulfillment?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.fulfillment?.fulfillment?.Mutate?.details?.items?.pop()
                    ?.payload;
                return fulfillmentUpdateSuccess({ payload });
            }), catchError((error) => of(fulfillmentUpdateFail({ error: error.message }))))));
        });
        this.fulfillmentUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'fulfillment updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.fulfillmentRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.fulfillmentService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.fulfillment?.fulfillment?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return fulfillmentRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(fulfillmentRemoveFail({ error: error.message }))));
            }));
        });
        this.fulfillmentRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'fulfillment deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentReadRequestFail, fulfillmentCreateFail, fulfillmentUpdateFail, fulfillmentRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
        this.fulfillmentSubmitRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentSubmitRequest), switchMap(({ payload }) => this.fulfillmentService
                .submit({
                items: [payload],
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.fulfillment?.fulfillment?.Submit?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.fulfillment?.fulfillment?.Submit?.details?.items?.pop()
                    ?.payload;
                return fulfillmentSubmitSuccess({ payload });
            }), catchError((error) => of(fulfillmentSubmitFail({
                error: error.message,
            }))))));
        });
        this.fulfillmentSubmitedSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(fulfillmentSubmitSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'fulfillment submitted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: FulfillmentService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: FulfillmentService }, { type: ErrorHandlingService }] });

const adapter$i = createEntityAdapter();
const initialState$j = adapter$i.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$j = createReducer(initialState$j, on(fulfillmentReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(fulfillmentReadRequestSuccess, (state, { payload }) => adapter$i.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(fulfillmentReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$f, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(fulfillmentCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(fulfillmentCreateSuccess, (state, { payload }) => adapter$i.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(fulfillmentCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(fulfillmentUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(fulfillmentUpdateSuccess, (state, { payload }) => adapter$i.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(fulfillmentSubmitSuccess, (state, { payload }) => adapter$i.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(fulfillmentUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(fulfillmentRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(fulfillmentRemoveSuccess, (state, { payload }) => adapter$i.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(fulfillmentRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const fulfillmentReducer = (state, action) => reducer$j(state, action);

const selectFulfillment = createFeatureSelector(STORE.states.fulfillmentState);
const { selectIds: selectIds$i, selectEntities: selectEntities$i, selectAll: selectAll$i, selectTotal: selectTotal$i } = adapter$i.getSelectors();
const selectFulfillmentIds = createSelector(selectFulfillment, selectIds$i);
const selectFulfillmentEntities = createSelector(selectFulfillment, selectEntities$i);
const selectFulfillmentAll = createSelector(selectFulfillment, selectAll$i);
const selectFulfillmentTotal = createSelector(selectFulfillment, selectTotal$i);
const selectFulfillmentSelectedId = createSelector(selectFulfillment, (state) => state.selectedId);
const selectFulfillmentSelected = createSelector(selectFulfillmentEntities, selectFulfillmentSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$j = createSelector(selectFulfillment, (state) => state.actionStatus);
const selectError$j = createSelector(selectFulfillment, (state) => state.error);

class FulfillmentFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectFulfillmentIds);
        this.entities$ = this.store.select(selectFulfillmentEntities);
        this.all$ = this.store.select(selectFulfillmentAll);
        this.total$ = this.store.select(selectFulfillmentTotal);
        this.selectedId$ = this.store.select(selectFulfillmentSelectedId);
        this.selected$ = this.store.select(selectFulfillmentSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$j);
        this.error$ = this.store.select(selectError$j);
        // Actions
        this.read = (payload) => this.store.dispatch(fulfillmentReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(fulfillmentReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$f({ payload }));
        this.create = (payload) => this.store.dispatch(fulfillmentCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(fulfillmentUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(fulfillmentRemoveRequest({ payload }));
        this.submit = (payload) => this.store.dispatch(fulfillmentSubmitRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const customerReadRequest = createAction('[CUSTOMER] Read request', props());
const customerReadRequestSuccess = createAction('[CUSTOMER] Read success', props());
const customerReadRequestFail = createAction('[CUSTOMER] Read fail', props());
const customerReadOneByIdRequest = createAction('[CUSTOMER] Read one by id request', props());
const customerReadOneByIdRequestSuccess = createAction('[CUSTOMER] Read one by id success', props());
const customerReadOneByIdRequestFail = createAction('[CUSTOMER] Read one by id fail', props());
const setSelectedId$e = createAction('[CUSTOMER] Set selected id', props());
const customerCreateRequest = createAction('[CUSTOMER] customer create request', props());
const customerCreateSuccess = createAction('[CUSTOMER] Customer create success', props());
const customerCreateFail = createAction('[CUSTOMER] Customer create fail', props());
const customerUpdateRequest = createAction('[CUSTOMER] Customer update request', props());
const customerUpdateSuccess = createAction('[CUSTOMER] Customer update success', props());
const customerUpdateFail = createAction('[CUSTOMER] Customer update fail', props());
const customerRemoveRequest = createAction('[CUSTOMER] Customer remove request', props());
const customerRemoveSuccess = createAction('[CUSTOMER] Customer remove success', props());
const customerRemoveFail = createAction('[CUSTOMER] Customer remove fail', props());

const userReadRequest = createAction('[IAM] Read request', props());
const userReadRequestSuccess = createAction('[IAM] Read success', props());
const userReadRequestFail = createAction('[IAM] Read fail', props());
const userReadOneByIdRequest = createAction('[IAM] Read one by id request', props());
const userReadOneByIdRequestSuccess = createAction('[IAM] Read one by id success', props());
const userReadOneByIdRequestFail = createAction('[IAM] Read one by id fail', props());
const userSetSelectedId = createAction('[IAM] User set selected id', props());
const userCreateRequest = createAction('[IAM] User create request', props());
const userCreateSuccess = createAction('[IAM] User create success', props());
const userCreateFail = createAction('[IAM] User create fail', props());
const userUpdateRequest = createAction('[IAM] User update request', props());
const userUpdateSuccess = createAction('[IAM] User update success', props());
const userUpdateFail = createAction('[IAM] User update fail', props());
const userSetTempRoleAssociations = createAction('[IAM] Set temp role associations', props());
const userChangePasswordRequest = createAction('[IAM] User change password request', props());
const userChangePasswordSuccess = createAction('[IAM] User change password success');
const userChangePasswordFail = createAction('[IAM] User change password fail', props());
const userAddRoleAssociationRequest = createAction('[IAM] User add role association request', props());
const userAddRoleAssociationSuccess = createAction('[IAM] User add role association success', props());
const userAddRoleAssociationFail = createAction('[IAM] User add role association fail', props());
const userRemoveRequest = createAction('[IAM] User remove request', props());
const userRemoveSuccess = createAction('[IAM] User remove success', props());
const userRemoveFail = createAction('[IAM] User remove fail', props());

const shopReadRequest = createAction('[SHOP] Read request', props());
const shopReadRequestSuccess = createAction('[SHOP] Read success', props());
const shopReadRequestFail = createAction('[SHOP] Read fail', props());
const shopReadOneByIdRequest = createAction('[SHOP] Read one by id request', props());
const shopReadOneByIdRequestSuccess = createAction('[SHOP] Read one by id success', props());
const shopReadOneByIdRequestFail = createAction('[SHOP] Read one by id fail', props());
const setSelectedId$d = createAction('[SHOP] Set selected id', props());
const shopCreateRequest = createAction('[SHOP] Shop create request', props());
const shopCreateSuccess = createAction('[SHOP] Shop create success', props());
const shopCreateFail = createAction('[SHOP] Shop create fail', props());
const shopUpdateRequest = createAction('[SHOP] Shop update request', props());
const shopUpdateSuccess = createAction('[SHOP] Shop update success', props());
const shopUpdateFail = createAction('[SHOP] Shop update fail', props());
const shopRemoveRequest = createAction('[SHOP] Shop remove request', props());
const shopRemoveSuccess = createAction('[SHOP] Shop remove success', props());
const shopRemoveFail = createAction('[SHOP] Shop remove fail', props());

const invoiceReadRequest = createAction('[INVOICE] Read request', props());
const invoiceReadRequestSuccess = createAction('[INVOICE] Read success', props());
const invoiceReadRequestFail = createAction('[INVOICE] Read fail', props());
const setSelectedId$c = createAction('[INVOICE] Set selected id', props());
const invoiceCreateRequest = createAction('[INVOICE] Invoice create request', props());
const invoiceCreateSuccess = createAction('[INVOICE] Invoice create success', props());
const invoiceCreateFail = createAction('[INVOICE] Invoice create fail', props());
const invoiceUpdateRequest = createAction('[INVOICE] Invoice update request', props());
const invoiceUpdateSuccess = createAction('[INVOICE] Invoice update success', props());
const invoiceUpdateFail = createAction('[INVOICE] Invoice update fail', props());
const invoiceRemoveRequest = createAction('[INVOICE] Invoice remove request', props());
const invoiceRemoveSuccess = createAction('[INVOICE] Invoice remove success', props());
const invoiceRemoveFail = createAction('[INVOICE] Invoice remove fail', props());
const invoicePaymentStateRequest = createAction('[INVOICE] Invoice payment state request', props());
const invoicePaymentStateSuccess = createAction('[INVOICE] Invoice payment state success', props());
const invoicePaymentStateFail = createAction('[INVOICE] Invoice payment state fail', props());

const isInvoiceEdit = (url) => 
// eslint-disable-next-line no-useless-escape
!!url && /^\/invoices\/[^/]+\/edit(?:$|[\?#\/])/.test(url);
class InvoiceEffects {
    constructor(router, actions$, appFacade, invoiceService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.invoiceService = invoiceService;
        this.errorHandlingService = errorHandlingService;
        this.invoiceReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceReadRequest), switchMap(({ payload }) => this.invoiceService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.invoicing?.invoice?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.invoicing?.invoice?.Read?.details?.items || [])?.map((item) => item?.payload);
                return invoiceReadRequestSuccess({
                    payload: mapInvoiceReadResponseToInvoice(payload),
                });
            }), catchError((error) => of(invoiceReadRequestFail({ error: error.message }))))));
        });
        this.invoiceCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceCreateRequest), switchMap(({ payload }) => this.invoiceService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.invoicing?.invoice?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.invoicing?.invoice?.Mutate?.details?.items?.pop()
                    ?.payload;
                return invoiceCreateSuccess({ payload });
            }), catchError((error) => of(invoiceCreateFail({ error: error.message }))))));
        });
        this.invoiceCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'invoice created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.invoices.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.preloadOnEdit$ = createEffect(() => {
            return this.actions$.pipe(ofType(routerNavigationAction), map$1((a) => a.payload.routerState?.url), filter(isInvoiceEdit), 
            // eslint-disable-next-line @ngrx/no-multiple-actions-in-effects
            mergeMap(() => [
                customerReadRequest({ payload: {} }),
                shopReadRequest({ payload: {} }),
                userReadRequest({ payload: {} }),
            ]));
        });
        this.preloadOnCreate$ = createEffect(() => {
            return this.actions$.pipe(ofType(routerNavigationAction), map$1((a) => a.payload.routerState?.url), filter((url) => url?.startsWith('/invoices/create')), 
            // eslint-disable-next-line @ngrx/no-multiple-actions-in-effects
            mergeMap(() => [
                customerReadRequest({ payload: {} }),
                shopReadRequest({ payload: {} }),
                userReadRequest({ payload: {} }),
            ]));
        });
        this.invoiceUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceUpdateRequest), switchMap(({ payload }) => this.invoiceService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.invoicing?.invoice?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.invoicing?.invoice?.Mutate?.details?.items?.pop()
                    ?.payload;
                return invoiceUpdateSuccess({ payload });
            }), catchError((error) => of(invoiceUpdateFail({ error: error.message }))))));
        });
        this.invoiceUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'invoice updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.invoiceRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.invoiceService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.invoicing?.invoice?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return invoiceRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(invoiceRemoveFail({ error: error.message }))));
            }));
        });
        this.invoiceRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'invoice deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.invoicePaymentRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoicePaymentStateRequest), switchMap(({ payload }) => this.invoiceService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.invoicing?.invoice?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.invoicing?.invoice?.Mutate?.details?.items?.pop()
                    ?.payload;
                return invoicePaymentStateSuccess({ payload });
            }), catchError((error) => of(invoicePaymentStateFail({ error: error.message }))))));
        });
        this.invoicePaymentSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoicePaymentStateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'Payment changed',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(invoiceReadRequestFail, invoiceCreateFail, invoiceUpdateFail, invoiceRemoveFail, invoicePaymentStateFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: InvoiceService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: InvoiceService }, { type: ErrorHandlingService }] });

const adapter$h = createEntityAdapter();
const initialState$i = adapter$h.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$i = createReducer(initialState$i, on(invoiceReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(invoiceReadRequestSuccess, (state, { payload }) => adapter$h.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(invoiceReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$c, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(invoiceCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(invoiceCreateSuccess, (state, { payload }) => adapter$h.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(invoiceCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(invoiceUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(invoiceUpdateSuccess, (state, { payload }) => adapter$h.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(invoiceUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(invoiceRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(invoiceRemoveSuccess, (state, { payload }) => adapter$h.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(invoiceRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(invoicePaymentStateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(invoicePaymentStateSuccess, (state, { payload }) => adapter$h.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(invoicePaymentStateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const invoiceReducer = (state, action) => reducer$i(state, action);

const selectInvoice = createFeatureSelector(STORE.states.invoiceState);
const { selectIds: selectIds$h, selectEntities: selectEntities$h, selectAll: selectAll$h, selectTotal: selectTotal$h } = adapter$h.getSelectors();
const selectInvoiceIds = createSelector(selectInvoice, selectIds$h);
const selectInvoiceEntities = createSelector(selectInvoice, selectEntities$h);
const selectInvoiceAll = createSelector(selectInvoice, selectAll$h);
const selectInvoiceTotal = createSelector(selectInvoice, selectTotal$h);
const selectInvoiceSelectedId = createSelector(selectInvoice, (state) => state.selectedId);
const selectInvoiceSelected = createSelector(selectInvoiceEntities, selectInvoiceSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$i = createSelector(selectInvoice, (state) => state.actionStatus);
const selectError$i = createSelector(selectInvoice, (state) => state.error);

class InvoiceFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectInvoiceIds);
        this.entities$ = this.store.select(selectInvoiceEntities);
        this.all$ = this.store.select(selectInvoiceAll);
        this.total$ = this.store.select(selectInvoiceTotal);
        this.selectedId$ = this.store.select(selectInvoiceSelectedId);
        this.selected$ = this.store.select(selectInvoiceSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$i);
        this.error$ = this.store.select(selectError$i);
        // Actions
        this.read = (payload) => this.store.dispatch(invoiceReadRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$c({ payload }));
        this.create = (payload) => this.store.dispatch(invoiceCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(invoiceUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(invoiceRemoveRequest({ payload }));
        this.changePaymentState = (invoice) => {
            this.store.dispatch(invoicePaymentStateRequest({
                payload: {
                    items: [
                        {
                            id: invoice.id,
                            paymentState: invoice.paymentState,
                        },
                    ],
                    mode: ModeType.Update,
                },
            }));
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoiceFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const policyReadRequest = createAction('[POLICY] Read request', props());
const policyReadRequestSuccess = createAction('[POLICY] Read success', props());
const policyReadRequestFail = createAction('[POLICY] Read fail', props());
const policyReadOneByIdRequest = createAction('[POLICY] Read one by id request', props());
const policyReadOneByIdRequestSuccess = createAction('[POLICY] Read one by id success', props());
const policyReadOneByIdRequestFail = createAction('[POLICY] Read one by id fail', props());
const setSelectedId$b = createAction('[POLICY] Set selected id', props());
const policyCreateRequest = createAction('[POLICY] Policy create request', props());
const policyCreateSuccess = createAction('[POLICY] Policy create success', props());
const policyCreateFail = createAction('[POLICY] Policy create fail', props());
const policyUpdateRequest = createAction('[POLICY] Policy update request', props());
const policyUpdateSuccess = createAction('[POLICY] Policy update success', props());
const policyUpdateFail = createAction('[POLICY] Policy update fail', props());
const policyRemoveRequest = createAction('[POLICY] Policy remove request', props());
const policyRemoveSuccess = createAction('[POLICY] Policy remove success', props());
const policyRemoveFail = createAction('[POLICY] Policy remove fail', props());

class PolicyEffects {
    constructor(router, actions$, appFacade, policyService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.policyService = policyService;
        this.errorHandlingService = errorHandlingService;
        this.policyReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(policyReadRequest), exhaustMap(({ payload }) => this.policyService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.access_control?.policy?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.access_control?.policy?.Read?.details?.items || [])?.map((item) => item?.payload);
                return policyReadRequestSuccess({ payload });
            }), catchError((error) => of(policyReadRequestFail({ error: error.message }))))));
        });
        // roleReadOneByIdRequest$ = createEffect(() => {
        //   return this.actions$.pipe(
        //     ofType(policyActions.policyReadOneByIdRequest),
        //     exhaustMap(({ payload }) =>
        //       this.policyService
        //         .read({
        //           filters: [
        //             {
        //               filters: [
        //                 {
        //                   field: 'id',
        //                   value: payload.id,
        //                   type: IoRestorecommerceResourcebaseFilterValueType.String,
        //                   operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
        //                 },
        //               ],
        //             },
        //           ],
        //           limit: 1,
        //         })
        //         .pipe(
        //           tap((result) => {
        //             this.errorHandlingService.checkStatusAndThrow(
        //               result?.data?.identity?.role?.Read?.details
        //                 ?.operationStatus as TOperationStatus
        //             );
        //           }),
        //           map((result) => {
        //             const payload =
        //               result?.data?.identity?.role?.Read?.details?.items?.pop()
        //                 ?.payload as IRole;
        //             return policyActions.policyReadOneByIdRequestSuccess({
        //               payload,
        //             });
        //           }),
        //           catchError((error: Error) =>
        //             of(
        //               policyActions.policyReadOneByIdRequestFail({
        //                 error: error.message,
        //               })
        //             )
        //           )
        //         )
        //     )
        //   );
        // });
        // roleCreateRequest$ = createEffect(() => {
        //   return this.actions$.pipe(
        //     ofType(policyActions.policyCreateRequest),
        //     switchMap(({ payload }) =>
        //       this.policyService.mutate(payload).pipe(
        //         tap((result) => {
        //           this.errorHandlingService.checkStatusAndThrow(
        //             result?.data?.identity?.role?.Mutate?.details
        //               ?.operationStatus as TOperationStatus
        //           );
        //         }),
        //         map((result) => {
        //           const payload =
        //             result?.data?.identity?.role?.Mutate?.details?.items?.pop()
        //               ?.payload as IRole;
        //           return policyActions.policyCreateSuccess({ payload });
        //         }),
        //         catchError((error: Error) =>
        //           of(policyActions.policyCreateFail({ error: error.message }))
        //         )
        //       )
        //     )
        //   );
        // });
        // roleCreateSuccess$ = createEffect(
        //   () => {
        //     return this.actions$.pipe(
        //       ofType(policyActions.policyCreateSuccess),
        //       tap(() => {
        //         this.appFacade.addNotification({
        //           content: 'role created',
        //           type: ENotificationTypes.Success,
        //         });
        //       }),
        //       tap(({ payload }) => {
        //         this.router.navigate(
        //           ROUTER.pages.main.children.management.children.accessControl.children.roles.children.edit.getLink(
        //             { id: payload.id }
        //           )
        //         );
        //       })
        //     );
        //   },
        //   { dispatch: false }
        // );
        // roleUpdateRequest$ = createEffect(() => {
        //   return this.actions$.pipe(
        //     ofType(policyActions.policyUpdateRequest),
        //     switchMap(({ payload }) =>
        //       this.policyService.mutate(payload).pipe(
        //         tap((result) => {
        //           this.errorHandlingService.checkStatusAndThrow(
        //             result?.data?.identity?.role?.Mutate?.details
        //               ?.operationStatus as TOperationStatus
        //           );
        //         }),
        //         map((result) => {
        //           const payload =
        //             result?.data?.identity?.role?.Mutate?.details?.items?.pop()
        //               ?.payload as IRole;
        //           return policyActions.policyUpdateSuccess({ payload });
        //         }),
        //         catchError((error: Error) =>
        //           of(policyActions.policyUpdateFail({ error: error.message }))
        //         )
        //       )
        //     )
        //   );
        // });
        // roleUpdateSuccess$ = createEffect(
        //   () => {
        //     return this.actions$.pipe(
        //       ofType(policyActions.policyUpdateSuccess),
        //       tap(() => {
        //         this.appFacade.addNotification({
        //           content: 'role updated',
        //           type: ENotificationTypes.Success,
        //         });
        //       })
        //     );
        //   },
        //   { dispatch: false }
        // );
        // roleRemoveRequest$ = createEffect(() => {
        //   return this.actions$.pipe(
        //     ofType(policyActions.policyRemoveRequest),
        //     switchMap(({ payload }) => {
        //       const id = payload.id;
        //       return this.policyService.remove({ ids: [id] }).pipe(
        //         tap((result) => {
        //           this.errorHandlingService.checkStatusAndThrow(
        //             result?.data?.identity?.role?.Delete?.details
        //               ?.operationStatus as TOperationStatus
        //           );
        //         }),
        //         map(() => {
        //           return policyActions.policyRemoveSuccess({
        //             payload: { id },
        //           });
        //         }),
        //         catchError((error: Error) =>
        //           of(policyActions.policyRemoveFail({ error: error.message }))
        //         )
        //       );
        //     })
        //   );
        // });
        // roleRemoveSuccess$ = createEffect(
        //   () => {
        //     return this.actions$.pipe(
        //       ofType(policyActions.policyRemoveSuccess),
        //       tap(() => {
        //         this.appFacade.addNotification({
        //           content: 'role deleted',
        //           type: ENotificationTypes.Success,
        //         });
        //       })
        //     );
        //   },
        //   { dispatch: false }
        // );
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(policyReadRequestFail, policyReadOneByIdRequestFail, policyCreateFail, policyUpdateFail, policyRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: PolicyService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: PolicyService }, { type: ErrorHandlingService }] });

const adapter$g = createEntityAdapter();
const initialState$h = adapter$g.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$h = createReducer(initialState$h, on(policyReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(policyReadRequestSuccess, (state, { payload }) => adapter$g.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(policyReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(policyReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(policyReadOneByIdRequestSuccess, (state, { payload }) => adapter$g.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(policyReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$b, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(policyCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(policyCreateSuccess, (state, { payload }) => adapter$g.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(policyCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(policyUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(policyUpdateSuccess, (state, { payload }) => adapter$g.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(policyUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(policyRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(policyRemoveSuccess, (state, { payload }) => adapter$g.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(policyRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const policyReducer = (state, action) => reducer$h(state, action);

const selectPolicy = createFeatureSelector(STORE.states.policyState);
const { selectIds: selectIds$g, selectEntities: selectEntities$g, selectAll: selectAll$g, selectTotal: selectTotal$g } = adapter$g.getSelectors();
const selectPolicyIds = createSelector(selectPolicy, selectIds$g);
const selectPolicyEntities = createSelector(selectPolicy, selectEntities$g);
const selectPolicyAll = createSelector(selectPolicy, selectAll$g);
const selectPolicyTotal = createSelector(selectPolicy, selectTotal$g);
const selectPolicySelectedId = createSelector(selectPolicy, (state) => state.selectedId);
const selectPolicySelected = createSelector(selectPolicyEntities, selectPolicySelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$h = createSelector(selectPolicy, (state) => state.actionStatus);
const selectError$h = createSelector(selectPolicy, (state) => state.error);

class PolicyFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectPolicyIds);
        this.entities$ = this.store.select(selectPolicyEntities);
        this.all$ = this.store.select(selectPolicyAll);
        this.total$ = this.store.select(selectPolicyTotal);
        this.selectedId$ = this.store.select(selectPolicySelectedId);
        this.selected$ = this.store.select(selectPolicySelected);
        this.actionStatus$ = this.store.select(selectActionStatus$h);
        this.error$ = this.store.select(selectError$h);
        // Actions
        this.read = (payload) => this.store.dispatch(policyReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(policyReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$b({ payload }));
        this.create = (payload) => this.store.dispatch(policyCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(policyUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(policyRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const roleReadRequest = createAction('[ROLE] Read request', props());
const roleReadRequestSuccess = createAction('[ROLE] Read success', props());
const roleReadRequestFail = createAction('[ROLE] Read fail', props());
const roleReadOneByIdRequest = createAction('[ROLE] Read one by id request', props());
const roleReadOneByIdRequestSuccess = createAction('[ROLE] Read one by id success', props());
const roleReadOneByIdRequestFail = createAction('[ROLE] Read one by id fail', props());
const setSelectedId$a = createAction('[ROLE] Set selected id', props());
const roleCreateRequest = createAction('[ROLE] Role create request', props());
const roleCreateSuccess = createAction('[ROLE] Role create success', props());
const roleCreateFail = createAction('[ROLE] Role create fail', props());
const roleUpdateRequest = createAction('[ROLE] Role update request', props());
const roleUpdateSuccess = createAction('[ROLE] Role update success', props());
const roleUpdateFail = createAction('[ROLE] Role update fail', props());
const roleRemoveRequest = createAction('[ROLE] Role remove request', props());
const roleRemoveSuccess = createAction('[ROLE] Role remove success', props());
const roleRemoveFail = createAction('[ROLE] Role remove fail', props());

class RoleEffects {
    constructor(router, actions$, appFacade, roleService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.roleService = roleService;
        this.errorHandlingService = errorHandlingService;
        this.roleReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleReadRequest), exhaustMap(({ payload }) => this.roleService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.role?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.identity?.role?.Read?.details?.items || [])?.map((item) => item?.payload);
                return roleReadRequestSuccess({ payload });
            }), catchError((error) => of(roleReadRequestFail({ error: error.message }))))));
        });
        this.roleReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleReadOneByIdRequest), exhaustMap(({ payload }) => this.roleService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.role?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.identity?.role?.Read?.details?.items?.pop()
                    ?.payload;
                return roleReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(roleReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.roleCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleCreateRequest), switchMap(({ payload }) => this.roleService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.role?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.identity?.role?.Mutate?.details?.items?.pop()
                    ?.payload;
                return roleCreateSuccess({ payload });
            }), catchError((error) => of(roleCreateFail({ error: error.message }))))));
        });
        this.roleCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'role created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.accessControl.children.roles.children.edit.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.roleUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleUpdateRequest), switchMap(({ payload }) => this.roleService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.role?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.identity?.role?.Mutate?.details?.items?.pop()
                    ?.payload;
                return roleUpdateSuccess({ payload });
            }), catchError((error) => of(roleUpdateFail({ error: error.message }))))));
        });
        this.roleUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'role updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.roleRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.roleService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.role?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return roleRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(roleRemoveFail({ error: error.message }))));
            }));
        });
        this.roleRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'role deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(roleReadRequestFail, roleReadOneByIdRequestFail, roleCreateFail, roleUpdateFail, roleRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: RoleService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: RoleService }, { type: ErrorHandlingService }] });

const adapter$f = createEntityAdapter();
const initialState$g = adapter$f.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$g = createReducer(initialState$g, on(roleReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(roleReadRequestSuccess, (state, { payload }) => adapter$f.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(roleReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(roleReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(roleReadOneByIdRequestSuccess, (state, { payload }) => adapter$f.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(roleReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$a, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(roleCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(roleCreateSuccess, (state, { payload }) => adapter$f.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(roleCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(roleUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(roleUpdateSuccess, (state, { payload }) => adapter$f.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(roleUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(roleRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(roleRemoveSuccess, (state, { payload }) => adapter$f.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(roleRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const roleReducer = (state, action) => reducer$g(state, action);

const selectRole = createFeatureSelector(STORE.states.roleState);
const { selectIds: selectIds$f, selectEntities: selectEntities$f, selectAll: selectAll$f, selectTotal: selectTotal$f } = adapter$f.getSelectors();
const selectRoleIds = createSelector(selectRole, selectIds$f);
const selectRoleEntities = createSelector(selectRole, selectEntities$f);
const selectRoleAll = createSelector(selectRole, selectAll$f);
const selectRoleTotal = createSelector(selectRole, selectTotal$f);
const selectRoleAllDistinctAssignableByRoles = createSelector(selectRoleAll, (roles) => {
    const assignableByRoles = roles
        .map((role) => role.assignableByRoles || [])
        .flat();
    return Array.from(new Set(assignableByRoles));
});
const selectRoleSelectedId = createSelector(selectRole, (state) => state.selectedId);
const selectRoleSelected = createSelector(selectRoleEntities, selectRoleSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$g = createSelector(selectRole, (state) => state.actionStatus);
const selectError$g = createSelector(selectRole, (state) => state.error);

class RoleFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectRoleIds);
        this.entities$ = this.store.select(selectRoleEntities);
        this.all$ = this.store.select(selectRoleAll);
        this.allDistinctAssignableByRoles$ = this.store.select(selectRoleAllDistinctAssignableByRoles);
        this.total$ = this.store.select(selectRoleTotal);
        this.selectedId$ = this.store.select(selectRoleSelectedId);
        this.selected$ = this.store.select(selectRoleSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$g);
        this.error$ = this.store.select(selectError$g);
        // Actions
        this.read = (payload) => this.store.dispatch(roleReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(roleReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$a({ payload }));
        this.create = (payload) => this.store.dispatch(roleCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(roleUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(roleRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RoleFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const countryReadRequest = createAction('[COUNTRY] Read request', props());
const countryReadRequestSuccess = createAction('[COUNTRY] Read success', props());
const countryReadRequestFail = createAction('[COUNTRY] Read fail', props());
const countryReadOneByIdRequest = createAction('[COUNTRY] Read one by id request', props());
const countryReadOneByIdRequestSuccess = createAction('[COUNTRY] Read one by id success', props());
const countryReadOneByIdRequestFail = createAction('[COUNTRY] Read one by id fail', props());
const setSelectedId$9 = createAction('[COUNTRY] Set selected id', props());
const countryCreateRequest = createAction('[COUNTRY] Country create request', props());
const countryCreateSuccess = createAction('[COUNTRY] Country create success', props());
const countryCreateFail = createAction('[COUNTRY] Country create fail', props());
const countryUpdateRequest = createAction('[COUNTRY] Country update request', props());
const countryUpdateSuccess = createAction('[COUNTRY] Country update success', props());
const countryUpdateFail = createAction('[COUNTRY] Country update fail', props());
const countryRemoveRequest = createAction('[COUNTRY] Country remove request', props());
const countryRemoveSuccess = createAction('[COUNTRY] Country remove success', props());
const countryRemoveFail = createAction('[COUNTRY] Country remove fail', props());

class CountryEffects {
    constructor(router, actions$, appFacade, countryService, organizationContextFacade, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.countryService = countryService;
        this.organizationContextFacade = organizationContextFacade;
        this.errorHandlingService = errorHandlingService;
        this.countryReadRequest$ = createEffect(() => {
            return this.actions$.pipe(withLatestOrganizationData(this.organizationContextFacade, countryReadRequest.type), exhaustMap(([_action, _organization]) => this.countryService.read({}).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.country?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.master_data?.country?.Read?.details?.items || [])?.map((item) => item?.payload);
                return countryReadRequestSuccess({ payload });
            }), catchError((error) => of(countryReadRequestFail({ error: error.message }))))));
        });
        this.countryReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryReadOneByIdRequest), exhaustMap(({ payload }) => this.countryService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.country?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.country?.Read?.details?.items?.pop()
                    ?.payload;
                return countryReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(countryReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.countryCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryCreateRequest), switchMap(({ payload }) => this.countryService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.country?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.country?.Mutate?.details?.items?.pop()
                    ?.payload;
                return countryCreateSuccess({ payload });
            }), catchError((error) => of(countryCreateFail({ error: error.message }))))));
        });
        this.countryCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'country created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.countries.children.edit.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.countryUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryUpdateRequest), switchMap(({ payload }) => this.countryService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.country?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.country?.Mutate?.details?.items?.pop()
                    ?.payload;
                return countryUpdateSuccess({ payload });
            }), catchError((error) => of(countryUpdateFail({ error: error.message }))))));
        });
        this.countryUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'country updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.countryRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.countryService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.country?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return countryRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(countryRemoveFail({ error: error.message }))));
            }));
        });
        this.countryRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'country deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(countryReadRequestFail, countryReadOneByIdRequestFail, countryCreateFail, countryUpdateFail, countryRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: CountryService }, { token: OrganizationContextFacade }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: CountryService }, { type: OrganizationContextFacade }, { type: ErrorHandlingService }] });

const adapter$e = createEntityAdapter();
const initialState$f = adapter$e.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$f = createReducer(initialState$f, on(countryReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(countryReadRequestSuccess, (state, { payload }) => adapter$e.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(countryReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(countryReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(countryReadOneByIdRequestSuccess, (state, { payload }) => adapter$e.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(countryReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$9, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(countryCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(countryCreateSuccess, (state, { payload }) => adapter$e.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(countryCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(countryUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(countryUpdateSuccess, (state, { payload }) => adapter$e.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(countryUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(countryRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(countryRemoveSuccess, (state, { payload }) => adapter$e.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(countryRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const countryReducer = (state, action) => reducer$f(state, action);

const selectCountry = createFeatureSelector(STORE.states.countryState);
const { selectIds: selectIds$e, selectEntities: selectEntities$e, selectAll: selectAll$e, selectTotal: selectTotal$e } = adapter$e.getSelectors();
const selectCountryIds = createSelector(selectCountry, selectIds$e);
const selectCountryEntities = createSelector(selectCountry, selectEntities$e);
const selectCountryAll = createSelector(selectCountry, selectAll$e);
const selectCountryTotal = createSelector(selectCountry, selectTotal$e);
const selectCountrySelectedId = createSelector(selectCountry, (state) => state.selectedId);
const selectCountrySelected = createSelector(selectCountryEntities, selectCountrySelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$f = createSelector(selectCountry, (state) => state.actionStatus);
const selectError$f = createSelector(selectCountry, (state) => state.error);

class CountryFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectCountryIds);
        this.entities$ = this.store.select(selectCountryEntities);
        this.all$ = this.store.select(selectCountryAll);
        this.total$ = this.store.select(selectCountryTotal);
        this.selectedId$ = this.store.select(selectCountrySelectedId);
        this.selected$ = this.store.select(selectCountrySelected);
        this.actionStatus$ = this.store.select(selectActionStatus$f);
        this.error$ = this.store.select(selectError$f);
        // Actions
        this.read = (payload) => this.store.dispatch(countryReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(countryReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$9({ payload }));
        this.create = (payload) => this.store.dispatch(countryCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(countryUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(countryRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CountryFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const currencyReadRequest = createAction('[CURRENCY] Read request', props());
const currencyReadRequestSuccess = createAction('[CURRENCY] Read success', props());
const currencyReadRequestFail = createAction('[CURRENCY] Read fail', props());
const currencyReadOneByIdRequest = createAction('[CURRENCY] Read one by id request', props());
const currencyReadOneByIdRequestSuccess = createAction('[CURRENCY] Read one by id success', props());
const currencyReadOneByIdRequestFail = createAction('[CURRENCY] Read one by id fail', props());
const setSelectedId$8 = createAction('[CURRENCY] Set selected id', props());
const currencyCreateRequest = createAction('[CURRENCY] currency create request', props());
const currencyCreateSuccess = createAction('[CURRENCY] Currency create success', props());
const currencyCreateFail = createAction('[CURRENCY] Currency create fail', props());
const currencyUpdateRequest = createAction('[CURRENCY] Currency update request', props());
const currencyUpdateSuccess = createAction('[CURRENCY] Currency update success', props());
const currencyUpdateFail = createAction('[CURRENCY] Currency update fail', props());
const currencyRemoveRequest = createAction('[CURRENCY] Currency remove request', props());
const currencyRemoveSuccess = createAction('[CURRENCY] Currency remove success', props());
const currencyRemoveFail = createAction('[CURRENCY] Currency remove fail', props());

class CurrencyEffects {
    constructor(router, actions$, appFacade, currencyService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.currencyService = currencyService;
        this.errorHandlingService = errorHandlingService;
        this.currencyReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyReadRequest), exhaustMap(({ payload }) => this.currencyService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.currency?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.master_data?.currency?.Read?.details?.items || [])?.map((item) => item?.payload);
                return currencyReadRequestSuccess({ payload });
            }), catchError((error) => of(currencyReadRequestFail({ error: error.message }))))));
        });
        this.currencyReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyReadOneByIdRequest), exhaustMap(({ payload }) => this.currencyService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.currency?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.currency?.Read?.details?.items?.pop()
                    ?.payload;
                return currencyReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(currencyReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.currencyCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyCreateRequest), switchMap(({ payload }) => this.currencyService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.currency?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.currency?.Mutate?.details?.items?.pop()
                    ?.payload;
                return currencyCreateSuccess({ payload });
            }), catchError((error) => of(currencyCreateFail({ error: error.message }))))));
        });
        this.currencyCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'currency created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.currencies.children.edit.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.currencyUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyUpdateRequest), switchMap(({ payload }) => this.currencyService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.currency?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.currency?.Mutate?.details?.items?.pop()
                    ?.payload;
                return currencyUpdateSuccess({ payload });
            }), catchError((error) => of(currencyUpdateFail({ error: error.message }))))));
        });
        this.currencyUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'currency updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.currencyRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.currencyService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.currency?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return currencyRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(currencyRemoveFail({ error: error.message }))));
            }));
        });
        this.currencyRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'currency deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(currencyReadRequestFail, currencyReadOneByIdRequestFail, currencyCreateFail, currencyUpdateFail, currencyRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: CurrencyService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: CurrencyService }, { type: ErrorHandlingService }] });

const adapter$d = createEntityAdapter();
const initialState$e = adapter$d.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$e = createReducer(initialState$e, on(currencyReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(currencyReadRequestSuccess, (state, { payload }) => adapter$d.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(currencyReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(currencyReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(currencyReadOneByIdRequestSuccess, (state, { payload }) => adapter$d.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(currencyReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$8, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(currencyCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(currencyCreateSuccess, (state, { payload }) => adapter$d.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(currencyCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(currencyUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(currencyUpdateSuccess, (state, { payload }) => adapter$d.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(currencyUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(currencyRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(currencyRemoveSuccess, (state, { payload }) => adapter$d.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(currencyRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const currencyReducer = (state, action) => reducer$e(state, action);

const selectCurrency = createFeatureSelector(STORE.states.currencyState);
const { selectIds: selectIds$d, selectEntities: selectEntities$d, selectAll: selectAll$d, selectTotal: selectTotal$d } = adapter$d.getSelectors();
const selectCurrencyIds = createSelector(selectCurrency, selectIds$d);
const selectCurrencyEntities = createSelector(selectCurrency, selectEntities$d);
const selectCurrencyAll = createSelector(selectCurrency, selectAll$d);
const selectCurrencyTotal = createSelector(selectCurrency, selectTotal$d);
const selectCurrencySelectedId = createSelector(selectCurrency, (state) => state.selectedId);
const selectCurrencySelected = createSelector(selectCurrencyEntities, selectCurrencySelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$e = createSelector(selectCurrency, (state) => state.actionStatus);
const selectError$e = createSelector(selectCurrency, (state) => state.error);

class CurrencyFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectCurrencyIds);
        this.entities$ = this.store.select(selectCurrencyEntities);
        this.all$ = this.store.select(selectCurrencyAll);
        this.total$ = this.store.select(selectCurrencyTotal);
        this.selectedId$ = this.store.select(selectCurrencySelectedId);
        this.selected$ = this.store.select(selectCurrencySelected);
        this.actionStatus$ = this.store.select(selectActionStatus$e);
        this.error$ = this.store.select(selectError$e);
        // Actions
        this.read = (payload) => this.store.dispatch(currencyReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(currencyReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$8({ payload }));
        this.create = (payload) => this.store.dispatch(currencyCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(currencyUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(currencyRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CurrencyFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class CustomerEffects {
    constructor(router, actions$, appFacade, customerService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.customerService = customerService;
        this.errorHandlingService = errorHandlingService;
        this.customerReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerReadRequest), exhaustMap(({ payload }) => this.customerService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.customer?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.master_data?.customer?.Read?.details?.items || [])?.map((item) => item?.payload);
                return customerReadRequestSuccess({ payload });
            }), catchError((error) => of(customerReadRequestFail({ error: error.message }))))));
        });
        this.customerReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerReadOneByIdRequest), exhaustMap(({ payload }) => this.customerService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.customer?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.customer?.Read?.details?.items?.pop()
                    ?.payload;
                return customerReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(customerReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.customerCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerCreateRequest), switchMap(({ payload }) => this.customerService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.customer?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.customer?.Mutate?.details?.items?.pop()
                    ?.payload;
                return customerCreateSuccess({ payload });
            }), catchError((error) => of(customerCreateFail({ error: error.message }))))));
        });
        this.customerCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'customer created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.currencies.children.edit.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.customerUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerUpdateRequest), switchMap(({ payload }) => this.customerService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.customer?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.customer?.Mutate?.details?.items?.pop()
                    ?.payload;
                return customerUpdateSuccess({ payload });
            }), catchError((error) => of(customerUpdateFail({ error: error.message }))))));
        });
        this.customerUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'customer updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.customerRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.customerService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.customer?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return customerRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(customerRemoveFail({ error: error.message }))));
            }));
        });
        this.customerRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'customer deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(customerReadRequestFail, customerReadOneByIdRequestFail, customerCreateFail, customerUpdateFail, customerRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: CustomerService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: CustomerService }, { type: ErrorHandlingService }] });

const adapter$c = createEntityAdapter();
const initialState$d = adapter$c.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$d = createReducer(initialState$d, on(customerReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(customerReadRequestSuccess, (state, { payload }) => adapter$c.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(customerReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(customerReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(customerReadOneByIdRequestSuccess, (state, { payload }) => adapter$c.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(customerReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$e, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(customerCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(customerCreateSuccess, (state, { payload }) => adapter$c.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(customerCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(customerUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(customerUpdateSuccess, (state, { payload }) => adapter$c.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(customerUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(customerRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(customerRemoveSuccess, (state, { payload }) => adapter$c.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(customerRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const customerReducer = (state, action) => reducer$d(state, action);

const selectCustomer = createFeatureSelector(STORE.states.customerState);
const { selectIds: selectIds$c, selectEntities: selectEntities$c, selectAll: selectAll$c, selectTotal: selectTotal$c } = adapter$c.getSelectors();
const selectCustomerIds = createSelector(selectCustomer, selectIds$c);
const selectCustomerEntities = createSelector(selectCustomer, selectEntities$c);
const selectCustomerAll = createSelector(selectCustomer, selectAll$c);
const selectCustomerTotal = createSelector(selectCustomer, selectTotal$c);
const selectCustomerSelectedId = createSelector(selectCustomer, (state) => state.selectedId);
const selectCustomerSelected = createSelector(selectCustomerEntities, selectCustomerSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$d = createSelector(selectCustomer, (state) => state.actionStatus);
const selectError$d = createSelector(selectCustomer, (state) => state.error);

class CustomerFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectCustomerIds);
        this.entities$ = this.store.select(selectCustomerEntities);
        this.all$ = this.store.select(selectCustomerAll);
        this.total$ = this.store.select(selectCustomerTotal);
        this.selectedId$ = this.store.select(selectCustomerSelectedId);
        this.selected$ = this.store.select(selectCustomerSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$d);
        this.error$ = this.store.select(selectError$d);
        // Actions
        this.read = (payload) => this.store.dispatch(customerReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(customerReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$e({ payload }));
        this.create = (payload) => this.store.dispatch(customerCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(customerUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(customerRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CustomerFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class IamEffects {
    constructor(router, actions$, appFacade, userService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.userService = userService;
        this.errorHandlingService = errorHandlingService;
        this.userReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userReadRequest), exhaustMap(() => this.userService.read({}).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.identity?.user?.Read?.details?.items || [])?.map((item) => this.userService.getUserFormatted(item?.payload));
                return userReadRequestSuccess({ payload });
            }), catchError((error) => of(userReadRequestFail({ error: error.message }))))));
        });
        this.userReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userReadOneByIdRequest), exhaustMap(({ payload }) => this.userService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const first = result?.data?.identity?.user?.Read?.details?.items?.pop()
                    ?.payload;
                const payload = this.userService.getUserFormatted(first);
                return userReadOneByIdRequestSuccess({ payload });
            }), catchError((error) => of(userReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.userCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userCreateRequest), switchMap(({ payload }) => {
                return this.userService
                    .mutate({
                    ...payload,
                })
                    .pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Mutate?.details
                        ?.operationStatus);
                }), map$1((result) => {
                    const user = result?.data?.identity?.user?.Mutate?.details?.items?.pop()
                        ?.payload;
                    if (!user) {
                        return userCreateFail({
                            error: 'an error occurred',
                        });
                    }
                    return userCreateSuccess({
                        payload: this.userService.getUserFormatted(user),
                    });
                }), catchError((error) => of(userCreateFail({ error: error.message }))));
            }));
        });
        this.userCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'user created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.iam.children.view.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.userUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userUpdateRequest), switchMap(({ payload }) => {
                return this.userService
                    .mutate({
                    ...payload,
                })
                    .pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Mutate?.details
                        ?.operationStatus);
                }), map$1((result) => {
                    const payload = result?.data?.identity?.user?.Mutate?.details?.items?.pop()
                        ?.payload;
                    return userUpdateSuccess({
                        payload: this.userService.getUserFormatted(payload),
                    });
                }), catchError((error) => of(userUpdateFail({ error: error.message }))));
            }));
        });
        this.userUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'user updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.userSetTempRoleAssociations$ = createEffect(() => {
            return this.actions$.pipe(ofType(userSetTempRoleAssociations));
        }, { dispatch: false });
        this.userChangePasswordRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userChangePasswordRequest), switchMap(({ payload }) => {
                return this.userService.mutate(payload).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Mutate?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return userChangePasswordSuccess();
                }), catchError((error) => of(userChangePasswordFail({ error: error.message }))));
            }));
        });
        this.userAddRoleAssociationRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userAddRoleAssociationRequest), switchMap(({ payload }) => {
                return this.userService.mutate(payload).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Mutate?.details
                        ?.operationStatus);
                }), map$1((result) => {
                    const payload = result?.data?.identity?.user?.Mutate?.details?.items?.pop()
                        ?.payload;
                    return userAddRoleAssociationSuccess({
                        payload: this.userService.getUserFormatted(payload),
                    });
                }), catchError((error) => of(userAddRoleAssociationFail({ error: error.message }))));
            }));
        });
        this.userAddRoleAssociationSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userAddRoleAssociationSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'user role modified',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.userChangePasswordSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userChangePasswordSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'password changed',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.userRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(userRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.userService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.identity?.user?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return userRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(userRemoveFail({ error: error.message }))));
            }));
        });
        this.userRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(userRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'user deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(userReadRequestFail, userReadOneByIdRequestFail, userCreateFail, userUpdateFail, userChangePasswordFail, userRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IamEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: UserService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IamEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IamEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: UserService }, { type: ErrorHandlingService }] });

const adapter$b = createEntityAdapter();
const initialState$c = adapter$b.getInitialState({
    selectedId: null,
    temp: {
        roleAssociations: [],
    },
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$c = createReducer(initialState$c, on(userReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(userReadRequestSuccess, (state, { payload }) => adapter$b.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(userReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(userReadOneByIdRequestSuccess, (state, { payload }) => adapter$b.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(userReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userSetSelectedId, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(userCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(userCreateSuccess, (state, { payload }) => adapter$b.addOne(payload, {
    ...state,
    temp: {
        ...state.temp,
        roleAssociations: [],
    },
    actionStatus: EActionStatus.Succeeded,
})), on(userCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(userUpdateSuccess, (state, { payload }) => adapter$b.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    temp: {
        ...state.temp,
        roleAssociations: [],
    },
    actionStatus: EActionStatus.Succeeded,
})), on(userUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userSetTempRoleAssociations, (state, { payload }) => ({
    ...state,
    temp: {
        ...state.temp,
        roleAssociations: payload,
    },
})), on(userAddRoleAssociationRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(userAddRoleAssociationSuccess, (state, { payload }) => adapter$b.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(userAddRoleAssociationFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userChangePasswordRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(userChangePasswordSuccess, (state) => ({
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(userChangePasswordFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(userRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(userRemoveSuccess, (state, { payload }) => adapter$b.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(userRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const iamReducer = (state, action) => reducer$c(state, action);

const selectUser = createFeatureSelector(STORE.states.iamState);
const { selectIds: selectIds$b, selectEntities: selectEntities$b, selectAll: selectAll$b, selectTotal: selectTotal$b } = adapter$b.getSelectors();
const selectUserIds = createSelector(selectUser, selectIds$b);
const selectUserEntities = createSelector(selectUser, selectEntities$b);
const selectUserAll = createSelector(selectUser, selectAll$b);
const selectUserTotal = createSelector(selectUser, selectTotal$b);
const selectUserSelectedId = createSelector(selectUser, (state) => state.selectedId);
const selectUserSelected = createSelector(selectUserEntities, selectUserSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectUserTemp = createSelector(selectUser, (state) => state.temp);
const selectUserTempRoleAssociations = createSelector(selectUserTemp, (temp) => temp.roleAssociations);
const selectActionStatus$c = createSelector(selectUser, (state) => state.actionStatus);
const selectError$c = createSelector(selectUser, (state) => state.error);

class IamFacade {
    constructor() {
        this.store = inject(Store);
        // Selectors
        this.ids$ = this.store.select(selectUserIds);
        this.entities$ = this.store.select(selectUserEntities);
        this.all$ = this.store.select(selectUserAll);
        this.total$ = this.store.select(selectUserTotal);
        this.selectedId$ = this.store.select(selectUserSelectedId);
        this.selected$ = this.store.select(selectUserSelected);
        this.temp$ = this.store.select(selectUserTemp);
        this.tempRoleAssociations$ = this.store.select(selectUserTempRoleAssociations);
        this.actionStatus$ = this.store.select(selectActionStatus$c);
        this.error$ = this.store.select(selectError$c);
        // Actions
        this.read = (payload) => this.store.dispatch(userReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(userReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(userSetSelectedId({ payload }));
        this.create = (payload) => this.store.dispatch(userCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(userUpdateRequest({ payload }));
        this.setTempRoleAssociations = (payload) => this.store.dispatch(userSetTempRoleAssociations({ payload }));
        this.changePassword = (payload) => this.store.dispatch(userChangePasswordRequest({ payload }));
        this.addRoleAssociation = (payload) => this.store.dispatch(userAddRoleAssociationRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(userRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IamFacade, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IamFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IamFacade, decorators: [{
            type: Injectable
        }] });

const localeReadRequest = createAction('[LOCALE] Read request', props());
const localeReadRequestSuccess = createAction('[LOCALE] Read success', props());
const localeReadRequestFail = createAction('[LOCALE] Read fail', props());

class LocaleEffects {
    constructor(actions$, appFacade, localeService) {
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.localeService = localeService;
        this.localeReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(localeReadRequest), switchMap(({ payload }) => this.localeService.read(payload).pipe(map$1((result) => {
                const payload = (result?.data?.master_data?.locale?.Read?.details?.items || [])?.map((item) => item?.payload);
                return localeReadRequestSuccess({ payload });
            }), catchError((error) => of(localeReadRequestFail({ error: error.message }))))));
        });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(localeReadRequestFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleEffects, deps: [{ token: i2.Actions }, { token: AppFacade }, { token: LocaleService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.Actions }, { type: AppFacade }, { type: LocaleService }] });

const adapter$a = createEntityAdapter();
const initialState$b = adapter$a.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$b = createReducer(initialState$b, on(localeReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(localeReadRequestSuccess, (state, { payload }) => adapter$a.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(localeReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const localeReducer = (state, action) => reducer$b(state, action);

const selectLocale = createFeatureSelector(STORE.states.localeState);
const { selectIds: selectIds$a, selectEntities: selectEntities$a, selectAll: selectAll$a, selectTotal: selectTotal$a } = adapter$a.getSelectors();
const selectLocaleIds = createSelector(selectLocale, selectIds$a);
const selectLocaleEntities = createSelector(selectLocale, selectEntities$a);
const selectLocalesAll = createSelector(selectLocale, selectAll$a);
const selectLocaleTotal = createSelector(selectLocale, selectTotal$a);
const selectError$b = createSelector(selectLocale, (state) => state.error);
const selectActionStatus$b = createSelector(selectLocale, (state) => state.actionStatus);

class LocaleFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectLocaleIds);
        this.entities$ = this.store.select(selectLocaleEntities);
        this.all$ = this.store.select(selectLocalesAll);
        this.total$ = this.store.select(selectLocaleTotal);
        this.actionStatus$ = this.store.select(selectActionStatus$b);
        this.error$ = this.store.select(selectError$b);
        // Actions
        this.read = (payload) => this.store.dispatch(localeReadRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: LocaleFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const organizationReadRequest = createAction('[ORGANIZATION] Read request', props());
const organizationReadRequestSuccess = createAction('[ORGANIZATION] Read success', props());
const organizationReadRequestFail = createAction('[ORGANIZATION] Read fail', props());
const organizationReadParentsRequest = createAction('[ORGANIZATION] Read parents request', props());
const organizationReadParentsRequestSuccess = createAction('[ORGANIZATION] Read parents success', props());
const organizationReadParentsRequestFail = createAction('[ORGANIZATION] Read parents fail', props());
const organizationReadOneByIdRequest = createAction('[ORGANIZATION] Read one by id request', props());
const organizationReadOneByIdRequestSuccess = createAction('[ORGANIZATION] Read one by id success', props());
const organizationReadOneByIdRequestFail = createAction('[ORGANIZATION] Read one by id fail', props());
const setSelectedId$7 = createAction('[ORGANIZATION] Set selected id', props());
const organizationCreateRequest = createAction('[ORGANIZATION] Organization create request', props());
const organizationCreateSuccess = createAction('[ORGANIZATION] Organization create success', props());
const organizationCreateFail = createAction('[ORGANIZATION] Organization create fail', props());
const organizationUpdateRequest = createAction('[ORGANIZATION] Organization update request', props());
const organizationUpdateSuccess = createAction('[ORGANIZATION] Organization update success', props());
const organizationUpdateFail = createAction('[ORGANIZATION] Organization update fail', props());
const organizationRemoveRequest = createAction('[ORGANIZATION] Organization remove request', props());
const organizationRemoveSuccess = createAction('[ORGANIZATION] Organization remove success', props());
const organizationRemoveFail = createAction('[ORGANIZATION] Organization remove fail', props());

const adapter$9 = createEntityAdapter();
const initialState$a = adapter$9.getInitialState({
    selectedId: null,
    selectedParentId: null,
    parentIds: [],
    parentEntities: {},
    selectedChildId: null,
    childIds: [],
    childEntities: {},
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$a = createReducer(initialState$a, on(organizationReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(organizationReadRequestSuccess, (state, { payload }) => adapter$9.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(organizationReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(organizationReadParentsRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(organizationReadParentsRequestSuccess, (state, { payload }) => {
    const parentIds = payload.map((o) => o.id);
    const parentEntities = payload.reduce((acc, o) => ({ ...acc, [o.id]: o }), {});
    return {
        ...state,
        parentIds,
        parentEntities,
        actionStatus: EActionStatus.Succeeded,
    };
}), on(organizationReadParentsRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(organizationReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(organizationReadOneByIdRequestSuccess, (state, { payload }) => adapter$9.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(organizationReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$7, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(organizationCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(organizationCreateSuccess, (state, { payload }) => adapter$9.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(organizationCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(organizationUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(organizationUpdateSuccess, (state, { payload }) => adapter$9.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(organizationUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(organizationRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(organizationRemoveSuccess, (state, { payload }) => adapter$9.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(organizationRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const organizationReducer = (state, action) => reducer$a(state, action);

const selectOrganization = createFeatureSelector(STORE.states.organizationState);
const { selectIds: selectIds$9, selectEntities: selectEntities$9, selectAll: selectAll$9, selectTotal: selectTotal$9 } = adapter$9.getSelectors();
const selectOrganizationIds = createSelector(selectOrganization, selectIds$9);
const selectOrganizationEntities = createSelector(selectOrganization, selectEntities$9);
const selectOrganizationAll = createSelector(selectOrganization, selectAll$9);
const selectOrganizationTotal = createSelector(selectOrganization, selectTotal$9);
const selectOrganizationSelectedId = createSelector(selectOrganization, (state) => state.selectedId);
const selectOrganizationSelected = createSelector(selectOrganizationEntities, selectOrganizationSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectOrganizationParentIds = createSelector(selectOrganization, (state) => state.parentIds);
const selectOrganizationParentEntities = createSelector(selectOrganization, (state) => state.parentEntities);
const selectOrganizationParentsAll = createSelector(selectOrganizationParentEntities, (entities) => Object.values(entities));
const selectOrganizationSelectedParentId = createSelector(selectOrganization, (state) => state.selectedParentId);
const selectOrganizationSelectedParent = createSelector(selectOrganizationParentEntities, selectOrganizationSelectedParentId, (entities, selectedParentId) => {
    return (selectedParentId && selectedParentId in entities
        ? entities[selectedParentId]
        : null);
});
const selectOrganizationChildIds = createSelector(selectOrganization, (state) => state.childIds);
const selectOrganizationChildEntities = createSelector(selectOrganization, (state) => state.childEntities);
const selectOrganizationChildsAll = createSelector(selectOrganizationChildEntities, (entities) => Object.values(entities));
const selectOrganizationSelectedChildId = createSelector(selectOrganization, (state) => state.selectedChildId);
const selectOrganizationSelectedChild = createSelector(selectOrganizationChildEntities, selectOrganizationSelectedChildId, (entities, selectedChildId) => {
    return (selectedChildId && selectedChildId in entities
        ? entities[selectedChildId]
        : null);
});
const selectActionStatus$a = createSelector(selectOrganization, (state) => state.actionStatus);
const selectError$a = createSelector(selectOrganization, (state) => state.error);

class OrganizationFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectOrganizationIds);
        this.entities$ = this.store.select(selectOrganizationEntities);
        this.all$ = this.store.select(selectOrganizationAll);
        this.total$ = this.store.select(selectOrganizationTotal);
        this.selectedId$ = this.store.select(selectOrganizationSelectedId);
        this.selected$ = this.store.select(selectOrganizationSelected);
        this.parentIds$ = this.store.select(selectOrganizationParentIds);
        this.parentEntities$ = this.store.select(selectOrganizationParentEntities);
        this.parentsAll$ = this.store.select(selectOrganizationParentsAll);
        this.selectedParentId$ = this.store.select(selectOrganizationSelectedParentId);
        this.selectedParent$ = this.store.select(selectOrganizationSelectedParent);
        this.childIds$ = this.store.select(selectOrganizationChildIds);
        this.childEntities$ = this.store.select(selectOrganizationChildEntities);
        this.childsAll$ = this.store.select(selectOrganizationChildsAll);
        this.actionStatus$ = this.store.select(selectActionStatus$a);
        this.error$ = this.store.select(selectError$a);
        // Actions
        this.read = (payload) => this.store.dispatch(organizationReadRequest({ payload }));
        this.readParents = (payload) => this.store.dispatch(organizationReadParentsRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(organizationReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$7({ payload }));
        this.create = (payload) => this.store.dispatch(organizationCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(organizationUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(organizationRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class OrganizationEffects {
    constructor(router, actions$, appFacade, organizationService, organizationFacade, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.organizationService = organizationService;
        this.organizationFacade = organizationFacade;
        this.errorHandlingService = errorHandlingService;
        this.organizationReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationReadRequest), exhaustMap(({ payload }) => this.organizationService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.organization?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const responseData = result?.data?.master_data?.organization?.Read?.details?.items ||
                    [];
                const payload = responseData.map((item) => ({
                    ...item?.payload,
                    isLeaf: !responseData.some((child) => child.payload?.parentId === item.payload?.id),
                }));
                return organizationReadRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(organizationReadRequestFail({
                error: error.message,
            }))))));
        });
        this.organizationReadParentsRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationReadParentsRequest), exhaustMap(({ payload }) => {
                const payloadWithFilters = {
                    ...payload,
                    filters: [
                        {
                            filters: [
                                ...(payload.filters || []),
                                {
                                    field: 'parent_id',
                                    value: '',
                                    type: IoRestorecommerceResourcebaseFilterValueType.String,
                                    operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                                },
                            ],
                        },
                    ],
                };
                return this.organizationService.read(payloadWithFilters).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.organization?.Read?.details
                        ?.operationStatus);
                }), map$1((result) => {
                    const responseData = result?.data?.master_data?.organization?.Read?.details?.items ||
                        [];
                    const payload = responseData.map((item) => ({
                        ...item?.payload,
                        isLeaf: !responseData.some((child) => child.payload?.parentId === item.payload?.id),
                    }));
                    return organizationReadRequestSuccess({
                        payload,
                    });
                }), catchError((error) => of(organizationReadParentsRequestFail({
                    error: error.message,
                }))));
            }));
        });
        this.organizationReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationReadOneByIdRequest), exhaustMap(({ payload }) => this.organizationService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.organization?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.organization?.Read?.details?.items?.pop()
                    ?.payload;
                return organizationReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(organizationReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.organizationCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationCreateRequest), switchMap(({ payload }) => this.organizationService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.organization?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.organization?.Mutate?.details?.items?.pop()
                    ?.payload;
                return organizationCreateSuccess({ payload });
            }), catchError((error) => of(organizationCreateFail({
                error: error.message,
            }))))));
        });
        this.organizationCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'organization created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.organizations.children.edit.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.organizationUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationUpdateRequest), switchMap(({ payload }) => this.organizationService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.organization?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.organization?.Mutate?.details?.items?.pop()
                    ?.payload;
                return organizationUpdateSuccess({ payload });
            }), catchError((error) => of(organizationUpdateFail({
                error: error.message,
            }))))));
        });
        this.organizationUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'organization updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.organizationRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.organizationService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.organization?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return organizationRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(organizationRemoveFail({
                    error: error.message,
                }))));
            }));
        });
        this.organizationRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'organization deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(organizationReadRequestFail, organizationReadParentsRequestFail, organizationReadOneByIdRequestFail, organizationCreateFail, organizationUpdateFail, organizationRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: OrganizationService }, { token: OrganizationFacade }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrganizationEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: OrganizationService }, { type: OrganizationFacade }, { type: ErrorHandlingService }] });

const timezoneReadRequest = createAction('[TIMEZONE] Read request', props());
const timezoneReadRequestSuccess = createAction('[TIMEZONE] Read success', props());
const timezoneReadRequestFail = createAction('[TIMEZONE] Read fail', props());

class TimezoneEffects {
    constructor(actions$, appFacade, timezoneService) {
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.timezoneService = timezoneService;
        this.timezoneReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(timezoneReadRequest), switchMap(({ payload }) => this.timezoneService.read(payload).pipe(map$1((result) => {
                const payload = (result?.data?.master_data?.timezone?.Read?.details?.items || [])?.map((item) => item?.payload);
                return timezoneReadRequestSuccess({ payload });
            }), catchError((error) => of(timezoneReadRequestFail({ error: error.message }))))));
        });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(timezoneReadRequestFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneEffects, deps: [{ token: i2.Actions }, { token: AppFacade }, { token: TimezoneService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.Actions }, { type: AppFacade }, { type: TimezoneService }] });

const adapter$8 = createEntityAdapter();
const initialState$9 = adapter$8.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$9 = createReducer(initialState$9, on(timezoneReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(timezoneReadRequestSuccess, (state, { payload }) => adapter$8.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(timezoneReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const timezoneReducer = (state, action) => reducer$9(state, action);

const selectTimezone = createFeatureSelector(STORE.states.timezoneState);
const { selectIds: selectIds$8, selectEntities: selectEntities$8, selectAll: selectAll$8, selectTotal: selectTotal$8 } = adapter$8.getSelectors();
const selectTimezoneIds = createSelector(selectTimezone, selectIds$8);
const selectTimezoneEntities = createSelector(selectTimezone, selectEntities$8);
const selectTimezoneAll = createSelector(selectTimezone, selectAll$8);
const selectTimezoneTotal = createSelector(selectTimezone, selectTotal$8);
const selectError$9 = createSelector(selectTimezone, (state) => state.error);
const selectActionStatus$9 = createSelector(selectTimezone, (state) => state.actionStatus);

class TimezoneFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectTimezoneIds);
        this.entities$ = this.store.select(selectTimezoneEntities);
        this.all$ = this.store.select(selectTimezoneAll);
        this.total$ = this.store.select(selectTimezoneTotal);
        this.actionStatus$ = this.store.select(selectActionStatus$9);
        this.error$ = this.store.select(selectError$9);
        // Actions
        this.read = (payload) => this.store.dispatch(timezoneReadRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TimezoneFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const taxReadRequest = createAction('[TAX] Read request', props());
const taxReadRequestSuccess = createAction('[TAX] Read success', props());
const taxReadRequestFail = createAction('[TAX] Read fail', props());
const taxReadOneByIdRequest = createAction('[TAX] Read one by id request', props());
const taxReadOneByIdRequestSuccess = createAction('[TAX] Read one by id success', props());
const taxReadOneByIdRequestFail = createAction('[TAX] Read one by id fail', props());
const setSelectedId$6 = createAction('[TAX] Set selected id', props());
const taxCreateRequest = createAction('[TAX] tax create request', props());
const taxCreateSuccess = createAction('[TAX] tax create success', props());
const taxCreateFail = createAction('[TAX] tax create fail', props());
const taxUpdateRequest = createAction('[TAX] tax update request', props());
const taxUpdateSuccess = createAction('[TAX] tax update success', props());
const taxUpdateFail = createAction('[TAX] tax update fail', props());
const taxRemoveRequest = createAction('[TAX] tax remove request', props());
const taxRemoveSuccess = createAction('[TAX] tax remove success', props());
const taxRemoveFail = createAction('[TAX] tax remove fail', props());

class TaxEffects {
    constructor(router, actions$, appFacade, taxService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.taxService = taxService;
        this.errorHandlingService = errorHandlingService;
        this.taxReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxReadRequest), exhaustMap(({ payload }) => this.taxService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.tax?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.master_data?.tax?.Read?.details?.items || [])?.map((item) => item?.payload);
                return taxReadRequestSuccess({ payload });
            }), catchError((error) => of(taxReadRequestFail({ error: error.message }))))));
        });
        this.taxReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxReadOneByIdRequest), exhaustMap(({ payload }) => this.taxService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.tax?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.tax?.Read?.details?.items?.pop()
                    ?.payload;
                return taxReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(taxReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.taxCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxCreateRequest), switchMap(({ payload }) => this.taxService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.tax?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.tax?.Mutate?.details?.items?.pop()
                    ?.payload;
                return taxCreateSuccess({ payload });
            }), catchError((error) => of(taxCreateFail({ error: error.message }))))));
        });
        this.taxCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'tax created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.taxes.children.edit.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.taxUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxUpdateRequest), switchMap(({ payload }) => this.taxService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.tax?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.tax?.Mutate?.details?.items?.pop()
                    ?.payload;
                return taxUpdateSuccess({ payload });
            }), catchError((error) => of(taxUpdateFail({ error: error.message }))))));
        });
        this.taxUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'tax updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.taxRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.taxService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.tax?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return taxRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(taxRemoveFail({ error: error.message }))));
            }));
        });
        this.taxRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'tax deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(taxReadRequestFail, taxReadOneByIdRequestFail, taxCreateFail, taxUpdateFail, taxRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: TaxService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: TaxService }, { type: ErrorHandlingService }] });

const adapter$7 = createEntityAdapter();
const initialState$8 = adapter$7.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$8 = createReducer(initialState$8, on(taxReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(taxReadRequestSuccess, (state, { payload }) => adapter$7.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(taxReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(taxReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(taxReadOneByIdRequestSuccess, (state, { payload }) => adapter$7.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(taxReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$6, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(taxCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(taxCreateSuccess, (state, { payload }) => adapter$7.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(taxCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(taxUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(taxUpdateSuccess, (state, { payload }) => adapter$7.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(taxUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(taxRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(taxRemoveSuccess, (state, { payload }) => adapter$7.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(taxRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const taxReducer = (state, action) => reducer$8(state, action);

const selectTax = createFeatureSelector(STORE.states.taxState);
const { selectIds: selectIds$7, selectEntities: selectEntities$7, selectAll: selectAll$7, selectTotal: selectTotal$7 } = adapter$7.getSelectors();
const selectTaxIds = createSelector(selectTax, selectIds$7);
const selectTaxEntities = createSelector(selectTax, selectEntities$7);
const selectTaxAll = createSelector(selectTax, selectAll$7);
const selectTaxTotal = createSelector(selectTax, selectTotal$7);
const selectTaxSelectedId = createSelector(selectTax, (state) => state.selectedId);
const selectTaxSelected = createSelector(selectTaxEntities, selectTaxSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$8 = createSelector(selectTax, (state) => state.actionStatus);
const selectError$8 = createSelector(selectTax, (state) => state.error);

class TaxFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectTaxIds);
        this.entities$ = this.store.select(selectTaxEntities);
        this.all$ = this.store.select(selectTaxAll);
        this.total$ = this.store.select(selectTaxTotal);
        this.selectedId$ = this.store.select(selectTaxSelectedId);
        this.selected$ = this.store.select(selectTaxSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$8);
        this.error$ = this.store.select(selectError$8);
        // Actions
        this.read = (payload) => this.store.dispatch(taxReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(taxReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$6({ payload }));
        this.create = (payload) => this.store.dispatch(taxCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(taxUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(taxRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: TaxFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class ShopEffects {
    constructor(router, actions$, appFacade, shopService, organizationContextFacade, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.shopService = shopService;
        this.organizationContextFacade = organizationContextFacade;
        this.errorHandlingService = errorHandlingService;
        this.shopReadRequest$ = createEffect(() => {
            return this.actions$.pipe(withLatestOrganizationData(this.organizationContextFacade, shopReadRequest.type), exhaustMap(([_, organization]) => this.shopService
                .read({
                // ...productActionPayload,
                filters: [
                    {
                        filters: [
                            {
                                field: 'meta.owners[*].attributes[**].value',
                                operation: IoRestorecommerceResourcebaseFilterOperation.In,
                                value: organization,
                            },
                        ],
                    },
                ],
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.shop?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.master_data?.shop?.Read?.details?.items || [])?.map((item) => item?.payload);
                return shopReadRequestSuccess({ payload });
            }), catchError((error) => of(shopReadRequestFail({ error: error.message }))))));
        });
        this.shopReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopReadOneByIdRequest), exhaustMap(({ payload }) => this.shopService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.shop?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.shop?.Read?.details?.items?.pop()
                    ?.payload;
                return shopReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(shopReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.shopCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopCreateRequest), switchMap(({ payload }) => this.shopService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.shop?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.shop?.Mutate?.details?.items?.pop()
                    ?.payload;
                return shopCreateSuccess({ payload });
            }), catchError((error) => of(shopCreateFail({
                error: error.message,
            }))))));
        });
        this.shopCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'shop created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.management.children.shops.children.edit.getLink({ id: payload.id }));
            }));
        }, { dispatch: false });
        this.shopUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopUpdateRequest), switchMap(({ payload }) => this.shopService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.shop?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.master_data?.shop?.Mutate?.details?.items?.pop()
                    ?.payload;
                return shopUpdateSuccess({ payload });
            }), catchError((error) => of(shopUpdateFail({
                error: error.message,
            }))))));
        });
        this.shopUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'shop updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.shopRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.shopService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.master_data?.shop?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return shopRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(shopRemoveFail({
                    error: error.message,
                }))));
            }));
        });
        this.shopRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'shop deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(shopReadRequestFail, shopReadOneByIdRequestFail, shopCreateFail, shopUpdateFail, shopRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: ShopService }, { token: OrganizationContextFacade }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: ShopService }, { type: OrganizationContextFacade }, { type: ErrorHandlingService }] });

const adapter$6 = createEntityAdapter();
const initialState$7 = adapter$6.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$7 = createReducer(initialState$7, on(shopReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(shopReadRequestSuccess, (state, { payload }) => adapter$6.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(shopReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(shopReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(shopReadOneByIdRequestSuccess, (state, { payload }) => adapter$6.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(shopReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$d, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(shopCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(shopCreateSuccess, (state, { payload }) => adapter$6.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(shopCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(shopUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(shopUpdateSuccess, (state, { payload }) => adapter$6.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(shopUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(shopRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(shopRemoveSuccess, (state, { payload }) => adapter$6.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(shopRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const shopReducer = (state, action) => reducer$7(state, action);

const selectShop = createFeatureSelector(STORE.states.shopState);
const { selectIds: selectIds$6, selectEntities: selectEntities$6, selectAll: selectAll$6, selectTotal: selectTotal$6 } = adapter$6.getSelectors();
const selectShopIds = createSelector(selectShop, selectIds$6);
const selectShopEntities = createSelector(selectShop, selectEntities$6);
const selectShopAll = createSelector(selectShop, selectAll$6);
const selectShopTotal = createSelector(selectShop, selectTotal$6);
const selectShopSelectedId = createSelector(selectShop, (state) => state.selectedId);
const selectShopSelected = createSelector(selectShopEntities, selectShopSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$7 = createSelector(selectShop, (state) => state.actionStatus);
const selectError$7 = createSelector(selectShop, (state) => state.error);

class ShopFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectShopIds);
        this.entities$ = this.store.select(selectShopEntities);
        this.all$ = this.store.select(selectShopAll);
        this.total$ = this.store.select(selectShopTotal);
        this.selectedId$ = this.store.select(selectShopSelectedId);
        this.selected$ = this.store.select(selectShopSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$7);
        this.error$ = this.store.select(selectError$7);
        // Actions
        this.read = (payload) => this.store.dispatch(shopReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(shopReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$d({ payload }));
        this.create = (payload) => this.store.dispatch(shopCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(shopUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(shopRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ShopFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const manufacturerReadRequest = createAction('[MANUFACTURER] Read request', props());
const manufacturerReadRequestSuccess = createAction('[MANUFACTURER] Read success', props());
const manufacturerReadRequestFail = createAction('[MANUFACTURER] Read fail', props());
const manufacturerReadOneByIdRequest = createAction('[MANUFACTURER] Read one by id request', props());
const manufacturerReadOneByIdRequestSuccess = createAction('[MANUFACTURER] Read one by id success', props());
const manufacturerReadOneByIdRequestFail = createAction('[MANUFACTURER] Read one by id fail', props());
const setSelectedId$5 = createAction('[MANUFACTURER] Set selected id', props());
const manufacturerCreateRequest = createAction('[MANUFACTURER] Manufacturer create request', props());
const manufacturerCreateSuccess = createAction('[MANUFACTURER] Manufacturer create success', props());
const manufacturerCreateFail = createAction('[MANUFACTURER] Manufacturer create fail', props());
const manufacturerUpdateRequest = createAction('[MANUFACTURER] Manufacturer update request', props());
const manufacturerUpdateSuccess = createAction('[MANUFACTURER] Manufacturer update success', props());
const manufacturerUpdateFail = createAction('[MANUFACTURER] Manufacturer update fail', props());
const manufacturerRemoveRequest = createAction('[MANUFACTURER] Manufacturer remove request', props());
const manufacturerRemoveSuccess = createAction('[MANUFACTURER] Manufacturer remove success', props());
const manufacturerRemoveFail = createAction('[MANUFACTURER] Manufacturer remove fail', props());

class ManufacturerEffects {
    constructor(router, actions$, appFacade, manufacturerService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.manufacturerService = manufacturerService;
        this.errorHandlingService = errorHandlingService;
        this.manufacturerReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerReadRequest), switchMap(({ payload }) => this.manufacturerService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.manufacturer?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.catalog?.manufacturer?.Read?.details?.items || [])?.map((item) => item?.payload);
                return manufacturerReadRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(manufacturerReadRequestFail({
                error: error.message,
            }))))));
        });
        this.manufacturerCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerCreateRequest), switchMap(({ payload }) => this.manufacturerService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.manufacturer?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.manufacturer?.Mutate?.details?.items?.pop()
                    ?.payload;
                return manufacturerCreateSuccess({ payload });
            }), catchError((error) => of(manufacturerCreateFail({
                error: error.message,
            }))))));
        });
        this.manufacturerUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerUpdateRequest), switchMap(({ payload }) => this.manufacturerService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.manufacturer?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.manufacturer?.Mutate?.details?.items?.pop()
                    ?.payload;
                return manufacturerUpdateSuccess({ payload });
            }), catchError((error) => of(manufacturerUpdateFail({
                error: error.message,
            }))))));
        });
        this.manufacturerCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'manufacturer created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.products.children.manufacturers.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.manufacturerUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'manufacturer updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.manufacturerRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.manufacturerService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.manufacturer?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return manufacturerRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(manufacturerRemoveFail({
                    error: error.message,
                }))));
            }));
        });
        this.manufacturerRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'manufacturer deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(manufacturerReadRequestFail, manufacturerCreateFail, manufacturerUpdateFail, manufacturerRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: ManufacturerService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: ManufacturerService }, { type: ErrorHandlingService }] });

const adapter$5 = createEntityAdapter();
const initialState$6 = adapter$5.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$6 = createReducer(initialState$6, on(manufacturerReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(manufacturerReadRequestSuccess, (state, { payload }) => adapter$5.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(manufacturerReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(manufacturerReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(manufacturerReadOneByIdRequestSuccess, (state, { payload }) => adapter$5.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(manufacturerReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$5, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(manufacturerCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(manufacturerCreateSuccess, (state, { payload }) => adapter$5.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(manufacturerCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(manufacturerUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(manufacturerUpdateSuccess, (state, { payload }) => adapter$5.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(manufacturerUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(manufacturerRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(manufacturerRemoveSuccess, (state, { payload }) => adapter$5.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(manufacturerRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const manufacturerReducer = (state, action) => reducer$6(state, action);

const selectManafacturer = createFeatureSelector(STORE.states.manaufacturer);
const { selectIds: selectIds$5, selectEntities: selectEntities$5, selectAll: selectAll$5, selectTotal: selectTotal$5 } = adapter$5.getSelectors();
const selectManufacturerIds = createSelector(selectManafacturer, selectIds$5);
const selectManufacturerEntities = createSelector(selectManafacturer, selectEntities$5);
const selectManufacturerAll = createSelector(selectManafacturer, selectAll$5);
const selectManufacturerTotal = createSelector(selectManafacturer, selectTotal$5);
const selectManufacturerSelectedId = createSelector(selectManafacturer, (state) => state.selectedId);
const selectManufacturerSelected = createSelector(selectManufacturerEntities, selectManufacturerSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$6 = createSelector(selectManafacturer, (state) => state.actionStatus);
const selectError$6 = createSelector(selectManafacturer, (state) => state.error);

class ManufacturerFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectManufacturerIds);
        this.entities$ = this.store.select(selectManufacturerEntities);
        this.all$ = this.store.select(selectManufacturerAll);
        this.total$ = this.store.select(selectManufacturerTotal);
        this.selectedId$ = this.store.select(selectManufacturerSelectedId);
        this.selected$ = this.store.select(selectManufacturerSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$6);
        this.error$ = this.store.select(selectError$6);
        // Actions
        this.read = (payload) => this.store.dispatch(manufacturerReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(manufacturerReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$5({ payload }));
        this.create = (payload) => this.store.dispatch(manufacturerCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(manufacturerUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(manufacturerRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufacturerFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const objectUploadRequest = createAction('[Upload] Upload request', props());
const objectUploadSuccess = createAction('[Upload] Upload success', props());
const objectUploadFail = createAction('[Upload] Upload fail', props());
const objectUploadCompleted = createAction('[Upload] Upload completed');

const initialState$5 = {
    upload: null,
    actionStatus: EActionStatus.INIT,
    error: null,
};
const reducer$5 = createReducer(initialState$5, on(objectUploadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Loading,
})), on(objectUploadSuccess, (state, { payload }) => {
    return {
        ...state,
        error: null,
        upload: payload,
        actionStatus: EActionStatus.Done,
    };
}), on(objectUploadFail, (state, { error }) => {
    return {
        ...state,
        upload: null,
        actionStatus: EActionStatus.Failed,
        error,
    };
}), on(objectUploadCompleted, () => {
    return initialState$5;
}));
const objectUploadReducer = (state, action) => reducer$5(state, action);

const selectObjectUpload = createFeatureSelector(STORE.states.objectUploadState);
const selectUploadedObject = createSelector(selectObjectUpload, (state) => state.upload);
const selectError$5 = createSelector(selectObjectUpload, (state) => state.error);
const selectActionStatus$5 = createSelector(selectObjectUpload, (state) => state.actionStatus);

class ObjectUploadFacade {
    constructor(store) {
        this.store = store;
        this.uploadedObject$ = this.store.select(selectUploadedObject);
        this.actionStatus$ = this.store.select(selectActionStatus$5);
        this.error$ = this.store.select(selectError$5);
        // Actions
        this.upload = (payload) => this.store.dispatch(objectUploadRequest({ payload }));
        this.uploadCompleted = () => this.store.dispatch(objectUploadCompleted());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class ObjectUploadEffects {
    constructor(actions$, authnFacade, organizationContext, objectUploadService) {
        this.actions$ = actions$;
        this.authnFacade = authnFacade;
        this.organizationContext = organizationContext;
        this.objectUploadService = objectUploadService;
        this.objectUploadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(objectUploadRequest), concatLatestFrom(() => [
                this.authnFacade.token$,
                this.organizationContext.selectedId$,
            ]), exhaustMap(([{ payload }, token, organizationContextId]) => {
                const meta = {
                    owners: [
                        {
                            id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
                            value: 'urn:restorecommerce:acs:model:organization.Organization',
                            attributes: [
                                {
                                    id: 'urn:restorecommerce:acs:names:ownerInstance',
                                    value: organizationContextId,
                                    attributes: [],
                                },
                            ],
                        },
                    ],
                };
                return this.objectUploadService
                    .uploadFile(payload, APP.objectUpload.storageURL, APP.objectUpload.bucketName, `${APP.objectUpload.keyPrefix}/${payload.name}`, meta, token)
                    .pipe(map$1((result) => {
                    const payload = result?.data?.ostorage?.object?.Put?.details
                        ?.response?.payload;
                    return objectUploadSuccess({
                        payload,
                    });
                }), catchError((error) => of(objectUploadFail({
                    error: error.message,
                }))));
            }));
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadEffects, deps: [{ token: i2.Actions }, { token: AuthnFacade }, { token: OrganizationContextFacade }, { token: ObjectUploadService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ObjectUploadEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.Actions }, { type: AuthnFacade }, { type: OrganizationContextFacade }, { type: ObjectUploadService }] });

const orderReadRequest = createAction('[ORDER] Read request', props());
const orderReadRequestSuccess = createAction('[ORDER] Read success', props());
const orderReadRequestFail = createAction('[ORDER] Read fail', props());
const orderReadOneByIdRequest = createAction('[ORDER] Read one by id request', props());
const orderReadOneByIdRequestSuccess = createAction('[ORDER] Read one by id success', props());
const orderReadOneByIdRequestFail = createAction('[ORDER] Read one by id fail', props());
const setSelectedId$4 = createAction('[ORDER] Set selected id', props());
const orderCreateRequest = createAction('[ORDER] Order create request', props());
const orderCreateSuccess = createAction('[ORDER] Order create success', props());
const orderCreateFail = createAction('[ORDER] Order create fail', props());
const orderUpdateRequest = createAction('[ORDER] Order update request', props());
const orderUpdateSuccess = createAction('[ORDER] Order update success', props());
const orderUpdateFail = createAction('[ORDER] Order update fail', props());
const orderRemoveRequest = createAction('[ORDER] Order remove request', props());
const orderRemoveSuccess = createAction('[ORDER] Order remove success', props());
const orderRemoveFail = createAction('[ORDER] Order remove fail', props());
const orderCreateInvoiceRequest = createAction('[ORDER] Create an invoice request', props());
const orderCreateInvoiceSuccess = createAction('[ORDER] Create an invoice success', props());
const orderCreateInvoiceFail = createAction('[ORDER] Create an invoice fail', props());
const createFulfilment = createAction('[ORDER] Create fulfilment', props());
const orderChangeStatusRequest = createAction('[ORDER] Change status request', props());
const orderChangeStatusSuccess = createAction('[ORDER] Change status success', props());
const orderChangeStatusFail = createAction('[ORDER] Change status fail', props());

const adapter$4 = createEntityAdapter();
const initialState$4 = adapter$4.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$4 = createReducer(initialState$4, on(orderReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(orderReadRequestSuccess, (state, { payload }) => adapter$4.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(orderReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(orderReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(orderReadOneByIdRequestSuccess, (state, { payload }) => adapter$4.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(orderReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$4, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(orderCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(orderCreateSuccess, (state, { payload }) => adapter$4.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(orderCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(orderUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(orderUpdateSuccess, (state, { payload }) => adapter$4.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(orderUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(orderRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(orderRemoveSuccess, (state, { payload }) => adapter$4.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(orderRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const orderReducer = (state, action) => reducer$4(state, action);

const selectOrder = createFeatureSelector(STORE.states.orderState);
const { selectIds: selectIds$4, selectEntities: selectEntities$4, selectAll: selectAll$4, selectTotal: selectTotal$4 } = adapter$4.getSelectors();
const selectOrderIds = createSelector(selectOrder, selectIds$4);
const selectOrderEntities = createSelector(selectOrder, selectEntities$4);
const selectOrderAll = createSelector(selectOrder, selectAll$4);
const selectOrderTotal = createSelector(selectOrder, selectTotal$4);
const selectOrderSelectedId = createSelector(selectOrder, (state) => state.selectedId);
const selectOrderSelected = createSelector(selectOrderEntities, selectOrderSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$4 = createSelector(selectOrder, (state) => state.actionStatus);
const selectError$4 = createSelector(selectOrder, (state) => state.error);

class OrderFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectOrderIds);
        this.entities$ = this.store.select(selectOrderEntities);
        this.all$ = this.store.select(selectOrderAll);
        this.total$ = this.store.select(selectOrderTotal);
        this.selectedId$ = this.store.select(selectOrderSelectedId);
        this.selected$ = this.store.select(selectOrderSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$4);
        this.error$ = this.store.select(selectError$4);
        // Actions
        this.read = (payload) => this.store.dispatch(orderReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(orderReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$4({ payload }));
        this.create = (payload) => this.store.dispatch(orderCreateRequest({ payload }));
        this.update = (payload) => {
            this.store.dispatch(orderUpdateRequest({ payload }));
        };
        this.remove = (payload) => this.store.dispatch(orderRemoveRequest({ payload }));
        this.createOrderInvoice = (payload) => this.store.dispatch(orderCreateInvoiceRequest({
            payload,
        }));
        this.createFulfilment = (payload) => this.store.dispatch(createFulfilment({
            payload,
        }));
        this.changeStatus = (order) => {
            this.store.dispatch(orderChangeStatusRequest({
                payload: {
                    items: [
                        {
                            id: order.id,
                            orderState: order.orderState,
                        },
                    ],
                    mode: ModeType.Update,
                },
            }));
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

class OrderEffects {
    constructor(router, actions$, appFacade, organizationContextFacade, orderService, orderFacade, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.organizationContextFacade = organizationContextFacade;
        this.orderService = orderService;
        this.orderFacade = orderFacade;
        this.errorHandlingService = errorHandlingService;
        this.orderReadRequest$ = createEffect(() => {
            return this.actions$.pipe(withLatestOrganizationData(this.organizationContextFacade, orderReadRequest.type), exhaustMap(([_action, organization]) => {
                return this.orderService
                    .read({
                    // Sort object from the product payload or the default goes here!
                    // ...productActionPayload,
                    filters: organization
                        ? [
                            {
                                filters: [
                                    {
                                        field: 'meta.owners[*].attributes[**].value',
                                        operation: IoRestorecommerceResourcebaseFilterOperation.In,
                                        value: organization,
                                    },
                                ],
                            },
                        ]
                        : [],
                })
                    .pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.ordering?.order?.Read?.details
                        ?.operationStatus);
                }), map$1((result) => {
                    const payload = (result?.data?.ordering?.order?.Read?.details?.items || [])?.map((item) => item?.payload);
                    return orderReadRequestSuccess({ payload });
                }), catchError((error) => of(orderReadRequestFail({ error: error.message }))));
            }));
        });
        this.orderReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderReadOneByIdRequest), exhaustMap(({ payload }) => this.orderService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.ordering?.order?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.ordering?.order?.Read?.details?.items?.pop()
                    ?.payload;
                return orderReadOneByIdRequestSuccess({ payload });
            }), catchError((error) => of(orderReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.orderCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderCreateRequest), switchMap(({ payload }) => this.orderService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.ordering?.order?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.ordering?.order?.Mutate?.details?.items?.pop()
                    ?.payload;
                return orderCreateSuccess({ payload });
            }), catchError((error) => of(orderCreateFail({ error: error.message }))))));
        });
        this.orderCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'order created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.orders.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.orderUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderUpdateRequest), switchMap(({ payload }) => this.orderService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.ordering?.order?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.ordering?.order?.Mutate?.details?.items?.pop()
                    ?.payload;
                return orderUpdateSuccess({ payload });
            }), catchError((error) => of(orderUpdateFail({ error: error.message }))))));
        });
        this.orderUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'order updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.orderStatusChangeRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderChangeStatusRequest), switchMap(({ payload }) => this.orderService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.ordering?.order?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.ordering?.order?.Mutate?.details?.items?.pop()
                    ?.payload;
                return orderChangeStatusSuccess({ payload });
            }), catchError((error) => of(orderUpdateFail({ error: error.message }))))));
        });
        this.orderStatusChangeSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderChangeStatusSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'order status updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.orderRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.orderService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.ordering?.order?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return orderRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(orderRemoveFail({ error: error.message }))));
            }));
        });
        this.orderRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'order deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.orderCreateInvoiceRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderCreateInvoiceRequest), switchMap(({ payload }) => this.orderService.createOrderInvoice(payload).pipe(map$1((result) => {
                const payload = (result.data?.ordering.order.CreateInvoice?.details?.items || []).map((item) => item?.payload);
                return orderCreateInvoiceSuccess({
                    payload: JSON.stringify(payload),
                });
            }), catchError((error) => of(orderCreateInvoiceFail({ error: error.message }))))));
        });
        this.createFulfilmentForSelectedOrder$ = createEffect(() => {
            return this.actions$.pipe(ofType(createFulfilment), concatLatestFrom(() => this.orderFacade.selected$), exhaustMap(([, selectedOrder]) => {
                if (!selectedOrder) {
                    return throwError(() => new Error('No selected Order'));
                }
                return this.orderService
                    .createFulfilment({
                    id: selectedOrder.id,
                    senderAddress: selectedOrder.shippingAddress,
                })
                    .pipe(map$1((response) => {
                    const fulfilmentItems = response.data?.ordering.order.CreateFulfillment?.details?.items;
                    // TODO Returns a dummy for now.
                    // But will be used in future to create a fulfilment when
                    // An order has not fulfilment created for it.
                    return { type: 'DUMMY', payload: fulfilmentItems };
                }));
            }));
        });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(orderReadRequestFail, orderReadOneByIdRequestFail, orderCreateFail, orderUpdateFail, orderRemoveFail, orderCreateInvoiceFail, orderChangeStatusFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: OrganizationContextFacade }, { token: OrderService }, { token: OrderFacade }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: OrganizationContextFacade }, { type: OrderService }, { type: OrderFacade }, { type: ErrorHandlingService }] });

const productReadRequest = createAction('[PRODUCT] Read request', props());
const productReadRequestSuccess = createAction('[PRODUCT] Read success', props());
const productReadRequestFail = createAction('[PRODUCT] Read fail', props());
const productReadOneByIdRequest = createAction('[PRODUCT] Read one by id request', props());
const productReadOneByIdRequestSuccess = createAction('[PRODUCT] Read one by id success', props());
const productReadOneByIdRequestFail = createAction('[PRODUCT] Read one by id fail', props());
const setSelectedId$3 = createAction('[PRODUCT] Set selected id', props());
const productCreateRequest = createAction('[PRODUCT] Product create request', props());
const productCreateSuccess = createAction('[PRODUCT] Product create success', props());
const productCreateFail = createAction('[PRODUCT] Product create fail', props());
const productUpdateRequest = createAction('[PRODUCT] Product update request', props());
const productUpdateSuccess = createAction('[PRODUCT] Product update success', props());
const productUpdateFail = createAction('[PRODUCT] Product update fail', props());
const productRemoveRequest = createAction('[PRODUCT] Product remove request', props());
const productRemoveSuccess = createAction('[PRODUCT] Product remove success', props());
const productRemoveFail = createAction('[PRODUCT] Product remove fail', props());

const page = {
    limit: PAGINATION.limit,
    offset: 0,
    total: 0,
};
const queryVariables = {
    sorts: [
        {
            field: 'meta.created',
            order: IoRestorecommerceResourcebaseSortSortOrder.Ascending,
        },
    ],
    limit: page.limit,
    offset: page.offset,
};
class ProductEffects {
    constructor(router, actions$, appFacade, organizationContextFacade, productService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.organizationContextFacade = organizationContextFacade;
        this.productService = productService;
        this.errorHandlingService = errorHandlingService;
        this.productReadRequest$ = createEffect(() => {
            let isLoadMore = false;
            return this.actions$.pipe(withLatestOrganizationData(this.organizationContextFacade, productReadRequest.type // Pass only the effect-specific action
            ), exhaustMap(([action, organization]) => {
                // Action dispatched could be of many things...
                // OrganizationSwitching, Organization back, or loadProducts
                const productAction = action;
                const productActionPayload = productAction.payload || queryVariables;
                return this.productService
                    .read({
                    ...productActionPayload,
                    scope: organization,
                })
                    .pipe(tap((result) => {
                    if (productActionPayload.offset) {
                        isLoadMore = productActionPayload.offset > 0;
                    }
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product?.Read?.details
                        ?.operationStatus);
                }), map$1((result) => {
                    const items = (result?.data?.catalog?.product?.Read?.details?.items || [])?.map((item) => item?.payload);
                    return productReadRequestSuccess({
                        payload: { items, isLoadMore },
                    });
                }), catchError((error) => of(productReadRequestFail({ error: error.message }))));
            }));
        });
        this.productReadOneByIdRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productReadOneByIdRequest), exhaustMap(({ payload }) => this.productService
                .read({
                filters: [
                    {
                        filters: [
                            {
                                field: 'id',
                                value: payload.id,
                                type: IoRestorecommerceResourcebaseFilterValueType.String,
                                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                            },
                        ],
                    },
                ],
                limit: 1,
            })
                .pipe(map$1((result) => {
                const payload = result?.data?.catalog?.product?.Read?.details?.items?.pop()
                    ?.payload;
                return productReadOneByIdRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(productReadOneByIdRequestFail({
                error: error.message,
            }))))));
        });
        this.productCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCreateRequest), switchMap(({ payload }) => this.productService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.product?.Mutate?.details?.items?.pop()
                    ?.payload;
                return productCreateSuccess({ payload });
            }), catchError((error) => of(productCreateFail({ error: error.message }))))));
        });
        this.productCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.products.children.catalogs.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.productUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productUpdateRequest), switchMap(({ payload }) => this.productService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.product?.Mutate?.details?.items?.pop()
                    ?.payload;
                return productUpdateSuccess({ payload });
            }), catchError((error) => of(productUpdateFail({ error: error.message }))))));
        });
        this.productUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.productRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.productService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return productRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(productRemoveFail({ error: error.message }))));
            }));
        });
        this.productRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(productReadRequestFail, productReadOneByIdRequestFail, productCreateFail, productUpdateFail, productRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: OrganizationContextFacade }, { token: ProductService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: OrganizationContextFacade }, { type: ProductService }, { type: ErrorHandlingService }] });

const adapter$3 = createEntityAdapter();
const initialState$3 = adapter$3.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$3 = createReducer(initialState$3, on(productReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(productReadRequestSuccess, (state, { payload }) => {
    const data = {
        ...state,
        actionStatus: EActionStatus.Succeeded,
    };
    return payload.isLoadMore
        ? adapter$3.addMany(payload.items, data)
        : adapter$3.setAll(payload.items, data);
}), on(productReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(productReadOneByIdRequestSuccess, (state, { payload }) => adapter$3.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$3, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(productCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productCreateSuccess, (state, { payload }) => adapter$3.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productUpdateSuccess, (state, { payload }) => adapter$3.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productRemoveSuccess, (state, { payload }) => adapter$3.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const productReducer = (state, action) => reducer$3(state, action);

const selectProduct = createFeatureSelector(STORE.states.productState);
const { selectIds: selectIds$3, selectEntities: selectEntities$3, selectAll: selectAll$3, selectTotal: selectTotal$3 } = adapter$3.getSelectors();
const selectProductIds = createSelector(selectProduct, selectIds$3);
const selectProductEntities = createSelector(selectProduct, selectEntities$3);
const selectProductAll = createSelector(selectProduct, selectAll$3);
const selectProductTotal = createSelector(selectProduct, selectTotal$3);
const selectProductSelectedId = createSelector(selectProduct, (state) => state.selectedId);
const selectProductSelected = createSelector(selectProductEntities, selectProductSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$3 = createSelector(selectProduct, (state) => state.actionStatus);
const selectError$3 = createSelector(selectProduct, (state) => state.error);

class ProductFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectProductIds);
        this.entities$ = this.store.select(selectProductEntities);
        this.all$ = this.store.select(selectProductAll);
        this.total$ = this.store.select(selectProductTotal);
        this.selectedId$ = this.store.select(selectProductSelectedId);
        this.selected$ = this.store.select(selectProductSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$3);
        this.error$ = this.store.select(selectError$3);
        // Actions
        this.read = (payload) => this.store.dispatch(productReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(productReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$3({ payload }));
        this.create = (payload) => {
            this.store.dispatch(productCreateRequest({ payload }));
        };
        this.update = (payload) => {
            this.store.dispatch(productUpdateRequest({ payload }));
        };
        this.remove = (payload) => this.store.dispatch(productRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const productCategoryReadRequest = createAction('[PRODUCT CATEGORY] Read request', props());
const productCategoryReadRequestSuccess = createAction('[PRODUCT CATEGORY] Read success', props());
const productCategoryReadRequestFail = createAction('[PRODUCT CATEGORY] Read fail', props());
const productCategoryReadOneByIdRequest = createAction('[PRODUCT CATEGORY] Read one by id request', props());
const productCategoryReadOneByIdRequestSuccess = createAction('[PRODUCT CATEGORY] Read one by id success', props());
const productCategoryReadOneByIdRequestFail = createAction('[PRODUCT CATEGORY] Read one by id fail', props());
const setSelectedId$2 = createAction('[PRODUCT CATEGORY] Set selected id', props());
const productCategoryCreateRequest = createAction('[PRODUCT CATEGORY] ProductCategory create request', props());
const productCategoryCreateSuccess = createAction('[PRODUCT CATEGORY] ProductCategory create success', props());
const productCategoryCreateFail = createAction('[PRODUCT CATEGORY] ProductCategory create fail', props());
const productCategoryUpdateRequest = createAction('[PRODUCT CATEGORY] ProductCategory update request', props());
const productCategoryUpdateSuccess = createAction('[PRODUCT CATEGORY] ProductCategory update success', props());
const productCategoryUpdateFail = createAction('[PRODUCT CATEGORY] ProductCategory update fail', props());
const productCategoryRemoveRequest = createAction('[PRODUCT CATEGORY] ProductCategory remove request', props());
const productCategoryRemoveSuccess = createAction('[PRODUCT CATEGORY] ProductCategory remove success', props());
const productCategoryRemoveFail = createAction('[PRODUCT CATEGORY] ProductCategory remove fail', props());

class ProductCategoryEffects {
    constructor(router, actions$, appFacade, productCategoryService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.productCategoryService = productCategoryService;
        this.errorHandlingService = errorHandlingService;
        this.productCategoryReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryReadRequest), switchMap(({ payload }) => this.productCategoryService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_category?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.catalog?.product_category?.Read?.details?.items ||
                    [])?.map((item) => item?.payload);
                return productCategoryReadRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(productCategoryReadRequestFail({
                error: error.message,
            }))))));
        });
        this.productCategoryCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryCreateRequest), switchMap(({ payload }) => this.productCategoryService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_category?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.product_category?.Mutate?.details?.items?.pop()
                    ?.payload;
                return productCategoryCreateSuccess({
                    payload,
                });
            }), catchError((error) => of(productCategoryCreateFail({
                error: error.message,
            }))))));
        });
        this.productCategoryUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryUpdateRequest), switchMap(({ payload }) => this.productCategoryService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_category?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.product_category?.Mutate?.details?.items?.pop()
                    ?.payload;
                return productCategoryUpdateSuccess({
                    payload,
                });
            }), catchError((error) => of(productCategoryUpdateFail({
                error: error.message,
            }))))));
        });
        this.productCategoryCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product_category created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.products.children.categories.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.productCategoryUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product_category updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.productCategoryRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.productCategoryService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_category?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return productCategoryRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(productCategoryRemoveFail({
                    error: error.message,
                }))));
            }));
        });
        this.productCategoryRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product_category deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(productCategoryReadRequestFail, productCategoryCreateFail, productCategoryUpdateFail, productCategoryRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: ProductCategoryService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: ProductCategoryService }, { type: ErrorHandlingService }] });

const adapter$2 = createEntityAdapter();
const initialState$2 = adapter$2.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$2 = createReducer(initialState$2, on(productCategoryReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(productCategoryReadRequestSuccess, (state, { payload }) => adapter$2.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productCategoryReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productCategoryReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(productCategoryReadOneByIdRequestSuccess, (state, { payload }) => adapter$2.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productCategoryReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$2, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(productCategoryCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productCategoryCreateSuccess, (state, { payload }) => adapter$2.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productCategoryCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productCategoryUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productCategoryUpdateSuccess, (state, { payload }) => adapter$2.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productCategoryUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productCategoryRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productCategoryRemoveSuccess, (state, { payload }) => adapter$2.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productCategoryRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const productCategoryReducer = (state, action) => reducer$2(state, action);

const selectProductCategory = createFeatureSelector(STORE.states.productCategory);
const { selectIds: selectIds$2, selectEntities: selectEntities$2, selectAll: selectAll$2, selectTotal: selectTotal$2 } = adapter$2.getSelectors();
const selectProductCategoryIds = createSelector(selectProductCategory, selectIds$2);
const selectProductCategoryEntities = createSelector(selectProductCategory, selectEntities$2);
const selectProductCategoryAll = createSelector(selectProductCategory, selectAll$2);
const selectProductCategoryTotal = createSelector(selectProductCategory, selectTotal$2);
const selectProductCategorySelectedId = createSelector(selectProductCategory, (state) => state.selectedId);
const selectProductCategorySelected = createSelector(selectProductCategoryEntities, selectProductCategorySelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$2 = createSelector(selectProductCategory, (state) => state.actionStatus);
const selectError$2 = createSelector(selectProductCategory, (state) => state.error);

class ProductCategoryFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectProductCategoryIds);
        this.entities$ = this.store.select(selectProductCategoryEntities);
        this.all$ = this.store.select(selectProductCategoryAll);
        this.total$ = this.store.select(selectProductCategoryTotal);
        this.selectedId$ = this.store.select(selectProductCategorySelectedId);
        this.selected$ = this.store.select(selectProductCategorySelected);
        this.actionStatus$ = this.store.select(selectActionStatus$2);
        this.error$ = this.store.select(selectError$2);
        // Actions
        this.read = (payload) => this.store.dispatch(productCategoryReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(productCategoryReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$2({ payload }));
        this.create = (payload) => this.store.dispatch(productCategoryCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(productCategoryUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(productCategoryRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const productPrototypeReadRequest = createAction('[PRODUCT PROTOTYPE] Read request', props());
const productPrototypeReadRequestSuccess = createAction('[PRODUCT PROTOTYPE] Read success', props());
const productPrototypeReadRequestFail = createAction('[PRODUCT PROTOTYPE] Read fail', props());
const productPrototypeReadOneByIdRequest = createAction('[PRODUCT PROTOTYPE] Read one by id request', props());
const productPrototypeReadOneByIdRequestSuccess = createAction('[PRODUCT PROTOTYPE] Read one by id success', props());
const productPrototypeReadOneByIdRequestFail = createAction('[PRODUCT PROTOTYPE] Read one by id fail', props());
const setSelectedId$1 = createAction('[PRODUCT PROTOTYPE] Set selected id', props());
const productPrototypeCreateRequest = createAction('[PRODUCT PROTOTYPE] ProductPrototype create request', props());
const productPrototypeCreateSuccess = createAction('[PRODUCT PROTOTYPE] ProductPrototype create success', props());
const productPrototypeCreateFail = createAction('[PRODUCT PROTOTYPE] ProductPrototype create fail', props());
const productPrototypeUpdateRequest = createAction('[PRODUCT PROTOTYPE] ProductPrototype update request', props());
const productPrototypeUpdateSuccess = createAction('[PRODUCT PROTOTYPE] ProductPrototype update success', props());
const productPrototypeUpdateFail = createAction('[PRODUCT PROTOTYPE] ProductPrototype update fail', props());
const productPrototypeRemoveRequest = createAction('[PRODUCT PROTOTYPE] ProductPrototype remove request', props());
const productPrototypeRemoveSuccess = createAction('[PRODUCT PROTOTYPE] ProductPrototype remove success', props());
const productPrototypeRemoveFail = createAction('[PRODUCT PROTOTYPE] ProductPrototype remove fail', props());

class ProductPrototypeEffects {
    constructor(router, actions$, appFacade, productPrototypeService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.productPrototypeService = productPrototypeService;
        this.errorHandlingService = errorHandlingService;
        this.productPrototypeReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeReadRequest), switchMap(({ payload }) => this.productPrototypeService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_prototype?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.catalog?.product_prototype?.Read?.details?.items ||
                    [])?.map((item) => item?.payload);
                return productPrototypeReadRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(productPrototypeReadRequestFail({
                error: error.message,
            }))))));
        });
        this.productPrototypeCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeCreateRequest), switchMap(({ payload }) => this.productPrototypeService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_prototype?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.product_prototype?.Mutate?.details?.items?.pop()
                    ?.payload;
                return productPrototypeCreateSuccess({
                    payload,
                });
            }), catchError((error) => of(productPrototypeCreateFail({
                error: error.message,
            }))))));
        });
        this.productPrototypeUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeUpdateRequest), switchMap(({ payload }) => this.productPrototypeService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_prototype?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.product_prototype?.Mutate?.details?.items?.pop()
                    ?.payload;
                return productPrototypeUpdateSuccess({
                    payload,
                });
            }), catchError((error) => of(productPrototypeUpdateFail({
                error: error.message,
            }))))));
        });
        this.productPrototypeCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product_prototype created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.products.children.categories.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.productPrototypeUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product_prototype updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.productPrototypeRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.productPrototypeService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.product_prototype?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return productPrototypeRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(productPrototypeRemoveFail({
                    error: error.message,
                }))));
            }));
        });
        this.productPrototypeRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'product_prototype deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(productPrototypeReadRequestFail, productPrototypeCreateFail, productPrototypeUpdateFail, productPrototypeRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: ProductPrototypeService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: ProductPrototypeService }, { type: ErrorHandlingService }] });

const adapter$1 = createEntityAdapter();
const initialState$1 = adapter$1.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer$1 = createReducer(initialState$1, on(productPrototypeReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(productPrototypeReadRequestSuccess, (state, { payload }) => adapter$1.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productPrototypeReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productPrototypeReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(productPrototypeReadOneByIdRequestSuccess, (state, { payload }) => adapter$1.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productPrototypeReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId$1, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(productPrototypeCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productPrototypeCreateSuccess, (state, { payload }) => adapter$1.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productPrototypeCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productPrototypeUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productPrototypeUpdateSuccess, (state, { payload }) => adapter$1.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productPrototypeUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(productPrototypeRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(productPrototypeRemoveSuccess, (state, { payload }) => adapter$1.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(productPrototypeRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const productPrototypeReducer = (state, action) => reducer$1(state, action);

const selectProductPrototype = createFeatureSelector(STORE.states.productPrototype);
const { selectIds: selectIds$1, selectEntities: selectEntities$1, selectAll: selectAll$1, selectTotal: selectTotal$1 } = adapter$1.getSelectors();
const selectProductPrototypeIds = createSelector(selectProductPrototype, selectIds$1);
const selectProductPrototypeEntities = createSelector(selectProductPrototype, selectEntities$1);
const selectProductPrototypeAll = createSelector(selectProductPrototype, selectAll$1);
const selectProductPrototypeTotal = createSelector(selectProductPrototype, selectTotal$1);
const selectProductPrototypeSelectedId = createSelector(selectProductPrototype, (state) => state.selectedId);
const selectProductPrototypeSelected = createSelector(selectProductPrototypeEntities, selectProductPrototypeSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus$1 = createSelector(selectProductPrototype, (state) => state.actionStatus);
const selectError$1 = createSelector(selectProductPrototype, (state) => state.error);

class ProductPrototypeFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectProductPrototypeIds);
        this.entities$ = this.store.select(selectProductPrototypeEntities);
        this.all$ = this.store.select(selectProductPrototypeAll);
        this.total$ = this.store.select(selectProductPrototypeTotal);
        this.selectedId$ = this.store.select(selectProductPrototypeSelectedId);
        this.selected$ = this.store.select(selectProductPrototypeSelected);
        this.actionStatus$ = this.store.select(selectActionStatus$1);
        this.error$ = this.store.select(selectError$1);
        // Actions
        this.read = (payload) => this.store.dispatch(productPrototypeReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(productPrototypeReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId$1({ payload }));
        this.create = (payload) => this.store.dispatch(productPrototypeCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(productPrototypeUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(productPrototypeRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const priceGroupReadRequest = createAction('[PRICE GROUP] Read request', props());
const priceGroupReadRequestSuccess = createAction('[PRICE GROUP] Read success', props());
const priceGroupReadRequestFail = createAction('[PRICE GROUP] Read fail', props());
const priceGroupReadOneByIdRequest = createAction('[PRICE GROUP] Read one by id request', props());
const priceGroupReadOneByIdRequestSuccess = createAction('[PRICE GROUP] Read one by id success', props());
const priceGroupReadOneByIdRequestFail = createAction('[PRICE GROUP] Read one by id fail', props());
const setSelectedId = createAction('[PRICE GROUP] Set selected id', props());
const priceGroupCreateRequest = createAction('[PRICE GROUP] Price group create request', props());
const priceGroupCreateSuccess = createAction('[PRICE GROUP] Price group create success', props());
const priceGroupCreateFail = createAction('[PRICE GROUP] Price group create fail', props());
const priceGroupUpdateRequest = createAction('[PRICE GROUP] Price group update request', props());
const priceGroupUpdateSuccess = createAction('[PRICE GROUP] Price group update success', props());
const priceGroupUpdateFail = createAction('[PRICE GROUP] Price group update fail', props());
const priceGroupRemoveRequest = createAction('[PRICE GROUP] Price group remove request', props());
const priceGroupRemoveSuccess = createAction('[PRICE GROUP] Price group remove success', props());
const priceGroupRemoveFail = createAction('[PRICE GROUP] Price group remove fail', props());

class PriceGroupEffects {
    constructor(router, actions$, appFacade, priceGroupService, errorHandlingService) {
        this.router = router;
        this.actions$ = actions$;
        this.appFacade = appFacade;
        this.priceGroupService = priceGroupService;
        this.errorHandlingService = errorHandlingService;
        this.priceGroupReadRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupReadRequest), switchMap(({ payload }) => this.priceGroupService.read(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.price_group?.Read?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = (result?.data?.catalog?.price_group?.Read?.details?.items || [])?.map((item) => item?.payload);
                return priceGroupReadRequestSuccess({
                    payload,
                });
            }), catchError((error) => of(priceGroupReadRequestFail({
                error: error.message,
            }))))));
        });
        this.priceGroupCreateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupCreateRequest), switchMap(({ payload }) => this.priceGroupService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.price_group?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.price_group?.Mutate?.details?.items?.pop()
                    ?.payload;
                return priceGroupCreateSuccess({ payload });
            }), catchError((error) => of(priceGroupCreateFail({
                error: error.message,
            }))))));
        });
        this.priceGroupUpdateRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupUpdateRequest), switchMap(({ payload }) => this.priceGroupService.mutate(payload).pipe(tap((result) => {
                this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.price_group?.Mutate?.details
                    ?.operationStatus);
            }), map$1((result) => {
                const payload = result?.data?.catalog?.price_group?.Mutate?.details?.items?.pop()
                    ?.payload;
                return priceGroupUpdateSuccess({ payload });
            }), catchError((error) => of(priceGroupUpdateFail({
                error: error.message,
            }))))));
        });
        this.priceGroupCreateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupCreateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'price_group created',
                    type: ENotificationTypes.Success,
                });
            }), tap(({ payload }) => {
                this.router.navigate(ROUTER.pages.main.children.products.children.priceGroups.children.edit.getLink({
                    id: payload.id,
                }));
            }));
        }, { dispatch: false });
        this.priceGroupUpdateSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupUpdateSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'price_group updated',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.priceGroupRemoveRequest$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupRemoveRequest), switchMap(({ payload }) => {
                const id = payload.id;
                return this.priceGroupService.remove({ ids: [id] }).pipe(tap((result) => {
                    this.errorHandlingService.checkStatusAndThrow(result?.data?.catalog?.price_group?.Delete?.details
                        ?.operationStatus);
                }), map$1(() => {
                    return priceGroupRemoveSuccess({
                        payload: { id },
                    });
                }), catchError((error) => of(priceGroupRemoveFail({
                    error: error.message,
                }))));
            }));
        });
        this.priceGroupRemoveSuccess$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupRemoveSuccess), tap(() => {
                this.appFacade.addNotification({
                    content: 'price_group deleted',
                    type: ENotificationTypes.Success,
                });
            }));
        }, { dispatch: false });
        this.handleNotificationErrors$ = createEffect(() => {
            return this.actions$.pipe(ofType(priceGroupReadRequestFail, priceGroupCreateFail, priceGroupUpdateFail, priceGroupRemoveFail), tap(({ error }) => {
                this.appFacade.addNotification({
                    content: error ?? 'unknown error',
                    type: ENotificationTypes.Error,
                });
            }));
        }, { dispatch: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupEffects, deps: [{ token: i1$2.Router }, { token: i2.Actions }, { token: AppFacade }, { token: PriceGroupService }, { token: ErrorHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Actions }, { type: AppFacade }, { type: PriceGroupService }, { type: ErrorHandlingService }] });

const adapter = createEntityAdapter();
const initialState = adapter.getInitialState({
    selectedId: null,
    actionStatus: EActionStatus.INIT,
    error: null,
});
const reducer = createReducer(initialState, on(priceGroupReadRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(priceGroupReadRequestSuccess, (state, { payload }) => adapter.setAll(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(priceGroupReadRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(priceGroupReadOneByIdRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Requesting,
})), on(priceGroupReadOneByIdRequestSuccess, (state, { payload }) => adapter.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(priceGroupReadOneByIdRequestFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(setSelectedId, (state, { payload }) => ({
    ...state,
    selectedId: payload,
})), on(priceGroupCreateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(priceGroupCreateSuccess, (state, { payload }) => adapter.addOne(payload, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(priceGroupCreateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(priceGroupUpdateRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(priceGroupUpdateSuccess, (state, { payload }) => adapter.updateOne({ id: payload.id, changes: payload }, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(priceGroupUpdateFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})), on(priceGroupRemoveRequest, (state) => ({
    ...state,
    actionStatus: EActionStatus.Mutating,
})), on(priceGroupRemoveSuccess, (state, { payload }) => adapter.removeOne(payload.id, {
    ...state,
    actionStatus: EActionStatus.Succeeded,
})), on(priceGroupRemoveFail, (state, { error }) => ({
    ...state,
    actionStatus: EActionStatus.Failed,
    error,
})));
const priceGroupReducer = (state, action) => reducer(state, action);

const selectPriceGroup = createFeatureSelector(STORE.states.priceGroup);
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
const selectPriceGroupIds = createSelector(selectPriceGroup, selectIds);
const selectPriceGroupEntities = createSelector(selectPriceGroup, selectEntities);
const selectPriceGroupAll = createSelector(selectPriceGroup, selectAll);
const selectPriceGroupTotal = createSelector(selectPriceGroup, selectTotal);
const selectPriceGroupSelectedId = createSelector(selectPriceGroup, (state) => state.selectedId);
const selectPriceGroupSelected = createSelector(selectPriceGroupEntities, selectPriceGroupSelectedId, (entities, selectedId) => {
    return (selectedId && selectedId in entities ? entities[selectedId] : null);
});
const selectActionStatus = createSelector(selectPriceGroup, (state) => state.actionStatus);
const selectError = createSelector(selectPriceGroup, (state) => state.error);

class PriceGroupFacade {
    constructor(store) {
        this.store = store;
        // Selectors
        this.ids$ = this.store.select(selectPriceGroupIds);
        this.entities$ = this.store.select(selectPriceGroupEntities);
        this.all$ = this.store.select(selectPriceGroupAll);
        this.total$ = this.store.select(selectPriceGroupTotal);
        this.selectedId$ = this.store.select(selectPriceGroupSelectedId);
        this.selected$ = this.store.select(selectPriceGroupSelected);
        this.actionStatus$ = this.store.select(selectActionStatus);
        this.error$ = this.store.select(selectError);
        // Actions
        this.read = (payload) => this.store.dispatch(priceGroupReadRequest({ payload }));
        this.readOneById = (payload) => this.store.dispatch(priceGroupReadOneByIdRequest({ payload }));
        this.setSelectedId = (payload) => this.store.dispatch(setSelectedId({ payload }));
        this.create = (payload) => this.store.dispatch(priceGroupCreateRequest({ payload }));
        this.update = (payload) => this.store.dispatch(priceGroupUpdateRequest({ payload }));
        this.remove = (payload) => this.store.dispatch(priceGroupRemoveRequest({ payload }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupFacade, deps: [{ token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.Store }] });

const selectRouter = createFeatureSelector(STORE.states.routerState);
const selectData = createSelector(selectRouter, (router) => router.state.data);
const selectParams = createSelector(selectRouter, (router) => router.state.params);
const selectQueryParams = createSelector(selectRouter, (router) => router.state.queryParams);
const selectUrl = createSelector(selectRouter, (router) => router.state.url);

class RouterFacade {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        // Selectors
        this.data$ = this.store.select(selectData);
        this.params$ = this.store.select(selectParams);
        this.queryParams$ = this.store.select(selectQueryParams);
        this.url$ = this.store.select(selectUrl);
        this.eventsNavigationEnd$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map$1((event) => event instanceof NavigationEnd), startWith(this.router.url) // Emit the current route immediately
        );
        // Actions
        this.navigate = (url) => this.router.navigate(url);
        this.navigateByUrl = (url) => this.router.navigateByUrl(url);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RouterFacade, deps: [{ token: i1$2.Router }, { token: i1$1.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RouterFacade }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: RouterFacade, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i1$1.Store }] });

class RouterSerializer {
    serialize(routerState) {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { url, root: { queryParams }, } = routerState;
        const { data, params } = route;
        return { url, data, params, queryParams };
    }
}

const facades = [
    AccountFacade,
    AppFacade,
    AuthnFacade,
    CountryFacade,
    CurrencyFacade,
    CustomerFacade,
    FulfillmentFacade,
    InvoiceFacade,
    IamFacade,
    OrganizationFacade,
    RoleFacade,
    LocaleFacade,
    ManufacturerFacade,
    OrderFacade,
    OrganizationContextFacade,
    ProductFacade,
    RouterFacade,
    TaxFacade,
    TimezoneFacade,
    ShopFacade,
    PolicyFacade,
    PriceGroupFacade,
    ObjectUploadFacade,
    ProductCategoryFacade,
    ProductPrototypeFacade,
];
class CoreStateModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CoreStateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: CoreStateModule, imports: [i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule, i2.EffectsFeatureModule, i1$1.StoreFeatureModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CoreStateModule, providers: [...facades], imports: [StoreModule.forFeature(STORE.states.appState, appReducer),
            EffectsModule.forFeature([AppEffects]),
            StoreModule.forFeature(STORE.states.accountState, accountReducer),
            EffectsModule.forFeature([AccountEffects]),
            StoreModule.forFeature(STORE.states.authnState, authnReducer),
            EffectsModule.forFeature([AuthnEffects]),
            StoreModule.forFeature(STORE.states.countryState, countryReducer),
            EffectsModule.forFeature([CountryEffects]),
            StoreModule.forFeature(STORE.states.currencyState, currencyReducer),
            EffectsModule.forFeature([CurrencyEffects]),
            StoreModule.forFeature(STORE.states.fulfillmentState, fulfillmentReducer),
            EffectsModule.forFeature([FulfillmentEffects]),
            StoreModule.forFeature(STORE.states.invoiceState, invoiceReducer),
            EffectsModule.forFeature([InvoiceEffects]),
            StoreModule.forFeature(STORE.states.iamState, iamReducer),
            EffectsModule.forFeature([IamEffects]),
            StoreModule.forFeature(STORE.states.organizationState, organizationReducer),
            EffectsModule.forFeature([OrganizationEffects]),
            StoreModule.forFeature(STORE.states.roleState, roleReducer),
            EffectsModule.forFeature([RoleEffects]),
            StoreModule.forFeature(STORE.states.localeState, localeReducer),
            EffectsModule.forFeature([LocaleEffects]),
            StoreModule.forFeature(STORE.states.orderState, orderReducer),
            EffectsModule.forFeature([OrderEffects]),
            StoreModule.forFeature(STORE.states.policyState, policyReducer),
            EffectsModule.forFeature([PolicyEffects]),
            StoreModule.forFeature(STORE.states.productState, productReducer),
            EffectsModule.forFeature([ProductEffects]),
            StoreModule.forFeature(STORE.states.timezoneState, timezoneReducer),
            StoreModule.forFeature(STORE.states.taxState, taxReducer),
            EffectsModule.forFeature([TaxEffects]),
            EffectsModule.forFeature([TimezoneEffects]),
            StoreModule.forFeature(STORE.states.shopState, shopReducer),
            EffectsModule.forFeature([ShopEffects]),
            StoreModule.forFeature(STORE.states.manaufacturer, manufacturerReducer),
            EffectsModule.forFeature([ManufacturerEffects]),
            StoreModule.forFeature(STORE.states.routerState, fromRouter.routerReducer),
            EffectsModule.forFeature([OrganizationContextEffects]),
            StoreModule.forFeature(STORE.states.objectUploadState, objectUploadReducer),
            EffectsModule.forFeature([ObjectUploadEffects]),
            StoreModule.forFeature(STORE.states.priceGroup, priceGroupReducer),
            EffectsModule.forFeature([PriceGroupEffects]),
            StoreModule.forFeature(STORE.states.customerState, customerReducer),
            EffectsModule.forFeature([CustomerEffects]),
            StoreModule.forFeature(STORE.states.productCategory, productCategoryReducer),
            EffectsModule.forFeature([ProductCategoryEffects]),
            StoreModule.forFeature(STORE.states.productPrototype, productPrototypeReducer),
            EffectsModule.forFeature([ProductPrototypeEffects]),
            StoreModule.forFeature(STORE.states.organizationContextState, organizationContextReducer)] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CoreStateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        StoreModule.forFeature(STORE.states.appState, appReducer),
                        EffectsModule.forFeature([AppEffects]),
                        StoreModule.forFeature(STORE.states.accountState, accountReducer),
                        EffectsModule.forFeature([AccountEffects]),
                        StoreModule.forFeature(STORE.states.authnState, authnReducer),
                        EffectsModule.forFeature([AuthnEffects]),
                        StoreModule.forFeature(STORE.states.countryState, countryReducer),
                        EffectsModule.forFeature([CountryEffects]),
                        StoreModule.forFeature(STORE.states.currencyState, currencyReducer),
                        EffectsModule.forFeature([CurrencyEffects]),
                        StoreModule.forFeature(STORE.states.fulfillmentState, fulfillmentReducer),
                        EffectsModule.forFeature([FulfillmentEffects]),
                        StoreModule.forFeature(STORE.states.invoiceState, invoiceReducer),
                        EffectsModule.forFeature([InvoiceEffects]),
                        StoreModule.forFeature(STORE.states.iamState, iamReducer),
                        EffectsModule.forFeature([IamEffects]),
                        StoreModule.forFeature(STORE.states.organizationState, organizationReducer),
                        EffectsModule.forFeature([OrganizationEffects]),
                        StoreModule.forFeature(STORE.states.roleState, roleReducer),
                        EffectsModule.forFeature([RoleEffects]),
                        StoreModule.forFeature(STORE.states.localeState, localeReducer),
                        EffectsModule.forFeature([LocaleEffects]),
                        StoreModule.forFeature(STORE.states.orderState, orderReducer),
                        EffectsModule.forFeature([OrderEffects]),
                        StoreModule.forFeature(STORE.states.policyState, policyReducer),
                        EffectsModule.forFeature([PolicyEffects]),
                        StoreModule.forFeature(STORE.states.productState, productReducer),
                        EffectsModule.forFeature([ProductEffects]),
                        StoreModule.forFeature(STORE.states.timezoneState, timezoneReducer),
                        StoreModule.forFeature(STORE.states.taxState, taxReducer),
                        EffectsModule.forFeature([TaxEffects]),
                        EffectsModule.forFeature([TimezoneEffects]),
                        StoreModule.forFeature(STORE.states.shopState, shopReducer),
                        EffectsModule.forFeature([ShopEffects]),
                        StoreModule.forFeature(STORE.states.manaufacturer, manufacturerReducer),
                        EffectsModule.forFeature([ManufacturerEffects]),
                        StoreModule.forFeature(STORE.states.routerState, fromRouter.routerReducer),
                        EffectsModule.forFeature([OrganizationContextEffects]),
                        StoreModule.forFeature(STORE.states.objectUploadState, objectUploadReducer),
                        EffectsModule.forFeature([ObjectUploadEffects]),
                        StoreModule.forFeature(STORE.states.priceGroup, priceGroupReducer),
                        EffectsModule.forFeature([PriceGroupEffects]),
                        StoreModule.forFeature(STORE.states.customerState, customerReducer),
                        EffectsModule.forFeature([CustomerEffects]),
                        StoreModule.forFeature(STORE.states.productCategory, productCategoryReducer),
                        EffectsModule.forFeature([ProductCategoryEffects]),
                        StoreModule.forFeature(STORE.states.productPrototype, productPrototypeReducer),
                        EffectsModule.forFeature([ProductPrototypeEffects]),
                        StoreModule.forFeature(STORE.states.organizationContextState, organizationContextReducer),
                    ],
                    providers: [...facades],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AccountEffects, AccountFacade, ApiService, AppEffects, AppFacade, AuthnEffects, AuthnFacade, AuthnService, AuthzService, CoreStateModule, CountryEffects, CountryFacade, CountryService, CurrencyEffects, CurrencyFacade, CurrencyService, CustomerEffects, CustomerFacade, CustomerService, ErrorHandlingService, FulfillmentEffects, FulfillmentFacade, FulfillmentService, IamEffects, IamFacade, InvoiceEffects, InvoiceFacade, InvoiceService, LocaleEffects, LocaleFacade, LocaleService, ManufacturerEffects, ManufacturerFacade, ManufacturerService, ObjectUploadEffects, ObjectUploadFacade, ObjectUploadService, OrderEffects, OrderFacade, OrderService, OrganizationContextEffects, OrganizationContextFacade, OrganizationEffects, OrganizationFacade, OrganizationService, PolicyEffects, PolicyFacade, PolicyService, PriceGroupEffects, PriceGroupFacade, PriceGroupService, ProductCategoryEffects, ProductCategoryFacade, ProductCategoryService, ProductEffects, ProductFacade, ProductPrototypeEffects, ProductPrototypeFacade, ProductPrototypeService, ProductService, RoleEffects, RoleFacade, RoleService, RouterFacade, RouterSerializer, ShopEffects, ShopFacade, ShopService, TaxEffects, TaxFacade, TaxService, TimezoneEffects, TimezoneFacade, TimezoneService, UserService, accountReducer, appReducer, authnReducer, capitalizeFirstLetter, countryReducer, currencyReducer, customerReducer, filterEmpty, filterEmptyAndNullishAndUndefined, filterNullish, filterNullishAndUndefined, filterUndefined, fulfillmentReducer, handleLocalStorageSync, handleStoreLogger, iamReducer, invoiceReducer, localeReducer, manufacturerReducer, objectUploadReducer, orderReducer, organizationContextReducer, organizationReducer, policyReducer, priceGroupReducer, productCategoryReducer, productPrototypeReducer, productReducer, roleReducer, shopReducer, taxReducer, timezoneReducer, withLatestOrganizationData };
//# sourceMappingURL=console-core-state.mjs.map
