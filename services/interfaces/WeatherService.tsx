export interface IWeather {
    currentTime: string;
    currentDay: string;
    climate: string;
    weatherDegress: IWeatherDegrees;
    nextHoursClimate: INextHoursClimate;
    daysDegrees: IDayDegrees[];
}

export interface IWeatherDegrees {
    value: number;
    compoundValue: string;
}

export interface INextHoursClimate {
    climates: IClimate[];
    humidity: number;
    compoundHumidity: string;
}

export interface IClimate {
    hour: string;
    value: string;
} 

export interface IDayDegrees {
    day: string;
    maxDegrees: string;
    minDegress: string;
}