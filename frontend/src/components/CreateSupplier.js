import React, {Component} from 'react'
import axios from 'axios'
import NavBar from './NavBar';

export default class CreateSupplier extends Component {

	constructor(props){
		super(props);
		this.state={
			SupplierName:"",
			SupplierAddress:"",
			SupplierEmail:"",
			SupplierContactNumber:"",
			CompanyWebsiteName:"",
			TradingSince:"",
			TypeOfBusiness:"",
			PaymentMethod:""

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
		const{SupplierName,SupplierAddress,SupplierEmail,SupplierContactNumber,CompanyWebsiteName,TradingSince,TypeOfBusiness,PaymentMethod} = this.state;
		const data = {
			SupplierName:SupplierName,
			SupplierAddress:SupplierAddress,
			SupplierEmail:SupplierEmail,
			SupplierContactNumber:SupplierContactNumber,
			CompanyWebsiteName:CompanyWebsiteName,
			TradingSince:TradingSince,
			TypeOfBusiness:TypeOfBusiness,
			PaymentMethod:PaymentMethod
		}
			console.log(data)

			axios.post("http://localhost:8000/supplier/save",data).then((res)=>{
				alert(" Successful");
				if(res.data.success){
					this.setState(
						{
							SupplierName:"",
							SupplierAddress:"",
							SupplierEmail:"",
							SupplierContactNumber:"",
							CompanyWebsiteName:"",
							TradingSince:"",
							TypeOfBusiness:"",
							PaymentMethod:""
						}
					)
				}
			})

	}
	render() {
	  return (
		  <html>
		<div className = "container" >
            <NavBar/>
		  <div className="col-md-8 mt-4 mx-auto">
			  <h1 className="h3 mb-3 front-weight-normal">Create New Supplier</h1>
			  <form className="needs-validation" onSubmit={this.onSubmit}>
				  <div className="from-group" style={{marginBottom:'15px'}}>
					  <label style={{marginBottom:'5px'}} >Supplier Name</label>
					  <input type="text"
					  className="form-control"
					  name="SupplierName"
					  placeholder="Enter Name"
					  pattern="[a-z A-Z.]+"
					  value={this.state.SupplierName}
					  onChange={this.handleInputChange}
					  required/>
				  </div>

				  <div className="form-group" style={{marginBottom:'15px'}}>
					  <label style={{marginBottom:'5px'}}>Supplier Address</label>
					  <input type="text"
					  className="form-control"
					  name="SupplierAddress"
					  placeholder="Enter Address"
					  value={this.state.SupplierAddress}
					  onChange={this.handleInputChange}
					  required/>
				  </div>

				  <div className="form-group" style={{marginBottom:'15px'}}>   
				  <label style={{marginBottom:'5px'}}>Supplier Email</label>   
					  <input type="email"
					  className="form-control"
					  name="SupplierEmail"
					  placeholder="Enter Email"
					  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}"
					  value={this.state.SupplierEmail}
					  onChange={this.handleInputChange}
					  required/>
				  </div>


				  <div className="from-group" style={{marginBottom:'15px'}}>
					  <label style={{marginBottom:'5px'}} >Supplier Contact Number</label>
					  <input type="text"
					  className="form-control"
					  name="SupplierContactNumber"
					  placeholder="Enter Contact No"
					  pattern="[0-9]{10}"
					  value={this.state.SupplierContactNumber}
					  onChange={this.handleInputChange}
					  required/>
				  </div>

				  <div className="from-group" style={{marginBottom:'15px'}}>
					  <label style={{marginBottom:'5px'}} >Company Website Name</label>
					  <input type="text"
					  className="form-control"
					  name="CompanyWebsiteName"
					  placeholder="Enter Website Name"
					  value={this.state.CompanyWebsiteName}
					  onChange={this.handleInputChange}
					  required/>
				  </div>

				  <div className="from-group" style={{marginBottom:'15px'}}>
					  <label style={{marginBottom:'5px'}} >Trading Since</label>
					  <input type="date"
					  className="form-control"
					  name="TradingSince"
					  placeholder="Enter Date"
					  value={this.state.TradingSince}
					  onChange={this.handleInputChange}
					  required/>
				  </div>

				  <div className="from-group" style={{marginBottom:'15px'}}>
					  <label style={{marginBottom:'5px'}} >Type Of Business</label>
					  <input type="text"
					  className="form-control"
					  name="TypeOfBusiness"
					  placeholder="Enter Type of Business"
					  value={this.state.TypeOfBusiness}
					  onChange={this.handleInputChange}
					  required/>
				  </div>

				  <div className="from-group" style={{marginBottom:'15px'}}>
					  <label style={{marginBottom:'5px'}} >Payment Method</label>
					  <input type="text"
					  className="form-control"
					  name="PaymentMethod"
					  placeholder="Enter Payment Method"
					  value={this.state.PaymentMethod}
					  onChange={this.handleInputChange}
					  required/>
				  </div>
				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				  <button type="submit" className="btn btn-primary btn-sm"><i className="far fa-check-square"></i>&nbsp; Save </button>
				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<button type="button" className="btn btn-primary btn-sm"><a href="/supplierH" style={{textDecoration:'none',color:'white'}}>&nbsp;Back</a></button>
				  
			  </form>
		  </div>
		  </div>
		
		  </html>
	  )
	}
}







