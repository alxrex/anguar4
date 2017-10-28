import { Component, OnInit } from '@angular/core';

import { Categoria }        from './catalogos/categoria';
import { CategoriasService } from './catalogos/categorias.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.getCategories()
      .then(categorias => this.categorias = categorias/*.slice(1, 5)*/);
  }
}
