import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from '../current-weather';
import { WeatherService } from '../weather.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  current!:CurrentWeather;
  location:any
 
  
  
  
  constructor(private weatherservice:WeatherService, private http:HttpClient) { 
 
  }

  ngOnInit(): void {

   this.getweather()
   this.current =this.weatherservice.current
      
      navigator.geolocation.getCurrentPosition((Pos)=>{
      this.location =Pos.coords;
      const lat =this.location.latitude;
      const lon =this.location.longitude;
      console.log(this.location)
        
    } )
   
    
  }
  getweather(){
    this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=-1.277952&lon=36.8115712&appid=e1c34a11142d22d0e932a9f6978a4105&units=metric`).subscribe(response =>{
      this.current =response;
      console.log(response)
      this.current =response!.name
      this.current = new CurrentWeather(
        response.name,
        response.main.temp,
        response.main.feels_like,
        response.main.temp_min,
        response.main.temp_max,
        response.visibility,
        response.weather.main,
        response.wind,
        response.weather.description,
        response.main.humidity,
        response.main.pressure,
        response.weather.icon)
    })
  }


}



