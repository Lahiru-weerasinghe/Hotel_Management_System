import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
//import services from '../../models/services';

export default class AllServices extends Component{
  constructor(props){
    super(props);

    this.state={
        services:[]
    };
  }

componentDidMount(){
  this.retriveServices();
}


  retriveServices(){
    axios.get("http://localhost:8000/services").then(res=>{
      if(res.data.success){
        this.setState({
          services:res.data.exsistingService
        });

        console.log(this.state.services);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`http://localhost:8000/service/delete/${id}`).then((res)=>{
      alert("Deleted successfully");
      this.retriveServices();

    })
  }


  filterData(services,searchKey){

    const result = services.filter((service)=>
      //service.type.toincludes(searchKey)
      service.type.toLowerCase().includes(searchKey)||
      service.name.toLowerCase().includes(searchKey)||
      service.discription.toLowerCase().includes(searchKey)
    )

    this.setState({services:result})
  }


  //search
  handleSearchArea = (e) =>{

    const searchKey = e.currentTarget.value;

    axios.get("/services").then(res=>{
      if(res.data.success){
        
        this.filterData(res.data.exsistingService ,searchKey)

      }
    });

  }

  
  
  render(){
    return(
      <div className="container">
        <NavBar/>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
        <h3>All packages</h3>
        </div>
        <div className="col-lg-9 mt-2 mb-2">
          <input
          className="form-control"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSearchArea}>

          </input>
        </div>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Price($)</th>
              <th scope="col">Discription</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.services.map((services,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                
                <td>
                <a href={`/service/${services._id}`} style={{textDecoration:'none'}}>
                {services.type}
                </a>
                </td>
                

                <td>{services.name}</td>
                <td>{services.price}</td>
                <td>{services.discription}</td>

                <td>
                  <a className="btn btn-outline-success" href={`/editr/${services._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                 &nbsp;
                  &nbsp;
                  <a className="btn btn-outline-danger" href={`/AllServices`} onClick={()=>this.onDelete(services._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>

            ))}

          </tbody>
        </table>

        <button className="btn btn-success"><a href="/addr" style={{textDecoration:'none', color:'white' }}>Create New Package</a></button>

        </div>
        
      
    )
  }
}