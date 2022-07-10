import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  @Output() toggleEmit = new EventEmitter<boolean>()

  toggled: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if(!this.toggled){
      this.toggled = !this.toggled
      this.toggleEmit.emit(this.toggled)
    }
    else {
      this.toggled = !this.toggled
      this.toggleEmit.emit(this.toggled)
    }
  }

}
