import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class Forms extends Component {
    render() {
        return (
            <div>
                <BootstrapHeader />
                <div class="container">
                <h5>FORM</h5>
                <form>
                    <h5>TEXT FIELD GROUPS</h5>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input className="form-control" type="text" id="name" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input className="form-control form-control-lg" type="email" id="email" placeholder="Enter email" />
                        <small className="form-text text-muted">Your email will not ever be shared.</small>
                    </div>
                    <div className="form-group">
                        <label for="company">Company</label>
                        <input className="form-control form-control-sm" type="text" id="company" placeholder="Enter company name" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="password" placeholder="Password" readOnly/>
                        <small className="form-text text-muted">Readonly</small>
                    </div>

                    <h5>SELECT</h5>
                    <div className="form-group">
                        <label for="gender">Gender</label>
                        <select className="form-control" id="gender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <h5>TEXTAREA</h5>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>

                    <h5>FILE INPUT</h5>
                    <div className="form-group">
                        <label for="file">File input</label>
                        <input type="file" id="file" className="form-control-file"/>
                        <small id="fileHelp" className="form-text text-muted">Max 3mb size</small>
                    </div>

                    <h5>CUSTOM FILE INPUT</h5>
                    <div className="custom-file">
                        <input type="file" id="myfile"  className="custom-file-input"/>
                        <label for="myfile" className="custom-file-label">Choose file</label>
                    </div>
                    <br />
                    <br />

                    <h5>RANGE</h5>
                    <div className="form-group">
                        <label for="membership">Membership Level</label>
                        <input className="custom-range" min="1" max="5" step="1" value="1" type="range" />
                    </div>

                    <br />

                    <button className="btn btn-primary btn-block" type="submit">Submit</button>
                </form>

                <br />
                <br />

                <h5>INLINE FORM</h5>
                <form className="form-inline">
                    <input className="form-control mr-2" type="text" id="username" placeholder="Enter username" />
                    <input className="form-control mr-2" type="text" id="password" placeholder="Password" />
                    <div className="form-check">
                        <label className="form-check-label mr-2">
                            <input className="form-check-input" type="checkbox" /> Remember me
                        </label>
                    </div>

                    <button className="btn btn-light" type="submit">Submit</button>
                </form>

                <br />
                <br />

                <h5>FORM ROW</h5>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input className="form-control" type="text" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input className="form-control" type="text" placeholder="Last name" />
                        </div>
                    </div>
                </form>

                <br />
                <br />

                <h5>VALIDATION</h5>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input className="form-control is-valid" type="text" id="username" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input className="form-control is-invalid" type="text" id="password" />
                    <div className="invalid-feedback">
                        Password not strong enough
                    </div>
                </div>
                <div className="form-group">
                    <label for="password2">Confirm Password</label>
                    <input className="form-control is-invalid" type="text" id="password2" />
                    <div className="invalid-feedback">
                        Password does not match
                    </div>
                </div>

            </div>
            <div style={{marginTop:"500px"}}></div>
            </div>
        )
    }
}
