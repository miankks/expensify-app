import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class TextAlignmntDisplay extends Component {
    render() {
        return (
              <div>
                   <BootstrapHeader />
                <div class="container">
                <h5>JUSTIFY</h5>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae asperiores dolorem accusamus dolor eligendi, unde adipisci
                  a odio, quas aperiam tempora earum delectus magnam quia veritatis in! Natus quibusdam dolores architecto magni rem!
                  Error repellat esse dolorem dolore neque odit rem non accusamus eligendi ab nesciunt dicta voluptatibus velit, vel
                  obcaecati quisquam optio reiciendis soluta tempora, voluptatum sapiente eos? Explicabo provident sit commodi blanditiis
                  assumenda dolor ex aliquid aut beatae porro necessitatibus eos, neque distinctio non amet nemo et! Ipsum, dolorum quis
                  at perferendis corporis iure aliquid illo, deserunt impedit, quod nam! Molestias atque voluptatem numquam veritatis
                  ex mollitia eveniet.</p>
            
                <br />
                <br />
            
                <h5>ALIGNMENT</h5>
                <p className="text-left">Text aligned left</p>
                <p className="text-center">Text aligned center</p>
                <p className="text-right">Text aligned right</p>
            
                <h5>RESPONSIVE ALIGN</h5>
                <p className="text-sm-right">Right aligned on small or larger</p>
                <p className="text-md-right">Right aligned on medium or larger</p>
                <p className="text-lg-right">Right aligned on large or larger</p>
                <p className="text-xl-right">Right aligned on xl or larger</p>
            
                <p className="text-sm-left">Left aligned text on small or larger</p>
                <p className="text-md-left">Left aligned text on medium or larger</p>
                <p className="text-lg-left">Left aligned text on large or wider</p>
                <p className="text-xl-left">Left aligned text on extra large or wider</p>
            
                <p className="text-sm-center">Center aligned text on small or larger</p>
                <p className="text-md-center">Center aligned text on medium or larger</p>
                <p className="text-lg-center">Center aligned text on large or wider</p>
                <p className="text-xl-center">Center aligned text on extra large or wider</p>
            
                <br />
                <br />
            
                <h5>VERTICAL ALIGNMENT</h5>
                <span className="align-baseline">baseline</span>
                <span className="align-top">top</span>
                <span className="align-bottom">bottom</span>
                <span className="align-middle">middle</span>
                <span className="align-text-top">text-top</span>
                <span className="align-text-bottom">text-bottom</span>
            
                <br />
                <br />
            
                <h5>TURN BLOCK TO INLINE</h5>
                <h1 className="d-inline bg-success">Hello </h1>
                <h1 className="d-inline bg-success">Goodbye</h1>
            
                <br />
                <br />
            
                <h5>TURN INLINE TO BLOCK</h5>
                <span className="d-block bg-primary">Block</span>
            
                <br />
                <br />
            
                <h5>Inline Block</h5>
                <div className="d-inline-block bg-warning">
                  <h3>Hello</h3>
                  This is inline
                </div>
                <div className="d-inline-block bg-warning">
                  <h3>Hello</h3>
                  This is inline
                </div>
                </div>
                <div style={{marginTop: "500px"}}></div>
              </div>
        )
    }
}

