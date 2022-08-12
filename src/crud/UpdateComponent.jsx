import React from "react";
import axios from "axios";

class UpdateComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            id: this.props.match.params.id,
            count: 0,
            url: `http://localhost:3001/users/`,
            data: []

        }
        console.log(props);

    }

    componentDidMount = () => {
        this.refreshUsers()

        // .then(response => this.setState({
        //     firstName: response.data.firstName
        // }))
    }

    refreshUsers = () => {
        const id = this.state.id
        axios.get(`http://localhost:3001/users/${id}`, this.state.id)
        // console.log(id)

        .then((response) => {
            this.setState({
                firstName: response.data.firstName
            })
        })
    }

    render() {
        return(
            <div>
                <div>
                    <p>update page</p>
                    <form action="">
                        <label htmlFor="">FirstName:</label>
                        <input type="text" value={this.state.firstName}/>
                    </form>
                    {/* {
                        this.state.data.map(
                            users => (
                                users.map(
                                    user => (
                                        <form action="">
                                            <p>Update</p>
                                            <label htmlFor="">First Name:</label>
                                            <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange}/><br />
                                            <label htmlFor="">Last Name:</label>
                                            <input type="text" name="lastName" onChange={this.handleChange}/><br />
                                            <button type="text" >Submit</button>
                                        </form>
                                    )
                                )
                            )
                        )
                    } */}
                    
                </div> 
            </div>
        )
    }
}

export default UpdateComponent