import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.component.html',
  styleUrls: ['./servicio-detalle.component.scss']
})
export class ServicioDetalleComponent implements OnInit {
  
  servicio:any={};

  constructor(private _activatedRoute: ActivatedRoute,
              private _serviciosService: ServiciosService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      console.log(params['nombre'])      
      this.servicio = this._serviciosService.getAutosNameUrl(params['nombre']);
      console.log(params['nombre'])
      console.log(this.servicio);
    })
  }

}
