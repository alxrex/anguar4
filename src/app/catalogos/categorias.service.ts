import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Categoria } from './categoria';

@Injectable()
export class CategoriasService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private categoriasUrl = "http://localhost/restaurant/public/api/categoria";  // URL to web api
  //data: any = {};

  constructor(private http: Http) { }

  /*getData():any {
    return this.http.get(this.categoriasUrl)
    .map((res:Response)=> res.json());
  }

  getCategories():any {
    this.getData().subscribe(data=>{
      console.log(data);
      this.data = data;
    });
  }
*/
  getCategories(): Promise<Categoria[]> {
    console.log("DESDE SERVICE");
    console.log("Ruta: "+this.categoriasUrl);
    return this.http.get(this.categoriasUrl)
               .toPromise()
               .then(response => response.json() as Categoria[])
               .catch(this.handleError);
  }


  getCategoria(id: number): Promise<Categoria> {
    const url = `${this.categoriasUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Categoria)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.categoriasUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(nombre: string): Promise<Categoria> {
    return this.http
      .post(this.categoriasUrl, JSON.stringify({nombre: nombre}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Categoria)
      .catch(this.handleError);
  }

  update(categoria: Categoria): Promise<Categoria> {
    const url = `${this.categoriasUrl}/${categoria.id}`;
    return this.http
      .put(url, JSON.stringify(categoria), {headers: this.headers})
      .toPromise()
      .then(() => categoria)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

