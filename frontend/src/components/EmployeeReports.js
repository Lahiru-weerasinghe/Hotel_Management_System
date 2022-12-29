import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';


export default class EmployeeReports extends Component{
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
    axios.get("http://localhost:8000/employees").then(res =>{
      if(res.data.success){
        this.setState({
          employees:res.data.existingEmployees
        });
        console.log(this.state.employees)
      }
    });
  }


    render(){
      return(
        
        <div className="container">
          <NavBar/>
            <h2>All Employee Details</h2>
            <table className="table table-hover" style={{marginTop:'40px'}}>
            <thead>
              <tr>
                   
             <th scope="col">#</th>
             <th scope="col">Employee_Id</th>
             <th scope="col">Employee_Name</th>
             <th scope="col">Designation</th>
             <th scope="col">Level</th>
             <th scope="col">Attendence</th>
                   
              </tr>
            </thead>

            <tbody>
            {this.state.employees.map((employees,index)=>(
             <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td class="table-primary">{employees.employeeId}</td>
                     <td class="table-secondary">{employees.name}</td>
                     <td class="table-success">{employees.designation}</td>
                     <td class="table-info">{employees.level}</td>
                     <td class="table-light">{employees.attendence}</td>
                                        </tr>
                 ))}
               </tbody>


            </table>
  
        </div>
        
        
       
        
      )
      }
  }
