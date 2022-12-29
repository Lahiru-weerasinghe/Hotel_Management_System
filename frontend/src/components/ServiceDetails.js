import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class ServiceDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      //post:{},
      service:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    //check service or post
    axios.get(`/service/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({


          service:res.data.service
        });

          console.log(this.state.service);
      }
    });
  }
  

  render() {
    const {type,name,price,discription}=this.state.service;
    return (
      <div className = "container" >
      <NavBar/>
    <div style={{marginTop:'20px'}}>
      <h4>{type}</h4>

  <dl class="row">
  <dt class="col-sm-3">Type</dt>
  <dd class="col-sm-9">{type}</dd>

  <dt class="col-sm-3">Name</dt>
  <dd class="col-sm-9">{name}</dd>

  <dt class="col-sm-3">Price</dt>
  <dd class="col-sm-9">{price}</dd>

  <dt class="col-sm-3">Description</dt>
  <dd class="col-sm-9">{discription}</dd>

  </dl>

    </div>
    </div>

    )
    
  }
}
