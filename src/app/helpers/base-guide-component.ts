import { Observable } from 'rxjs/Observable';
import { flatMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { TourServiceService } from '../services/tour-service.service';

export abstract class BaseGuideComponent {
  protected parent;
  protected next;

  protected constructor(tourService: TourServiceService) {
    tourService.addStep(this);
  }

  setParent(parent: BaseGuideComponent) {
    this.parent = parent;

    return this;
  }

  setNext(step) {
    this.next = step;

    return this;
  }

  startGuide() {
    this.handleActions();
  }

  private handleActions() {
    of(true).pipe(
      flatMap(() => {
        if (typeof this.beforeShow === 'function') {
          return this.beforeShow();
        }

        return of(true);
      }),
      tap(() => {
        if (this.next) {
          this.next.setParent(this);
        }
      }),
      switchMap(() => {
        const response = this.performAction();

        if (response instanceof Observable) {
          return response;
        }

        return of(true);
      }),
      flatMap(() => this.beforeNext ? this.beforeNext() : of(true)),
      tap(() => {
        if (this.next) {
          this.next.startGuide();
        }
      }),
    ).subscribe();
  }

  abstract performAction(): Observable<any> | void;
  protected beforeNext(): Observable<any> { return of(true); }
  protected beforeShow(): Observable<any> { return of(true); }
}
