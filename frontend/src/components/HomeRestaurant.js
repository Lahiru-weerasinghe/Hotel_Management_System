import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './NavBar';

export default class HomeRestaurant extends Component {
    constructor(props){
        super(props);
        this.state={
          Restposts:[]
        };
      }
    // eslint-disable-next-line
    componentDidMount(){
      this.retrievePosts();
    }
      retrievePosts(){
        axios.get("http://localhost:8000/Restaurants").then(res=>{
          if(res.data.success){
            this.setState({
              Restposts:res.data.existingPosts
            });
    
            console.log(this.state.Restposts)
          }
        });
      } 
    
      onDelete = (id) =>{
        axios.delete(`http://localhost:8000/Restaurant/delete/${id}`).then((res) =>{
            alert("Deleted Successfully");
            this.retrievePosts();
      })
      }


      filterData(Restposts,searchKey){                      

        const result = Restposts.filter((Restposts) =>            
        Restposts.name.toLowerCase().includes(searchKey)||
        Restposts.address.toLowerCase().includes(searchKey)||
        Restposts.mobile.toLowerCase().includes(searchKey)||
        Restposts.date.toLowerCase().includes(searchKey)||
        Restposts.aguest.toLowerCase().includes(searchKey)||
        Restposts.cguest.toLowerCase().includes(searchKey)||    
        Restposts.name.toUpperCase().includes(searchKey)||  
        Restposts.address.toUpperCase().includes(searchKey)|| 
        Restposts.mobile.toUpperCase().includes(searchKey)||
        Restposts.date.toUpperCase().includes(searchKey)||
        Restposts.aguest.toUpperCase().includes(searchKey)||
        Restposts.cguest.toUpperCase().includes(searchKey)||
        Restposts.name.toUpperCase().includes(searchKey)||  
        Restposts.address.includes(searchKey)|| 
        Restposts.mobile.includes(searchKey)||
        Restposts.date.includes(searchKey)||
        Restposts.aguest.includes(searchKey)||
        Restposts.notes.toLowerCase().includes(searchKey)||
        Restposts.notes.toUpperCase().includes(searchKey)||  
        Restposts.notes.toUpperCase().includes(searchKey)||  
        Restposts.cguest.includes(searchKey)
        
        )
    
        this.setState({Restposts:result})                   
      }
    
    
    
      handleSearchArea = (e) =>{
    
        const searchKey= e.currentTarget.value;
    
        axios.get("/Restaurants").then(res =>{
          if(res.data.success){
            
            this.filterData(res.data.existingPosts,searchKey)
          }
        });
      }
    




    
      render() {
        return (
          <div className="container">
              <NavBar/>
              <div style={{backgroundColor:"beige"}}>

       
              <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

            <h4>Restaurant reservation details</h4>
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

          <table className = "table" >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Menue</th>
                <th scope="col">FULL NAME</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">MOBILE NUMBER</th>
                <th scope="col">Date</th>
                <th scope="col">NO. OF GUESTS</th>
                <th scope="col">NO. OF CHILDREN</th>
                <th scope="col">SPECIAL REQUESTS</th>
               {/* <th scope="col">NAME ON CARD</th>
                <th scope="col">CARD NUMBER</th>
                <th scope="col">EXP DAY</th>
                <th scope="col">CVV</th>
        <th scope="col">Action</th> */}
              </tr>
            </thead>
                    <tbody>
                      {this.state.Restposts.map((Restposts,index)=>(
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
    
                        <td>
                            <a href={`/Restaurantpost/${Restposts._id}`} style={{textDecoration:'none'}}>
                            {Restposts.menue}
                            </a>
                            </td>
                             
                        <td>{Restposts.name}</td>
                        <td>{Restposts.address}</td>
                        <td>{Restposts.mobile}</td>
                        <td>{Restposts.date}</td>
                        <td>{Restposts.aguest}</td>
                        <td>{Restposts.cguest}</td>
                        <td>{Restposts.notes}</td>
                      {/*  <td>{Restposts.cardname}</td>
                        <td>{Restposts.cno}</td>
                        <td>{Restposts.expdate}</td>
                      <td>{Restposts.cvv}</td>*/}
                         
                        <td>
                          <a className="btn btn-warning" href={`/Restaurantedit/${Restposts._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(Restposts._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                          </a>
                          </td>
                        </tr>
                      ))}     
                    </tbody> 
                    </table>
    
                    <button className="brn btn-success"> <a href="/Restaurantadd" style={{textDecoration:'none',color:'white'}}> Create reservation </a></button>
                      
                    <button className="brn btn-success"> <a href="/RestAllDetails" style={{textDecoration:'none',color:'white'}}> Generate Restaurant report </a></button>
                    <br>
                          
                          </br>
                          </div>
          </div>
        );
      }
    }
