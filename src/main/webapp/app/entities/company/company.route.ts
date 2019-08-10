import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Company } from 'app/shared/model/company.model';
import { CompanyService } from './company.service';
import { CompanyComponent } from './company.component';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyUpdateComponent } from './company-update.component';
import { CompanyDeletePopupComponent } from './company-delete-dialog.component';
import { ICompany } from 'app/shared/model/company.model';

@Injectable({ providedIn: 'root' })
export class CompanyResolve implements Resolve<ICompany> {
  constructor(private service: CompanyService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICompany> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Company>) => response.ok),
        map((company: HttpResponse<Company>) => company.body)
      );
    }
    return of(new Company());
  }
}

export const companyRoute: Routes = [
  {
    path: '',
    component: CompanyComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Companies'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: CompanyDetailComponent,
    resolve: {
      company: CompanyResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Companies'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: CompanyUpdateComponent,
    resolve: {
      company: CompanyResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Companies'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: CompanyUpdateComponent,
    resolve: {
      company: CompanyResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Companies'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const companyPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: CompanyDeletePopupComponent,
    resolve: {
      company: CompanyResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Companies'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
