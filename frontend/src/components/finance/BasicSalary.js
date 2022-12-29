import Image from "./img/finance2.jpg";
import NavBar from '../NavBar';
import React, { Component } from 'react';
const axios = require('axios').default;


// import axios from 'axios';

/**
* @author
* @class BasicSalary
**/

export default class BasicSalary extends Component {
 constructor(props){
     super(props);

     this.state = {
        basicSalaryRecords:[]
     };
 }

 //calling the method
 componentDidMount(){
     this.retrieveBasicSalRecords();
 }

 retrieveBasicSalRecords(){
    axios.get("/basicSalary").then(res => {
        if(res.data.success){
            this.setState({
                basicSalaryRecords: res.data.existingRecords
            });

            // console.log(this.state.basicSalaryRecords);
        }
    })
 }


onDelete = (id) => {

    axios.delete(`/basicSalary/delete/${id}`).then((res) => {
        alert("Deleted Successfully!");
        this.retrieveBasicSalRecords();
    })
 }


filterData(basicSalaryRecords, searchKey){

    const result = basicSalaryRecords.filter((BasicSalary) =>
        BasicSalary.designation.toLowerCase().includes(searchKey) ||
        BasicSalary.level.toLowerCase().includes(searchKey) ||
        BasicSalary.designation.includes(searchKey) ||
        BasicSalary.level.includes(searchKey)
    )
 
    this.setState({basicSalaryRecords: result});
}

handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/basicSalary").then(res => {
        if(res.data.success){
            
            this.filterData(res.data.existingRecords, searchKey)
        }
    });
 }


 render() {
  return(
    // <div style={{ backgroundImage: 'url(' + Image + ')', resize:'cover', backgroundSize: 'cover' , margin: '15px'}}>
    <div className = "container" >
        <NavBar/>
       <br/>
        <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
                <h3 style={{textAlign: 'center'}}>Basic Salaries</h3>
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
        <table class = "table table-hover" style={{marginTop: '40px'}}>
           <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Level</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Action</th>
                </tr>
           </thead>
           <tbody>
                {this.state.basicSalaryRecords.map((basicSalaryRecords, index) => (
                    <tr key={index}>
                        <th scope = "row">{index+1}</th>
                        <td>{basicSalaryRecords.designation}</td>
                        <td>{basicSalaryRecords.level}</td>
                        <td>{new Date(basicSalaryRecords.date).toLocaleDateString()}</td>
                        <td>{basicSalaryRecords.amount}</td>
                        
                        <td> 
                            <a className="btn btn-outline-success" href={`/finance/basicsalary/update/${basicSalaryRecords._id}`}  style={{textDecoration:'none'}}>
                            <i className="fas fa-edit" /> &nbsp;Edit
                            </a> 
                            &nbsp;
                            <a className="btn btn-outline-danger" href="#" onClick={() => this.onDelete(basicSalaryRecords._id)}>
                            <i className="far fa-trash-alt" /> &nbsp;Delete
                            </a> 
                        </td>
                    </tr>
                ))}              
           </tbody>
        </table>
        <button className="btn btn-success">
            <a href="/finance/basicsalary/create" style={{textDecoration:'none', color:'white'}}>Create New Record</a>
        </button>
    {/* </div> */}
    <br/>
    </div>
    )
   }
 }

