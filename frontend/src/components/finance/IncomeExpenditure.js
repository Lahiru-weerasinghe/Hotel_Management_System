import React, { Component } from 'react';
import NavBar from '../NavBar';
const axios = require('axios').default;
// import axios from 'axios';


/**
* @author
* @class IncomeExpenditure
**/

export default class IncomeExpenditure extends Component {
 constructor(props){
     super(props);

     this.state = {
        transactionRecords:[]
     };
 }

 //calling the method
 componentDidMount(){
     this.retrieveTransactionRecords();
 }

 retrieveTransactionRecords(){
    axios.get("/income_expenditure").then(res => {
        if(res.data.success){
            this.setState({
                transactionRecords: res.data.existingRecords
            });

            // console.log(this.state.transactionRecords);
        }
    })
 }

 onDelete = (id) => {

    axios.delete(`/income_expenditure/delete/${id}`).then((res) => {
        alert("Deleted Successfully!");
        this.retrieveTransactionRecords();
    })
 }


 filterData(transactionRecords, searchKey){

    const result = transactionRecords.filter((Income_Expenditure) =>
        Income_Expenditure.title.toLowerCase().includes(searchKey) ||
        Income_Expenditure.type.toLowerCase().includes(searchKey) ||
        Income_Expenditure.description.toLowerCase().includes(searchKey)
    )
 
    this.setState({transactionRecords: result});
}

handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/income_expenditure").then(res => {
        if(res.data.success){
            
            this.filterData(res.data.existingRecords, searchKey)
        }
    });
 }



 render() {
  return(
    <div className = "container" >
        <NavBar/>
        <br/>
        <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
                <h3 style={{textAlign: 'center'}}>Income and Expenditure</h3>
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
                    <th scope="col">Title</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Action</th>
                </tr>
           </thead>
           <tbody>
                {this.state.transactionRecords.map((transactionRecords, index) => (
                    <tr key={index}>
                        <th scope = "row">{index+1}</th>
                        <td>{transactionRecords.title}</td>
                        <td>{transactionRecords.type}</td>
                        <td>{transactionRecords.description}</td>
                        <td>{new Date(transactionRecords.transaction_date).toLocaleDateString()}</td>
                        <td>{transactionRecords.amount}</td>
                        
                        <td> 
                            <a className="btn btn-outline-success" href={`/finance/incomeexpenditure/update/${transactionRecords._id}`}  style={{textDecoration:'none'}}>
                            <i className="fas fa-edit" /> &nbsp;Edit
                            </a> 
                            &nbsp;
                            <a className="btn btn-outline-danger" href="#" onClick={() => this.onDelete(transactionRecords._id)}>
                            <i className="far fa-trash-alt" /> &nbsp;Delete
                            </a> 
                        </td>
                    </tr>
                ))}              
           </tbody>
        </table>
        <button className="btn btn-success">
            <a href="/finance/incomeexpenditure/create" style={{textDecoration:'none', color:'white'}}>Create New Record</a>
        </button>  
   </div>
    )
   }
 }