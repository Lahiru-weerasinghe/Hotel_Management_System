import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class EmployeeDetails extends Component {

    constructor(props){
        super(props);
    
        this.state={
          employee:{}
        };
      }
      
      componentDidMount(){
         
        const id=this.props.match.params.id;
        
         
        axios.get(`http://localhost:8000/employee/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    employee:res.data.employee
                });
                console.log(this.state.employee);
            }
        });
      }

    render() {

        const {employeeId,name,designation,level,attendence}=this.state.employee;
        return (

          <div className = "container" >
          <NavBar/>
            <div style={{marginTop:'20px'}}>
            <h4>{employeeId}</h4>
            <hr/>
    
            <dl className="row">
              <dt className="col-sm-3">Employee-Name</dt>
              <dd className="col-sm-9">{name}</dd>
    
              <dt className="col-sm-3">Designation</dt>
              <dd className="col-sm-9">{designation}</dd>
    
              <dt className="col-sm-3">Level</dt>
              <dd className="col-sm-9">{level}</dd>
    
              <dt className="col-sm-3">Attendence</dt>
              <dd className="col-sm-9">{attendence}</dd>
              <br/>
              <br/>
    
    
            </dl>
    
            <h4> Click below to generate report</h4>
            <button className="btn btn-success"><a href="/reportsEmp " style={{textDecoration:'none',color:'white'}}>Generate-Details</a></button>
    
          </div>
          </div>
        )
    }
}
