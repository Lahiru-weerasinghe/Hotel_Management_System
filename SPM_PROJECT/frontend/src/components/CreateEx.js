import React, { Component } from 'react'

//we used for call API and save our data in to the database
import axios from 'axios'          

//import navigation bar
import NavBarCus from './NavBarCus.js';

//import footer
import Footer from './footer';




//constructor tariableso initialize default values to the v
export default class CreateRes extends Component {

    constructor(props) {
        super(props);
        this.state={
            Name:"",
            NIC:"",
            Phone_No:"",
            Package_Type:"",
            Check_In_Date:"",
            Check_In_Time:"",
            
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

        const {Name,NIC,Phone_No,Package_Type,Check_In_Date,Check_In_Time} = this.state;

        const data ={
            Name:Name,
            NIC:NIC,
            Phone_No:Phone_No,
            Package_Type:Package_Type,
            Check_In_Date:Check_In_Date,
            Check_In_Time:Check_In_Time
            
        }


        // converts HTML tags into the JavaScript function and also it sends our data to console log in our web browser
        console.log(data)   
        
        


       //using axios we send our data in to database as post request
        axios.post("/Res/save",data).then((res) =>{
            //if data inserted successfully to the database
            if(res.data.success){
                alert("Facility is reserved Successfully");
                this.setState(
                    {
                        Name:"",
                        NIC:"",
                        Phone_No:"",
                        Package_Type:"" ,
                        Check_In_Date:"",
                        Check_In_Time:""
                        
                    }
                )
            }
            else{
                alert("Facility is reserved failed"); 
            }
        })
    }




    //reservation form
    render() {
        return(
            <div className = "container" >


            <NavBarCus/>



            <div className="col-md-8 mt-4 mx-auto">
                <br></br>
                <hr></hr><center>
                <h1 className="h3 mb-3 font-weight-normal">Add Extra-Facility</h1></center>
                <hr></hr>
                <br></br><br></br>

               


                <form className="needs-validation" onSubmit={this.onSubmit} >
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text"
                        className="form-control"
                        name="Name" 
                        placeholder="Enter Name"
                        pattern="[a-z A-Z .]+"
                        value={this.state.Name}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'#ff7b25',marginBottom:'5px'}}>Thisal Pulasinghe</label>
                    </div>



                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC Number</label>
                        <input type="text"
                        className="form-control"
                        name="NIC"
                        pattern="[0-9]{9}[vVxX]||[0-9]{12}"
                        placeholder="Enter NIC number"
                        value={this.state.NIC}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'#ff7b25',marginBottom:'5px'}}>995633633V , 199934100802</label>
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
                        <label style={{color:'#ff7b25',marginBottom:'5px'}}>0719825853</label>
                    </div> 



                    <div className="form-group" required style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Extra-Facility</label>
                        <select name="Package_Type" value={this.state.Package_Type} onChange={this.handleInputChange} className="form-control" >
                        <option value="">Select the facility package</option>
                                <option value="Spa Gold">Spa Gold</option>
                                <option value="Spa Diomand">Spa Diomand</option>
                                <option value="Spa Silver">Spa Silver</option>
                                <option value="Club Gold">Club Gold</option>
                                <option value="Club Diomand">Club Diomand</option>
                                <option value="Club Silver">Club Silver</option>
                                <option value="Pool Family">Pool Family</option>
                                <option value="Pool Single">Pool Single</option>
                                <option value="Pool Party">Pool Party</option>
                        </select>
                    </div> 




                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Check In Date</label>
                        <input type="date"
                        min="2022-05-25"
                        class="datepicker"
                        data-date-format="mm/dd/yyyy"
                        className="form-control"
                        name="Check_In_Date"
                        placeholder="Enter Check In Date"
                        value={this.state.Check_In_Date}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 



                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Check In Time</label>
                        <input type="time"
                        min="08:00"
                        max="00:00"
                        class="timepicker"
                        className="form-control"
                        name="Check_In_Time"
                        placeholder="Enter Check In time"
                        value={this.state.Check_In_Time}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 




                   
                    <br></br><br></br>
                    <button className="btn btn-success" type="submit" style={{marginTop:'30px'}} >
                        <i className="far fa-check-square"></i>
                        &nbsp;Reserve
                    </button>
                    

                </form>

            </div>   
            <br>
            </br> <br></br><br></br><br></br><br></br>


            <Footer/>

            </div>
        
        );
    }
}
