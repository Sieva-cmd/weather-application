export class CurrentWeather {

    constructor(
        public name:string,public temp:string,public main:string,public temp_min:string,public temp_max:string ,public description:string,
        public feels_like:string,
        public pressure:string,
        public humidity:string,
        public speed:string,
        public visibility:string
    ){}
}
