import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Routes, withRouter} from 'react-router-dom';

class EditDataComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // id : this.props.match.params.id,
            url: `http://localhost:3001/users/`,
            data: {},
            firstName: "",
            lastName: ""
        }
    }


    componentDidMount = () => {
        this.refreshUsers();
    }

    refreshUsers = () => {

        axios.get(this.state.url).then((response) => {

            // this.state.data.find(

            // )

            this.setState({
                data: response.data
                
            })
        })

        // this.state.data.map(
        //     users => (
        //         users.map(
        //             user => (
        //                 this.state.firstName: {user.firstName}
        //             ) 
        //         )
        //     )
        // )
    }

    // useEffect = (props) => {
    //     const id = props.match.params.id

    //     this.setState({
    //         id: id
    //     })
    // }


    render() {
        return (
            <div>
                <form action="">
                    <p>Update</p>
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/><br />
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="lastName" onChange={this.handleChange}/><br />
                    <button type="text" onClick={this.updateUser}>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditDataComponent)