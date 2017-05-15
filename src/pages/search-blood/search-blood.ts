import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { Blood } from "../../providers/blood";


@IonicPage()
@Component({
  selector: 'page-search-blood',
  templateUrl: 'search-blood.html',
})
export class SearchBlood {
  data:any;
  low:any;
  normal:any;
  high:any;
  errorMsg:any;
  success:any;
  error:any;
  
  
  constructor(private bloodService:Blood,private loadingCtrl: LoadingController) {
    this.success=true;
    this.error=true;
    this.low=true;
    this.high=true;
    this.normal=true;
  
  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  search(blood){
    this.success=true;
    this.error=true;
    this.low=true;
    this.high=true;
    this.normal=true;
    if(['A+','A-','AB+','AB-','B+','B-','O+','O-'].indexOf(blood.blood.trim())>-1){
       this.success=true;
       this.error=true;
       this.presentLoading();
       
       setTimeout(()=>{
         
         this.bloodService.searchBlood(blood).subscribe(res=>{
          
            this.data=res;
            
            if(this.data.success){
              this.success=false;
             
              if(this.data.low){
                this.low=false;
              }
              else if(this.data.normal){
                this.normal=false;
              }
              else{
                this.high=false;
              }

            }
            else{
              this.error=false;
              this.errorMsg="Error occurs during the operation, try again";

            }
         });
       },3000);

    }
    else{
      this.error=false;
      this.errorMsg="Please ensure that form submited properly"


    }


  }

  

  


}
