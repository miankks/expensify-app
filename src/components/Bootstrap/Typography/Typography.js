import React, { Component } from 'react'
import BootstrapHeader from '../BootstrapHeader'

export default class TypoGraphy extends Component {
    render() {
        return (
            <div>
          <div className="container">
            <BootstrapHeader />
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <h3>Heading Three</h3>
            <h4>Heading Four</h4>
            <h5 className="h1">Heading Five</h5>
            <h6>Heading Six</h6>
        
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>
        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore repellendus veniam consequatur vero numquam
              voluptatem quam ab expedita eum, ipsam? Necessitatibus dicta quaerat, vitae dolorum, dolor autem reiciendis sapiente.</p>
        
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore repellendus veniam consequatur vero numquam
              voluptatem quam ab expedita eum, ipsam? Necessitatibus dicta quaerat, vitae dolorum, dolor autem reiciendis sapiente.</p>
        
            <p className="text-monospace">My monospace paragraph</p>
        
            <p className="font-weight-bold">Bold Text</p>
            <p  className="font-weight-normal">Normal Text</p>
            <p className="font-italic">Italic Text</p>
        
            <p className="text-lowercase">MAKE LOWERCASE</p>
            <p  className="text-uppercase">make uppercase</p>
            <p  className="text-capitalize">make capitalized</p>
            
            <h4>Blockquote</h4>
            <blockquote className="blockquote">
              <p>This is a blockquote</p>
            </blockquote>
        
            <h4>Blockquote text right</h4>
            <blockquote className="blockquote text-right">
              <p>This is a blockquote aligned right</p>
            </blockquote>

            <h4>Blockquote with footer</h4>
            <blockquote className="blockquote text-right">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer  className="blockquote-footer">Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>

            <h4>Text truncate</h4>
            <div className="text-truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat nobis sunt qui consequatur architecto veritatis,
              iure odit, debitis pariatur perspiciatis? Asperiores facere veniam, totam ullam dignissimos voluptate atque! Eos, animi
              quos. Sint magni nulla provident et consequatur officia tempora!
            </div>
        
            <h4>List unstyled</h4>
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          
            <h4>List Inline</h4>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Lorem ipsum </li>
              <li className="list-inline-item">Lorem ipsum </li>
            </ul>
          </div>
          <div style={{marginTop: "500px"}}></div>
            </div>
        )
    }
}
