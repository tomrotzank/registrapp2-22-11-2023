import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaAyudaPageRoutingModule } from './mesa-ayuda-routing.module';

import { MesaAyudaPage } from './mesa-ayuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaAyudaPageRoutingModule
  ],
  declarations: [MesaAyudaPage]
})
export class MesaAyudaPageModule {}
