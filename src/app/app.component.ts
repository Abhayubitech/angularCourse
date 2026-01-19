import { Component, EventEmitter, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignalsComponent } from "../signals/signals.component";
import { ComponentsComponent } from "../components/components.component";
import { BindingsComponent } from "../bindings/bindings.component";
import { DirectivesComponent } from "../directives/directives.component";
import { TestService } from '../services/test.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsComponent, ComponentsComponent, BindingsComponent, DirectivesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularCourse';
  //  logData(event:Event){
  //  console.log(event)
  //  }
  show = true
  test  = inject(TestService)
  http = inject(HttpService)
  constructor(){
    this.http.data.subscribe((item)=>{
      console.log(item)
    })
    setTimeout(() => {
       this.show = false
    }, 5000);
  }
  changeData(){
    this.test.change()
    this.http.fetchData()
  }
   logData(event:string){
   console.log(event)
   }
}
