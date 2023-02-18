import PuppiesList from './components/PuppiesList/PuppiesList';
import CountryList from './components/CountryList/CountryList';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
  Outlet,
  useParams
} from "react-router-dom";
import { Component, useEffect, setState } from 'react'

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./pages/SignupPage/SignupPage";
import userService from "./services/userService";
import LoginPage from "./pages/LoginPage/LoginPage";
import AboutPage from './pages/About/AboutPage';
import CountryDetail from './components/CountryDetail/CountryDetail';
import NewCountry from './components/NewCountry/NewCountry';



const menuOptions = [
  "home",
  "puppies",
  "login",
  "signup"
];



class App extends Component {

  constructor(){
    super()
    this.state = {
      user: userService.getUser(), 
      freePass: false,
      IsLoggedIn: false,
    }
    
    this.setCurrUser = this.setCurrUser.bind(this)
  }


  async componentDidMount(){
    // make calls to api and update state if needed
    //const  response = await fetch('http://localhost:3001/api/users');
    const countriesList = await fetch('http://localhost:3001/api/countries')
    //const countriesList = await fetch('https://restcountries.com/v3.1/all')
    const puppiesList = await fetch('http://localhost:3001/api/puppies')
    
    console.log(countriesList)
    //const data = await response.json()
    const puppyData = await puppiesList.json()

    const countryData = await countriesList.json()

    
    
    this.setState({
      //users: data,
      puppies: puppyData,
      countries: countryData,
      user: userService.getUser(),
            
    })
  }
  
  setCurrUser(UserData){
    this.setState({freePass: UserData, IsLoggedIn: UserData})
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  async componentDidUpdate(){
    //console.log(this.state.users)
    //console.log(this.state.puppies)
    // const countriesList = await fetch('https://restcountries.com/v3.1/all')

    // const countryData = await countriesList.json()

    // this.setState({
        
    //   countries: countryData,
    //   user: userService.getUser()
      
    //})
  }
  
  
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }



  getChildRoutes(){
    
    /**define child routes here and return them */
    const routes = [
      {
        path: '/login',
        element:  <LoginPage setCurrUser = {this.setCurrUser}/>,
       
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/puppies',
        element: (<div className="container">
                    <PuppiesList puppies={this.state.puppies} />
                </div>)
      },
      {
        path: '/countries',
        element: (<div className="container">
                    <CountryList countries={this.state.countries} />
                </div>)
      },
      {
        path: '/countries/new',
        element: (<div className="container">
                    <NewCountry />
                </div>)
      },
      {
        path: '/countries/:id',
        element: (<div className="container">
                    <CountryDetail countries={this.state.countries} />
                </div>)
      },
      {
        path: '/about',
        element: (<div className="container">
                    <AboutPage />
                </div>)
      },
    ]
  
    return routes
  
  }
  
  getRouter(){
      let router = createBrowserRouter([{
      path: '/',
      element: (<>
        <Navbar currentUser={this.state.user} handleLogout={this.handleLogout}/>
        {/* <MenuBar menuOptions={menuOptions}/> */}
        
        {/* <div className='container'>
        <PuppiesList puppies={this.state.puppies}/>
        </div> */}
        <Outlet/>
     
        </>
      ),
      children: this.getChildRoutes()
    },
    
  ])
    return router
  }

  render(){
    return (
      <>      
      <div> <h1>Full-Stack React app about Countries</h1>
        <RouterProvider router={this.getRouter()} />

       <hr />
        {/* <ul>
           
              {this.state.users.map((user, idx) => 
                (<li key={idx}>{ user }</li>)
               )}

        </ul> */}
        {/* <ul> <strong>Initial UL list </strong>
                {this.state.puppies.map((puppy , idx) =>
                  (<li key={idx}> {(puppy.name)} </li>)
                  )}
        </ul> */}
       
        {/*//Create a pupiesList component that dusplays a list of puppies frorm mongodb database*/}
      </div>
      </>
  
  );
}
}

 {/* function App() {
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={callPuppiesApi}>Call Puppies API</button>
          <button onClick={callCountriesApi}>Call Countries API</button>
          <PuppiesList/>

        </header>
      </div>
  );
}

function callPuppiesApi() {
    fetch(' http://localhost:3001/api/puppies', { method: 'GET' })
        .then(data => data.json())
        .then(json => alert(JSON.stringify(json)))
}

function callCountriesApi() {
  fetch(' http://localhost:3001/countries', { method: 'GET' })
      .then(data => data.json())
      .then(json => alert(JSON.stringify(json)))
} */}



export default App;
