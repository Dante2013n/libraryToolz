import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public afAuth: AngularFireAuth,) { }

  ngOnInit() {
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

}
