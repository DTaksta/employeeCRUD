import { Moment } from 'moment';

export interface IPerson {
  id?: number;
  names?: string;
  lastName?: string;
  dateOfBirth?: Moment;
  addressPhysical?: string;
  addressPostal?: string;
  telephoneNumber?: string;
}

export class Person implements IPerson {
  constructor(
    public id?: number,
    public names?: string,
    public lastName?: string,
    public dateOfBirth?: Moment,
    public addressPhysical?: string,
    public addressPostal?: string,
    public telephoneNumber?: string
  ) {}
}
