import React from "react";
import "./Home.css";
import axios from "axios";
import CrudComponent from "./crud/CrudComponent";


class HomeComponent extends React.Component {

    constructor() {
        super(); 
        this.state = {
            count: 0,
            url: "https://62eddc42a785760e677041dd.mockapi.io/crud",
            // url: `https://f201a4cb-6177-4458-a75c-412cdc1e5069.mock.pstmn.io/crud`,
            // url: "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e7946f7765931c840a35548ad3fa50c4",
            data: []
        }
    }

    getData = () => {
        axios.get(this.state.url).then((response) => {
            this.setState({
                data: [response.data]
            })
        })
    }

    componentDidMount = () => {
        this.getData();
    }

    // deleteUser = (id) => {
    //     axios.delete(`https://62eddc42a785760e677041dd.mockapi.io/crud/${id}`)
    //     .then(() => {
    //         this.getData();
    //     })
    // }

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
                                <th>City</th>
                                <th>Weather</th>
                                <th>Actions</th>
                                {/* <th>City</th>
                                <th>Weather</th> */}
                            </thead>
                            <tbody>

        
                                

                                {/* mock api data */}
                                {
                                    this.state.data.map(
                                        data => (
                                            <tr key={data.id}>
                                                <td>{data.firstName}</td>
                                                <td>{data.lastName}</td>
                                                <td>
                                                    <button className="update-btn" >Update</button>
                                                    <button className="delete-btn">DELETE</button>
                                                </td>
                                            </tr>
                                            
                                        )
                                    )
                                }

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
                
            </div>
            
        )
    }


}

export default HomeComponent;