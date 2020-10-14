import React, { useContext } from 'react';

import LHSWeather from './LHSWeather';
import RHSWeather from './RHSWeather';

import Forecast from './Forecast';

import { WeatherByCityContext } from '../../App';

import { WeatherSummary } from '../../types/WeatherSummary';
import { WeatherCity } from '../../types/WeatherCity';

import { WeatherOptions } from '../../types/WeatherOptions';
import { convert2Fahrenheit } from '../../utils/Convert';

const Weather = (): JSX.Element => {
    const { currentCity } = useContext(WeatherByCityContext);
    const { currentWeather } = useContext(WeatherByCityContext);

    const { lhsWeather }: { lhsWeather: WeatherCity } = currentWeather;
    const { rhsWeather }: { rhsWeather: WeatherSummary } = currentWeather;

    const { optionTemp } = useContext(WeatherByCityContext);

    console.log('lhsWeather: ', lhsWeather);

    return (
        <>
            {currentCity.length > 0 && rhsWeather && (
                <div className="weather">
                    <div className="currentWeather">
                        <LHSWeather
                            key={`currentCity-${currentCity}`}
                            cityName={lhsWeather.cityName}
                            currentWeatherIcon={`http://openweathermap.org/img/wn/${lhsWeather.currentWeatherIcon}@4x.png`}
                            currentWeatherLegend={lhsWeather.currentWeatherLegend}
                            currentWeatherTemp={
                                optionTemp === WeatherOptions.Fahrenheit
                                    ? convert2Fahrenheit(lhsWeather.currentWeatherTemp)
                                    : Math.floor(lhsWeather.currentWeatherTemp)
                            }
                        />
                        <RHSWeather
                            key={`currentData-${currentCity}`}
                            feelsLike={
                                optionTemp === WeatherOptions.Fahrenheit
                                    ? convert2Fahrenheit(Math.floor(rhsWeather.feelsLike))
                                    : Math.floor(rhsWeather.feelsLike)
                            }
                            highTemp={
                                optionTemp === WeatherOptions.Fahrenheit
                                    ? convert2Fahrenheit(Math.floor(rhsWeather.highTemp))
                                    : Math.floor(rhsWeather.highTemp)
                            }
                            lowTemp={
                                optionTemp === WeatherOptions.Fahrenheit
                                    ? convert2Fahrenheit(Math.floor(rhsWeather.lowTemp))
                                    : Math.floor(rhsWeather.lowTemp)
                            }
                            humidity={Math.floor(rhsWeather.humidity)}
                            wind={Math.floor(rhsWeather.wind)}
                            pressure={Math.floor(rhsWeather.pressure)}
                        />
                    </div>
                    <Forecast />
                </div>
            )}
        </>
    );
};

export default Weather;
