import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class EditService extends Component {


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
    const id = this.props.match.params.id;

    const {type , name , price , discription} = this.state;

    const data={
      type:type,
      name:name,
      price:price,
      discription:discription
    }

    console.log(data)

    axios.put(`http://localhost:8000/service/update/${id}` , data).then((res)=>{
      if(res.data.success){
        alert("Post update successfully!!!");
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
  





  componentDidMount() {

    const id = this.props.match.params.id;
    //check service or post
    axios.get(`/service/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          type:res.data.service.type,
          name:res.data.service.name,
          price:res.data.service.price,
          discription:res.data.service.discription
           
          
        });
  
          console.log(this.state.service);
      }
    });
  }


  render() {
    return (
      <div className = "container" >
      <NavBar/>
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit service package</h1>
          <form className="row g-3" onSubmit={this.onSubmit}>

          {/* <div class="col-md-3">
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
          </div>   */}




           <div class="col-md-6" style={{marginBottom:'15px'}}>
          <label for="inputName" class="form-label" style={{marginBottom:'5px'}}>Type</label>
          <input type="text" 
          className="form-control" 
          name="type"
          placeholder="Enter type of package"
          value={this.state.type}
          onChange={this.handleInputChange} required/>
          </div> 



          <div class="col-md-6" style={{marginBottom:'15px'}}>
          <label for="inputName" class="form-label" style={{marginBottom:'5px'}}>Name</label>
          <input type="text" 
          className="form-control" 
          name="name"
          placeholder="Enter package name"
          value={this.state.name}
          onChange={this.handleInputChange} required/>
          </div>
          
          <div class="col-md-6" style={{marginBottom:'15px'}}>
          <label for="inputName" class="form-label" style={{marginBottom:'5px'}}>Price</label>
          <input type="text" 
          className="form-control" 
          name="price"
          pattern="\d{1,3}"
          placeholder="Enter price"
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


          <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}}  href="#">
          <i className="far fa-check-square"></i>
          &nbsp;Save
          </button>


          </form>

      </div>

    </div>


    )
  }
  
}
