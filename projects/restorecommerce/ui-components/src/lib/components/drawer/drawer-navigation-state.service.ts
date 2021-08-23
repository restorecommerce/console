import { Injectable } from '@angular/core';
import { Observable, Subject, empty, fromEvent, merge } from 'rxjs';
import { map, filter, take, publish, refCount, audit } from 'rxjs/operators';
import { Triangle } from './triangle';

export interface NavigationItem {
  readonly parent: NavigationItem;
  readonly level: number;
  readonly hasNestedNavItems: boolean;
  readonly nestedNav?: HTMLElement;
}

export interface NavigationEnterItemAction {
  type: 'enter_item';
  event: MouseEvent;
  item: NavigationItem;
}

export interface NavigationLeaveItemAction {
  type: 'leave_item';
  event: MouseEvent;
  item: NavigationItem;
}

export interface NavigationSelectItemAction {
  type: 'select_item';
  item: NavigationItem;
}

export interface NavigationEnterNavAction {
  type: 'enter_nav';
  parent?: NavigationItem;
}

export interface NavigationLeaveNavAction {
  type: 'leave_nav';
  parent?: NavigationItem;
}

export type NavigationAction = NavigationEnterItemAction | NavigationLeaveItemAction |
                               NavigationSelectItemAction | NavigationEnterNavAction |
                               NavigationLeaveNavAction;

export interface NavigationState {
  hoveredItems: NavigationItem[];
}

@Injectable()
export class NavigationStateService {
  private actionEmitter = new Subject<NavigationAction>();

  state$: Observable<NavigationState> = this.actionEmitter.pipe(
    audit((action) => {
        // Audit the action when leaving an item that has nested items
        if (action && action.type === 'leave_item' && action.item.hasNestedNavItems) {
          return this.auditAction(action.event, action);
        }
        return empty();
    }),
    map(action => {
      // TODO: Support more than one level
      let hoveredItems = [];
      if (action.type === 'select_item' && action.item.hasNestedNavItems) {
        hoveredItems = action.item.parent ? [action.item.parent, action.item] : [action.item];
      } else  if (action.type === 'select_item' || action.type === 'leave_nav') {
        hoveredItems = [];
      } else if (action.type === 'enter_item') {
        hoveredItems = action.item.parent ? [action.item.parent, action.item] : [action.item];
      } else if (action.type === 'leave_item') {
        if (action.item.level === 0) {
          hoveredItems = [];
        } else {
          hoveredItems = [action.item.parent];
        }
      } else { // 'enter_nav'
        if (action.parent && action.parent.level === 0) {
          hoveredItems = [action.parent];
        } else {
          hoveredItems = [];
        }
      }

      return {
        hoveredItems
      };
    }),
    publish(),
    refCount()
  );

  /**
   * Actions will be skipped as long as the mouse moves in the direction of the sub menu overlay
   * or a 'select_item' action is emitted
   */
  auditAction(sourceMouseEvent: MouseEvent, sourceAction: NavigationLeaveItemAction) {
    // Listen to actions and mouse movement
    return merge(this.actionEmitter, fromEvent<MouseEvent>(window, 'mousemove')).pipe(
      map((actionOrMouseEvent) => {
        if (actionOrMouseEvent instanceof MouseEvent)  {
            const mouseEvent = actionOrMouseEvent;

            // Determine mouse pos from
            const x = mouseEvent.x - sourceMouseEvent.x;
            const y = mouseEvent.y - sourceMouseEvent.y;

            // Movement to the left will immedietally trigger the change
            if (mouseEvent.movementX < 0) {
              return true;
            }
            // Add a small movement buffer
            if (Math.abs(x) < 3 && Math.abs(y) < 3) {
              return false;
            }

            // Get the rect of the nested nav
            const clientRect = sourceAction.item && sourceAction.item.nestedNav && sourceAction.item.nestedNav.getBoundingClientRect();
            if (!clientRect) {
              return true;
            }


            // Create a triangle with the following coordinates
            // - mouse starting position
            // - top left of the sub menu
            // - bottom left of the sub menu
            const triangle = new Triangle({
              x: sourceMouseEvent.clientX - 5,
              y: sourceMouseEvent.clientY,
            }, {
              x: clientRect.left + 3,
              y: clientRect.top - 3,
            }, {
              x: clientRect.left + 3,
              y: clientRect.bottom + 3,
            });

            // Abort auditing if the current mouse pos is not within the triangle
            return !triangle.containsPoint({
              x: mouseEvent.clientX,
              y: mouseEvent.clientY,
            });
        } else {
          const action = actionOrMouseEvent;
          if (action.type === 'select_item') {
            return true;
          }
          return false;
        }


      }),
      filter(b => b),
      take(1),
    );
  }

  enterItem(item: NavigationItem, event: MouseEvent) {
    this.actionEmitter.next({
      type: 'enter_item',
      event,
      item
    });
  }

  leaveItem(item: NavigationItem, event: MouseEvent) {
    this.actionEmitter.next({
      type: 'leave_item',
      event,
      item
    });
  }

  selectItem(item: NavigationItem) {
    this.actionEmitter.next({
      type: 'select_item',
      item
    });
  }
  enterNav(parent?: NavigationItem) {
    this.actionEmitter.next({
      type: 'enter_nav',
      parent
    });
  }
  leaveNav(parent?: NavigationItem) {
    this.actionEmitter.next({
      type: 'leave_nav',
      parent
    });
  }
}

