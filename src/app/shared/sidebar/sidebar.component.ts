import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { mock_sections } from 'src/app/mocked/sections.mock';
import { BrandName, Sections } from './sidebar-models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // recibimos informacion de si la barra lateral esta expandida o collapsada
  @Input() toggled?: boolean

  // declaramos una lista de secciones

  sections: Sections[] = mock_sections;

  // declaramos el nombre de la marca y el logo

  brand: BrandName = {
    title: 'Prevican',
    logo: '../../../assets/icons/logo-ejemplo.svg'
  }

  logOut: Sections = { 
    title: 'Salir', 
    icon: 'ion-md-log-out',    
    active: false 
  };



  constructor(
   ) { }

  ngOnInit(): void {
  }


  // esta funcion hace que lo que seleccionemos en el sidebar quede resaltado
  hoverActiveSection(section: Sections){

    // primero chequeamos si la opcion salir no es la que estamos clickeando
    if(section.title !== 'Salir'){
      // si no lo es y la misma esta seleccionada, la des seleccionamos
      this.logOut.active = false
    }
    // luego nos aseguramos deseleccionar todas las otras secciones
    this.sections.forEach(section => {
      section.active = false
    })

    // finalmente seleccionamos a cual hicimos click cambiando el booleano.
    section.active = !section.active
  }

}
