import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovapaginaPage } from './novapagina.page';

const routes: Routes = [
  {
    path: '',
    component: NovapaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovapaginaPageRoutingModule {}
