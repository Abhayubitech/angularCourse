
import { DatePipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TestService } from '../services/test.service';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,SlicePipe,RouterLink],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
 textClass = false;
 http = inject(HttpService)
 route = inject(Router)
 subs:Subscription
 constructor(public test:TestService){
 this.subs = this.http.data.subscribe((item)=>{
   alert('lasldjflksd')
  })
 }
 changeClass(){
  const abc ='asdf'
  
  this.textClass = !this.textClass
 }
 date = new Date()
 array = [12,3,3,3,4,3]
 ngOnDestroy(): void {
 
  this.subs.unsubscribe()
  alert('component destroyed')
 }
 navigateToSignals(){
  this.route.navigate(['signals'])
 }
}
