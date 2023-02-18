import React, { Component, useEffect, useState } from 'react'
import { Switch, Link, Route, useParams, useRoutes, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { getCountries } from '../../services/countries'
import style from './CountryDetail.module.css'

export default function CountryDetail(props) {

    // const { route } = useRoutes(); // get the route object using the useRoute hook
    // const id = route.params.id;
    // console.log(id)
    //const [countriesList, setCountriesList]= useState();
    //console.log(props.countries)
    const { id } = useParams();
    //console.log(id)

    // useEffect(() => {
    //     const countriesListFromAPI =  fetch('https://restcountries.com/v3.1/all')
    //     .then(response => response.json())
    //     .then(data => data)
    //     setCountriesList(countriesListFromAPI)
        
    //   }, []);
    //   console.log(countriesList);
    const currentCountry = props.countries.map((country, idx) => idx === id) 
    // let currentCountry = ""  

    // if(props.countries){
     console.log(currentCountry.name)  
      
    // }
    // setTimeout(()=> {
    //     currentCountry = props.countries.filter((country, idx) => idx === id) 
    //     console.log(currentCountry)
    // }, 3000)
    return (
        <>
            {
                props.countries ?
                    <div>

                        <p> Official name of the capital city: {currentCountry.capital} </p>
                        <p> Population: {currentCountry.population} </p>
                        <p> Region: {currentCountry.region} </p>
                        <p> Interesting Facts: {currentCountry.interestingFacts} </p>
                    </div>
                    : ""
            }
            <hr />

            <div>
                <textarea placeholder='Add or Edit interesting facts here...'></textarea>
            </div>
            <button>Add</button>
            <button><Link to="/countries" >Back</Link></button>
        </>
    )
}
    // return(
    //     <ul>
          
    //             <div>
                
    //             <li >Country Name</li>
    //             <li >Country Capital</li>
    //             {/* <li key={idx}><Link to={`/countries/${idx+1}/edit`}> Edit</Link></li> */}
    //             </div>
              

    //     </ul>
    // )
