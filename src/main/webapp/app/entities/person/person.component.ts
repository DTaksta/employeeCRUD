import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPerson } from 'app/shared/model/person.model';
import { AccountService } from 'app/core';
import { PersonService } from './person.service';

@Component({
  selector: 'jhi-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit, OnDestroy {
  people: IPerson[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected personService: PersonService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.personService
      .query()
      .pipe(
        filter((res: HttpResponse<IPerson[]>) => res.ok),
        map((res: HttpResponse<IPerson[]>) => res.body)
      )
      .subscribe(
        (res: IPerson[]) => {
          this.people = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInPeople();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPerson) {
    return item.id;
  }

  registerChangeInPeople() {
    this.eventSubscriber = this.eventManager.subscribe('personListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
