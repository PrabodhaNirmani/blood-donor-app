import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBlood } from './search-blood';

@NgModule({
  declarations: [
    SearchBlood,
  ],
  imports: [
    IonicPageModule.forChild(SearchBlood),
  ],
  exports: [
    SearchBlood
  ]
})
export class SearchBloodModule {}
