import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
 count: WritableSignal<number> = signal(0);
 doubleCount: Signal<number> = computed(() => this.count() * 2);
 constructor(){
   effect(() => {
  console.log(`The current count is: ${this.count()}`);
});
 }
  changeValue() {
    this.count.update((value)=>value+1);
   
  }
}
