import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';


class EmployeeComponent extends Component {

	constructor(props, context) {
    super(props, context);
    super(props);
    this.state = {isEditing: false};

    
    this.eventHandler = this.eventHandler.bind(this);
    this.addHandler = this.eventHandler.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }


	eventHandler(){
		this.setState({
			isEditing:true
		})
	}
	addHandler(){
		this.setState({
			isEditing:true
		})
	}
	removeHandler(){
		this.setState({

		})
	}

	componentDidMount() {

	}

	saveChanges() {
		this.setState({
			isEditing:false
		})
	}



	render() {

		if (this.state.isEditing) {
      		return (

      			<div>
        			<h1>Edit Person</h1>
        			<form>
  						First name:
  						<input type="text" name="firstname"></input>
  						Last name:
  						<input type="text" name="lastname"></input>
					</form>
        			<button onClick={this.saveChanges}>Save Changes</button>
        		</div>
      )



      		if (this.state.addUser) {
      			return (
      			<div>
      				<h1>Add User</h1>
        			<form>
  						First name:
  						<input type="text" name="firstname"></input>
  						Last name:
  						<input type="text" name="lastname"></input>
					</form>
        			<button onClick={this.saveChanges}>Save Changes</button>
        		</div>
      			)
      		}
    }

		console.log(this.props.name);
		let nameArray = [this.props.name];
		const finalArray = nameArray.map((key) => {
			<div className="col-sm-12">
				<li onClick={this.eventHandler}>name </li>
				<button>Edit</button>
			</div>
			});

		console.log(nameArray);
		return (
			<div>
			<div>Employee List</div>
			<ul>
				{nameArray.map((key) => {
			<div className="col-sm-12">
				<li onClick={this.eventHandler}>key </li>
				<button>Edit</button>
			</div>
			})}
			</ul>
				Count = {this.props.count}
				<h1>Hello Employee Component</h1>
				
				<button onClick={this.addHandler}>Add User</button>
				<button onClick={() => this.props.dispatch({ type: "REMOVEUSER" })}>Remove User</button>
				<button onClick={this.eventHandler}>Edit User</button>
			</div>
			)
	}

}

const mapStateToProps = state => state;

export default connect(mapStateToProps) (EmployeeComponent);