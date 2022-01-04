import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/homepage">
          <h1>Home</h1>
        </Link>
        <h3 className="header__title">Welcome to my portfolio</h3>

        <button className="button button--link" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});
export default connect(undefined, mapDispatchToProps)(Header);

// <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
// <NavLink to="/dashboard" activeClassName="is-active">
// <h1>Expensify</h1>
// </NavLink>

// <Link className="header__title" to="/dashboard">
//   <h3>Expensify</h3>
// </Link>
// <Link className="header__title" to="/newhooks">
//   <h3>New Hooks</h3>
// </Link>
// <Link className="header__title" to="/bootstrapheader">
//   <h3>Bootstrap</h3>
// </Link>
// <Link className="header__title" to="/synchronousexample">
//   <h3>Synchronous Calls</h3>
// </Link>
// <Link className="header__title" to="/promises">
//   <h3>Promises</h3>
// </Link>
// <Link className="header__title" to="/asyncawait">
//   <h3>Async await</h3>
// </Link>

// <Link className="header__title" to="/weatherapp">
//   <h3>Weather App</h3>
// </Link>
