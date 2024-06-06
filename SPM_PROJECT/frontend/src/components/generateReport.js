import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import ReactToPrint from "react-to-print";  //print something from react

const thStyle = {
  fontFamily:"Anton",
  fontWeight:"normal",
  fontStyle:"normal"
};


class ComponentToPrint extends React.Component{
  constructor(props){
    super(props);

    this.state={
      customers:[]
    };
  }

  componentDidMount(){      //execute the React code when the component is already placed
    this.retrieveCustomers();
  }

  retrieveCustomers(){
    axios.get("http://localhost:8000/customers").then(res =>{
      if(res.data.success){
        this.setState({
          customers:res.data.existingCustomers
        });
        console.log(this.state.customers)
      }
    });
  }


    render(){
      return(
        
        <div className="container">
          <NavBar/>
            <h2>All Customer Details</h2>
            <table className="table table-hover" style={{marginTop:'40px'}}>
            <thead>
              <tr>
                   <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Address</th>
                   <th scope="col">Nic</th>
                   <th scope="col">Contact Number</th>
                   
              </tr>
            </thead>

            <tbody>
                 {this.state.customers.map((customers,index)=>(
                   <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td>{customers.name}</td>
                     <td>{customers.email}</td>
                     <td>{customers.address}</td>
                     <td>{customers.nic}</td>
                     <td>{customers.contactNumber}</td>
                                        </tr>
                 ))}
               </tbody>


            </table>
  
        </div>
      );
    }
  } 
  
  
  class Example extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <button type="button" className="btn btn-dark" style={{color:'white', width:'12%',float: 'right', transform: 'translate(-100%,1500%)'}}>Print this out!</button>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      );
    }
  }
  
  export default Example;  
        
        
       
        
  