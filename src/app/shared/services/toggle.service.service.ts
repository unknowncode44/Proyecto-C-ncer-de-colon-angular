import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToggleEvent } from './toggle.event';

@Injectable({
  providedIn: 'root'
})



export class ToggleService {

  toggled: boolean = false

  constructor() { }

  toggle(){
    this.toggled = !this.toggled
  }
 
}
