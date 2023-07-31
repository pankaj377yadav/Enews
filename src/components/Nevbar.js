import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class nevbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
              <b>
                SkillNews
              </b>
              
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    General
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                  ><b>
                    Business
                    </b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/entertaiment"
                  >
                    <b>
                    Entertaiment
                    </b>
                   
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/health"
                  ><b>
                    Health

                  </b>
                    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  ><b>
                    Science


                  </b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                  ><b>
                    Sports

                  </b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/technologe"
                  ><b>
                    Technology

                  </b>
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  <b>
                  Search

                  </b>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
