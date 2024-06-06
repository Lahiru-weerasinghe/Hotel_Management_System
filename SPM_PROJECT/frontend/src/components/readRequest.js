import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class readRequest extends Component{
  constructor(props){
    super(props);

    this.state={
      requests:[]
    };
  }

  componentDidMount(){
    this.retrieveRequests();
  }

  retrieveRequests(){
    axios.get("http://localhost:8000/requests").then(res =>{
      if(res.data.success){
        this.setState({
          requests:res.data.existingRequests
        });
        console.log(this.state.requests)
      }
    });
  }
  onDelete = (id) =>{

    axios.delete(`http://localhost:8000/request/delete/${id}`).then((res)=>{
      alert("Customer Profile Deleted Successfully");
      this.retrieveRequests();
    })
  }


    render(){
      return(
        
        <div className="container">
          <NavBar/>
            <h2>Profile Updating Requests</h2>
            <table className="table table-hover" style={{marginTop:'40px'}}>
            <thead>
              <tr>
                   <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Nic</th>
                   <th scope="col">Request</th>
                   <th scope="col">Action</th>
                   
              </tr>
            </thead>

            <tbody>
                 {this.state.requests.map((requests,index)=>(
                   <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td>{requests.name}</td>
                     <td>{requests.nic}</td>
                     <td>{requests.request}</td>
                     <td>
                     <a className="btn btn-danger" href={`/readRequest`} onClick={() =>this.onDelete(requests._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                     </a>
                     </td>
                                        </tr>
                 ))}
               </tbody>


            </table>
  
        </div>
        
        
       
        
      )
      }
  }