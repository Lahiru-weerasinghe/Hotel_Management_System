import React, { Component } from 'react';

import axios from 'axios';



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
      //this method will retrieve current data after deleting the relevent reservation
      this.retrievePosts();                    
      
    });
  }


  //search bar
  //this method will filter data to lowercase or uppercase
  filterData(arrayRes,searchKey){                      
    const result = arrayRes.filter((post) =>            
    post.Name.toLowerCase().includes(searchKey)||
    post.NIC.toLowerCase().includes(searchKey)||
    post.Phone_No.toLowerCase().includes(searchKey)||
    post.Package_Type.toLowerCase().includes(searchKey)||   
    post.Check_In_Date.toLowerCase().includes(searchKey)||
    post.Check_In_Time.toLowerCase().includes(searchKey)||
    post.Name.toUpperCase().includes(searchKey)||  
    post.NIC.toUpperCase().includes(searchKey)|| 
    post.Phone_No.toUpperCase().includes(searchKey)||
    post.Package_Type.toLowerCase().includes(searchKey)||   
    post.Check_In_Date.toUpperCase().includes(searchKey)||
    post.Check_In_Time.toUpperCase().includes(searchKey)||
    post.Name.toUpperCase().includes(searchKey)||  
    post.NIC.includes(searchKey)|| 
    post.Phone_No.includes(searchKey)||
    post.Package_Type.toLowerCase().includes(searchKey)|| 
    post.Check_In_Date.includes(searchKey)||
    post.Check_In_Time.includes(searchKey)
    )

    //after filter data, display it. 
    this.setState({arrayRes:result})             
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

        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

            {/* Topic */}

          <h4>All Extrafacility Reservations</h4>
          </div>

          {/* Search Bar component */}

          {/* onChange method, when we give specific data it will automaticaly update it's state */}

          <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search something"
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
              <th scope="col">NIC</th>
              <th scope="col">Phone_No</th>
              <th scope="col">Package_Type</th>
              <th scope="col">Check_In_Date</th>
              <th scope="col">Check_In_Time</th>
              
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>   

              
            {//we use map function for rendering a list of data which are saved inside the post method     
            this.state.arrayRes.map((arrayRes,index) =>(     
            
              <tr key={index}>                                        
                <th scope="row">{index+1}</th>
                <td>
                  
                {/* this will display relevent details for the name */}
                    <a href={`/Reserpost/${arrayRes._id}`} style={{textDecoration:'none'}}>       
                    {arrayRes.Name}                                                            
                    </a>
                    
                </td>
                <td>{arrayRes.NIC} </td>                                       
                <td>{arrayRes.Phone_No}</td>
                <td>{arrayRes.Package_Type}</td>
                <td>{arrayRes.Check_In_Date}</td>
                <td>{arrayRes.Check_In_Time}</td>
               

                <td>
                  <a className="btn btn-outline-success" href={`/editRes/${arrayRes._id}`}>   
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
