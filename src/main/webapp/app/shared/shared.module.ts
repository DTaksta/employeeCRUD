import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmployeeManagementSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EmployeeManagementSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EmployeeManagementSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeManagementSharedModule {
  static forRoot() {
    return {
      ngModule: EmployeeManagementSharedModule
    };
  }
}
