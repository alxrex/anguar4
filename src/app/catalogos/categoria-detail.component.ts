<<<<<<< HEAD
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Categoria }        from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'caegoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: [ './categoria-detail.component.css' ]
})
export class CategoriaDetailComponent implements OnInit {
	categoria: Categoria;

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.categoriasService.getCategoria(+params.get('id')))
      .subscribe(categoria => this.categoria = categoria);
  }

  save(): void {
    this.categoriasService.update(this.categoria)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
=======
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Categoria }        from './Categoria';
import { CategoriasService } from './Categorias.service';

@Component({
  selector: 'caegoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: [ './categoria-detail.component.css' ]
})
export class CategoriaDetailComponent implements OnInit {
	categoria: Categoria;

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.categoriasService.getCategoria(+params.get('id')))
      .subscribe(categoria => this.categoria = categoria);
  }

  save(): void {
    this.categoriasService.update(this.categoria)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
>>>>>>> a03fd49a210f1239ccb75b3145f989662a25012f
