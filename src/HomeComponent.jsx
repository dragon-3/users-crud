import React from "react";
import "./Home.css";
import axios from "axios";


class HomeComponent extends React.Component {

    constructor() {
        super(); 
        this.state = {
            count: 0,
            url: "https://62eddc42a785760e677041dd.mockapi.io/crud",
            data: {}
        }
    }

    getData = () => {
        axios.get(this.state.url).then((response) => {
            this.setState({
                data: response.data
            })
        })
    }

    createUser = () => {

    }

    componentDidMount = () => {
        this.getData();
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
                            <th>First Name</th>
                            <th>Last Name</th>
                        
                            <tr>
                                <td>abc</td>
                                <td>def</td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
                
            </div>
            
        )
    }


}

export default HomeComponent;