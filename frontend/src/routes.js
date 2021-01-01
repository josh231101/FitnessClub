import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/";
import Dashboard from "./pages/Dashboard/";
import Register from "./pages/Register";
import EventsPage from "./pages/EventsPage";
import Home from "./pages/Home";
import EventInfo from "./pages/EventInfo";
import UserEvents from "./pages/UserEvents";
import UserSubscriptions from "./pages/UserSubscriptions";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/event/:id" exact component={EventInfo} />
        <Route path="/events" component={EventsPage} />
        <Route path="/user/events" component={UserEvents} />
        <Route path="/user/subscriptions" component={UserSubscriptions} />
      </Switch>
    </BrowserRouter>
  );
};
