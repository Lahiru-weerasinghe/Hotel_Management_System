import React, { Component } from 'react';
import NavBarCus from './NavBarCus';
import res11 from '../images/res11.jpeg'
import res2 from '../images/res2.jpeg'
import res3 from '../images/res3.jpeg'
 import pexe from '../images/pexe.jpg'
 import Creamy from '../images/CreamyChicken.jpeg'
 


 
import res5 from '../images/res5.jpg'

import SwiftSlider from 'react-swift-slider'
const data =  [ 
    {'id':'1', src:res11},
    {'id':'5',src:res5},
    {'id':'2', src:res2},
    {'id':'3',src:res3},
    {'id':'4',src:Creamy},
  ];

export default class RestCustomer extends Component {
    
 

    render(){
        return(

<body>
<NavBarCus/>
<br></br>

<SwiftSlider data={data} height={500} enableNextAndPrev={true} interval={2500}/>

    <div id="main-wrapper" className="sssssf">

        <div class="content-wrapper" >

            <section class="spacer bg-fbf5e6c9"> 
                <div class="container">
                    <div class="row justify-content-md-center pt-5"  >
                        <div class="col-md-9 text-center">
                            <h2 class="text-dark">All your favorite dishes and a variety of  <span class=" ">hand-crafted menus under one roof.</span></h2>
                            <br></br>
                        </div>
                    </div>
                    <div class="row py-5" style={{backgroundImage: `url(${pexe})`, backgroundSize: 'cover' }} >
                     <div class="col-md-6" >
                            <div className="card p-2 mr-1"  >
                                <div class="card-body p-4" >
                                    <div class="text-center">
                                        <h2 class="text-dark font-weight-medium">Package A</h2>
                                        <h4 class="text-success">Rs.2500</h4>
                                    </div>
                                    <div class="live-box text-center mt-4">
                                        <div class="overlay">
                                         </div>
                                    </div>
                                    <p class="text-muted mt-5 line-h33 font-16">Rich, flavorful and laced with wine, this creamy chicken pasta is a family favorite. No one ever guesses it’s so quick and easy!</p>
                                    <div class="row text-muted  mt-4">
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing ">
                                                <li><i class="mdi mdi-disk"></i>Creamy chicken pasta</li>
                                                <li><i class="mdi mdi-disk"></i>1pc Barbeque</li>
                                                <li><i class="mdi mdi-disk"></i>Spaghetti</li>
                                                <li><i class="mdi mdi-disk"></i>Fish Fingers</li>
                                             
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing">
                                                <li><i class="mdi mdi-disk"></i>Mac and Cheese balls</li>
                                                <li><i class="mdi mdi-disk"></i>Carbonara</li>
                                                <li class="text-dark "><i class="mdi mdi-disk"></i>Deserts</li>
                                                <li class="text-dark"><i class="mdi mdi-disk"></i>1 Glass Iced Tea</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="text-center mt-4 mb-3">
                                        <a href="/Restaurantadd" class="btn btn-custom btn-outline-info btn-lg" target="_blank">Hurry Up!! Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <h1> </h1>
                            <h1> </h1>
                            <h1> </h1> 

                        </div>

<br></br> 

                        <div class="col-md-6">
                            <div class="card p-2 mr-1">
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h2 class="text-dark font-weight-medium">Package B</h2>
                                        <h4 class="text-success">Rs.5000</h4>
                                    </div>
                                    <div class="live-box text-center mt-4">
                                        <div class="overlay">
                                         </div>
                                    </div>
                                    <p class="text-muted mt-5 line-h33 font-16">Vegan Mongolian Noodles And Veggies Stir Fry In Spicy Soy Ginger Sauce</p>
                                    <div class="row text-muted  mt-4">
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing">
                                                <li><i class="mdi mdi-disk"></i>Mongolian Vege</li>
                                                <li><i class="mdi mdi-disk"></i>French Fries</li>
                                                <li><i class="mdi mdi-disk"></i>Vege Wrap</li>
                                                <li><i class="mdi mdi-disk"></i>Waffle with Ice Cream</li>
                                             
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing">
                                                <li><i class="mdi mdi-disk"></i>Mocaccino</li>
                                                <li><i class="mdi mdi-disk"></i>Greek Salad</li>
                                                <li class="text-dark "><i class="mdi mdi-disk"></i>Orangge Frappe</li>
                                                <li class="text-dark"><i class="mdi mdi-disk"></i>Coffe milk shake</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="text-center mt-4 mb-3">
                                        <a href="/Restaurantadd" class="btn btn-custom btn-outline-info btn-lg" target="_blank">Hurry Up!! Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
     <br></br>     <br></br>
     <br></br>
     <br></br>

                   
                        <div class="col-md-6">
                            <div class="card p-2 mr-1">
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h2 class="text-dark font-weight-medium">Package C</h2>
                                        <h4 class="text-success">Rs.3500</h4>
                                    </div>
                                    <div class="live-box text-center mt-4">
                                        <div class="overlay">
                                         </div>
                                    </div>
                                    <p class="text-muted mt-5 line-h33 font-16">A firm takeout favourite! With its signature curry flavour and yellow hue, Singapore Noodles are made with thin rice noodles, prawns/shrimp, Chinese BBQ Pork, egg and red capsicum/bell peppers. Don’t fret if you don’t have all the ingredients – this is worth making with whatever you have!</p>
                                    <div class="row text-muted  mt-4">
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing">
                                                <li><i class="mdi mdi-disk"></i>Singapore fried noodles</li>
                                                <li><i class="mdi mdi-disk"></i>Pasta</li>
                                                <li><i class="mdi mdi-disk"></i>Club sandwich</li>
                                                <li><i class="mdi mdi-disk"></i>Spicy chickn waffle</li>
                                             
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing">
                                                <li><i class="mdi mdi-disk"></i>Ceylon Watalappan</li>
                                                <li><i class="mdi mdi-disk"></i>Strawberry eclairs</li>
                                                <li class="text-dark "><i class="mdi mdi-disk"></i>Baked Cheesecake</li>
                                                <li class="text-dark"><i class="mdi mdi-disk"></i>Iced Tea</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="text-center mt-4 mb-3">
                                        <a href="/Restaurantadd" class="btn btn-custom btn-outline-info btn-lg" target="_blank">Hurry Up!! Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>     <br></br>
     <br></br>
     <br></br>
                        <div class="col-md-6">
                            <div class="card p-2 mr-1">
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h2 class="text-dark font-weight-medium">Package D</h2>
                                        <h4 class="text-success">Rs.5000</h4>
                                    </div>
                                    <div class="live-box text-center mt-4">
                                        <div class="overlay">
                                         </div>
                                    </div>
                                    <p class="text-muted mt-5 line-h33 font-16">A classic Thai street food, this grilled Thai Chicken is so good that it almost converted a vegetarian.</p>
                                    <div class="row text-muted  mt-4">
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing">
                                                <li><i class="mdi mdi-disk"></i>Grilled Marinated Thai Chicken</li>
                                                <li><i class="mdi mdi-disk"></i>Tom Yum Goong (Spicy Shrimp Soup)</li>
                                                <li><i class="mdi mdi-disk"></i>Noodle Soup</li>
                                                <li><i class="mdi mdi-disk"></i>Spicy Green Papaya Salad</li>
                                             
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="list-unstyled listing">
                                                <li><i class="mdi mdi-disk"></i>Spicy Seafood Salad</li>
                                                <li><i class="mdi mdi-disk"></i>Easy To Customize</li>
                                                <li class="text-dark "><i class="mdi mdi-disk"></i>Vanila Milk shake</li>
                                                <li class="text-dark"><i class="mdi mdi-disk"></i>Orange Frappe</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="text-center mt-4 mb-3">
                                     
                                        <a href="/Restaurantadd" class="btn btn-custom btn-outline-info btn-lg" target="_blank">Hurry Up!! Book Now</a>
                                    
                                     </div>

                                
                                </div>
                         
                            
                         
                            </div>
                        </div>
     
                    </div>
                </div>
            </section>
        </div>
      
        <footer class="text-center p-4"> All Rights Reserved by Hotel Sky Dragons </footer>
    </div>
</body>
        )
    }

}