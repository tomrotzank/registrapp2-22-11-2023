import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificarService } from '../Servicio/autentificacion.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  nombre = '';
  constructor(private router: Router, private auth: AutentificarService) {

  }
  public estado: String = "";
  public mensaje=""

  user = {
    usuario: "",
    password: ""
  }

  
  iniciarSesion() {
      this.router.navigate(['/iniciar-sesion']);
  }

  recuperarContrasena() {
      this.router.navigate(['/recuperar-contrasena']);
}

cancel() {
  this.modal.dismiss(null, 'cancel');
}

enviainfor() {
  this.auth.login(this.user.usuario, this.user.password).then(() => {
    if (this.auth.funcional) {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      }
      this.router.navigate(['/login'], navigationExtras);
    } else {
      this.mensaje = "Debe ingresar sus credenciales";
    }
    });
}
confirm() {
  this.auth.register(this.user.usuario, this.user.password).then((res) => {
    if (res) {
      this.estado = "Usuario Existente";
    } else {
      this.mensaje = "Registro Exitoso";
      this.modal.dismiss(this.user.usuario, 'confirm');
    }
  })
}

onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;
  if (ev.detail.role === 'confirm') {
    this.mensaje = `Hello, ${ev.detail.data}!`;
  }
}
}