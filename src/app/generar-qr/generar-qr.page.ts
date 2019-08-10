import { Component, OnInit } from '@angular/core';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx'

interface ILibro{
  titulo:string;
  autor:string;
  genero:string;
  calificacion:string;
}

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  titulo:string;
  Autor:string;
  Genero:string;
  Calificacion:string;

  constructor(private barcodeScanner: BarcodeScanner) { 
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    this.encodeData =this.titulo;
  }


  encodedText(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
      this.encodeData = encodedData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

  ngOnInit() {
  }

}
