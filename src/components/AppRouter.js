import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "..";
import { privateRoutes, publicRoutes } from "../routes";
import { Chat_Route, Login_Route } from "../utilities/const";
import {useAuthState} from 'react-firebase-hooks/auth'

export default function AppRouter() {
  const [user] = useAuthState(auth);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={Chat_Route} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={Login_Route} />
    </Switch>
  );
}
