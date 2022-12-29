import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class SupplierDetails extends Component {
	constructor(props){
		super(props);
		this.state={
			supplier:{}
		};
	}
	componentDidMount(){
		const id = this.props.match.params.id;

		axios.get(`http://localhost:8000/supplier/${id}`).then((res)=>{
			if(res.data.success){
				this.setState({
					supplier:res.data.supplier
				});
				console.log(this.state.supplier);
			}
		});
	}

	render() {
		const {SupplierName,SupplierAddress,SupplierEmail,SupplierContactNumber,CompanyWebsiteName,TradingSince,TypeOfBusiness,PaymentMethod} = this.state.supplier;

	  return (
		<div className = "container" >
		<NavBar/>
	   <div style={{marginTop:'100px'}}>
		   <h4>{SupplierName}</h4>
		   <hr/>
		   <dl className="row">
			   <dt className="col-sm-3">Supplier Address</dt>
			   <dd className="col-sm-9">{SupplierAddress}</dd>

			   <dt className="col-sm-3">Supplier Email</dt>
			   <dd className="col-sm-9">{SupplierEmail}</dd>

			   <dt className="col-sm-3">Supplier Contact Number</dt>
			   <dd className="col-sm-9">{SupplierContactNumber}</dd>

			   <dt className="col-sm-3">Company Website Name</dt>
			   <dd className="col-sm-9">{CompanyWebsiteName}</dd>

			   <dt className="col-sm-3">Trading Since</dt>
			   <dd className="col-sm-9">{TradingSince}</dd>

			   <dt className="col-sm-3">Type Of Business</dt>
			   <dd className="col-sm-9">{TypeOfBusiness}</dd>

			   <dt className="col-sm-3">Payment Method</dt>
			   <dd className="col-sm-9">{PaymentMethod}</dd>
		   </dl>
		   <button type="button" className="btn btn-primary"><a href="/supplierH" style={{textDecoration:'none',color:'white'}}>&nbsp;Back</a></button>
	    </div>
		</div>
		
	  )
	  
	}
}
