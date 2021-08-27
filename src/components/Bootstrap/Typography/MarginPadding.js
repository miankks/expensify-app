import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class MarginPadding extends Component {
    render() {
        return (
            <div>
                <BootstrapHeader />
                <div class="container">
                <h5>MB MARGIN BOTTOM</h5>
                <h1 class="mb-0 bg-success">Margin Bottom 0</h1>
                <h1 class="mb-1 bg-success">Margin Bottom 1</h1>
                <h1 class="mb-2 bg-success">Margin Bottom 2</h1>
                <h1 class="mb-3 bg-success">Margin Bottom 3</h1>
                <h1 class="mb-4 bg-success">Margin Bottom 4</h1>
                <h1 class="mb-5 bg-success">Margin Bottom 5</h1>

                <br />
                <br />

                <h5>MT MARGIN TOP</h5>
                <h1 class="mt-0 bg-success">Margin Top 0</h1>
                <h1 class="mt-1 bg-success">Margin Top 1</h1>
                <h1 class="mt-2 bg-success">Margin Top 2</h1>
                <h1 class="mt-3 bg-success">Margin Top 3</h1>
                <h1 class="mt-4 bg-success">Margin Top 4</h1>
                <h1 class="mt-5 bg-success">Margin Top 5</h1>

                <br />
                <br />

                <h5>ML & MR</h5>
                <p>
                    <span class="mr-5 bg-success">Margin Right 5</span> dolor sit amet,
                    <span class="ml-3 bg-success">Margin Left 3 </span> elit. Voluptatum, optio.</p>

                <br />
                <br />

                <h5>MX MARGIN LEFT RIGHT</h5>
                <p>Lorem ipsum
                    <span class="mx-5 bg-success">Margin Left & Right 5</span>, consectetur elit. Voluptatum, optio.</p>

                <br />
                <br />

                <h5>MY  MARGIN TOP BOTTOM</h5>
                <p>Lorem ipsum dolor sit amet, consectetur elit. Voluptatum, optio.</p>
                <p class="my-5 bg-success">Margin Top & Bottom 5</p>
                <p>Lorem ipsum dolor sit amet, consectetur elit. Voluptatum, optio.</p>

                <br />
                <br />

                <h5>BLANK - ALL SIDES</h5>
                <p>Lorem ipsum dolor sit amet, consectetur elit. Voluptatum, optio.</p>
                <p class="m-5 bg-success">Margin All Sides 5</p>
                <p>Lorem ipsum dolor sit amet, consectetur elit. Voluptatum, optio.</p>

                <br />
                <br />

                <h5>PB PADDING BOTTOM</h5>
                <h1 class="pb-0 bg-warning">Padding Bottom 0</h1>
                <h1 class="pb-1 bg-warning">Padding Bottom 1</h1>
                <h1 class="pb-2 bg-warning">Padding Bottom 2</h1>
                <h1 class="pb-3 bg-warning">Padding Bottom 3</h1>
                <h1 class="pb-4 bg-warning">Padding Bottom 4</h1>
                <h1 class="pb-5 bg-warning">Padding Bottom 5</h1>

                <br />
                <br />

                <h5>PT PADDING TOP</h5>
                <h1 class="pt-0 bg-warning">Padding Top 0</h1>
                <h1 class="pt-1 bg-warning">Padding Top 1</h1>
                <h1 class="pt-2 bg-warning">Padding Top 2</h1>
                <h1 class="pt-3 bg-warning">Padding Top 3</h1>
                <h1 class="pt-4 bg-warning">Padding Top 4</h1>
                <h1 class="pt-5 bg-warning">Padding Top 5</h1>

                <br />
                <br />

                <h5>PL & PR</h5>
                <p>
                    <span class="pl-5 bg-warning">Padding Right 5</span> dolor sit amet,
                    <span class="pr-3 bg-warning">Padding Left 3 </span> elit. Voluptatum, optio.</p>

                <br />
                <br />

                <h5>PX PADDING LEFT RIGHT</h5>
                <p>Lorem ipsum
                    <span class="px-5 bg-warning">Padding Left & Right 5</span>, consectetur elit. Voluptatum, optio.</p>

                <br />
                <br />

                <h5>PY  PADDING TOP BOTTOM</h5>
                <p class="py-5 bg-warning">Padding Top & Bottom 5</p>

                <br />
                <br />

                <h5>ALL SIDES</h5>
                <p class="p-5 bg-warning">Padding All Sides 5</p>

                <h5>HORIZONTAL CENTERING</h5>
                <div class="mx-auto bg-info" style={{width: "200px"}}>
                    Horizontal Centering
                </div>

            </div>
            <div style={{marginTop:"500px"}}></div>
            </div>
        )
    }
}
