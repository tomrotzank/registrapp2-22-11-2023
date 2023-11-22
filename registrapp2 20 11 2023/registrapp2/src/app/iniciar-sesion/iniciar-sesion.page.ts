import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volverAHome(){
    this.router.navigate(['/login']);
}

  abrirCamara() {
    this.router.navigate(['/abrir-camara']);
  }
}
