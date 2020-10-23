import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Test from './components/pages/Test';
import Login from './components/pages/Login';
import { v4 as uuid } from 'uuid';
import { withAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from "./auth/protected-route";


// If using an API
//import axios from 'axios';


class App extends Component {

    render() {

        

        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Switch>
                            <ProtectedRoute exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/test" component={Test} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
