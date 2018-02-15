import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { AgmCoreModule } from '@agm/core';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServicioDetalleComponent } from './components/servicio-detalle/servicio-detalle.component'

import { ServiciosService } from './services/servicios.service';
import { EmpleoComponent } from './components/empleo/empleo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    ServiciosComponent,
    NosotrosComponent,
    ServicioDetalleComponent,
    EmpleoComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgPba9ENKjx2AD7IOG2SIFN3x5WYAKqo4'
    }),
    // NgModule,
    APP_ROUTING
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
