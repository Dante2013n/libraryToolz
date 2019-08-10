import { Component, OnInit } from '@angular/core';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx'

/*interface ILibro{
  titulo:string;
  autor:string;
  genero:string;
  calificacion:string;
}*/

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) { 
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    //this.encodeData = "https://www.FrakyJolly.com";
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data ' + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
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
