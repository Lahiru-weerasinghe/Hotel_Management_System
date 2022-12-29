import React, { Component } from 'react'
import './footer.css'

/**
* @author
* @class footer
**/

export default class footer extends Component {
 state = {}
 render() {
  return(
   <div className="jumbotron">
        <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Hotel<span> |Liberty</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Reservation</a>
				
					<a href="#">Restaurant</a>
				                      
					<a href="#">Services</a>
					
					<a href="#">About us</a>
					
					<a href="#">Feedbacks</a>
				</p>

				<p class="footer-company-name">Hotel Liberty © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Negambo, Sri Lanka</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>011 1498220</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				{/* <p class="footer-company-about">
					<span>About the hotel</span>
					
				</p> */}

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
   </div>
    )
   }
 }