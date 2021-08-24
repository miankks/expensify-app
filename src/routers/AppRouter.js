import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import HooksHeader from '../components/newHooks/HooksHeader'
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Count from '../components/newHooks/Count';
import CountApp from '../components/newHooks/CountApp';
import Notes from '../components/newHooks/Notes';
import NoteApp from '../components/newHooks/NoteApp';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/newhooks" component={HooksHeader}/>
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/countusestateuseeffect" component={Count} />
        <PrivateRoute path="/countusestate" component={CountApp} />
        <PrivateRoute path="/cleaninguseeffect" component={Notes} />
        <PrivateRoute path="/noteusestate" component={NoteApp} />
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  </Router>
  );
  
  export default AppRouter;
  
  // <Header />