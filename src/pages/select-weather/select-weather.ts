import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SelectWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-weather',
  templateUrl: 'select-weather.html',
})
export class SelectWeatherPage {
  city: string;
  information: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.city = 'Dublin';

  }

  //did the status page load?
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  //function to save the users selected city
  onSave() {
    this.storage.set("weatherStatus", this.city);
    this.navCtrl.pop();
  }
  //stores the users selected city and puts it into "information variable"
  ionViewWillEnter() {
    this.storage.get("weatherStatus")
      .then((val) => {
        this.information = val;
      }).catch((err) => {
        console.log(err);
      });
  }


}
