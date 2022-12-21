import { ClassProvider, inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

function describeDestroyService() {
  @Injectable()
  class DestroyServiceV14 extends Subject<void> implements OnDestroy {
    ngOnDestroy(): void {
      this.next();
      this.complete();
    }
  }

  function provideDestroyService(): ClassProvider {
    return {
        provide: DestroyServiceV14,
        useClass: DestroyServiceV14
    };
  }

  function injectDestroyService(): Observable<void> {
    const destroy$ = inject(DestroyServiceV14, {self: true, optional: true})

    if (!destroy$) {
        throw new Error(
            'It seems that you forgot to provide DestroyService. Try adding "provideDestroyService()" to your declarable\'s providers.'
        );
    }

    return destroy$.asObservable();
  }

  return {
    provideDestroyService,
    injectDestroyService
  };
}

export const {provideDestroyService, injectDestroyService} = describeDestroyService();
