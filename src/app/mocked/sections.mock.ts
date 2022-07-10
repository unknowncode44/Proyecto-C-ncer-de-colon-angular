import { Sections } from "../shared/sidebar/sidebar-models/sidebar.model";


// secciones, seran las que se veran en la barra lateral.
// para modificar los iconos cambiar "ion-md-...", ver lista: https://ionic.io/ionicons/v4
// el atributo active siempre debe de estar en false, ya que manipula el hover

export var mock_sections: Sections[] = [
    { title: 'Ingreso',   icon: 'ion-md-add-circle-outline',    active: false },
    { title: 'Reportes',  icon: 'ion-md-clipboard',             active: false },
    { title: 'Pacientes', icon: 'ion-md-contacts',              active: false },
    { title: 'Otros',     icon: 'ion-md-attach',                active: false }
]
 