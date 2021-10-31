import { CurrentConditions, CurrentConditionsResponse } from "./interfaces/CurrentWeather";
import { DailyForecast, DailyForecastResponse } from "./interfaces/DailyForecast";
import { HourlyForecastResponse } from "./interfaces/HourlyForecast";
import { IClimate, IWeather, IDayDegrees } from "./interfaces/WeatherService";

/**
 * getWeather
 * Gets the root data from weather by a global position.
 */
export const getWeather = async () : Promise<IWeather> => {
    const { day, time } = getCurrentTimeDay();
    const { results, hourlyForecasts, dailyForecasts, defaultUnit } = await requestWeatherService("-23.438802929284265", "-46.59046036454876");
    const currentConditions: CurrentConditions = results[0];
    const twoNextHoursForecasts = hourlyForecasts.slice(0, 2);
    const nextDayForecast: DailyForecast = dailyForecasts[0];

    const weather: IWeather = {
        currentDay: day,
        currentTime: time,
        climate: currentConditions.phrase,
        weatherDegress: {
            value: currentConditions.temperature.value,
            compoundValue: `${currentConditions.temperature.value.toFixed(0)}${defaultUnit}`
        },
        nextHoursClimate: {
            humidity: currentConditions.relativeHumidity,
            compoundHumidity: `${currentConditions.relativeHumidity}%`,
            climates: []
        },
        daysDegrees: []
    };
    
    twoNextHoursForecasts.map((forecast) => {
        const forecastDate = new Date(forecast.date);
        
        const climate: IClimate = {
            value: forecast.iconPhrase,
            hour: `${forecastDate.getHours()}:00`
        }
        
        weather.nextHoursClimate.climates
            .push(climate);
    });

    const pastDayDegrees: IDayDegrees = {
        day: "ontem",
        maxDegrees: `${currentConditions
                    .temperatureSummary
                    .past24Hours
                    .maximum.value.toFixed(0)}${defaultUnit}`,
        minDegress: `${currentConditions
                    .temperatureSummary
                    .past24Hours
                    .minimum.value.toFixed(0)}${defaultUnit}`,
    };

    const currentDayDegrees: IDayDegrees = {
        day: "hoje",
        maxDegrees: `${currentConditions
                    .temperatureSummary
                    .past6Hours
                    .maximum
                    .value.toFixed(0)}${defaultUnit}`,
        minDegress: `${currentConditions
                    .temperatureSummary
                    .past6Hours
                    .minimum
                    .value.toFixed(0)}${defaultUnit}`
    };

    const futureDayDegress: IDayDegrees = {
        day: "amanhã",
        maxDegrees: `${nextDayForecast
                    .temperature
                    .maximum
                    .value.toFixed(0)}${defaultUnit}`,
        minDegress: `${nextDayForecast
                    .temperature
                    .minimum
                    .value.toFixed(0)}${defaultUnit}`
    };

    weather.daysDegrees.push(...[pastDayDegrees, currentDayDegrees, futureDayDegress]);
    
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
    const defaultUnit = "°C";
    const defaultunitType = "metric";
    const { results } = await requestCurrentWeather(lat, long, defaultunitType);
    const hourlyForecastResponse = await requestHourlyWeather(lat, long, defaultunitType);
    const dailyForecastResponse = await requestDailyWeather(lat, long, defaultunitType);

    const hourlyForecasts = hourlyForecastResponse.forecasts;
    const dailyForecasts = dailyForecastResponse.forecasts;

    return { results, hourlyForecasts, dailyForecasts, defaultUnit };
}

const requestCurrentWeather = async (lat: string, long: string, unitType: string) : Promise<CurrentConditionsResponse> => {
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
        },
        {
            name: "unit",
            value: unitType
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

const requestHourlyWeather = async (lat: string, long: string, unitType: string) : Promise<HourlyForecastResponse> => {
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
        },
        {
            name: "unit",
            value: unitType
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

const requestDailyWeather = async (lat: string, long: string, unitType: string) : Promise<DailyForecastResponse> => {
    const BASE_URL = "https://atlas.microsoft.com/weather/forecast/daily/json";
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
            value: 1
        },
        {
            name: "unit",
            value: unitType
        }
    ]
    
    const parameters = requestParameters.map(param => `${param.name}=${param.value}`);
    
    let fetchUrl: string = 
    `${BASE_URL}?api-version=${API_VERSION}&${parameters.join("&")}`;
    
    return fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        return res as DailyForecastResponse
    });
}
