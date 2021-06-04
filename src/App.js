import './scss/app.scss'

import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Nav from './views/Nav'
import Profile from './views/Profile'

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/nav">
                    <Nav />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
}

export default App
