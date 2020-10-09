import React from 'react';

import Search from './components/Search';
import CurrentWeather from './components/currentWeather/CurrentWeather';

const App = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <Search />

                <CurrentWeather />

                <div className="forecast" />
            </div>
        </>
    );
};

export default App;
