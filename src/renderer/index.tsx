import * as React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AppContainer } from "react-hot-loader"

import Auth from "./components/Auth"
import Home from "./pages/Home"
import Login from "./pages/Login"

const appRouting = (
  <AppContainer>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Auth>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  </AppContainer>
)

if (module.hot) {
  module.hot.accept()
}

render(appRouting, document.getElementById("app"))
