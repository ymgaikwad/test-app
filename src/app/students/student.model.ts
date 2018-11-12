import { Ingredient } from '../shared/ingredient.model';

export class Student {
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public address: string;

  constructor(firstName: string, middleName: string, lastName: string, address: string) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.address = address;
  }
}
