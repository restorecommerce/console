import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type TDrawerMode = 'side' | 'over';

@Injectable({
  providedIn: 'root',
})
export class RsDrawerService implements OnDestroy {
  private openedEmitter = new BehaviorSubject<boolean | undefined>(undefined);
  private modeEmitter = new BehaviorSubject<string>('side');

  opened$ = this.openedEmitter.asObservable();
  mode$ = this.modeEmitter.asObservable();

  get mode() {
    return this.modeEmitter.value;
  }

  get opened() {
    return this.openedEmitter.value;
  }

  set opened(opened: boolean | undefined) {
    this.openedEmitter.next(opened);
  }

  toggle(opened?: boolean) {
    this.openedEmitter.next(
      typeof opened === 'boolean' ? opened : !this.openedEmitter.value
    );
  }

  setMode(mode: string) {
    this.modeEmitter.next(mode);
  }

  ngOnDestroy() {
    this.openedEmitter.complete();
  }
}
