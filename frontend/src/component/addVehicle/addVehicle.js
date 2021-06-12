import React, { Component } from "react";
import axios from 'axios'



const initialState = {
    code: '',
    model: '',
    type: '',
    name: ''
}

class addVehicle extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = initialState
  }

  onChange (e) {
      this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
      e.preventDefault()
      let vehicle = {
          code: this.state.code,
          model: this.state.model,
          type: this.state.type,
          name: this.state.name
      }
      console.log('DATA SENT', vehicle)
      axios.post('http://localhost:5500/api/vehicle/addvehicle', vehicle)
      .then(response => {
          alert('Data successfully inserted')
      })
      .catch(error => {
          console.log(error.message)
          alert(error.message)
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Add Vehicle</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="vcode" className="form-label"> Code: </label>
            <input type="text"
              className="form-control" id="vcode" name="code" aria-describedby="emailHelp" value={this.state.code} onChange={this.onChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="vmodel" className="form-label"> Model:</label>
            <input type="text" className="form-control" id="vmodel" name="model" value={this.state.model} onChange={this.onChange} />
          </div>
          
          
          <div className="mb-3">
            <label htmlFor="vtype" className="form-label"> Type:</label>
            <input type="text" className="form-control" id="vtype"  name="type" value={this.state.type} onChange={this.onChange}/>
          </div>

          
          <div className="mb-3">
            <label htmlFor="vname" className="form-label">Name:</label>
            <input type="text" className="form-control" id="vname" name="name" value={this.state.name} onChange={this.onChange}/>
          </div>
          
          <button type="submit" className="btn btn-primary"> Add Vehicle </button>
        </form>
      </div>
    );
  }
}

export default addVehicle;
