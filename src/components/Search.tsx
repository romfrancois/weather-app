import React from 'react';

const Search = (): JSX.Element => {
    return (
        <header>
            <form>
                <input type="text" name="searchInput" id="searchInput" placeholder="Search a city" />
            </form>
        </header>
    );
};

export default Search;
