import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  // title: string = 'My first AGM project';
  lat1: number = -2.1269113;
  lng1: number = -79.90563250000002;

  lat2: number = -0.1804399;
  lng2: number = -78.48724270000002;

  // lat3: number = -13.7115745;
  // lng3: number = -76.20562770000004;

  // lat4: number = -17.0054057;
  // lng4: number = -72.10014339999998;

  // lat5: number = -12.0658769;
  // lng5: number = -77.1558245;

  // lat6: number = -13.7115745;
  // lng6: number = -76.20562770000004;

  zoom: number = 7;
  constructor() { }

  ngOnInit() {
  }

}
