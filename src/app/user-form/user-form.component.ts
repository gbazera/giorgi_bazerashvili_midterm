import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  users: User[] = [];

  constructor(private fb : FormBuilder) {}
  
  form = this.fb.group({
    id: [0, Validators.required],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    dateOfBirth: [new Date(), Validators.required],
    phoneNumber: [0, [Validators.required, Validators.minLength(9)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(8)]]
  });

  addUser() {
    this.users.push(this.form.value as User)
    console.log(this.form.value);
  }
}
