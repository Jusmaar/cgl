import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioDetalleComponent } from './components/servicio-detalle/servicio-detalle.component';
import { EmpleoComponent } from './components/empleo/empleo.component';
import { ManualComponent } from './components/manual/manual.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
// import { ConocenosComponent } from './components/conocenos/conocenos.component';
// import { NuestrosAutosComponent } from './components/nuestros-autos/nuestros-autos.component';

const APP_ROUTES:Routes = [
    {path : 'home', component:HomeComponent },
    {path : 'contacto', component:ContactoComponent},
    {path : 'nosotros', component: NosotrosComponent},
    {path : 'servicios', component: ServiciosComponent},
    {path : 'servicios/:nombre',component: ServicioDetalleComponent },
    {path : 'empleos', component: EmpleoComponent},
    {path : 'manual' , component: ManualComponent},
    {path : 'herramientas', component:HerramientasComponent },
    // {path: 'conocenos', component:ConocenosComponent},
    // {path: 'nuestros-autos', component:NuestrosAutosComponent},
    {path:'**' , pathMatch:'full' , redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);