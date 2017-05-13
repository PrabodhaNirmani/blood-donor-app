import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Login } from '../login/login';
import { DonationCampaign } from '../donation-campaign/donation-campaign';
import { EmergencyRequest } from '../emergency-request/emergency-request';
import { SearchBlood } from '../search-blood/search-blood';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onLoadLogin(){
    this.navCtrl.push(Login);

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



}
