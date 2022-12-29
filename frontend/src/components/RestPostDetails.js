import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class RestPostDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            post:{}
        };
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/Restaurant/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
            }
                console.log(this.state.post);


        });
    }
    
    render() {

        const{menue,name,address,mobile,date,aguest,cguest,notes,cardname,cno,expdate,cvv} = this.state.post;
        return (
            <div className = "container" >
            <NavBar/>
            <div >

            <div style={{marginTop:'20px'}}>
                <h4>Reservation Details</h4>
                <hr/>
                
                <d1 className ="row">
              
                    <dt className="col-sm-3">Menue</dt>
                    <dd className="col-sm-3">{menue}</dd>

                    <dt className="col-sm-3">FULL NAME</dt>
                    <dd className="col-sm-3">{name}</dd>
                    
                    <dt className="col-sm-3">ADDRESS</dt>
                    <dd className="col-sm-3">{address}</dd>

                    <dt className="col-sm-3">MOBILE NUMBER</dt>
                    <dd className="col-sm-3">{mobile}</dd>

                    <dt className="col-sm-3">Date</dt>
                    <dd className="col-sm-3">{date}</dd>

                    <dt className="col-sm-3">NO. OF GUESTS</dt>
                    <dd className="col-sm-3">{aguest}</dd>

                    <dt className="col-sm-3">NO. OF CHILDREN</dt>
                    <dd className="col-sm-3">{cguest}</dd>

                    <dt className="col-sm-3">SPECIAL REQUESTS</dt>
                    <dd className="col-sm-3">{notes}</dd>

                   {/* <dt className="col-sm-3">NAME ON CARD</dt>
                    <dd className="col-sm-3">{cardname}</dd>

                    <dt className="col-sm-3">CARD NUMBER</dt>
                    <dd className="col-sm-3">{cno}</dd>

                    <dt className="col-sm-3">EXP DAY</dt>
                    <dd className="col-sm-3">{expdate}</dd>

                    <dt className="col-sm-3">CVV</dt>
        <dd className="col-sm-3">{cvv}</dd>*/}
             
                     
                </d1>
            </div>
            </div>
             </div>
        );
    }
}

 