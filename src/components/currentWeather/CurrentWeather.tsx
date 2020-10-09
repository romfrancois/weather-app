import React, { useEffect, useState } from 'react';

import CurrentData from './CurrentData';
import CurrentCity from './CurrentCity';

const city2Search = 'Paris';

async function fetchData(url: string, param = '') {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ city: param, units: 'metric' }),
    });

    const json = await response.json();

    return json.results;
}

const CurrentWeather = (): JSX.Element => {
    const [currentCity, setCurrentCity] = useState(city2Search);

    const getCurrentCityWeather = async (url: string, param = '') => {
        const currentCity = await fetchData(url, param);
        setCurrentCity(currentCity);
    };

    useEffect(() => {
        const url = `/.netlify/functions/searchCity`;
        getCurrentCityWeather(url, currentCity);
    }, [currentCity]);

    return (
        <>
            <div className="weather">
                <div className="top">
                    <h4>Current Weather</h4>
                    <div className="options">F | C</div>
                </div>
                <div className="currentWeather">
                    <CurrentCity
                        key={`currentCity-${currentCity}`}
                        cityName="Paris"
                        currentWeatherIcon="https://image.flaticon.com/icons/png/128/3222/3222807.png"
                        currentWeatherLegend="clear sky"
                        currentWeatherTemp={36}
                    />
                    <CurrentData
                        key={`currentData-${currentCity}`}
                        feelsLike={12}
                        highTemp={17}
                        lowTemp={16}
                        humidity={82}
                        wind={30}
                        pressure={1007}
                    />
                </div>
            </div>
        </>
    );
};

export default CurrentWeather;
