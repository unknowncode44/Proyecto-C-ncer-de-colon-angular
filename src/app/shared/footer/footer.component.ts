import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent implements OnInit {

  collapsed: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  collapse(){
    if(this.collapsed){
      this.collapsed = !this.collapsed
    }

    else {
      this.collapsed = !this.collapsed
    }
  }

}
