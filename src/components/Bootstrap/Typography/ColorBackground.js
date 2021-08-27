import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class ColorBackground extends Component {
    render() {
        return (
            <div>
                <BootstrapHeader />
                <div className="container">
                    <h5>TEXT COLORS</h5>
                    <p className="text-primary">Text Primary Color</p>
                    <p className="text-secondary">Text Secondary Color</p>
                    <p className="text-success">Text Success Color</p>
                    <p className="text-info">Text Info Color</p>
                    <p className="text-warning">Text Warning Color</p>
                    <p className="text-danger">Text Danger Color</p>
                    <p  className="text-light">Text Light Color</p>
                    <p className="text-dark">Text Dark Color</p>
                    <p className="text-white">Text White Color</p>
                    <p className="text-muted">Text Muted</p>
                    <p className="text-black-50">Text Black 50</p>
                    <p className="text-white-50">Text White 50</p>

                    <br />
                    <br />

                    <h5>LINK COLORS</h5>
                    <p>
                        <a href="#" className="text-primary">Primary link</a>
                    </p>
                    <p>
                        <a href="#" className="text-secondary">Secondary link</a>
                    </p>
                    <p>
                        <a href="#" className="text-success">Success link</a>
                    </p>
                    <p>
                        <a href="#" className="text-info">Info link</a>
                    </p>
                    <p>
                        <a href="#" className="text-warning">Warning link</a>
                    </p>
                    <p>
                        <a href="#" className="text-danger">Danger link</a>
                    </p>
                    <p>
                        <a href="#" className="text-light">Light link</a>
                    </p>
                    <p>
                        <a href="#" className="text-dark">Dark link</a>
                    </p>
                    <p>
                        <a href="#" className="text-muted">Muted link</a>
                    </p>
                    <p>
                        <a href="#" className="text-white">White link</a>
                    </p>

                    <br />
                    <br />

                    <h5>BACKGROUND COLORS</h5>
                    <div className="bg-primary text-white">Background Primary Color</div>
                    <div className="bg-secondary">Background Secondary Color</div>
                    <div className="bg-success text-white">Background Success Color</div>
                    <div className="bg-info text-white">Background Info Color</div>
                    <div className="bg-warning text-white">Background Warning Color</div>
                    <div className="bg-danger text-white">Background Danger Color</div>
                    <div className="bg-light">Background Light Color</div>
                    <div className="bg-dark text-white">Background Dark Color</div>
                    <div className="bg-white">Background White Color</div>
                    <div  className="bg-transparent">Background Transparent</div>

                    <h5>INVISIBLE</h5>
                    <p className="invisible">Hello</p>

                </div>
                <div style={{marginTop:"500px"}}></div>
            </div>
        )
    }
}
