import React, {Component} from 'react'
import axios from 'axios';
import NavBar from './NavBar';

export default class SupplierHome extends Component {
constructor(props){
  super(props);

  this.state={
    suppliers:[]
  };
}
componentDidMount(){
  this.retrieveSuppliers();
}

retrieveSuppliers(){
  axios.get("http://localhost:8000/suppliers").then(res =>{
    if(res.data.success){
      this.setState({
        suppliers:res.data.existingSuppliers
      });
      console.log(this.state.suppliers)


    }
  });
}
onDelete = (id) =>{
  axios.delete(`http://localhost:8000/supplier/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrieveSuppliers();
  })
}
filterData(suppliers,searchkey){
  const result = suppliers.filter((supplier)=>

  supplier.SupplierName.toLowerCase().includes(searchkey)||
  supplier.SupplierName.toUpperCase().includes(searchkey)||
  supplier.SupplierName.includes(searchkey)||
  supplier.CompanyWebsiteName.toLowerCase().includes(searchkey)

  )
  this.setState({suppliers:result})
}

handleSearchArea = (e) =>{
  const searchkey= e.currentTarget.value;

  axios.get("http://localhost:8000/suppliers").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingSuppliers,searchkey)


    }
  });
}

render() {
  return (
    <div className="container">
      <NavBar/>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Suppliers</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
          className="from-control"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSearchArea}>
            
          </input>
        </div>
      </div>
      
      <table className="table table-hover" style={{marginTop:'40px' ,width:'100%',marginLeft:'0px',marginRight:'99px'}}>
      
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Supplier Address</th>
            <th scope="col">Supplier Email</th>
            <th scope="col">Supplier Contact Number</th>
            <th scope="col">Company Website Name</th>
            <th scope="col">Trading Since</th>
            <th scope="col">Type Of Business</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Action</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.suppliers.map((suppliers,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/supplier/${suppliers._id}`} style={{textDecoration:'none'}}>
                    {suppliers.SupplierName}
                    </a>
                    </td>
                <td>{suppliers.SupplierAddress}</td>
                <td>{suppliers.SupplierEmail}</td>
                <td>{suppliers.SupplierContactNumber}</td>
                <td>{suppliers.CompanyWebsiteName}</td>
                <td>{suppliers.TradingSince}</td>
                <td>{suppliers.TypeOfBusiness}</td>
                <td>{suppliers.PaymentMethod}</td>
                <td>
                  <a className="btn btn-warning" href={`/editsup/${suppliers._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  </td>
                  <td>
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(suppliers._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
          ))}
        </tbody>

      </table>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-success"><a href="/addsup" style={{textDecoration:'none',color:'white'}}>Create New Supplier</a></button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-success"><a href="/re" style={{textDecoration:'none',color:'white'}}> Generate Report</a></button>
    </div>
  )
}
}