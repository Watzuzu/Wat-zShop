import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import './styles/main.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;