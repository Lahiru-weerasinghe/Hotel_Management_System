import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios';

import NavBar from './NavBar';


const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

// const printbtnviewres = {
//   color:'blue',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   fontSize: 18,
//   marginTop: 10,
//   width: 400,
//   float: 'right',
//   transform: 'translate(-50%, 50%)',
  

// };

class ComponentToPrint extends React.Component {




  constructor(props) {
    super(props);

    

    this.state={
      queRes:[]   //this array is used to retrieve posts when we use GET request    
    };

  }

  //componentDidMount() method is calling when our all components and sub components are finished rendering
  componentDidMount() {
    this.retrievePosts();
  }


  //create retrievePosts to retrieve all data inside the database

  retrievePosts() {
    axios.get("/Res").then(res =>{
      if(res.data.success){
        this.setState({
          queRes:res.data.existingRes                 
        });

        console.log(this.state.queRes);               
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
            <th scope="col">NIC</th>
            <th scope="col">Phone_No</th>
            <th scope="col">Package_Type</th>
            <th scope="col">Check_In_Date</th>
            <th scope="col">Check_In_Time</th>
            
          </tr>
        </thead>

        

        <tbody>
          
          {this.state.queRes.map((queRes,index) =>(    //we use map function for rendering a list of data which are saved inside the posts method
            <tr key={index}>                           
              <th scope="row">{index+1}</th>

              <td>{queRes.Name}</td>
              <td>{queRes.NIC}</td>                      
              <td>{queRes.Phone_No}</td>
              <td>{queRes.Package_Type}</td>
              <td>{queRes.Check_In_Date}</td>
              <td>{queRes.Check_In_Time}</td>
              
              
            </tr>

            ))}

        </tbody>
      </table>   

 

    </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        
        {/* implement print button */}
        <ReactToPrint
        
          
          content={() => this.componentRef}
          
          
          trigger={() => <button type="button" className='btn btn-dark' style={{color:'white', textAlign: 'center',float: 'center', width: 400, fontSize: 28, transform: 'translate(10%, 1000%)'}} >Print this out!</button>}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;















// import axios from 'axios';




// npm install --save react-to-print
