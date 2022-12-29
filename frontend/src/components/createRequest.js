import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';



export default class createRequest extends Component{

  

  constructor(props){
    super(props);
    this.state={
      name:"",
      nic:"",
      request:""

    }

  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
    
    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const {name,nic,request} = this.state;

    const data ={
      name:name,
      nic:nic,
      request:request
    }
    console.log(data)
    axios.post("/request/save",data).then((res) =>{
      if(res.data.success){
        alert("Your Request saved successfully")
        this.setState(
          {
            name:"",
            nic:"",
            request:""
          }
        )
      }
    })



  }
  
  render(){
    return(
      <html>
      <body>
        <section style={{backgroundImage:`url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222batch3-kul-21_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ec7b8c3c86b2af33e936d1db7832326a')`,
        backgroundSize:'cover', height:'780px'}}>
      
      <div className = "container" >
            <NavBar/>
       
      <div className="form" style={{backgroundColor:'white',height:'550px',width:'500px',borderRadius:'14px',marginLeft:'350px',marginTop:'15px'}}>  
        <h1  style={{marginTop:'30px',paddingTop:'25px',fontFamily:'monospace',fontSize:'25px',fontWeight:'bold'}}><center> REQUEST FORM</center></h1>
       
        <form className="row" onSubmit={this.onSubmit} style={{ margin:"25px 85px 75px 100px"}}>
            <div className="form-group" style={{marginBottom:'15px'}}>
               <label style={{marginBottom:'5px'}}>Registered Name</label>
               <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
               className="form-control"
               name="name"
               placeholder="Enter Your Registered Name"
               pattern="[a-z A-Z .]+"
               value={this.state.name}
               onChange={this.handleInputChange}
               required/>
               <br></br>
            </div>
            

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="nic"
              placeholder="Enter your NIC Number"
              maxLength = "10"
              value={this.state.nic}
              onChange={this.handleInputChange}
              required/>
               <br></br>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Request</label>
              <textarea style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}}
              className="form-control"
              name="request"
              placeholder="Enter Your Updating Details"
              value={this.state.request}
              onChange={this.handleInputChange}
              required/>
               <br></br>
            </div>

           
             <table>
              <tr>
                <td>
            <button className="btn btn-success" type="submit" style={{margin:"20px 85px 85px 100px", borderRadius:'35px'}} >
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
            </td>
            </tr>
            </table>
            </form>
            


      /</div> 

      </div>
      </section>
       </body>
      </html>
      
      
      
      
    )
    }
}