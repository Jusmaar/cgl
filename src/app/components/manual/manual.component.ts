import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  pdfSrc: string = '../assets/files/manual.pdf';
  constructor() { }

  ngOnInit() {
  }

}
