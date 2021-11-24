export interface Summary {
    startDate: Date;
    endDate: Date;
    severity: number;
    phrase: string;
    category: string;
}

export interface Minimum {
    value: number;
    unit: string;
    unitType: number;
}

export interface Maximum {
    value: number;
    unit: string;
    unitType: number;
}

export interface Temperature {
    minimum: Minimum;
    maximum: Maximum;
}

export interface Minimum2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface Maximum2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface RealFeelTemperature {
    minimum: Minimum2;
    maximum: Maximum2;
}

export interface Minimum3 {
    value: number;
    unit: string;
    unitType: number;
}

export interface Maximum3 {
    value: number;
    unit: string;
    unitType: number;
}

export interface RealFeelTemperatureShade {
    minimum: Minimum3;
    maximum: Maximum3;
}

export interface Heating {
    value: number;
    unit: string;
    unitType: number;
}

export interface Cooling {
    value: number;
    unit: string;
    unitType: number;
}

export interface DegreeDaySummary {
    heating: Heating;
    cooling: Cooling;
}

export interface AirAndPollen {
    name: string;
    value: number;
    category: string;
    categoryValue: number;
    type: string;
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

export interface Direction2 {
    degrees: number;
    localizedDescription: string;
}

export interface Speed2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface WindGust {
    direction: Direction2;
    speed: Speed2;
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

export interface Day {
    iconCode: number;
    iconPhrase: string;
    hasPrecipitation: boolean;
    shortPhrase: string;
    longPhrase: string;
    precipitationProbability: number;
    thunderstormProbability: number;
    rainProbability: number;
    snowProbability: number;
    iceProbability: number;
    wind: Wind;
    windGust: WindGust;
    totalLiquid: TotalLiquid;
    rain: Rain;
    snow: Snow;
    ice: Ice;
    hoursOfPrecipitation: number;
    hoursOfRain: number;
    hoursOfSnow: number;
    hoursOfIce: number;
    cloudCover: number;
}

export interface Direction3 {
    degrees: number;
    localizedDescription: string;
}

export interface Speed3 {
    value: number;
    unit: string;
    unitType: number;
}

export interface Wind2 {
    direction: Direction3;
    speed: Speed3;
}

export interface Direction4 {
    degrees: number;
    localizedDescription: string;
}

export interface Speed4 {
    value: number;
    unit: string;
    unitType: number;
}

export interface WindGust2 {
    direction: Direction4;
    speed: Speed4;
}

export interface TotalLiquid2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface Rain2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface Snow2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface Ice2 {
    value: number;
    unit: string;
    unitType: number;
}

export interface Night {
    iconCode: number;
    iconPhrase: string;
    hasPrecipitation: boolean;
    shortPhrase: string;
    longPhrase: string;
    precipitationProbability: number;
    thunderstormProbability: number;
    rainProbability: number;
    snowProbability: number;
    iceProbability: number;
    wind: Wind2;
    windGust: WindGust2;
    totalLiquid: TotalLiquid2;
    rain: Rain2;
    snow: Snow2;
    ice: Ice2;
    hoursOfPrecipitation: number;
    hoursOfRain: number;
    hoursOfSnow: number;
    hoursOfIce: number;
    cloudCover: number;
}

export interface DailyForecast {
    date: Date;
    temperature: Temperature;
    realFeelTemperature: RealFeelTemperature;
    realFeelTemperatureShade: RealFeelTemperatureShade;
    hoursOfSun: number;
    degreeDaySummary: DegreeDaySummary;
    airAndPollen: AirAndPollen[];
    day: Day;
    night: Night;
    sources: string[];
}

export interface DailyForecastResponse {
    summary: Summary;
    forecasts: DailyForecast[];
}
