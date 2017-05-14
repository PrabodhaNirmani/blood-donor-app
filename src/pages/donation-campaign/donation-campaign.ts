import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventHandler } from "../../providers/event-handler";
import { AddDonationCampaign } from "../add-donation-campaign/add-donation-campaign";
import { AppSettings } from "../../providers/app-settings";


@IonicPage()
@Component({
  selector: 'page-donation-campaign',
  templateUrl: 'donation-campaign.html',
})
export class DonationCampaign {
  data:any;
  campaigns:{}[]=[];
  
  constructor(public navCtrl: NavController,public eventService:EventHandler) {
      
  }

  onLoadAddPage(){
    this.navCtrl.push(AddDonationCampaign)

  }
  
  ionViewWillEnter(){
    this.eventService.getDonationCampaigns().subscribe(res=>{
        this.data=res;
        this.campaigns=this.data.campaigns;
    });
  }

}
