import { Component, HostBinding, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'rc-app',
  templateUrl: './app.component.html',
})
export class RcAppComponent {

  constructor(
    public drawerService: DrawerService,
  ) { }

  @HostBinding('class.app')
  @HostBinding('class.col')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;

}
