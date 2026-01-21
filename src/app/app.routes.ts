import { Routes } from '@angular/router';
import { DirectivesComponent } from '../directives/directives.component';
import { SignalsComponent } from '../signals/signals.component';
import { BindingsComponent } from '../bindings/bindings.component';
import { WildCardComponent } from '../wild-card/wild-card.component';
import { FormComponent } from '../form/form.component';

export const routes: Routes = [
     {
        path:'',
        pathMatch:'full',
        redirectTo:'form'
       
    },
    {
        path:'home',
        component:DirectivesComponent
    },
    {
        path:'form',
        component:FormComponent
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
