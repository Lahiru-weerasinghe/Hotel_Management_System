import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './NavBar';

export default class CreateService extends Component {
  
  constructor(props){
    super(props);
    this.state={
      type:"",
      name:"",
      price:"",
      discription:""
      
    }
  }



  handleInputChange=(e)=>{
    const {name,value} = e.target;


      this.setState({
        ...this.state,
        [name]:value
      })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const {type , name , price , discription} = this.state;

    const data={
      type:type,
      name:name,
      price:price,
      discription:discription
    }

    console.log(data)

    axios.post("http://localhost:8000/service/save" , data).then((res)=>{
      if(res.data.success){
        alert("Package Reservation successfully!!!");
        this.setState(
          {
            type:"",
            name:"",
            price:"",
            discription:""
          }
        )
      }
    })

  }
  
  
  render() {
    return (
      <html>
        <body>
      <div className = "container" >
      <NavBar/>
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create a new service package</h1>
          <form className="row g-3" onSubmit={this.onSubmit}>

           <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Type</label>
        <select class="form-select" 
         required
         name="type"
         value={this.state.type}
         onChange={this.handleInputChange}>
          <option>SPA</option>
          <option>POOL</option>
          <option>MINI-BAR</option>
          
        </select>
          </div>   




           {/* <div class="col-md-6" style={{marginBottom:'15px'}}>
          <label for="inputName" class="form-label" style={{marginBottom:'5px'}}>Type</label>
          <input type="text" 
          className="form-control" 
          name="type"
          placeholder="Enter type of package"
          value={this.state.type}
          onChange={this.handleInputChange}/>
          </div>  */}



          <div class="col-md-6" style={{marginBottom:'15px'}}>
          <label for="inputName" class="form-label" style={{marginBottom:'5px'}}>Name</label>
          <input type="text" 
          className="form-control" required
          name="name"
          placeholder="Enter package name"
          value={this.state.name}
          onChange={this.handleInputChange}/>
          </div>
          
          <div class="col-md-6" style={{marginBottom:'15px'}}>
           
          <label for="inputName" class="form-label" style={{marginBottom:'5px'}}>Price($)</label>
          {/* <span class="input-group-text">$</span> */}
          <input type="text" 
          className="form-control" 
          name="price"
          placeholder="Enter price"
          pattern="\d{1,3}"
          value={this.state.price}
          onChange={this.handleInputChange} required/>
         
          </div>
          
          <div class="col-md-6" style={{marginBottom:'15px'}}>
          <label for="inputName" class="form-label" style={{marginBottom:'5px'}}>Discription</label>
          <textarea type="text" 
          className="form-control" 
          name="discription"
          placeholder="Enter discription"
          value={this.state.discription}
          onChange={this.handleInputChange} required/>
          </div>


          <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} href="Home.js">
          <i className="far fa-check-square"></i>
          &nbsp;Save
          </button>


          </form>

      </div>
  </div>
  </body>
  </html>
    


    )
  }
}

