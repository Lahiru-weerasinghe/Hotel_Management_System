import React,{ Component } from 'react';
import axios from 'axios';


export default class createCustomer extends Component{

  constructor(props){        //initialize all the values  using constructor
    super(props);
    this.state={
      name:"",
      email:"",
      address:"",
      nic:"",
      contactNumber:""

    }

  }

  handleInputChange = (e) =>{ //understand the changes of frontend inputs and update the current state
    const {name,value} = e.target;
    
    this.setState({
      ...this.state,
      [name]:value
    })
  }


  //implement onSubmit method
  onSubmit = (e) =>{
    e.preventDefault();
    const {name,email,address,nic,contactNumber} = this.state;

    const data ={
      name:name,
      email:email,
      address:address,
      nic:nic,
      contactNumber:contactNumber
    }
    console.log(data)      //converts html tags into the javascript function and also it sends our data to console log in our web browser
    if(name && email && address && nic && contactNumber){
     
    axios.post("/customer/register",data).then((res) =>{
      if(res.data.success){
        alert("Customer Profile Created Successfully")
        this.setState(
          {
            name:"",
            email:"",
            address:"",
            nic:"",
            contactNumber:""
          }
        )
      }
    })
  }
   else{
    alert("invalid input")
   }



  }
  
  //implement GUI 
  render(){
    return(
      <html>
      <body>
        <section style={{backgroundImage:`url('https://wallpapershome.com/images/pages/ico_h/659.jpg')`,
        backgroundSize:'cover',height:'765px',width:'1407px'}}>    
      
       <br></br>
       <div className="form" style={{backgroundColor:'white',height:'550px',width:'500px',borderRadius:'12px',marginLeft:'140px'}}>
        <h1 style={{marginTop:'15px',paddingTop:'15px',fontSize:'35px'}} ><center>SIGNUP</center></h1>
        <br></br>
          <form className="row" onSubmit={this.onSubmit} style={{ margin:"-30px 85px 75px 75px"}} >
            
            <div className="form-group col-XS-3" style={{marginBottom:'15px'}}>
               <label style={{marginBottom:'5px'}}>Name</label>
               <input   style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}}type="text"
               className="form-control"
               name="name"
               placeholder="enter your name"
               pattern="[a-z A-Z .]+"
               value={this.state.name}
               onChange={this.handleInputChange}
               required/>
              
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="email"
              className="form-control"
              name="email"
              placeholder="enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={this.state.email}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="address"
              placeholder="enter your address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="nic"
              placeholder="enter your NIC number"
              pattern="[0-9]{10}+V$"
              maxLength={10}
              value={this.state.nic}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="contactNumber"
              placeholder="enter your contact number"
              pattern="[0-9]{10}"
              maxLength={10}
              value={this.state.contactNumber}
              onChange={this.handleInputChange}
              required/>
            </div>
            
             <table>
                 <tr>
                     <td>
            <button className="btn btn-success" type="submit" style={{marginLeft:"120px",borderRadius:'35px',fontFamily: 'monospace'}} > 
             SIGNUP
            </button>
            </td>
            <td>
              <br/>
              
            </td>
            </tr>
            </table>

            <a style={{fontSize: '12px',marginLeft:"60px",fontFamily: 'monospace',color: 'blue'}}href="/createCustomer">Already have an account?<i>Login</i></a>
          

            </form>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        
        </section>
        
        </body>
        </html>
      
      
      
      
    )
    }
}
