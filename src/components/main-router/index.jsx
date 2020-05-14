import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../../constants/routes/routes";
import { AboutPage } from "../../pages/about";

export const MainRouter = () => {
  return (
    <React.Fragment>
      <Redirect from="/" to={routes.about} />
      <Switch>
        <Route path={routes.about}>
          <AboutPage />
        </Route>
        <Route path={routes.project}>
          <div>Projects</div>
        </Route>
        <Route path={routes.organisations}>
          <div>Organisations</div>
        </Route>
        <Route path={routes.places}>
          <div>Places</div>
        </Route>
        <Route path={routes.contacts}>
          <div>Contacts</div>
        </Route>
      </Switch>
    </React.Fragment>
  );
};
