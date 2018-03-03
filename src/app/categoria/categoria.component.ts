import { Component, OnInit } from '@angular/core';

import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: any = [];

  constructor( private categoriaService: CategoriaService ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.categoriaService.listar()
    .subscribe( dados => (this.categorias = dados));
  }
}
