﻿import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable, Subject} from 'rxjs';

export interface AlertServiceMessage {
  type: 'error' | 'success';
  message: string;
}
@Injectable()
export class AlertService {

  // private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  // todo: usar getter y setter
  alertServiceMessage: AlertServiceMessage;

  // constructor(private router: Router) {
  //   // clear alert message on route change
  //   router.events.subscribe(event => {
  //     if (event instanceof NavigationStart) {
  //       if (this.keepAfterNavigationChange) {
  //         // only keep for a single location change
  //         this.keepAfterNavigationChange = false;
  //       } else {
  //         // clear alert
  //         // this.subject.next();
  //       }
  //     }
  //   });
  // }

  // success(message: string, keepAfterNavigationChange = false) {
  //   this.keepAfterNavigationChange = keepAfterNavigationChange;
  //   this.subject.next({type: 'success', text: message});
  // }

  // error(message: string, keepAfterNavigationChange = false) {
  //   this.keepAfterNavigationChange = keepAfterNavigationChange;
  //   this.subject.next({type: 'error', text: message});
  // }

  // getMessage(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  getMessage() {
    return this.alertServiceMessage;
  }

  setMessage(message: AlertServiceMessage) {
    this.alertServiceMessage = message;
  }
}
