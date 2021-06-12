import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";



const initialState = {
  type: "",
  amount: "",
  vehicle: [],
  options: [],
  selectedVehicles: []
};

class createCategory extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onVehicleSelect = this.onVehicleSelect.bind(this)
    this.state = initialState;
  }

  componentDidMount(){
        axios.get('http://localhost:5500/api/vehicle/getvehicles')
        .then(response => {
          this.setState ({ vehicle: response.data }, () => {
            let data = []
            this.state.vehicle.map((item, index) => {
              let vehicle = {
                value: item._id,
                label: item.name
              }
              data.push(vehicle)
            });
            this.setState({ options: data })
          })
        })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onVehicleSelect(e) {
    this.setState({ selectedVehicles: e ? e.map(item => item.value ) : [] })
  }

  onSubmit(e) {
    e.preventDefault();
    let category = {
      type: this.state.type,
      amount: this.state.amount,
      type: this.state.type,
    };
    console.log("DATA SENT", category);
    axios
      .post('http://localhost:5500/api/category/create', category)
      .then((response) => {
        alert("category created");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Create Category</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="ctype" className="form-label">
              Type:
            </label>
            <input
              type="text"
              className="form-control"
              id="ctype"
              name="type"
              aria-describedby="emailHelp"
              value={this.state.type}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount:
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>

          <Select
            options={this.state.options}
            onChange={this.onVehicleSelect}
            className="basic-multi-select"
            isMulti
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default createCategory;
