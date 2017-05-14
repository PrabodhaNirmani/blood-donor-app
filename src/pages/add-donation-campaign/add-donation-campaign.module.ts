import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDonationCampaign } from './add-donation-campaign';

@NgModule({
  declarations: [
    AddDonationCampaign,
  ],
  imports: [
    IonicPageModule.forChild(AddDonationCampaign),
  ],
  exports: [
    AddDonationCampaign
  ]
})
export class AddDonationCampaignModule {}
