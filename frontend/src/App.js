import React from 'react'
import Navbar from './component/navbar/navbar';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import addVehicle from './component/addVehicle/addVehicle';
import Vehicle from './component/vehicles/vehicles';
import CalTrip from './component/calTrip/calTrip'
import createCategory from './component/createCategory/createCategory'
import Category from './component/category/category'


const App = () => {
    return (
            <div>
                <Router>
                <Navbar />
                        <section>
                                <Switch>
                                <Route path="/add-vehicle" component={addVehicle}/>
                                <Route path="/createCategory" component={createCategory}/>
                                <Route path="/tripFee" component={CalTrip}/>
                                <Route path="/:id" component={Vehicle} />
                                <Route path="/" component={Category} exact/>     
                                </Switch>
                        </section>
                </Router>
            </div> 
    )
  }
  
  export default App;