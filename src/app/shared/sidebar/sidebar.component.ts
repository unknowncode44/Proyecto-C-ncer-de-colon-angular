import { Component, OnInit } from '@angular/core';
import { BrandName, Sections } from './sidebar-models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // declaramos una lista de secciones

  sections: Sections[] = [
    { title: 'Ingreso',    icon: '' },
    { title: 'Reportes',   icon: '' },
    { title: 'Pacientes',  icon: '' },
    { title: 'Otros',      icon: '' }
  ];

  // declaramos el nombre de la marca y el logo

  brand: BrandName = {
    title : 'Prevican',
    logo  : '../../../assets/icons/logo-ejemplo.svg'
  }



  constructor() { }

  ngOnInit(): void {
  }

}
