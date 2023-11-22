import { Component, ElementRef, ViewChildren, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})

export class RecuperarContrasenaPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController, private router: Router) { }


  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  ngOnInit() {
  }

  volverAHome(){
    this.router.navigate(['/login']);
}

play() {
  this.animation.play();
}

pause() {
  this.animation.pause();
}

stop() {
  this.animation.stop();
}

}
