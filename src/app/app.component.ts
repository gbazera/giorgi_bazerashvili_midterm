import { Component } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // task 1
  title = 'Giorgi Bazerashvili';

  // task 2
  users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 32 },
    { firstName: 'Joe', lastName: 'Doe', age: 15 },
    { firstName: 'Bob', lastName: 'Smith', age: 45 },
    { firstName: 'Alice', lastName: 'Brown', age: 10 },
  ]

  // task 3
  parentUsers: ParentUser[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', dateOfBirth: new Date(1990, 1, 1), phoneNumber: 123456789, email: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', dateOfBirth: new Date(1990, 1, 1), phoneNumber: 987654321, email: 'jane.doe@example.com' },
    { id: 3, firstName: 'Joe', lastName: 'Doe', dateOfBirth: new Date(1990, 1, 1), phoneNumber: 555123456, email: 'joe.doe@example.com' },
  ]

  // task 4


  childUsers: ChildUser[] = [];
  
  retrieveChildUsers(usrs: ChildUser[]) {
    this.childUsers = usrs;
  }
}
