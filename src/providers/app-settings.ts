import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


const CONFIG={
  // apiUrl:"http://127.0.0.1:5000/"
  apiUrl:"https://blood-donor-app-server.herokuapp.com/"
}
const districts=[{d:'Matara'},{d:'Galle'},{d:'Hambanthota'},{d:'Colombo'},{d:'Gampaha'},{d:'Kaluthara'},{d:'Monaragala'},{d:'Badulla'},{d:'Kandy'},{d:'Mathale'},{d:'Nuwara Eliya'},{d:'Ampara'},{d:'Batticaloa'},{d:'Trincomalee'},{d:'Anuradhapura'},{d:'Polonnaruwa'},{d:'Kegalle'},{d:'Rathnapura'},{d:'Kurunegalle'},{d:'Puttalam'},{d:'Jaffna'},{d:'Vavniya'},{d:'Mullaitivu'},{d:'Mannar'},{d:'Kilinochchi'}];
 
@Injectable()
export class AppSettings {

  constructor(public http: Http) {
    
  }

  public getApiUrl(){
    return CONFIG.apiUrl;
  }

  public getDistricts(){
    return districts;
  }

}
