import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class ResDetails extends Component {
    constructor(props) {
        super(props);

        this.state={
            post:{}                   // post = queRes
        };
    }

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

        const {Name,ID,Phone_No} = this.state.post;

        return (
            <div className = "container" >
            <NavBar/>
            <div style={{marginTop:'20px'}}>
            <h4>Customer ID: {ID}</h4>
            {/* <h4>{ID}</h4> */}
            <hr/>

            <dl className="row">
                <dt className="col-sm-3">Customer's Name </dt>
                <dd className="col-sm-9">{Name}</dd>

                <dt className="col-sm-3">Customer's Phone number</dt>
                <dd className="col-sm-9">{Phone_No}</dd>
            </dl>
            </div>
            </div>
        )
    }
}
