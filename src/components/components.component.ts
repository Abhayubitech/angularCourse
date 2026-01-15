import { Component, EventEmitter, input, Input, Output, signal, WritableSignal } from '@angular/core';
import { OnInit ,OnChanges,DoCheck,AfterContentInit,AfterViewChecked,AfterViewInit,AfterContentChecked,OnDestroy} from '@angular/core';
@Component({
  selector: 'app-components',
  imports: [],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

title = input('')
@Output() data = new EventEmitter()

  array:WritableSignal<string[]> = signal([])
constructor(){
  this.array().push('constructor run')
}
ngOnInit(): void {
  this.array().push('ngOnInit run')
}
ngOnChanges(): void {
 this.array().push('ngOnChanges run')
}
ngDoCheck(): void {
  this.array().push('ngDoCheck run')
}
ngAfterContentInit(): void {
   this.array().push('ngAfterContentInit run')
}
ngAfterContentChecked(): void {
  this.array().push('ngAfterContentChecked run')
}
ngAfterViewInit(): void {
  this.array().push('ngAfterViewInit run')
}
ngAfterViewChecked(): void {
  this.array().push('ngAfterViewChecked run')
}
ngOnDestroy(): void {
    this.array().push('ngOnDestroy run')
}
emitEvent(){
  this.data.emit('hello')
}
}
