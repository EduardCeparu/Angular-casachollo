import { Component, OnInit } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuIcon = faBars;
  casaChollo:String = "casachollo";
  comprarAlquilar:String = "Comprar|Alquilar";
  misAlertas:String = "Mis Alertas";
  favoritos:String = "Favoritos";
 

  constructor() { }

  ngOnInit(): void {
  }

}
