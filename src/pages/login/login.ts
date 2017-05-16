import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Signup } from "../signup/signup";
import { User } from "../../providers/user";
import { Dashboard } from "../dashboard/dashboard";
import { AppSettings } from "../../providers/app-settings";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  data:any;
  successMsg:any;
  errorMsg:any;
  success:any;
  error:any;

  constructor(public navCtrl: NavController,
  private loadingCtrl: LoadingController,
  private navParams: NavParams,
  private app:AppSettings,
  private userService:User) {
    this.success=true;
    this.error=true;
  }

  onLoadSignUp(){
    this.navCtrl.push(Signup);
  }
  
 

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
  }

  login(user){
    this.success=true;
    this.error=true;
    this.presentLoading();
    setTimeout(()=>{
      this.userService.signInUser(user).subscribe(res=>{
        this.data=res;
        if(this.data.success){
          this.successMsg=this.data.message+"... Redirecting...";
          this.success=false;
          this.userService.setLoggingStatus(true);
          // console.log(this.data)
          
          this.app.setUser(this.data.user.username,this.data.user.email);
          setTimeout(()=>{
            this.navCtrl.setRoot(Dashboard);
          },3000);
        }
        else{
          this.errorMsg=this.data.message;
          this.error=false;
        }
      });

        

    },5000);
    


    
  }

}
