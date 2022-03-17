import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import 'rxjs/Rx'
// import {  map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current!:CurrentWeather
 
 

  constructor(private http:HttpClient) { 
    console.log("service is working")

    this.current = new CurrentWeather("","","","","","","","","","","","");
  }

  // getCurrent(){
  //   return this.current
  // }



  // getWeatherInfo(lat:string,lon:string){
  //   interface Apiresponse{
  //     name :string;
  //     temp:string;
  //     main:string;
  //     temp_min:string;
  //     temp_max:string;
  //     description:string
  //     feels_like:string,
  //     pressure:string,
  //     humidity:string,
  //     speed:string,
  //     visibility:string,
  //     icon:string
    
  //   }
   
  //   let promise = new Promise ((resolve,reject) =>{
  //     this.http.get<Apiresponse>('http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=e1c34a11142d22d0e932a9f6978a4105').toPromise().then(response =>{

  //     console.log(response)
  //       this.current.name =response!.name;
  //       this.current.temp =response!.temp;
  //       this.current.main =response!.main;
  //       this.current.temp_min =response!.temp_min;
  //       this.current.temp_max =response!.temp_max;
  //       this.current.feels_like =response!.feels_like;
  //       this.current.humidity =response!.humidity;
  //       this.current.pressure =response!.pressure;
  //       this.current.speed =response!.speed;
  //       this.current.visibility =response!.visibility
        
  //       resolve(null)
  //     },
  //     error =>{
  //       console.log("No weather elements");

  //       reject(error)
  //     });
  //   })

  //   return promise

  //  }
}
