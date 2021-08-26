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
import UseReducer from '../components/newHooks/UseReducer';
import BootstrapHeader from '../components/Bootstrap/BootstrapHeader';
import TypoGraphy from '../components/Bootstrap/Typography/Typography';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/bootstrapheader" component={BootstrapHeader}/>
        <PrivateRoute path="/countusestateuseeffect" component={Count} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/countusestate" component={CountApp} />
        <PrivateRoute path="/cleaninguseeffect" component={Notes} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/newhooks" component={HooksHeader}/>
        <PrivateRoute path="/noteusestate" component={NoteApp} />
        <PrivateRoute path="/notesuseReducer" component={UseReducer} />
        <PrivateRoute path="/typography" component={TypoGraphy}/>
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  </Router>
  );
  
  export default AppRouter;
  
  // <Header />