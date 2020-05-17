import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../../constants/routes/routes";
import { AboutPage } from "../../pages/about";
import ProjectPage from "../../pages/project";
import { UnderConstruction } from "../under-construction";

export const MainRouter = () => {
  return (
    <React.Fragment>
      <Redirect from="/" to={routes.about} />
      <Switch>
        <Route path={routes.about}>
          <AboutPage />
        </Route>
        <Route path={routes.project}>
          <ProjectPage />
        </Route>
        <Route path={routes.organisations}>
          <UnderConstruction />
        </Route>
        <Route path={routes.places}>
          <UnderConstruction />
        </Route>
        <Route path={routes.contacts}>
          <UnderConstruction />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
