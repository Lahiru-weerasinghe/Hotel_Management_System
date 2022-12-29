import React,{ Component } from 'react';
import axios from 'axios';
import res1 from '../images/res1.png'
import NavBar from './NavBar';
 
export default class RestEditPost extends Component{

  constructor(props){
    super(props);
    this.state={
        menue:"",
        name:"",
        address:"",
        mobile:"",
        date:"",
        aguest:"",
        cguest:"",
        notes:"",
        cardname:"",
        cno:"",
        expdate:"",
        cvv:""

    }

  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
    
    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const id = this.props.match.params.id;
    const{menue,name,address,mobile,date,aguest,cguest,notes,cardname,cno,expdate,cvv} = this.state;

    const data ={
        menue:menue,
        name:name,
        address:address,
        mobile:mobile,
        date:date,
        aguest:aguest,
        cguest:cguest,
        notes:notes,
        cardname:cardname,
        cno:cno,
        expdate:expdate,
        cvv:cvv
    }
    console.log(data)
    axios.put(`http://localhost:8000/Restaurant/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Updated Successfully")
        this.setState(
          {
            menue:"",
            name:"",
            address:"",
            mobile:"",
            date:"",
            aguest:"",
            cguest:"",
            notes:"", 
            cardname:"",
            cno:"",
            expdate:"",
            cvv:""
          }
        )
      }
    })



  }


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/Restaurant/${id}`).then((res)=>{
            if(res.data.success){
        this.setState({
          
        menue:res.data.post.menue,
        name:res.data.post.name,
        address:res.data.post.address,
        mobile:res.data.post.mobile,
        date:res.data.post.date,
        aguest:res.data.post.aguest,
        cguest:res.data.post.cguest,
        notes:res.data.post.notes,
        cardname:res.data.post.cardname,
        cno:res.data.post.cno,
        expdate:res.data.post.expdate,
        cvv:res.data.post.cvv


        });

        console.log(this.state.post);
      }
    });
  }


  render(){
    
    return(
          
      <html>
      <body>
      <div className = "container" >
            <NavBar/> </div>
<section style={{backgroundImage:`url('${res1}')`,
 backgroundPosition:'auto',
        
 backgroundSize:'cover' 
}}> 
 <div className="col-md-8 mt-4 mx-auto"style={{
backgroundImage:`url(${res1})`,
backgroundPosition:'auto',
        
backgroundSize:'cover' 
}}>

 <div className="h1"><h1 className="h3 mb-3 font-weight-normal">Enter details</h1> </div>
 
 <form className="row" onSubmit={this.onSubmit}>

<div className="city" id="left" >
  {/*<div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>menue</label>
 <input type="text"
 className="form-control" placeholder="menue"
 name="menue"
 value={this.state.menue} 
 onChange ={this.handleInputChange}/>
 </div>*/}

 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>
 Select Menu</label>
 <select name="menue" value={this.state.menue} onChange={this.handleInputChange} className="form-select">
                             <option value="11menue">SELECT</option>
                             <option value="menue 1">menue 1</option>
                             <option value="menue 2">menue 2</option>
                             <option value="menue 3">menue 3</option>
                             <option value="menue 4">menue 4</option>                      
 </select>
 </div>
 
 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}} >FULL NAME
</label>
 
 <input type="text"
 className="form-control"
 name="name"
 placeholder="Enter your full name"
 pattern="[a-z A-Z .]+"
 value={this.state.name} onChange={this.handleInputChange}required/>
 </div>
 


 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>Address</label>
 <input type="text"
 className="form-control" placeholder="Enter your Address"
 name="address"

 value={this.state.address} 
 onChange ={this.handleInputChange}required/>
 </div>
 
 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>Mobile number</label>
 <input type="text"  
 className="form-control" placeholder="Mobile"
 name="mobile"
 pattern="[0-9]{10}"
 value={this.state.mobile} 
 onChange ={this.handleInputChange}required/>
 </div>


 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>Date</label>
 <input type="date"
 className="form-control" placeholder="date"
 name="date"
 value={this.state.date} 
 onChange ={this.handleInputChange}required/>
 </div>

{/* <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>No of adult guests</label>
 <input type="text"
 className="form-control" placeholder="aguest"
 name="aguest"
 value={this.state.aguest} 
 onChange ={this.handleInputChange}/>
 </div>*/}
 
 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>
 No of adult guests</label>
 <select name="aguest" value={this.state.aguest} onChange={this.handleInputChange} className="form-select">
                             <option value="11adult">SELECT</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="More than 4">More than 4</option>                          
 </select>
 </div>

{/* <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>No of child guest</label>
 <input type="text"
 className="form-control" placeholder="cguest"
 name="cguest"
 value={this.state.cguest} 
 onChange ={this.handleInputChange}/>
 </div>
*/}

 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>
 No of child guests</label>

 <select name="cguest" value={this.state.cguest} onChange={this.handleInputChange} className="form-select">
                             <option value="11child">SELECT</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="More than 4">More than 4</option>                          
 </select>
 </div>

 
 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '15px'}} >Special requests</label>
 
 <input type="text"
 className="form-control" placeholder="Notes"
 name="notes"
 value={this.state.notes} 
 onChange ={this.handleInputChange}/>
  </div>.<br />

 </div >

 <div className="city" id="right">
 <h1  className=".form-Payments">Payments</h1>
 <br></br>
 <h1  className="form-group">Accepted Cards</h1>
 <br></br>
 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>Name on the card</label>
 <input type="password"
 className="form-control" placeholder="Name"
 name="cardname"
 value={this.state.cardname} 
 pattern="[a-z A-Z .]+"
 onChange ={this.handleInputChange}readOnly/>
 </div>

 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>Card number</label>
 <input type="password"
 className="form-control" placeholder="eg: 1234 5678 7896 7458"
 name="cno"
 value={this.state.cno} 
 onChange ={this.handleInputChange}readOnly/>
 </div>

 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>Expiry date</label>
 <input type="date"
 className="form-control" placeholder="expdate"
 name="expdate"
 value={this.state.expdate} 
 onChange ={this.handleInputChange}readOnly/>
 </div>

 <div className="form-group" style={{marginBottom: '15px'}}>
 <label style={{marginBottom: '5px'}}>CVV</label>
 <input type="password"
 className="form-control" placeholder="3-digit number"
 name="cvv"
 pattern="[0-9]{3}"
 value={this.state.cvv} 
 onChange ={this.handleInputChange}readOnly/>
 </div>
 <button className="btn btn-success" id="btn1" type="submit" style={{marginTop: '40px'}} >
  <i className="far fa-check-square"></i>

 &nbsp; Update!

     </button>

     </div>


     </form>

     </div>
</section>
</body>
</html>
    )
    }
}

 
