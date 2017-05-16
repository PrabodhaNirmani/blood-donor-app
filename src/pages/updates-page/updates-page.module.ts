import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatesPage } from './updates-page';

@NgModule({
  declarations: [
    UpdatesPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatesPage),
  ],
  exports: [
    UpdatesPage
  ]
})
export class UpdatesPageModule {}
