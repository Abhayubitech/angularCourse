import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor() { }
 @HostBinding('style.backgroundColor') bgColor:string='red';
}
