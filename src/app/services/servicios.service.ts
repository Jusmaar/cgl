import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ServiciosService {

  private servicios: any[] = [
    {
      "id":0,
      "nombre":"Transporte Aéreo",
      "decripcion":"El transporte aéreo de carga, se hace de una manera rápida y eficaz, nuestros servicios de Carga Regular y de Carga Express de mercancías no tienen límites de peso o cantidad, desde y hacia cualquier parte del mundo.",
      "imagenes":[
        "./assets/imgs/As.jpg"
      ],
      "nameUrl":"TransporteAéreo"
    },
    {
      "id": 1,
      "nombre": "Transporte Terrestre",
      "decripcion": "Fletes terrestres de importacion / exportación con países limitrofes.Nos especializamos en recolección y transporte de carga a domicilio, en toda la república.Realizamos todo tipo de transporte terrestre para carga general, gráneles, consolidados y equipos para carga de dimensiones especiales tanto nacional como internacionalmente.Contamos con una flotilla de cabezales, chassies, furgones y camionetas pequeños con disponibilidad las 24h al día y asi mismo todas nuestras unidades cuentan con equipo de comunicaciones para que verifique la ubicación de su carga.",
      "imagenes": [
        "./assets/imgs/Ts.jpg"
      ],
      "nameUrl": "TransporteTerrestre"
    },
    {
      "id": 2,
      "nombre": "Transporte Marítimo",
      "decripcion": "Carga General/Equipos Especiales. LCL(Less than Container Load): Recibimos la mercancía suelta y somos responsables de su consolidación y asi mismo del vaciado del contenedor para entregar la mercancía al consignatario. FCL(Full Container Load): Recibimos la carga por parte de los proveedores o remitentes y se entrega en el destino que el cliente requiera.",
      "imagenes": [
        "./assets/imgs/Ms.jpg"
      ],
      "nameUrl": "TransporteMarítimo"
    },
    {
      "id": 3,
      "nombre": "Embalaje",
      "decripcion": "Nuestro propósito es conservar y proteger sus bienes facilitando su transporte de una forma segura. Para cumplir esta función protegemos su mercancía con open y closed crates de manera, pallets, cajas de cartón de diferentes tamaños, e-containers y d-containers.",
      "imagenes": [
        "./assets/imgs/Es.jpg"
      ],
      "nameUrl": "Embalaje"
    },
    {
      "id": 4,
      "nombre": "Servicio Aduanal",
      "decripcion": "Dispones de una excelente servicio de despacho de aduana y de seguros de mercancías. Además, contamos con la debida infraestructura para realizar todos los trámites y gestiones necesarias ante las autoridades aduaneras, lo cual nos permite operar con rapidez y eficacia las operaciones de importación y exportación.Pick Up: Contamos con un eficiente servicio de recolección de mercadería dentro y fuera de la ciudad.",
      "imagenes": [
        "./assets/imgs/Adus.jpg"
      ],
      "nameUrl": "ServicioAduanal"
    }
  ];


  constructor(
  ) { }

  
  getAutos() {
    return this.servicios;
  }
  getAutosNameUrl(nombre) {
    for (let i = 0; i < 12; i++) {
      if (this.servicios[i].nameUrl === nombre) {
        return this.servicios[i];
      }
      // return this.autos[i].nameUrl=nombre;
    }
  }



}
