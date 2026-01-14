import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from "../signals/signals.component";
import { ComponentsComponent } from "../components/components.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsComponent, ComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularCourse';
  
}
