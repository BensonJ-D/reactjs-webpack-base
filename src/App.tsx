import React, {Suspense, Fragment, useState} from "react";
import {Button, Input, MenuItem, Select} from "@mui/material";
import {Link, Route, Router, Switch} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <CssBaseline />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}


export default App;
