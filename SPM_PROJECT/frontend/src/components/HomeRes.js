<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios';
//import posts from '../../models/posts.js';
import NavBar from './NavBar';

export default class HomeRes extends Component {
  constructor(props) {
    super(props);

    

    this.state={
      arrayRes:[]   //this array is used to save posts    
    };

  }


  ////allows us to execute the React code when the component is already placed
  componentDidMount() {
    this.retrievePosts();
  }


  //this is used to get all the data inside the database
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


  //implement delete method
  onDelete =(id) =>{

    axios.delete(`/Res/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();                    //this method will retrieve current data after deleting the relevent reservation
    });
  }


  //this method will filter data to lowercase or uppercase
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

    this.setState({arrayRes:result})          //after filter data, display it.    
  }



  //implement handleSearchArea function 
  //in here we use two parameters,
  //existingRes, searchKey using these two we find the particular data in the database
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

        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

            {/* Topic */}
<br></br><br></br><br></br>
            <h1>All Reservations</h1>
          </div>

          {/* Search Bar component */}

          {/* onChange method, when we give specific data it will automaticaly update it's state */}

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
                     
            {this.state.arrayRes.map((arrayRes,index) =>(    //we use map function for rendering a list of data which are saved inside the post method
              <tr key={index}>                                        
                <th scope="row">{index+1}</th>
                <td>
                  
                {/* this will display relevent details for the name */}
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
                  <a className="btn btn-outline-warning" href={`/editRes/${arrayRes._id}`}>   
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;   {/*used to create a space without going to new line*/}

                  {/* in delete method we use array name as arrayRes, so to delete a reservation we have to pass id as well */}
                  <a className="btn btn-outline-danger" href="#" onClick={() =>this.onDelete(arrayRes._id)}>         
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>

              </tr>

              ))}

          </tbody>
        </table>   


<br></br>
<br></br>

<br></br>
        {/* <button className="btn btn-success"><a href="/addRes" style={{textDecoration:'none',color:'white'}}>Create new post</a></button>
        &nbsp; */}
        <button className="btn btn-success"><a href="/vposts" style={{textDecoration:'none',color:'white'}}>View All Reservations</a></button>


        <br>
        </br>
        <br>
        </br><br>
        </br><br>
        </br>




      </div>
    )
  }
}
=======
>>>>>>> 4421a8854692b72e37806689325610cc44cc9a75
