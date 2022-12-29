import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBarCus';

export default class viewCustomer extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//          customer:{}
//     };
//   }

//   componentDidMount(){    //execute the React code when the component is already placed
//     const id = this.props.match.params.id;

//     axios.get(`/customer/${id}`).then((res) =>{
//       if(res.data.success){
//         this.setState({
//           customer:res.data.customer
//         });

//         console.log(this.state.customer);
//       }
//     });
//   }










//   render(){

//     const {name,email,address,nic,contactNumber} = this.state.customer;
//     return(
//       <div className = "container" >
//       <NavBar/>
//       <div style={{marginTop:'20px'}}>
//         <h4>{name}</h4>
//         <hr/>

//         <dl className="row">
//           <dt className="col-sm-3">Name</dt>
//           <dd className="col-sm-9">{name}</dd>

//           <dt className="col-sm-3">Email</dt>
//           <dd className="col-sm-9">{email}</dd>

//           <dt className="col-sm-3">Address</dt>
//           <dd className="col-sm-9">{address}</dd>

//           <dt className="col-sm-3">NIC</dt>
//           <dd className="col-sm-9">{nic}</dd>

//           <dt className="col-sm-3">Contact Number</dt>
//           <dd className="col-sm-9">{contactNumber}</dd>
//           <br/>
//           <br/>

          
//         </dl>

//         {/* <h4><i> If you want to update your details, you need to request to the hotel administrator</i></h4><br/> */}
//         <button className="btn btn-success"><a href={`/edit/:id`} style={{textDecoration:'none',color:'white'}}>Edit Profile</a></button>

//       </div>
//       </div>
//     )
//   }
// }



constructor(props){
  super(props);

  this.state={
    customers:[]
  };
}

componentDidMount(){        //execute the React code when the component is already placed
  this.retrieveCustomers();
}


retrieveCustomers(){
  axios.get("/customers").then(res =>{
    if(res.data.success){
      this.setState({
        customers:res.data.existingCustomers
      });
      console.log(this.state.customers)
    }
  });
}

onDelete = (id) =>{

  axios.delete(`/customer/delete/${id}`).then((res)=>{
    alert("Customer Profile Deleted Successfully");
    this.retrieveCustomers();
  })
}

//filtering using the search bar
filterData(customers,searchKey){
  const result = customers.filter((customer) =>
  customer.name.includes(searchKey)||       /* search by name */
  customer.name.toLowerCase().includes(searchKey)||
  customer.name.toUpperCase().includes(searchKey)||
  customer.email.toLowerCase().includes(searchKey)||
  customer.address.toLowerCase().includes(searchKey)||
  customer.nic.includes(searchKey)||
  customer.contactNumber.includes(searchKey)
  
  
  )

  this.setState({customers:result})    //set the result
}

//search bar
handleSearchArea = (e) =>{              //get the changes and update the value
  const searchKey= e.currentTarget.value;
 
  axios.get("/customers").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingCustomers,searchKey)
    }
  });




}

render(){
  return(
    <div className="container">
      <NavBar/>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          {/* <h2>All Customer Details</h2> */}
          <h2>My Profile</h2>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          {/* <input 
          className="form-control"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSearchArea}>   
          </input> */}
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
                 {/* <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
               {this.state.customers.map((customers,index)=>(         //to take an array of customer details
              
              //fill the rows with customer details
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
                   <td>
                   <a className="btn btn-warning" href={`/edit/${customers._id}`}>
                   <i className="fas fa-edit"></i>&nbsp;Edit Profile              
                   </a>
                   &nbsp; 

                   {/* <a className="btn btn-danger" href={`#`} onClick={() =>this.onDelete(customers._id)}>
                   <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a> */}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>

           
           {/* <button className="btn btn-success"><a href="/report" style={{textDecoration:'none',color:'white'}}>generate Report</a></button>
           &nbsp; */}
          
           {/* <button className="btn btn-success"><a href="/readRequest" style={{textDecoration:'none',color:'white'}}>Check New Requests</a></button> */}
           </div>
       )}
    
  
}

