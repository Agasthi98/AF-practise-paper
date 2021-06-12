import React, { Component } from 'react'
import axios from 'axios'




class CalTrip extends Component {

      constructor(props) {
            super(props)
            this.state = {
                  vehicleTypeId: '',
                  categoryTypeId: '',
                  duration: '',
                  vehicle: [],
                  catagory: [],
                  totPrice: '00'
            }
            this.onSubmit = this.onSubmit.bind(this)
            this.onChange = this.onChange.bind(this)

            axios.get('http://localhost:5500/api/vehicle/getVehicles')
                  .then(response => {
                        this.setState({ vehicle: response.data })
                  })
                  .catch(error => {
                        alert(error.message)
                  })
            axios.get('http://localhost:5500/api/category/')
                  .then(response => {
                        this.setState({ catagory: response.data })
                  })
                  .catch(error => {
                        alert(error.message)
                  })

      }

      onChange(e) {
            this.setState({ [e.target.name]: e.target.value })
      }

      handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
      }

      onSubmit(e) {
            e.preventDefault();
            let numbers = {
                  vehicleTypeId: this.state.vehicleTypeId,
                  categoryTypeId: this.state.categoryTypeId,
                  duration: this.state.duration,
            }

            axios.post('http://localhost:5500/api/category/getvalue', numbers)
                  .then(response => {
                        this.setState({ totPrice: response.data.price })
                  })
                  .catch(error => {
                        alert(error.message)
                  })
      }


      render() {
            return (
                  <div>
                        <div className="container mt-2">
                              <form className="form-inline" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                          <div className="row mt-2">
                                                <div className="col-2">
                                                      <label for="inputState">Category</label>
                                                </div>
                                                <div className="col-6">
                                                      <select
                                                            id="inputState"
                                                            className="form-control"
                                                            name="categoryTypeId"
                                                            value={this.state.selectValue}
                                                            onChange={this.handleChange}
                                                      >
                                                            <option selected>Choose</option>
                                                            {this.state.catagory && this.state.catagory.map((category) => (
                                                                  <option value={category._id} name="categoryTypeId">{category.type}</option>
                                                            ))}
                                                      </select>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="form-group">
                                          <div className="row mt-2">
                                                <div className="col-2">
                                                      <label for="inputState">Vehical</label>
                                                </div>
                                                <div className="col-6">
                                                      <select
                                                            id="inputState"
                                                            className="form-control"
                                                            name="vehicleTypeId"
                                                            value={this.state.selectValue}
                                                            onChange={this.handleChange}
                                                      >
                                                            <option selected>Choose</option>
                                                            {this.state.vehicle.map((vehical) => (
                                                                  <option value={vehical._id} name="vehicleTypeId">{vehical.name}</option>
                                                            ))}
                                                      </select>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="form-group">
                                          <div className="row mt-2">
                                                <div className="col-2">
                                                      <label for="inputState">Duration</label>
                                                </div>
                                                <div className="col-6">
                                                      <input
                                                            type="number"
                                                            className="form-control"
                                                            name="duration"
                                                            id="duration"
                                                            value={this.state.duration}
                                                            onChange={this.onChange} />
                                                </div>
                                          </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2">Calculate</button>
                              </form>
                        </div>

                        <div className="m-5">
                              <h1>Total Price :  ${this.state.totPrice}.00</h1>
                        </div>

                  </div>
            )
      }
}

export default CalTrip

