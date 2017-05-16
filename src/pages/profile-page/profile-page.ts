import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppSettings } from "../../providers/app-settings";
import { User } from "../../providers/user";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {

  user:{}={name:"string",nic_no:"string",address:"string",tele_no:"string",email:"date"};
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
