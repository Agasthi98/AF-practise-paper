import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              AF Practise Frontend
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Vehicles
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Categories
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/add-vehicle">
                    Add Vehicles
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/createCategory">
                   Add Categories
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/tripFee">
                   Trip fee
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar