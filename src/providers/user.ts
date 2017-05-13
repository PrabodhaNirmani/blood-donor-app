import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from "./app-settings";

@Injectable()
export class User {
  appUrl=this.appSettings.getApiUrl();
  data:any;
  isLoggedIn:any;

  constructor(public http: Http,public appSettings:AppSettings) {
 
  }
  signInUser(user){
    return this.http.post(this.appUrl+'authenticate',{user:user}).map(res =>res.json());
  }

  signUpUser(user){

    return this.http.post(this.appUrl+'sign-up-donor',{user:user}).map(res =>res.json());
    
  }

  setLoggingStatus(status){
    this.isLoggedIn=status;
  }

  loggedIn(){
    if(this.isLoggedIn){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(true);

        },3000);
      });

     
    }
    else{
       return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(false);

        },3000);
      });

    }

  }
  

}
