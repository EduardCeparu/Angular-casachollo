import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-pages',
  templateUrl: './legal-pages.component.html',
  styleUrls: ['./legal-pages.component.css']
})
export class LegalPagesComponent implements OnInit {

  textos:string[] = ['Aviso legal', 'Protección de datos', 'Política de cookies'];

  constructor() { }

  ngOnInit(): void {
  }

}
