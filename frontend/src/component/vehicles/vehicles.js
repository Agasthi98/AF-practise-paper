import React, { Component }  from 'react'
import axios from 'axios'


class Vehicle extends Component { 
constructor(props){
    super(props)
    this.state = {
        vehicle: []
    }
}

    componentDidMount() {
        axios.get(`http://localhost:5500/api/category/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ vehicle: response.data.vehicle })
            console.log(response.data)
        })
        .catch(error => {
            alert(error.message)
        })
      
    }

    render() {
        return (
            <div className="container">
                <h1>Vehicles</h1>
                {this.state.vehicle.length > 0 && this.state.vehicle.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <h4>Vehicle Name: {item.name}</h4>
                        <h4>Type: {item.type}</h4>
                        <h4>Model: {item.model}</h4>
                    </div>
                ))}
            </div>
        )
    }

}

export default Vehicle

