import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';

export default class CreateRes extends Component {

    constructor(props) {
        super(props);
        this.state={
            Name:"",
            ID:"",
            Phone_No:"",
            Check_In:"",
            Check_Out:"",
            No_Of_Rooms:""
        }
    }

    //identify changes and update the state
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {Name,ID,Phone_No,Check_In,Check_Out,No_Of_Rooms} = this.state;

        const data ={
            Name:Name,
            ID:ID,
            Phone_No:Phone_No,
            Check_In:Check_In,
            Check_Out:Check_Out,
            No_Of_Rooms:No_Of_Rooms
        }

        console.log(data)

        axios.post("/Res/save",data).then((res) =>{
            if(res.data.success){
                alert("Reserved successfully");
                this.setState(
                    {
                        Name:"",
                        ID:"",
                        Phone_No:"",
                        Check_In:"",
                        Check_Out:"",
                        No_Of_Rooms:"" 
                    }
                )
            }
        })
    }




    render() {
        return(
            <div className = "container" >
            <NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Make New Reservation</h1>
                <form className="needs-validation" onSubmit={this.onSubmit} >
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text"
                        className="form-control"
                        name="Name" 
                        placeholder="Enter Name"
                        pattern="[a-z A-Z .]+"
                        value={this.state.Name}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>ID</label>
                        <input type="text"
                        className="form-control"
                        name="ID"
                        placeholder="Enter ID"
                        value={this.state.ID}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Phone Number</label>
                        <input type="text"
                        className="form-control"
                        name="Phone_No"
                        placeholder="Enter Phone Number"
                        pattern="[0-9]{10}"
                        value={this.state.Phone_No}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Check In</label>
                        <input type="date"
                        className="form-control"
                        name="Check_In"
                        placeholder="Enter Check In"
                        value={this.state.Check_In}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Check Out</label>
                        <input type="date"
                        className="form-control"
                        name="Check_Out"
                        placeholder="Enter Check Out"
                        value={this.state.Check_Out}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Number Of Rooms</label>
                        <select name="No_Of_Rooms" value={this.state.No_Of_Rooms} onChange={this.handleInputChange} className="form-control" >
                        <option value="">Select No Of Rooms..</option>
                                <option value="1 Room">1</option>
                                <option value="2 Rooms">2</option>
                                <option value="3 Rooms">3</option>
                                <option value="4 Rooms">4</option>      
                        
                        </select>
                    </div> 

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
                        <i className="far fa-check-square"></i>
                        &nbsp;Reserve
                    </button>
                    

                </form>
            </div>    
            </div>
        
        );
    }
}
