import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class CreateEmployee extends Component {
     constructor(props){
         super(props);
         this.handleInputEmployeeId=this.handleInputEmployeeId.bind(this);
         this.handleInputEmployeeName=this.handleInputEmployeeName.bind(this);
         this.handleInputDesignation=this.handleInputDesignation.bind(this);
         this.handleInputEmployee_level=this.handleInputEmployee_level.bind(this);
         this.handleInputEmployee_Attendence=this.handleInputEmployee_Attendence.bind(this);
         this.saveEmployeeData=this.saveEmployeeData.bind(this);
         this.state={
            employeeId:'',
            name:'',
            designation:'',
            level:'',
            attendence:'',


         }
     }

     handleInputEmployeeId (e) {
         this.setState({
             employeeId:e.target.value,
              
                     })
     }
     handleInputEmployeeName (e){
         this.setState(
             {
                 name:e.target.value,
             }
         )
     }
     handleInputDesignation(e){
         this.setState({
             designation:e.target.value,
         })
     }
     handleInputEmployee_level(e){
         this.setState({
             level:e.target.value,
         })
     }
     handleInputEmployee_Attendence(e){
         this.setState({
             attendence:e.target.value,
         })
     }
     saveEmployeeData (e){

          e.preventDefault();
         const employee={
             employeeId:this.state.employeeId,
             name:this.state.name,
             designation:this.state.designation,
             level:this.state.level,
             attendence:this.state.attendence

         }
         axios.post("http://localhost:8000/employee/save",employee)
         .then(()=>{
             alert('Data successfully inserted!');
         })
         .catch(error=>{
             alert(error.message);
         });
     }

     /*onSubmit = (e) =>{
         e.preventDefault();

         const{employeeId,name,designation,level,attendence}=this.state;

         const data ={
             employeeId:employeeId,
             name:name,
             designation:designation,
             level:level,
             attendence:attendence
         }

         console.log(data)*/
        /* if(employeeId && name && designation && level && attendence){

         axios.post("http://localhost:8000/employee/save",data).then((res)=>{
             if(res.data.success){
                 alert("successful")
                 this.setState(
                     {
                        employeeId:"",
                        name:"",
                        designation:"",
                        level:"",
                        attendence:""
                     }
                 )
             }
         })
     }*/
    
 
     render(){
        return(
          <html>
          <body>
          <div className = "container" >
            <NavBar/></div>
            <section style={{backgroundImage:`url('https://media.istockphoto.com/photos/light-green-defocused-blurred-motion-abstract-background-picture-id1138288758?k=20&m=1138288758&s=612x612&w=0&h=LMtberFagKLWqz4BdhZt4Ukh28m3TYJNZ-i5NegN1ro=')`,
            backgroundSize:'cover'}}>
          
          <div className="col-md-8 mt-4 mx-auto" style={{
            backgroundImage:`url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/790b069c-73d8-42cd-be0f-7e50930a538d/d2cetir-6c5f230d-df51-4438-9460-d01d9c3ca594.png/v1/fill/w_1131,h_707,q_70,strp/light_ray_wallpaper_by_xmacha_d2cetir-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzkwYjA2OWMtNzNkOC00MmNkLWJlMGYtN2U1MDkzMGE1MzhkXC9kMmNldGlyLTZjNWYyMzBkLWRmNTEtNDQzOC05NDYwLWQwMWQ5YzNjYTU5NC5wbmciLCJ3aWR0aCI6Ijw9MTQ0MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FVUk7Lyvua8lgLl-nXiFOWWGdNHUE1W9EQyQzvXIW5o')`,
            backgroundPosition:'center',
            backgroundSize:'cover'
          }}>
            <h1 ><center> Create New Employee</center></h1>
            <form className="row" style={{ margin:"25px 85px 75px 100px"}}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                   <label style={{marginBottom:'5px'}}>Employee_Id</label>
                   <input type="text"
                   className="form-control"
                   name="Employee_Id"
                   placeholder="Enter Employee_Id"
                   value={this.state.employeeId}
                   onChange={this.handleInputEmployeeId}
                   required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                   <label style={{marginBottom:'5px'}}>Name</label>
                   <input type="text"
                   className="form-control"
                   name="Name"
                   placeholder="Enter Employee Name"
                   value={this.state.name}
                   onChange={this.handleInputEmployeeName}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Designation</label>
                  <input type="text"
                  className="form-control"
                  name="Designation"
                  placeholder="Enter Designation"
                  value={this.state.designation}
                  onChange={this.handleInputDesignation}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Level</label>
                  <input type="text"
                  className="form-control"
                  name="Level"
                  placeholder="Enter Level"
                  value={this.state.level}
                  onChange={this.handleInputEmployee_level}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Attendence</label>
                  <input type="text"
                  className="form-control"
                  name="Attendence"
                  placeholder="Enter Attendence"
                  value={this.state.attendence}
                  onChange={this.handleInputEmployee_Attendence}/>
                </div>
    
                 
                </form>
    
                <button className="btn btn-success" type="submit" style={{margin:"25px 85px 75px 100px"}} onClick={this.saveEmployeeData}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Add
                </button>
    
    
            
    
          </div>
          </section>
          </body>
          </html>
          
          
          
          
        )
        }
    }