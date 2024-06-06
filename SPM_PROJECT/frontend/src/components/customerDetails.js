import React,{ Component } from 'react';
import axios from 'axios';
import NavBarCus from './NavBarCus';


export default class generateReport extends Component{
  constructor(props){
    super(props);

    this.state={
      customers:[]               
    };
  }

    
  componentDidMount(){
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

  filterData(customers,searchKey){
    const result = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchKey)||
    customer.name.includes(searchKey)||
    customer.name.toUpperCase().includes(searchKey)||
    customer.email.toLowerCase().includes(searchKey)||
    customer.address.toLowerCase().includes(searchKey)
    
    
    )

    this.setState({customers:result})
  }

  handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;
   
    axios.get("http://localhost:8000/customers").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingCustomers,searchKey)
      }
    });




  }


    render(){
      return(
        
        <div className="container">
          <NavBarCus/>
          <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All Customer Details</h2>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
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
                     <td>
                         <a href={`/customer/${customers._id}`} style={{textDecoration:'none'}}>
                         {customers.name}
                         </a>
                     </td>
                     <td>{customers.email}</td>
                     <td>{customers.address}</td>
                     <td>{customers.nic}</td>
                     <td>{customers.contactNumber}</td>
                                        </tr>
                 ))}
               </tbody>


            </table>
  
        </div>
        
        
       
        
      )
      }
  }