import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BgColorDirective } from '../directives/bg-color.directive';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,BgColorDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


 form = new FormGroup({
      name : new FormControl('',[Validators.required]),
      email : new FormControl(''),
      password : new FormControl({value:'', disabled: true},[Validators.required]),
      gender:new FormControl('')
  })


  submit(){
    console.log(this.form)
  }
}
