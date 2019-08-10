import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeManagementSharedModule } from 'app/shared';
import {
  CompanyComponent,
  CompanyDetailComponent,
  CompanyUpdateComponent,
  CompanyDeletePopupComponent,
  CompanyDeleteDialogComponent,
  companyRoute,
  companyPopupRoute
} from './';

const ENTITY_STATES = [...companyRoute, ...companyPopupRoute];

@NgModule({
  imports: [EmployeeManagementSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CompanyComponent,
    CompanyDetailComponent,
    CompanyUpdateComponent,
    CompanyDeleteDialogComponent,
    CompanyDeletePopupComponent
  ],
  entryComponents: [CompanyComponent, CompanyUpdateComponent, CompanyDeleteDialogComponent, CompanyDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeManagementCompanyModule {}
