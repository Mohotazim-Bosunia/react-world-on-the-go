import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ promiseCountries }) => {
    const countriesData=use(promiseCountries);
    const countries=countriesData.countries;
    console.log(countries);
    return (
        <div className='counter'>
            
            {
                countries.map( country=><Country 
                    key={country.ccn3.ccn3}
                    country={country}>

                    </Country>)
            }
        </div>
    );
};

export default Countries;