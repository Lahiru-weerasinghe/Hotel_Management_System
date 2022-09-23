
//in here we implement our routing side 



import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import HomeC from './components/HomeC';
import HomeCusBefore from './components/HomeCustBefore';




//reservation
import CreateEx from './components/CreateEx';
import EditEx from './components/EditEx';
import ExDetails from './components/ExDetails';
import ViewEx from './components/ViewEx';
import HomeEx from './components/HomeEx';
import CardsEx from './components/ThisalClient/CardsEx.jsx';




 export default class App extends Component{
  render() {
    return (
      
     
         <BrowserRouter>
         <div className="jumbotron">
           
           
 
           {/* <NavBar/> */}

           <Route path="/AdminHome" exact component={HomeA}></Route>
           {/* Customer Home */}
           <Route path="/Home" exact component={HomeC}></Route>
           <Route path="/" exact component={HomeCusBefore}></Route>

        

          {/* Reservation */}
          <Route path="/addRes" exact component={CreateEx}></Route>
          <Route path="/editRes/:id" exact component={EditEx}></Route>
          <Route path="/Reserpost/:id" exact component={ExDetails}></Route>        
          <Route path="/vposts" exact component={ViewEx}></Route>
          <Route path="/hres" exact component={HomeEx}></Route>
          <Route path="/reservationClient" exact component={CardsEx}></Route>

          
          
      
           
           
        


      



           </div>
         </BrowserRouter>
    
    )
  }
}