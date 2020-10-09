import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTemperatureLow, faTint, faWind, faCompressAlt } from '@fortawesome/free-solid-svg-icons';

type CurrentData = {
    feelsLike: number;
    highTemp: number;
    lowTemp: number;
    humidity: number;
    wind: number;
    pressure: number;
};

const CurrentData = ({ feelsLike, highTemp, lowTemp, humidity, wind, pressure }: CurrentData): JSX.Element => {
    return (
        <div className="currrentData">
            <p className="feelsLike">
                Feels like
                {feelsLike}
            </p>
            <div className="rhs_temperature">
                <div className="high">
                    <FontAwesomeIcon className="faStyle fa-fw fa-lg" icon={faTemperatureHigh} />
                    {highTemp}
                </div>
                <div className="low">
                    <FontAwesomeIcon className="faStyle fa-fw fa-lg" icon={faTemperatureLow} />
                    {lowTemp}
                </div>
            </div>
            <div className="wind">
                <FontAwesomeIcon className="faStyle fa-fw fa-lg" icon={faTint} />
                Humidity
                {humidity}
            </div>
            <div className="wind">
                <FontAwesomeIcon className="faStyle fa-fw fa-lg" icon={faWind} />
                Wind
                <span>
                    {' '}
                    {wind}
                    kph
                </span>
            </div>
            <div className="pressure">
                <FontAwesomeIcon className="faStyle fa-fw fa-lg" icon={faCompressAlt} />
                Pressure
                <span>
                    {' '}
                    {pressure}
                    hPa
                </span>
            </div>
        </div>
    );
};

export default CurrentData;
