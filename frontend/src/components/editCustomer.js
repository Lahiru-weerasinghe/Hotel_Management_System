import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBarCus';

export default class editCustomer extends Component{

  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      address:"",
      nic:"",
      contactNumber:""

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
    const id = this.props.match.params.id;
    const {name,email,address,nic,contactNumber} = this.state;

    const data ={
      name:name,
      email:email,
      address:address,
      nic:nic,
      contactNumber:contactNumber
    }
    console.log(data)
    axios.put(`http://localhost:8000/customer/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Customer Profile Updated Successfully")
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


  componentDidMount(){        //execute the React code when the component is already placed
    const id = this.props.match.params.id;

    axios.get(`/customer/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.customer.name,
          email:res.data.customer.email,
          address:res.data.customer.address,
          nic:res.data.customer.nic,
          contactNumber:res.data.customer.contactNumber
        });

        console.log(this.state.customer);
      }
    });
  }


  render(){
    return(
      <html>
      <body>
      <div className = "container" >
            <NavBar/> </div>
        <section style={{backgroundImage:`url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222batch3-kul-21_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ec7b8c3c86b2af33e936d1db7832326a')`,
        backgroundSize:'cover', height:'658px',width:'1282px', paddingTop:'15px'}}>
      
      <div className="form" style={{backgroundColor:'white',height:'550px',width:'500px',borderRadius:'14px',marginLeft:'350px',marginTop:'15px'}}>
      <h1 style={{marginTop:'30px',paddingTop:'25px',fontFamily:'monospace',fontSize:'25px',fontWeight:'bold'}} ><center>EDIT PROFILE</center></h1>
        <form className="row" style={{ margin:"25px 85px 75px 100px"}}>
            <div className="form-group" style={{marginBottom:'15px'}}>
               <label style={{marginBottom:'5px'}}>Full Name</label>
               <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
               className="form-control"
               name="name"
               placeholder="Enter Your Full Name"
               value={this.state.name}
               onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="address"
              placeholder="Enter Your Address"
              value={this.state.address}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="nic"
              placeholder="Enter your NIC Number"
              value={this.state.nic}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input style={{width: '300px',borderRadius: '8px',fontSize: '15px',fontFamily: 'monospace'}} type="text"
              className="form-control"
              name="contactNumber"
              placeholder="Enter Your Mobile Number"
              value={this.state.contactNumber}
              onChange={this.handleInputChange}/>
            </div>
            </form>

            <button className="btn btn-success" type="submit" style={{marginLeft:"190px",borderRadius:'35px',marginTop:'-100px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>


        
      </div>
      
      </section>
      </body>
      </html>
      
      
      
      
    )
    }
}