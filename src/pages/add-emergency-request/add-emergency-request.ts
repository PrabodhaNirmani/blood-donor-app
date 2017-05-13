import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AppSettings } from "../../providers/app-settings";
import { Blood } from "../../providers/blood";


@IonicPage()
@Component({
  selector: 'page-add-emergency-request',
  templateUrl: 'add-emergency-request.html',
})
export class AddEmergencyRequest {
  districts=this.app.getDistricts();
  data:any;
  successMsg:any;
  errorMsg:any;
  success:any;
  error:any;
  constructor(public navCtrl: NavController,public bloodService:Blood, public app:AppSettings,public loadingCtrl: LoadingController) {
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

  saveRequest(request){
    this.success=true;
    this.error=true;
    setTimeout(()=>{
      this.bloodService.addRequest(request).subscribe(res=>{
        this.data=res;
        if(this.data.success){
          this.successMsg=this.data.message+"... Redirecting...";
          this.success=false;
         
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
