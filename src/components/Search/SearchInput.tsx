import React, { useContext, useState } from 'react';

import { WeatherByCityContext } from '../../App';

const SearchInput = (): JSX.Element => {
    const { dispatch } = useContext(WeatherByCityContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        dispatch({ type: 'setCity', value: searchTerm });
        setSearchTerm('');
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
    };

    return (
        <header>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleOnChange} type="search" placeholder="Search a city" />
            </form>
        </header>
    );
};

export default SearchInput;
