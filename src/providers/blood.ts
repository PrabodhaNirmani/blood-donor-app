import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from "./app-settings";


@Injectable()
export class Blood {
  appUrl=this.appSettings.getApiUrl();
  data:any;

  constructor(public http: Http,public appSettings:AppSettings) {
   
  }

  searchBlood(blood){
    

    return this.http.post(this.appUrl+'search-blood',{blood:blood}).map(res =>res.json());
    
  }

}
