import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Escanear Libro',
      url: '/escaner',
      icon: 'qr-scanner'
    },
    {
      title: 'Generar QR para libros nuevos',
      url: '/generar-qr',
      icon: 'book'
    },
    {
      title: 'Mi cuenta',
      url: '/ajustes',
      icon: 'person'
    }

  ];

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private barcodeScanner: BarcodeScanner
  ) {
    this.initializeApp();

    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.encodeData = "https://www.FrakyJolly.com";
    });
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
}
