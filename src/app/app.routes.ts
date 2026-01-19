import { Routes } from '@angular/router';
import { DirectivesComponent } from '../directives/directives.component';
import { SignalsComponent } from '../signals/signals.component';
import { BindingsComponent } from '../bindings/bindings.component';
import { WildCardComponent } from '../wild-card/wild-card.component';

export const routes: Routes = [
     {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
       
    },
    {
        path:'home',
        component:DirectivesComponent
    },
    {
        path:'signals',
        component:SignalsComponent
    },
    {
        path:'**',
        component:WildCardComponent
    }
];
