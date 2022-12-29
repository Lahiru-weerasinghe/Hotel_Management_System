import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

 

export default class EmpHome extends Component {
  constructor(props){
    super(props);
     

    this.state={
      employees:[]
    };
  }
  componentDidMount(){
    this.retrieveEmployees();
  }

  retrieveEmployees(){
    axios.get(" http://localhost:8000/employees").then(res=>{
      if(res.data.success){
        this.setState({
          employees:res.data.existingEmployees
        });
        console.log(this.state.employees)
      }
    });
  }

onDelete=(id)=>{
    axios.delete(`http://localhost:8000/employee/delete/${id}`).then((res) =>{
        alert("Deleted Successfully");
        this.retrieveEmployees();
    })
}

filterData(employees,searchKey){
  const result =employees.filter((employee)=>
  employee.name.toLowerCase().includes(searchKey)||
  employee.designation.toLowerCase().includes(searchKey)||
  employee.attendence.toLowerCase().includes(searchKey)
  
 
  )
  this.setState({employees:result})
}

handleSearchArea = (e)=>{
  
    const searchKey=e.currentTarget.value;
    axios.get(" http://localhost:8000/employees").then(res=>{
      if(res.data.success){
        this.filterData(res.data.existingEmployees,searchKey)
      }
      });     
}

  render() {
    return (
      <div className="container">
        <NavBar/>
       <div className="row">
           <div className="col-lg-9 mt-2 mb-2">
               <h4>Employee Details</h4>
           </div>
           <div className="col-lg-3 mt-2 mb-2">
               <input
               className="form-control"
               type="search"
               placeholder="search"
               name="searchQuery"
               onChange={this.handleSearchArea}></input>
           </div>
       </div>
       <table  className="table table-bordered border-warning"  >
         <thead>
           <tr>
              
             <th scope="col">#</th>
             <th scope="col">Employee_Name</th>
             <th scope="col">Designation</th>
             <th scope="col">Level</th>
             <th scope="col">Attendence</th>
             <th scope="col">Action</th>
              
           </tr>
         </thead>
         <tbody >
           {this.state.employees.map((employees,index)=>(
             <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/employee/${employees._id}`} style={{textDecoration:'none'}}>
                    {employees.name}
                    </a>
                    </td>
                <td>{employees.designation}</td>
                <td>{employees.level}</td>
                <td>{employees.attendence}</td>
                <td>
                  <a className="btn btn-warning" href={`/editEmp/${employees._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="{`/Emp`}" onClick={()=>this.onDelete(employees._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;delete
                  </a>
                </td>        
             </tr>              
           ))}
         </tbody>
       </table>
        
     <button className ="btn btn-success"><a href="/addEmp" style={{textDecoration:'none' ,color:'white'}}>Create New Employee</a></button>

      </div>
      
    )
  }
}
