import { Moment } from 'moment';
import { ICompany } from 'app/shared/model/company.model';

export interface IEmployee {
  id?: number;
  names?: string;
  lastName?: string;
  dateOfBirth?: Moment;
  addressPhysical?: string;
  addressPostal?: string;
  telephoneNumber?: string;
  employeeNumber?: string;
  company?: ICompany;
}

export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public names?: string,
    public lastName?: string,
    public dateOfBirth?: Moment,
    public addressPhysical?: string,
    public addressPostal?: string,
    public telephoneNumber?: string,
    public employeeNumber?: string,
    public company?: ICompany
  ) {}
}
