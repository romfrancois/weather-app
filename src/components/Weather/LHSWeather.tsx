import React from 'react';

import { WeatherCity } from '../../types/WeatherCity';

const LHSWeather = ({
    cityName,
    currentWeatherIcon,
    currentWeatherLegend,
    currentWeatherTemp,
}: WeatherCity): JSX.Element => {
    return (
        <div className="currentCity">
            <h4>Current Weather</h4>
            <h3>{cityName}</h3>
            <div className="city">
                <div className="state">
                    <img src={currentWeatherIcon} alt={currentWeatherLegend} />
                    <span>{currentWeatherLegend}</span>
                </div>
                <div className="lhs_temperature">{currentWeatherTemp}°</div>
            </div>
        </div>
    );
};

export default LHSWeather;
