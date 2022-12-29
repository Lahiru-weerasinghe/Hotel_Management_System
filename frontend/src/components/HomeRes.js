import React, { Component } from 'react';
import axios from 'axios';
//import posts from '../../models/posts.js';
import NavBar from './NavBar';

export default class HomeRes extends Component {
  constructor(props) {
    super(props);

    

    this.state={
      arrayRes:[]   //this array is used to save posts when we use GET request      
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/Res").then(res =>{
      if(res.data.success){
        this.setState({
          arrayRes:res.data.existingRes                
        });

        console.log(this.state.arrayRes);              
      }
    });
  }

  onDelete =(id) =>{

    axios.delete(`/Res/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();
    });
  }

  filterData(arrayRes,searchKey){                      

    const result = arrayRes.filter((post) =>            
    post.Name.toLowerCase().includes(searchKey)||
    post.ID.toLowerCase().includes(searchKey)||
    post.Phone_No.toLowerCase().includes(searchKey)||
    post.Check_In.toLowerCase().includes(searchKey)||
    post.Check_Out.toLowerCase().includes(searchKey)||
    post.No_Of_Rooms.toLowerCase().includes(searchKey)||    
    post.Name.toUpperCase().includes(searchKey)||  
    post.ID.toUpperCase().includes(searchKey)|| 
    post.Phone_No.toUpperCase().includes(searchKey)||
    post.Check_In.toUpperCase().includes(searchKey)||
    post.Check_Out.toUpperCase().includes(searchKey)||
    post.No_Of_Rooms.toUpperCase().includes(searchKey)||
    post.Name.toUpperCase().includes(searchKey)||  
    post.ID.includes(searchKey)|| 
    post.Phone_No.includes(searchKey)||
    post.Check_In.includes(searchKey)||
    post.Check_Out.includes(searchKey)||
    post.No_Of_Rooms.includes(searchKey)
    
    )

    this.setState({arrayRes:result})                   
  }



  handleSearchArea = (e) =>{

    const searchKey= e.currentTarget.value;

    axios.get("/Res").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingRes,searchKey)
      }
    });
  }

  render() {
    return (
      
      <div className="container">
        <NavBar/>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

            <h4>All Reservations</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
              </input>
          </div>
        </div>
        <table className="table table-hover" style={{marginTop:'40px'}}>  
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
              <th scope="col">Phone_No</th>
              <th scope="col">Check_In</th>
              <th scope="col">Check_Out</th>
              <th scope="col">No_Of_Rooms</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.arrayRes.map((arrayRes,index) =>(               
              <tr key={index}> 
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/Reserpost/${arrayRes._id}`} style={{textDecoration:'none'}}>       
                    {arrayRes.Name}                                                            
                    </a>
                    
                </td>
                <td>{arrayRes.ID} </td>                                       
                <td>{arrayRes.Phone_No}</td>
                <td>{arrayRes.Check_In}</td>
                <td>{arrayRes.Check_Out}</td>
                <td>{arrayRes.No_Of_Rooms}</td>

                <td>
                  <a className="btn btn-warning" href={`/editRes/${arrayRes._id}`}>   
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(arrayRes._id)}>         
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>

              </tr>

              ))}

          </tbody>
        </table>   

        {/* <button className="btn btn-success"><a href="/addRes" style={{textDecoration:'none',color:'white'}}>Create new post</a></button>
        &nbsp; */}
        <button className="btn btn-success"><a href="/vposts" style={{textDecoration:'none',color:'white'}}>View All Reservations</a></button>




      </div>
    )
  }
}
