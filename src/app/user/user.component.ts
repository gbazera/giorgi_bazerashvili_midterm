import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private displayService: DisplayService) { }

  @Input() parentUsers: ParentUser[] = [];

  users: ChildUser[] = [
    { id: 1, firstName: 'Jack', lastName: 'Doe', dateOfBirth: new Date(1990, 1, 1), phoneNumber: 123456789, email: 'john.doe@example.com' },
    { id: 2, firstName: 'Bob', lastName: 'Doe', dateOfBirth: new Date(1990, 1, 1), phoneNumber: 987654321, email: 'jane.doe@example.com' },
    { id: 3, firstName: 'IDK', lastName: 'Doe', dateOfBirth: new Date(1990, 1, 1), phoneNumber: 555123456, email: 'joe.doe@example.com' },
  ]

  @Output() usersEvent = new EventEmitter<ChildUser[]>();
  
  ngOnInit(){
    this.usersEvent.emit(this.users);
  }

  displayUsers() {
    this.displayService.displayArray(this.users);
  }
}
