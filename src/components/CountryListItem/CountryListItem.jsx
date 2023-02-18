import React from 'react';
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table';

// export default function CountryListItem(props) {

// <h1> List of Countries</h1>
//     const tableRows = props.countries.map((country, idx) => {
//         return (
//             <tr>
//                 <td key={idx}><Link to={`/countries/${idx}`}>{(country.name.official)} </Link> </td>
//                 <td key={idx}>{(country.capital)}</td>
//             </tr>

//         )

//     }

//         // <div>
//         //     <li key={idx}>

//         //         <div> <Link to={`/countries/${idx + 1}`}>{(country.name.official)} </Link> </div>
//         //         <div>{(country.capital)}</div>

//         //     </li>
//         // </div>
//     )
//     return (
//         <div>

//             <Table hover>
//                 <thead>
//                     <tr>
//                         <th> Country Name</th>
//                         <th>Capital</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableRows}
//                 </tbody>
//             </Table>

//         </div>
//     )
       
    
// }

function CountryListItem({country, _id}){
return(
    <div className='panel panel-default'>
    <div className="panel-heading">
      <h3 className='panel-title'>{country.name.official}</h3>
    </div>
    <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: `/countries/${_id}/detail`,
            state: {country}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: `/countries/${_id}/edit`,
            state: {country}
          }}
        >
          EDIT
        </Link>
       
      </div>
)

}


export default CountryListItem()