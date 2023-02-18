export function getCountries(){
    return fetch('https://restcountries.com/v3.1/all', {mode: 'cors'}).then(
        res => res.json()
    )
}
export function createCountry(data){
    return fetch('http://localhost:3001/countries', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }).then(res => res.json())
}

/* add function updateStudent that takes a student data and sends it to the api */