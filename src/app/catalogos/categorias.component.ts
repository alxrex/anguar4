import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Categoria }                from './categoria';
import { CategoriasService }         from './categorias.service';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: [ './categorias.component.css' ]
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[];
  selectedCategoria: Categoria;

  constructor(
    private categoriasService: CategoriasService,
    private router: Router) { }

  getCategories(): void {
    this.categoriasService
        .getCategories()
        .then(categorias => this.categorias = categorias);
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.categoriasService.create(nombre)
      .then(categoria => {
        this.categorias.push(categoria);
        this.categoriasService = null;
      });
  }

  delete(categoria: Categoria): void {
    this.categoriasService
        .delete(categoria.id)
        .then(() => {
          this.categorias = this.categorias.filter(h => h !== categoria);
          if (this.selectedCategoria === categoria) { this.selectedCategoria = null; }
        });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(categoria: Categoria): void {
    this.selectedCategoria = categoria;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCategoria.id]);
  }
}
