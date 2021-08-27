import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class ListGroups extends Component {
    render() {
        return (
            <div>
                <BootstrapHeader />   
                <div class="container">
                <h5>LIST GROUP</h5>
                <ul className="list-group mb-5">
                    <li className="list-group-item">My List Item One</li>
                    <li className="list-group-item">My List Item Two</li>
                    <li className="list-group-item">My List Item Three</li>
                    <li className="list-group-item">My List Item Four</li>
                    <li className="list-group-item">My List Item Five</li>
                </ul>

                <h5>LIST GROUP WITH LINKS</h5>
                <ul className="list-group mb-5">
                    <a className="list-group-item" href="#">My List Item One</a>
                    <a className="list-group-item" href="#">My List Item Two</a>
                    <a className="list-group-item active" href="#">My List Item Three</a>
                    <a className="list-group-item" href="#">My List Item Four</a>
                    <a className="list-group-item" href="#">My List Item Five</a>
                </ul>


                <h5>CONTEXTUAL CLASSES</h5>
                <ul className="list-group mb-5">
                    <li className="list-group-item">Regular List Item</li>
                    <li className="list-group-item list-group-item-primary">Primary List Item</li>
                    <li className="list-group-item list-group-item-secondary">Secondary List Item</li>
                    <li className="list-group-item list-group-item-success">Success List Item</li>
                    <li className="list-group-item list-group-item-info">Info List Item</li>
                    <li className="list-group-item list-group-item-warning">Warning List Item</li>
                    <li className="list-group-item list-group-item-danger">Danger List Item</li>
                    <li className="list-group-item list-group-item-light">Light List Item</li>
                    <li className="list-group-item list-group-item-dark">Dark List Item</li>
                </ul>

                <h5>FLUSH LIST GROUP</h5>
                <ul className="list-group list-group-flush mb-5">
                    <li className="list-group-item">My List Item One</li>
                    <li className="list-group-item">My List Item Two</li>
                    <li className="list-group-item active">My List Item Three</li>
                    <li className="list-group-item">My List Item Four</li>
                    <li className="list-group-item">My List Item Five</li>
                </ul>


                <h5>BADGE</h5>
                <ul className="list-group mb-5">
                    <li className="list-group-item">My List Item One</li>
                    <li className="list-group-item  d-flex justify-content-between align-items-center">My List Item Two
                        <span className="badge badge-primary">30</span>
                    </li>
                    <li className="list-group-item">My List Item Three</li>
                    <li className="list-group-item">My List Item Four</li>
                    <li className="list-group-item">My List Item Five</li>
                </ul>

                <h5>BREADCRUMB</h5>
                <p>Used for inner pages and want to show a map of links</p>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Home</li>
                </ol>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Users</li>
                </ol>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Users</a>
                    </li>
                    <li className="breadcrumb-item active">Brad</li>
                </ol>

            </div>
            <div style={{marginTop:"500px"}}></div>
            </div>
        )
    }
}
