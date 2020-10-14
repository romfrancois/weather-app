import { WeatherDescription } from './WeatherDescription';

export type WeatherForecast = {
    weather: Array<WeatherDescription>;
    temp: {
        min: number;
        max: number;
    };
};
