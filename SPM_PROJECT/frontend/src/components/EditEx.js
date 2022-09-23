import React, { Component } from 'react'

//import axios package
//we used for call API and save our data in to the database
import axios from 'axios'


//import navigation bar
import NavBar from './NavBar.js';

//import footer
import Footer from './footer';




//constructor
export default class EditRes extends Component {

    constructor(props) {
        super(props);
        this.state={
            Name:"",
            NIC:"",
            Phone_No:"",
            Package_Type:"",
            Check_In_Date:"",
            Check_In_Time:""
            
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

        // we use id here because we are going to update specific post details
        const id = this.props.match.params.id;               
       

        const {Name,NIC,Phone_No,Package_Type,Check_In_Date,Check_In_Time} = this.state;

        const data ={
            Name:Name,
            NIC:NIC,
            Phone_No:Phone_No,
            Package_Type:Package_Type,
            Check_In_Date:Check_In_Date,
            Check_In_Time:Check_In_Time
        }





        console.log(data)
        




        //using axios we send our data in to database as put request
        axios.put(`/Res/update/${id}`,data).then((res) =>{

            if(res.data.success){
                alert("Reservation updated successfully");
                this.setState(
                    {
                        Name:"",
                        NIC:"",
                        Phone_No:"",
                        Package_Type:"",
                        Check_In_Date:"",
                        Check_In_Time:""
                        
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
                    NIC:res.data.post.NIC,
                    Phone_No:res.data.post.Phone_No,
                    Package_Type:res.data.post.Package_Type,
                    Check_In_Date:res.data.post.Check_In_Date,
                    Check_In_Time:res.data.post.Check_In_Time
                });

                console.log(this.state.post);
                
            }
        });
    }

    




    render() {
        return(
            <div className = "container" >
            <NavBar/>


            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>



            <form className="needs-validation" onSubmit={this.onSubmit}>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text"
                        className="form-control"
                        name="Name" 
                        placeholder="Enter Name"
                        value={this.state.Name}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'#ff7b25',marginBottom:'5px'}}>Thisal Pulasinghe</label>
                    </div>



                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text"
                        className="form-control"
                        name="NIC"
                        placeholder="Enter NIC Number"
                        pattern="[0-9]{9}[vVxX]||[0-9]{12}"
                        value={this.state.NIC}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'#ff7b25',marginBottom:'5px'}}>973454389V , 199934100802</label>
                    </div>



                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style ={{marginBottom:'5px'}}>Phone_No</label>
                        <input type="text"
                        className="form-control"
                        name="Phone_No"
                        placeholder="Enter Phone Number"
                        pattern="[0-9]{10}"
                        value={this.state.Phone_No}
                        onChange={this.handleInputChange}
                        required/>
                        <label style={{color:'#ff7b25',marginBottom:'5px'}}>0779625853</label>
                    </div> 

                  
                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style ={{marginBottom:'5px'}}>Extra-Facility</label>
                        <select name="Package_Type" value={this.state.Package_Type} onChange={this.handleInputChange} className="form-control" >
                        <option value="{this.state.Package_Type}"></option>
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
                        <label style ={{marginBottom:'5px'}}>Check_In_Date</label>
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
                        <label style ={{marginBottom:'5px'}}>Check_In_Time</label>
                        <input type="time"
                        min="08:00"
                        max="00:00"
                        class="timepicker"
                        className="form-control"
                        name="Check_In_Time"
                        placeholder="Enter Check In Time"
                        value={this.state.Check_In_Time}
                        onChange={this.handleInputChange}
                        required/>
                    </div> 

                    

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>


                </form>

               
            </div>  


            <br></br><br></br><br></br>


             <Footer/> 


        </div>
        
        );
    }



    
}
