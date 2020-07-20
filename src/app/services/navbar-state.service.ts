import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CurrentPage } from '../models/navbar-state';

@Injectable({
  providedIn: 'root'
})
export class NavbarStateService {

  navbarStateEmitter = new Subject<CurrentPage>();
  constructor() { }

  emitCurrentPageStatus(status: CurrentPage) {
    this.navbarStateEmitter.next(status);
  }


}
