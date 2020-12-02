import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuariosPage } from './usuarios';

@NgModule({
  declarations: [
    UsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuariosPage),
  ],
})
export class UsuariosPageModule {}
