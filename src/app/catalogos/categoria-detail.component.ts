import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Categoria }        from './Categoria';
import { CategoriaService } from './Categoria.service';

@Component({
  selector: 'caegoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: [ './categoria-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  categoria: Hero;

  constructor(
    private categoriaService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.categoriaService.getHero(+params.get('id')))
      .subscribe(categoria => this.categoria = categoria);
  }

  save(): void {
    this.categoriaService.update(this.categoria)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
