import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BootstrapHeader extends Component {
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
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dropdown">
                    <button class="btn btn-success btn-block dropdown-toggle" type="button" data-toggle="dropdown">
                      3: CSS Components
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="3_2_buttons.html">3.2 Buttons</a>
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

// <a class="dropdown-item" href="2_2_basic_typography.html">2.2 Basic Typography</a>
 // <a class="dropdown-item" href="2_3_text_alignment_display.html">2.3 Text Alignment & Display</a>
                      // <a class="dropdown-item" href="2_4_floats_position.html">2.4 Floats & Position</a>
                      // <a class="dropdown-item" href="2_5_colors_background.html">2.5: Colors & Background</a>
                      // <a class="dropdown-item" href="2_6_spacing.html">2.6 Spacing</a>
                      // <a class="dropdown-item" href="2_7_sizing.html">2.7 Sizing</a>
                      // <a class="dropdown-item" href="2_8_breakpoints.html">2.8 Breakpoints</a>