import React, { useReducer } from 'react';

import Search from './components/Search/Search';
import Options from './components/Options';
import Weather from './components/Weather/Weather';
import Forecast from './components/Weather/Forecast';

import { WeatherOptions } from './types/WeatherOptions';

export const WeatherByCityContext = React.createContext({} as any);

type WeatherApp = {
    city: string;
    weather: any;
    forecast: any;
    options: WeatherOptions;
};

const initialState: WeatherApp = {
    city: '',
    weather: {},
    forecast: {},
    options: WeatherOptions.Celcius,
};

// type State = {
//     data?: ;
//     isLoading: boolean;
//     error?: string;
//    }

type Action =
    | { type: 'setCity'; value: string }
    | { type: 'setWeather'; value: any }
    | { type: 'setForecast'; value: any }
    | { type: 'setOptionTemp'; value: WeatherOptions };

function reducer(state: WeatherApp, action: Action) {
    switch (action.type) {
        case 'setCity':
            return {
                ...state,
                city: action.value,
            };
        case 'setWeather':
            return {
                ...state,
                weather: action.value,
            };
        case 'setForecast':
            return {
                ...state,
                forecast: action.value,
            };
        case 'setOptionTemp':
            return {
                ...state,
                options: action.value,
            };
        default:
            return state;
    }
}

const App = (): JSX.Element => {
    const [weatherAppState, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div className="container">
                <WeatherByCityContext.Provider value={{ state: weatherAppState, dispatch }}>
                    <Search />
                    <Options />
                    <Weather />
                    <Forecast />
                </WeatherByCityContext.Provider>
            </div>
        </>
    );
};

export default App;
