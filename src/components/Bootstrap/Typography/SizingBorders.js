import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader';

export default class SizingBorders extends Component {
    render() {
        return (
            <div>
                <BootstrapHeader />
                <div class="container">
                <h5>WIDTH CLASSES</h5>
                <div class="bg-success p-3 w-25">Width 25%</div>
                <div class="bg-success p-3 w-50">Width 50%</div>
                <div class="bg-success p-3 w-75">Width 75%</div>
                <div class="bg-success p-3 w-100">Width 100%</div>
                <div class="bg-success p-3 w-auto">Width Auto</div>

                <br />
                <br />

                <h5>HEIGHT CLASSES</h5>
                <div style={{height: "300px", border: "1px solid #333" }}>
                    <div class="bg-primary d-inline-block h-25">Height 25%</div>
                    <div class="bg-primary d-inline-block h-50">Height 50%</div>
                    <div class="bg-primary d-inline-block h-75">Height 75%</div>
                    <div class="bg-primary d-inline-block h-100">Height 100%</div>
                    <div class="bg-primary d-inline-block h-auto">Height Auto</div>
                </div>

                <br />
                <br />

                <h5>BORDERS</h5>
                <div class="p-3 mb-2 bg-light border">Regular</div>
                <div class="p-3 mb-2 bg-light border-top">Border Top</div>
                <div class="p-3 mb-2 bg-light border-bottom">Border Bottom</div>
                <div class="p-3 mb-2 bg-light border-right">Border Right</div>
                <div class="p-3 mb-2 bg-light border-left">Border Left</div>

                <br />
                <br />

                <h5>BORDER COLORS</h5>
                <div class="p-3 mb-2 bg-light border border-primary">Primary</div>
                <div class="p-3 mb-2 bg-light border border-secondary">Secondary</div>
                <div class="p-3 mb-2 bg-light border border-success">Success</div>
                <div class="p-3 mb-2 bg-light border border-info">Info</div>
                <div class="p-3 mb-2 bg-light border border-warning">Warning</div>
                <div class="p-3 mb-2 bg-light border border-danger">Danger</div>
                <div class="p-3 mb-2 bg-light border border-light">Light</div>
                <div class="p-3 mb-2 bg-light border border-dark">Dark</div>
                <div class="p-3 mb-2 bg-light border border-white">White</div>

                <br />
                <br />

                <h5>BORDER RADIUS</h5>
                <div class="p-3 mb-2 bg-light border rounded">Rounded</div>
                <div class="p-3 mb-2 bg-light border rounded-top">Rounded Top</div>
                <div class="p-3 mb-2 bg-light border rounded-bottom">Rounded Bottom</div>
                <div class="p-3 mb-2 bg-light border rounded-right">Rounded Right</div>
                <div class="p-3 mb-2 bg-light border rounded-left">Rounded Left</div>
                <div class="p-3 mb-2 bg-light w-25 border rounded-circle">Rounded Circle</div>
                <div class="p-3 mb-2 bg-light border rounded-0">Dark</div>

            </div>
            <div style={{marginTop:"500px"}}></div>
            </div>
        )
    }
}
