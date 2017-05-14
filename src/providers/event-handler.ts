import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from "./app-settings";


@Injectable()
export class EventHandler {
  appUrl=this.appSettings.getApiUrl();

  constructor(public http: Http,public appSettings:AppSettings) {
    
  }
  addRequest(request){
    return this.http.post(this.appUrl+'add-request',{request:request}).map(res =>res.json());

  }

  addDonationCampaign(campaign){
    return this.http.post(this.appUrl+'add-donation-campaign',{campaign:campaign}).map(res =>res.json());

  }

  getRequests(){
    return this.http.get(this.appUrl+'get-request').map(res =>res.json());

  }

  getDonationCampaigns(){
    return this.http.get(this.appUrl+'get-donation-campaigns').map(res =>res.json());

  }


}
