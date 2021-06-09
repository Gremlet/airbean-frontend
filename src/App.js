import './scss/app.scss'

import Login from './components/Login'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Nav from './views/Nav'
import Profile from './views/Profile'
import { useState } from 'react'
import About from './views/About'
import Menu from './views/Menu'
import OrderStatus from './views/OrderStatus'
import { useSelector } from 'react-redux'

function App() {
    let [bgColor, setBgColor] = useState('#2f2926')
    const setColor = (color) => {
        setBgColor(color)
    }
    let currentUser = useSelector((state) => {
        return state.currentUser
    })
    return (
        <div className="App" style={{ backgroundColor: bgColor }}>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/nav">{currentUser.loggedIn ? <Nav updateColor={setColor} /> : <Redirect to="/" />}</Route>
                <Route path="/profile">{currentUser.loggedIn ? <Profile /> : <Redirect to="/" />}</Route>
                <Route path="/about">{currentUser.loggedIn ? <About /> : <Redirect to="/" />}</Route>
                <Route path="/menu">{currentUser.loggedIn ? <Menu /> : <Redirect to="/" />}</Route>
                <Route path="/status">{currentUser.loggedIn ? <OrderStatus /> : <Redirect to="/" />}</Route>
            </Switch>
        </div>
    )
}

export default App
