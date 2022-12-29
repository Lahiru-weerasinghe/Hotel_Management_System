import axios from 'axios';
import React, { Component, useState } from 'react';
import NavBar from '../NavBar';

/**
* @author
* @class EditBasicSalary
**/

export default class EditBasicSalary extends Component {

    constructor(props){
        super(props);
        this.state={
            designation: "",
            level: "",
            date: "",
            amount: "",
            designationError: "",
            levelError: "",
            amountError: ""
        }
    }

    handleInputChange =(e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }


    validate = () => {
        let designationError = "";
        let levelError =  "";
        let amountError =  "";

        if(!this.state.designation){
            designationError = "Designation is required"
        }
        if(!this.state.level){
            levelError = "Level is required"
        }
        if(!this.state.amount){
            amountError = "Amount is required"
        }

        if(designationError || levelError || amountError){
            // this.state = {designationError: designationError, levelError: levelError, amountError: amountError};
            this.setState(
                {
                    designationError: designationError,
                    levelError: levelError,
                    amountError: amountError
                }
            )
            return false;
        }

        return true;
    }

    onSubmit = (e) => {
        e.preventDefault();

        const isValid = this.validate();

        if(isValid){

            const id = this.props.match.params.id;

            const {designation, level, date, amount} = this.state;

            const data = {
                designation: designation,
                level: level,
                date: date,
                amount: amount
            }


            //console.log(data);
            axios.put(`/basicSalary/update/${id}`, data).then((res) => {
                if(res.data.success){
                    alert("Record Updated Successfully!");
                    this.setState(
                        {
                            designation: "",
                            level: "",
                            date: data.date,
                            amount: "",
                            designationError: "",
                            levelError: "",
                            amountError: ""
                        }
                    )
                }
            })
        }
        else{
            // console.log(this.state)
            //alert('Re-check and submit again');
        }
    }


    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/basicSalary/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    designation: res.data.BasicSalary.designation,
                    level: res.data.BasicSalary.level,
                    date: res.data.BasicSalary.date,
                    amount: res.data.BasicSalary.amount
                });

                // console.log(this.state.BasicSalary);
            }
        })
    }
    
    render() {
        return(
            <div className = "container" >
            <NavBar/>
            <div className="col-md-8 mt-4 mx-auto"> 
                <br/>
                <h3 className="h3 mb-3 font-weight-normal">Update Record</h3> 
    
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Designation</label>
                            <input 
                            type="text"
                            className="form-control"
                            name="designation"
                            placeholder="Enter Designation"
                            value={this.state.designation}
                            onChange={this.handleInputChange} />
                            
                            <div style={{color: 'red', fontSize: 12}}>
                                {this.state.designationError}
                            </div> 
                            
                        </div>
                        {/* ------------------------------------------------------------ */}
                        <div className="form-group" style={{marginBottom: '15px'}}>
    
                            <label style={{marginBottom: '5px'}}>Level</label>
                            <select  name="level" value={this.state.level} onChange={this.handleInputChange} className="form-select" required>
                                <option value="" >Select...</option>
                                <option value="Senior" >Senior</option>
                                <option value="Junior">Junior</option>
                                <option value="Intern">Intern</option>
                            </select>


                            
                            <div style={{color: 'red', fontSize: 12}}>
                                {this.state.levelError}
                            </div> 
                            
                        
                            {/* <input 
                            type="text"
                            className="form-control"
                            name="level"
                            value={this.state.level}
                            onChange={this.handleInputChange} /> */}
    
                        </div>
                        {/* --------------------------------------------------------------------- */}
    
                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Date</label>
                            <input 
                            type="text"
                            value="Date cannot be updated"
                            className="form-control"
                            name="date"
                            value={this.state.date}
                            readOnly
                             />
                            <div style={{color: 'orange', fontSize: 12}}>Date cannot be changed</div> 
                        </div>
    
                        {/* ------------------------------------------------------------------------ */}
    
                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Amount (Rs)</label>
                            <input 
                            type="real"
                            className="form-control"
                            name="amount"
                            placeholder="0.00"
                            value={this.state.amount}
                            onChange={this.handleInputChange} />

                            <div style={{color: 'red', fontSize: 12}}>
                                {this.state.amountError}
                            </div> 
                            
                        </div>                   
                        {/* ------------------------------------------------------------------- */}
                        
                        <button className="btn btn-success" type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            Update
                        </button>
                        &nbsp;&nbsp;
                        <a href="/finance/basicsalary" class="btn btn-outline-success" style={{marginTop: '15px'}} tabindex="-1" role="button" aria-disabled="true">Back to List</a>
                    

    
                    </form>
            </div>
            </div>
        )
        }
    }
