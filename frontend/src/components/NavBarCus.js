import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: '30px 30px 10px 20px'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Home" style={{fontSize:'30px'}}>HOTEL Liberty</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/addRes">Reservation </a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/RestCustomer">Restaurant</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/addr">Extra-Facilities</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">About us</a>
                        </li>
                        &nbsp;
                        {/* <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/addf">Feedbacks</a>
                        </li> */}
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/register">SignUp</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/createCustomer">Login</a>
                        </li>
                        &nbsp;
                    </ul>
                                                
                    <div class="btn-group dropstart">
                                <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                                <i class="fas fa-user"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="/customerDetails">Profile</a></li>
                                    <li><hr className="dropdown-divider"/></li>

                                    <li><a className="dropdown-item" href="/">Sign out</a></li>

                                </ul>
                    </div>
                    

                    </div>
                </div>
                </nav>
                                
            </div>
        )
    }
}