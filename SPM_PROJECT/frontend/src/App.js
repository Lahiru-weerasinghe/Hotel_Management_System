 
 

import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import HomeC from './components/HomeC';

// import NavBar from './components/NavBar';
import NavBar from './components/NavBar';
import CreateSupplier from './components/CreateSupplier';
import EditSupplier from './components/EditSupplier';
import SupplierHome from './components/SupplierHome';
import SupplierDetails from './components/SupplierDetails';


//employee
import CreateEmployee from './components/CreateEmployee';
 import EditEmployee from './components/EditEmployee';
 import EmployeeDetails from './components/EmployeeDetails';
 import EmpHome from './components/EmpHome';
 import EmployeeReports from './components/EmployeeReports';


//reservation
import CreateRes from './components/CreateRes';
import EditRes from './components/EditRes';
import ResDetails from './components/ResDetails';
import ViewRes from './components/ViewRes';
import HomeRes from './components/HomeRes';

//customer
import allCustomer from './components/allCustomer';
import createCustomer from './components/createCustomer';
import editCustomer from './components/editCustomer';
import viewCustomer from './components/viewCustomer';
import generateReport from './components/generateReport';
import customerDetails from './components/customerDetails';
import login from './components/login';
import createRequest from './components/createRequest';
import readRequest from './components/readRequest';

// finance
import BasicSalary from './components/finance/BasicSalary';
import EditBasicSalary from './components/finance/EditBasicSalary';
import CreateBasicSalary from './components/finance/CreateBasicSalary';
import IncomeExpenditure from './components/finance/IncomeExpenditure';
import EditIncomeExpenditure from './components/finance/EditIncomeExpenditure';
import CreateIncomeExpenditure from './components/finance/CreateIncomeExpenditure';

//feedback
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import FeedbackHome from './components/Home'
import PostDetails from './components/PostDetails'


//Restaurant 
import HomeRestaurant from './components/HomeRestaurant';
import RestCreatePost from './components/RestCreatePost';
import RestEditPost from './components/RestEditPost';
import RestPostDetails from './components/RestPostDetails';
import RestCustomer from './components/RestCustomer';
import RestAllDetails from './components/RestAllDetails';


//services - sudaraka
import CreateService from './components/CreateService';
import EditService from './components/EditService';
import ServiceDetails from './components/ServiceDetails';
import AllServices from './components/AllServices';


 

 export default class App extends Component{
  render() {
    return (
      
     
         <BrowserRouter>
           <div className="container">
 
           {/* <NavBar/> */}

           <Route path="/AdminHome" exact component={HomeA}></Route>
           <Route path="/RestCustomer" exact component={RestCustomer}></Route>

        {/* Supplier */}
        <Route path="/supplierH" exact component={SupplierHome}></Route>
        <Route path="/addsup" exact component={CreateSupplier}></Route>
        <Route path="/editsup/:id" exact component={EditSupplier}></Route>
        <Route path="/supplier/:id" exact component={SupplierDetails}></Route>
        

          {/* Reservation */}
          <Route path="/addRes" exact component={CreateRes}></Route>
          <Route path="/editRes/:id" exact component={EditRes}></Route>
          <Route path="/Reserpost/:id" exact component={ResDetails}></Route>        
          <Route path="/vposts" exact component={ViewRes}></Route>
          <Route path="/hres" exact component={HomeRes}></Route>
          
           {/*Customer*/}
           <Route path= "/allCustomer" exact component={allCustomer}></Route>
           <Route path= "/register" component={createCustomer}></Route>
           <Route path= "/edit/:id" component={editCustomer}></Route>
           <Route path= "/customer/:id" component={viewCustomer}></Route>
           <Route path= "/report" component={generateReport}></Route>
           <Route path= "/customerDetails" component={customerDetails}></Route>
           <Route path= "/" exact component={login}></Route>
           <Route path= "/createRequest" component={createRequest}></Route>
           <Route path= "/readRequest" component={readRequest}></Route>
        
      
               {/*Employee*/}               
            <Route path="/Emp" exact component={EmpHome}></Route>
           <Route path="/addEmp" component={CreateEmployee}></Route>
           <Route path="/editEmp/:id" component={EditEmployee}></Route>
           <Route path="/employee/:id" component={EmployeeDetails}></Route>
           <Route path="/reportsEmp" component={EmployeeReports}></Route>
           
           {/* Finance */}
           <Route path="/finance/basicsalary" exact component={BasicSalary}></Route>
           <Route path="/finance/basicsalary/update/:id" exact component={EditBasicSalary}></Route>
           <Route path="/finance/basicsalary/create" exact component={CreateBasicSalary}></Route>
           <Route path="/finance/incomeexpenditure" exact component={IncomeExpenditure}></Route>
           <Route path="/finance/incomeexpenditure/update/:id" exact component={EditIncomeExpenditure}></Route>
           <Route path="/finance/incomeexpenditure/create" exact component={CreateIncomeExpenditure}></Route>

           {/*feedback*/}
           <Route path="/FeedbackHome" exact component={FeedbackHome}/>
          <Route path="/addf" component={CreatePost}/>
          <Route path="/editf/:id" component={EditPost}/>
          <Route path="/post/:id" component={PostDetails}/>


{/*Restaurant*/}
<Route path="/HomeRestaurant" exact component={HomeRestaurant}></Route>
        <Route path="/Restaurantadd" exact component={RestCreatePost}></Route>
        <Route path="/Restaurantedit/:id" exact component={RestEditPost}></Route>
        <Route path="/Restaurantpost/:id" exact component={RestPostDetails}></Route>
        <Route path="/RestAllDetails" exact component={RestAllDetails}></Route>


            {/* Customer Home */}
           <Route path="/Home" exact component={HomeC}></Route>


           {/* Services */}
           <Route path="/AllServices" exact component={AllServices}></Route>
           <Route path="/addr" component={CreateService}></Route>
           <Route path="/editr/:id" component={EditService}></Route>
           <Route path="/service/:id" component={ServiceDetails}></Route>



 

           </div>
         </BrowserRouter>
    
    )
  }
}