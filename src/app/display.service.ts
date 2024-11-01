import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  displayArray(arr: any[]) {
    console.log('Array is displayed by Display service');

    for(let a of arr) {
      // let e = document.createElement("p");

      // if(a.firstName && a.lastName) {
      //   e.innerHTML = a.firstName + " " + a.lastName;
      // }else{
      //   e.innerHTML = a;
      // }
      
      // document.body.appendChild(e);

      console.log(a);
    }
  }
}
