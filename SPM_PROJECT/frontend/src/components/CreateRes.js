import React, { Component } from 'react'

import axios from 'axios'                            //we used for call API and save our data in to the database
import NavBarCus from './NavBarCus.js';


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

    //implement onSubmit method 
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

        console.log(data)                              // converts HTML tags into the JavaScript function and also it sends our 			
                                                        //data to console log in our web browser
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
            <NavBarCus/>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Make New Reservation</h1>
                <form className="needs-validation" onSubmit={this.onSubmit} >
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name of the Customer</label>
                        <input type="text"
                        className="form-control"
                        name="Name" 
                        placeholder="Enter your Name"
                        pattern="[a-z A-Z .]+"
                        value={this.state.Name}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'blue',marginBottom:'5px'}}>Yasiru Bellanavithana</label>

                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC Number</label>
                        <input type="text"
                        className="form-control"
                        name="ID"
                        pattern="[0-9]{9}[vVxX]"
                        placeholder="Enter your NIC number"
                        value={this.state.ID}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'blue',marginBottom:'5px'}}>993454389V</label>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Contact Number</label>
                        <input type="text"
                        className="form-control"
                        name="Phone_No"
                        placeholder="Enter your Contact Number"
                        pattern="[0-9]{10}"
                        value={this.state.Phone_No}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'blue',marginBottom:'5px'}}>0779624453</label>
                    </div> 

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Check In Date</label>
                        <input type="date"
                        min="2022-04-20"
                        class="datepicker"
                        data-date-format="mm/dd/yyyy"
                        className="form-control"
                        name="Check_In"
                        placeholder="Enter Check In Date"
                        value={this.state.Check_In}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 


                    



                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Check Out Date</label>
                        <input type="date"
                        min="2022-04-20"
                        class="datepicker"
                        data-date-format="mm/dd/yyyy"
                        className="form-control"
                        name="Check_Out"
                        placeholder="Enter Check Out Date"
                        value={this.state.Check_Out}
                        onChange={this.handleInputChange}
                        required/>
                        
                    </div> 

                    <div className="form-group" required style={{marginBottom:'15px'}}> 

                        <label style ={{marginBottom:'5px'}}>Number Of Rooms</label>

                        <select name="No_Of_Rooms" value={this.state.No_Of_Rooms} onChange={this.handleInputChange} className="form-control">
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
