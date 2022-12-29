import React, { Component } from 'react'
import axios from 'axios';
import NavBar from '../NavBar';

/**
* @author
* @class EditBasicSalary
**/

export default class CreateBasicSalary extends Component {


    constructor(props){

        const today = new Date();

        super(props);
        this.state={
            designation: "",
            level: "",
            date: today.toLocaleDateString(),
            amount: "",
            designationError: "",
            levelError: "",
            amountError: ""
        };
    }

    handleInputChange =(e) => {
        e.preventDefault();             
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
        else if(isNaN(this.state.amount)){
            amountError = "Amount should be a number"
        }

        if(designationError || levelError || amountError){
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

            const {designation, level, date, amount} = this.state;

            const data = {
                designation: designation,
                level: level,
                date: date,
                amount: amount
            }

            //console.log(data);
            axios.post("/basicSalary/save", data).then((res) => {
                const today = new Date();
                if(res.data.success){
                    this.setState(
                        {
                            designation: "",
                            level: "",
                            date: today.toLocaleDateString(),
                            amount: "",
                            designationError: "",
                            levelError: "",
                            amountError: ""
                        }
                    )
                    alert("Record saved successfully");
                }
            })
        }
        else{
            // console.log(this.state)
            //alert('Re-check and submit again');
        }
    }

    
    render() {
    return(
        <div className = "container" >
            <NavBar/>
        <div className="col-md-8 mt-4 mx-auto"> 
            <br/>
            <h3 className="h3 mb-3 font-weight-normal">Create Basic Salaries</h3> 

                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>Designation</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="designation"
                            placeholder="Enter Designation"
                            required
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
                    </div>
                    {/* --------------------------------------------------------------------- */}

                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>Date</label>
                        <input 
                        type="text"
                        className="form-control"
                        name="date"
                        value= {new Date}
                        readOnly/>

                    </div>

                    {/* ------------------------------------------------------------------------ */}

                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>Amount (Rs)</label>
                        <input 
                        type="real"
                        className="form-control"
                        name="amount"
                        placeholder="0.00"
                        required
                        value={this.state.amount}
                        onChange={this.handleInputChange} />   

                        <div style={{color: 'red', fontSize: 12}}>
                                {this.state.amountError}
                        </div>                     
                    </div>                   
                    {/* ------------------------------------------------------------------- */}
                    
                   
                    <button className="btn btn-success" type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        Save
                    </button>
                    &nbsp;&nbsp;
                    <a href="/finance/basicsalary" class="btn btn-outline-success" style={{marginTop: '15px'}} tabindex="-1" role="button" aria-disabled="true">Back to List</a>
                    

                </form>
        </div>
        </div>
    )
    }
}