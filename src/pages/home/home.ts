import { Component, OnInit } from '@angular/core';
import { NavController, Img, Icon } from 'ionic-angular';
import { ForcastProvider } from '../../providers/forcast/forcast';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//initialise variables
export class HomePage {
//weather variable
  weather: any;

  //cityName variable
  cityName: any;

  //country variable
  country: any;

  //temperature variable
  temperature: any;

  //icon variable
  icon: Icon;

  //gets in "select-weather"
  information: string;

  //main variable
  main: any;
  // variable for lattitude
  lattitude: any;

  //variable for longitude
  longitude: any;

  //variable for highest temperature
  highest: any;

  //variabel for lowest tempertaure
  lowest: any;

  //location class
  location: { city: string, temperature: string };
  //variable to return clouds
  clouds: any;
  //varibale to return humidity
  humid: any;

//Constructor with imports loaded
  constructor(private forcastPro: ForcastProvider, public navCtrl: NavController, private storage: Storage) { }

//gets weather status from "select weather" and puts "information" passed from "select weather" and assigns it to val
  ionViewWillEnter() {
    this.storage.get("weatherStatus").then((val) => {
      //if/ else to determine if  default webpage needed
      if (val != null) {
        this.information = val;
      }
      else if (val == null) {
        this.location =
          {
            //dublin default
            city: 'Dublin',
            temperature: " ",

          }
        this.cityName = 'Dublin';
        //getting the city after deafult has been shown
        this.forcastPro.getWeather(this.location.city).subscribe(weather => {
          
          this.weather = weather.weather;

          //returns city name
          this.cityName = weather.name;

          //returns temperature
          this.temperature = weather.main.temp;

          //returns the icon associated with weather
          this.icon = weather.weather[0].icon;

          //returns temperature rounded to nearest value (otherwise returns a long value eg 1.1111111111111111)
          this.temperature = Math.round(this.temperature - 273);

          //returns lattitude of current area
          this.lattitude = weather.coord.lat;

          //returns longitude of current area
          this.longitude = weather.coord.lon;

          //reuturns highest expected weather
          this.highest = weather.main.temp_max;

          //reuturns lowest expected weather
          this.lowest = weather.main.temp_min;

          //round lowest degrees to even number
          this.lowest = Math.round(this.lowest - 273);

           //round highest degrees to even number
          this.highest = Math.round(this.highest - 273);

          //returns the country the city is in
          this.country = weather.sys.country;

          // returns the number of clouds 
          this.clouds = weather.clouds.all;

          //returns the humidity
          this.humid = weather.main.humidity;

        });
      }

    }).catch((err) => {
      console.log(err);
    });
    //when the user selects an other city apart from default
    this.location =
      {
        city: this.information,
        temperature: " ",

      }
      //passes varibles set to relivant responses on the weather Api
    this.forcastPro.getWeather(this.location.city).subscribe(weather => {
      this.weather = weather.weather;

      //returns city name
      this.cityName = weather.name;

      //returns temperature
      this.temperature = weather.main.temp;

       //returns the icon associated with weather
      this.icon = weather.weather[0].icon;

      //returns temperature rounded to nearest value (otherwise returns a long value eg 1.1111111111111111)
      this.temperature = Math.round(this.temperature - 273)

      //returns lattitude of current area
      this.lattitude = weather.coord.lat;

       //returns longitude of current area
      this.longitude = weather.coord.lon;

      //reuturns highest expected weather
      this.highest = weather.main.temp_max;

      //round lowest degrees to even number
      this.lowest = weather.main.temp_min;

      //round lowest degrees to even number
      this.lowest = Math.round(this.lowest - 273);

      //round highest degrees to even number
      this.highest = Math.round(this.highest - 273);

      //returns the country the city is in
      this.country = weather.sys.country;

       // returns the number of clouds 
      this.clouds = weather.clouds.all;

      //returns the humidity
      this.humid = weather.main.humidity;

    });
  }
  //Navigate to weather page
  getWeather() {
    this.navCtrl.push('SelectWeatherPage');
  }
  //gets the string of the country
  recieveWeather(country: string) {
    this.weather.country(country)
  }



}




