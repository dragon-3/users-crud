// import React from "react";
// import axios from "axios";
// import {useParams} from "react-router-dom";

// class UpdateComponent extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             firstName: "",
//             lastName: "",
//             // id: this.props.match.params.id,
//             id: this.props.match.params.id,
//             count: 0,
//             url: `http://localhost:3001/users/`,
//             data: []

//         }

//     }

//     componentDidMount = () => {
//         this.refreshUsers()
//     }

//     refreshUsers = () => {
//         const id = this.props.params
//         axios.get(`http://localhost:3001/users/${id}`)

//         .then((response) => {
//             this.setState({
//                 data: response.data
                
//             })
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <div>
//                     <p>update page</p>
//                     <form action="">
//                         <label htmlFor="">FirstName:</label>
//                         <input type="text" value={this.state.firstName} />
//                         {/* <td>{data.name}</td> */}
//                     </form>
//                     {/* {
//                         this.state.data.map(
//                             users => (
//                                 users.map(
//                                     user => (
//                                         <form action="">
//                                             <p>Update</p>
//                                             <label htmlFor="">First Name:</label>
//                                             <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange}/><br />
//                                             <label htmlFor="">Last Name:</label>
//                                             <input type="text" name="lastName" onChange={this.handleChange}/><br />
//                                             <button type="text" >Submit</button>
//                                         </form>
//                                     )
//                                 )
//                             )
//                         )
//                     } */}
                    
//                 </div> 
//             </div>
//         )
//     }
// }

// export default UpdateComponent

import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateComponent() {


    const [data, setData] = useState([]);
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();


   const refreshUsers = () => {
        axios.get(`http://localhost:3001/users/${id}`)
        .then(response => {
            setData(response.data)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
        }
           
            // setFirstName(response.data.firstName)

        )
    };

    useEffect(() => {
        refreshUsers()
    }, []);

    const handleFirstNameChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        event.preventDefault();
        setLastName(event.target.value)
    }

    const editUser = () => {
        axios.put(`http://localhost:3001/users/${id}`, {firstName, lastName} )
        navigate("/")

    }

    return(
        <div>
            <form action="">
                <label htmlFor="">First Name:</label>
                <input type="text" onChange={handleFirstNameChange} value={firstName}/><br />
                <label htmlFor="">LastName:</label>
                <input type="text" onChange={handleLastNameChange} value={lastName}/>
                <button type="text" onClick={editUser}>Submit</button>
            </form>
        </div>
    )
}

export default UpdateComponent
