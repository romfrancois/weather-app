import React from 'react';

type CurrentCity = {
    cityName: string;
    currentWeatherIcon: string;
    currentWeatherLegend: string;
    currentWeatherTemp: number;
};

const CurrentCity = ({
    cityName,
    currentWeatherIcon,
    currentWeatherLegend,
    currentWeatherTemp,
}: CurrentCity): JSX.Element => {
    return (
        <div className="currentCity">
            <h3>{cityName}</h3>
            <div className="city">
                <div className="state">
                    <img src={currentWeatherIcon} alt="Sun" />
                    <span>{currentWeatherLegend}</span>
                </div>
                <div className="lhs_temperature">{currentWeatherTemp}</div>
            </div>
        </div>
    );
};

export default CurrentCity;
