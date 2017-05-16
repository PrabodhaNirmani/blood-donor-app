import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppSettings } from "../../providers/app-settings";
import { User } from "../../providers/user";

@IonicPage()
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html',
})
export class DetailPage {

  user:{}={name:"string",email:"string",abo:"string",rh:"string",donaion_count:"date",last_donaiton_date:"date"};
  data:any;

  constructor(public navCtrl: NavController,private app:AppSettings,private userService:User) {
  }

  ionViewWillEnter() {
    var email=this.app.getEmail();
    this.userService.getUser(email).subscribe(res=>{
      this.data=res;
      if(this.data.success){
        this.user=this.data.user

      }
      else{
        this.navCtrl.pop()
      }

    })


    
  }


}
