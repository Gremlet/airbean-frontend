import './scss/app.scss'

import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Nav from './views/Nav'
import Profile from './views/Profile'
import { useState } from 'react'
import About from './views/About'

function App() {
    let [bgColor, setBgColor] = useState('#2f2926')
    const setColor = (color) => {
        setBgColor(color)
    }
    return (
        <div className="App" style={{ backgroundColor: bgColor }}>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/nav">
                    <Nav updateColor={setColor} />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    )
}

export default App
