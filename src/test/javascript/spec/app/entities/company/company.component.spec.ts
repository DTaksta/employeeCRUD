/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { EmployeeManagementTestModule } from '../../../test.module';
import { CompanyComponent } from 'app/entities/company/company.component';
import { CompanyService } from 'app/entities/company/company.service';
import { Company } from 'app/shared/model/company.model';

describe('Component Tests', () => {
  describe('Company Management Component', () => {
    let comp: CompanyComponent;
    let fixture: ComponentFixture<CompanyComponent>;
    let service: CompanyService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EmployeeManagementTestModule],
        declarations: [CompanyComponent],
        providers: []
      })
        .overrideTemplate(CompanyComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CompanyComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CompanyService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Company(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.companies[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
