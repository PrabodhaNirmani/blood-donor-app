import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { EventHandler } from "../../providers/event-handler";
import { AddDonationCampaign } from "../add-donation-campaign/add-donation-campaign";
import { AppSettings } from "../../providers/app-settings";
import { Place } from "../place/place";


@IonicPage()
@Component({
  selector: 'page-donation-campaign',
  templateUrl: 'donation-campaign.html',
})
export class DonationCampaign {
  data:any;
  campaigns:{}[]=[];
  
  constructor(private modalCtrl:ModalController,public navCtrl: NavController,private eventService:EventHandler) {
      
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

  onOpenPlace(campaign){
    this.modalCtrl.create(Place,campaign).present();

  }

}
