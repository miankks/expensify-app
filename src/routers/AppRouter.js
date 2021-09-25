import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import HooksHeader from "../components/newHooks/HooksHeader";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Count from "../components/newHooks/Count";
import CountApp from "../components/newHooks/CountApp";
import Notes from "../components/newHooks/Notes";
import NoteApp from "../components/newHooks/NoteApp";
import UseReducer from "../components/newHooks/UseReducer";
import BootstrapHeader from "../components/Bootstrap/BootstrapHeader";
import TypoGraphy from "../components/Bootstrap/Typography/Typography";
import TextAlignmntDisplay from "../components/Bootstrap/Typography/TextAlignmentDisplay";
import FloatFixedPosition from "../components/Bootstrap/Typography/FloatFixedPosition";
import ColorBackground from "../components/Bootstrap/Typography/ColorBackground";
import MarginPadding from "../components/Bootstrap/Typography/MarginPadding";
import SizingBorders from "../components/Bootstrap/Typography/SizingBorders";
import Buttons from "../components/Bootstrap/CSSComponents/Buttons";
import Navbars from "../components/Bootstrap/CSSComponents/Navbars";
import ListGroups from "../components/Bootstrap/CSSComponents/ListGroups";
import Forms from "../components/Bootstrap/CSSComponents/Forms";
import Weather from "../components/weatherApp/Weather";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/bootstrapheader" component={BootstrapHeader} />
        <PrivateRoute path="/buttons" component={Buttons} />
        <PrivateRoute path="/colorbackground" component={ColorBackground} />
        <PrivateRoute path="/countusestateuseeffect" component={Count} />
        <PrivateRoute path="/countusestate" component={CountApp} />
        <PrivateRoute path="/cleaninguseeffect" component={Notes} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/weatherapp" component={Weather} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute
          path="/floatfixedposition"
          component={FloatFixedPosition}
        />
        <PrivateRoute path="/forms" component={Forms} />
        <PrivateRoute path="/listgroups" component={ListGroups} />
        <PrivateRoute path="/marginpadding" component={MarginPadding} />
        <PrivateRoute path="/navbars" component={Navbars} />
        <PrivateRoute path="/newhooks" component={HooksHeader} />
        <PrivateRoute path="/noteusestate" component={NoteApp} />
        <PrivateRoute path="/notesuseReducer" component={UseReducer} />
        <PrivateRoute path="/sizingborders" component={SizingBorders} />
        <PrivateRoute path="/typography" component={TypoGraphy} />
        <PrivateRoute
          path="/textalignmndisplay"
          component={TextAlignmntDisplay}
        />
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

// <Header />
