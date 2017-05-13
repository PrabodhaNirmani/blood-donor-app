import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppSettings } from "../../providers/app-settings";

@IonicPage()
@Component({
  selector: 'page-emergency-request',
  templateUrl: 'emergency-request.html',
})
export class EmergencyRequest {
  districts:any
  data:any

  constructor(public navCtrl: NavController, public app:AppSettings) {
  }


  getDistricts(){

    this.app.getDistricts().subscribe(res=>{
      this.data=res;
      if(this.data.success){
        this.districts=this.data.districts;
      }
      
    });
  }



}
