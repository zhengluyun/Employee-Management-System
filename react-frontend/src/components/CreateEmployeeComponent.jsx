import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.inputFirstName = this.inputFirstName.bind(this);
        this.inputLastName = this.inputLastName.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    inputFirstName = (e) => {
        this.setState({firstName: e.target.value});
    }

    inputLastName = (e) => {
        this.setState({lastName: e.target.value});
    }

    inputEmail = (e) => {
        this.setState({emailId: e.target.value});
    }

    saveEmployee = async(e) => {
        //e.preventDefualt();?
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId}
        await EmployeeService.createEmployee(employee).then(res => {
            //this.props.history.push('/list-employees');?
        });
    } 

    cancel(){
        this.props.history.push('/list-employees');
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.inputFirstName}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.inputLastName}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email Address: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" value={this.state.emailId} onChange={this.inputEmail}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;