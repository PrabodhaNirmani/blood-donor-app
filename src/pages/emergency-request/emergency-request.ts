import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppSettings } from "../../providers/app-settings";
import { AddEmergencyRequest } from "../add-emergency-request/add-emergency-request";
import { EventHandler } from "../../providers/event-handler";

@IonicPage()
@Component({
  selector: 'page-emergency-request',
  templateUrl: 'emergency-request.html',
})
export class EmergencyRequest {
 
  data:any;
  requests:{}[]=[];
  

  constructor(public navCtrl: NavController,public eventService:EventHandler) {
    
    
  }

  onLoadAddPage(){
    this.navCtrl.push(AddEmergencyRequest)

  }
  ionViewWillEnter(){
    this.eventService.getRequests().subscribe(res=>{
        this.data=res;
        this.requests=this.data.requests;
    });
  }


  


}
