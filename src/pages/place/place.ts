import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder'
// import { GoogleMap } from "angular2-google-maps/core/services/google-maps-types";
// import { LatLng } from "angular2-google-maps/core";
import { GoogleMap, GoogleMaps, LatLng, CameraPosition, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class Place {
  lat:any;
  lng:any;
  campaign:any;

  constructor(private viewCtrl:ViewController, 
  private navParams:NavParams, 
  private geolocation: Geolocation,
  private geocoder:NativeGeocoder,
  private googleMaps: GoogleMaps) {
    this.campaign=this.navParams.data;
  

  }

  onDismiss(){
    this.viewCtrl.dismiss();

  }

  ionViewDidLoad(){
    this.lat=this.campaign.latitude;
    this.lng=this.campaign.longitude;
    this.loadMap();
   
    
     
  }

  loadMap(){
    let element = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element, {});
    let latlng = new LatLng(this.lat, this.lng);
 
    
    map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let position: CameraPosition = {
          target: latlng,
          zoom: 10,
          tilt: 30
        }
        map.moveCamera(position);
    }) 

  }
      



}
