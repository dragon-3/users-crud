import React from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import data from "./db.json"
import CrudComponent from "./crud/CrudComponent";
import dataService from "./crud/dataService";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import EditDataComponent from "./EditDataComponent";
import UpdateComponent from "./crud/UpdateComponent";
import {withRouter, Navigation} from 'react-router-dom';



class HomeComponent extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            firstName: "",
            lastName: "",
            id: "",
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
        axios.get(this.state.url)
        .then((response) => {
            this.setState({
                data: [response.data]
            })
        })
    }

    //crud operations

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

    showUpdateForm = (id) => {
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

    // updateUserClicked = (id) => {
    //     this.props.history.push(`${id}`)
    // } 

    // onClickUpdate = () => {
    //     <Link to ="/update"/>
    // }

    

    
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
                                                        <Link to={`${user.id}`}><button className="update-btn"  >Update</button></Link>
                                                            {/* <button className="update-btn" onClick={() => this.updateUser(user.id)}>Update</button> */}
                                                            <button className="delete-btn" onClick={() => this.deleteUser(user.id)}>DELETE</button>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        )
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div> 
                                
                    
                </div>

                <div className="form">

                    {
                        // this.state.visible ? "" :
                        <form action="">
                        <label htmlFor="">First Name:</label>
                        <input type="text" name="firstName" onChange={this.handleChange}/><br />
                        <label htmlFor="">Last Name:</label>
                        <input type="text" name="lastName" onChange={this.handleChange}/><br />
                        <button type="text" onClick={this.createUser}>Submit</button>
                        </form>
                    }
                        
                    
                </div>

                {/* <div>
                    {
                        this.state.visible ? 
                        <div>
                            <form action="">
                                <p>Update</p>
                                <label htmlFor="">First Name:</label>
                                <input type="text" name="firstName" onChange={this.handleChange}/><br />
                                <label htmlFor="">Last Name:</label>
                                <input type="text" name="lastName" onChange={this.handleChange}/><br />
                                <button type="text" onClick={this.updateUser}>Submit</button>
                            </form>
                        </div> 
                        
                        : ""
                                
                    }
                </div> */}
                
            </div>
                
            
        )
    }


}

export default HomeComponent;