import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';

export default class EditRes extends Component {

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

    ////identify changes and update the state

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
        const id = this.props.match.params.id;               // we use id here because we are going to update specific post details

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
        
        //using axios we send our data in to database as put request

        axios.put(`/Res/update/${id}`,data).then((res) =>{

            if(res.data.success){
                alert("Reservation updated successfully");
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


    //used to get specific post details throw the get request

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/Res/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    //post:res.data.post
                    
                    Name:res.data.post.Name,
                    ID:res.data.post.ID,
                    Phone_No:res.data.post.Phone_No,
                    Check_In:res.data.post.Check_In,
                    Check_Out:res.data.post.Check_Out,
                    No_Of_Rooms:res.data.post.No_Of_Rooms
                });

                console.log(this.state.post);
                
            }
        });
    }


    render() {
        return(
            <div className = "container" >
            <NavBar/>
            <br></br>
            <br></br>
            <br></br>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 >Edit Reservation</h1>

                <br></br>
            <br></br>
            <br></br>
                <form className="needs-validation" onSubmit={this.onSubmit}>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text"
                        className="form-control"
                        name="Name" 
                        placeholder="Enter your Name"
                        value={this.state.Name}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'blue',marginBottom:'5px'}}>Yasiru Lakshani</label>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC Number</label>
                        <input type="text"
                        className="form-control"
                        name="ID"
                        placeholder="Enter your NIC Number"
                        pattern="[0-9]{9}[vVxX]"
                        value={this.state.ID}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'blue',marginBottom:'5px'}}>973454389V</label>
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
                        <label style={{color:'blue',marginBottom:'5px'}}>0779625853</label>
                    </div> 

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Check In Date</label>
                        <input type="date"
                        min="2022-04-20"
                        class="datepicker"
                        data-date-format="mm/dd/yyyy"
                        className="form-control"
                        name="Check_In"
                        placeholder="Pick your Check In Date"
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
                        placeholder="Pick your Check Out Date"
                        value={this.state.Check_Out}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>No of Rooms</label>
                        <input type="text"
                        className="form-control"
                        name="No_Of_Rooms"
                        placeholder="Enter the Number Of Rooms"
                        value={this.state.No_Of_Rooms}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 

<br></br><br></br>
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>

                </form>
            </div>   
        </div>
        
        );
    }



    
}
