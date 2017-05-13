import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


const CONFIG={
  apiUrl:"http://127.0.0.1:5000/"
}
 
@Injectable()
export class AppSettings {

  constructor(public http: Http) {
    
  }

  public getApiUrl(){
    return CONFIG.apiUrl;
  }

  public getDistricts(){
    return this.http.get(CONFIG.apiUrl+'search-blood').map(res =>res.json());
  }

}
