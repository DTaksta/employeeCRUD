import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IEmployee, Employee } from 'app/shared/model/employee.model';
import { EmployeeService } from './employee.service';
import { ICompany } from 'app/shared/model/company.model';
import { CompanyService } from 'app/entities/company';

@Component({
  selector: 'jhi-employee-update',
  templateUrl: './employee-update.component.html'
})
export class EmployeeUpdateComponent implements OnInit {
  isSaving: boolean;

  companies: ICompany[];
  dateOfBirthDp: any;

  editForm = this.fb.group({
    id: [],
    names: [],
    lastName: [],
    dateOfBirth: [],
    addressPhysical: [],
    addressPostal: [],
    telephoneNumber: [],
    employeeNumber: [],
    company: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected employeeService: EmployeeService,
    protected companyService: CompanyService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ employee }) => {
      this.updateForm(employee);
    });
    this.companyService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICompany[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICompany[]>) => response.body)
      )
      .subscribe((res: ICompany[]) => (this.companies = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(employee: IEmployee) {
    this.editForm.patchValue({
      id: employee.id,
      names: employee.names,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth,
      addressPhysical: employee.addressPhysical,
      addressPostal: employee.addressPostal,
      telephoneNumber: employee.telephoneNumber,
      employeeNumber: employee.employeeNumber,
      company: employee.company
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const employee = this.createFromForm();
    if (employee.id !== undefined) {
      this.subscribeToSaveResponse(this.employeeService.update(employee));
    } else {
      this.subscribeToSaveResponse(this.employeeService.create(employee));
    }
  }

  private createFromForm(): IEmployee {
    return {
      ...new Employee(),
      id: this.editForm.get(['id']).value,
      names: this.editForm.get(['names']).value,
      lastName: this.editForm.get(['lastName']).value,
      dateOfBirth: this.editForm.get(['dateOfBirth']).value,
      addressPhysical: this.editForm.get(['addressPhysical']).value,
      addressPostal: this.editForm.get(['addressPostal']).value,
      telephoneNumber: this.editForm.get(['telephoneNumber']).value,
      employeeNumber: this.editForm.get(['employeeNumber']).value,
      company: this.editForm.get(['company']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEmployee>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackCompanyById(index: number, item: ICompany) {
    return item.id;
  }
}
