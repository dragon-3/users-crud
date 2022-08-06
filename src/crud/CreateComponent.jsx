import React from "react";
import axios from "axios";

class CreateComponent extends React.Component {

    constructor() {
        super(); 
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    

    handleChange = (event) => {
        event.preventDefault(); 
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createUser = () => {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        axios.post("https://62eddc42a785760e677041dd.mockapi.io/crud", {firstName, lastName})
    }

    // deleteUser = () => {

    // }



    render() {
        return(

        
            <div>
                <form action="">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="firstName" onChange={this.handleChange}/><br />
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="lastName" onChange={this.handleChange}/><br />
                    <button type="text" onClick={this.createUser}>Submit</button>
                </form>
                
            </div>
            
        )
    }


}

export default CreateComponent;