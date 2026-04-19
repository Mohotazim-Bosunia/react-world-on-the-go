import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ promiseCountries }) => {
    const countriesData=use(promiseCountries);
    const countries=countriesData.countries;
    // console.log(countries);
    
    const [visitedCountry,setVisitedCountry]=useState([]);
    const handleVisitedCountry=(country)=>{
    //   console.log(country.name.common);
      const newVisitedCountry=[...visitedCountry,country]
      setVisitedCountry(newVisitedCountry)
    }

    return (
        <div >
            <h1>Number of Countries: {countries.length}</h1>
            <h2>My Visited Country:{visitedCountry.length}</h2>
            <ol>
                {
                    visitedCountry.map(myVisitedCountry=><li key={myVisitedCountry.ccn3.ccn3} >{myVisitedCountry.name.common}</li>)
                }
            </ol>
          <div className='countries'>
              {
                countries.map( country=><Country 
                    key={country.ccn3.ccn3}
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    >
                    
                    </Country>)
            }
          </div>
        </div>
    );
};

export default Countries;