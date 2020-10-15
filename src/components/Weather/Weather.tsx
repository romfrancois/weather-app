import React, { useContext } from 'react';

import LHSWeather from './LHSWeather';
import RHSWeather from './RHSWeather';

import { WeatherByCityContext } from '../../App';

import { WeatherSummary } from '../../types/WeatherSummary';
import { WeatherCity } from '../../types/WeatherCity';

import { WeatherOptions } from '../../types/WeatherOptions';
import { convert2Fahrenheit } from '../../utils/Convert';

const Weather = (): JSX.Element => {
    const {
        state: { city, options },
    } = useContext(WeatherByCityContext);

    const {
        state: {
            weather: { lhsWeather, rhsWeather },
        },
    } = useContext(WeatherByCityContext);

    return (
        <>
            {city.length > 0 && rhsWeather && (
                <div className="weather">
                    <LHSWeather
                        key={`currentCity-${city}`}
                        cityName={lhsWeather.cityName}
                        currentWeatherIcon={`http://openweathermap.org/img/wn/${lhsWeather.currentWeatherIcon}@4x.png`}
                        currentWeatherLegend={lhsWeather.currentWeatherLegend}
                        currentWeatherTemp={
                            options === WeatherOptions.Fahrenheit
                                ? convert2Fahrenheit(lhsWeather.currentWeatherTemp)
                                : Math.floor(lhsWeather.currentWeatherTemp)
                        }
                    />
                    <RHSWeather
                        key={`currentData-${city}`}
                        feelsLike={
                            options === WeatherOptions.Fahrenheit
                                ? convert2Fahrenheit(Math.floor(rhsWeather.feelsLike))
                                : Math.floor(rhsWeather.feelsLike)
                        }
                        highTemp={
                            options === WeatherOptions.Fahrenheit
                                ? convert2Fahrenheit(Math.floor(rhsWeather.highTemp))
                                : Math.floor(rhsWeather.highTemp)
                        }
                        lowTemp={
                            options === WeatherOptions.Fahrenheit
                                ? convert2Fahrenheit(Math.floor(rhsWeather.lowTemp))
                                : Math.floor(rhsWeather.lowTemp)
                        }
                        humidity={Math.floor(rhsWeather.humidity)}
                        wind={Math.floor(rhsWeather.wind)}
                        pressure={Math.floor(rhsWeather.pressure)}
                    />
                    {/* <Forecast /> */}
                </div>
            )}
        </>
    );
};

export default Weather;
