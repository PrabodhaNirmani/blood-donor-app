import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Signup } from './signup';
import { JsonpModule, HttpModule } from "@angular/http/http";

@NgModule({
  declarations: [
    Signup,
  ],
  imports: [
    IonicPageModule.forChild(Signup),
    JsonpModule,
    HttpModule 
  ],
  exports: [
    Signup
  ]
})
export class SignupModule {}
