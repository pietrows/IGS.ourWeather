export interface Temperature {
    value: number;
    unit: string;
    unitType: number;
}

export interface RealFeelTemperature {
    value: number;
    unit: string;
    unitType: number;
}

export interface WetBulbTemperature {
    value: number;
    unit: string;
    unitType: number;
}

export interface DewPoint {
    value: number;
    unit: string;
    unitType: number;
}

export interface Direction {
    degrees: number;
    localizedDescription: string;
}

export interface Speed {
    value: number;
    unit: string;
    unitType: number;
}

export interface Wind {
    direction: Direction;
    speed: Speed;
}

export interface Speed2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface WindGust {
    speed: Speed2;
}

export interface Visibility {
    value: number;
    unit: string;
    unitType: number;
}

export interface Ceiling {
    value: number;
    unit: string;
    unitType: number;
}

export interface TotalLiquid {
    value: number;
    unit: string;
    unitType: number;
}

export interface Rain {
    value: number;
    unit: string;
    unitType: number;
}

export interface Snow {
    value: number;
    unit: string;
    unitType: number;
}

export interface Ice {
    value: number;
    unit: string;
    unitType: number;
}

export interface HourlyForecast {
    date: Date;
    iconCode: number;
    iconPhrase: string;
    hasPrecipitation: boolean;
    isDaylight: boolean;
    temperature: Temperature;
    realFeelTemperature: RealFeelTemperature;
    wetBulbTemperature: WetBulbTemperature;
    dewPoint: DewPoint;
    wind: Wind;
    windGust: WindGust;
    relativeHumidity: number;
    visibility: Visibility;
    cloudCover: number;
    ceiling: Ceiling;
    uvIndex: number;
    uvIndexPhrase: string;
    precipitationProbability: number;
    rainProbability: number;
    snowProbability: number;
    iceProbability: number;
    totalLiquid: TotalLiquid;
    rain: Rain;
    snow: Snow;
    ice: Ice;
}

export interface HourlyForecastResponse {
    forecasts: HourlyForecast[];
}
