import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
//import posts from '../../../models/posts';





//import { post } from '../../routes/posts';


/*import './App.css';
import FormBody from './FormBody';

function App() {
  return (
    //BEM class naming convention
    <div className="App">
    
*/
    //{Header}
    
    //<FormBody/>

   // { footer }
/*
    </div>
  );
}

export default App;

*/



export default class  Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
  
}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res =>{
    if(res.data.success)
    this.setState({
      posts:res.data.existingPosts
    });
    console.log(this.state.posts);

  });
}

onDelete =(id)=>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post)=>
    post.name.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
 
}

handleSearchArea =(e) =>{
  const searchKey =e.currentTarget.value;

  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    }
  

  });
}

  render() {
    return (
      

      <div className="container">
        <NavBar/>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All posts</h4>
          </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
              >
              </input>
            </div>
            </div>



        <p>Admin Page</p>
        <table className="table">
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DayVisited</th>
            <th scope="col">FeedbackType</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
            </tr>
          
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.name}
                    </a>
                    </td>
                <td>{posts.email}</td>
                <td>{posts.dayVisited}</td>
                <td>{posts.feedbackType}</td>
                <td>{posts.fMessage}</td>
                <td>
                  <a className="btn btn-warning" href={`/editf/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="far fa trash-alt"></i>&nbsp;Delete
                  </a>
                </td>

              </tr>
            ))}
          </tbody>
         

        </table>

        {/* <button className="btn btn-success"><a href="/addf" style={{textDecoration:'none',color:'white'}}>New feedback</a></button> */}
      </div>
      
    )
  }
}

