import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TActiveForm } from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class RcActiveFormService {
  active$: Observable<{
    form: TActiveForm;
  }>;

  private active = new BehaviorSubject<{ form: TActiveForm }>({
    form: '',
  });

  constructor() {
    this.active$ = this.active.asObservable();
  }

  setActive(form: TActiveForm) {
    this.active.next({ form });
  }
}
