import React from "react";
import "./Home.css";
import axios from "axios";


class HomeComponent extends React.Component {

    constructor() {
        super(); 
        this.state = {
            count: 0,
            // url: "https://62eddc42a785760e677041dd.mockapi.io/crud"
            url: "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e7946f7765931c840a35548ad3fa50c4",
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
                            <thead>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>{this.state.data.name}</td>
                                    {/* {this.state.data.map(
                                        data => (
                                            <tr key={data.id}>
                                                <td>{data.name}</td>
                                                <td>{data.weather.description}</td>
                                            </tr>
                                                
                                        )
                                    )
                                } */}
                                    {/* <td>{this.state.data.map(data => {data.weather.description})}</td> */}
                                </tr>
                                
                                {/* {
                                this.state.data.map(
                                        data => (
                                            <tr key={data.id}>
                                                <td>{data.name}</td>
                                                <td>{data.weather.description}</td>
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