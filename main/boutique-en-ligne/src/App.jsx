import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Header1 from './components/Header1';
import './styles/main.css';

function App() {
    return (
        <Router>
            <div>
                <Header1 />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;