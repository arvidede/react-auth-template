import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import * as ROUTES from "./constants/routes.js"
import URLNotFound from "./URLNotFound.js"
import { theme } from "../config.js"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        Object.keys(theme).forEach(color => {
            document.body.style.setProperty(`--${color}`, theme[color])
        })
    }
    render() {
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path={ROUTES.LANDING} component={<div/>} />
                        <Route component={URLNotFound} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
