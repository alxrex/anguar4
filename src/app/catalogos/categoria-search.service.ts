import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Categoria }           from './categoria';

@Injectable()
export class CategoriaSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Categoria[]> {
    return this.http
               .get(`http://localhost/restaurant/public/api/categoria/?name=${term}`)
               .map(response => response.json().data as Categoria[]);
  }
}
