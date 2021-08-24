import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <Link className="header__title" to='/newhooks'>
          <h3>New Hooks</h3>
        </Link>
        <button className="button button--link" onClick= {startLogout }>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);

// <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
// <NavLink to="/dashboard" activeClassName="is-active">
// <h1>Expensify</h1>
// </NavLink>
