import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './NavBar';

export default class EditPost extends Component {


    constructor(props){
        super(props);
        this.state={
            feedbackType:"",
            serviceType:"",
            dayVisited:"",
            name:"",
            email:"",
            fMessage:"",
            rate:""
        }
    }

    handleInputChange = (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();

        const{feedbackType,serviceType,dayVisited,name,email,fMessage} =this.state;
        const id = this.props.match.params.id;

        const data ={
            feedbackType:feedbackType,
            serviceType:serviceType,
            dayVisited:dayVisited,
            name:name,
            email:email,
            fMessage:fMessage
        }
        console.log(data)
        axios.put(`/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Feedback Updated succesfully")
                this.setState({
                    
                    feedbackType:"",
                    serviceType:"",
                    dayVisited:"",
                    name:"",
                    email:"",
                    fMessage:""
                    
                })
            }
        })
    }


    /*onSubmit = (e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const{name,feedbackType,serviceType,dayVisited,email,fMessage} =this.state;

        const data ={
            name:name,
            feedbackType:feedbackType,
            serviceType:serviceType,
            dayVisited:dayVisited,
            email:email,
            fMessage:fMessage
        }
        console.log(data)
        axios.put(`/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Feedback Updated succesfully")
                this.setState({
                    name:"",
                    feedbackType:"",
                    serviceType:"",
                    dayVisited:"",
                    email:"",
                    fMessage:""
                    
                })
            }
        })
    }*/


    componentDidMount(){
        const id = this.props.match.params.id;

            axios.get(`/post/${id}`).then((res)=>{
                    if(res.data.success){
                        this.setState({
                            name:res.data.post.name,
                            email:res.data.post.email,
                            feedbackType:res.data.post.feedbackType,
                            serviceType:res.data.post.serviceType,
                            dayVisited:res.data.post.dayVisited,
                            fMessage:res.data.post.fMessage



                        });
                        console.log(this.state.post);
                    }
            });
        
    }


    render() {
        return (
            <div className = "container" >
            <NavBar/>
            <div>
                <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">name</label>
                        <input type="text" 
                        className="form-control" 
                        name="name" 
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                        
                        </div>
                        
                        <div class="col-md-4 mb-3">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" name="email" placeholder="Email" required
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        />
                        
                        </div>

                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">This Feedback is a</label>
                        <input type="text" class="form-control" name="feedbackType" placeholder="Compliment/complain/Suggetion" required
                        value={this.state.feedbackType}
                        onChange={this.handleInputChange}
                        />
                        </div>

                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">About Which Service</label>
                        <input type="text" class="form-control" name="serviceType" id="validationTooltip01" placeholder="Spa /Bar /Pool" required
                        value={this.state.serviceType}
                        onChange={this.handleInputChange}
                        />
                        </div>

                        <div class="col-md-3 mb-3">
                        <label for="validationTooltip04">Date You Visited</label>
                        <input type="text" class="form-control" name="dayVisited" id="validationTooltip04" placeholder="State" required
                        value={this.state.dayVisited}
                        onChange={this.handleInputChange}
                        />
                        </div>

                        <div class="col-md-4 mb-3">
                        <label for="exampleFormControlTextarea1">Type Your Feedback Message</label>
                        <textarea class="form-control" name="fMessage" id="exampleFormControlTextarea1" rows="3"  value={this.state.fMessage} onChange={this.handleInputChange}></textarea>
                        </div>

                    </div>
                    <button class="btn btn-primary" type="submit" onClick={this.onSubmit}>Update</button>
                    </form>


            </div>
            </div>
        )
    }
}
