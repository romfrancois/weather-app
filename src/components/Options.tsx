import React, { useContext } from 'react';

import { WeatherByCityContext } from '../App';

import { WeatherOptions } from '../types/WeatherOptions';

const Options = (): JSX.Element => {
    // const { currentCity } = useContext(WeatherByCityContext);
    // const { setOptionTemp } = useContext(WeatherByCityContext);

    const {
        state: { city },
    } = useContext(WeatherByCityContext);
    const { dispatch } = useContext(WeatherByCityContext);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const optionClicked = e.currentTarget.getAttribute('data-value');
        // setOptionTemp(
        //     optionClicked === WeatherOptions.Fahrenheit.toString() ? WeatherOptions.Fahrenheit : WeatherOptions.Celcius,
        // );

        dispatch({
            type: 'setOptionTemp',
            value:
                optionClicked === WeatherOptions.Fahrenheit.toString()
                    ? WeatherOptions.Fahrenheit
                    : WeatherOptions.Celcius,
        });
    };

    return (
        <>
            {city.length > 0 && (
                <div className="options">
                    <h4>Options</h4>
                    <div>
                        <button type="button" onClick={handleOnClick} data-value={WeatherOptions.Fahrenheit}>
                            °F
                        </button>
                        <button type="button" onClick={handleOnClick} data-value={WeatherOptions.Celcius}>
                            °C
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Options;
