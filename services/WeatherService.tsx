import { CurrentConditions, CurrentConditionsResponse } from "./interfaces/CurrentWeather";
import { Forecast, HourlyForecastResponse } from "./interfaces/HourlyForecast";
import { IClimate, IWeather } from "./interfaces/WeatherService";

/**
 * getWeather
 * Get the root data from weather by a global position.
 */
export const getWeather = async () : Promise<IWeather> => {
    const { day, time } = getCurrentTimeDay();
    const { results, forecasts } = await requestWeatherService("-23.438802929284265", "-46.59046036454876");
    const currentConditions: CurrentConditions = results[0];
    const twoNextHoursForecasts = forecasts.slice(0, 2);

    const weather: IWeather = {
        currentDay: day,
        currentTime: time,
        climate: currentConditions.phrase,
        weatherDegress: {
            value: currentConditions.temperature.value,
            compoundValue: `${currentConditions.temperature.value.toFixed(0)}°${currentConditions.temperature.unit}`
        },
        nextHoursClimate: {
            humidity: currentConditions.relativeHumidity,
            compoundHumidity: `${currentConditions.relativeHumidity}%`,
            climates: []
        },
        daysDegrees: []
    }
    
    twoNextHoursForecasts.map((forecast) => {
        const forecastDate = new Date(forecast.date);
        
        const climate: IClimate = {
            value: forecast.iconPhrase,
            hour: `${forecastDate.getHours()}:00`
        }
        
        weather.nextHoursClimate.climates
            .push(climate);
    });

    // TO-DO: Get the past, current and future day degrees.

    return weather;
}

const getCurrentTimeDay = () => {
    const today = new Date();
    let day = `${today.toUTCString().split(" ")[0]} ${today.getDate()}/${today.getMonth()}`;
    let currentHour: number = today.getHours();
    let time = currentHour > 18 || currentHour < 6 ? "night" : "day";

    return { day, time };
}

const requestWeatherService = async (lat: string, long: string) => {
    const { results } = await requestCurrentWeather(lat, long);
    const { forecasts } = await requestNextHoursWeather(lat, long);

    return { results, forecasts };
}

const requestCurrentWeather = async (lat: string, long: string) : Promise<CurrentConditionsResponse> => {
    const BASE_URL = "https://atlas.microsoft.com/weather/currentConditions/json";
    const API_VERSION = "1.0";
    
    let requestParameters = [
        {
            name: "subscription-key",
            value: "0Z4CceqXrEaAjKX2N-hwuyr_-p5VD7y-zP5f8E8KO54"
        },
        {
            name: "language",
            value: "pt-BR"
        },
        {
            name: "query",
            value: `${lat},${long}`
        }
    ]
    
    const parameters = requestParameters.map(param => `${param.name}=${param.value}`);
    
    let fetchUrl: string = 
    `${BASE_URL}?api-version=${API_VERSION}&${parameters.join("&")}`;
    
    return fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        return res as CurrentConditionsResponse
    });
}

const requestNextHoursWeather = async (lat: string, long: string) : Promise<HourlyForecastResponse> => {
    const BASE_URL = "https://atlas.microsoft.com/weather/forecast/hourly/json";
    const API_VERSION = "1.0";
    
    let requestParameters = [
        {
            name: "subscription-key",
            value: "0Z4CceqXrEaAjKX2N-hwuyr_-p5VD7y-zP5f8E8KO54"
        },
        {
            name: "language",
            value: "pt-BR"
        },
        {
            name: "query",
            value: `${lat},${long}`
        },
        {
            name: "duration",
            value: 12
        }
    ]
    
    const parameters = requestParameters.map(param => `${param.name}=${param.value}`);
    
    let fetchUrl: string = 
    `${BASE_URL}?api-version=${API_VERSION}&${parameters.join("&")}`;
    
    return fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        return res as HourlyForecastResponse
    });
}