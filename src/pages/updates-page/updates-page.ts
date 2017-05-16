import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppSettings } from "../../providers/app-settings";
import { User } from "../../providers/user";

/**
 * Generated class for the UpdatesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-updates-page',
  templateUrl: 'updates-page.html',
})
export class UpdatesPage {
  data:any;
  user:{}={name:"string",last_donation_date:"string",email:"date"};
  safe:any;
  constructor(public navCtrl: NavController, private app:AppSettings,private userService:User,public navParams: NavParams) {
    this.safe=true;
  }

  ionViewWillEnter() {
    var email=this.app.getEmail();
    this.userService.getUserUpdate(email).subscribe(res=>{
      this.data=res;
      if(this.data.success){
        this.user=this.data.user
        if(this.data.user.last_donation_date==null){
          this.safe=false;

        }

      }
      else{
        this.navCtrl.pop()
      }

    })

   
  }

}
