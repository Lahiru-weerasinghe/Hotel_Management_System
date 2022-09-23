import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';


export default class ResDetails extends Component {
    constructor(props) {
        super(props);

        this.state={
            post:{}                   //we use post array to save our posts
        };
    }


    
    //used to get specific post details throw the get request
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/Res/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post            //
                });

                console.log(this.state.post);     //
                
            }
        });
    }




    render() {

        //set the data to GUI components
        const {Name,NIC,Phone_No,Package_Type,Check_In_Date,Check_In_Time} = this.state.post;

        return (
            <div className = "container" >
            <NavBar/>
            <div style={{marginTop:'20px'}}>
            <h4>Customer ID: {NIC}</h4>
            {/* <h4>{ID}</h4> */}
            <hr/>

            <dl className="row">
                <dt className="col-sm-3">Customer's Name </dt>
                <dd className="col-sm-9">{Name}</dd>

                <dt className="col-sm-3">Customer's Phone number</dt>
                <dd className="col-sm-9">{Phone_No}</dd>

                

                <dt className="col-sm-3">Package Type</dt>
                <dd className="col-sm-9">{Package_Type}</dd>

                <dt className="col-sm-3">Package Type</dt>
                <dd className="col-sm-9">{Check_In_Date}</dd>

                <dt className="col-sm-3">Package Type</dt>
                <dd className="col-sm-9">{Check_In_Time}</dd>
            </dl>
            </div>
            </div>
        )
    }
}
