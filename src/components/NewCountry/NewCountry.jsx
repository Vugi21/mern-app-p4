
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {createCountry } from '../../services/countries'
import style from './NewCountry.module.css'

function NewCountry(props){

    const [name, setName] = useState('')
    const [capital, setCapital] = useState('')
    const [population, setPopulation] = useState('')
    const [region, setRegion] = useState('')
    const history = useNavigate()

    const handleNameChange = (event) => {
        
        setName(event.target.value)
    }
    const handleCapitalChange = (event) => {

        setCapital(event.target.value)
    }
    const handlePopulationChange = (event) => {

        setPopulation(event.target.value)
    }
    const handleRegionChange = (event) => {

        setRegion(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            name,
            capital,
            population,
            region,
            
        }

        const result = await createCountry(formData)
        history.push('/countries')
    }
    
    return(
        <div className={style.country}>
         <h3>Add New Country</h3>   
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" onChange={handleNameChange}/>
            </div>
            <div className="form-group">
                <label>Capital</label>
                <input type="email" className="form-control" onChange={handleCapitalChange}/>
            </div>
            <div className="form-group">
                <label>Population</label>
                <input type="email" className="form-control" onChange={handlePopulationChange}/>
            </div>
            <div className="form-group">
                <label>Region</label>
                <input type="email" className="form-control" onChange={handleRegionChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
        </div>
    )
}

export default NewCountry