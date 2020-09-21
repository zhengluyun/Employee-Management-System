import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then(res=>{
            this.setState({employees:res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employees =>
                                    <tr key = {employees.id}>
                                        <td>{employees.firstName}</td>
                                        <td>{employees.lastName}</td>
                                        <td>{employees.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>  
            </div>
        );
    }
}

export default ListEmployeeComponent;