import React from "react";
import axios from "axios";

class CrudComponent extends React.Component {

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

    //CRUD operations
    createUser = () => {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        axios.post(`https://f201a4cb-6177-4458-a75c-412cdc1e5069.mock.pstmn.io/crud`, {firstName, lastName})
    }

    // deleteUser = (id) => {
    //     axios.delete(`https://62eddc42a785760e677041dd.mockapi.io/crud/${id}`)
    // }


    render() {
        return(

        
            <div className="form">
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

export default CrudComponent;