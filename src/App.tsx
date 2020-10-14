import React, { useState } from 'react';

import Search from './components/Search/Search';
import Options from './components/Options';
import Weather from './components/Weather/Weather';

import { WeatherOptions } from './types/WeatherOptions';

export const WeatherByCityContext = React.createContext({} as any);

const App = (): JSX.Element => {
    const [currentCity, setCurrentCity] = useState('');
    const [currentWeather, setCurrentWeather] = useState({});
    const [currentForecast, setCurrentForecast] = useState({});
    const [optionTemp, setOptionTemp] = useState(WeatherOptions.Celcius);

    return (
        <>
            <div className="container">
                <WeatherByCityContext.Provider
                    value={{
                        currentCity,
                        setCurrentCity,
                        currentWeather,
                        setCurrentWeather,
                        currentForecast,
                        setCurrentForecast,
                        optionTemp,
                        setOptionTemp,
                    }}
                >
                    <Search />
                    <Options />
                    <Weather />
                </WeatherByCityContext.Provider>
            </div>
        </>
    );
};

export default App;
