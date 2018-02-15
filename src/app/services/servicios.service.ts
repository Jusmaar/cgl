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
        "https://firebasestorage.googleapis.com/v0/b/plexilabs-e2f3f.appspot.com/o/as.jpg?alt=media&token=cc184b84-4c3d-4317-af29-11d1bbd55d3b"
      ],
      "nameUrl":"TransporteAéreo"
    },
    {
      "id": 1,
      "nombre": "Transporte Terrestre",
      "decripcion": "Fletes terrestres de importacion / exportación con países limitrofes.Nos especializamos en recolección y transporte de carga a domicilio, en toda la república.Realizamos todo tipo de transporte terrestre para carga general, gráneles, consolidados y equipos para carga de dimensiones especiales tanto nacional como internacionalmente.Contamos con una flotilla de cabezales, chassies, furgones y camionetas pequeños con disponibilidad las 24h al día y asi mismo todas nuestras unidades cuentan con equipo de comunicaciones para que verifique la ubicación de su carga.",
      "imagenes": [
        "https://firebasestorage.googleapis.com/v0/b/plexilabs-e2f3f.appspot.com/o/ts.jpg?alt=media&token=bd25b190-0b3b-4d1d-88fe-e6da4cd8af61"
      ],
      "nameUrl": "TransporteTerrestre"
    },
    {
      "id": 2,
      "nombre": "Transporte Marítimo",
      "decripcion": "Carga General/Equipos Especiales. LCL(Less than Container Load): Recibimos la mercancía suelta y somos responsables de su consolidación y asi mismo del vaciado del contenedor para entregar la mercancía al consignatario. FCL(Full Container Load): Recibimos la carga por parte de los proveedores o remitentes y se entrega en el destino que el cliente requiera.",
      "imagenes": [
        "https://firebasestorage.googleapis.com/v0/b/plexilabs-e2f3f.appspot.com/o/ms.jpg?alt=media&token=52563be2-e0c4-45f9-b869-867b10f43381"
      ],
      "nameUrl": "TransporteMarítimo"
    },
    {
      "id": 3,
      "nombre": "Embalaje",
      "decripcion": "Nuestro propósito es conservar y proteger sus bienes facilitando su transporte de una forma segura. Para cumplir esta función protegemos su mercancía con open y closed crates de manera, pallets, cajas de cartón de diferentes tamaños, e-containers y d-containers.",
      "imagenes": [
        "https://firebasestorage.googleapis.com/v0/b/plexilabs-e2f3f.appspot.com/o/es.jpg?alt=media&token=6ee67b3a-9b6b-4811-a320-b5112e4b64a9"
      ],
      "nameUrl": "Embalaje"
    },
    {
      "id": 4,
      "nombre": "Servicio Aduanal",
      "decripcion": "Dispones de una excelente servicio de despacho de aduana y de seguros de mercancías. Además, contamos con la debida infraestructura para realizar todos los trámites y gestiones necesarias ante las autoridades aduaneras, lo cual nos permite operar con rapidez y eficacia las operaciones de importación y exportación.Pick Up: Contamos con un eficiente servicio de recolección de mercadería dentro y fuera de la ciudad.",
      "imagenes": [
        "https://firebasestorage.googleapis.com/v0/b/plexilabs-e2f3f.appspot.com/o/adus.jpg?alt=media&token=4518a093-caea-4973-b495-382919629898"
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
