import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppSettings } from "../../providers/app-settings";
import { AddEmergencyRequest } from "../add-emergency-request/add-emergency-request";

@IonicPage()
@Component({
  selector: 'page-emergency-request',
  templateUrl: 'emergency-request.html',
})
export class EmergencyRequest {
  districts=this.app.getDistricts();
  data:any;
  successMsg:any;
  errorMsg:any;
  success:any;
  error:any;
  constructor(public navCtrl: NavController, public app:AppSettings) {
    this.success=true;
    this.error=true;
    
    
  }

  onLoadAddPage(){
    this.navCtrl.push(AddEmergencyRequest)

  }


  


}
