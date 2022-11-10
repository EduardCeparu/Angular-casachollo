import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  opciones:string[] = ['Comprar', 'Alquilar', 'Obra nueva', 'Alquilar']

  constructor() { }

  ngOnInit(): void {
  }

}
