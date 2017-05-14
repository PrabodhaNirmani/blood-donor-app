import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { EventHandler } from "../../providers/event-handler";
import { AppSettings } from "../../providers/app-settings";


@IonicPage()
@Component({
  selector: 'page-add-donation-campaign',
  templateUrl: 'add-donation-campaign.html',
})
export class AddDonationCampaign {
  districts=this.app.getDistricts();
  data:any;
  successMsg:any;
  errorMsg:any;
  success:any;
  error:any;
  constructor(public navCtrl: NavController,public eventService:EventHandler, public app:AppSettings,public loadingCtrl: LoadingController) {
    this.success=true;
    this.error=true;
    
    
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  saveRequest(campaign){
    this.success=true;
    this.error=true;
    this.presentLoading();
    setTimeout(()=>{
      this.eventService.addDonationCampaign(campaign).subscribe(res=>{
        this.data=res;
        if(this.data.success){
          this.successMsg=this.data.message+"... Redirecting...";
          this.success=false;
          if(this.data.donors){
            //this is the sending notification part
            console.log(this.data.donors)
          }
          else{
            console.log("no donors")
          }
         
          setTimeout(()=>{
            this.navCtrl.pop();
          },3000);
        }
        else{
          this.errorMsg=this.data.message;
          this.error=false;
        }
      });

        

    },3000);
    


  }

}
