import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from '../current-weather';
import { WeatherService } from '../weather.service'


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  current!:CurrentWeather;
  location:any
  
  

  constructor(private weatherService:WeatherService,) { }

  ngOnInit(): void {
    // this.weatherService.getWeatherInfo(lan:string,lon:string)
    // this.current =this.weatherService.current

    navigator.geolocation.getCurrentPosition((Pos)=>{
      this.location =Pos.coords;
      

      const lat =this.location.latitude;
      const lon =this.location.longitude;
      console.log(this.location)

      // this.weatherService.getWeatherInfo(lat,lon)
      // this.current =this.weatherService.current
   
  
    

    } )
   
    
  }

}
