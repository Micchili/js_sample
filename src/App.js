import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/Main'
import Kyom from './kyom'
import Header from './components/herder/Header'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Main} />
                <Route path="" exact={false} component={Kyom} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
