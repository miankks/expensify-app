import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <BootstrapHeader />
                <div className="container">

                <h5>BUTTONS</h5>
                <button className="btn btn-primary" type="button">Primary</button>
                <button className="btn btn-secondary" type="button">Secondary</button>
                <button className="btn btn-success" type="button">Success</button>
                <button  className="btn btn-info"type="button">Info</button>
                <button className="btn btn-warning" type="button">Warning</button>
                <button className="btn btn-danger" type="button">Danger</button>
                <button className="btn btn-light" type="button">Light</button>
                <button className="btn btn-dark" type="button">Dark</button>
                <button className="btn btn-link" type="button">Link</button>

                <br />
                <br />

                <h5>BUTTON TAGS/TYPES</h5>
                <a className="btn btn-primary" href="#" role="button">Link</a>
                <button className="btn btn-success" type="submit">Button</button>
                <input className="btn btn-light" type="button" value="Input" />
                <input className="btn btn-warning" type="submit" value="Submit" />
                <input className="btn btn-info" type="reset" value="Reset" />

                <br />
                <br />

                <h5>OUTLINE BUTTONS</h5>
                <button className="btn btn-outline-primary" type="button">Primary Outline</button>
                <button className="btn btn-outline-secondary" type="button">Secondary Outline</button>
                <button className="btn btn-outline-success" type="button">Success Outline</button>
                <button className="btn btn-outline-info" type="button">Info Outline</button>
                <button className="btn btn-outline-warning" type="button">Warning Outline</button>
                <button className="btn btn-outline-danger" type="button">Danger Outline</button>
                <button className="btn btn-outline-light" type="button">Light Outline</button>
                <button className="btn btn-outline-dark" type="button">Dark Outline</button>

                <br />
                <br />

                <h5>BUTTON SIZES</h5>
                <button className="btn btn-primary btn-lg" type="button">
                    <i class="fas fa-user"></i> Large button</button>
                <button className="btn btn-secondary btn-sm" type="button">Small button</button>

                <br />
                <br />
                <button className="btn btn-dark btn-block" type="button">Block level button</button>

                <br />
                <br />

                <h5>STATES</h5>
                <button className="btn btn-primary" type="button">Regular Button</button>
                <button className="btn btn-primary active" type="button">Active Button</button>
                <button className="btn btn-primary disabled" type="button">Disabled Button</button>

                <button className="btn btn-primary" type="button" data-toggle="button">
                    Toggle State
                </button>

                <br />
                <br />

                <h5>BUTTON GROUPS</h5>
                <div className="btn-group">
                    <button className="btn btn-primary" type="button">Left</button>
                    <button className="btn btn-secondary" type="button">Middle</button>
                    <button className="btn btn-primary" type="button">Right</button>
                </div>

                <br />
                <br />

                <h5>BUTTON TOOLBAR</h5>
                <div className="btn-toolbar">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" type="button">1</button>
                        <button className="btn btn-primary" type="button">2</button>
                        <button className="btn btn-primary" type="button">3</button>
                        <button className="btn btn-primary" type="button">4</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" type="button">5</button>
                        <button className="btn btn-primary" type="button">6</button>
                        <button className="btn btn-primary" type="button">7</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" type="button">8</button>
                    </div>
                </div>

                <br />
                <br />

                <h5>VERTICAL GROUP</h5>
                <div className="btn-group-vertical">
                    <button className="btn btn-primary" type="button">Top</button>
                    <button className="btn btn-primary" type="button">Middle</button>
                    <button className="btn btn-primary" type="button">Bottom</button>
                </div>

                <br />
                <br />

                <h5>BUTTON DROPDOWNS</h5>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                        My Dropdown
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link One</a>
                        <a className="dropdown-item" href="#">Link Two</a>
                        <a className="dropdown-item" href="#">Link Three</a>
                    </div>
                </div>

                <br />
                <br />

                <h5>SPLIT DROPDOWNS</h5>
                <div className="btn-group">
                    <button className="btn btn-primary" type="button">My Button</button>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                        <span>Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link One</a>
                        <a className="dropdown-item" href="#">Link Two</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Link Three</a>
                    </div>
                </div>

            </div>
            <div style={{marginTop:"500px"}}></div>
            </div>
        )
    }
}
