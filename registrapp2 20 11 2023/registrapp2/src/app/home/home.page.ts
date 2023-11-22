import { Component,ViewChild,ElementRef} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {

  }

  public mensaje=""

  user = {
    usuario: "",
    password: ""
  }

  
  iniciarSesion() {
      this.router.navigate(['/login']);
  }

}
