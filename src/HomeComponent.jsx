import React from "react";
import "./Home.css";
import axios from "axios";
// import data from "./db.json"
import CrudComponent from "./crud/CrudComponent";
import dataService from "./crud/dataService";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import EditDataComponent from "./EditDataComponent";


class HomeComponent extends React.Component {

    constructor() {
        super(); 
        this.state = {
            firstName: "",
            lastName: "",
            count: 0,
            url: `http://localhost:3001/users/`,
            visible: false,
            data: []
        }
    }

    componentDidMount = () => {
        this.refreshUsers();
    }

    refreshUsers = () => {
        axios.get(this.state.url).then((response) => {
            this.setState({
                data: [response.data]
            })
        })
    }

    createUser = () => {
        const firstName = this.state.firstName
        const lastName = this.state.lastName
        axios.post(this.state.url, {firstName, lastName})
    }

    deleteUser = (id) => {
        axios.delete(this.state.url + `${id}`)
        .then(() => {
            this.refreshUsers();
        })
    }

    updateUser = (id) => {
        if (this.state.visible == false) {
            this.setState({
                visible: true
            })
        }
        else {
            this.setState({
                visible: false
            })
        }

    }

    
    handleChange = (event) => {
        event.preventDefault(); 
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    render() {
        return(

        
            <div>
                <div className="top">
                    <p>User Count: {this.state.count}</p>
                </div>
                <div className="content">
                    <div className="table">
                        <table>
                            <thead>
                                <th>First</th>
                                <th>Last</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>

                                {
                                    this.state.data.map(
                                        users => (
                                            users.map(
                                                user => (
                                                    
                                                    <tr key={user.id}>
                                                        <td>{user.firstName}</td>
                                                        <td>{user.lastName}</td>
                                                        <td>
                                                            <button className="update-btn" onClick={this.updateUser}>Update</button>
                                                            <button className="delete-btn" onClick={() => this.deleteUser(user.id)}>DELETE</button>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        )
                                    )
                                }
                                

                                
                                {/* weather data api */}
                                {/* {this.state.data.map(
                                    data => (
                                            <tr key={data.id}>
                                                <td>{data.name}</td>
                                                    {
                                                        data.weather.map(
                                                            weather => (
                                                                <td>{weather.description}</td> 
                                                                

                                                            )
                                                        )
                                                        
                                                    }
                                                    <td>
                                                    <button className="update-btn" >Update</button>
                                                    <button className="delete-btn" >DELETE</button>
                                                    
                                                </td>
                                            </tr>
                                            
                                        )
                                    )
                                } */}
                                
                            </tbody>
                        </table>
                    </div> 
                                
                    
                </div>

                <div className="form">

                    {
                        this.state.visible ? "" :
                        <form action="">
                        <label htmlFor="">First Name:</label>
                        <input type="text" name="firstName" onChange={this.handleChange}/><br />
                        <label htmlFor="">Last Name:</label>
                        <input type="text" name="lastName" onChange={this.handleChange}/><br />
                        <button type="text" onClick={this.createUser}>Submit</button>
                        </form>
                    }
                        
                    
                </div>

                <div>
                    {
                        this.state.visible ? 
                        <EditDataComponent /> : ""
                    
                    }
                </div>
                
            </div>
                
            
        )
    }


}

export default HomeComponent;