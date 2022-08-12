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

    handleChange = (event) => {
        event.preventDefault(); 
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div>
                edit data
            </div>
        )
    }
}

export default EditDataComponent