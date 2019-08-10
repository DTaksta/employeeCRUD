import { NgModule } from '@angular/core';

import { EmployeeManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [EmployeeManagementSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [EmployeeManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EmployeeManagementSharedCommonModule {}
