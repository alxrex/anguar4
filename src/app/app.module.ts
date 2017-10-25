import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';

import { CategoriasComponent }  	from './catalogos/categorias.component';
import { CategoriaDetailComponent } from './catalogos/categoria-detail.component';
import { CategoriasService }   		from './catalogos/categorias.service';
import { CategoriaSearchComponent }  from './catalogos/categoria-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriasComponent,
    CategoriaDetailComponent,
    CategoriaSearchComponent
  ],
  providers: [ CategoriasService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
