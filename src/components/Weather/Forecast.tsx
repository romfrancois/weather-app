import React, { useContext } from 'react';

import { WeatherByCityContext } from '../../App';

import { WeatherOptions } from '../../types/WeatherOptions';
import { convert2Fahrenheit } from '../../utils/Convert';

const Day = ({ day, icon, description, temperatures }: any): JSX.Element => {
    const { optionTemp } = useContext(WeatherByCityContext);

    return (
        <div className="day">
            <span>{day}</span>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
            <span>{description}</span>
            <span>
                {optionTemp === WeatherOptions.Fahrenheit ? convert2Fahrenheit(temperatures.low) : temperatures.low}° /{' '}
                {optionTemp === WeatherOptions.Fahrenheit ? convert2Fahrenheit(temperatures.high) : temperatures.high}°
            </span>
        </div>
    );
};

const Forecast = (): JSX.Element => {
    const { currentForecast }: { currentForecast: Array<any> } = useContext(WeatherByCityContext);

    const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="forecast">
            <h4>Forecast</h4>
            <div className="daily">
                {Object.values(currentForecast).map((forecast, i) => {
                    const id = i;
                    const {
                        temp: { min, max },
                    } = forecast;
                    const { weather } = forecast;
                    const { dt } = forecast;

                    return (
                        <Day
                            key={id}
                            day={weekDay[new Date(dt * 1000).getDay()].substring(0, 3)}
                            icon={weather[0].icon}
                            description={weather[0].main}
                            temperatures={{ low: Math.round(min), high: Math.round(max) }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;
