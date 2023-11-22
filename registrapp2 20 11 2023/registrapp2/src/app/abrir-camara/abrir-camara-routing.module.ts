import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbrirCamaraPage } from './abrir-camara.page';

const routes: Routes = [
  {
    path: '',
    component: AbrirCamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbrirCamaraPageRoutingModule {}
