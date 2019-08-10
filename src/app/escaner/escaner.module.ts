import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscanerPage } from './escaner.page';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

const routes: Routes = [
  {
    path: '',
    component: EscanerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BarcodeScanner
  ],
  declarations: [EscanerPage]
})
export class EscanerPageModule {}
