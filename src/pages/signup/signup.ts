import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { User } from "../../providers/user";
import { Observable } from "rxjs/Observable";
import { Login } from "../login/login";
import { Dashboard } from "../dashboard/dashboard";


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  response:Observable<any>;
  data:any;
  successMsg:any;
  errorMsg:any;
  success:any;
  error:any;
  
  constructor(private userService:User,private loadingCtrl: LoadingController, private navCtrl: NavController) {
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

  signup(user){
    this.success=true;
    this.error=true;
    this.presentLoading();
    setTimeout(()=>{
      this.userService.signUpUser(user).subscribe(res=>{
        this.data=res;
        if(this.data.success){
          this.successMsg=this.data.message+"... Redirecting...";
          this.success=false;
          this.userService.setLoggingStatus(true);
          setTimeout(()=>{
            this.navCtrl.setRoot(Dashboard);
          },3000);
        }
        else{
          this.errorMsg=this.data.message;
          this.error=false;
          if(this.data.login){
            setTimeout(()=>{
              this.navCtrl.pop();
            },3000);
          }
        }
      });
        

    },3000);
    



  }
  
  onLoadLogin(){
    this.navCtrl.push(Login);

  }
  onLoadDashboard(){
    this.navCtrl.push(Dashboard);

  }

}
