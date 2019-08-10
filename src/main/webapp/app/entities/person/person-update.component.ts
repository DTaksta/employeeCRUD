import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { IPerson, Person } from 'app/shared/model/person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'jhi-person-update',
  templateUrl: './person-update.component.html'
})
export class PersonUpdateComponent implements OnInit {
  isSaving: boolean;
  dateOfBirthDp: any;

  editForm = this.fb.group({
    id: [],
    names: [],
    lastName: [],
    dateOfBirth: [],
    addressPhysical: [],
    addressPostal: [],
    telephoneNumber: []
  });

  constructor(protected personService: PersonService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ person }) => {
      this.updateForm(person);
    });
  }

  updateForm(person: IPerson) {
    this.editForm.patchValue({
      id: person.id,
      names: person.names,
      lastName: person.lastName,
      dateOfBirth: person.dateOfBirth,
      addressPhysical: person.addressPhysical,
      addressPostal: person.addressPostal,
      telephoneNumber: person.telephoneNumber
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const person = this.createFromForm();
    if (person.id !== undefined) {
      this.subscribeToSaveResponse(this.personService.update(person));
    } else {
      this.subscribeToSaveResponse(this.personService.create(person));
    }
  }

  private createFromForm(): IPerson {
    return {
      ...new Person(),
      id: this.editForm.get(['id']).value,
      names: this.editForm.get(['names']).value,
      lastName: this.editForm.get(['lastName']).value,
      dateOfBirth: this.editForm.get(['dateOfBirth']).value,
      addressPhysical: this.editForm.get(['addressPhysical']).value,
      addressPostal: this.editForm.get(['addressPostal']).value,
      telephoneNumber: this.editForm.get(['telephoneNumber']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPerson>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
