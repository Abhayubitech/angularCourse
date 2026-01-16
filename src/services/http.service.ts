import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient)
  data = new Subject<any>()
  constructor() { }
  fetchData(){
   this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((item)=>{
    this.data.next(item)
   })
  }
 
}
