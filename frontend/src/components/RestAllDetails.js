import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios';
import NavBar from './NavBar';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class ComponentToPrint extends React.Component {

  constructor(props){
    super(props);

    this.state={
      RestpostsAll:[]
    };
  }

  componentDidMount(){
    this.retrieveRestaurant();
  }

  retrieveRestaurant(){
    axios.get("http://localhost:8000/Restaurants").then(res =>{
      if(res.data.success){
        this.setState({
          RestpostsAll:res.data.existingPosts
        });
        console.log(this.state.RestpostsAll)
      }
    });
  }


  render() {
    return (
      <div className="container" >
          <NavBar/>
            <h2>All Restaurant Details</h2>
            <table className="table table-hover" style={{marginTop:'40px'}}>
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
                   
              </tr>
            </thead>

            <tbody>
                 {this.state.RestpostsAll.map((RestpostsAll,index)=>(
                   <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td>{RestpostsAll.menue}</td>
                     <td>{RestpostsAll.name}</td>
                     <td>{RestpostsAll.address}</td>
                     <td>{RestpostsAll.mobile}</td>
                     <td>{RestpostsAll.date}</td>
                     <td>{RestpostsAll.aguest}</td>
                     <td>{RestpostsAll.cguest}</td>
                     <td>{RestpostsAll.notes}</td>
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
        <ReactToPrint
          trigger={() => <button type="button" className="btn btn-dark" style={{color:'white', width:'12%',float: 'right', transform: 'translate(-100%,1500%)'}}>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;