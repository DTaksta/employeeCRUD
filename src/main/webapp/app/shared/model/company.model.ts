import { IEmployee } from 'app/shared/model/employee.model';

export interface ICompany {
  id?: number;
  name?: string;
  vatNumber?: string;
  addressPhysical?: string;
  addressPostal?: string;
  telephoneNumber?: string;
  employees?: IEmployee[];
}

export class Company implements ICompany {
  constructor(
    public id?: number,
    public name?: string,
    public vatNumber?: string,
    public addressPhysical?: string,
    public addressPostal?: string,
    public telephoneNumber?: string,
    public employees?: IEmployee[]
  ) {}
}
