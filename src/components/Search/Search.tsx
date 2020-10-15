import React, { useContext, useEffect } from 'react';

import SearchInput from './SearchInput';

import { WeatherByCityContext } from '../../App';

import { WeatherSummary } from '../../types/WeatherSummary';
import { WeatherCity } from '../../types/WeatherCity';

import fakeWeather from './city.json';
import fakeForecast from './forecast.json';

async function fetchData(url: string, param = '') {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ city: param, units: 'metric' }),
    });

    const json = await response.json();

    return json;
}

const Search = (): JSX.Element => {
    const { dispatch } = useContext(WeatherByCityContext);
    const {
        state: { city },
    } = useContext(WeatherByCityContext);

    useEffect(() => {
        const getCurrentCityWeather = async (url: string, param = '') => {
            const currentWeather = await fetchData(url, param);
            // const currentWeather = fakeWeather;

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

            dispatch({ type: 'setWeather', value: { lhsWeather, rhsWeather } });
        };

        const getCurrentCityForecast = async (url: string, param = '') => {
            const currentForecast = await fetchData(url, param);
            // const currentForecast = fakeForecast;

            const forecastDayList: any = currentForecast.list;

            dispatch({ type: 'setForecast', value: forecastDayList });
        };

        if (city.length > 0) {
            const searchByCityURL = `/.netlify/functions/searchCity`;
            getCurrentCityWeather(searchByCityURL, city);

            const forecastByCityURL = `/.netlify/functions/forecastCity`;
            getCurrentCityForecast(forecastByCityURL, city);
        }
    }, [city, dispatch]);

    return <SearchInput />;
};

export default Search;
