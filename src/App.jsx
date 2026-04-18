

import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

 const fatchCountries=async()=>{
        const res=await fetch('https://openapi.programming-hero.com/api/all');
        return res.json();
      }

function App() {
     
            const promiseCountries=fatchCountries();

  return (
    <>
      <h1 className='counter'>Vite + React</h1>
      <Suspense fallback={<p>Loading info...</p>}>
       <Countries promiseCountries={promiseCountries}></Countries>
      </Suspense>
    </>
  )
}

export default App
