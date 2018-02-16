import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { ManualComponent } from './components/manual/manual.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
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
    EmpleoComponent,
    ManualComponent,
    HerramientasComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PdfViewerModule,
    FormsModule,
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
// platformBrowserDynamic().bootstrapModule(AppModule);

