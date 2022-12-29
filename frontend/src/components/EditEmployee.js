import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class EditEmployee extends Component{

  constructor(props){
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        name:'',
        designation:'',
        level:'',
        attendence:'',

    }

  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
    
    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const id = this.props.match.params.id;
    const{name,designation,level,attendence}=this.state;

    const data ={
        name:name,
        designation:designation,
        level:level,
        attendence:attendence
    }
    console.log(data)
    axios.put(`http://localhost:8000/employee/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Employee Updated Successfully")
        this.setState(
          {
            name:"",
            designation:"",
            level:"",
            attendence:""
          }
        )
      }
    })



  }


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/employee/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.employee.name,
          designation:res.data.employee.designation,
          level:res.data.employee.level,
          attendence:res.data.employee.attendence
          
        });

        console.log(this.state.employee);
      }
    });
  }


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
        <h1 ><center> Edit Details</center></h1>
        <form className="row" style={{ margin:"25px 85px 75px 100px"}}>
            <div className="form-group" style={{marginBottom:'15px'}}>
               <label style={{marginBottom:'5px'}}>Name</label>
               <input type="text"
               className="form-control"
               name="name"
               placeholder="Enter Your Full Name"
               value={this.state.name}
               onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Designation</label>
              <input type="text"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              value={this.state.designation}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Level</label>
              <input type="text"
              className="form-control"
              name="address"
              placeholder="Enter Your Address"
              value={this.state.level}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Attendence</label>
              <input type="text"
              className="form-control"
              name="nic"
              placeholder="Enter your NIC Number"
              value={this.state.attendence}
              onChange={this.handleInputChange}/>
            </div>

             
            </form>

            <button className="btn btn-success" type="submit" style={{margin:"25px 85px 75px 100px"}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>


        

      </div>
      </section>
      </body>
      </html>
      
      
      
      
    )
    }
}