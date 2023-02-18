import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table';


export default function CountryList(props) {
<h1> List of Countries</h1>

    const tableRows = props.countries.slice(0,15).map((country, idx) => {
        
        return (
            
            <>
            
            <tr>
                <td key={idx+1}><Link to={`/countries/${idx+1}`}>{(country.name)} </Link> </td>
                <td key={idx+1}>{(country.capital)}</td>
            </tr>

            </>  )

    }

        // <div>
        //     <li key={idx}>

        //         <div> <Link to={`/countries/${idx + 1}`}>{(country.name.official)} </Link> </div>
        //         <div>{(country.capital)}</div>

        //     </li>
        // </div>
    )
    return (
        <div>

            <Table hover>
                <thead>
                    <tr>
                        <th> Country Name</th>
                        <th>Capital</th>

                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>

        </div>
    )
       
    
}