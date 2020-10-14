import React, { useContext, useEffect } from 'react';

import SearchInput from './SearchInput';

import { WeatherByCityContext } from '../../App';

import { WeatherSummary } from '../../types/WeatherSummary';
import { WeatherCity } from '../../types/WeatherCity';

async function fetchData(url: string, param = '') {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ city: param, units: 'metric' }),
    });

    const json = await response.json();

    return json;
}

const Search = (): JSX.Element => {
    const { currentCity } = useContext(WeatherByCityContext);
    const { setCurrentWeather } = useContext(WeatherByCityContext);
    const { setCurrentForecast } = useContext(WeatherByCityContext);

    useEffect(() => {
        const getCurrentCityWeather = async (url: string, param = '') => {
            const currentWeather = await fetchData(url, param);

            // const currentWeather = {
            //     coord: { lon: -0.13, lat: 51.51 },
            //     weather: [
            //         { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
            //         { id: 311, main: 'Drizzle', description: 'drizzle rain', icon: '09n' },
            //     ],
            //     base: 'stations',
            //     main: { temp: 10.49, feels_like: 8.56, temp_min: 10, temp_max: 11, pressure: 1014, humidity: 93 },
            //     visibility: 2600,
            //     wind: { speed: 2.6, deg: 210 },
            //     rain: { '1h': 0.29 },
            //     clouds: { all: 90 },
            //     dt: 1602533799,
            //     sys: { type: 1, id: 1414, country: 'GB', sunrise: 1602483586, sunset: 1602522824 },
            //     timezone: 3600,
            //     id: 2643743,
            //     name: 'London',
            //     cod: 200,
            // };

            const lhsWeather: WeatherCity = {
                cityName: currentWeather.name,
                currentWeatherIcon: currentWeather.weather[0].icon,
                currentWeatherLegend: currentWeather.weather[0].main,
                currentWeatherTemp: currentWeather.main.temp,
            };

            const rhsWeather: WeatherSummary = {
                feelsLike: currentWeather.main.feels_like,
                highTemp: currentWeather.main.temp_max,
                lowTemp: currentWeather.main.temp_min,
                humidity: currentWeather.main.humidity,
                wind: currentWeather.wind.speed,
                pressure: currentWeather.main.pressure,
            };

            setCurrentWeather({ lhsWeather, rhsWeather });
        };

        const getCurrentCityForecast = async (url: string, param = '') => {
            const currentForecast = await fetchData(url, param);

            // const currentForecast = {
            //     city: {
            //         id: 2643743,
            //         name: 'London',
            //         coord: { lon: -0.1257, lat: 51.5085 },
            //         country: 'GB',
            //         population: 1000000,
            //         timezone: 3600,
            //     },
            //     cod: '200',
            //     message: 0.1243876,
            //     cnt: 7,
            //     list: [
            //         {
            //             dt: 1602586800,
            //             sunrise: 1602570086,
            //             sunset: 1602609092,
            //             temp: { day: 10.31, min: 8.37, max: 11.21, night: 11.21, eve: 10.64, morn: 8.37 },
            //             feels_like: { day: 7.35, night: 6.62, eve: 6.32, morn: 5.11 },
            //             pressure: 1009,
            //             humidity: 81,
            //             weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
            //             speed: 3.29,
            //             deg: 6,
            //             clouds: 65,
            //             pop: 0.97,
            //             rain: 2.22,
            //         },
            //         {
            //             dt: 1602673200,
            //             sunrise: 1602656588,
            //             sunset: 1602695363,
            //             temp: { day: 14.31, min: 10.19, max: 14.31, night: 11, eve: 12.17, morn: 10.19 },
            //             feels_like: { day: 9.45, night: 6.33, eve: 7.52, morn: 6.27 },
            //             pressure: 1021,
            //             humidity: 54,
            //             weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
            //             speed: 5.37,
            //             deg: 46,
            //             clouds: 16,
            //             pop: 0.92,
            //             rain: 1.41,
            //         },
            //         {
            //             dt: 1602759600,
            //             sunrise: 1602743090,
            //             sunset: 1602781634,
            //             temp: { day: 11.76, min: 9.5, max: 11.76, night: 9.97, eve: 10.62, morn: 9.5 },
            //             feels_like: { day: 6.98, night: 6.5, eve: 6.56, morn: 4.45 },
            //             pressure: 1024,
            //             humidity: 59,
            //             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            //             speed: 4.95,
            //             deg: 25,
            //             clouds: 98,
            //             pop: 0.06,
            //         },
            //         {
            //             dt: 1602846000,
            //             sunrise: 1602829592,
            //             sunset: 1602867906,
            //             temp: { day: 12.17, min: 9.01, max: 12.78, night: 11.07, eve: 11.5, morn: 9.01 },
            //             feels_like: { day: 8.76, night: 7.47, eve: 8.15, morn: 6.11 },
            //             pressure: 1023,
            //             humidity: 59,
            //             weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
            //             speed: 3.1,
            //             deg: 45,
            //             clouds: 93,
            //             pop: 0.2,
            //             rain: 0.38,
            //         },
            //         {
            //             dt: 1602932400,
            //             sunrise: 1602916095,
            //             sunset: 1602954179,
            //             temp: { day: 12.52, min: 9.84, max: 13.12, night: 11.06, eve: 12.1, morn: 9.84 },
            //             feels_like: { day: 10.14, night: 8.27, eve: 9.53, morn: 7.19 },
            //             pressure: 1021,
            //             humidity: 60,
            //             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            //             speed: 1.78,
            //             deg: 83,
            //             clouds: 85,
            //             pop: 0,
            //         },
            //         {
            //             dt: 1603018800,
            //             sunrise: 1603002598,
            //             sunset: 1603040452,
            //             temp: { day: 12.95, min: 10.42, max: 12.95, night: 10.86, eve: 11.26, morn: 10.42 },
            //             feels_like: { day: 10.25, night: 7.51, eve: 8.06, morn: 7.62 },
            //             pressure: 1022,
            //             humidity: 51,
            //             weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
            //             speed: 1.73,
            //             deg: 38,
            //             clouds: 78,
            //             pop: 0.11,
            //         },
            //         {
            //             dt: 1603105200,
            //             sunrise: 1603089101,
            //             sunset: 1603126727,
            //             temp: { day: 11.52, min: 9.56, max: 11.79, night: 10.16, eve: 10.96, morn: 9.56 },
            //             feels_like: { day: 7.42, night: 5.22, eve: 6.22, morn: 6.35 },
            //             pressure: 1022,
            //             humidity: 59,
            //             weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
            //             speed: 3.92,
            //             deg: 39,
            //             clouds: 100,
            //             pop: 0.4,
            //             rain: 0.12,
            //         },
            //     ],
            // };

            const forecastDayList: any = currentForecast.list;

            setCurrentForecast(forecastDayList);
        };

        if (currentCity.length > 0) {
            const searchByCityURL = `/.netlify/functions/searchCity`;
            getCurrentCityWeather(searchByCityURL, currentCity);

            const forecastByCityURL = `/.netlify/functions/forecastCity`;
            getCurrentCityForecast(forecastByCityURL, currentCity);
        }
    }, [currentCity, setCurrentForecast, setCurrentWeather]);

    return <SearchInput />;
};

export default Search;
