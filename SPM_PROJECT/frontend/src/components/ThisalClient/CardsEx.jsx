import React,{Component} from 'react';
import Card from './CardUI';
import './dividePageReserve.css';
import NavBar from '../NavBarCus.js';
import Footer from '../footer';

import img1 from '../../assets/c.jpg';
import img2 from '../../assets/t.jpeg';
import img3 from '../../assets/k.jpg';
import img4 from '../../assets/eee.jpg';
import img41 from '../../assets/wwww.jpg';
import img8 from '../../assets/s2.jpg';
import img11 from '../../assets/s3.jpg';
import img7 from '../../assets/s1.jpg';
import img20 from '../../assets/c2.jpg';
import img21 from '../../assets/c3.jpg';
import img22 from '../../assets/c1.jpg';






class CardsEx extends Component {
    render(){
        
        return (
            
            <div className="container" >
                <br></br>
                <NavBar/>
                <br></br><br></br>

                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                

                <hr></hr>
                <div className="middle-Text" id="middle-Text" >
                    <h2>Extra Facilities</h2>
                <br></br><br></br>Enjoy many facilities at an affordable price at one place <br></br><br></br><br></br>
                

                    
<table>
    <tr>
        <th><div className="col-md-4" style={{textAlign: 'center'}}>
                    <img src={img41} width="500" height="300" alt="img4" />
                    </div></th>
        <th><div className="col-md-4" style={{textAlign: 'center'}}>
                    <img src={img4} width="500" height="300" alt="img4" />
                    </div></th>
    </tr>
</table>
                    
</div>                
                    </div>
                
                </div>

                <hr/>

                <br>  
                </br><br></br>
                <div className="middle-Text" id="middle-Text">
                    ~ Spa Packages ~<br></br>
                <br></br>

                </div>



                <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                
                    <div className="col-md-4">
                        <Card imgsrc={img8} title='Spa Gold' text='1 person 2 hours LKR 10,000'/>
                    </div>

                    
                    <div className="col-md-4">
                        <Card imgsrc={img11} title='Spa Diamond' text='2 person 2 hours LKR 20,000'/>
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={img7} title='Spa Silver' text='1 person 1 hour LKR 6,000'/>
                    </div>
                
            </div>
            </div>

            <br></br>
            <br></br>  
            <br></br>  








            <div className="middle-Text" id="middle-Text">           
            ~ Club Packages ~
                <br></br><br></br>

                

            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                
                    <div className="col-md-4">
                        <Card imgsrc={img20} title='Club Gold' text='5 person 5 hours LKR 10,000'/>
                    </div>

                    
                    <div className="col-md-4">
                        <Card imgsrc={img21} title='Club Diamond' text='2 person 2 hours LKR 6,000'/>
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={img22} title='Club Silver' text='1 person 1 hour LKR 1,000'/>
                    </div>
              </div>
             </div>   
             </div>


                <br></br>
                <br></br>
                <br></br>
                <br></br>







                <div className="middle-Text" id="middle-Text">
                ~ Pool Packages ~
                <br></br><br></br>

                </div>
                
                

                

            <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title='Pool Party' text='50 persons 5 hours LKR 8,000'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title='Pool Single' text='1 person 2 hours LKR 1,500'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title='Pool Family' text='10 persons 5 hours LKR 5,000'/>
                    </div>
                </div>

           
            </div>
            
            <br></br><br></br><br></br> <br></br>
            <Footer/>
            </div>

            






            

        );
    }
}

export default CardsEx;