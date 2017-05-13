import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyRequest } from './emergency-request';

@NgModule({
  declarations: [
    EmergencyRequest,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyRequest),
  ],
  exports: [
    EmergencyRequest
  ]
})
export class EmergencyRequestModule {}
