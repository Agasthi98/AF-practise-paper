import React, { Component }  from 'react'
import axios from 'axios'


class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5500/api/category/')
        .then(response => {
            console.log(response.data)
            this.setState({ category: response.data })
        })
    }

    navigateVehiclePage(e, categoryId){
        window.location = `/${categoryId}`
    }

    render() {
        return (
            <div className="container">
                <h1>Categories</h1>
                {this.state.category.length > 0 && this.state.category.map((item, index) => (
                      <div key={index} className="card mb-3">
                          <div className="p-3" onClick={e => this.navigateVehiclePage(e, item._id)}>
                          <h5>Type:{item.type}</h5>
                          <h5>Amount:{item.amount}</h5>
                          </div>
                      </div>
                  ))  
                }
            </div>
        )
    }
}


export default Category