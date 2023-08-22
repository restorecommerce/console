import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { APP } from '@console-core/config';

@Injectable({ providedIn: 'root' })
export class RoutesTitleStrategyService extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const text = this.buildTitle(routerState);
    if (text === undefined) {
      return;
    }

    this.title.setTitle(`${text} | ${APP.name}`);
  }
}
