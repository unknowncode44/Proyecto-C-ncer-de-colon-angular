import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Prevican';

  toggled: boolean = false

  constructor(){}

  getToogled(toggle: boolean){
    this.toggled = toggle
  }
}
