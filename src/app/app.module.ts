import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ProductoComponent } from './producto/producto.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'usuario/:id', component: UsuarioComponent},
    {path:  'detalle', component: DetalleComponent},
    {path: 'detalle/:id/:nombre', component: DetalleComponent},
    {path: 'producto', component: ProductoComponent},
    {path: '**', component: PaginaErrorComponent}];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    DetalleComponent,
    ProductoComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
