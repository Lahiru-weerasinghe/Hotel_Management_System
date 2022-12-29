import React, { Component } from 'react'
import NavBar from './NavBar'
import image from '../images/admin1.jpg'

export default class HomeA extends Component {
    render() {
        return (
            <div>
                <div className = "jumbotron" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop: '10px', backgroundImage: `url(${'https://erepublic.brightspotcdn.com/dims4/default/dc89d01/2147483647/strip/false/crop/940x627+0+0/resize/940x627!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.amazonaws.com%2Fba%2F49%2Fe0854b897d5838e2e382112e2ff7%2Fshutterstock-414153883.jpg'})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'600px'}}>
                    <br/>
                    <NavBar/>
                    <br/><br/>
                    <div className="jumbotron" style={{backgroundColor:'rgba(255,255,255,0.7)', padding:'100px 10px 100px 10px'}}>
                        <div className="container">
                            <h1 style={{textAlign: 'center', fontSize:'50px'}}>Hotel Liberty Management</h1>
                        </div>
                    </div>
                </div>
                <div className="jumbotron" style={{paddingTop: '50px', paddingBottom: '50px', backgroundColor: 'white', backgroundImage: 'linear-gradient(to bottom right, black, white'}}>
                    <div class="container px-4" >
                        <div class="row gx-5" >
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="http://geicoevents.net/assets/img/1561199364-hotel-booking.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Reservation Management</h5>
                                            <p class="card-text">All the reservation details</p>
                                            <a href="#" class="btn btn-dark">Go to Reservation Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://media.architecturaldigest.com/photos/6076e03ab33c7ee1062dab6c/16:9/w_2560%2Cc_limit/Fairmont%2520Scottsdale%2520Princess%2520-%2520Princess%2520Pool%2520-%25201418704.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Extra Facilities Management</h5>
                                            <p class="card-text">All the Extra Facilities details</p>
                                            <a href="#" class="btn btn-dark">Go to Extra Facilities Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://wallpaperaccess.com/full/732216.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Financial Management</h5>
                                            <p class="card-text">All the Financial details</p>
                                            <a href="#" class="btn btn-dark">Go to Financial Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://media.istockphoto.com/photos/successful-partnership-picture-id1365436662?b=1&k=20&m=1365436662&s=170667a&w=0&h=TTTy5tNN_VJEP6ZPpY1u5vo2L5fV7HxR4Oty-ofGBkc=" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Customer Management</h5>
                                            <p class="card-text">All the Customer details</p>
                                            <a href="/allCustomer" class="btn btn-dark">Go to Customer Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://img5.goodfon.com/wallpaper/nbig/e/37/interieur-restaurant-view.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Restaurant Management</h5>
                                            <p class="card-text">All the Restaurant details</p>
                                            <a href="/HomeRestaurant" class="btn btn-dark">Go to Restaurant Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://wallpaper.dog/large/20407840.png" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Employee Management</h5>
                                            <p class="card-text">All the Employee details</p>
                                            <a href="#" class="btn btn-dark">Go to Employee Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://thumbs.dreamstime.com/b/supply-chain-businessman-hologram-concept-supply-chain-businessman-hologram-concept-futuristic-177137895.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Supplier Management</h5>
                                            <p class="card-text">All the Supplier details</p>
                                            <a href="/supplierH" class="btn btn-dark">Go to Supplier Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: '50%'}}>
                                        <img src="https://media.architecturaldigest.com/photos/6076e03ab33c7ee1062dab6c/16:9/w_2560%2Cc_limit/Fairmont%2520Scottsdale%2520Princess%2520-%2520Princess%2520Pool%2520-%25201418704.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Extra Facilities Management</h5>
                                            <p class="card-text">All the Extra Facilities details</p>
                                            <a href="#" class="btn btn-dark">Go to Extra Facilities Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://media.istockphoto.com/photos/customer-picture-id1255236227?k=20&m=1255236227&s=612x612&w=0&h=0c635yDNm_dTVo_LMab3wTAUeybYXDNXRS5CrRJD5Tc=" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Feedback Management</h5>
                                            <p class="card-text">All the Feedback details</p>
                                            <a href="#" class="btn btn-dark">Go to Feedback Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            
        )
    }
}