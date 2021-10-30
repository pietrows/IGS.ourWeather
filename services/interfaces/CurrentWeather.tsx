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

export interface RealFeelTemperatureShade {
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

export interface Pressure {
    value: number;
    unit: string;
    unitType: number;
}

export interface PressureTendency {
    localizedDescription: string;
    code: string;
}

export interface Past24HourTemperatureDeparture {
    value: number;
    unit: string;
    unitType: number;
}

export interface ApparentTemperature {
    value: number;
    unit: string;
    unitType: number;
}

export interface WindChillTemperature {
    value: number;
    unit: string;
    unitType: number;
}

export interface WetBulbTemperature {
    value: number;
    unit: string;
    unitType: number;
}

export interface PastHour {
    value: number;
    unit: string;
    unitType: number;
}

export interface Past3Hours {
    value: number;
    unit: string;
    unitType: number;
}

export interface Past6Hours {
    value: number;
    unit: string;
    unitType: number;
}

export interface Past9Hours {
    value: number;
    unit: string;
    unitType: number;
}

export interface Past12Hours {
    value: number;
    unit: string;
    unitType: number;
}

export interface Past18Hours {
    value: number;
    unit: string;
    unitType: number;
}

export interface Past24Hours {
    value: number;
    unit: string;
    unitType: number;
}

export interface PrecipitationSummary {
    pastHour: PastHour;
    past3Hours: Past3Hours;
    past6Hours: Past6Hours;
    past9Hours: Past9Hours;
    past12Hours: Past12Hours;
    past18Hours: Past18Hours;
    past24Hours: Past24Hours;
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

export interface Past6Hours2 {
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

export interface Past12Hours2 {
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

export interface Past24Hours2 {
    minimum: Minimum3;
    maximum: Maximum3;
}

export interface TemperatureSummary {
    past6Hours: Past6Hours2;
    past12Hours: Past12Hours2;
    past24Hours: Past24Hours2;
}

export interface CurrentConditions {
    dateTime: Date;
    phrase: string;
    iconCode: number;
    hasPrecipitation: boolean;
    isDayTime: boolean;
    temperature: Temperature;
    realFeelTemperature: RealFeelTemperature;
    realFeelTemperatureShade: RealFeelTemperatureShade;
    relativeHumidity: number;
    dewPoint: DewPoint;
    wind: Wind;
    windGust: WindGust;
    uvIndex: number;
    uvIndexPhrase: string;
    visibility: Visibility;
    obstructionsToVisibility: string;
    cloudCover: number;
    ceiling: Ceiling;
    pressure: Pressure;
    pressureTendency: PressureTendency;
    past24HourTemperatureDeparture: Past24HourTemperatureDeparture;
    apparentTemperature: ApparentTemperature;
    windChillTemperature: WindChillTemperature;
    wetBulbTemperature: WetBulbTemperature;
    precipitationSummary: PrecipitationSummary;
    temperatureSummary: TemperatureSummary;
}

export interface CurrentConditionsResponse {
    results: CurrentConditions[];
}
