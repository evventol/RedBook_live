import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from '../../constants/routes/routes'

export const MainRouter = () => {
  return (
    <React.Fragment>  
      <Redirect from='/' to={routes.about}/>
      <Switch>
        <Route  path={routes.about}>
          <div>About</div>
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
  )
}
