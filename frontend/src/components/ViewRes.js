import React, { Component } from 'react';
import axios from 'axios';
//import posts from '../../models/posts.js';
import NavBar from './NavBar';


export default class ViewRes extends Component {
  constructor(props) {
    super(props);

    

    this.state={
      queRes:[]   //this array is used to save posts when we use GET request    posts = queRes
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/Res").then(res =>{
      if(res.data.success){
        this.setState({
          queRes:res.data.existingRes                 //
        });

        console.log(this.state.queRes);               //
      }
    });
  }

  onDelete =(id) =>{

    axios.delete(`/post/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();
    });
  }


  render() {
    return (
      <div className="container">
        <NavBar/>
        <h4>All Reservations</h4>
        
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
            </tr>
          </thead>

          <tbody>
            
            {this.state.queRes.map((queRes,index) =>(              //
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/${queRes._id}`} style={{textDecoration:'none'}}>  {/* */}        
                    {queRes.Name}                                                       {/* */}
                    </a>
                    
                </td>
                <td>{queRes.ID}</td>                 {/*---*/ }     
                <td>{queRes.Phone_No}</td>
                <td>{queRes.Check_In}</td>
                <td>{queRes.Check_Out}</td>
                <td>{queRes.No_Of_Rooms}</td>
                
              </tr>

              ))}

          </tbody>
        </table>   

   

      </div>
    )
  }
}
