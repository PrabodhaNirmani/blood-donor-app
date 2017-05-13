import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationCampaign } from './donation-campaign';

@NgModule({
  declarations: [
    DonationCampaign,
  ],
  imports: [
    IonicPageModule.forChild(DonationCampaign),
  ],
  exports: [
    DonationCampaign
  ]
})
export class DonationCampaignModule {}
