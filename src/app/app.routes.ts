import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { ConocenosComponent } from './components/conocenos/conocenos.component';
// import { NuestrosAutosComponent } from './components/nuestros-autos/nuestros-autos.component';

const APP_ROUTES:Routes = [
    {path : 'home', component:HomeComponent },
    // {path: 'conocenos', component:ConocenosComponent},
    // {path: 'nuestros-autos', component:NuestrosAutosComponent},
    {path:'**' , pathMatch:'full' , redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);