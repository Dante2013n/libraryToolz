import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(public afAuth: AngularFireAuth,) { }

  ngOnInit() {
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

}
