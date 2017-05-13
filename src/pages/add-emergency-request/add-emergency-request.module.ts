import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEmergencyRequest } from './add-emergency-request';

@NgModule({
  declarations: [
    AddEmergencyRequest,
  ],
  imports: [
    IonicPageModule.forChild(AddEmergencyRequest),
  ],
  exports: [
    AddEmergencyRequest
  ]
})
export class AddEmergencyRequestModule {}
