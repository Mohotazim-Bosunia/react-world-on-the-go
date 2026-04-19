import React, { use, useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountry}) => {
    //console.log(country);
    const[visited,setVisited]=useState(false);

    const handleVisit=()=>{
        // setVisited(true);
        setVisited(!visited);
        handleVisitedCountry(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name:{country.name.common}</h2>
            <h3>Population:{country.population.population}</h3>
            <h3>Capital:{country.capital.capital[0]}</h3>
             <h3>Area:{country.area.area} {country.area.area>300000?"Large Country":"Small Country"}</h3>
             <button onClick={handleVisit}>{visited?'Visited':'Not Visited'}</button>
        </div>
    );
};

export default Country;