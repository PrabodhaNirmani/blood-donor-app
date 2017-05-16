import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Message } from "../message/message";
import { DonationCampaign } from "../donation-campaign/donation-campaign";
import { EmergencyRequest } from "../emergency-request/emergency-request";
import { SearchBlood } from "../search-blood/search-blood";
import { DetailPage } from "../detail-page/detail-page";
import { ProfilePage } from "../profile-page/profile-page";
import { UpdatesPage } from "../updates-page/updates-page";



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  constructor(public navCtrl:NavController) {
  }


  onLoadMessagePage(){
    this.navCtrl.push(Message)

  }
  onLoadDoantionCampaign(){
    this.navCtrl.push(DonationCampaign);
  }

  onLoadEmergencyRequest(){
    this.navCtrl.push(EmergencyRequest);
  }

  onLoadSearchBlood(){
    this.navCtrl.push(SearchBlood);
  }

  onLoadDetailCampaign(){
    this.navCtrl.push(DetailPage);
  }

  onLoadProfileRequest(){
    this.navCtrl.push(ProfilePage);
  }

  onLoadUpdatesBlood(){
    this.navCtrl.push(UpdatesPage);
  }



}

