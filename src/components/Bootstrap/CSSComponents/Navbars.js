import React, { Component, Fragment } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class Navbars extends Component {
    render() {
        return (
            <Fragment>
                <BootstrapHeader />
                <div style={{marginTop:"50px"}}></div>
                <h5>SIMPLE NAVBAR</h5>
                <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <h5>NAVBAR WITH RESPONSIVE TOGGLE</h5>
                <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <h5>NAVBAR WITH FORM</h5>
                <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavForm">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavForm">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                            <form className="form-inline ml-auto">
                                <input type="text" className="form-control mr-2" placeholder="Search" />
                                <button className="btn btn-outline-success">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <h5>NAVBAR WITH DROPDOWN</h5>
                <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Dropdown</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Link 1</a>
                                    <a href="#" className="dropdown-item">Link 2</a>
                                    <a href="#" className="dropdown-item">Link 3</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h5>COLORS</h5>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-5">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-5">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br />
                <br />
                <h5>FIXED TOP</h5>
                <nav className="navbar fixed-top navbar-dark bg-dark mb-5">
                    <a className="navbar-brand" href="#">Navbar Fix Top</a>
                </nav>

                <h5>FIXED BOTTOM</h5>
                <nav className="navbar fixed-bottom navbar-dark bg-dark mb-5">
                    <a className="navbar-brand" href="#">Navbar Fix Bottom</a>
                </nav>

                <h5>Sticky TOP</h5>
                <nav className="navbar sticky-top navbar-dark bg-dark mb-5">
                    <a className="navbar-brand" href="#">Navbar Sticky Top</a>
                </nav>
                <br />
                <br />
                <div className="container">

                    <h5>NAVS</h5>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 4</a>
                        </li>
                    </ul>

                    <h5>HORIZONTAL ALIGN</h5>
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 4</a>
                        </li>
                    </ul>

                    <h5>RIGHT ALIGN</h5>
                    <ul className="nav nav-pills justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 4</a>
                        </li>
                    </ul>
                    <br />
                    <br />

                    <h5>VERTICAL</h5>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 4</a>
                        </li>
                    </ul>
                    <br />
                    <br />

                    <h5>FILL & JUSTIFY</h5>
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 4</a>
                        </li>
                    </ul>
                    <br />
                    <br />
                    <h5>WITH DROPDOWNS</h5>
                </div>
                <div style={{marginTop:"500px"}}></div>
            </Fragment>
        )
    }
}
