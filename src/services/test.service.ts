import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  a = 10;
  constructor() { }
  change(){
    this.a = 20;
  }
}
