import React,{ Component } from 'react';
import axios from 'axios';



export default class createCustomer extends Component{
  
  






  render(){
    return(
      //<BrowserRouter>
     
      <html>
      <body>
        <section style={{backgroundImage:`url('https://cdn.wallpapersafari.com/18/51/Nm4UIX.jpg')`,
        backgroundSize:'cover', height:'762px', width:'1416px'}}><br/><br/>
            
            <div className="form" style={{backgroundColor:'white',height:'400px',width:'400px',borderRadius:'14px',marginLeft:'140px',marginTop:'15px'}}>
                    <h1 style={{marginTop:'30px',paddingTop:'15px',fontFamily:'monospace',fontSize:'20px'}} ><center>WELCOME TO HOTEL LIBERTY</center></h1>
                    <form className="row" style={{ margin:"10px 85px 75px 75px"}} >
                           

                        <div className="form-group" style={{marginLeft:'-30px',marginTop:'30px'}}>
                            
                            <label style={{marginBottom:'5px'}}>Email</label>
                            <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Your Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                            //value={this.state.email}
                            //onChange={this.handleInputChange}
                            />
                          
                        </div>

                        <div className="form-group" style={{marginLeft:'-30px'}}>
                            <br></br>
                              <label style={{marginBottom:'5px'}}>Contact Number</label>
                              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
                              className="form-control"
                              name="contactNumber"
                              placeholder="Enter your contact number"
                              required
                              //value={this.state.contactNumber}
                              //onChange={this.handleInputChange}
                              />
                              
                        </div>

                        <button className="btn btn-success"  style={{marginLeft:"13px",borderRadius:'35px',marginTop:'20px'}}><a href="/RestCustomer" style={{textDecoration:'none',color:'white',fontFamily: 'monospace'}}>LOGIN</a></button>

                        <a style={{fontSize: '12px',marginLeft:"20px",marginTop:'10px',fontFamily: 'monospace',color: 'blue'}}href="/register">Not have an account?<i>Signup</i></a>
                    </form>

                        
                        
                        
            </div>
              
   
       
        </section>
        </body>
        </html>

      
      
      
      //</BrowserRouter>
      
    )
    }
}