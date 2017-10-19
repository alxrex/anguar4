import { Component }          from '@angular/core';

@Component({
  selector: 'appPOS',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/categorias" routerLinkActive="active">Categorias</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Catalogos';
}
