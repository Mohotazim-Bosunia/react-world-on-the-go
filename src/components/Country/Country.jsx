import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country.capital.capital[0]);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name:{country.name.common}</h2>
            <h3>Population:{country.population.population}</h3>
            <h3>Capital:{country.capital.capital[0]}</h3>
            {/* <h3>currencies:{country.currencies.currencies}</h3> */}
        </div>
    );
};

export default Country;