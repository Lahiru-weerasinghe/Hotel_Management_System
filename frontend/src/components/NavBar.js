import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: '30px 30px 10px 20px'}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" style={{fontSize:'30px'}} href="#">HOTEL Liberty</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/AdminHome">Home</a>
                                </li>
                                &nbsp;
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/hres">Reservations </a>
                                </li>
                                &nbsp;
                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Finance
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/finance/basicsalary">Basic Salaries</a></li>
                                    <li><a className="dropdown-item" href="/finance/incomeexpenditure">Income and Expenditure</a></li>
                                <li><a className="dropdown-item" href="/profit">Profit</a></li> 
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/finance/reports">Reports</a></li>
                                </ul>
                                </li> */}
                                &nbsp;
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/allCustomer">Customers</a>
                                </li>
                                &nbsp;
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/HomeRestaurant">Restaurant</a>
                                </li>
                                &nbsp;
                                {/* <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/Emp">Employees</a>
                                </li> */}
                                &nbsp;
                                {/* <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/supplierH">Suppliers</a>
                                </li> */}
                                &nbsp;
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/AllServices">Extra-Facilities</a>
                                </li>
                                &nbsp;
                                {/* <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/FeedbackHome">Feedbacks</a>
                                </li> */}
                                &nbsp;
                                
                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li> */}
                            </ul>                         
                            </div>
                    </div>               
                </nav>    
            </div>
        )
    }
}