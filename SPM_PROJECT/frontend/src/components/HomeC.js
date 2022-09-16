import React, { Component } from 'react'
import NavBarC from './NavBarCus'
import Footer from './footer';
import SlideShowCus from './slideShowCus'
import 'react-slideshow-image/dist/styles.css'
import image from '../images/backQ3.jpg'



export default class HomeA extends Component {
    render() {
        return (
            <div className="jumbotron">
            <div className = "jumbotron" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop: '10px', backgroundImage: `url(${image})`,backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <br/>
                <NavBarC/>
                <div>
                    <div className="jumbotron" style={{backgroundColor:'rgba(255,255,255,0.7)', marginTop:'100px', marginBottom:'100px'}}>
                        <br/>
                        <h1 style={{textAlign: 'center', fontFamily: 'Bonheur Royale', fontSize:'150px', color: 'black', fontWeight: '500'}}>Welcome to Hotel Liberty</h1>
                    </div>
                        <br/><br/><br/><br/>
                        <br/><br/><br/><br/>
                        <br/><br/><br/><br/>
                        <br/><br/><br/><br/>
                        <br/><br/><br/><br/>
                     
                </div>
                </div>
                <div className="jumbotron" style={{backgroundColor:'rgba(255,255,255,0.8)', padding:'80px 10px 80px 10px'}}>
                    <div className="container">
                        

                        
                        <div style={{textAlign: 'center'}}>
                            <h1 style={{fontFamily: 'Bonheur Royale', fontSize:'100px', fontWeight:'600'}}>Hotel Liberty</h1>
                            <h2>SRI LANKA</h2>
                            <p style={{fontSize: '20px'}}>
                                Revel in our histories. Chase our mysteries. Discover extraordinary places. Unwind in our spaces. <br/>
                                At Hotel Liberty, we promise you are in good hands. <br/>
                                Our spaces have also been designed to seamlessly blend the finest of Sri Lankan hospitality with the nature of our surroundings, creating atmospheres of undiscovered luxury that you will find hard to match. <br/>
                                With rooms that draw you into a world of their own, and signature dining experiences that transport you to a world beyond, your stay with us is a stay to remember. No matter how long you choose to spend with our family, we will always welcome you with open arms and a tropical embrace to make you feel at home. <br/>
                                <br/>
                                As you explore our island, the smiles of our people will accompany you through the many natural spectacles and historical wonders on your journey. And although our home may hold fascinating legacies, it is also an exotic habitat that we carefully preserve for the future. <br/>
                                It is one we share not only with the world, but also with each other – and this is what binds us together as a nation of warmth and compassion. <br/>
                                Through uncharted lands or world-famous destinations, our eternal spirit of Sri Lankan hospitality is one that is refreshingly contagious, in the best way possible. For it begins and ends with a simple blessing bestowed upon each and every one of you when you set foot on our land: <br/>
                                <br/><br/>
                                <div style={{fontFamily: 'Bonheur Royale', fontSize:'50px', fontWeight:'600'}}>Ayubowan – may you live long!</div>
                            </p>
                        </div>
                        
                        <br/><br/><br/>

                        <div className="jumbotron" style={{backgroundColor:'rgba(0,0,0,0.9)', padding:'50px 50px 50px 50px'}}>
                            <SlideShowCus/>
                        </div>
                    </div>
                    
                </div>
            <Footer/>
            </div>
            
        )
    }
}