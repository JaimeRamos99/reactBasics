import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dishes from './components/dishes'
import Home from './components/Home'
const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dishes/:id" exact component={Dishes} />
        </Switch>
    </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
