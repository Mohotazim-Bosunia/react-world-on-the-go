import React, { use } from 'react';

const Countries = ({ promiseCountries }) => {
    const countriesData=use(promiseCountries);
    const countries=countriesData.countries;
    console.log(countries);
    return (
        <div className='counter'>
            <h1>Name:{countries.length}</h1>
        </div>
    );
};

export default Countries;