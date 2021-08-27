import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BootstrapHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basicTypography: '2.2 Basic Typography',
      textAlignment: '2.3 Text Alignment & Display',
      floatsPosition: '2.4 Floats & Position',
      colorsBG: '2.5: Colors & Background',
      spacing: '2.6 Spacing',
      sizing: '2.7 Sizing',
      breakpoints: '2.8 Breakpoints'
    };
  }
    render() {
        return (
            <div>
              <header>
              <h1 class="display-3 text-center my-4">Text Alignment & Display</h1>
              <div class="container">
                <div class="row">
                  <div class="col-md-3">
                    <div class="dropdown">
                      <button class="btn btn-primary btn-block dropdown-toggle" type="button" data-toggle="dropdown">
                        2: Utilities
                      </button>
                      <div class="dropdown-menu">
                        <Link className="dropdown-item" to='/typography'> 2.2 Basic Typography</Link>
                        <Link className="dropdown-item" to='/textalignmndisplay'> 2.3 Text Alignment & Display</Link>
                        <Link className="dropdown-item" to='/floatfixedposition'> 2.4 Floats & Position</Link>
                        <Link className="dropdown-item" to='/colorbackground'> 2.5: Colors & Background</Link>
                        <Link className="dropdown-item" to='/marginpadding'> 2.6 Spacing</Link>
                        <Link className="dropdown-item" to='/sizingborders'> 2.7 Sizing</Link>
                        <Link className="dropdown-item" to='/typography'> 2.8 Breakpoints</Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown">
                      <button class="btn btn-success btn-block dropdown-toggle" type="button" data-toggle="dropdown">
                        3: CSS Components
                      </button>
                      <div class="dropdown-menu">
                        <Link className="dropdown-item" to="/buttons">3.2 Buttons</Link>
                        <a class="dropdown-item" href="3_3_navbar.html">3.3 Navbar</a>
                        <a class="dropdown-item" href="3_4_list_groups_badges.html">3.4 List Groups & Badges</a>
                        <a class="dropdown-item" href="3_5_forms.html">3.5 Forms</a>
                        <a class="dropdown-item" href="3_6_input_groups.html">3.6 Input Groups</a>
                        <a class="dropdown-item" href="3_7_alerts_progress.html">3.7 Alerts & Progress</a>
                        <a class="dropdown-item" href="3_8_tables_pagination.html">3.8 Tables & Pagination</a>
                        <a class="dropdown-item" href="3_9_cards.html">3.9 Cards</a>
                        <a class="dropdown-item" href="3_10_media_object.html">3.10 Media Objects</a>
                        <a class="dropdown-item" href="3_11_jumbotron.html">3.11 Jumbotron</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown">
                      <button class="btn btn-warning btn-block dropdown-toggle" type="button" data-toggle="dropdown">
                        4: Grid & Flexbox
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="4_2_grid_system.html">4.2 Grid System</a>
                        <a class="dropdown-item" href="4_3_grid_alignment.html">4.3 Grid Alignment</a>
                        <a class="dropdown-item" href="4_4_flexbox.html">4.4 Flexbox</a>
                        <a class="dropdown-item" href="4_5_auto_margins_wrapping_order.html">4.5 Auto Margins & Wrap</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown">
                      <button class="btn btn-danger btn-block dropdown-toggle" type="button" data-toggle="dropdown">
                        5: JavaScript Widgets
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="5_2_carousel.html">5.2 Carousel</a>
                        <a class="dropdown-item" href="5_3_collapse.html">5.3 Collapse</a>
                        <a class="dropdown-item" href="5_4_tooltips.html">5.4 Tooltips</a>
                        <a class="dropdown-item" href="5_5_popovers.html">5.5 Popovers</a>
                        <a class="dropdown-item" href="5_6_modals.html">5.6 Modals</a>
                        <a class="dropdown-item" href="5_7_scrollspy.html">5.7 ScrollSpy</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </header>
          </div>
        )
    }
}
