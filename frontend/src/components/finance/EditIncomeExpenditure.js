import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';

/**
* @author
* @class EditIncomeExpenditure
**/

export default class EditIncomeExpenditure extends Component {
    
    constructor(props){
        super(props);
        this.state={
            title: "",
            type: "",
            description: "",
            transaction_date: "",
            amount: "",
            titleError: "",
            typeError: "",
            transaction_dateError: "",
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
        let titleError = "";
        let typeError =  "";
        let transaction_dateError = "";
        let amountError =  "";
        var date = this.state.transaction_date;
        var varDate = new Date(date); //dd-mm-YYYY
        var today = new Date();

        if(!this.state.title){
            titleError = "Title is required"
        }
        if(!this.state.type){
            typeError = "Type is required"
        }

        if(!this.state.transaction_date){
            transaction_dateError = "Date is required"
        }
        else if(varDate > today){
            transaction_dateError = "Valid date is required"
        }

        if(!this.state.amount){
            amountError = "Amount is required"
        }
        else if(isNaN(this.state.amount)){
            amountError = "Amount should be a number"
        }

        if(titleError || typeError || transaction_dateError || amountError){
            
            this.setState(
                {
                    titleError: titleError,
                    typeError: typeError,
                    transaction_dateError: transaction_dateError,
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

            const {title, type, description, transaction_date, amount} = this.state;

            const data = {
                title: title,
                type: type,
                description: description,
                transaction_date: new Date(transaction_date).toLocaleDateString(),
                amount: amount
            }

            //console.log(data);
            axios.put(`/income_expenditure/update/${id}`, data).then((res) => {
                if(res.data.success){
                    alert("Record Updated Successfully!");
                    this.setState(
                        {
                            title: "",
                            type: "",
                            description: "",
                            transaction_date: "",
                            amount: "",
                            titleError: "",
                            typeError: "",
                            transaction_dateError: "",
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

        axios.get(`/income_expenditure/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    title: res.data.Income_Expenditure.title,
                    type: res.data.Income_Expenditure.type,
                    description: res.data.Income_Expenditure.description,
                    transaction_date: new Date(res.data.Income_Expenditure.transaction_date).toLocaleDateString(),
                    amount: res.data.Income_Expenditure.amount
                });

                console.log(this.state.Income_Expenditure);
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
                        <label style={{marginBottom: '5px'}}>Title</label>
                        <input 
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Enter Title"
                        value={this.state.title}
                        onChange={this.handleInputChange} />

                        <div style={{color: 'red', fontSize: 12}}>
                                {this.state.titleError}
                        </div>
                    </div>
                    {/* ------------------------------------------------------------ */}
                    <div className="form-group" style={{marginBottom: '15px'}}>

                        <label style={{marginBottom: '5px'}}>Type</label>
                        <select  name="type" value={this.state.type} onChange={this.handleInputChange} className="form-select">
                            <option value="" >Select...</option>
                            <option value="Income" >Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                        <div style={{color: 'red', fontSize: 12}}>
                                {this.state.typeError}
                        </div> 

                    </div>
                    {/* --------------------------------------------------------------------- */}

                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>Desription</label>
                        <input 
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={this.state.description}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>Date</label>
                        <input 
                        type="text"
                        className="form-control"
                        name="date"
                        value={this.state.transaction_date}
                        onChange={this.handleInputChange} />

                        <div style={{color: 'red', fontSize: 12}}>
                                {this.state.transaction_dateError}
                        </div>
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
                    <a href="/finance/incomeexpenditure" class="btn btn-outline-success" style={{marginTop: '15px'}} tabindex="-1" role="button" aria-disabled="true">Back to List</a>
                    

                </form>
        </div>
        </div>
    )
    }
}