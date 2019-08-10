/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { EmployeeManagementTestModule } from '../../../test.module';
import { PersonComponent } from 'app/entities/person/person.component';
import { PersonService } from 'app/entities/person/person.service';
import { Person } from 'app/shared/model/person.model';

describe('Component Tests', () => {
  describe('Person Management Component', () => {
    let comp: PersonComponent;
    let fixture: ComponentFixture<PersonComponent>;
    let service: PersonService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EmployeeManagementTestModule],
        declarations: [PersonComponent],
        providers: []
      })
        .overrideTemplate(PersonComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PersonComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PersonService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Person(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.people[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
